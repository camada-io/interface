import Image from "next/image"
import Link from "next/link"

const ImageComponent = ({
  src,
  alt,
  link,
  width,
  height,
}: {
  src: string
  link: string
  alt: string
  width: number
  height: number
}) => (
  <Link href={link} target="_blank">
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      objectFit="contain"
    />
  </Link>
)

export const Syslabs = () => {
  const images = [
    {
      src: "images/rollux.svg",
      link: "https://www.rollux.com/",
      alt: "syslabs1",
      width: 115,
      height: 52,
    },
    {
      src: "images/luxy.svg",
      link: "https://luxy.io/",
      alt: "syslabs2",
      width: 68,
      height: 52,
    },
    {
      src: "images/syscoin.svg",
      link: "https://syscoin.org/",
      alt: "syslabs3",
      width: 129,
      height: 52,
    },
    {
      src: "images/Pali.svg",
      link: "https://paliwallet.com/",
      alt: "syslabs4",
      width: 142,
      height: 52,
    },
    {
      src: "images/superDapp.svg",
      link: "https://superdapp.ai/",
      alt: "syslabs5",
      width: 84,
      height: 52,
    },
    {
      src: "images/pegasys.svg",
      link: "https://app.pegasys.fi/#/?intro=true",
      alt: "syslabs6",
      width: 119,
      height: 52,
    },
  ]

  return (
    <div className="flex w-full h-full lg:h-[178.43px] flex-col justify-start items-center gap-6 max-w-[1280px] mx-auto max-[1279px]:!px-[32px] mb-12 lg:mb-32">
      <div className="lg:w-full h-full lg:h-[102px] flex-col justify-center items-center gap-6 flex">
        <div className="text-white text-3xl font-extrabold leading-[50px]">
          Syslabs
        </div>
        <div className="text-center text-white text-lg font-normal leading-7">
          Connecting users, dApps, and assets for a seamless flows between
          ecosystems.
        </div>
      </div>
      <div className="flex flex-row flex-wrap w-[310px] sm:w-[600px] lg:w-[1010px] h-full lg:h-[52px] justify-center lg:justify-between items-center gap-4 lg:gap-0">
        {images.map((image, index) => (
          <ImageComponent key={index} {...image} />
        ))}
      </div>
    </div>
  )
}
