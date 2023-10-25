import Image from "next/image"
import { Tag, TagProject } from "../Tag"

export const Card = ({ defaultImage }: { defaultImage: string }) => {
  return (
    <div
      className="flex flex-col w-[310px] lg:w-[398px] h-[224px] bg-no-repeat pt-6 bg-cover rounded-[20px] justify-between"
      style={{ backgroundImage: `url(${defaultImage})` }}
    >
      <div className="w-full h-7 px-6 justify-start items-start gap-1 inline-flex">
        <Tag type={1} />
        <TagProject type={3} />
        <TagProject type={2} />
      </div>
      <div className="flex flex-col p-6 h-32 backdrop-blur-sm bg-opacity-50 rounded-tr-[100px] rounded-bl-[20px] rounded-br-[20px] bg-gray-650 gap-2">
        <div className="max-w-max pl-2 pr-5 h-7 flex bg-whiteAlpha-500 rounded-[100px] backdrop-blur-sm justify-start items-center gap-2">
          <Image
            src="images/favicon.svg"
            alt="heroImage"
            width={20}
            height={20}
          />
          <div className="text-white text-sm font-bold leading-normal">
            Pegasys Finance PSYS
          </div>
        </div>
        <div className="flex max-w-[284px] lg:max-w-[359px] h-[27px] left-[10px] top-[114px] justify-start items-center gap-2">
          <div className="flex h-2 w-full bg-white bg-opacity-40 rounded-[100px] items-center justify-start">
            <div
              className="flex h-2 text-xs leading-none text-center text-white bg-brandBlue-200 rounded-[100px]"
              style={{ width: "45%" }}
            />
            <div className="flex absolute z-10 ml-[54px] lg:ml-[64px] w-0.5 h-2  bg-white" />
          </div>
          <div className="text-white text-sm font-bold leading-normal">40%</div>
        </div>
        <div className="w-[178px] h-6 left-[10px] justify-start items-start gap-2 inline-flex">
          <div className="text-white text-sm font-bold leading-normal">
            Total Raised:
          </div>
          <div className="text-white text-sm font-bold leading-normal">
            $11,549,430
          </div>
        </div>
      </div>
    </div>
  )
}
