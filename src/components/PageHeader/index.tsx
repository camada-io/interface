import Image from "next/image"

type PageHeaderProps = {
  title: string
  description?: string
  icon?: string
  symbol?: string
}

export function PageHeader({
  title,
  description,
  icon,
  symbol,
}: PageHeaderProps) {
  return (
    <div
      className="bg-gray-600 h-full lg:h-[160px] sm:before:h-[160px]
    flex items-center justify-between sm:before:content-[url('/images/page-header-bg.png')]
    sm:after:content-[url('/images/page-header-bg-right-2.png')] sm:after:absolute sm:after:right-0 sm:after:h-[160px]
    before:left-[0px] before:absolute max-[639px]:after:content-[url('/images/page-header-bg-right.png')]
    max-[639px]:after:right-0 max-[639px]:after:absolute max-[639px]:after:bottom-0 max-[639px]:flex-col px-[20px] lg:px-[64px] text-center"
    >
      <div className="w-full h-full flex flex-col py-[30px] lg:flex-row justify-between items-center max-w-[1280px] mx-auto bottom-0 border-b-[2px] border-brandBlue-200">
        <div className="flex items-end gap-6">
          <div className="flex items-center gap-4">
            {icon && (
              <Image
                className="rounded-full w-[45px] h-[45px]"
                src={icon}
                alt="Icon"
                width={45}
                height={45}
              />
            )}
            <div className="text-white text-[30px] lg:text-[40px] font-extrabold leading-[60px]">
              {title}
            </div>
          </div>
          {symbol && (
            <div className="flex items-center gap-2.5 py-[7px]">
              <div className="text-white text-xl font-normal leading-[30px]">
                {symbol}
              </div>
            </div>
          )}
        </div>
        {description && (
          <div className="max-w-[629px] w-full lg:text-right text-white text-base font-normal leading-relaxed">
            {description}
          </div>
        )}
      </div>
    </div>
  )
}
