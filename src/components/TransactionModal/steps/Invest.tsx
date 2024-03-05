"use client"

import { useCallback, useEffect, useState } from "react"
import Image from "next/image"
import { parseUnits } from "ethers"
import { useContractWrite, useWaitForTransaction } from "wagmi"
import { BsCheckLg } from "react-icons/bs"

import { TransactionModalState } from "../../../stores/transactionModal"
import abi from "@/contracts/saleAbi"
import { Loading } from "@/components/Loading"
import { Alert } from "@/components/Alert"
import { apolloClient } from "@/Apollo/client"

type InvestProps = {
  state: TransactionModalState
  amount: number
  project: {
    address: string
    name: string
    symbol: string
    icon: string
  }
  stableToken: {
    address: string
    icon: string
    symbol: string
  }
}

type Address = `0x${string}`

const parseErrors = (errorMessage: string) => {
  if (errorMessage.includes("CamadaSale::INVALID_AMOUNT")) {
    return "Investment value lower than required."
  }

  if (errorMessage.includes("CamadaSale::MAX_BUY_AMOUNT_EXEDED")) {
    return "Maximum investment value exceeded"
  }

  return "Something went wrong"
}

export function Invest({ state, amount, project, stableToken }: InvestProps) {
  const [message, setMessage] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const invest = useContractWrite({
    address: project.address as Address,
    abi: abi,
    functionName: "buyToken",
    onError(error) {
      setMessage(parseErrors(error.message))
    },
  })

  const investMutation = () => {
    setIsLoading(true)
    invest.write({
      args: [stableToken.address as Address, parseUnits(String(amount), 6)],
    })
  }

  const transaction = useWaitForTransaction({
    hash: invest.data?.hash,
  })

  useEffect(() => {
    if (!amount) state.onClose()
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    if (transaction.isSuccess) {
      setIsLoading(false)
      setTimeout(() => state.onClose(), 2000)
      setTimeout(() => apolloClient.refetchQueries({ include: "active" }), 5000)
    }

    if (invest.isError) {
      setIsLoading(false)
    }
  }, [transaction.isSuccess, state, invest])

  const titleState = useCallback(() => {
    if (isLoading) return "Investing"
    if (transaction.isSuccess) return "Invested"
    return "Invest"
  }, [isLoading, transaction.isSuccess])

  return (
    <div className="bg-gray-700 w-full rounded-[20px] flex max-[639px]:min-h-[320px]">
      <div className="flex w-full max-[639px]:hidden relative h-full bg-no-repeat bg-[url('/images/connect-wallet-modal-bg.webp')] bg-contain rounded-[20px]"></div>
      <div className="p-[20px] py-[40px] w-full max-w-[400px] max-[639px]:px-[30px] h-full text-left flex flex-col justify-center lg:justify-between gap-6">
        <h3 className="font-bold text-2xl">{titleState()}</h3>

        <div className="flex w-full flex-col">
          <div className="w-full mx-auto mb-4">
            <Alert show={!!message} message={message} isError />
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
              <p>Investing amount</p>
              <div>
                <div className="flex items-center gap-[10px]">
                  <Image
                    width={20}
                    height={20}
                    alt=""
                    src={stableToken.icon}
                    className="rounded-full"
                  />
                  <p>{` ${amount} ${stableToken.symbol}`}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <button
          onClick={investMutation}
          type="button"
          className="flex items-center justify-center p-[8px] rounded-[5px] bg-brandBlue-200 text-center w-full disabled:opacity-[0.5] disabled:cursor-not-allowed hover:bg-brandBlue-100 transition:all duration-300"
          disabled={isLoading || (!isLoading && transaction.isSuccess)}
        >
          {isLoading ? (
            <Loading size={24} />
          ) : !isLoading && transaction.isSuccess ? (
            <BsCheckLg size={24} />
          ) : (
            "Invest"
          )}
        </button>
      </div>
    </div>
  )
}
