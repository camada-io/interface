"use client"

import { RiFileCopyLine } from "react-icons/ri"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { useQuery } from "@apollo/client"
import { useAccount, useContractRead, Address, erc20ABI } from "wagmi"
import { useCallback, useState } from "react"
import dayjs from "dayjs"
import LocalizedFormart from "dayjs/plugin/localizedFormat"

import { useIsMobile } from "@/hooks/useIsMobile"
import { PageHeader } from "@/components/PageHeader"
import { Carousel } from "@/components/Carousel"
import { InvestCard } from "@/components/InvestCard"
import { CardProjectType } from "@/utils/constant"
import { Card } from "@/components/Card"
import { PROJECT } from "@/Apollo/queries/sales"
import { IconNames, SocialIcon } from "../components/SocialIcon"
import abi from "@/contracts/saleAbi"
import { TransactionModal } from "@/components/TransactionModal"
import { ConnectWallet } from "@/components/TransactionModal/steps/ConnectWallet"
import { CheckNetwork } from "@/components/TransactionModal/steps/CheckNetwork"
import { useTransactionModal } from "@/stores/transactionModal"
import { Invest } from "@/components/TransactionModal/steps/Invest"
import { ApproveProject } from "@/components/TransactionModal/steps/ApproveProject"
import { formatUnits } from "ethers"
import { ClaimProject } from "@/components/TransactionModal/steps/ClaimProject"
import { Refund } from "@/components/TransactionModal/steps/Refund"

dayjs.extend(LocalizedFormart)

const usdtContract = process.env.NEXT_PUBLIC_USDT_CONTRACT as string
const usdcContract = process.env.NEXT_PUBLIC_USDC_CONTRACT as string

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

const stableTokens = [
  { icon: "/images/usdc.svg", symbol: "USDC", address: usdcContract },
  { icon: "/images/usdt.svg", symbol: "USDT", address: usdtContract },
]

