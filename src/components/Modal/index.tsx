"use client"

import { animated, useTransition } from "@react-spring/web"

interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
  isOpen: boolean
  onClose?: () => void
  children: React.ReactNode
  containerStyle?: string
  contentContainerStyle?: string
}

export default function Modal({
  isOpen = false,
  containerStyle = "",
  contentContainerStyle = "",
  children,
}: ModalProps) {
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
            <div
              className={`flex justify-center items-center h-screen max-[639px]:items-end ${containerStyle}`}
            >
              <div
                className={`rounded-[20px] shadow-lg min-w-[280px] max-[639px]:min-w-[100%] ${contentContainerStyle}`}
              >
                {children}
              </div>
            </div>
          </animated.div>
        ),
    ) ?? null

  return Component
}
