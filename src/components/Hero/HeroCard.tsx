import Image from 'next/image'

type Props = {
  defaultImage: string
}
export const HeroCard = ({ defaultImage }: Props) => {
  return (
    <div className="flex lg:w-[624px] flex-col">
      <div className="hidden lg:flex absolute right-0 w-[509px] h-[225px] bg-gray-600 rounded-[20px]"></div>
      <div className="hidden lg:flex absolute z-10 right-[21px] top-[33px] w-[262.47px] h-[92px] rounded-none">
        <Image src="images/heroOne.svg" alt="heroImage" fill />
      </div>
      <div className="hidden lg:flex absolute z-10 right-0 bottom-0 w-[195px] h-[208px] rounded-none">
        <Image src="images/heroTwo.svg" alt="heroImage" fill />
      </div>
      <div
        className="flex top-14 lg:absolute flex-col w-[310px] lg:w-[570px] h-[224px] lg:h-[320px] bg-no-repeat py-6 bg-cover rounded-[20px] justify-between"
        style={{ backgroundImage: `url(${defaultImage})` }}
      >
        <div className="flex items-center h-6 lg:h-8 top-[19px] lg:top-[25px] left-0 relative">
          <div className="z-10 h-full w-[68px]  pl-2 px-2.5 absolute left-0 top-0 bg-brandBlue-200 rounded-tr-[5px] rounded-br-[5px] flex justify-center items-center">
            <div className="text-white text-sm font-medium leading-normal">
              Ends in
            </div>
          </div>
          <div className="max-w-max h-full pl-3 pr-2.5 absolute left-[65px] top-0 bg-brandBlue-100 rounded-tr-[5px] rounded-br-[5px] flex justify-center items-center">
            <div className="text-gray-700 text-sm font-medium leading-normal">
              7d 13h 50min
            </div>
          </div>
        </div>
        <div className="flex flex-col pl-3 lg:pl-6">
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
                style={{ width: '45%' }}
              />
              <div className="flex absolute z-10 ml-[54px] lg:ml-[64px] w-0.5 h-2  bg-white" />
            </div>
            <div className="text-white text-sm font-bold leading-normal">
              40%
            </div>
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
    </div>
  )
}
