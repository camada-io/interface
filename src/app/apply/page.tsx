"use client"

import { PageHeader } from "@/components/PageHeader"
import { useIsMobile } from "@/hooks/useIsMobile"

export default function Apply() {
  const isMobile = useIsMobile()
  return (
    <>
      <PageHeader
        title={"Apply your project"}
        description={
          isMobile
            ? undefined
            : "Apply through this form to bring your project onto the Camada Platform and into the Syscoin Ecosystem."
        }
      />

      <div className="p-32">
        <div className="w-full h-full lg:h-[842px] flex-col justify-start items-end gap-6 inline-flex">
          <div className="max-w-[1240px] w-full justify-start items-center gap-6 inline-flex">
            <div className="h-[45px] w-[45px] pt-2 pb-[7px] bg-gray-600 rounded-[5px] border border-brandBlue-100 justify-center items-center flex">
              <div className="text-brandBlue-100 text-xl font-bold leading-[30px]">
                1
              </div>
            </div>
            <div className="text-white text-xl font-extrabold leading-[30px]">
              Personal info
            </div>
            <div className="grow shrink basis-0 h-4 py-2 justify-between items-center flex">
              <div className="grow shrink basis-0 h-[0px] border border-white border-opacity-20"></div>
            </div>
          </div>
          <div className="self-stretch pl-[70px] justify-end items-start gap-6 inline-flex">
            <div className="grow shrink basis-0 text-white text-base font-normal leading-relaxed">
              Personal information and representatives or those responsible for
              the project.
            </div>
            <div className="w-[900px] flex-col justify-start items-start gap-4 inline-flex">
              <div className="self-stretch h-[76px] flex-col justify-start items-start gap-1 flex">
                <div className="self-stretch">
                  <span className="text-white text-base font-normal leading-relaxed">
                    Name{" "}
                  </span>
                  <span className="text-red-700 text-base font-extrabold leading-relaxed">
                    *
                  </span>
                </div>
                <div className="self-stretch h-[46px] px-3.5 py-2.5 bg-gray-700 rounded-lg shadow border border-white border-opacity-5 justify-start items-center gap-2 inline-flex">
                  <div className="grow shrink basis-0 h-[26px] justify-start items-center gap-2 flex">
                    <div className="grow shrink basis-0 text-white text-opacity-40 text-base font-normal leading-relaxed">
                      {" "}
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch h-[76px] flex-col justify-start items-start gap-1 flex">
                <div className="self-stretch">
                  <span className="text-white text-base font-normal leading-relaxed">
                    Email{" "}
                  </span>
                  <span className="text-red-700 text-base font-extrabold leading-relaxed">
                    *
                  </span>
                </div>
                <div className="self-stretch h-[46px] px-3.5 py-2.5 bg-gray-700 rounded-lg shadow border border-white border-opacity-5 justify-start items-center gap-2 inline-flex">
                  <div className="grow shrink basis-0 h-[26px] justify-start items-center gap-2 flex">
                    <div className="grow shrink basis-0 text-white text-opacity-40 text-base font-normal leading-relaxed">
                      {" "}
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch h-[76px] flex-col justify-start items-start gap-1 flex">
                <div className="self-stretch text-white text-base font-normal leading-relaxed">
                  Name - Project representative (Usually founder/leader/CEO)
                </div>
                <div className="self-stretch h-[46px] px-3.5 py-2.5 bg-gray-700 rounded-lg shadow border border-white border-opacity-5 justify-start items-center gap-2 inline-flex">
                  <div className="grow shrink basis-0 h-[26px] justify-start items-center gap-2 flex">
                    <div className="grow shrink basis-0 text-white text-opacity-40 text-base font-normal leading-relaxed">
                      {" "}
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch h-[76px] flex-col justify-start items-start gap-1 flex">
                <div className="self-stretch text-white text-base font-normal leading-relaxed">
                  Email - Project representative (Usually founder/leader/CEO)
                </div>
                <div className="self-stretch h-[46px] px-3.5 py-2.5 bg-gray-700 rounded-lg shadow border border-white border-opacity-5 justify-start items-center gap-2 inline-flex">
                  <div className="grow shrink basis-0 h-[26px] justify-start items-center gap-2 flex">
                    <div className="grow shrink basis-0 text-white text-opacity-40 text-base font-normal leading-relaxed">
                      {" "}
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch">
                <span className="text-white text-base font-normal leading-relaxed">
                  Do you agree to the{" "}
                </span>
                <span className="text-white text-base font-normal underline leading-relaxed">
                  Terms of Service
                </span>
                <span className="text-white text-base font-normal leading-relaxed">
                  {" "}
                  of the Camada plataform?{" "}
                </span>
                <span className="text-red-700 text-base font-extrabold leading-relaxed">
                  *
                </span>
              </div>
              <div className="justify-start items-start gap-8 inline-flex">
                <div className="justify-start items-center gap-1 flex">
                  <div className="w-5 h-5 relative rounded-full border-4 border-brandBlue-200"></div>
                  <div className="text-white text-base font-normal leading-relaxed">
                    Yes
                  </div>
                </div>
                <div className="justify-start items-center gap-1 flex">
                  <div className="w-5 h-5 relative opacity-50 rounded-full border-2 border-neutral-400"></div>
                  <div className="text-white text-base font-normal leading-relaxed">
                    No
                  </div>
                </div>
              </div>
              <div className="self-stretch justify-center items-center gap-4 inline-flex">
                <div className="w-[147px] h-[45px] px-6 py-4 bg-brandBlue-200 rounded-[5px] justify-center items-center gap-2.5 flex">
                  <div className="text-white text-lg font-bold">Next</div>
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-[1240px] w-full justify-start items-center gap-6 inline-flex">
            <div className="h-[45px] w-[45px] pt-2 pb-[7px] bg-gray-600 rounded-[5px] border border-brandBlue-100 justify-center items-center flex">
              <div className="text-brandBlue-100 text-xl font-bold leading-[30px]">
                2
              </div>
            </div>
            <div className="text-white text-xl font-extrabold leading-[30px]">
              Project info
            </div>
            <div className="grow shrink basis-0 h-4 py-2 justify-between items-center flex">
              <div className="grow shrink basis-0 h-[0px] border border-white border-opacity-20"></div>
            </div>
          </div>
          <div className="max-w-[1240px] w-full justify-start items-center gap-6 inline-flex">
            <div className="h-[45px] w-[45px] pt-2 pb-[7px] bg-gray-600 rounded-[5px] border border-brandBlue-100 justify-center items-center flex">
              <div className="text-brandBlue-100 text-xl font-bold leading-[30px]">
                3
              </div>
            </div>
            <div className="text-white text-xl font-extrabold leading-[30px]">
              House of Chimera report
            </div>
            <div className="grow shrink basis-0 h-4 py-2 justify-between items-center flex">
              <div className="grow shrink basis-0 h-[0px] border border-white border-opacity-20"></div>
            </div>
          </div>
          <div className="max-w-[1240px] w-full justify-start items-center gap-6 inline-flex">
            <div className="h-[45px] w-[45px] pt-2 pb-[7px] bg-gray-600 rounded-[5px] border border-brandBlue-100 justify-center items-center flex">
              <div className="text-brandBlue-100 text-xl font-bold leading-[30px]">
                4
              </div>
            </div>
            <div className="text-white text-xl font-extrabold leading-[30px]">
              Upfront costs
            </div>
            <div className="grow shrink basis-0 h-4 py-2 justify-between items-center flex">
              <div className="grow shrink basis-0 h-[0px] border border-white border-opacity-20"></div>
            </div>
          </div>
          <div className="max-w-[1240px] w-full justify-start items-center gap-6 inline-flex">
            <div className="h-[45px] w-[45px] pt-2 pb-[7px] bg-gray-600 rounded-[5px] border border-brandBlue-100 justify-center items-center flex">
              <div className="text-brandBlue-100 text-xl font-bold leading-[30px]">
                5
              </div>
            </div>
            <div className="text-white text-xl font-extrabold leading-[30px]">
              Optional feedback
            </div>
            <div className="grow shrink basis-0 h-4 py-2 justify-between items-center flex">
              <div className="grow shrink basis-0 h-[0px] border border-white border-opacity-20"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
