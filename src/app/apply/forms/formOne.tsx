import { Button } from "@/components/Button"
import { Input } from "@/components/Input"
import { Radio } from "@/components/Radio"
import { StepOneFormValues } from "@/types/forms"
import { SubmitHandler, useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { schemaStepOne } from "../schema"

type Props = {
  defaultValues: StepOneFormValues
  onSubmit: SubmitHandler<StepOneFormValues>
}

export const FormOne = ({ defaultValues, onSubmit }: Props) => {
  const {
    handleSubmit,
    control,
    formState: { isSubmitting, errors },
  } = useForm<StepOneFormValues>({
    resolver: yupResolver(schemaStepOne),
    defaultValues,
  })

  const invalid =
    !!errors?.agreedTerms?.message ||
    !!errors?.name?.message ||
    !!errors?.email?.message

  const handleOnSubmit: SubmitHandler<StepOneFormValues> = (data, event) => {
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
          <div className="self-stretch">
            <span className="text-white text-base font-normal leading-relaxed">
              Name{" "}
            </span>
            <span className="text-red text-base font-extrabold leading-relaxed">
              *
            </span>
          </div>
          <Input name="name" control={control} placeholder="" />
        </div>
        <div className="self-stretch h-full flex-col justify-start items-start gap-1 flex">
          <div className="self-stretch">
            <span className="text-white text-base font-normal leading-relaxed">
              Email{" "}
            </span>
            <span className="text-red text-base font-extrabold leading-relaxed">
              *
            </span>
          </div>
          <Input name="email" control={control} placeholder="" />
        </div>
        <div className="self-stretch h-full flex-col justify-start items-start gap-1 flex">
          <div className="self-stretch text-white text-base font-normal leading-relaxed">
            Name - Project representative (Usually founder/leader/CEO)
          </div>
          <Input name="nameProject" control={control} placeholder="" />
        </div>
        <div className="self-stretch h-full flex-col justify-start items-start gap-1 flex">
          <div className="self-stretch text-white text-base font-normal leading-relaxed">
            Email - Project representative (Usually founder/leader/CEO)
          </div>
          <Input name="emailProject" control={control} placeholder="" />
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
          <span className="text-red text-base font-extrabold leading-relaxed">
            *
          </span>
        </div>
        <Radio
          name="agreedTerms"
          options={[
            { label: "Yes", value: true },
            { label: "No", value: false },
          ]}
          control={control}
        />
        <div className="self-stretch justify-center items-center gap-4 inline-flex">
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
