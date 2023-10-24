type PageHeaderProps = {
  title: string
  description?: string
}

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div
      className="relative bg-gray-600 h-[160px] sm:before:h-[160px] sm:px-[136px]
    flex items-center justify-between sm:before:content-[url('/images/page-header-bg.png')]
    sm:after:content-[url('/images/page-header-bg-right-2.png')] sm:after:absolute sm:after:right-0 sm:after:h-[160px]
    before:left-[0px] before:absolute max-[639px]:after:content-[url('/images/page-header-bg-right.png')]
    max-[639px]:after:right-0 max-[639px]:after:absolute max-[639px]:after:bottom-0 max-[639px]:flex-col py-[30px] max-[639px]:px-[64px] text-center"
    >
      <h1 className="font-extrabold text-3xl text-white">{title}</h1>
      <p className="font-medium text-[16px] text-white">{description ?? ''}</p>
      <div className="flex w-[calc(100%-272px)] max-[639px]:w-[calc(100%-64px)] absolute bottom-0 border-b-[2px] border-brandBlue-200"></div>
    </div>
  )
}
