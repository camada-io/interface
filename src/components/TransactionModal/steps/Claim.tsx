"use client"

import { useCallback, useEffect } from "react"
import Image from "next/image"
import { useContractWrite, useWaitForTransaction } from "wagmi"
import { BsCheckLg } from "react-icons/bs"

import { TransactionModalState } from "../../../stores/transactionModal"
import abi from "@/contracts/stakeAbi"
import { Loading } from "@/components/Loading"

type ApproveProps = {
  state: TransactionModalState
  amount: number
}

type Address = `0x${string}`

const contractAddres = process.env.NEXT_PUBLIC_STAKE_CONTRACT as Address

export function Claim({ state, amount }: ApproveProps) {
  const claim = useContractWrite({
    address: contractAddres,
    abi: abi,
    functionName: "getReward",
  })

  const transaction = useWaitForTransaction({
    hash: claim.data?.hash,
  })

  useEffect(() => {
    if (!amount) state.onClose()
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    if (transaction.isSuccess) {
      setTimeout(() => state.onClose(), 2000)
    }
  }, [transaction.isSuccess, state])

  const titleState = useCallback(() => {
    if (transaction.isLoading) return "Claiming"
    if (transaction.isSuccess) return "Claimed"
    return "Claim"
  }, [transaction.isLoading, transaction.isSuccess])

  return (
    <div className="bg-gray-700 w-full rounded-[20px] flex max-[639px]:min-h-[320px]">
      <div className="flex w-full max-[639px]:hidden relative h-full bg-no-repeat bg-[url('/images/connect-wallet-modal-bg.webp')] bg-contain rounded-[20px]"></div>
      <div className="p-[20px] py-[40px] w-full max-w-[400px] max-[639px]:px-[30px] h-full text-left flex flex-col justify-center lg:justify-between">
        <h3 className="font-bold text-2xl">{titleState()}</h3>

        <div className="flex h-full items-start">
          <div className="flex w-full justify-between mt-4">
            <div className="flex w-full flex-col">
              <div className="w-[30px] h-[30px] mx-auto">
                {transaction.isLoading && (
                  <div className="flex mx-auto bg-brandBlue-100 rounded-full p-[3px] justify-center">
                    <Loading size={24} />
                  </div>
                )}

                {transaction.isSuccess && (
                  <div className="flex mx-auto bg-brandBlue-100 rounded-full p-[3px]">
                    <BsCheckLg size={24} />
                  </div>
                )}
              </div>

              <div>
                {transaction.isSuccess && (
                  <p>You successfully claimed your rewards!</p>
                )}
              </div>

              <div className="flex h-full items-start justify-between">
                <p>Claiming amount</p>
                <div>
                  <div className="flex items-center gap-[10px]">
                    <Image
                      width={20}
                      height={20}
                      alt=""
                      src={"/images/syscoin-logo.svg"}
                      className="rounded-full"
                    />
                    <p>{amount} SYS</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <button
          onClick={() => claim.write()}
          type="button"
          className="p-[8px] rounded-[5px] bg-brandBlue-200 text-center w-full disabled:opacity-[0.5] disabled:cursor-not-allowed hover:bg-brandBlue-100 transition:all duration-300"
          disabled={claim.isLoading}
        >
          Claim
        </button>
      </div>
    </div>
  )
}
