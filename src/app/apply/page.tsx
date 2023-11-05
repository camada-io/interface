"use client"

import { PageHeader } from "@/components/PageHeader"
import { FormOne } from "./forms/formOne"
import { FormTwo } from "./forms/formTwo"
import { FormThree } from "./forms/formThree"
import { FormFour } from "./forms/formFour"
import { FormFive } from "./forms/formFive"

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
        <div className="w-full h-full flex-col justify-start items-end gap-6 inline-flex">
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
                agreedTerms: false,
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
          <div className="flex flex-col lg:flex-row w-full lg:pl-[70px] justify-center items-start gap-6 ">
            <div className="lg:max-w-[246px] w-full grow shrink basis-0 text-white text-base font-normal leading-relaxed">
              Let us know about your project idea and what you expect.
            </div>
            <FormTwo
              defaultValues={{
                projectName: "",
                about: "",
              }}
              onSubmit={() => null}
            />
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
          <div className="flex flex-col lg:flex-row w-full lg:pl-[70px] justify-center items-start gap-6 ">
            <div className="lg:max-w-[246px] w-full grow shrink basis-0 text-white text-base font-normal leading-relaxed">
              Our Partner House of Chimera will write a research report about
              your project. This includes details about your team and your
              personal history.
            </div>
            <FormThree
              defaultValues={{
                agreedResearch: false,
              }}
              onSubmit={() => null}
            />
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
          <div className="flex flex-col lg:flex-row w-full lg:pl-[70px] justify-center items-start gap-6 ">
            <div className="lg:max-w-[246px] w-full grow shrink basis-0 text-white text-base font-normal leading-relaxed">
              Costs associated with launching on Camada.
            </div>
            <FormFour
              defaultValues={{
                agreedUpfront: false,
              }}
              onSubmit={() => null}
            />
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
          <div className="flex flex-col lg:flex-row w-full lg:pl-[70px] justify-center items-start gap-6 ">
            <div className="lg:max-w-[246px] w-full grow shrink basis-0 text-white text-base font-normal leading-relaxed">
              Thank you for choosing to work with us. We strive to be the most
              trustworthy launchpad in the crypto ecosystem and are always
              trying to improve.
            </div>
            <FormFive defaultValues={{}} onSubmit={() => null} />
          </div>

          <div className="w-full h-full pt-6 justify-start items-center gap-2.5 inline-flex">
            <div className="flex flex-col grow shrink basis-0 text-center">
              <span className="text-brandBlue-100 text-lg font-bold leading-7">
                Project successfully submitted!{" "}
              </span>
              <span className="text-white text-base font-normal leading-relaxed">
                The Camada team will evaluate your project and contact you.
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
