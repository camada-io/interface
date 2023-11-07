import { RiCheckLine } from "react-icons/ri"

type Props = {
  number: number
  title: string
  children: any
  canOpen: boolean
  isFormChecked?: boolean
  isOpen: boolean // Adicione esta linha
  toggleAccordion: () => void
}

export const Accordion = ({
  number,
  title,
  children,
  canOpen,
  isFormChecked,
  isOpen,
  toggleAccordion,
}: Props) => {
  // const [isOpen, setIsOpen] = useState(false)

  // Efeito para abrir o acordeão automaticamente quando autoOpen se torna true
  // useEffect(() => {
  //   if (autoOpen) {
  //     setIsOpen(true)
  //   }
  // }, [autoOpen])

  // const toggleAccordion = () => {
  //   if (canOpen) {
  //     setIsOpen(!isOpen)
  //   }
  // }

  return (
    <>
      <button
        className="flex items-center w-full justify-center text-left focus:outline-none"
        onClick={toggleAccordion}
        disabled={!canOpen}
      >
        <div className="max-w-[1240px] w-full justify-start items-center gap-6 inline-flex">
          <div
            className={`h-[45px] w-[45px] pt-2 pb-[7px] ${
              isFormChecked ? "bg-brandBlue-200" : "bg-gray-600"
            }  rounded-[5px] border border-brandBlue-100 justify-center items-center flex`}
          >
            {isFormChecked ? (
              <RiCheckLine size={24} />
            ) : (
              <div className="text-brandBlue-100 text-xl font-bold leading-[30px]">
                {number}
              </div>
            )}
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
