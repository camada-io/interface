"use client"

import { PageHeader } from "@/components/PageHeader"
import { Tabs, Tab } from "@/components/Tab"
import { StakeTab } from "./components/StakeTab"
import { useStake } from "./hooks/useStake"
import { UnstakeTab } from "./components/UnstakeTab"
import { ClaimTab } from "./components/ClaimTab"

export default function Stake() {
  const stakeProps = useStake()

  const { isLoading, ...data } = stakeProps

  return (
    <>
      <PageHeader
        title="Stake"
        description="Stake your tokens to invest inside CAMADA"
      />

      <div className="sm:px-[136px] py-[50px] sm:py-[100px] mx-auto flex gap-[60px] justify-center items-start max-[639px]:flex-col max-[639px]:px-[32px]">
        <Tabs className="w-full">
          <Tab label="Stake">
            <StakeTab stakeProps={stakeProps} />
          </Tab>
          <Tab label="Unstake">
            <UnstakeTab stakeProps={stakeProps} />
          </Tab>
          <Tab label="Claim">
            <ClaimTab stakeProps={stakeProps} />
          </Tab>
        </Tabs>

        <div className="flex flex-col w-full gap-[8px]">
          <div className="flex gap-2 items-center max-[639px]:flex-col">
            <div className="flex w-full flex-col justify-center items-center gap-4 bg-gray-600 rounded-[5px] p-[24px]">
              <p className="font-extrabold text-[20px] text-center">
                Your Staked Balance
              </p>

              <p className="text-brandBlue-200 font-bold text-[18px] ">
                {!isLoading
                  ? `${data.stakedBalance.toFixed()} ${data.tokenSymbol}`
                  : 0}
              </p>
            </div>

            <div className="flex w-full flex-col justify-center items-center gap-4 bg-gray-600 rounded-[5px] p-[24px]">
              <p className="font-extrabold text-[20px] text-center">
                Unclaimed Rewards
              </p>

              <p className="text-brandBlue-200 font-bold text-[18px]">
                {!isLoading ? `${data.earnedBalance} ${data.tokenSymbol}` : 0}
              </p>
            </div>
          </div>

          <div className="flex flex-col w-full bg-gray-600 rounded-[5px] p-[24px] backdrop-blur-sm">
            <div className="flex justify-between w-full items-center">
              <p>Rewards p/ Day</p>

              <p>
                {!isLoading ? `${data.rewardsPerDay} ${data.tokenSymbol}` : 0}
              </p>
            </div>
            <div className="flex justify-between w-full mt-[10px]">
              <p>APY</p>
              <p>{`${!isLoading ? data.apy : 0}% Annual yield`}</p>
            </div>

            <div className="border-[1px] border-dashed border-whiteAlpha-100 my-4"></div>

            <div className="flex sm:justify-between w-full">
              <p className="break-words">Total Staked with us</p>
              <p>
                {!isLoading
                  ? `${data.totalStaked.toFixed()} ${data.tokenSymbol}`
                  : 0}
              </p>
            </div>
            <div className="flex justify-between w-full mt-[10px]">
              <p>Stakers</p>
              <p>34,568</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
