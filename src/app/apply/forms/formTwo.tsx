import { StepTwoFormValues } from "@/types/forms"
import { yupResolver } from "@hookform/resolvers/yup"
import { SubmitHandler, useForm } from "react-hook-form"
import { schemaStepTwo } from "../schema"
import { Input } from "@/components/Input"
import { Button } from "@/components/Button"

type Props = {
  defaultValues: StepTwoFormValues
  onSubmit: SubmitHandler<StepTwoFormValues>
}

export const FormTwo = ({ defaultValues, onSubmit }: Props) => {
  const {
    handleSubmit,
    control,
    formState: { isSubmitting, errors },
  } = useForm<StepTwoFormValues>({
    resolver: yupResolver(schemaStepTwo),
    defaultValues,
  })

  const invalid = !!errors?.projectName?.message || !!errors?.about?.message

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="max-w-[900px] w-full flex"
    >
      <div className="max-w-[900px] w-full flex-col justify-start items-start gap-4 inline-flex">
        <div className="self-stretch h-full flex-col justify-start items-start gap-1 flex">
          <div className="self-stretch">
            <span className="text-white text-base font-normal leading-relaxed">
              Project name{" "}
            </span>
            <span className="text-red text-base font-extrabold leading-relaxed">
              *
            </span>
          </div>
          <Input name="projectName" control={control} placeholder="" />
        </div>
        <div className="self-stretch h-full flex-col justify-start items-start gap-1 flex">
          <div className="self-stretch">
            <span className="text-white text-base font-normal leading-relaxed">
              Please provide some information about your project, your goals,
              ideas, how much money you wish to raise, the desired timeframe,
              etc.{" "}
            </span>
            <span className="text-red text-base font-extrabold leading-relaxed">
              *
            </span>
          </div>
          <Input
            name="about"
            control={control}
            placeholder=""
            isTextArea={true}
          />
        </div>

        <div className="self-stretch justify-center items-center gap-4 inline-flex">
          <Button
            type="submit"
            text="Prev"
            maxWidth="lg:max-w-[147px]"
            outline
          />
          <Button
            type="submit"
            text="Next"
            maxWidth="lg:max-w-[147px]"
            disabled={invalid}
            isLoading={isSubmitting}
          />
        </div>
      </div>
    </form>
  )
}
