import { StepFiveFormValues } from "@/types/forms"
import { yupResolver } from "@hookform/resolvers/yup"
import { SubmitHandler, useForm } from "react-hook-form"
import { schemaStepFive } from "../schema"
import { Input } from "@/components/Input"
import { Button } from "@/components/Button"

type Props = {
  defaultValues: StepFiveFormValues
  onSubmit: SubmitHandler<StepFiveFormValues>
  handlePrev: () => void
}

export const FormFive = ({ defaultValues, onSubmit, handlePrev }: Props) => {
  const {
    handleSubmit,
    control,
    formState: { isSubmitting },
  } = useForm<StepFiveFormValues>({
    resolver: yupResolver(schemaStepFive),
    defaultValues,
  })

  const handleOnSubmit: SubmitHandler<StepFiveFormValues> = (data, event) => {
    event?.preventDefault()
    onSubmit(data)
  }

  return (
    <form
      onSubmit={handleSubmit(handleOnSubmit)}
      noValidate
      className="max-w-[900px] w-full flex"
    >
      <div className="max-w-[900px] w-full flex-col justify-start items-start gap-4 inline-flex">
        <div className="self-stretch h-full flex-col justify-start items-start gap-1 flex">
          <div className="self-stretch text-white text-base font-normal leading-relaxed">
            How did you hear about us?
          </div>
          <Input name="aboutUs" control={control} placeholder="" />
        </div>
        <div className="self-stretch h-full flex-col justify-start items-start gap-1 flex">
          <div className="self-stretch text-white text-base font-normal leading-relaxed">
            Why did you decide to work with us?
          </div>
          <Input name="decideWork" control={control} placeholder="" />
        </div>
        <div className="self-stretch h-full flex-col justify-start items-start gap-1 flex">
          <div className="self-stretch text-white text-base font-normal leading-relaxed">
            Do you have any recommendations or feedback for us?
          </div>
          <Input name="feedback" control={control} placeholder="" isTextArea />
        </div>

        <div className="self-stretch justify-center items-center gap-4 inline-flex">
          <Button
            text="Prev"
            maxWidth="lg:max-w-[147px]"
            outline
            onClick={handlePrev}
          />
          <Button
            type="submit"
            text="Submit"
            maxWidth="lg:max-w-[147px]"
            isLoading={isSubmitting}
          />
        </div>
      </div>
    </form>
  )
}
