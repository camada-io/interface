"use client"

import Image from "next/image"
import dayjs from "dayjs"
import LocalizedFormart from "dayjs/plugin/localizedFormat"

import { Tag, TagProject } from "../Tag"
import { BadgeTime } from "../BadgeTime"
import { IconNames } from "@/app/projects/components/SocialIcon"

dayjs.extend(LocalizedFormart)

type Data = {
  id: string
  tokenName: string
  tokenSymbol: string
  tokenAddress: string
  address: string
  icon: string
  bannerImage: string
  status: "On going" | "Finished" | "Coming soon"
  saleProgress: number
  categories: string[]
  saleAmountUsd: number
  description: string
  about: string
  averageUSDPrice: number
  endTime: string
  closeTime: string
  openTime: string
  socialLinks: LinkType
  totalRaised: number
}

type LinkType = {
  [key in IconNames]: string
}

type BadgeNames = "Default" | "Finished"

type CardProps = {
  defaultImage?: string
  typeBadge: number | string
  maxWidth?: string
  height?: string
  data?: Data
  amountLabel?: string
}

export const Card = ({
  defaultImage = "/images/backgroundCardDefault.svg",
  typeBadge,
  maxWidth,
  height,
  data,
  amountLabel = "Total Raised:",
}: CardProps) => {
  const Badge = () => {
    const badgeNames = ["Default", "Finished"]

    if (
      !typeBadge ||
      (typeof typeBadge === "number" && (typeBadge < 1 || typeBadge > 2))
    )
      return null

    const badgeStatus = data?.status === "Finished" ? "Finished" : "Default"

    const badges = {
      Default: (
        <>
          <Tag type={data?.status ?? 1} />
          {data?.categories.map((category, index) => (
            <TagProject type={category} key={index} />
          ))}
        </>
      ),
      Finished: (
        <>
          <BadgeTime
            type="Finished"
            time={dayjs(data?.closeTime).format("ll")}
          />
        </>
      ),
    }

    return typeof typeBadge === "string"
      ? badges[badgeStatus as BadgeNames]
      : badges[badgeNames[typeBadge] as BadgeNames]
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
      className={`flex flex-col max-w-[${maxWidth}] w-full h-[${height}] min-h-[240px] bg-no-repeat pt-6 bg-cover rounded-[20px] justify-between`}
      style={{
        backgroundImage: data?.bannerImage
          ? `url(${data?.bannerImage})`
          : `url(${defaultImage})`,
      }}
    >
      <div className="w-full h-7 px-6 justify-start items-start gap-1 inline-flex">
        <Badge />
      </div>
      <div className="flex flex-col p-6 h-32 backdrop-blur-sm bg-opacity-50 rounded-tr-[100px] rounded-bl-[20px] rounded-br-[20px] bg-gray-650 gap-2">
        <div className="max-w-max pl-2 pr-5 h-7 flex justify-start items-center gap-2">
          <Image
            src={data?.icon || "/images/icon_not_found.jpg"}
            alt="heroImage"
            width={20}
            height={20}
            className="rounded-full w-[20px] h-[20px]"
          />
          <div className="text-white text-sm font-bold leading-normal">
            {data?.tokenName ?? "Token Not Found"} {data?.tokenSymbol ?? ""}
          </div>
        </div>
        <div className="flex h-[27px] left-[10px] top-[114px] justify-start items-center gap-2">
          <div className="flex h-2 w-full bg-white bg-opacity-40 rounded-[100px] items-center justify-start">
            <div
              className="flex h-2 text-xs leading-none text-center text-white bg-brandBlue-200 rounded-[100px]"
              style={{
                width: data?.saleProgress ? `${data?.saleProgress}%` : 0,
              }}
            />
          </div>
          <div className="text-white text-sm font-bold leading-normal">
            {data?.saleProgress ?? 0}%
          </div>
        </div>
        <div className="w-full h-6 left-[10px] justify-start items-start gap-2 inline-flex">
          <div className="text-white text-sm font-bold leading-normal">
            {amountLabel}
          </div>
          <div className="text-white text-sm font-bold leading-normal">
            {formatCurrency(data?.totalRaised ?? 0)}
          </div>
        </div>
      </div>
    </div>
  )
}
