"use client"

import { useEffect, useMemo, useState } from "react"
import Image from "next/image"
import { useAccount, useConnect } from "wagmi"
import { TransactionModalState } from "../../../stores/transactionModal"

const appEnv = process.env.NEXT_PUBLIC_APP_ENV as "production" | "development"

export function ConnectWallet({ state }: { state: TransactionModalState }) {
  const { connectors, connect } = useConnect()
  const { isConnected, connector } = useAccount()
  const [isPali, setIsPali] = useState(false)

  const metamask = connectors.find((c) => c.id === "metaMask")
  const injected = connectors.find((c) => c.id === "injected")
  const walletConnect = connectors.find((c) => c.id === "walletConnect")

  const networkId = useMemo(
    () => ({
      development: 57000,
      production: 570,
    }),
    [],
  )

  const getPaliConnector = async () => {
    const provider = await injected?.getProvider()

    if (provider && provider?.wallet === "pali-v2") {
      setIsPali(true)
    }
  }

  useEffect(() => {
    getPaliConnector()
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    ;(async () => {
      const chainId = await connector?.getChainId()

      if (isConnected && chainId && networkId[appEnv] === chainId) {
        if (state.maxStep > 2 && state?.setStep) {
          return state.setStep(2)
        }

        return setTimeout(() => state.onClose(), 2000)
      }

      if (isConnected) {
        state.dispatchStep({ type: "NEXT_STEP" })
      }
    })()

    // eslint-disable-next-line
  }, [isConnected])

  return (
    <div className="bg-gray-700 w-full rounded-[20px] flex max-[639px]:min-h-[320px]">
      <div className="flex w-full max-[639px]:hidden relative h-full bg-no-repeat bg-[url('/images/connect-wallet-modal-bg.webp')] bg-contain rounded-[20px]"></div>
      <div className="p-[20px] py-[30px] max-w-[400px] max-[639px]:px-[30px] h-full text-left flex w-full flex-col ">
        <h3 className="font-bold text-2xl">Connect Wallet</h3>
        <p className="mt-4 text-gray-300 text-sm">
          By connecting a wallet, you agree to the CAMADA{" "}
          <a href="#" className="underline">
            Terms of Use
          </a>
          .
        </p>

        <button
          type="button"
          disabled={!(isPali ? injected : metamask)?.ready}
          className="p-[8px] rounded-[5px] bg-gray-900 flex items-center mt-6 gap-4 w-full border-[1px] border-gray-600 hover:bg-brandBlue-200 transition:all duration-300"
          onClick={() => connect({ connector: isPali ? injected : metamask })}
        >
          <Image
            src={`/images/${isPali ? "pali" : "metamask"}.png`}
            width={30}
            height={30}
            alt=""
          />
          <p>{isPali ? "Pali Wallet" : "Metamask"}</p>
        </button>

        <button
          type="button"
          className="p-[8px] rounded-[5px] bg-gray-900 flex items-center gap-4 mt-2 w-full border-[1px] border-gray-600 hover:bg-brandBlue-200 transition:all duration-300"
          onClick={() => connect({ connector: walletConnect })}
        >
          <Image
            src={"/images/wallet-connect.png"}
            width={30}
            height={30}
            alt=""
          />
          <p>Wallet Connect</p>
        </button>
      </div>
    </div>
  )
}
