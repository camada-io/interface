"use client"

import { animated, useTransition } from "@react-spring/web"

type ModalProps = {
  isOpen: boolean
  onClose?: () => void
  children: React.ReactNode
}

export default function Modal({ isOpen = false, children }: ModalProps) {
  const transition = useTransition(isOpen, {
    config: { duration: 200 },
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  })

  const Component =
    transition(
      (style, item) =>
        item && (
          <animated.div
            style={{ ...style }}
            className="fixed z-50 inset-0 bg-black bg-opacity-70 "
          >
            <div className=" flex justify-center items-center h-screen max-[639px]:items-end">
              <div className="rounded-[20px] shadow-lg min-w-[280px] max-[639px]:min-w-[100%]">
                {children}
              </div>
            </div>
          </animated.div>
        ),
    ) ?? null

  return Component
}
