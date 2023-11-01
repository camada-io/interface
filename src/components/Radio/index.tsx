"use client"

import { useState } from "react"

interface RadioOption {
  label: string
  value: string
}

interface RadioComponentProps {
  name: string
  options: RadioOption[]
  defaultValue?: string
  className?: string
}

export const Radio = ({
  name,
  options,
  defaultValue,
  className,
}: RadioComponentProps) => {
  const [selectedValue, setSelectedValue] = useState(defaultValue)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value)
  }

  return (
    <div className={`flex justify-start items-start gap-8 ${className}`}>
      {options.map((option) => (
        <label
          key={option.value}
          className="flex justify-start items-center gap-1 cursor-pointer"
        >
          <div
            className={`w-5 h-5 rounded-full  ${
              selectedValue === option.value
                ? "border-brandBlue-200 border-4"
                : "border-neutral-400 opacity-50 border-2"
            }`}
          />
          <input
            type="radio"
            name={name}
            value={option.value}
            checked={selectedValue === option.value}
            onChange={handleChange}
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
