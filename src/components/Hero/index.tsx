import Link from 'next/link'
import { HeroCard } from './HeroCard'

export const Hero = () => {
  const defaultImage = '/images/backgroundCardDefault.svg'

  return (
    <div className="w-full flex-col lg:flex-row lg:h-[454px] relative flex justify-center items-center lg:items-start gap-6 lg:gap-0 lg:px-[130px]">
      <div className="flex flex-col gap-6  w-[310px] lg:w-[616px]">
        <div className="max-w-[520px] text-3xl lg:text-[55px] font-extrabold lg:leading-[70px]">
          <span className="text-white">Launching the Future, </span>
          <span className="text-brandBlue-100">Connecting Investors!</span>
        </div>
        <p className="max-w-[616px] text-white text-lg lg:text-xl font-medium lg:leading-[30px]">
          Spend your Allocations to help other projects grow.
          <br />
          Transparency, accessibility, and innovation to financial markets.
        </p>
        <div className="flex gap-4 flex-col lg:flex-row">
          <Link
            href={'/projects'}
            className="px-6 py-4 bg-brandBlue-200 rounded-[5px] flex items-center justify-center gap-2.5"
          >
            <span className="text-white text-lg font-bold">
              See all projects
            </span>
          </Link>
          <Link
            href={'/stake'}
            className="px-6 py-4 border border-brandBlue-200 rounded-[5px] flex items-center  justify-center gap-2.5"
          >
            <span className="text-white text-lg font-bold">Stake now</span>
          </Link>
        </div>
      </div>
      <HeroCard defaultImage={defaultImage} />
    </div>
  )
}
