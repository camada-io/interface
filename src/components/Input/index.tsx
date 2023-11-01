interface Props {
  value: string
  onChange: (value: string) => void
  placeholder?: string
  type?: string
}

export const Input = ({
  value,
  onChange,
  placeholder = "",
  type = "text",
}: Props) => {
  return (
    <div className="self-stretch h-[46px] px-3.5 py-2.5 bg-gray-500 rounded-lg shadow border border-white border-opacity-5 flex items-center gap-2">
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="grow shrink basis-0 h-[26px] bg-transparent text-white text-opacity-40 text-base font-normal leading-relaxed outline-none"
      />
    </div>
  )
}
