'use client'

import { parseEther } from 'ethers'
import Image from 'next/image'
import { useEffect } from 'react'
import { useContractWrite, useWaitForTransaction } from 'wagmi'

import { TransactionModalState } from '../../../stores/transactionModal'
import abi from '@/contracts/stakeAbi'

type ApproveProps = {
  state: TransactionModalState
  amount: number
}

type Address = `0x${string}`

const contractAddres = process.env.NEXT_PUBLIC_STAKE_CONTRACT as Address

export function StakeToken({ state, amount }: ApproveProps) {
  const stake = useContractWrite({
    address: contractAddres,
    abi: abi,
    functionName: 'stake',
  })

  const transaction = useWaitForTransaction({
    hash: stake.data?.hash,
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

  return (
    <div className="bg-gray-700 w-full rounded-[20px] flex max-[639px]:min-h-[320px]">
      <div className="flex w-full max-[639px]:hidden relative h-full bg-no-repeat bg-[url('/images/approve-modal-bg.webp')] bg-contain rounded-[20px]"></div>
      <div className="p-[20px] py-[40px] w-full max-w-[400px] max-[639px]:px-[30px] h-full text-left flex flex-col justify-center lg:justify-between">
        <h3 className="font-bold text-2xl">Stake </h3>

        <div className="flex h-full items-start">
          <div className="flex w-full justify-between mt-4">
            {transaction.isSuccess ? (
              <p>You staked successfully on the project!</p>
            ) : (
              <>
                <p>Staking amount</p>

                <div className="flex items-center gap-[10px]">
                  <Image
                    width={20}
                    height={20}
                    alt=""
                    src={'/images/spad.png'}
                  />
                  <p>{amount} sPAD</p>
                </div>
              </>
            )}
          </div>
        </div>

        {stake.isLoading || transaction.isLoading ? (
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
          <div className="w-70 h-70 mx-auto">
            <Image width={70} height={70} alt="" src={'/images/check.svg'} />
          </div>
        ) : null}

        <button
          onClick={() => stake.write({ args: [parseEther(amount.toString())] })}
          type="button"
          className="p-[8px] rounded-[5px] bg-brandBlue-200 mt-6 text-center w-full disabled:opacity-[0.5] disabled:cursor-not-allowed hover:bg-brandBlue-100 transition:all duration-300"
          disabled={stake.isLoading}
        >
          Stake
        </button>
      </div>
    </div>
  )
}
