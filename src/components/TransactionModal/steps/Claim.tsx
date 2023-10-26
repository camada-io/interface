"use client"

import Image from "next/image"
import { useContractWrite, useWaitForTransaction } from "wagmi"
import { TransactionModalState } from "../../../stores/transactionModal"
import abi from "@/contracts/stakeAbi"
import { useEffect } from "react"

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
  }, [amount, state])

  useEffect(() => {
    if (transaction.isSuccess) {
      setTimeout(() => state.onClose(), 2000)
    }
  }, [transaction.isSuccess, state])

  return (
    <div className="bg-gray-700 w-full rounded-[20px] flex">
      <div className="flex sm:w-full max-[639px]:hidden relative h-full bg-no-repeat bg-[url('/images/approve-modal-bg.webp')] bg-contain rounded-[20px]"></div>
      <div className="p-[20px] py-[40px] sm:w-full max-w-[400px] max-[639px]:px-[30px] h-full text-left flex flex-col justify-center lg:justify-between">
        <h3 className="font-bold text-2xl">Claim </h3>

        <div className="flex h-full items-start">
          <div className="flex w-full justify-between mt-4">
            {transaction.isSuccess ? (
              <p>You staked successfully on the project!</p>
            ) : (
              <>
                <p>Claim amount</p>

                <div className="flex items-center gap-[10px]">
                  <Image
                    width={20}
                    height={20}
                    alt=""
                    src={"/images/spad.png"}
                  />
                  <p>{amount} sPAD</p>
                </div>
              </>
            )}
          </div>
        </div>

        {claim.isError && claim.error?.message && (
          <p className="mt-4 text-red-500">{claim.error.message}</p>
        )}

        {claim.isLoading || transaction.isLoading ? (
          <div className=" w-70 h-70 mx-auto">
            <Image
              className="animate-spin"
              width={70}
              height={70}
              alt=""
              src={"/images/loader.svg"}
            />
          </div>
        ) : transaction.isSuccess ? (
          <div className="w-70 h-70 mx-auto">
            <Image width={70} height={70} alt="" src={"/images/check.svg"} />
          </div>
        ) : null}

        <button
          onClick={() => claim.write()}
          type="button"
          className="p-[8px] rounded-[5px] bg-brandBlue-200 mt-6 text-center w-full disabled:opacity-[0.5] disabled:cursor-not-allowed hover:bg-brandBlue-100 transition:all duration-300"
          disabled={claim.isLoading}
        >
          Claim
        </button>
      </div>
    </div>
  )
}
