import { Loading } from "../Loading"

interface Props {
  maxWidth?: string
  height?: string
  isLoading?: boolean
  icon?: JSX.Element
  onClick: () => void
  text: string
}

export const Button = ({
  maxWidth,
  height = "h-[45px]",
  isLoading = false,
  icon,
  onClick,
  text,
}: Props) => {
  return (
    <button
      className={`${maxWidth} w-full ${height} px-6 py-4 bg-brandBlue-200 rounded-[5px] flex justify-center items-center gap-2.5 ${
        isLoading ? "opacity-50 cursor-not-allowed" : ""
      }`}
      onClick={onClick}
      disabled={isLoading}
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
