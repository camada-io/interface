"use client"

import Link from "next/link"

import Slider from "../Slider"
import { Card } from "../Card"
import { IconNames } from "@/app/projects/components/SocialIcon"
import { PROJECTS } from "@/Apollo/queries/sales"
import { useQuery } from "@apollo/client"

type Project = {
  id: string
  tokenName: string
  tokenSymbol: string
  tokenAddress: string
  address: string
  icon: string
  banner: string
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

type Props = {
  navigation?: boolean
  showNavigationDots?: boolean
  maxSlidesPerView?: number
}

export function Carousel({
  navigation = true,
  showNavigationDots = true,
  maxSlidesPerView = 3,
}: Props) {
  const { data } = useQuery(PROJECTS, {
    variables: {
      active: true,
      limit: 9,
    },
  })

  const projects = (data?.getAllSales?.sales || []) as Project[]

  return (
    <div className="flex w-full justify-center items-center h-full max-w-[1280px]">
      <Slider
        maxSlidesPerView={maxSlidesPerView}
        navigation={navigation}
        showNavigationDots={showNavigationDots}
      >
        {projects.map((data) => (
          <Link
            key={data.address}
            href={`/projects/${data.address}`}
            className="flex w-full max-w-[398px] h-[224px] justify-center items-center"
          >
            <Card
              data={data}
              typeBadge={data.status}
              maxWidth="398px"
              height="224px"
            />
          </Link>
        ))}
      </Slider>
    </div>
  )
}
