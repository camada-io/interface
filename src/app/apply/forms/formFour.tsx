import { Button } from "@/components/Button"
import { Radio } from "@/components/Radio"
import { StepFourFormValues } from "@/types/forms"
import { yupResolver } from "@hookform/resolvers/yup"
import { SubmitHandler, useForm } from "react-hook-form"
import { schemaStepFour } from "../schema"

type Props = {
  defaultValues: StepFourFormValues
  onSubmit: SubmitHandler<StepFourFormValues>
}

export const FormFour = ({ defaultValues, onSubmit }: Props) => {
  const {
    handleSubmit,
    control,
    formState: { isSubmitting, errors },
  } = useForm<StepFourFormValues>({
    resolver: yupResolver(schemaStepFour),
    defaultValues,
  })

  const invalid = !!errors?.agreedUpfront?.message

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
              Do you agree to cover all required upfront costs in a
              cryptocurrency of Camada's choosing?{" "}
            </span>
            <span className="text-red text-base font-extrabold leading-relaxed">
              *
            </span>
          </div>
          <Radio
            name="agreedUpfront"
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
              Following an initial, free screening, you would have to pay for
              the costs of launching on Camada. 95% of this expense covers the
              research report as well as us advertising your project, when
              permitted. Payment would be a stablecoin/major on a major exchange
              or chain.
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
