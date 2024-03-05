"use client"

import { useCallback, useEffect, useState } from "react"
import { parseEther } from "ethers"
import Image from "next/image"
import {
  useAccount,
  useContractRead,
  useContractWrite,
  useWaitForTransaction,
} from "wagmi"

import abi from "@/contracts/erc20Abi"
import { TransactionModalState } from "../../../stores/transactionModal"
import { Loading } from "@/components/Loading"
import { BsCheckLg } from "react-icons/bs"

type ApproveProps = {
  state: TransactionModalState
  amount: number
}

type Address = `0x${string}`

const tokenAdress = process.env.NEXT_PUBLIC_TOKEN_CONTRACT as Address
const contractAddres = process.env.NEXT_PUBLIC_STAKE_CONTRACT as Address

export function ApproveToken({ state, amount }: ApproveProps) {
  const { address } = useAccount()
  const [isLoading, setIsLoading] = useState(false)

  const { data: allowance } = useContractRead({
    address: tokenAdress,
    abi,
    functionName: "allowance",
    args: [address as Address, contractAddres],
    enabled: !!address,
    watch: !!address,
  })

  const approve = useContractWrite({
    address: tokenAdress,
    abi,
    functionName: "approve",
  })

  const approveMutation = () => {
    setIsLoading(true)
    approve.writeAsync({
      args: [contractAddres as Address, parseEther(amount.toString())],
    })
  }

  const transaction = useWaitForTransaction({
    hash: approve.data?.hash,
  })

  const parseNumber = (value: bigint | undefined, unit = 18) => {
    return value ? Number(value) / 10 ** unit : 0
  }

  useEffect(() => {
    if (transaction.isSuccess) {
      setIsLoading(false)
      setTimeout(() => state.dispatchStep({ type: "NEXT_STEP" }), 2000)
    }

    if (approve.isError) {
      setIsLoading(false)
    }
  }, [transaction.isSuccess, approve, state])

  useEffect(() => {
    if (approve.isSuccess) return

    if (parseNumber(allowance) >= amount) {
      state.dispatchStep({ type: "NEXT_STEP" })
    }
  }, [allowance, amount, state, approve])

  const titleState = useCallback(() => {
    if (isLoading) return "Approving"
    if (transaction.isSuccess) return "Approved"
    return "Approve contract"
  }, [isLoading, transaction.isSuccess])

  return (
    <div className="bg-gray-700 w-full rounded-[20px] flex max-[639px]:min-h-[320px]">
      <div className="flex w-full max-[639px]:hidden h-full bg-no-repeat bg-[url('/images/approve-modal-bg.webp')] bg-contain rounded-[20px]"></div>
      <div className="px-[20px] w-full max-w-[400px]  h-full text-left flex flex-col justify-center">
        <h3 className="font-bold text-[24px]">{titleState()}</h3>

        <div className="my-4">
          <div className="flex flex-col gap-[10px] my-6">
            <div className="flex h-full items-start justify-between">
              <p>Investing amount</p>
              <div>
                <div className="flex items-center gap-[10px]">
                  <Image
                    width={20}
                    height={20}
                    alt=""
                    src="/images/syscoin-logo.svg"
                    className="rounded-full"
                  />
                  <p>{` ${amount} SYS`}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex w-full justify-between gap-[16px]">
          <button
            disabled={isLoading || (!isLoading && transaction.isSuccess)}
            onClick={approveMutation}
            type="button"
            className="flex items-center justify-center p-[8px] rounded-[5px] bg-brandBlue-200 mt-6 text-center w-full font-bold text-white disabled:opacity-[0.5] disabled:cursor-not-allowed hover:bg-brandBlue-100 transition:all duration-300"
          >
            {isLoading ? (
              <Loading size={24} />
            ) : !isLoading && transaction.isSuccess ? (
              <BsCheckLg size={24} />
            ) : (
              "Approve"
            )}
          </button>
        </div>
      </div>
    </div>
  )
}
