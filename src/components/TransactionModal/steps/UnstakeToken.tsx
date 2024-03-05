"use client"

import { parseEther } from "ethers"
import { useEffect, useState } from "react"
import Image from "next/image"
import { useContractWrite, useWaitForTransaction } from "wagmi"

import abi from "@/contracts/stakeAbi"
import { TransactionModalState } from "../../../stores/transactionModal"
import { Loading } from "@/components/Loading"
import { BsCheckLg } from "react-icons/bs"

type ApproveProps = {
  state: TransactionModalState
  amount: number
}

type Address = `0x${string}`

const contractAddres = process.env.NEXT_PUBLIC_STAKE_CONTRACT as Address

export function UnstakeToken({ state, amount }: ApproveProps) {
  const [isLoading, setIsLoading] = useState(false)

  const unstake = useContractWrite({
    address: contractAddres,
    abi: abi,
    functionName: "withdraw",
  })

  const unstakeMutation = () => {
    setIsLoading(true)
    unstake.write({ args: [parseEther(amount.toString())] })
  }

  const transaction = useWaitForTransaction({
    hash: unstake.data?.hash,
  })

  useEffect(() => {
    if (unstake.isSuccess) return

    if (!amount) state.onClose()
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    if (transaction.isSuccess) {
      setIsLoading(false)
      setTimeout(() => state.onClose(), 2000)
    }

    if (unstake.isError) {
      setIsLoading(false)
    }
  }, [transaction.isSuccess, state, unstake])

  return (
    <div className="bg-gray-700 w-full rounded-[20px] flex max-[639px]:min-h-[320px]">
      <div className="flex w-full max-[639px]:hidden relative h-full bg-no-repeat bg-[url('/images/approve-modal-bg.webp')] bg-contain rounded-[20px]"></div>
      <div className="p-[20px] py-[40px] w-full max-w-[400px] max-[639px]:px-[30px] h-full text-left flex flex-col justify-center lg:justify-between">
        <h3 className="font-bold text-2xl">Unstake </h3>

        <div className="flex h-full justify-between mt-4">
          <p>Unstaking amount</p>

          <div className="flex items-start gap-[10px]">
            <Image
              width={30}
              height={30}
              alt=""
              src={"/images/syscoin-logo.svg"}
            />
            <p>{amount} SYS</p>
          </div>
        </div>

        <button
          onClick={unstakeMutation}
          type="button"
          className="flex items-center justify-center p-[8px] rounded-[5px] bg-brandBlue-200 mt-6 text-center w-full font-bold text-white disabled:opacity-[0.5] disabled:cursor-not-allowed hover:bg-brandBlue-100 transition:all duration-300"
          disabled={isLoading || (!isLoading && transaction.isSuccess)}
        >
          {isLoading ? (
            <Loading size={24} />
          ) : !isLoading && transaction.isSuccess ? (
            <BsCheckLg size={24} />
          ) : (
            "Unstake"
          )}
        </button>
      </div>
    </div>
  )
}
