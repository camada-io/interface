"use client"

import { PageHeader } from "@/components/PageHeader"
import { FormOne } from "./forms/formOne"
import { FormTwo } from "./forms/formTwo"
import { FormThree } from "./forms/formThree"
import { FormFour } from "./forms/formFour"
import { FormFive } from "./forms/formFive"
import { Accordion } from "@/components/Accordion"
import { useState } from "react"

export default function Apply() {
  const [formCompletion, setFormCompletion] = useState({
    formOne: false,
    formTwo: false,
    formThree: false,
    formFour: false,
    formFive: false,
  })

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
          <Accordion number={1} title={"Personal info"} canOpen={true}>
            <div className="flex flex-col lg:flex-row w-full lg:pl-[70px] justify-center items-start gap-6 ">
              <div className="lg:max-w-[246px] w-full grow shrink basis-0 text-white text-base font-normal leading-relaxed">
                Personal information and representatives or those responsible
                for the project.
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
          </Accordion>
          <Accordion number={2} title={"Project info"} canOpen={true}>
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
          </Accordion>
          <Accordion
            number={3}
            title={"House of Chimera report"}
            canOpen={true}
          >
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
          </Accordion>
          <Accordion number={4} title={"Upfront costs"} canOpen={true}>
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
          </Accordion>
          <Accordion number={5} title={"Optional feedback"} canOpen={true}>
            <div className="flex flex-col lg:flex-row w-full lg:pl-[70px] justify-center items-start gap-6 ">
              <div className="lg:max-w-[246px] w-full grow shrink basis-0 text-white text-base font-normal leading-relaxed">
                Thank you for choosing to work with us. We strive to be the most
                trustworthy launchpad in the crypto ecosystem and are always
                trying to improve.
              </div>
              <FormFive defaultValues={{}} onSubmit={() => null} />
            </div>
          </Accordion>

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
