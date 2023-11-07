"use client"

import { Control, useController } from "react-hook-form"

interface RadioOption {
  label: string
  value: boolean
}

interface RadioComponentProps {
  name: string
  options: RadioOption[]
  className?: string
  control: Control<any>
}

export const Radio = ({
  name,
  options,
  control,
  className,
}: RadioComponentProps) => {
  const {
    field: { onChange, ref, value },
  } = useController({
    name,
    control,
  })

  return (
    <div className={`flex justify-start items-start gap-8 ${className}`}>
      {options.map((option, index) => (
        <label
          key={index}
          className="flex justify-start items-center gap-1 cursor-pointer"
        >
          <div
            className={`w-5 h-5 rounded-full  ${
              value === option.value
                ? "border-brandBlue-200 border-4"
                : "border-neutral-400 opacity-50 border-2"
            }`}
          />
          <input
            type="radio"
            name={name}
            value={option.value.toString()}
            ref={ref}
            checked={value === option.value}
            onChange={() => onChange(option.value)}
            className="hidden" // Hide the default radio button
          />
          <span className="text-white text-base font-normal leading-relaxed">
            {option.label}
          </span>
        </label>
      ))}
    </div>
  )
}
