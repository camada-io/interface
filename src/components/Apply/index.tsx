import Image from "next/image"
import Link from "next/link"

export const Apply = () => {
  return (
    <div className="flex w-full lg:h-[476px] py-20 bg-brandBlue-100 justify-center items-center">
      <div className="lg:h-[316px] justify-start items-center gap-6 flex flex-col lg:flex-row">
        <div className="flex flex-col h-full justify-start items-start gap-6">
          <div className="w-[310px] lg:w-full max-w-[417.90px] text-gray-900 text-3xl lg:text-[40px] font-extrabold leading-[38px] lg:leading-[60px]">
            Unlock your future project with us!
          </div>
          <div className="w-[310px] lg:w-full max-w-[395.35px] text-gray-400 text-base font-normal leading-relaxed">
            Apply to bring your project onto the Syspad Platform and into the
            Syscoin Ecosystem.
          </div>
          <Link href="/apply">
            <div className="hidden lg:flex w-[325px] h-[55px] px-6 py-4 bg-gray-700 rounded-[5px] justify-center items-center gap-2.5 ">
              <div className="text-white text-lg font-bold">Apply now</div>
            </div>
          </Link>
        </div>
        <div className="max-w-[732.10px] lg:w-full lg:h-[316px] justify-start items-start gap-6 flex flex-col lg:flex-row">
          <div className="flex w-[310px] lg:w-full max-w-[354px] flex-col gap-6">
            <div className="flex flex-col justify-end items-start gap-[15px]">
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
            <div className="flex flex-col justify-end items-start gap-[15px]">
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
          </div>
          <div className="flex w-[310px] lg:w-full max-w-[354px] flex-col gap-6">
            <div className="flex flex-col justify-end items-start gap-[15px]">
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
            <div className="flex  flex-col justify-end items-start gap-[15px]">
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
        <Link href="/apply">
          <button className="flex lg:hidden w-[325px] h-[55px] px-6 py-4 bg-gray-700 rounded-[5px] justify-center items-center gap-2.5 ">
            <div className="text-white text-lg font-bold">Apply now</div>
          </button>
        </Link>
      </div>
    </div>
  )
}
