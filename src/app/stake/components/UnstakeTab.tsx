'use client'

import { InputNumber } from '@/components/InputNumber'
import { useState } from 'react'
import { useAccount } from 'wagmi'
import { useStake } from '../hooks/useStake'
import { TransactionModal } from '@/components/TransactionModal'
import { CheckNetwork } from '@/components/TransactionModal/steps/CheckNetwork'
import { ConnectWallet } from '@/components/TransactionModal/steps/ConnectWallet'
import { useTransactionModal } from '@/stores/transactionModal'
import { UnstakeToken } from '@/components/TransactionModal/steps/UnstakeToken'

type StakeProps = ReturnType<typeof useStake>

export function UnstakeTab({ stakeProps }: { stakeProps: StakeProps }) {
  const { isConnected } = useAccount()

  const state = useTransactionModal()

  const [amount, setAmount] = useState(0)

  const { onOpen } = state

  const { isLoading, stakedBalance, tokenSymbol, tier, allTiers } = stakeProps

  const getNextTierMissingPoints = () => {
    const currentTier = allTiers.at(tier - 1) as number
    const nextTier = allTiers.at(tier) as number

    return nextTier - currentTier
  }

  return !isLoading ? (
    <>
      <div className="flex w-full flex-col gap-4">
        <InputNumber
          isLoading={isLoading}
          balance={stakedBalance}
          onInputChange={setAmount}
          balanceLabel="Your Balance:"
          tokens={[
            {
              address: '0x0000000000000000000000000000000000000000',
              icon: '/images/spad.png',
              name: 'spad',
            },
          ]}
        />

        {isConnected && (
          <div className="flex flex-col w-full justify-between gap-[8px]">
            <div className="flex w-full justify-between">
              <p>Current Tier</p>
              <p>Tier {!isLoading ? tier : 0}</p>
            </div>

            <div className="flex w-full justify-between">
              <p>Next tier missing points</p>
              <p>
                {!isLoading
                  ? `${getNextTierMissingPoints()} ${tokenSymbol}`
                  : 0}
              </p>
            </div>
          </div>
        )}

        <button
          type="button"
          className="flex w-full justify-center items-center gap-4 rounded-[5px] py-[16px] px-[24px]
          text-center text-[18px] font-bold text-white bg-brandBlue-200 disabled:opacity-[0.5] disabled:cursor-not-allowed hover:bg-brandBlue-100 transition:all duration-300"
          onClick={onOpen}
          disabled={!amount && isConnected}
        >
          {isConnected ? 'Unstake now' : 'Connect Wallet'}
        </button>
      </div>

      <TransactionModal>
        <ConnectWallet state={state} />
        <CheckNetwork state={state} />
        <UnstakeToken state={state} amount={amount} />
      </TransactionModal>
    </>
  ) : null
}
