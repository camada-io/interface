import { Carousel } from '../Carousel'

export const Projects = () => {
  return (
    <div className="w-full h-[423px] flex-col justify-start items-center gap-20 inline-flex">
      <div className="flex-col justify-start items-center flex">
        <div className="text-white text-[40px] font-extrabold leading-[60px]">
          Know the Projects
        </div>
        <div className="text-white text-xl font-medium leading-[30px]">
          Know the projects and invest on great ideas with security!{' '}
        </div>
      </div>
      <div className="w-full justify-center items-center gap-6 flex">
        <Carousel />
        {/* <div className="w-[1338px] justify-start items-center gap-6 inline-flex">
          <div className="w-6 h-6 justify-center items-center flex">
            <div className="w-6 h-6 relative"></div>
          </div>
          <div className="grow shrink basis-0 h-56 pt-6 rounded-[20px] flex-col justify-between items-start inline-flex">
            <div className="self-stretch px-6 justify-start items-start gap-1 inline-flex">
              <div className="px-4 py-0.5 bg-cyan-500 rounded-[100px] justify-center items-center gap-2.5 flex">
                <div className="text-white text-sm font-medium leading-normal">
                  On going
                </div>
              </div>
              <div className="px-4 py-0.5 bg-gray-800 rounded-[100px] justify-center items-center gap-2.5 flex">
                <div className="text-white text-sm font-medium leading-normal">
                  SDK
                </div>
              </div>
              <div className="px-4 py-0.5 bg-gray-800 rounded-[100px] justify-center items-center gap-2.5 flex">
                <div className="text-white text-sm font-medium leading-normal">
                  Finance
                </div>
              </div>
            </div>
            <div className="self-stretch h-[130px] px-6 pt-4 pb-6 bg-zinc-700 bg-opacity-50 rounded-tr-[100px] backdrop-blur-sm flex-col justify-start items-start gap-2 flex">
              <div className="rounded-[100px] backdrop-blur-sm justify-start items-center gap-2 inline-flex">
                <img
                  className="w-6 h-6 rounded-full"
                  src="https://via.placeholder.com/24x24"
                />
                <div className="text-white text-base font-bold leading-relaxed">
                  Pegasys Finance PSYS
                </div>
              </div>
              <div className="self-stretch justify-start items-center gap-2 inline-flex">
                <div className="w-[311px] h-2 relative rounded-[100px]">
                  <div className="w-[311px] h-2 left-0 top-0 absolute bg-white bg-opacity-40"></div>
                  <div className="w-[124.40px] h-2 left-0 top-0 absolute bg-cyan-500"></div>
                  <div className="w-[1.94px] h-2 left-[62.20px] top-0 absolute bg-white"></div>
                </div>
                <div className="text-white text-sm font-bold leading-normal">
                  40%
                </div>
              </div>
              <div className="justify-start items-start gap-2 inline-flex">
                <div className="text-white text-sm font-bold leading-normal">
                  Expected Raise:
                </div>
                <div className="text-white text-sm font-bold leading-normal">
                  $11,549,430
                </div>
              </div>
            </div>
          </div>
          <div className="grow shrink basis-0 h-56 pt-6 rounded-[20px] flex-col justify-between items-start inline-flex">
            <div className="self-stretch px-6 justify-start items-start gap-1 inline-flex">
              <div className="px-4 py-0.5 bg-cyan-500 rounded-[100px] justify-center items-center gap-2.5 flex">
                <div className="text-white text-sm font-medium leading-normal">
                  On going
                </div>
              </div>
              <div className="px-4 py-0.5 bg-gray-800 rounded-[100px] justify-center items-center gap-2.5 flex">
                <div className="text-white text-sm font-medium leading-normal">
                  DeFi
                </div>
              </div>
              <div className="px-4 py-0.5 bg-gray-800 rounded-[100px] justify-center items-center gap-2.5 flex">
                <div className="text-white text-sm font-medium leading-normal">
                  Tooling
                </div>
              </div>
            </div>
            <div className="self-stretch h-[130px] px-6 pt-4 pb-6 bg-zinc-700 bg-opacity-50 rounded-tr-[100px] backdrop-blur-sm flex-col justify-start items-start gap-2 flex">
              <div className="rounded-[100px] backdrop-blur-sm justify-start items-center gap-2 inline-flex">
                <img
                  className="w-6 h-6 rounded-full"
                  src="https://via.placeholder.com/24x24"
                />
                <div className="text-white text-base font-bold leading-relaxed">
                  Pegasys Finance PSYS
                </div>
              </div>
              <div className="self-stretch justify-start items-center gap-2 inline-flex">
                <div className="w-[311px] h-2 relative rounded-[100px]">
                  <div className="w-[311px] h-2 left-0 top-0 absolute bg-white bg-opacity-40"></div>
                  <div className="w-[62.20px] h-2 left-0 top-0 absolute bg-cyan-500"></div>
                  <div className="w-[1.94px] h-2 left-[62.20px] top-0 absolute bg-white"></div>
                </div>
                <div className="text-white text-sm font-bold leading-normal">
                  20%
                </div>
              </div>
              <div className="justify-start items-start gap-2 inline-flex">
                <div className="text-white text-sm font-bold leading-normal">
                  Expected Raise:
                </div>
                <div className="text-white text-sm font-bold leading-normal">
                  $11,549,430
                </div>
              </div>
            </div>
          </div>
          <div className="grow shrink basis-0 h-56 pt-6 rounded-[20px] flex-col justify-between items-start inline-flex">
            <div className="self-stretch px-6 justify-start items-start gap-1 inline-flex">
              <div className="px-4 py-0.5 bg-cyan-500 rounded-[100px] justify-center items-center gap-2.5 flex">
                <div className="text-white text-sm font-medium leading-normal">
                  On going
                </div>
              </div>
              <div className="px-4 py-0.5 bg-gray-800 rounded-[100px] justify-center items-center gap-2.5 flex">
                <div className="text-white text-sm font-medium leading-normal">
                  Finance
                </div>
              </div>
            </div>
            <div className="self-stretch h-[130px] px-6 pt-4 pb-6 bg-zinc-700 bg-opacity-50 rounded-tr-[100px] backdrop-blur-sm flex-col justify-start items-start gap-2 flex">
              <div className="rounded-[100px] backdrop-blur-sm justify-start items-center gap-2 inline-flex">
                <img
                  className="w-6 h-6 rounded-full"
                  src="https://via.placeholder.com/24x24"
                />
                <div className="text-white text-base font-bold leading-relaxed">
                  Pegasys Finance PSYS
                </div>
              </div>
              <div className="self-stretch justify-start items-center gap-2 inline-flex">
                <div className="w-[311px] h-2 relative rounded-[100px]">
                  <div className="w-[311px] h-2 left-0 top-0 absolute bg-white bg-opacity-40"></div>
                  <div className="w-[248.80px] h-2 left-0 top-0 absolute bg-cyan-500"></div>
                  <div className="w-[1.94px] h-2 left-[62.20px] top-0 absolute bg-white"></div>
                </div>
                <div className="text-white text-sm font-bold leading-normal">
                  80%
                </div>
              </div>
              <div className="justify-start items-start gap-2 inline-flex">
                <div className="text-white text-sm font-bold leading-normal">
                  Expected Raise:
                </div>
                <div className="text-white text-sm font-bold leading-normal">
                  $11,549,430
                </div>
              </div>
            </div>
          </div>
          <div className="w-6 h-6 justify-center items-center flex">
            <div className="w-6 h-6 relative"></div>
          </div>
        </div>
        <div className="justify-start items-start gap-[5px] inline-flex">
          <div className="w-[5px] h-[5px] bg-sky-300 rounded-full"></div>
          <div className="w-[5px] h-[5px] bg-white bg-opacity-40 rounded-full"></div>
          <div className="w-[5px] h-[5px] bg-white bg-opacity-40 rounded-full"></div>
        </div> */}
      </div>
    </div>
  )
}
