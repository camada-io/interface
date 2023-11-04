"use client"

import { PageHeader } from "@/components/PageHeader"
import { FormOne } from "./forms/formOne"

export default function Apply() {
  return (
    <>
      <PageHeader
        title={"Apply your project"}
        description={
          "Apply through this form to bring your project onto the Camada Platform and into the Syscoin Ecosystem."
        }
      />

      <div className=" p-[32.5px] lg:p-32">
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
          <div className="flex flex-col lg:flex-row w-full lg:pl-[70px] justify-center items-start gap-6 ">
            <div className="lg:max-w-[246px] w-full grow shrink basis-0 text-white text-base font-normal leading-relaxed">
              Personal information and representatives or those responsible for
              the project.
            </div>
            <FormOne
              defaultValues={{
                name: "",
                email: "",
                nameProject: "",
                emailProject: "",
                agreedTerms: true,
              }}
              onSubmit={() => null}
            />
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
          {/* stepTwo */}
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
          {/* stepThree */}
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
          {/* stepFour */}
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
          {/* stepFive */}
        </div>
      </div>
    </>
  )
}
