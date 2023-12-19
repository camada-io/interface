"use client"

import {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  useEffect,
  useState,
} from "react"
import Image from "next/image"

import { InputNumber } from "../InputNumber"
import { CardProjectType } from "@/utils/constant"
import { Loading } from "../Loading"

type Token = {
  address?: string
  icon: string
  symbol: string
}

type ChangeData = {
  token: Token | null
  amount: number
}

type Props = {
  type: CardProjectType
  tokens?: Token[]
  investHandle?: () => void
  claimHandle?: () => void
  refundHandle?: () => void
  isLoading?: boolean
  projectTokenName?: string
  projectTokenSymbol?: string
  projectTokenIcon?: string
  projectBalance?: number
  projectPrice?: number
  stableTokenBalance?: string
  claimBalance?: number
  refundBalance?: { usdc: number; usdt: number }
  availableToClaimBalance?: number
  onChangeData?: ({ token, amount }: ChangeData) => void
  isConnected: boolean
}

interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  text: string
  handle: () => void
}

export const InvestCard = ({
  type,
  tokens,
  investHandle,
  claimHandle,
  refundHandle,
  isLoading = false,
  projectTokenName,
  projectTokenSymbol,
  projectTokenIcon,
  projectBalance,
  stableTokenBalance,
  claimBalance,
  refundBalance,
  availableToClaimBalance,
  onChangeData,
  projectPrice,
  isConnected,
}: Props) => {
  const [investmentData, setInvestmentData] = useState({
    token: tokens ? tokens[0] : null,
    amount: 0,
  })

  useEffect(() => {
    if (type === CardProjectType.CLAIM) {
      onChangeData?.({
        ...investmentData,
        amount: availableToClaimBalance || 0,
      })
    }
    // eslint-disable-next-line
  }, [availableToClaimBalance, type])

  const Button = ({ text, handle, className, ...props }: ButtonProps) => {
    return (
      <button
        {...props}
        className={`self-stretch h-[55px] px-6 py-4 bg-brandBlue-200 rounded-[5px] justify-center items-center gap-2.5 inline-flex disabled:cursor-not-allowed ${className}`}
        onClick={handle}
      >
        {!isLoading ? (
          <div className="text-white text-lg font-bold">{text}</div>
        ) : (
          <Loading size={22} />
        )}
      </button>
    )
  }

  if (type === CardProjectType.INVEST)
    return (
      <div className="max-w-[590px] w-full p-6 bg-gray-650 backdrop-blur-sm rounded-[10px] flex-col justify-start items-start gap-6 inline-flex">
        <div className="self-stretch justify-between items-start lg:items-center inline-flex flex-col lg:flex-row">
          <div className="text-white text-lg font-bold leading-7">
            {projectTokenName && `Invest on ${projectTokenName}`}
          </div>
          <div className="h-6 w-full justify-between lg:justify-end items-center gap-2 flex">
            <div className="text-white text-sm font-medium leading-normal">
              Your current allocation:
            </div>

            <div className="flex gap-2">
              <div className="w-6 h-6 relative flex justify-center items-center">
                <Image
                  src={projectTokenIcon || "/images/icon_not_found.jpg"}
                  alt="symbol"
                  fill
                  className="rounded-full"
                />
              </div>
              <div className="text-white text-md font-medium leading-normal">
                {projectBalance || 0} {projectTokenSymbol}
              </div>
            </div>
          </div>
        </div>
        <InputNumber
          balance={stableTokenBalance ?? 0}
          tokens={tokens}
          onSelectToken={(token) => {
            onChangeData?.({ ...investmentData, token })
            setInvestmentData({ ...investmentData, token })
          }}
          onInputChange={(amount) => {
            onChangeData?.({ ...investmentData, amount })
            setInvestmentData({ ...investmentData, amount })
          }}
        />
        <div className="self-stretch justify-between items-start inline-flex">
          <div className="text-white text-base font-normal leading-relaxed">
            You will receive
          </div>
          <div className="h-[26px] justify-end items-center gap-2 flex">
            <div className="w-6 h-6 relative flex justify-center items-center">
              <Image
                src={projectTokenIcon || "/images/icon_not_found.jpg"}
                alt="symbol"
                fill
                className="rounded-full"
              />
            </div>
            <div className="text-white text-base font-normal leading-relaxed">
              {projectPrice
                ? Number(
                    Number(investmentData.amount / projectPrice).toFixed(2),
                  )
                : 0}{" "}
              {projectTokenSymbol}
            </div>
          </div>
        </div>
        <Button
          className="disabled:opacity-[0.5]"
          disabled={isConnected && investmentData.amount <= 0}
          text={isConnected ? "Invest now" : "Connect Wallet"}
          handle={() => investHandle?.()}
        />
      </div>
    )
  if (type === CardProjectType.CLAIM)
    return (
      <div className="max-w-[590px] w-full p-6 bg-gray-650 backdrop-blur-sm rounded-[10px] flex-col justify-start items-start gap-6 inline-flex">
        <div className="self-stretch justify-between items-start lg:items-center inline-flex flex-col lg:flex-row">
          <div className="text-white text-lg font-bold leading-7">Claim</div>
        </div>
        <InputNumber
          balance={claimBalance ?? 0}
          tokens={[
            {
              icon: projectTokenIcon || "/images/icon_not_found.jpg",
              symbol: projectTokenSymbol || "",
            },
          ]}
          balanceLabel="Your balance:"
          onInputChange={(amount) => {
            onChangeData?.({ ...investmentData, amount })
            setInvestmentData({ ...investmentData, amount })
          }}
        />
        <div className="self-stretch justify-between items-start inline-flex">
          <div className="text-white text-base font-normal leading-relaxed">
            Unclaimed Tokens
          </div>
          <div className="h-[26px] justify-end items-center gap-2 flex">
            <div className="w-6 h-6 relative flex justify-center items-center">
              <Image
                src={projectTokenIcon || "/images/icon_not_found.jpg"}
                alt="symbol"
                fill
                className="rounded-full"
              />
            </div>
            <div className="text-white text-base font-normal leading-relaxed">
              {claimBalance ? claimBalance : 0} {projectTokenSymbol}
            </div>
          </div>
        </div>
        <div className="self-stretch justify-between items-start inline-flex">
          <div className="text-white text-base font-normal leading-relaxed">
            Available tokens to claim
          </div>
          <div className="h-[26px] justify-end items-center gap-2 flex">
            <div className="w-6 h-6 relative flex justify-center items-center">
              <Image
                src={projectTokenIcon || "/images/icon_not_found.jpg"}
                alt="symbol"
                fill
                className="rounded-full"
              />
            </div>
            <div className="text-white text-base font-normal leading-relaxed">
              {availableToClaimBalance} {projectTokenSymbol}
            </div>
          </div>
        </div>

        <Button
          className="disabled:opacity-[0.5]"
          disabled={isConnected && !availableToClaimBalance}
          text={isConnected ? "Claim available tokens" : "Connect Wallet"}
          handle={() => claimHandle?.()}
        />
      </div>
    )
  if (type === CardProjectType.REFUND)
    return (
      <div className="max-w-[590px] w-full p-6 bg-gray-650 backdrop-blur-sm rounded-[10px] flex-col justify-start items-start gap-6 inline-flex">
        <div className="self-stretch justify-between items-start lg:items-center inline-flex flex-col lg:flex-row">
          <div className="text-white text-lg font-bold leading-7">Refund</div>
        </div>
        <div className="flex items-start justify-center">
          This project didn't reach the minimum required, so you can request a
          refund of your investment.
        </div>

        <div className="flex flex-col w-full gap-2">
          <div className="self-stretch justify-between items-start inline-flex">
            <div className="text-white text-base font-normal leading-relaxed">
              USDC balance
            </div>
            <div className="h-[26px] justify-end items-center gap-2 flex">
              <div className="w-6 h-6 relative flex justify-center items-center">
                <Image src="/images/usdc.svg" alt="symbol" fill />
              </div>
              <div className="text-white text-base font-normal leading-relaxed">
                {refundBalance ? refundBalance.usdc / 1e6 : 0} USDC
              </div>
            </div>
          </div>
          <div className="self-stretch justify-between items-start inline-flex">
            <div className="text-white text-base font-normal leading-relaxed">
              USDT balance
            </div>
            <div className="h-[26px] justify-end items-center gap-2 flex">
              <div className="w-6 h-6 relative flex justify-center items-center">
                <Image src="/images/usdt.svg" alt="symbol" fill />
              </div>
              <div className="text-white text-base font-normal leading-relaxed">
                {refundBalance ? refundBalance.usdt / 1e6 : 0} USDT
              </div>
            </div>
          </div>
        </div>

        <Button
          className={
            !refundBalance?.usdc && !refundBalance?.usdt && isConnected
              ? "disabled:opacity-[0.5]"
              : ""
          }
          disabled={!refundBalance?.usdc && !refundBalance?.usdt && isConnected}
          text={isConnected ? "Refund now" : "Connect Wallet"}
          handle={() => refundHandle?.()}
        />
      </div>
    )
  return null
}
