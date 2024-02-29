"use client"

import { useEffect, useMemo } from "react"
import Image from "next/image"
import { useAccount } from "wagmi"

import { TransactionModalState } from "../../../stores/transactionModal"

const appEnv = process.env.NEXT_PUBLIC_APP_ENV as "production" | "development"

export function CheckNetwork({ state }: { state: TransactionModalState }) {
  const { connector } = useAccount()

  const networkId = useMemo(
    () => ({
      development: 57000,
      production: 570,
    }),
    [],
  )

  const chainName = {
    57000: "Rollux Tanembaum",
    570: "Rollux",
  }[networkId[appEnv]] as string

  const switchNetwork = async () => {
    if (connector?.switchChain) {
      await connector.switchChain(networkId[appEnv])

      if (state.maxStep === 2) {
        return setTimeout(() => state.onClose(), 2000)
      }

      state.dispatchStep({ type: "NEXT_STEP" })
    }
  }

  useEffect(() => {
    ;(async () => {
      const chainId = await connector?.getChainId()

      if (chainId && networkId[appEnv] === chainId) {
        state.dispatchStep({ type: "NEXT_STEP" })
      }
    })()
  }, [connector, state, networkId])

  return (
    <div className="bg-gray-700 w-full rounded-[20px] flex">
      <div className="flex sm:w-full max-[639px]:hidden relative h-full bg-no-repeat bg-[url('/images/approve-modal-bg.webp')] bg-contain rounded-[20px]"></div>
      <div className="p-[20px] py-[30px] sm:w-full max-w-[400px] max-[639px]:px-[30px] h-full text-left flex flex-col justify-center ">
        <h3 className="font-bold text-2xl">Network Check</h3>

        <p className="mt-10">You need to be connected to:</p>

        <div
          className="p-[8px] rounded-[5px] bg-gray-900 flex items-center gap-4 mt-2 w-full border-[1px]
            border-gray-600 transition:all duration-300"
        >
          <Image
            src={
              "https://raw.githubusercontent.com/SYS-Labs/brand-kits/9ba824f0cabfa8bbc11dfadad879efcdf34b3dc2/rollux/SVG/rollux_logo.svg"
            }
            width={30}
            height={30}
            alt=""
          />
          <p>{chainName}</p>
        </div>

        <p className="mt-2 text-gray-300 text-sm">
          Add the network to your wallet and/or confirm the network change.
        </p>

        <div className="flex w-full justify-between gap-[8px]">
          <button
            onClick={switchNetwork}
            type="button"
            className="p-[8px] rounded-[5px] mt-6 text-center w-full bg-brandBlue-200"
          >
            Switch
          </button>
        </div>
      </div>
    </div>
  )
}
