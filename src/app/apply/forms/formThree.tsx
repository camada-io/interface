import { StepThreeFormValues } from "@/types/forms"
import { yupResolver } from "@hookform/resolvers/yup"
import { SubmitHandler, useForm } from "react-hook-form"
import { schemaStepThree } from "../schema"
import { Button } from "@/components/Button"
import { Radio } from "@/components/Radio"
import { useEffect, useState } from "react"

type Props = {
  defaultValues: StepThreeFormValues
  onSubmit: SubmitHandler<StepThreeFormValues>
  handlePrev: () => void
}

export const FormThree = ({ defaultValues, onSubmit, handlePrev }: Props) => {
  const {
    handleSubmit,
    control,
    watch,
    formState: { isSubmitting, errors },
  } = useForm<StepThreeFormValues>({
    resolver: yupResolver(schemaStepThree),
    defaultValues,
  })

  const invalid = !!errors?.agreedResearch?.message
  const [isFormFilled, setIsFormFilled] = useState(false)

  const watchedFields = watch(["agreedResearch"])

  useEffect(() => {
    const isAgreedTermsTrue = watchedFields[0] === true

    setIsFormFilled(isAgreedTermsTrue)
  }, [watchedFields])

  const handleOnSubmit: SubmitHandler<StepThreeFormValues> = (data, event) => {
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
              Do you agree for House of Chimera to write a research report about
              your project?{" "}
            </span>
            <span className="text-red text-base font-extrabold leading-relaxed">
              *
            </span>
          </div>
          <span className="text-neutral-400 text-base font-normal leading-relaxed">
            This will include you providing them with extensive details about
            the team (KYC).
            <br />
            By selecting Yes, you also agree that we may publish their findings
            regardless of their recommendation.
          </span>
          <Radio
            name="agreedResearch"
            options={[
              { label: "Yes", value: true },
              { label: "No", value: false },
            ]}
            control={control}
          />
        </div>
        <div className="self-stretch h-full flex-col justify-start items-start gap-1 flex">
          <div className="h-full w-full p-4 bg-zinc-700 bg-opacity-50 rounded-[10px] border border-dashed border-brandBlue-100 flex flex-col justify-start items-start gap-2.5">
            <div className="text-neutral-400 text-base font-normal leading-relaxed">
              This will include you providing them with extensive details about
              the team (KYC).
              <br />
              By selecting Yes, you also agree that we may publish their
              findings regardless of their recommendation.
            </div>
          </div>
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
            text="Next"
            maxWidth="lg:max-w-[147px]"
            disabled={invalid || !isFormFilled}
            isLoading={isSubmitting}
          />
        </div>
      </div>
    </form>
  )
}