export default function Project({ params }: { params: { address: string } }) {
  const isMobile = useIsMobile()
  const { address: account } = useAccount()
  const [investmentData, setInvestmentData] = useState({
    token: stableTokens[0],
    amount: 0,
  })

  const state = useTransactionModal()

  const { address } = params

  const { data, loading } = useQuery(PROJECT, {
    variables: { address },
  })

  const project = (data?.getSaleByAddress as Project) ?? null

  if (!project && !loading) notFound()

  const isRefundable =
    project?.status === "Finished" && project.saleProgress < 100

  const { data: projectBalance } = useContractRead({
    address: address as Address,
    abi: abi,
    functionName: "getBoughtTokens",
    args: [account as Address],
    enabled: !!account && !!address && !loading,
    watch: !!account && !!address,
  })

  const { data: refundBalance } = useContractRead({
    address: address as Address,
    abi: abi,
    functionName: "getUSDAvailableForRefund",
    args: [account as Address],
    enabled: !!account && !!address && !loading && isRefundable,
    watch: !!account && !!address,
  })

  const { data: claimBalance } = useContractRead({
    address: address as Address,
    abi: abi,
    functionName: "getClaimableTokens",
    args: [account as Address],
    enabled:
      !!account && !!address && project?.status === "Finished" && !loading,
    watch: !!account && !!address,
  })

  const { data: availableToClaimBalance } = useContractRead({
    address: address as Address,
    abi: abi,
    functionName: "getAvailableTokensToClaim",
    args: [account as Address],
    enabled:
      !!account && !!address && project?.status === "Finished" && !loading,
    watch: !!account && !!address,
  })

  const { data: stableTokenBalance } = useContractRead({
    address: investmentData.token.address as Address,
    abi: erc20ABI,
    functionName: "balanceOf",
    args: [account as Address],
    enabled: !!account && !!investmentData.token.address,
    watch: !!account && !!investmentData.token.address,
  })

  const cardProjectType = useCallback(() => {
    if (isRefundable) return CardProjectType.REFUND

    if (project?.status === "On going") return CardProjectType.INVEST

    if (project?.status === "Finished") return CardProjectType.CLAIM

    return CardProjectType.INVEST
  }, [project?.status, isRefundable])

  return !loading && project ? (
    <>
      <PageHeader
        title={project.tokenName}
        description={isMobile ? undefined : project.description}
        icon={project.icon ?? "/images/icon_not_found.jpg"}
        symbol={project.tokenSymbol}
      />
      <div className="flex flex-col py-12 lg:py-32 gap-12 lg:gap-32 px-8 lg:px-0">
        <div className="mx-auto flex w-full lg:max-h-[331.23px] flex-col lg:flex-row h-full justify-center items-start gap-12 lg:gap-[60px]">
          <div className="max-w-[590px] w-full h-full lg:h-[331.23px] rounded-[20px] flex-col justify-between items-start inline-flex">
            <Card
              typeBadge={project.status}
              maxWidth="590px"
              height={isMobile ? "224px" : "370px"}
              data={project}
            />
          </div>

          <InvestCard
            type={cardProjectType()}
            tokens={stableTokens}
            projectTokenName={project.tokenName}
            projectTokenSymbol={project.tokenSymbol}
            projectBalance={Number(projectBalance) ?? 0}
            claimBalance={Number(claimBalance) ?? 0}
            refundBalance={{
              usdc: Number(refundBalance?.at(0)) || 0,
              usdt: Number(refundBalance?.at(1)) || 0,
            }}
            availableToClaimBalance={Number(availableToClaimBalance) ?? 0}
            stableTokenBalance={
              stableTokenBalance ? `${formatUnits(stableTokenBalance)}` : "0"
            }
            projectPrice={project.averageUSDPrice}
            investHandle={state.onOpen}
            claimHandle={state.onOpen}
            refundHandle={state.onOpen}
            onChangeData={setInvestmentData as any}
            isConnected={!!account}
          />
        </div>

        {isMobile ? (
          <div className="flex flex-col w-full h-full items-start justify-center gap-[60px]">
            <div className="w-full flex-col justify-start items-center gap-6 inline-flex">
              <div className="self-stretch text-white text-3xl font-extrabold leading-[50px]">
                About the project
              </div>
              <div className="self-stretch text-white text-base font-normal leading-relaxed">
                {project.about}
              </div>
            </div>
            <div className="flex-col justify-end items-start gap-6 inline-flex">
              <div className="w-full h-full p-6 bg-gray-600 flex-col justify-end items-start gap-2 flex">
                <div className="self-stretch justify-between items-center inline-flex">
                  <div className="text-white text-base font-normal leading-relaxed">
                    Token name
                  </div>
                  <div className="text-white text-base font-normal leading-relaxed">
                    {project.tokenName}
                  </div>
                </div>
                <div className="self-stretch justify-between items-center inline-flex">
                  <div className="text-white text-base font-normal leading-relaxed">
                    Token symbol
                  </div>
                  <div className="text-white text-base font-normal leading-relaxed">
                    {project.tokenSymbol}
                  </div>
                </div>
                <div className="self-stretch py-2 justify-between items-center inline-flex">
                  <div className="grow shrink basis-0 h-[0px] border border-white border-opacity-20"></div>
                </div>
                <div className="self-stretch flex-col justify-between items-start inline-flex">
                  <div className="text-white text-base font-normal leading-relaxed">
                    Token contract address
                  </div>
                  <div className="h-[26px] justify-end items-center gap-2 flex">
                    <div className="w-6 h-6 relative flex justify-center items-center">
                      <Image
                        src={project.icon ?? "/images/icon_not_found.jpg"}
                        alt="symbol"
                        fill
                        className="rounded-full"
                      />
                    </div>
                    <div className="text-white text-base font-normal leading-relaxed">
                      {project.tokenAddress.slice(0, 4)}...
                      {project.tokenAddress.slice(-4)}
                    </div>
                    <button className="w-4 h-4 justify-center items-center flex">
                      <RiFileCopyLine size={16} />
                    </button>
                  </div>
                </div>
                <div className="self-stretch flex-col justify-between items-start inline-flex">
                  <div className="text-white text-base font-normal leading-relaxed">
                    Private sales address
                  </div>
                  <div className="h-[26px] justify-end items-center gap-2 flex">
                    <div className="w-6 h-6 relative flex justify-center items-center">
                      <Image src="../images/favicon.svg" alt="symbol" fill />
                    </div>
                    <div className="text-white text-base font-normal leading-relaxed">
                      {project.address.slice(0, 4)}...
                      {project.address.slice(-4)}
                    </div>
                    <button className="w-4 h-4 justify-center items-center flex">
                      <RiFileCopyLine size={16} />
                    </button>
                  </div>
                </div>
                <div className="self-stretch py-2 justify-between items-center inline-flex">
                  <div className="grow shrink basis-0 h-[0px] border border-white border-opacity-20"></div>
                </div>
                <div className="self-stretch justify-between items-center inline-flex">
                  <div className="text-white text-base font-normal leading-relaxed">
                    Private sale rate
                  </div>
                  <div className="text-white text-base font-normal leading-relaxed">
                    {project.averageUSDPrice} USD
                  </div>
                </div>
                <div className="self-stretch justify-between items-center inline-flex">
                  <div className="text-white text-base font-normal leading-relaxed">
                    Estimated legend
                  </div>
                  <div className="text-white text-base font-normal leading-relaxed">
                    {dayjs(project.endTime).format("ll")}
                  </div>
                </div>
                <div className="self-stretch py-2 justify-between items-center inline-flex">
                  <div className="grow shrink basis-0 h-[0px] border border-white border-opacity-20"></div>
                </div>
                <div className="text-white text-base font-bold leading-relaxed">
                  Extra info
                </div>
                <div className="self-stretch pb-2 justify-end items-start gap-2.5 inline-flex">
                  <div className="grow shrink basis-0 text-white text-sm font-normal leading-normal">
                    Projects that won’t reach the minimum of 20% of the
                    allocation will be canceled and the investor must request a
                    refund.
                  </div>
                </div>
                <div className="self-stretch h-[45px] pl-4 pr-6 py-4 rounded-[5px] border border-brandBlue-100 justify-center items-center gap-4 inline-flex">
                  <div className="justify-center items-center flex">
                    <Image
                      src={"../images/projectPaper.svg"}
                      alt="project"
                      width={24}
                      height={24}
                    />
                  </div>
                  <div className="text-white text-lg font-bold">
                    Project white paper
                  </div>
                </div>
              </div>
              <div className="self-stretch text-center text-white text-xl font-extrabold leading-[30px]">
                Keep in touch
              </div>
              <div className="self-stretch justify-center items-center gap-6 inline-flex">
                {Object.entries(project.socialLinks as LinkType).map(
                  ([key, value]) => {
                    if (value)
                      return (
                        <Link
                          key={key}
                          href={value}
                          className="flex w-[47.50px] h-[47.50px] relative bg-brandBlue-100 rounded-[100px] justify-center items-center"
                        >
                          <SocialIcon name={key as IconNames} />
                        </Link>
                      )
                  },
                )}
              </div>
            </div>
          </div>
        ) : (
          <div className="flex w-full lg:max-h-[592.50px] h-full items-start justify-center gap-[60px]">
            <div className="flex-col justify-end items-start gap-6 inline-flex">
              <div className="max-h-[467px] max-w-[590px] w-full h-full p-6 bg-gray-600 flex-col justify-end items-start gap-2 flex">
                <div className="self-stretch justify-between items-center inline-flex">
                  <div className="text-white text-base font-normal leading-relaxed">
                    Token name
                  </div>
                  <div className="text-white text-base font-normal leading-relaxed">
                    {project.tokenName}
                  </div>
                </div>
                <div className="self-stretch justify-between items-center inline-flex">
                  <div className="text-white text-base font-normal leading-relaxed">
                    Token symbol
                  </div>
                  <div className="text-white text-base font-normal leading-relaxed">
                    {project.tokenSymbol}
                  </div>
                </div>
                <div className="self-stretch py-2 justify-between items-center inline-flex">
                  <div className="grow shrink basis-0 h-[0px] border border-white border-opacity-20"></div>
                </div>
                <div className="self-stretch justify-between items-center inline-flex">
                  <div className="text-white text-base font-normal leading-relaxed">
                    Token contract address
                  </div>
                  <div className="h-[26px] justify-end items-center gap-2 flex">
                    <div className="w-6 h-6 relative flex justify-center items-center">
                      <Image
                        src={project.icon ?? "/images/icon_not_found.jpg"}
                        alt="symbol"
                        fill
                        className="rounded-full"
                      />
                    </div>
                    <div className="text-white text-base font-normal leading-relaxed">
                      {project.tokenAddress.slice(0, 4)}...
                      {project.tokenAddress.slice(-4)}
                    </div>
                    <button className="w-4 h-4 justify-center items-center flex">
                      <RiFileCopyLine size={16} />
                    </button>
                  </div>
                </div>
                <div className="self-stretch justify-between items-center inline-flex">
                  <div className="text-white text-base font-normal leading-relaxed">
                    Private sales address
                  </div>
                  <div className="h-[26px] justify-end items-center gap-2 flex">
                    <div className="w-6 h-6 relative flex justify-center items-center">
                      <Image src="../images/favicon.svg" alt="symbol" fill />
                    </div>
                    <div className="text-white text-base font-normal leading-relaxed">
                      {project.address.slice(0, 4)}...
                      {project.address.slice(-4)}
                    </div>
                    <button className="w-4 h-4 justify-center items-center flex">
                      <RiFileCopyLine size={16} />
                    </button>
                  </div>
                </div>
                <div className="self-stretch py-2 justify-between items-center inline-flex">
                  <div className="grow shrink basis-0 h-[0px] border border-white border-opacity-20"></div>
                </div>
                <div className="self-stretch justify-between items-center inline-flex">
                  <div className="text-white text-base font-normal leading-relaxed">
                    Private sale rate
                  </div>
                  <div className="text-white text-base font-normal leading-relaxed">
                    {project.averageUSDPrice} USD
                  </div>
                </div>
                <div className="self-stretch justify-between items-center inline-flex">
                  <div className="text-white text-base font-normal leading-relaxed">
                    Estimated legend
                  </div>
                  <div className="text-white text-base font-normal leading-relaxed">
                    {dayjs(project.endTime).format("ll")}
                  </div>
                </div>
                <div className="self-stretch py-2 justify-between items-center inline-flex">
                  <div className="grow shrink basis-0 h-[0px] border border-white border-opacity-20"></div>
                </div>
                <div className="text-white text-base font-bold leading-relaxed">
                  Extra info
                </div>
                <div className="self-stretch pb-2 justify-end items-start gap-2.5 inline-flex">
                  <div className="grow shrink basis-0 text-white text-sm font-normal leading-normal">
                    Projects that won’t reach the minimum of 20% of the
                    allocation will be canceled and the investor must request a
                    refund.
                  </div>
                </div>
                <div className="self-stretch h-[45px] pl-4 pr-6 py-4 rounded-[5px] border border-brandBlue-100 justify-center items-center gap-4 inline-flex">
                  <div className="justify-center items-center flex">
                    <Image
                      src={"../images/projectPaper.svg"}
                      alt="project"
                      width={24}
                      height={24}
                    />
                  </div>
                  <div className="text-white text-lg font-bold">
                    Project white paper
                  </div>
                </div>
              </div>
              <div className="self-stretch text-center text-white text-xl font-extrabold leading-[30px]">
                Keep in touch
              </div>
              <div className="self-stretch justify-center items-center gap-6 inline-flex">
                {Object.entries(project.socialLinks).map(([key, value]) => {
                  if (value)
                    return (
                      <Link
                        key={key}
                        href={value}
                        className="flex w-[47.50px] h-[47.50px] relative bg-brandBlue-100 rounded-[100px] justify-center items-center"
                      >
                        <SocialIcon name={key as IconNames} />
                      </Link>
                    )
                })}
              </div>
            </div>
            <div className="w-[590px] flex-col justify-start items-center gap-6 inline-flex">
              <div className="self-stretch text-white text-3xl font-extrabold leading-[50px]">
                About the project
              </div>
              <div className="self-stretch text-white text-base font-normal leading-relaxed">
                {project.about}
              </div>
            </div>
          </div>
        )}

        <div className="flex w-full flex-col justify-center items-center gap-6 max-w-[1280px] mx-auto">
          <div className="text-white text-3xl font-extrabold leading-[50px]">
            You also must like
          </div>
          <Carousel />
        </div>
      </div>

      <TransactionModal>
        <ConnectWallet state={state} />
        <CheckNetwork state={state} />
        {project?.status === "On going" && (
          <ApproveProject
            state={state}
            amount={investmentData.amount}
            project={{
              address: project?.address,
              name: project?.tokenName,
              symbol: project?.tokenSymbol,
              icon: project?.icon ?? "/images/icon_not_found.jpg",
            }}
            stableToken={investmentData.token}
          />
        )}
        {project?.status === "On going" && (
          <Invest
            state={state}
            amount={investmentData.amount}
            project={{
              address: project?.address,
              name: project?.tokenName,
              symbol: project?.tokenSymbol,
              icon: project?.icon ?? "/images/icon_not_found.jpg",
            }}
            stableToken={investmentData.token}
          />
        )}
        {project?.status === "Finished" && !isRefundable && (
          <ClaimProject
            state={state}
            project={{
              address: project?.address,
              name: project?.tokenName,
              symbol: project?.tokenSymbol,
              icon: project?.icon ?? "/images/icon_not_found.jpg",
            }}
            amount={investmentData.amount}
          />
        )}
        {project?.status === "Finished" && isRefundable && (
          <Refund
            state={state}
            saleAddress={project?.address}
            refundAmount={{
              usdc: Number(refundBalance?.at(0) ?? 0),
              usdt: Number(refundBalance?.at(1)) ?? 0,
            }}
          />
        )}
      </TransactionModal>
    </>
  ) : null
}
