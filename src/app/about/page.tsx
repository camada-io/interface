"use client"

import { PageHeader } from "@/components/PageHeader"
import Image from "next/image"

export default function About() {
  return (
    <>
      <PageHeader
        title={"About us"}
        description={
          "Camada aims to bring transparency, accessibility, and innovation to financial markets globally."
        }
      />

      <div className="flex flex-col gap-12 lg:gap-32 p-[32.5px] lg:p-32 justify-start items-center">
        <div className="max-w-[1240px] w-full  h-full lg:h-[337.07px] justify-start items-center gap-[120px] inline-flex">
          <div className="max-w-[759px] w-full flex-col justify-start items-start gap-6 inline-flex">
            <div className="self-stretch h-full lg:h-[72px] flex-col justify-start items-start gap-2 flex">
              <div className="text-brandBlue-100 text-base font-bold leading-relaxed">
                Camada is crowdfunding
              </div>
              <div className="self-stretch text-white text-3xl font-extrabold leading-[38px]">
                Secure and Compliant Token Economy
              </div>
            </div>
            <div className="self-stretch text-white text-lg font-normal leading-7">
              To revolutionize the way businesses and individuals engage in
              financial activities by providing a secure, efficient, and fully
              compliant digital ecosystem. <br />
              <br />
              Camada aims to bring transparency, accessibility, and innovation
              to financial markets globally. Aims to facilitate a decentralized
              but compliant environment for the secondary trading of security
              tokens.
            </div>
          </div>
          <div className="hidden lg:flex max-w-[315px] w-full h-[337.07px] relative">
            <Image
              src={"images/camadaSymbol.svg"}
              alt="camadaLogo"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row max-w-[1240px] w-full h-full lg:h-[318px] justify-center items-start gap-6">
          <div className="grow shrink basis-0 flex-col justify-center items-start gap-6 inline-flex">
            <div className="opacity-30 text-brandBlue-200 text-[110px] font-extrabold leading-[100px]">
              01.
            </div>
            <div className="self-stretch text-white text-xl font-extrabold leading-[30px]">
              Primary Sale for Issuers
            </div>
            <div className="self-stretch text-white text-lg font-normal leading-7">
              The primary sale of tokens on Camada is a well-structured and
              regulated process that aims to offer an efficient yet compliant
              mechanism for both issuers and investors.
            </div>
          </div>
          <div className="grow shrink basis-0 flex-col justify-center items-start gap-6 inline-flex">
            <div className="opacity-30 text-brandBlue-200 text-[110px] font-extrabold leading-[100px]">
              02.
            </div>
            <div className="self-stretch text-white text-xl font-extrabold leading-[30px]">
              Secondary Sales & Liquidity Pools
            </div>
            <div className="self-stretch text-white text-lg font-normal leading-7">
              Camada aims to facilitate a decentralized but compliant
              environment for secondary trading of security tokens. Camada is
              not involved in trading activities but acts as a verification and
              attestation layer.
            </div>
          </div>
          <div className="grow shrink basis-0 flex-col justify-center items-start gap-6 inline-flex">
            <div className="opacity-30 text-brandBlue-200 text-[110px] font-extrabold leading-[100px]">
              03.
            </div>
            <div className="self-stretch text-white text-xl font-extrabold leading-[30px]">
              Compliance and Attestation Process
            </div>
            <div className="self-stretch text-white text-lg font-normal leading-7">
              Camada is designed to adhere to a host of regulations governing
              financial markets, including the Travel Rule, MiFID, MiCA, AML
              laws, and other jurisdiction-specific regulations.{" "}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
