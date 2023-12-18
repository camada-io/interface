"use client"

import { useCallback, useEffect, useState } from "react"
import Image from "next/image"
import { BsCheckLg } from "react-icons/bs"
import { useContractWrite, useWaitForTransaction } from "wagmi"

import { TransactionModalState } from "../../../stores/transactionModal"
import abi from "@/contracts/saleAbi"
import { Loading } from "@/components/Loading"
import { Alert } from "@/components/Alert"

type ApproveProps = {
  state: TransactionModalState
  refundAmount: { usdc?: number; usdt?: number }
  saleAddress: string
}

type Address = `0x${string}`

const parseErrors = (errorMessage: string) => {
  if (errorMessage.includes("CamadaSale::NOT_QUALIFIED_FOR_FULL_REFUND")) {
    return "Not qualified for full refund."
  }

  return "Something went wrong"
}

export function Refund({ state, refundAmount, saleAddress }: ApproveProps) {
  const [message, setMessage] = useState("")

  const refund = useContractWrite({
    address: saleAddress as Address,
    abi: abi,
    functionName: "refundUser",
    onError(error) {
      setMessage(parseErrors(error.message))
    },
  })

  const transaction = useWaitForTransaction({
    hash: refund.data?.hash,
  })

  useEffect(() => {
    if (transaction.isSuccess) {
      setTimeout(() => state.onClose(), 2000)
    }
  }, [transaction.isSuccess, state])

  useEffect(() => {
    if (!refundAmount.usdc && !refundAmount.usdt) {
      state.onClose()
    }
    // eslint-disable-next-line
  }, [])

  const titleState = useCallback(() => {
    if (transaction.isLoading) return "Refunding"
    if (transaction.isSuccess) return "Refunded"
    return "Refund"
  }, [transaction.isLoading, transaction.isSuccess])

  return (
    <div className="bg-gray-700 w-full rounded-[20px] flex max-[639px]:min-h-[320px]">
      <div className="flex w-full max-[639px]:hidden relative h-full bg-no-repeat bg-[url('/images/connect-wallet-modal-bg.webp')] bg-contain rounded-[20px]"></div>
      <div className="p-[20px] py-[40px] w-full max-w-[400px] max-[639px]:px-[30px] h-full text-left flex flex-col justify-center lg:justify-between">
        <h3 className="font-bold text-2xl">{titleState()}</h3>

        <div className="flex h-full items-start">
          <div className="flex w-full justify-between mt-4">
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
                  <p>The amount is avaiable in your wallet!</p>
                )}
              </div>

              {!!refundAmount?.usdc && (
                <div className="flex h-full items-start justify-between">
                  <p>USDC amount</p>
                  <div>
                    <div className="flex items-center gap-[10px]">
                      <Image
                        width={20}
                        height={20}
                        alt=""
                        src="/images/usdc.svg"
                        className="rounded-full"
                      />
                      <p>{` ${refundAmount.usdc / 1e6} USDC`}</p>
                    </div>
                  </div>
                </div>
              )}

              {!!refundAmount?.usdt && (
                <div className="flex h-full items-start justify-between">
                  <p>USDt amount</p>
                  <div>
                    <div className="flex items-center gap-[10px]">
                      <Image
                        width={20}
                        height={20}
                        alt=""
                        src="/images/usdt.svg"
                        className="rounded-full"
                      />
                      <p>{` ${refundAmount.usdt / 1e6} USDT`}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <button
          onClick={() => refund.write()}
          type="button"
          className="p-[8px] rounded-[5px] bg-brandBlue-200 text-center w-full disabled:opacity-[0.5] disabled:cursor-not-allowed hover:bg-brandBlue-100 transition:all duration-300"
          disabled={transaction.isLoading || transaction.isSuccess}
        >
          Refund
        </button>
      </div>
    </div>
  )
}
