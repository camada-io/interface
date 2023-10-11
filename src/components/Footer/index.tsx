export const Footer = () => {
  return (
    <>
      <footer className="bg-primary bg-opacity-5 pt-16 md:pt-20 lg:pt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-8 md:py-12 bg-zinc-700">
            <div className="w-[380px] flex-col justify-start items-start gap-4 inline-flex">
              <div className="justify-start items-start gap-[8.87px] inline-flex">
                <div className="w-[26.26px] h-[28.10px] relative"></div>
                <div className="justify-start items-end gap-[2.56px] flex"></div>
              </div>
              <div className="self-stretch text-white text-2xl font-extrabold font-['Mulish'] leading-10">
                We growing up your projects with crowdfunding.
              </div>
            </div>
            <div className="justify-start items-center gap-16 flex">
              <div className="rounded-[10px] flex-col justify-center items-start gap-3 inline-flex">
                <div className="w-[45px] flex-col justify-center items-start flex">
                  <div className="text-white text-base font-medium font-['Mulish'] leading-relaxed">
                    Home
                  </div>
                  <div className="self-stretch grow shrink basis-0 border border-cyan-500"></div>
                </div>
                <div className="text-white text-base font-medium font-['Mulish'] leading-relaxed">
                  About us
                </div>
                <div className="text-white text-base font-medium font-['Mulish'] leading-relaxed">
                  Stake
                </div>
              </div>
              <div className="flex-col justify-start items-start gap-3 inline-flex">
                <div className="text-white text-base font-medium font-['Mulish'] leading-relaxed">
                  Projects
                </div>
                <div className="text-white text-base font-medium font-['Mulish'] leading-relaxed">
                  Apply your project
                </div>
                <div className="text-white text-base font-medium font-['Mulish'] leading-relaxed">
                  Contact us
                </div>
              </div>
              <div className="flex-col justify-center items-start gap-3 inline-flex">
                <div className="text-white text-base font-medium font-['Mulish'] leading-relaxed">
                  Documentation
                </div>
                <div className="text-white text-base font-medium font-['Mulish'] leading-relaxed">
                  Terms of privacy
                </div>
                <div className="text-white text-base font-medium font-['Mulish'] leading-relaxed">
                  Brand guide
                </div>
              </div>
              <div className="flex flex-col space-y-5">
                <div className="w-[39.25px] h-10 relative">
                  <div className="w-[39.25px] h-10 left-0 top-0 absolute bg-sky-300 rounded-[25.29px]"></div>
                </div>
                <div className="w-[39.25px] h-10 relative">
                  <div className="w-[39.25px] h-10 left-0 top-0 absolute bg-sky-300 rounded-[25.29px]"></div>
                  <div className="w-[22.19px] h-[22.19px] left-[7px] top-[9px] absolute"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="py-6 bg-sky-300 px-[135px] flex justify-between items-center">
            <div className="text-gray-800 text-sm font-normal font-['Mulish'] leading-normal">
              © 2023 SYSPAD, Inc. All rights reserved.
            </div>
            <div className="justify-start items-center gap-2 flex">
              <div className="pt-1 justify-start items-center gap-2.5 flex">
                <div className="w-4 h-4 relative"></div>
              </div>
              <div className="text-gray-800 text-base font-medium font-['Mulish'] leading-relaxed">
                contact@camada.io
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
