/* eslint-disable prettier/prettier */
"use client"

import { PageHeader } from "@/components/PageHeader"
import { GrMedium } from "react-icons/gr"
import { FaGlobe, FaTelegramPlane, FaDiscord } from "react-icons/fa"
import { RiFileCopyLine } from "react-icons/ri"
import Link from "next/link"
import Image from "next/image"
import { BadgeTime } from "@/components/BadgeTime"

export default function Project({ params }: { params: { project: string } }) {
  const getInfoProject = (project: string) => {
    switch (project) {
      case "pegasys":
        return {
          title: "PEGASYS",
          description:
            "Vulcano's metaverse! An NFT fighting game between light and darkness. These spheres engage in fierce fights constantly looking for power.",
          image: "/images/backgroundCardDefault.svg",
        }

      default:
        return {
          title: "PEGASYS",
          description:
            "Vulcano's metaverse! An NFT fighting game between light and darkness. These spheres engage in fierce fights constantly looking for power.",
          image: "/images/backgroundCardDefault.svg",
        }
    }
  }
  const project = getInfoProject(params.project)

  return (
    <>
      <PageHeader title={project.title} description={project.description} />
      <div className="flex flex-col py-32 gap-32">
        <div className="w-full max-h-[331.23px] h-full justify-center items-start gap-[60px]">
          <div
            className="max-w-[590px] w-full h-[331.23px] pt-6 rounded-[20px] flex-col justify-between items-start inline-flex bg-cover bg-no-repeat"
            style={{ backgroundImage: `url(${project.image})` }}
          >
            <BadgeTime type={3} />
            <div className="w-5 h-5 justify-center items-center inline-flex">
              <div className="w-5 h-5 relative"></div>
            </div>
            <div className="self-stretch justify-start items-center gap-2 inline-flex">
              <div className="w-[551px] h-2 relative rounded-[100px]">
                <div className="w-[551px] h-2 left-0 top-0 absolute bg-white bg-opacity-40"></div>
                <div className="w-[220.40px] h-2 left-0 top-0 absolute bg-cyan-500"></div>
                <div className="w-[3.44px] h-2 left-[110.20px] top-0 absolute bg-white"></div>
              </div>
              <div className="text-white text-sm font-bold leading-normal">
                40%
              </div>
            </div>

            <div className="self-stretch h-16 px-6 pt-4 pb-6 bg-gray-650 bg-opacity-50 backdrop-blur-sm flex-col justify-start items-start gap-2 flex rounded-bl-[20px] rounded-br-[20px]">
              <div className="justify-start items-start gap-2 inline-flex">
                <div className="text-white text-sm font-bold leading-normal">
                  Total Raised:
                </div>
                <div className="text-white text-sm font-bold leading-normal">
                  $11,549,430
                </div>
              </div>
            </div>
          </div>

          <div className="w-[590px] p-6 bg-zinc-700 bg-opacity-50 rounded-[10px] flex-col justify-start items-start gap-6 inline-flex">
            <div className="self-stretch justify-between items-center inline-flex">
              <div className="text-white text-lg font-bold leading-7">
                Invest on Pegasys
              </div>
              <div className="h-6 justify-end items-center gap-2 flex">
                <div className="text-white text-sm font-medium leading-normal">
                  Your current allocation:
                </div>
                <img
                  className="w-5 h-5 rounded-full"
                  src="https://via.placeholder.com/20x20"
                />
                <div className="text-white text-sm font-medium leading-normal">
                  5 PSYS
                </div>
              </div>
            </div>
            <div className="self-stretch px-3.5 py-2.5 bg-gray-700 rounded-lg shadow border border-white border-opacity-5 justify-start items-center gap-4 inline-flex">
              <div className="p-2 bg-zinc-700 bg-opacity-50 rounded-[10px] justify-start items-center gap-2 flex">
                <div className="w-[45px] h-[45px] justify-center items-center flex"></div>
                <div className="w-4 h-4 relative"></div>
              </div>
              <div className="grow shrink basis-0 flex-col justify-center items-start gap-1 inline-flex">
                <div className="self-stretch h-5 justify-between items-center inline-flex">
                  <div className="text-white text-opacity-40 text-sm font-normal leading-normal">
                    Amount
                  </div>
                  <div className="text-white text-opacity-40 text-sm font-normal leading-normal">
                    You are on Tier 4 = 500 USD
                  </div>
                </div>
                <div className="self-stretch justify-start items-center gap-2 inline-flex">
                  <div className="grow shrink basis-0 text-white text-lg font-bold leading-7">
                    400
                  </div>
                  <div className="px-4 py-0.5 bg-white bg-opacity-20 rounded-[100px] justify-center items-center gap-2.5 flex">
                    <div className="text-sky-300 text-sm font-medium leading-normal">
                      MAX
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch justify-between items-start inline-flex">
              <div className="text-white text-base font-normal leading-relaxed">
                You will receive
              </div>
              <div className="h-[26px] justify-end items-center gap-2 flex">
                <img
                  className="w-5 h-5 rounded-full"
                  src="https://via.placeholder.com/20x20"
                />
                <div className="text-white text-base font-normal leading-relaxed">
                  10 PSYS
                </div>
              </div>
            </div>
            <div className="self-stretch h-[55px] px-6 py-4 bg-cyan-500 rounded-[5px] justify-center items-center gap-2.5 inline-flex">
              <div className="text-white text-lg font-bold">Invest now</div>
            </div>
          </div>
        </div>

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
      </div>
    </>
  )
}
