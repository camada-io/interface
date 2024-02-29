type BadgeTimeNames = "On going" | "Coming soon" | "Finished"

export const BadgeTime = ({
  type,
  time,
}: {
  type: number | string
  time?: string
}) => {
  const badgeTimeNames = ["On going", "Coming soon", "Finished"]

  if (!type || (typeof type === "number" && (type < 1 || type > 3))) return null
  if (typeof type === "string" && !badgeTimeNames.includes(type)) return null

  const badges = {
    "On going": (
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
    ),
    "Coming soon": (
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
    ),
    Finished: (
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
    ),
  }

  return typeof type === "string"
    ? badges[type as BadgeTimeNames]
    : badges[badgeTimeNames[type - 1] as BadgeTimeNames]
}
