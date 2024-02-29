import { DetailedHTMLProps, HTMLAttributes } from "react"

interface SkeletonProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  isLoading: boolean
}

export function Skeleton({
  isLoading,
  children,
  className,
  ...props
}: SkeletonProps) {
  const data = isLoading ? (
    <div
      className={`animate-pulse animate-pulse w-full  ${className}`}
      {...props}
    >
      <div className="flex h-2 bg-slate-700 rounded"></div>
    </div>
  ) : (
    children
  )

  return data
}
