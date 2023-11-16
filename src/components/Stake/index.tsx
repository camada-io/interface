import Image from "next/image"
import Link from "next/link"

export const Stake = () => {
  return (
    <div className="flex flex-col lg:flex-row w-full h-full lg:h-[409px] justify-center items-center gap-11">
      <div className="relative w-full h-[236px] lg:w-[652px] lg:h-[409px] justify-center items-center flex">
        <Image src="images/stakeOne.svg" alt="stakeOne" layout="fill" />
      </div>
      <div className="w-full flex lg:w-[543px] px-[32.50px] lg:px-0 flex-col justify-start items-start gap-6">
        <div className="text-brandBlue-100 text-base font-bold leading-relaxed">
          Staking with camada!
        </div>
        <div className="self-stretch text-white text-[30px] sm:leading-[38px] sm:text-[40px] font-extrabold sm:!leading-[60px]">
          Stake your tokens to invest inside Camada
        </div>
        <div className="self-stretch text-white text-lg font-[300] leading-7">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam etiam
          viverra tellus imperd.Lorem ipsum dolor sit amet, consectetur
          adipiscing elit.
        </div>
        <div className="w-full">
          <Link href={"/stake"}>
            <button className="flex w-full sm:w-[325px] h-[55px] px-6 py-4 bg-brandBlue-200 rounded-[5px] justify-center items-center gap-2.5">
              <div className="text-white text-lg font-bold">Start now</div>
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
