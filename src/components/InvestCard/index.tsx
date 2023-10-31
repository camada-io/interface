"use client"
import Image from "next/image"
import { InputNumber } from "../InputNumber"
import { CardProjectType } from "@/utils/constant"
import { Loading } from "../Loading"

type Token = {
  address?: string
  icon: string
  name: string
}

type Props = {
  type: CardProjectType
  tokens?: Token[]
  investHandle?: () => void
  claimHandle?: () => void
  refundHandle?: () => void
  isLoading?: boolean
}

export const InvestCard = ({
  type,
  tokens,
  investHandle,
  claimHandle,
  refundHandle,
  isLoading = false,
}: Props) => {
  const Button = ({ text, handle }: { text: string; handle: () => void }) => {
    return (
      <button
        className="self-stretch h-[55px] px-6 py-4 bg-brandBlue-200 rounded-[5px] justify-center items-center gap-2.5 inline-flex"
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
            Invest on Pegasys
          </div>
          <div className="h-6 w-full justify-between lg:justify-end items-center gap-2 flex">
            <div className="text-white text-sm font-medium leading-normal">
              Your current allocation:
            </div>

            <div className="flex">
              <div className="w-6 h-6 relative flex justify-center items-center">
                <Image src="../images/favicon.svg" alt="symbol" fill />
              </div>
              <div className="text-white text-sm font-medium leading-normal">
                5 PSYS
              </div>
            </div>
          </div>
        </div>
        <InputNumber balance={"1"} tokens={tokens} />
        <div className="self-stretch justify-between items-start inline-flex">
          <div className="text-white text-base font-normal leading-relaxed">
            You will receive
          </div>
          <div className="h-[26px] justify-end items-center gap-2 flex">
            <div className="w-6 h-6 relative flex justify-center items-center">
              <Image src="../images/favicon.svg" alt="symbol" fill />
            </div>
            <div className="text-white text-base font-normal leading-relaxed">
              10 PSYS
            </div>
          </div>
        </div>
        <Button text={"Invest now"} handle={() => investHandle} />
      </div>
    )
  if (type === CardProjectType.CLAIM)
    return (
      <div className="max-w-[590px] w-full p-6 bg-gray-650 backdrop-blur-sm rounded-[10px] flex-col justify-start items-start gap-6 inline-flex">
        <div className="self-stretch justify-between items-start lg:items-center inline-flex flex-col lg:flex-row">
          <div className="text-white text-lg font-bold leading-7">Claim</div>
        </div>
        <InputNumber balance={"1"} balanceLabel="Your balance:" />
        <div className="self-stretch justify-between items-start inline-flex">
          <div className="text-white text-base font-normal leading-relaxed">
            You will receive
          </div>
          <div className="h-[26px] justify-end items-center gap-2 flex">
            <div className="w-6 h-6 relative flex justify-center items-center">
              <Image src="../images/favicon.svg" alt="symbol" fill />
            </div>
            <div className="text-white text-base font-normal leading-relaxed">
              10 PSYS
            </div>
          </div>
        </div>
        <Button text={"Claim now"} handle={() => claimHandle} />
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

        <div className="self-stretch justify-between items-start inline-flex">
          <div className="text-white text-base font-normal leading-relaxed">
            Your balance
          </div>
          <div className="h-[26px] justify-end items-center gap-2 flex">
            <div className="w-6 h-6 relative flex justify-center items-center">
              <Image src="/images/usdt.svg" alt="symbol" fill />
            </div>
            <div className="text-white text-base font-normal leading-relaxed">
              10 USDT
            </div>
          </div>
        </div>
        <Button text={"Refund now"} handle={() => refundHandle} />
      </div>
    )
  return null
}