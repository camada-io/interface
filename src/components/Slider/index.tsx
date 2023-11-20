"use client"

import { useSpring, animated } from "@react-spring/web"
import throttle from "lodash.throttle"
import { Children, useCallback, useEffect, useState } from "react"
import { RiArrowRightSLine, RiArrowLeftSLine } from "react-icons/ri"

interface SliderProps extends React.HTMLAttributes<HTMLDivElement> {
  navigation?: boolean
  className?: string
  showNavigationDots?: boolean
  contentContainerStyle?: React.CSSProperties
  contentContainerClassName?: string
  maxSlidesPerView?: number
}

const isCLient = typeof window !== "undefined"

export default function Slider({
  navigation = false,
  className = "",
  showNavigationDots = true,
  contentContainerClassName = "",
  contentContainerStyle = {},
  maxSlidesPerView = 1,
  ...props
}: SliderProps) {
  const [slidesPerView, setSlidesPerView] = useState(maxSlidesPerView)
  const [activeView, setActiveView] = useState(0)

  const items = Children.toArray(props.children)

  const [styles, api] = useSpring(() => ({
    from: { x: 0, opacity: 0 },
    to: { x: 0, opacity: 1 },
    config: { clamp: true },
  }))

  const slidesPerViewBreakpoints = {
    640: 1,
    768: 2,
    1024: 3,
    1280: 4,
    1536: 5,
    1920: 6,
  }

  const breakpoints = Object.keys(slidesPerViewBreakpoints).map(Number)

  const totalViews = useCallback(() => {
    return Math.ceil(items.length / slidesPerView)
  }, [slidesPerView, items])()

  const nextSlide = useCallback(() => {
    if (activeView < totalViews - 1) {
      setActiveView(activeView + 1)
      api.start({
        from: { x: 250, opacity: 0 },
        to: { x: 0, opacity: 1 },
      })
    }
  }, [activeView, totalViews, api])

  const prevSlide = useCallback(() => {
    if (activeView > 0) {
      setActiveView(activeView - 1)
      api.start({
        from: { x: -250, opacity: 0 },
        to: { x: 0, opacity: 1 },
      })
    }
  }, [activeView, api])

  useEffect(() => {
    if (isCLient) {
      getBreakpoint()

      window.addEventListener("resize", throttle(getBreakpoint, 200))

      return () => {
        window.addEventListener("resize", throttle(getBreakpoint, 200))
      }
    }

    return undefined
    // eslint-disable-next-line
  }, [])

  const getBreakpoint = () => {
    const width = window.innerWidth
    const breakpoint = breakpoints.find(
      (breakpoint, index) =>
        (width <= breakpoints[index] && !index) ||
        (width <= breakpoints[index + 1] && width >= breakpoint),
    )

    const slidesPerBreakpoint =
      slidesPerViewBreakpoints[
        breakpoint as keyof typeof slidesPerViewBreakpoints
      ]

    if (breakpoint) {
      if (activeView) setActiveView(0)

      setSlidesPerView(
        slidesPerBreakpoint > maxSlidesPerView
          ? maxSlidesPerView
          : slidesPerBreakpoint,
      )
    }
  }

  const slides = useCallback(() => {
    return items.slice(
      activeView ? activeView * slidesPerView : 0,
      activeView ? (activeView + 1) * slidesPerView : slidesPerView,
    )
  }, [items, slidesPerView, activeView])()

  return (
    <div {...props} className={`flex w-full ${className}`}>
      <div
        style={contentContainerStyle}
        className={`flex w-full justify-center relative mx-auto ${contentContainerClassName}`}
      >
        <animated.div
          style={styles}
          className="flex w-full gap-6 justify-center"
        >
          {slides}
        </animated.div>

        {navigation && !!totalViews && (
          <>
            <RiArrowLeftSLine
              size={24}
              className="absolute max-[1280px]:left-0 left-[-32px] top-[50%] translate-y-[-50%] cursor-pointer"
              color="#FFFFFF5C"
              onClick={prevSlide}
            />
            <RiArrowRightSLine
              size={24}
              className="absolute max-[1280px]:right-0 right-[-32px] top-[50%] translate-y-[-50%] cursor-pointer"
              color="#FFFFFF5C"
              onClick={nextSlide}
            />
          </>
        )}

        {showNavigationDots && (
          <div className="absolute bottom-[-32px] flex gap-1.5">
            {Array.from({ length: totalViews }, (_, i) => (
              <div
                key={i}
                className={`w-1.5 h-1.5 rounded-full ${
                  i === activeView ? "bg-brandBlue-100" : "bg-whiteAlpha-500"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
