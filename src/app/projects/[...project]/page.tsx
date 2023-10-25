/* eslint-disable prettier/prettier */
"use client"

import { PageHeader } from "@/components/PageHeader"
import { GrMedium } from "react-icons/gr"
import { FaGlobe, FaTelegramPlane, FaDiscord } from "react-icons/fa"
import { RiFileCopyLine } from "react-icons/ri"
import Link from "next/link"
import Image from "next/image"

export default function Project({ params }: { params: { project: string } }) {
  const getInfoProject = (project: string) => {
    switch (project) {
      case "pegasys":
        return {
          title: "PEGASYS",
          description:
            "Vulcano's metaverse! An NFT fighting game between light and darkness. These spheres engage in fierce fights constantly looking for power.",
        }

      default:
        return {
          title: "PEGASYS",
          description:
            "Vulcano's metaverse! An NFT fighting game between light and darkness. These spheres engage in fierce fights constantly looking for power.",
        }
    }
  }
  const project = getInfoProject(params.project)

  return (
    <>
      <PageHeader title={project.title} description={project.description} />
      <>
        <div className="flex w-full max-h-[592.50px] h-full items-start justify-center gap-[60px]">
          <div className="flex-col justify-end items-start gap-6 inline-flex">
            <div className="max-h-[467px] max-w-[590px] w-full h-full p-6 bg-gray-600 flex-col justify-end items-start gap-2 flex">
              <div className="self-stretch justify-between items-center inline-flex">
                <div className="text-white text-base font-normal leading-relaxed">
                  Token name
                </div>
                <div className="text-white text-base font-normal leading-relaxed">
                  Pegasys
                </div>
              </div>
              <div className="self-stretch justify-between items-center inline-flex">
                <div className="text-white text-base font-normal leading-relaxed">
                  Token symbol
                </div>
                <div className="text-white text-base font-normal leading-relaxed">
                  SYS
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
                    <Image src="../images/favicon.svg" alt="symbol" fill />
                  </div>
                  <div className="text-white text-base font-normal leading-relaxed">
                    0x10...566a
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
                    0x55...ab21
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
                  20 USD
                </div>
              </div>
              <div className="self-stretch justify-between items-center inline-flex">
                <div className="text-white text-base font-normal leading-relaxed">
                  Estimated legend
                </div>
                <div className="text-white text-base font-normal leading-relaxed">
                  Dec. 15, 2023
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
                  Projects that won’t reach the minimum of 20% of the allocation
                  will be canceled and the investor must request a refund.
                </div>
              </div>
              <div className="self-stretch h-[45px] pl-4 pr-6 py-4 rounded-[5px] border border-brandBlue-100 justify-center items-center gap-4 inline-flex">
                <div className="w-6 h-6 justify-center items-center flex">
                  <div className="w-6 h-6 relative"></div>
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
              <Link
                href={"/"}
                className="w-[47.50px] h-[47.50px] relative bg-brandBlue-100 rounded-[100px] justify-center items-center"
              >
                <FaGlobe size={27.4} />
              </Link>
              <Link
                href={"/"}
                className="w-[47.50px] h-[47.50px] relative bg-brandBlue-100 rounded-[100px] justify-center items-center"
              >
                <svg
                  width="27.4"
                  height="27.4"
                  viewBox="0 0 26 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.0612323 0L9.77692 13.2374L0 24H2.20057L10.7604 14.5769L17.6763 24H25.1644L14.9019 10.0182L24.0023 0H21.8017L13.9188 8.67818L7.54933 0H0.0612323ZM3.29726 1.65155H6.73726L21.928 22.3484H18.488L3.29726 1.65155Z"
                    fill="white"
                  />
                </svg>
              </Link>
              <Link
                href={"/"}
                className="w-[47.50px] h-[47.50px] relative bg-brandBlue-100 rounded-[100px] justify-center items-center"
              >
                <FaDiscord size={27.4} />
              </Link>
              <Link
                href={"/"}
                className="w-[47.50px] h-[47.50px] relative bg-brandBlue-100 rounded-[100px] justify-center items-center"
              >
                <GrMedium size={27.4} />
              </Link>
              <Link
                href={"/"}
                className="w-[47.50px] h-[47.50px] relative bg-brandBlue-100 rounded-[100px] justify-center items-center"
              >
                <FaTelegramPlane size={27.4} />
              </Link>
            </div>
          </div>
          <div className="w-[590px] flex-col justify-start items-center gap-6 inline-flex">
            <div className="self-stretch text-white text-3xl font-extrabold leading-[50px]">
              About the project
            </div>
            <div className="self-stretch text-white text-base font-normal leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
            <div className="self-stretch text-brandBlue-200 text-2xl font-extrabold leading-10">
              Subtitle
            </div>
            <div className="self-stretch text-white text-base font-normal leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
          </div>
        </div>
      </>
    </>
  )
}