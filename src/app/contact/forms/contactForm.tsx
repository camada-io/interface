"use client"

import { ContactFormValues } from "@/types/forms"
import { yupResolver } from "@hookform/resolvers/yup"
import { SubmitHandler, useForm } from "react-hook-form"
import { schemaContact } from "../schema"

type Props = {
  defaultValues: ContactFormValues
  onSubmit: SubmitHandler<ContactFormValues>
}

export const ContactForm = ({ defaultValues, onSubmit }: Props) => {
  const {
    handleSubmit,
    control,
    formState: { isSubmitting, errors },
  } = useForm<ContactFormValues>({
    resolver: yupResolver(schemaContact),
    defaultValues,
  })

  return (
    <div className="max-w-[620px] w-full flex-col justify-start items-start gap-4 inline-flex">
      <div className="self-stretch h-[46px] px-3.5 py-2.5 bg-gray-500 rounded-lg shadow border border-white border-opacity-5 justify-start items-center gap-2 inline-flex">
        <div className="grow shrink basis-0 h-[26px] justify-start items-center gap-2 flex">
          <div className="grow shrink basis-0 text-white text-opacity-40 text-base font-normal leading-relaxed">
            Name
          </div>
        </div>
      </div>
      <div className="self-stretch h-[46px] px-3.5 py-2.5 bg-gray-500 rounded-lg shadow border border-white border-opacity-5 justify-start items-center gap-2 inline-flex">
        <div className="grow shrink basis-0 h-[26px] justify-start items-center gap-2 flex">
          <div className="grow shrink basis-0 text-white text-opacity-40 text-base font-normal leading-relaxed">
            Email
          </div>
        </div>
      </div>
      <div className="self-stretch h-[180px] px-3.5 py-2.5 bg-gray-500 rounded-lg shadow border border-white border-opacity-5 justify-start items-start gap-2 inline-flex">
        <div className="grow shrink basis-0 h-[26px] justify-start items-center gap-2 flex">
          <div className="grow shrink basis-0 text-white text-opacity-40 text-base font-normal leading-relaxed">
            Your message...
          </div>
        </div>
      </div>
      <div className="self-stretch h-[55px] px-6 py-4 bg-brandBlue-200 rounded-[5px] justify-center items-center gap-2.5 inline-flex">
        <div className="text-white text-lg font-bold">Send</div>
      </div>
    </div>
  )
}
