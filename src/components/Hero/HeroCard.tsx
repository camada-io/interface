"use client"
import Image from "next/image"
import { Card } from "../Card"
import { useIsMobile } from "@/hooks/useIsMobile"

type Props = {
  defaultImage: string
}
export const HeroCard = ({ defaultImage }: Props) => {
  const isMobile = useIsMobile()

  return (
    <div className="flex flex-col lg:max-w-[624px] w-full relative">
      <div className="hidden lg:block absolute right-0 max-w-[509px] w-full h-[225px] bg-gray-600 rounded-[20px]"></div>
      <div className="hidden lg:block absolute z-10 right-4 top-[33px] max-w-[262.47px] w-full h-[92px]">
        <Image src="images/heroOne.svg" alt="heroImage" fill />
      </div>
      <div className="hidden lg:block absolute z-10 right-0 top-64 max-w-[195px] w-full  h-[208px]">
        <Image src="images/heroTwo.svg" alt="heroImage" fill />
      </div>
      <div className="flex flex-col justify-between w-full h-[320px] top-14 lg:absolute max-w-[570px] py-6">
        <Card
          defaultImage={defaultImage}
          typeBadge={2}
          maxWidth="570px"
          height={isMobile ? "224px" : "320px"}
          icon={"../images/favicon.svg"}
        />
      </div>
    </div>
  )
}
