import Image from "next/image"
import { Tag, TagProject } from "../Tag"
import { BadgeTime } from "../BadgeTime"

type Data = {
  id: string
  tokenName: string
  tokenSymbol: string
  icon: string
  banner: string
  status: string
  saleProgress: number
  totalRaised: number
  categories: string[]
  saleAmountUsd: number
  description: string
}

export const Card = ({
  defaultImage = "/images/backgroundCardDefault.svg",
  typeBadge,
  maxWidth,
  height,
  data,
}: {
  defaultImage?: string
  height?: string
  maxWidth?: string
  typeBadge: number
  data?: Data
}) => {
  const Badge = () => {
    switch (typeBadge) {
      case 1:
        return (
          <>
            <Tag type={1} />
            <TagProject type={3} />
            <TagProject type={2} />
          </>
        )

      case 2:
        return (
          <>
            <BadgeTime type={3} />
          </>
        )

      default:
        return (
          <>
            <BadgeTime type={3} />
          </>
        )
    }
  }

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value)
  }

  return (
    <div
      className={`flex flex-col max-w-[${maxWidth}] w-full h-[${height}] bg-no-repeat pt-6 bg-cover rounded-[20px] justify-between`}
      style={{ backgroundImage: `url(${defaultImage})` }}
    >
      <div className="w-full h-7 px-6 justify-start items-start gap-1 inline-flex">
        <Badge />
      </div>
      <div className="flex flex-col p-6 h-32 backdrop-blur-sm bg-opacity-50 rounded-tr-[100px] rounded-bl-[20px] rounded-br-[20px] bg-gray-650 gap-2">
        <div className="max-w-max pl-2 pr-5 h-7 flex justify-start items-center gap-2">
          <Image
            src={data?.icon ?? "/images/icon_not_found.jpg"}
            alt="heroImage"
            width={20}
            height={20}
            className="rounded-full"
          />
          <div className="text-white text-sm font-bold leading-normal">
            {data?.tokenName ?? "Token Not Found"} {data?.tokenSymbol ?? ""}
          </div>
        </div>
        <div className="flex h-[27px] left-[10px] top-[114px] justify-start items-center gap-2">
          <div className="flex h-2 w-full bg-white bg-opacity-40 rounded-[100px] items-center justify-start">
            <div
              className="flex h-2 text-xs leading-none text-center text-white bg-brandBlue-200 rounded-[100px]"
              style={{ width: data?.saleProgress ?? 0 }}
            />
          </div>
          <div className="text-white text-sm font-bold leading-normal">
            {data?.saleProgress ?? 0}%
          </div>
        </div>
        <div className="w-full h-6 left-[10px] justify-start items-start gap-2 inline-flex">
          <div className="text-white text-sm font-bold leading-normal">
            Total Raised:
          </div>
          <div className="text-white text-sm font-bold leading-normal">
            {formatCurrency(data?.totalRaised ?? 0)}
          </div>
        </div>
      </div>
    </div>
  )
}
