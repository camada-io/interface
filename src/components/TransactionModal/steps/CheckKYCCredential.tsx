"use client"

import { useState, useEffect, useCallback } from "react"
import { useAccount, useSignMessage } from "wagmi"
import { IoMdCheckmark } from "react-icons/io"
import axios from "axios"

import { TransactionModalState } from "../../../stores/transactionModal"
import { Button } from "@/components/Button"

type Props = {
  state: TransactionModalState
}

type EventData = {
  verification_status?: string
  request_id?: string
}

// const notAllowedCountries = [
//   "ASM",
//   "AIA",
//   "ATG",
//   "BHS",
//   "BLZ",
//   "FJI",
//   "GUM",
//   "PLW",
//   "PAN",
//   "IRN",
//   "PRK",
//   "CHN",
//   "MMR",
//   "USA",
//   "CAN",
//   "GBR",
// ]

export function CheckKYCCredential({ state }: Props) {
  const { address } = useAccount()
  const [isLoading, setIsLoading] = useState(false)
  const [isVerified, setIsVerified] = useState<boolean | null>(null)
  const [signingMessage, setSigningMessage] = useState<boolean>(false)
  const [verificationUrl, setVerificationUrl] = useState<string | null>(null)
  const [requestId, setRequestId] = useState<string | null>(null)

  const {
    data: signMessageData,
    error: signMessageError,
    signMessage,
  } = useSignMessage()

  function createIframe(src: string) {
    const iframe = document.createElement("iframe")
    iframe.style.backgroundColor = "white"
    iframe.style.position = "fixed"
    iframe.id = "shuftipro-iframe"
    iframe.name = "shuftipro-iframe"
    iframe.allow = "camera"
    iframe.src = src
    iframe.style.top = "0"
    iframe.style.left = "0"
    iframe.style.bottom = "0"
    iframe.style.right = "0"
    iframe.style.margin = "0"
    iframe.style.padding = "0"
    iframe.style.overflow = "hidden"
    iframe.style.border = "none"
    iframe.style.zIndex = "1000"
    iframe.width = "100%"
    iframe.height = "100%"
    iframe.dataset.removable = "true"

    document.body.appendChild(iframe)
  }

  function removeIframe() {
    const iframe = document.getElementById("shuftipro-iframe")
    if (iframe) {
      document.body.removeChild(iframe)
    }
  }

  function signMessageWithWallet() {
    const message =
      "Welcome to Camada!\n\nClick to sign in and accept the Camada Terms of Service: https://camada.io/terms\n\nThis request will not trigger a blockchain transaction or cost any gas fees."

    setSigningMessage(true)

    signMessage({ message })
  }

  function createCredenatial() {
    setIsLoading(true)
    if (verificationUrl) createIframe(verificationUrl)
  }

  const checkEventStatus = useCallback(
    (event: { data: EventData }) => {
      const { data } = event

      if (data?.verification_status === "verification.accepted") {
        if (data.request_id === requestId) {
          setIsVerified(true)
          removeIframe()
          setIsLoading(false)

          localStorage?.setItem("validated_wallet", `${address}`)

          setTimeout(() => state.onClose(), 3000)
        }
      }
    },
    // eslint-disable-next-line
    [address, requestId],
  )

  async function handleSignedMessage(signature: string) {
    const reference = `SP_REQUEST_${Math.random()}`

    const { data } = await axios.post(
      "https://backend.camada.io/api/profile/auth",
      {
        wallet: address,
        signature,
        sp_reference: reference,
      },
    )

    if (data.verified) {
      localStorage?.setItem("validated_wallet", `${address}`)

      setSigningMessage(false)

      setTimeout(() => state.onClose(), 1500)

      return
    }

    setIsVerified(data.verified)

    if (!data.verified) {
      const regex = /\/([^/]+)$/
      const id = data.data.verification_url.match(regex)?.[1]

      setRequestId(id)
      setVerificationUrl(data.data.verification_url)
    }
  }

  useEffect(() => {
    if (signMessageData) handleSignedMessage(signMessageData)
    // eslint-disable-next-line
  }, [signMessageData])

  useEffect(() => {
    window.addEventListener("message", checkEventStatus)

    return () => {
      window.removeEventListener("message", checkEventStatus)
    }
  }, [checkEventStatus])

  const titleState = useCallback(() => {
    if (isVerified === null) return "Checking Profile"
    if (!isVerified) return "Create Profile"
    return "Profile approved"
  }, [isVerified])

  return (
    <div className="bg-gray-700 w-full rounded-[20px] flex max-[639px]:min-h-[320px]">
      <div className="flex w-full max-[639px]:hidden h-full bg-no-repeat bg-[url('/images/approve-modal-bg.webp')] bg-contain rounded-[20px]"></div>
      <div className="px-[20px] py-[20px] w-full max-w-[400px]  h-full text-left flex flex-col">
        <h3 className="font-bold text-[24px]">{titleState()}</h3>

        <div className="my-4 flex h-full">
          {isVerified === null && (
            <div className="flex mx-auto flex-col justify-between items-center h-full">
              <div className="text-md">
                To continue, sign the message in the wallet to verify your
                profile.
              </div>
              <Button
                text="sign"
                isLoading={signingMessage && !signMessageError}
                disabled={!!signMessageData}
                onClick={signMessageWithWallet}
              />
            </div>
          )}

          {isVerified !== null && !isVerified && (
            <div className="flex mx-auto flex-col justify-between items-center h-full">
              <div className="text-md">
                <p>
                  You don't have a ShuftiPro KYC credential. Click the link
                  below and go through their validation pipeline.
                </p>
                <br />
                <p>
                  If you already did that, wait while they review your
                  information.
                </p>
              </div>
              <br />
              <Button
                text="Create Credential"
                onClick={createCredenatial}
                isLoading={isLoading}
              />
            </div>
          )}

          {isVerified && (
            <div className="flex mx-auto flex-col justify-between items-center h-full">
              <div className="text-white text-md">
                Shuftipro credential created and verified.
              </div>

              {/* <div className="flex w-full justify-between gap-[16px]"> */}
              <div className="flex w-full h-full justify-center items-center">
                <IoMdCheckmark size={50} color="green" />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
