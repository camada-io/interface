'use client'

import { InputNumber } from '@/components/InputNumber'
import { useState } from 'react'
import { useAccount } from 'wagmi'
import { useStake } from '../hooks/useStake'
import { useTransactionModal } from '@/stores/transactionModal'
import { TransactionModal } from '@/components/TransactionModal'
import { CheckNetwork } from '@/components/TransactionModal/steps/CheckNetwork'
import { ConnectWallet } from '@/components/TransactionModal/steps/ConnectWallet'
import { Claim } from '@/components/TransactionModal/steps/Claim'

type StakeProps = ReturnType<typeof useStake>

export function ClaimTab({ stakeProps }: { stakeProps: StakeProps }) {
  const { isConnected } = useAccount()

  const state = useTransactionModal()

  const [amount, setAmount] = useState(0)

  const { onOpen } = state

  const { isLoading, earnedBalance } = stakeProps

  return !isLoading ? (
    <>
      <div className="flex w-full flex-col gap-4">
        <InputNumber
          isLoading={isLoading}
          balance={earnedBalance}
          onInputChange={setAmount}
          balanceLabel="Unclaimed rewards:"
          disabled
          tokens={[
            {
              address: '0x0000000000000000000000000000000000000000',
              icon: '/images/spad.png',
              name: 'spad',
            },
          ]}
        />

        <button
          type="button"
          disabled={!amount && isConnected}
          className="flex w-full justify-center items-center gap-4 rounded-[5px] py-[16px] px-[24px]
          text-center text-[18px] font-bold text-white bg-brandBlue-200 disabled:opacity-[0.5] disabled:cursor-not-allowed hover:bg-brandBlue-100 transition:all duration-300"
          onClick={onOpen}
        >
          {isConnected ? 'Claim now' : 'Connect Wallet'}
        </button>
      </div>

      <TransactionModal>
        <ConnectWallet state={state} />
        <CheckNetwork state={state} />
        <Claim state={state} amount={amount} />
      </TransactionModal>
    </>
  ) : null
}
