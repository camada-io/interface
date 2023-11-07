"use client"

import { PageHeader } from "@/components/PageHeader"
import { FormOne } from "./forms/formOne"
import { FormTwo } from "./forms/formTwo"
import { FormThree } from "./forms/formThree"
import { FormFour } from "./forms/formFour"
import { FormFive } from "./forms/formFive"
import { Accordion } from "@/components/Accordion"
import { useEffect, useMemo, useState } from "react"
import {
  StepFiveFormValues,
  StepFourFormValues,
  StepOneFormValues,
  StepThreeFormValues,
  StepTwoFormValues,
} from "@/types/forms"

type FormCompletion = {
  formOne: boolean
  formTwo: boolean
  formThree: boolean
  formFour: boolean
  formFive: boolean
}

export default function Apply() {
  const [formCompletion, setFormCompletion] = useState({
    formOne: false,
    formTwo: false,
    formThree: false,
    formFour: false,
    formFive: false,
  })

  const [formData, setFormData] = useState<{
    formOne: StepOneFormValues
    formTwo: StepTwoFormValues
    formThree: StepThreeFormValues
    formFour: StepFourFormValues
    formFive: StepFiveFormValues
  }>({
    formOne: {
      name: "",
      email: "",
      nameProject: "",
      emailProject: "",
      agreedTerms: false,
    },
    formTwo: {
      projectName: "",
      about: "",
    },
    formThree: {
      agreedResearch: false,
    },
    formFour: {
      agreedUpfront: false,
    },
    formFive: {
      aboutUs: "",
      decideWork: "",
      feedback: "",
    },
  })

  const [openAccordion, setOpenAccordion] = useState<number | undefined>(1)

  function isFormName(key: any): key is keyof FormCompletion {
    return ["formOne", "formTwo", "formThree", "formFour", "formFive"].includes(
      key,
    )
  }

  useEffect(() => {
    const completedForms = Object.entries(formCompletion).filter(
      ([_, value]) => value,
    )

    if (completedForms.length > 0) {
      const lastCompletedForm = completedForms[completedForms.length - 1][0]
      const nextAccordion = {
        formOne: 2,
        formTwo: 3,
        formThree: 4,
        formFour: 5,
        formFive: 6, // assumindo que não há um sexto acordeão
      }[lastCompletedForm]
      setOpenAccordion(nextAccordion)
    }
  }, [formCompletion])

  const handleFormSubmit = (
    formName: string,
    data:
      | StepOneFormValues
      | StepTwoFormValues
      | StepThreeFormValues
      | StepFourFormValues
      | StepFiveFormValues,
  ) => {
    if (isFormName(formName)) {
      setFormCompletion((prev) => ({ ...prev, [formName]: true }))
      setFormData((prevData) => ({
        ...prevData,
        [formName]: data,
      }))

      if (formCompletion[formName]) {
        setOpenAccordion((current = 0) => current + 1)
      }
    } else {
      console.error("Invalid form name:", formName)
    }
  }

  const allFormsCompleted = useMemo(() => {
    return Object.values(formCompletion).every((status) => status)
  }, [formCompletion])

  const toggleAccordion = (accordionNumber: number) => {
    if (openAccordion === accordionNumber) {
      setOpenAccordion(0)
    } else {
      setOpenAccordion(accordionNumber)
    }
  }

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
          <Accordion
            number={1}
            title={"Personal info"}
            canOpen={openAccordion === 1 || formCompletion.formOne}
            isFormChecked={formCompletion.formOne}
            isOpen={openAccordion === 1}
            toggleAccordion={() => toggleAccordion(1)}
          >
            <div className="flex flex-col lg:flex-row w-full lg:pl-[70px] justify-center items-start gap-6 ">
              <div className="lg:max-w-[246px] w-full grow shrink basis-0 text-white text-base font-normal leading-relaxed">
                Personal information and representatives or those responsible
                for the project.
              </div>
              <FormOne
                defaultValues={formData.formOne}
                onSubmit={(data) => handleFormSubmit("formOne", data)}
              />
            </div>
          </Accordion>
          <Accordion
            number={2}
            title={"Project info"}
            canOpen={formCompletion.formOne}
            isFormChecked={formCompletion.formTwo}
            isOpen={openAccordion === 2}
            toggleAccordion={() => toggleAccordion(2)}
          >
            <div className="flex flex-col lg:flex-row w-full lg:pl-[70px] justify-center items-start gap-6 ">
              <div className="lg:max-w-[246px] w-full grow shrink basis-0 text-white text-base font-normal leading-relaxed">
                Let us know about your project idea and what you expect.
              </div>
              <FormTwo
                defaultValues={formData.formTwo}
                onSubmit={(data) => handleFormSubmit("formTwo", data)}
                handlePrev={() => toggleAccordion(1)}
              />
            </div>
          </Accordion>
          <Accordion
            number={3}
            title={"House of Chimera report"}
            canOpen={formCompletion.formTwo}
            isFormChecked={formCompletion.formThree}
            isOpen={openAccordion === 3}
            toggleAccordion={() => toggleAccordion(3)}
          >
            <div className="flex flex-col lg:flex-row w-full lg:pl-[70px] justify-center items-start gap-6 ">
              <div className="lg:max-w-[246px] w-full grow shrink basis-0 text-white text-base font-normal leading-relaxed">
                Our Partner House of Chimera will write a research report about
                your project. This includes details about your team and your
                personal history.
              </div>
              <FormThree
                defaultValues={formData.formThree}
                onSubmit={(data) => handleFormSubmit("formThree", data)}
                handlePrev={() => toggleAccordion(2)}
              />
            </div>
          </Accordion>
          <Accordion
            number={4}
            title={"Upfront costs"}
            canOpen={formCompletion.formThree}
            isFormChecked={formCompletion.formFour}
            isOpen={openAccordion === 4}
            toggleAccordion={() => toggleAccordion(4)}
          >
            <div className="flex flex-col lg:flex-row w-full lg:pl-[70px] justify-center items-start gap-6 ">
              <div className="lg:max-w-[246px] w-full grow shrink basis-0 text-white text-base font-normal leading-relaxed">
                Costs associated with launching on Camada.
              </div>
              <FormFour
                defaultValues={formData.formFour}
                onSubmit={(data) => handleFormSubmit("formFour", data)}
                handlePrev={() => toggleAccordion(3)}
              />
            </div>
          </Accordion>
          <Accordion
            number={5}
            title={"Optional feedback"}
            canOpen={formCompletion.formFour}
            isFormChecked={formCompletion.formFive}
            isOpen={openAccordion === 5}
            toggleAccordion={() => toggleAccordion(5)}
          >
            <div className="flex flex-col lg:flex-row w-full lg:pl-[70px] justify-center items-start gap-6 ">
              <div className="lg:max-w-[246px] w-full grow shrink basis-0 text-white text-base font-normal leading-relaxed">
                Thank you for choosing to work with us. We strive to be the most
                trustworthy launchpad in the crypto ecosystem and are always
                trying to improve.
              </div>
              <FormFive
                defaultValues={formData.formFive}
                onSubmit={(data) => handleFormSubmit("formFive", data)}
                handlePrev={() => toggleAccordion(4)}
              />
            </div>
          </Accordion>

          {allFormsCompleted && (
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
          )}
        </div>
      </div>
    </>
  )
}
