export const BadgeTime = ({ type, time }: { type: number; time?: string }) => {
  switch (type) {
    case 1:
      return (
        <div className="w-full h-[34px] rounded-[5px] justify-start items-start inline-flex">
          <div className="px-4 py-[5px] bg-brandBlue-200 rounded-tl-[5px] rounded-bl-[5px] justify-center items-center gap-2.5 flex">
            <div className="text-white text-sm font-bold leading-normal">
              Ends in
            </div>
          </div>
          <div className="max-w-max w-full pl-4 pr-4 py-[5px] bg-brandBlue-100 rounded-tr-[5px] rounded-br-[5px] justify-center items-center gap-2.5 flex">
            <div className="text-gray-800 text-sm font-medium leading-normal">
              {time || "Nov. 15, 2023 2:30 PM"}
            </div>
          </div>
        </div>
      )
    case 2:
      return (
        <div className="w-full h-[34px] rounded-[5px] justify-start items-start inline-flex">
          <div className="px-4 py-[5px] bg-brandBlue-200 rounded-tl-[5px] rounded-bl-[5px] justify-center items-center gap-2.5 flex">
            <div className="text-white text-sm font-bold leading-normal">
              Starts in
            </div>
          </div>
          <div className="max-w-max w-full pl-4 pr-4 py-[5px] bg-brandBlue-100 rounded-tr-[5px] rounded-br-[5px] justify-center items-center gap-2.5 flex">
            <div className="text-gray-800 text-sm font-medium leading-normal">
              {time || "Oct. 10, 2023 5:30 PM"}
            </div>
          </div>
        </div>
      )
    case 3:
      return (
        <div className="w-full h-[34px] rounded-[5px] justify-start items-start inline-flex">
          <div className="px-4 py-[5px] bg-brandBlue-200 rounded-tl-[5px] rounded-bl-[5px] justify-center items-center gap-2.5 flex">
            <div className="text-white text-sm font-bold leading-normal">
              Finished
            </div>
          </div>
          <div className="max-w-max w-full pl-4 pr-4 py-[5px] bg-brandBlue-100 rounded-tr-[5px] rounded-br-[5px] justify-center items-center gap-2.5 flex">
            <div className="text-gray-800 text-sm font-medium leading-normal">
              {time || "Sep. 8, 2023"}
            </div>
          </div>
        </div>
      )

    default:
      return (
        <div className="absolute justify-start items-start inline-flex">
          <div className="z-10 absolute pl-6 pr-2.5 py-[5px] bg-brandBlue-200 rounded-tr-[5px] rounded-br-[5px] justify-center items-center gap-2.5 flex">
            <div className="text-white text-sm font-bold leading-normal">
              Finished
            </div>
          </div>
          <div className="block ml-[80px] max-w-max w-full pl-3 pr-2.5 py-[5px] bg-brandBlue-100 rounded-tr-[5px] rounded-br-[5px] justify-center items-center gap-2.5">
            <div className="text-gray-700 text-sm font-medium leading-normal">
              {time || "Sep. 8, 2023"}
            </div>
          </div>
        </div>
      )
  }
}
