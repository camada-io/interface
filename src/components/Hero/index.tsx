"use client"

import Link from "next/link"
import { HeroCard } from "./HeroCard"
import { checkUserAuthenticated } from "@/utils/userAuth"
import { useAccount } from "wagmi"

export const Hero = () => {
  const { isConnected, address } = useAccount()
  const isUserAuthenticated = checkUserAuthenticated(isConnected, address)

  return (
    <div className="w-full lg:mt-[80px] flex-col sm:flex-row sm:h-[454px] relative flex justify-between items-center sm:items-start gap-6 lg:gap-0 max-w-[1280px] mx-auto max-[1279px]:px-[32px] max-[1024px]:!gap-0">
      <div className="flex flex-col gap-6  w-full sm:w-[616px]">
        <div className="max-w-[520px] text-[30px] leading-[38px] sm:!text-[40px] lg:!text-[55px] font-extrabold sm:leading-[60px]">
          <span className="text-white">Launching the Future, </span>
          <span className="text-brandBlue-100">Connecting Investors!</span>
        </div>
        <p className="max-w-[616px] text-white text-lg lg:text-xl font-[300] lg:leading-[30px]">
          Spend your Allocations to help other projects grow.
          <br />
          Transparency, accessibility, and innovation to financial markets.
        </p>
        <div className="flex gap-4 max-[1024px]:gap-4 flex-col sm:flex-row">
          {isUserAuthenticated && (
            <>
              <Link
                href={"/projects"}
                className="px-6 py-4 bg-brandBlue-200 rounded-[5px] flex items-center justify-center gap-2.5"
              >
                <span className="text-white text-lg font-bold">
                  See all projects
                </span>
              </Link>
              <Link
                href={"/stake"}
                className="px-6 py-4 border border-brandBlue-200 rounded-[5px] flex items-center  justify-center gap-2.5"
              >
                <span className="text-white text-lg font-bold">Stake now</span>
              </Link>
            </>
          )}
        </div>
      </div>
      <HeroCard />
    </div>
  )
}
