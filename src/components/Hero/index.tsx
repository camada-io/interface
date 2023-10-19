import Image from 'next/image'
import Link from 'next/link'

export const Hero = () => {
  const defaultImage = '/images/backgroundCardDefault.svg'

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
          <Link
            href={'/projects'}
            className="px-6 py-4 bg-brandBlue-200 rounded-[5px] flex items-center gap-2.5"
          >
            <span className="text-white text-lg font-bold">
              See all projects
            </span>
          </Link>
          <Link
            href={'/stake'}
            className="px-6 py-4 border border-brandBlue-200 rounded-[5px] flex items-center gap-2.5"
          >
            <span className="text-white text-lg font-bold">Stake now</span>
          </Link>
        </div>
      </div>

      <div className="flex flex-col gap-6 items-end">
        <div className="relative w-[509px] h-[225px] mb-[-273px] bg-gray-600 rounded-[20px]"></div>
        <div
          className="w-[310px] lg:w-[570px] h-[177px] lg:h-[320px] relative bg-no-repeat py-6 bg-cover"
          style={{ backgroundImage: `url(${defaultImage})` }}
        >
          <div className="flex h-6 top-[25px] left-0">
            <div className="w-[68px] px-2.5 left-0 top-[25px] bg-brandBlue-200 rounded-tr-[5px] rounded-br-[5px] justify-center items-center">
              <div className="text-white text-sm font-medium leading-normal">
                Ends in
              </div>
            </div>
            <div className="w-[113px]  pl-3 pr-2.5 left-[63px] top-[25px] bg-brandBlue-100 rounded-tr-[5px] rounded-br-[5px] justify-center items-center">
              <div className="text-gray-700 text-sm font-medium leading-normal">
                7d 13h 50min
              </div>
            </div>
          </div>

          <div className="max-w-max pl-2 pr-5 h-7 flex bg-whiteAlpha-500 rounded-[100px] backdrop-blur-sm justify-start items-center gap-2">
            <Image
              className="rounded-full"
              src="images/favicon.svg"
              alt="heroImage"
              width={20}
              height={20}
            />
            <div className="text-white text-sm font-bold leading-normal">
              Pegasys Finance PSYS
            </div>
          </div>

          <div className="min-w-[284px] max-w-[359px] h-[27px] pt-[3px] left-[10px] top-[114px] absolute justify-start items-center gap-2 inline-flex">
            <div className="h-2 w-full bg-white bg-opacity-40 rounded-[100px] items-center justify-start">
              <div
                className="h-2 text-xs leading-none text-center text-white bg-brandBlue-200 rounded-[100px]"
                style={{ width: '45%' }}
              />
              <div className="w-0.5 h-2 left-[64px] top-0 absolute bg-white" />
            </div>
            <div className="text-white text-sm font-bold leading-normal">
              40%
            </div>
          </div>
          <div className="w-[178px] h-6 left-[10px] top-[138px] absolute justify-start items-start gap-2 inline-flex">
            <div className="text-white text-sm font-bold leading-normal">
              Total Raised:
            </div>
            <div className="text-white text-sm font-bold leading-normal">
              $11,549,430
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
