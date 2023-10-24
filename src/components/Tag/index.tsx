export const Tag = ({ type }: { type: number }) => {
  switch (type) {
    case 1:
      return (
        <div className="px-4 py-0.5 bg-cyan-500 rounded-[100px] justify-center items-center gap-2.5 flex">
          <div className="text-white text-sm font-medium  leading-normal">
            On going
          </div>
        </div>
      )
    case 2:
      return (
        <div className="px-4 py-0.5 rounded-[100px] border border-brandBlue-100 justify-center items-center gap-2.5 flex">
          <div className="text-brandBlue-100 text-sm font-medium leading-normal">
            Coming soon
          </div>
        </div>
      )
    case 3:
      return (
        <div className="px-4 py-0.5 bg-gray-800 rounded-[100px] justify-center items-center gap-2.5 flex">
          <div className="text-neutral-400 text-sm font-medium leading-normal">
            Finished
          </div>
        </div>
      )

    default:
      return (
        <div className="px-4 py-0.5 bg-cyan-500 rounded-[100px] justify-center items-center gap-2.5 flex">
          <div className="text-white text-sm font-medium leading-normal">
            On going
          </div>
        </div>
      )
  }
}

export const TagProject = ({ type }: { type: number }) => {
  switch (type) {
    case 1:
      return (
        <div className="w-[62px] h-7 px-4 py-0.5 bg-gray-800 rounded-[100px] justify-center items-center gap-2.5 inline-flex">
          <div className="text-white text-sm font-medium leading-normal">
            DeFi
          </div>
        </div>
      )
    case 2:
      return (
        <div className="w-[83px] h-7 px-4 py-0.5 bg-gray-800 rounded-[100px] justify-center items-center gap-2.5 inline-flex">
          <div className="text-white text-sm font-medium leading-normal">
            Finance
          </div>
        </div>
      )
    case 3:
      return (
        <div className="w-[61px] h-7 px-4 py-0.5 bg-gray-800 rounded-[100px] justify-center items-center gap-2.5 inline-flex">
          <div className="text-white text-sm font-medium leading-normal">
            SDK
          </div>
        </div>
      )
    case 4:
      return (
        <div className="w-20 h-7 px-4 py-0.5 bg-gray-800 rounded-[100px] justify-center items-center gap-2.5 inline-flex">
          <div className="text-white text-sm font-medium leading-normal">
            Tooling
          </div>
        </div>
      )

    default:
      return (
        <div className="px-4 py-0.5 bg-cyan-500 rounded-[100px] justify-center items-center gap-2.5 flex">
          <div className="text-white text-sm font-medium leading-normal">
            On going
          </div>
        </div>
      )
  }
}
