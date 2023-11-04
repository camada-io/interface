import { useMemo } from "react"
import { Loading } from "../Loading"

interface Props {
  maxWidth?: string
  height?: string
  isLoading?: boolean
  disabled?: boolean
  icon?: JSX.Element
  onClick?: () => void
  text: string
  type?: "button" | "reset" | "submit" | undefined
}

export const Button = ({
  maxWidth,
  height = "h-[45px]",
  isLoading = false,
  disabled = false,
  icon,
  onClick,
  text,
  type = "button",
}: Props) => {
  const disable = useMemo(() => disabled || isLoading, [disabled, isLoading])

  return (
    <button
      type={type}
      className={`${maxWidth} w-full ${height} px-6 py-4 bg-brandBlue-200 rounded-[5px] flex justify-center items-center gap-2.5 ${
        disable ? "opacity-50 cursor-not-allowed" : ""
      }`}
      onClick={onClick}
      disabled={disabled || isLoading}
    >
      {isLoading ? (
        <Loading size={22} />
      ) : (
        <>
          {icon}
          <div className="text-white text-lg font-bold">{text}</div>
        </>
      )}
    </button>
  )
}
