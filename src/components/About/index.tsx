import Image from 'next/image'
import { RiArrowRightLine } from 'react-icons/ri'

export const About = () => {
  return (
    <div className="w-full h-full lg:h-72 flex-col justify-start items-center inline-flex px-8">
      <div className="p-6 h-full w-full max-w-[1144px] lg:p-12 bg-gray-600 rounded-[10px] border border-white border-opacity-5 flex-col justify-center items-start gap-6 ">
        <div className="flex flex-col lg:flex-row justify-start items-center gap-6">
          <div className="lg:hidden w-[160px] h-[160px] justify-center items-center flex relative">
            <Image src="images/camada.svg" alt="stakeOne" layout="fill" />
          </div>
          <div className="max-w-[960px] w-FULL flex-col justify-center items-start gap-6 inline-flex">
            <div>
              <span className="text-white text-[40px] font-extrabold leading-[60px]">
                About{' '}
              </span>
              <span className="text-brandBlue-100 text-[40px] font-extrabold leading-[60px]">
                us
              </span>
            </div>
            <div className="self-stretch text-white text-lg font-normal leading-7">
              To revolutionize the way businesses and individuals engage in
              financial activities by providing a secure, efficient, and fully
              compliant digital ecosystem.{' '}
            </div>
            <div className="justify-start items-center gap-4 inline-flex">
              {/* TODO: insert Link to route about */}
              <div className="text-white text-lg font-medium underline leading-7">
                READ MORE
              </div>
              <RiArrowRightLine size={'1.5rem'} />
            </div>
          </div>
          <div className="hidden max-w-[160px] w-full h-[160px] justify-center items-center lg:flex relative">
            <Image src="images/camada.svg" alt="stakeOne" layout="fill" />
          </div>
        </div>
      </div>
    </div>
  )
}
