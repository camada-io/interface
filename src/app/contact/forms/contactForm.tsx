"use client"

import { ContactFormValues } from "@/types/forms"
import { yupResolver } from "@hookform/resolvers/yup"
import { SubmitHandler, useForm } from "react-hook-form"
import { schemaContact } from "../schema"
import { Input } from "@/components/Input"
import { Button } from "@/components/Button"

type Props = {
  defaultValues: ContactFormValues
  onSubmit: SubmitHandler<ContactFormValues>
  isSending: boolean
}

export const ContactForm = ({ defaultValues, onSubmit, isSending }: Props) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: yupResolver(schemaContact),
    defaultValues,
  })

  const invalid =
    !!errors?.message?.message ||
    !!errors?.name?.message ||
    !!errors?.email?.message

  const handleOnSubmit: SubmitHandler<ContactFormValues> = (data, event) => {
    event?.preventDefault()
    onSubmit(data)
  }

  return (
    <form
      onSubmit={handleSubmit(handleOnSubmit)}
      noValidate
      className="w-full flex shrink"
    >
      <div className="max-w-[620px] w-full flex-col justify-start items-start gap-4 flex">
        <Input name="name" control={control} placeholder="Name" />
        <Input name="email" control={control} placeholder="Email" />
        <Input
          name="message"
          control={control}
          placeholder="Your message ..."
          isTextArea
        />
        <Button
          type="submit"
          text="Send"
          disabled={invalid || isSending}
          isLoading={isSending}
        />
      </div>
    </form>
  )
}
