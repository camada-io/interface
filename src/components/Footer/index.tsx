"use client"

import Image from "next/image"
import Link from "next/link"
import { FaTelegramPlane } from "react-icons/fa"
import { FooterMenu } from "../FooterMenu"
import { colors } from "@/utils/colors"
import { checkUserAuthenticated } from "@/utils/userAuth"
import { useAccount } from "wagmi"

export const Footer = () => {
  const { isConnected, address } = useAccount()
  const isUserAuthenticated = checkUserAuthenticated(isConnected, address)

  return (
    <footer className="flex w-full flex-col mb-[74px] lg:mb-[0px] bg-gray-600">
      <div className="w-full pt-[30px] pb-[80px] lg:pb-[30px] lg:py-[60px] px-0 max-w-[1280px] mx-auto max-[1279px]:px-[32px] flex justify-between items-center flex-col xl:flex-row gap-6">
        <div className="flex flex-col justify-center items-center lg:items-start gap-6 ">
          <div className="justify-start items-start inline-flex">
            <Link href="/">
              <Image
                src="/images/logo/camada-logo-dark.svg"
                alt="logo"
                width={154}
                height={30}
              />
            </Link>
          </div>
          <div className="self-stretch text-center lg:text-start text-white text-lg lg:text-2xl  font-bold lg:font-extrabold leading-7 lg:leading-10 lg:w-[380px]">
            We growing up your projects with crowdfunding.
          </div>
        </div>
        <div className="flex gap-16">
          {isUserAuthenticated ? (
            <>
              {" "}
              <div className="hidden justify-between items-start lg:inline-flex">
                <div className="flex-col justify-center items-start gap-3 inline-flex">
                  <Link
                    href={"/"}
                    className={
                      "text-white text-base font-medium leading-relaxed"
                    }
                  >
                    Home
                  </Link>
                  <Link
                    href={"/about"}
                    className={
                      "text-white text-base font-medium leading-relaxed"
                    }
                  >
                    About us
                  </Link>
                  <Link
                    href={"/stake"}
                    className={
                      "text-white text-base font-medium leading-relaxed"
                    }
                  >
                    Stake
                  </Link>
                </div>
              </div>
              <div className="hidden justify-between items-start lg:inline-flex">
                <div className="flex-col justify-center items-start gap-3 inline-flex">
                  <Link
                    href={"/projects"}
                    className={
                      "text-white text-base font-medium leading-relaxed"
                    }
                  >
                    Projects
                  </Link>
                  <Link
                    href={"/apply"}
                    className={
                      "text-white text-base font-medium leading-relaxed"
                    }
                  >
                    Apply your project
                  </Link>
                  <Link
                    href={"/contact"}
                    className={
                      "text-white text-base font-medium leading-relaxed"
                    }
                  >
                    Contact us
                  </Link>
                </div>
              </div>
            </>
          ) : (
            <div className="hidden justify-between items-start lg:inline-flex">
              <div className="flex-col justify-center items-start gap-3 inline-flex">
                <Link
                  href={"/"}
                  className={"text-white text-base font-medium leading-relaxed"}
                >
                  Home
                </Link>
                <Link
                  href={"/about"}
                  className={"text-white text-base font-medium leading-relaxed"}
                >
                  About us
                </Link>
                <Link
                  href={"/contact"}
                  className={"text-white text-base font-medium leading-relaxed"}
                >
                  Contact us
                </Link>
              </div>
            </div>
          )}

          <div className="w-[310px] justify-between items-start inline-flex">
            <div className="flex-col justify-center items-start gap-3 inline-flex">
              <Link
                href={"/documentation"}
                className={"text-white text-base font-medium leading-relaxed"}
              >
                Documentation
              </Link>
              <Link
                href={"/terms"}
                className={"text-white text-base font-medium leading-relaxed"}
              >
                Terms of privacy
              </Link>
              <Link
                href={"/brand"}
                className={"text-white text-base font-medium leading-relaxed"}
              >
                Brand guide
              </Link>
            </div>
            <div className="flex h-full justify-center items-center gap-5">
              <div className="w-[39.25px] flex h-10 relative justify-center items-center rounded-[25.29px] bg-brandBlue-100">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 26 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.0612323 0L9.77692 13.2374L0 24H2.20057L10.7604 14.5769L17.6763 24H25.1644L14.9019 10.0182L24.0023 0H21.8017L13.9188 8.67818L7.54933 0H0.0612323ZM3.29726 1.65155H6.73726L21.928 22.3484H18.488L3.29726 1.65155Z"
                    fill={colors.gray[900]}
                  />
                </svg>
              </div>
              <div className="w-[39.25px] flex h-10 relative justify-center items-center rounded-[25.29px] bg-brandBlue-100 fill-black">
                <FaTelegramPlane size={"1.375rem"} color={colors.gray[900]} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden py-6 bg-brandBlue-100 px-0 lg:flex text-gray-900">
        <div className="flex w-full justify-between items-center max-w-[1280px] mx-auto max-[1279px]:px-[32px] ">
          <div className="text-sm font-normal leading-normal">
            © 2023 CAMADA, Inc. All rights reserved.
          </div>
          <div className="justify-start items-center gap-2 flex">
            <div className="pt-1 justify-start items-center gap-2.5 flex">
              <div className="w-4 h-4 relative"></div>
            </div>
            <div className="text-base font-medium leading-relaxed">
              contact@camada.io
            </div>
          </div>
        </div>
      </div>

      <FooterMenu />
    </footer>
  )
}
