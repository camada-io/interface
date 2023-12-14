import Image from "next/image"
import Link from "next/link"

export const Apply = () => {
  return (
    <div className="flex w-full py-20 bg-brandBlue-100 justify-center items-center">
      <div className=" w-full max-[639px]:gap-6 gap-[90px] lg:gap-10 flex max-[1024px]:flex-col flex-row max-w-[1280px] mx-auto max-[1279px]:px-[32px]">
        <div className="flex flex-col w-full h-full justify-between items-start gap-6 max-[1024px]:!flex-row max-[639px]:!flex-col">
          <div className="md:w-[50%] lg:w-full max-w-[417.90px] text-gray-900 text-3xl sm:text-[40px] text-[30px] leading-[38px] font-extrabold sm:leading-[60px]">
            Unlock your future project with us!
          </div>
          <div className="flex w-full md:w-[50%] flex-col justify-start items-start gap-6">
            <div className="flex w-full max-w-[395.35px] text-gray-400 text-base font-normal leading-relaxed">
              Apply to bring your project onto the Camada Platform and into the
              Syscoin Ecosystem.
            </div>
            <Link href="/apply" className="hidden sm:flex">
              <div className="w-[325px] h-[55px] flex px-6 py-4 bg-gray-700 rounded-[5px] justify-center items-center gap-2.5 ">
                <div className="text-white text-lg font-bold">Apply now</div>
              </div>
            </Link>
          </div>
        </div>
        <div className="w-full lg:min-w-[60%] lg:h-[316px] gap-6 flex flex-col sm:flex-row">
          <div className="grid grid-cols-2 gap-6 max-[639px]:!grid-cols-1">
            <div className="flex flex-col items-start gap-[15px]">
              <div className="self-stretch justify-start items-center gap-[15px] inline-flex">
                <Image
                  src="images/cardTick.svg"
                  alt="heroImage"
                  width={36}
                  height={36}
                />
                <div className="grow shrink basis-0 text-gray-900 text-xl font-bold leading-[30px]">
                  Token economy
                </div>
              </div>
              <div className="self-stretch text-gray-400 text-base font-normal leading-relaxed">
                Camada aims to bring transparency, accessibility, and innovation
                to financial markets globally.
              </div>
            </div>
            <div className="flex flex-col items-start gap-[15px]">
              <div className="self-stretch justify-start items-center gap-[15px] inline-flex">
                <Image
                  src="images/cardTick.svg"
                  alt="heroImage"
                  width={36}
                  height={36}
                />
                <div className="grow shrink basis-0 text-gray-900 text-xl font-bold leading-[30px]">
                  Primary sale for issuers
                </div>
              </div>
              <div className="self-stretch text-gray-400 text-base font-normal leading-relaxed">
                A well-structured and regulated process that aims to offer an
                efficient yet compliant mechanism for both issuers and
                investors.
              </div>
            </div>
            <div className="flex flex-col items-start gap-[15px]">
              <div className="self-stretch justify-start items-start gap-[15px] inline-flex">
                <Image
                  src="images/cardTick.svg"
                  alt="heroImage"
                  width={36}
                  height={36}
                />
                <div className="grow shrink basis-0 text-gray-900 text-xl font-bold leading-[30px]">
                  Secondary sales & liquidity pools
                </div>
              </div>
              <div className="self-stretch text-gray-400 text-base font-normal leading-relaxed">
                We are not directly involved in trading activities but acts to
                ensure that only verified and attested users can engage in
                transactions.
              </div>
            </div>
            <div className="flex  flex-col items-start gap-[15px]">
              <div className="self-stretch justify-start items-center gap-[15px] inline-flex">
                <Image
                  src="images/cardTick.svg"
                  alt="heroImage"
                  width={36}
                  height={36}
                />
                <div className="grow shrink basis-0 text-gray-900 text-xl font-bold leading-[30px]">
                  compliance and attestation process
                </div>
              </div>
              <div className="self-stretch text-gray-400 text-base font-normal leading-relaxed">
                Prepared to regulations governing financial markets, including
                the Travel Rule, MiFID, MiCA, AML laws, and more.
              </div>
            </div>
          </div>
        </div>
        <Link href="/apply" className="flex sm:hidden justify-center w-full">
          <button className="max-[639px]:!w-full flex w-[325px] h-[55px] px-6 py-4 bg-gray-700 rounded-[5px] justify-center items-center gap-2.5 ">
            <div className="text-white text-lg font-bold">Apply now</div>
          </button>
        </Link>
      </div>
    </div>
  )
}
