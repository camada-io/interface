"use client"

import { InputNumber } from "@/components/InputNumber"
import { useCallback, useEffect, useState } from "react"
import { useAccount, useNetwork } from "wagmi"
import { useStake } from "../hooks/useStake"
import { useTransactionModal } from "@/stores/transactionModal"
import { TransactionModal } from "@/components/TransactionModal"
import { ApproveToken } from "@/components/TransactionModal/steps/ApproveToken"
import { CheckNetwork } from "@/components/TransactionModal/steps/CheckNetwork"
import { ConnectWallet } from "@/components/TransactionModal/steps/ConnectWallet"
import { StakeToken } from "@/components/TransactionModal/steps/StakeToken"

type StakeProps = ReturnType<typeof useStake>

const networkId = process.env.NEXT_PUBLIC_CHAIN_ID as string

export function StakeTab({ stakeProps }: { stakeProps: StakeProps }) {
  const { isConnected } = useAccount()
  const { chain } = useNetwork()
  const [amount, setAmount] = useState(0)
  const [isClient, setIsClient] = useState(false)

  const state = useTransactionModal()

  const { onOpen } = state

  const {
    isLoading,
    tokenBalance,
    tokenSymbol,
    tier,
    allTiers,
    stakedBalance,
    isWhitelisted,
  } = stakeProps

  const getNextTierMissingPoints = useCallback(() => {
    if (!tier && !stakedBalance) return 0

    const nextTier = allTiers.at(tier) as number

    return nextTier - stakedBalance
  }, [tier, stakedBalance, allTiers])

  useEffect(() => {
    setIsClient(true)
  }, [])

  const defautButtonText = useCallback(() => {
    return +networkId === chain?.id ? "Stake" : "Unsuported Network"
  }, [chain])()

  return (
    <>
      <div className="flex w-full flex-col gap-4">
        <InputNumber
          isLoading={isLoading}
          balance={tokenBalance}
          onInputChange={setAmount}
          balanceLabel="Your Balance:"
          tokens={[
            {
              icon: "/images/syscoin-logo.svg",
              symbol: "SYS",
            },
          ]}
        />

        {isConnected && !isLoading && (
          <div className="flex flex-col w-full justify-between gap-[8px]">
            <div className="flex w-full justify-between">
              <p>Current Tier</p>
              <p>Tier {tier}</p>
            </div>

            <div className="flex w-full justify-between">
              <p>Next tier missing points</p>
              <p>
                {!isLoading && getNextTierMissingPoints()
                  ? `${getNextTierMissingPoints().toFixed()} ${tokenSymbol}`
                  : 0}
              </p>
            </div>
          </div>
        )}

        <button
          type="button"
          disabled={!isWhitelisted || (!amount && isConnected)}
          className="flex w-full justify-center items-center gap-4 rounded-[5px] py-[16px] px-[24px]
          text-center text-[18px] font-bold text-white bg-brandBlue-200 disabled:opacity-[0.5] disabled:cursor-not-allowed hover:bg-brandBlue-100 transition:all duration-300"
          onClick={onOpen}
        >
          {isClient
            ? isConnected
              ? defautButtonText
              : "Connect Wallet"
            : defautButtonText}
        </button>
      </div>

      <TransactionModal>
        <ConnectWallet state={state} />
        <CheckNetwork state={state} />
        <ApproveToken state={state} amount={amount} />
        <StakeToken state={state} amount={amount} />
      </TransactionModal>
    </>
  )
}
