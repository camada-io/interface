import { url } from 'inspector'
import Image from 'next/image'

/* eslint-disable @next/next/no-img-element */
export const Hero = () => {
  return (
    <div className="w-full h-[454px] relative flex justify-center items-start gap-6">
      <div className="flex flex-col gap-6">
        <div className="max-w-[520px]">
          <span className="text-white text-[55px] font-extrabold leading-[70px]">
            Launching the Future,{' '}
          </span>
          <span className="text-brandBlue-100 text-[55px] font-extrabold leading-[70px]">
            Connecting Investors!
          </span>
        </div>
        <p className="max-w-[616px] text-white text-xl font-medium leading-[30px]">
          Spend your Allocations to help other projects grow.
          <br />
          Transparency, accessibility, and innovation to financial markets.
        </p>
        <div className="flex gap-4">
          <button className="px-6 py-4 bg-brandBlue-200 rounded-[5px] flex items-center gap-2.5">
            <span className="text-white text-lg font-bold">
              See all projects
            </span>
          </button>
          <button className="px-6 py-4 border border-brandBlue-200 rounded-[5px] flex items-center gap-2.5">
            <span className="text-white text-lg font-bold">Stake now</span>
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-6 items-end">
        <div className="relative w-[509px] h-[225px] mb-[-273px] bg-gray-700 rounded-[20px]"></div>
        <div className="w-[310px] h-[177px] relative">
          <Image
            className="left-0 top-0 absolute rounded-[20px]"
            src="https://via.placeholder.com/310x177"
            alt="backgroundHero"
            style={{ objectFit: 'cover' }}
            fill
          />
          <div className="w-[202px] h-7 pl-[5px] pr-[18px] py-0.5 left-[10px] top-[86px] absolute bg-white bg-opacity-40 rounded-[100px] backdrop-blur-sm justify-start items-center gap-2 inline-flex">
            <Image
              className="w-5 h-5 rounded-full"
              src="https://via.placeholder.com/20x20"
              alt="heroImage"
            />
            <div className="text-white text-sm font-bold font-['Mulish'] leading-normal">
              Pegasys Finance PSYS
            </div>
          </div>
          <div className="w-[284px] h-[27px] pt-[3px] left-[10px] top-[114px] absolute justify-start items-center gap-2 inline-flex">
            <div className="w-[245px] h-2 relative rounded-[100px]">
              <div className="w-[245px] h-2 left-0 top-0 absolute bg-white bg-opacity-40"></div>
              <div className="w-[98px] h-2 left-0 top-0 absolute bg-cyan-500"></div>
            </div>
            <div className="text-white text-sm font-bold font-['Mulish'] leading-normal">
              40%
            </div>
          </div>
          <div className="w-[178px] h-6 left-[10px] top-[138px] absolute justify-start items-start gap-2 inline-flex">
            <div className="text-white text-sm font-bold font-['Mulish'] leading-normal">
              Total Raised:
            </div>
            <div className="text-white text-sm font-bold font-['Mulish'] leading-normal">
              $11,549,430
            </div>
          </div>
          <div className="w-[68px] h-6 px-2.5 left-0 top-[25px] absolute bg-cyan-500 rounded-tr-[5px] rounded-br-[5px] justify-center items-center gap-2.5 inline-flex">
            <div className="text-white text-sm font-medium font-['Mulish'] leading-normal">
              Ends in
            </div>
          </div>
          <div className="w-[113px] h-6 pl-3 pr-2.5 left-[63px] top-[25px] absolute bg-sky-300 rounded-tr-[5px] rounded-br-[5px] justify-center items-center gap-2.5 inline-flex">
            <div className="text-white text-sm font-medium font-['Mulish'] leading-normal">
              7d 13h 50min
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
