import {
  Children,
  ReactElement,
  cloneElement,
  useCallback,
  useEffect,
} from "react"
import { XMarkIcon } from "@heroicons/react/24/solid"

import Modal from "../Modal"
import { useTransactionModal } from "@/stores/transactionModal"

type TransactionModalProps = {
  children: React.ReactNode
}

export function TransactionModal({ children }: TransactionModalProps) {
  const state = useTransactionModal()
  const { isOpen, onClose, dispatchStep, currentStep } = state
  const steps = Children.toArray(children) as React.ReactElement[]

  useEffect(() => {
    dispatchStep({ type: "SET_MAX_STEP", payload: steps.length })
    // eslint-disable-next-line
  }, [])

  const renderComponent = useCallback(
    (Child: ReactElement) => {
      if (Child) return cloneElement(Child, { state })
      return null
    },
    [state],
  )

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="bg-gray-700 relative flex w-full rounded-[20px] max-[639px]:rounded-b-[0px] sm:min-w-[650px] sm:min-h-[320px] justify-end">
        <button className="fixed mt-[20px] mr-[20px] z-10">
          <XMarkIcon className="w-6 h-6" onClick={onClose} />
        </button>
        {renderComponent(steps[currentStep])}
      </div>
    </Modal>
  )
}
