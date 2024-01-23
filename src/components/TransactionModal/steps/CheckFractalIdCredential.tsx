"use client"

import { useAccount } from "wagmi"
import { TransactionModalState } from "../../../stores/transactionModal"
import { idOS } from "@idos-network/idos-sdk"
import { ethers } from "ethers"
import { useRef, useState, useEffect, useCallback } from "react"
import { Button } from "@/components/Button"
import { attest } from "@/utils/attest"

type Props = {
  state: TransactionModalState
  isWhitelisted: boolean | undefined
}

type Credential = {
  credential_type: string
  human_id: string
  id: string
  issuer: string
  original_id: string
  credential_level: string
  content: string
  credential_status:
    | "pending"
    | "contacted"
    | "approved"
    | "rejected"
    | "expired"
}

type CrendentialContent = {
  credentialSubject: {
    residential_address_country: string
  }
}

const notAllowedCountries = [
  "ASM",
  "AIA",
  "ATG",
  "BHS",
  "BLZ",
  "FJI",
  "GUM",
  "PLW",
  "PAN",
  "IRN",
  "PRK",
  "CHN",
  "MMR",
  "USA",
  "CAN",
  "GBR",
]

export function CheckFractalIdCredential({ state, isWhitelisted }: Props) {
  const { address } = useAccount()
  const [idos, setIdos] = useState<idOS | null>(null)
  const idosContainerRef = useRef(null)
  const [hasFractalProfile, setHasFractalProfile] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [credentialId, setCredentialId] = useState<string | null>(null)
  const [isOnError, setIsOnError] = useState(false)

  const goToFractalId = () => {
    window.open("https://app.fractal.id/login", "_blank")
  }

  const checkCredentials = useCallback(async (address: string) => {
    try {
      setIsOnError(false)
      setIsLoading(true)

      const _idos = await idOS.init({ container: "#idos-container" })

      const provider = new ethers.BrowserProvider((window as any)?.ethereum)
      await provider.send("eth_requestAccounts", [])
      const signer = await provider.getSigner()
      await _idos.setSigner("EVM", signer)

      const hasProfile = await _idos.hasProfile(address)

      setIdos(_idos)

      setHasFractalProfile(hasProfile)

      const credentials = await _idos.data.list("credentials")

      setIsLoading(false)

      const credential = credentials.find(
        (credential) => credential.credential_level === "basic",
      )

      if (credential) setCredentialId(credential.id as string)
    } catch (error) {
      setIsOnError(true)
    }
  }, [])

  const getCrendential = useCallback(async () => {
    if (credentialId && idos) {
      setIsLoading(true)

      const credential = await idos.data.get<Credential>(
        "credentials",
        credentialId,
      )

      if (credential) {
        const content = JSON.parse(credential.content) as CrendentialContent
        const isAllowed = !notAllowedCountries.includes(
          content.credentialSubject.residential_address_country,
        )

        if (isAllowed && credential.credential_status === "approved") {
          if (!isWhitelisted) {
            await attest(address as string)
          }

          state.dispatchStep({ type: "NEXT_STEP" })
        }
      }
    }

    // eslint-disable-next-line
  }, [credentialId, idos])

  useEffect(() => {
    if (address && idosContainerRef.current && isLoading) {
      if (isOnError) {
        setIsOnError(false)
        setIsLoading(true)
      }

      checkCredentials(address)
    }

    // eslint-disable-next-line
  }, [address])

  const titleState = useCallback(() => {
    if (!credentialId) return "Checking Fractal ID Profile"
    return "Checking Credentials"
  }, [credentialId])

  return (
    <div className="bg-gray-700 w-full rounded-[20px] flex max-[639px]:min-h-[320px]">
      <div className="flex w-full max-[639px]:hidden h-full bg-no-repeat bg-[url('/images/approve-modal-bg.webp')] bg-contain rounded-[20px]"></div>
      <div className="px-[20px] py-[20px] w-full max-w-[400px]  h-full text-left flex flex-col">
        <h3 className="font-bold text-[24px]">{titleState()}</h3>

        <div className="my-4 flex h-full">
          {isLoading && !credentialId && (
            <div className="flex mx-auto flex-col justify-between items-center h-full">
              <div className="text-md">
                To continue, authorize all requests requested by the wallet.
              </div>
              <Button
                text="Retry"
                isLoading={isLoading && !isOnError}
                onClick={() => checkCredentials(address as string)}
              />
            </div>
          )}

          {!hasFractalProfile && !isLoading && (
            <div className="flex mx-auto flex-col justify-between items-center h-full">
              <div className="text-white text-md">
                You don't have a Fractal ID Credencial. Please create one, add
                basic credentials and give idOS access to your wallet.
              </div>

              <div className="flex w-full justify-between gap-[16px]">
                <button
                  onClick={goToFractalId}
                  type="button"
                  className="p-[8px] rounded-[5px] bg-brandBlue-200 mt-6 text-center w-full font-bold text-white disabled:opacity-[0.5] disabled:cursor-not-allowed hover:bg-brandBlue-100 transition:all duration-300"
                >
                  Create Fractal ID Profile
                </button>
              </div>
            </div>
          )}

          <div className={!credentialId ? "hidden" : "flex flex-col"}>
            <div className="flex mx-auto flex-col justify-between items-center h-full">
              <div className="text-md">
                To continue, authorize us to read your Fractal ID credentials to
                find out if you are able to invest in this project.
              </div>
              <div ref={idosContainerRef} id="idos-container"></div>
              <Button
                onClick={getCrendential}
                text="Authorize"
                isLoading={isLoading}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
