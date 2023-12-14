"use client"

import Image from "next/image"
import Link from "next/link"

import { Card } from "../Card"
import { useIsMobile } from "@/hooks/useIsMobile"
import { useQuery } from "@apollo/client"
import { FEATURED_PROJECT } from "@/Apollo/queries/sales"

export const HeroCard = () => {
  const isMobile = useIsMobile()

  const { data: project } = useQuery(FEATURED_PROJECT)

  return (
    <div className="flex flex-col sm:max-w-[624px] max-[1024px]:!max-w-[450px] w-full relative max-[640px]:!items-center">
      <div className="hidden sm:block absolute right-0 max-w-[509px] max-[1024px]:max-w-[348px] w-full h-[225px] bg-gray-600 rounded-[20px]"></div>
      <div className="hidden sm:block absolute z-10 right-4 top-[33px] max-w-[262.47px] w-full h-[92px]">
        <Image src="images/heroOne.svg" alt="heroImage" fill />
      </div>
      <div
        className="hidden sm:block absolute z-10 right-0 top-[220px] max-[1024px]:top-80 w-full
      max-[1024px]:!h-[150px] max-[1024px]:!right-[-25px] max-w-[195px] h-[208px]"
      >
        <Image src="images/heroTwo.svg" alt="heroImage" fill />
      </div>
      {project?.getFeaturedSale && (
        <Link
          href={`/projects/${project.getFeaturedSale.address}`}
          className="flex justify-center flex-col w-full h-[330px] max-[1024px]:!max-w-[380px] sm:right-10 top-14 sm:absolute max-w-[570px] py-6"
        >
          <Card
            maxWidth="570px"
            typeBadge={project.getFeaturedSale.status}
            height={isMobile ? "224px" : "330px"}
            data={project.getFeaturedSale}
          />
        </Link>
      )}
    </div>
  )
}
