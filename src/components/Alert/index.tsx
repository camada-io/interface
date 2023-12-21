import { colors } from "@/utils/colors"
import Image from "next/image"
import { useEffect, useState } from "react"
import { RiCheckLine } from "react-icons/ri"

type Props = {
  maxWidth?: string
  show: boolean
  message?: string
  isError?: boolean
}

export const Alert = ({ maxWidth, show, message, isError = false }: Props) => {
  const [showAlert, setShowAlert] = useState(false)

  useEffect(() => {
    if (show) setShowAlert(show)
  }, [show])

  return (
    <div
      className={`${
        showAlert ? "inline-flex" : "hidden"
      } ${maxWidth} w-full h-full lg:h-[54px] px-4 py-3 bg-gray-500 bg-opacity-50 rounded-[10px] border border-dashed ${
        isError ? "border-red" : "border-brandBlue-200"
      }  justify-start items-center gap-2.5`}
    >
      {isError ? (
        <Image
          src={"../images/warning.svg"}
          alt="warning"
          width={30}
          height={30}
        />
      ) : (
        <RiCheckLine size={30} color={colors.brandBlue[200]} />
      )}
      <div className="grow shrink basis-0 h-full lg:h-[27px] pb-0.5 justify-start items-center gap-2.5 flex">
        <div className="grow shrink basis-0 text-white text-sm font-normal leading-tight">
          {message
            ? message
            : isError
            ? "Something went wrong! Please try again later."
            : "Message successfully sent!"}
        </div>
      </div>
      <button
        className="w-2.5 h-2.5 rounded-md justify-center items-center flex"
        onClick={() => setShowAlert(false)}
      >
        <Image src={"../images/close.svg"} alt="close" width={24} height={24} />
        <div className="w-6 h-6 relative flex-col justify-start items-start flex"></div>
      </button>
    </div>
  )
}
