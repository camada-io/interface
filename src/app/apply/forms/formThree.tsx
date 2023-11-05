import { StepThreeFormValues } from "@/types/forms"
import { yupResolver } from "@hookform/resolvers/yup"
import { SubmitHandler, useForm } from "react-hook-form"
import { schemaStepThree } from "../schema"
import { Button } from "@/components/Button"
import { Radio } from "@/components/Radio"

type Props = {
  defaultValues: StepThreeFormValues
  onSubmit: SubmitHandler<StepThreeFormValues>
}

export const FormThree = ({ defaultValues, onSubmit }: Props) => {
  const {
    handleSubmit,
    control,
    formState: { isSubmitting, errors },
  } = useForm<StepThreeFormValues>({
    resolver: yupResolver(schemaStepThree),
    defaultValues,
  })

  const invalid = !!errors?.agreedResearch?.message
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
