"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Connector, useAccount, useConnect } from "wagmi"
import { TransactionModalState } from "../../../stores/transactionModal"

export function ConnectWallet({ state }: { state: TransactionModalState }) {
  const { connectors, connectAsync } = useConnect()
  const { isConnected } = useAccount()
  const [isPali, setIsPali] = useState(false)

  const metamask = connectors.find((c) => c.id === "metaMask")
  const injected = connectors.find((c) => c.id === "injected")
  const walletConnect = connectors.find((c) => c.id === "walletConnect")

  const connect = async (connector: Connector<any, any> | undefined) => {
    try {
      await connectAsync({ connector })
    } catch (error) {
      console.error(error)
    }
  }

  const getPaliConnector = async () => {
    const provider = await injected?.getProvider()

    if (provider && provider?.wallet === "pali-v2") {
      setIsPali(true)
    }
  }

  useEffect(() => {
    if (isConnected && state?.dispatchStep) {
      state.dispatchStep({ type: "NEXT_STEP" })
    }

    getPaliConnector()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isConnected, state])

  return (
    <div className="bg-gray-700 w-full rounded-[20px] flex max-[639px]:min-h-[320px]">
      <div className="flex w-full max-[639px]:hidden relative h-full bg-no-repeat bg-[url('/images/connect-wallet-modal-bg.webp')] bg-contain rounded-[20px]"></div>
      <div className="p-[20px] py-[30px] w-full max-w-[400px] h-full text-left flex flex-col justify-center ">
        <h3 className="font-bold text-2xl">Connect Wallet</h3>

        <button
          type="button"
          disabled={!(isPali ? injected : metamask)?.ready}
          className="p-[8px] rounded-[5px] bg-gray-900 flex items-center mt-6 gap-4 w-full border-[1px] border-gray-600 hover:bg-brandBlue-200 transition:all duration-300"
          onClick={() => connect(isPali ? injected : metamask)}
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
          onClick={() => connect(walletConnect)}
        >
          <Image
            src={"/images/wallet-connect.png"}
            width={30}
            height={30}
            alt=""
          />
          <p>Wallet Connect</p>
        </button>

        <button
          onClick={state?.onClose}
          type="button"
          className="p-[8px] rounded-[5px] bg-gray-900 mt-6 text-center w-full border-[1px] border-brandBlue-100 hover:bg-whiteAlpha-100"
        >
          Cancel
        </button>
      </div>
    </div>
  )
}
