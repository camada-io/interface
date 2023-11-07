import { StepOneFormValues } from "@/types/forms"
import { Control, useController, UseFormSetValue } from "react-hook-form"
import { Props as InputMaskProps } from "react-input-mask"

type Props = {
  maxWidth?: string
  name: string
  placeholder?: string
  type?: string
  helperText?: string
  maskMoney?: boolean
  control: Control<any>
  setValue?: UseFormSetValue<StepOneFormValues> // TODO: verify this
  isTextArea?: boolean
} & Partial<InputMaskProps>

export const Input = ({
  maxWidth,
  name,
  placeholder = "",
  type = "text",
  setValue,
  maskMoney,
  control,
  isTextArea = false,
}: Props) => {
  const {
    field: { onChange, onBlur, value, ref },
    fieldState: { error },
  } = useController({
    name,
    control,
  })

  const invalid = !!error?.message

  const localStringToNumber = (s: string) => {
    return Number(String(s).replace(/[^0-9.-]+/g, ""))
  }

  const onFocusLocal = (e: any) => {
    const value = e.target.value
    e.target.value = value ? localStringToNumber(value) : ""
  }

  const onBlurLocal = (e: any) => {
    const value = e.target.value

    const options = {
      maximumFractionDigits: 2,
      currency: "USD",
      style: "currency",
      currencyDisplay: "symbol",
    }

    const valueLocal =
      value || value === 0
        ? localStringToNumber(value).toLocaleString(undefined, options)
        : ""

    if (setValue && valueLocal) setValue(name as any, valueLocal)
  }

  return (
    <div className={`${maxWidth} w-full flex flex-col h-full`}>
      <div
        className={`self-stretch ${
          isTextArea ? "max-h-[180px] h-full " : "h-[46px]"
        } px-3.5 py-2.5 bg-gray-500 rounded-lg shadow border border-white border-opacity-5 flex items-center gap-2`}
      >
        {maskMoney ? (
          <input
            id={name}
            type={"currency"}
            ref={ref}
            value={value}
            onChange={onChange}
            onFocus={onFocusLocal}
            onBlur={onBlurLocal}
            placeholder={placeholder}
            className="grow shrink basis-0 h-[26px] bg-transparent text-white text-opacity-40 text-base font-normal leading-relaxed outline-none"
          />
        ) : (
          !isTextArea && (
            <input
              id={name}
              type={type}
              ref={ref}
              value={value}
              onChange={onChange}
              onBlur={onBlur}
              placeholder={placeholder}
              className="grow shrink basis-0 h-[26px] bg-transparent text-white text-opacity-40 text-base font-normal leading-relaxed outline-none"
            />
          )
        )}
        {isTextArea && (
          <textarea
            id={name}
            ref={ref}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            placeholder={placeholder}
            rows={4} // Sets the minimum number of visible text lines
            className="grow shrink basis-0 max-h-[180px] h-full bg-transparent text-white text-opacity-40 text-base font-normal leading-relaxed outline-none"
          />
        )}
      </div>
      {invalid && (
        <div className="text-orange text-sm font-medium leading-normal">
          {error?.message}
        </div>
      )}
    </div>
  )
}
