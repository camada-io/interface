import { useState } from "react"

type Props = {
  number: number
  title: string
  children: any
  canOpen: boolean
}

export const Accordion = ({ number, title, children, canOpen }: Props) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleAccordion = () => {
    if (canOpen) {
      setIsOpen(!isOpen)
    }
  }

  return (
    <>
      <button
        className="flex items-center w-full text-left focus:outline-none"
        onClick={toggleAccordion}
        disabled={!canOpen}
      >
        <div className="max-w-[1240px] w-full justify-start items-center gap-6 inline-flex">
          <div className="h-[45px] w-[45px] pt-2 pb-[7px] bg-gray-600 rounded-[5px] border border-brandBlue-100 justify-center items-center flex">
            <div className="text-brandBlue-100 text-xl font-bold leading-[30px]">
              {number}
            </div>
          </div>
          <div className="text-white text-xl font-extrabold leading-[30px]">
            {title}
          </div>
          <div className="grow shrink basis-0 h-4 py-2 justify-between items-center flex">
            <div className="grow shrink basis-0 h-[0px] border border-dashed border-white border-opacity-20"></div>
          </div>
        </div>
      </button>
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } overflow-hidden transition-height duration-300 ease-in-out w-full h-full`}
      >
        {children}
      </div>
    </>
  )
}
