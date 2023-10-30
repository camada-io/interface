'use client'

import { useEffect } from 'react'
import { parseEther } from 'ethers'
import Image from 'next/image'
import {
  useAccount,
  useContractRead,
  useContractWrite,
  useWaitForTransaction,
} from 'wagmi'

import abi from '@/contracts/erc20Abi'
import { TransactionModalState } from '../../../stores/transactionModal'

type ApproveProps = {
  state: TransactionModalState
  amount: number
}

type Address = `0x${string}`

const tokenAdress = process.env.NEXT_PUBLIC_TOKEN_CONTRACT as Address
const contractAddres = process.env.NEXT_PUBLIC_STAKE_CONTRACT as Address

export function ApproveToken({ state, amount }: ApproveProps) {
  const { address } = useAccount()

  const { data: allowance } = useContractRead({
    address: tokenAdress,
    abi,
    functionName: 'allowance',
    args: [address as Address, contractAddres],
    enabled: !!address,
    watch: !!address,
  })

  const approve = useContractWrite({
    address: tokenAdress,
    abi,
    functionName: 'approve',
  })

  const transaction = useWaitForTransaction({
    hash: approve.data?.hash,
  })

  const parseNumber = (value: bigint | undefined, unit = 18) => {
    return value ? Number(value) / 10 ** unit : 0
  }

  useEffect(() => {
    if (transaction.isSuccess) {
      setTimeout(() => state.dispatchStep({ type: 'NEXT_STEP' }), 2000)
    }
  }, [transaction.isSuccess, state])

  useEffect(() => {
    if (parseNumber(allowance) >= amount) {
      state.dispatchStep({ type: 'NEXT_STEP' })
    }
  }, [allowance, amount, state])

  return (
    <div className="bg-gray-700 w-full rounded-[20px] flex max-[639px]:min-h-[320px]">
      <div className="flex w-full max-[639px]:hidden h-full bg-no-repeat bg-[url('/images/approve-modal-bg.webp')] bg-contain rounded-[20px]"></div>
      <div className="p-[20px] py-[30px] w-full max-w-[400px]  h-full text-left flex flex-col justify-center item-between">
        <h3 className="font-bold text-2xl">Approve contract</h3>

        {approve.isLoading || transaction.isLoading ? (
          <div className=" w-70 h-70 mx-auto">
            <Image
              className="animate-spin"
              width={70}
              height={70}
              alt=""
              src={'/images/loader.svg'}
            />
          </div>
        ) : transaction.isSuccess ? (
          <div className=" w-70 h-70 mx-auto">
            <Image width={70} height={70} alt="" src={'/images/check.svg'} />
          </div>
        ) : (
          <p className="my-4">
            lorem ipsum dolor sit amet consectetur adipisicing elit lorem ipsum
            dolor sit amet consectetur adipisicing elit lorem ipsum dolor sit
            amet consectetur adipisicing elit.
          </p>
        )}

        <div className="flex w-full justify-between gap-[16px]">
          <button
            onClick={state?.onClose}
            type="button"
            className="p-[8px] rounded-[5px] bg-gray-900 mt-6 text-center w-full border-[1px] border-brandBlue-100 hover:bg-whiteAlpha-100 transition:all duration-300"
          >
            Cancel
          </button>
          <button
            onClick={() =>
              approve.writeAsync({
                args: [
                  contractAddres as Address,
                  parseEther(amount.toString()),
                ],
              })
            }
            type="button"
            className="p-[8px] rounded-[5px] bg-brandBlue-200 mt-6 text-center w-full font-bold text-white disabled:opacity-[0.5] disabled:cursor-not-allowed hover:bg-brandBlue-100 transition:all duration-300"
          >
            Approve
          </button>
        </div>
      </div>
    </div>
  )
}
