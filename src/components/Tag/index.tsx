type TagProjectNames = "DeFi" | "Finance" | "SDK" | "Tooling"

type TagNames = "On going" | "Coming soon" | "Finished"

export const Tag = ({ type }: { type: number | string }) => {
  const tagNames = ["On going", "Coming soon", "Finished"]

  if (!type || (typeof type === "number" && (type < 1 || type > 3))) return null
  if (typeof type === "string" && !tagNames.includes(type)) return null

  const tags = {
    "On going": (
      <div className="px-4 py-0.5 bg-cyan-500 rounded-[100px] justify-center items-center gap-2.5 flex">
        <div className="text-white text-sm font-medium  leading-normal">
          On going
        </div>
      </div>
    ),
    "Coming soon": (
      <div className="px-4 py-0.5 rounded-[100px] border border-brandBlue-100 justify-center items-center gap-2.5 flex">
        <div className="text-brandBlue-100 text-sm font-medium leading-normal">
          Coming soon
        </div>
      </div>
    ),
    Finished: (
      <div className="px-4 py-0.5 bg-gray-800 rounded-[100px] justify-center items-center gap-2.5 flex">
        <div className="text-neutral-400 text-sm font-medium leading-normal">
          Finished
        </div>
      </div>
    ),
  }

  return typeof type === "string"
    ? tags[type as TagNames]
    : tags[tagNames[type - 1] as TagNames]
}

export const TagProject = ({ type }: { type: number | string }) => {
  const tagProjectNames = ["DeFi", "Finance", "SDK", "Tooling"]

  if (!type || (typeof type === "number" && (type < 1 || type > 4))) return null
  if (typeof type === "string" && !tagProjectNames.includes(type)) return null

  const tags = {
    DeFi: (
      <div className="w-[62px] h-7 px-4 py-0.5 bg-gray-800 rounded-[100px] justify-center items-center gap-2.5 inline-flex">
        <div className="text-white text-sm font-medium leading-normal">
          DeFi
        </div>
      </div>
    ),
    Finance: (
      <div className="w-[83px] h-7 px-4 py-0.5 bg-gray-800 rounded-[100px] justify-center items-center gap-2.5 inline-flex">
        <div className="text-white text-sm font-medium leading-normal">
          Finance
        </div>
      </div>
    ),
    SDK: (
      <div className="w-[61px] h-7 px-4 py-0.5 bg-gray-800 rounded-[100px] justify-center items-center gap-2.5 inline-flex">
        <div className="text-white text-sm font-medium leading-normal">SDK</div>
      </div>
    ),
    Tooling: (
      <div className="w-20 h-7 px-4 py-0.5 bg-gray-800 rounded-[100px] justify-center items-center gap-2.5 inline-flex">
        <div className="text-white text-sm font-medium leading-normal">
          Tooling
        </div>
      </div>
    ),
  }

  return typeof type === "string"
    ? tags[type as TagProjectNames]
    : tags[tagProjectNames[type - 1] as TagProjectNames]
}
