"use client"

import Image from "next/image"
import { useContractWrite, useWaitForTransaction } from "wagmi"
import { TransactionModalState } from "../../../stores/transactionModal"
import abi from "@/contracts/saleAbi"
import { useCallback, useEffect, useState } from "react"
import { Loading } from "@/components/Loading"
import { BsCheckLg } from "react-icons/bs"
import { Alert } from "@/components/Alert"

type ApproveProps = {
  state: TransactionModalState
  amount: number
  project: {
    address: string
    name: string
    symbol: string
    icon: string
  }
}

type Address = `0x${string}`

const parseErrors = (errorMessage: string) => {
  if (errorMessage.includes("CamadaSale::SALE_NOT_ENDED")) {
    return "Sale not ended"
  }

  if (errorMessage.includes("CamadaSale::PAUSED")) {
    return "Claim paused"
  }

  if (errorMessage.includes("CamadaSale::EMPTY_BALANCE")) {
    return "No balance to claim"
  }

  return "Something went wrong"
}

export function ClaimProject({ state, amount, project }: ApproveProps) {
  const [message, setMessage] = useState("")

  const claim = useContractWrite({
    address: project.address as Address,
    abi: abi,
    functionName: "claimTokens",
    onError(error) {
      setMessage(parseErrors(error.message))
    },
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

        <div className="flex w-full flex-col">
          <div className="w-full mx-auto mb-4">
            {transaction.isLoading && !message && (
              <div className="w-[30px] mx-auto bg-brandBlue-100 rounded-full p-[3px] justify-center">
                <Loading size={24} />
              </div>
            )}

            {transaction.isSuccess && !message && (
              <div className="w-[30px] mx-auto bg-brandBlue-100 rounded-full p-[3px]">
                <BsCheckLg size={24} />
              </div>
            )}

            <Alert show={!!message} message={message} isError />
          </div>

          <div>
            {transaction.isSuccess && (
              <p>You successfully claimed your rewards!</p>
            )}
          </div>

          <div className="flex flex-col gap-[10px] my-6">
            <div className="flex h-full items-start justify-between">
              <p>Project</p>
              <div>
                <div className="flex items-center gap-[10px]">
                  <Image
                    width={20}
                    height={20}
                    alt=""
                    src={project.icon}
                    className="rounded-full"
                  />
                  <p>{`${project.name} ${project.symbol}`}</p>
                </div>
              </div>
            </div>

            <div className="flex h-full items-start justify-between">
              <p>Claiming amount</p>
              <div>
                <div className="flex items-center gap-[10px]">
                  <Image
                    width={20}
                    height={20}
                    alt=""
                    src={project.icon}
                    className="rounded-full"
                  />
                  <p>{` ${amount} ${project.symbol}`}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <button
          onClick={() => claim.write()}
          type="button"
          className="p-[8px] rounded-[5px] bg-brandBlue-200 text-center w-full disabled:opacity-[0.5] disabled:cursor-not-allowed hover:bg-brandBlue-100 transition:all duration-300"
          disabled={transaction.isLoading || transaction.isSuccess}
        >
          Claim
        </button>
      </div>
    </div>
  )
}
