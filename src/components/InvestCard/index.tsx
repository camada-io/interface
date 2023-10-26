import Image from "next/image"
import { InputNumber } from "../InputNumber"
import { CardProjectType } from "@/utils/constant"

type Token = {
  address?: string
  icon: string
  name: string
}

type Props = {
  type: CardProjectType
  tokens?: Token[]
  investHandle?: () => void
  isLoading?: boolean
}

export const InvestCard = ({
  type,
  tokens,
  investHandle,
  isLoading = false,
}: Props) => {
  if (type === CardProjectType.INVEST)
    return (
      <div className="max-w-[590px] w-full p-6 bg-gray-650 backdrop-blur-sm rounded-[10px] flex-col justify-start items-start gap-6 inline-flex">
        <div className="self-stretch justify-between items-center inline-flex">
          <div className="text-white text-lg font-bold leading-7">
            Invest on Pegasys
          </div>
          <div className="h-6 justify-end items-center gap-2 flex">
            <div className="text-white text-sm font-medium leading-normal">
              Your current allocation:
            </div>
            <div className="w-6 h-6 relative flex justify-center items-center">
              <Image src="../images/favicon.svg" alt="symbol" fill />
            </div>
            <div className="text-white text-sm font-medium leading-normal">
              5 PSYS
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
        <button
          className="self-stretch h-[55px] px-6 py-4 bg-brandBlue-200 rounded-[5px] justify-center items-center gap-2.5 inline-flex"
          onClick={investHandle}
        >
          <div className="text-white text-lg font-bold">Invest now</div>
        </button>
      </div>
    )
  return null
}
