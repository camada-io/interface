import Image from "next/image"

const ImageComponent = ({
  src,
  alt,
  width,
  height,
}: {
  src: string
  alt: string
  width: number
  height: number
}) => (
  <div>
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      objectFit="contain"
    />
  </div>
)

export const Syslabs = () => {
  const images = [
    {
      src: "images/rollux.svg",
      alt: "syslabs1",
      width: 115,
      height: 52,
    },
    { src: "images/luxy.svg", alt: "syslabs2", width: 68, height: 52 },
    {
      src: "images/syscoin.svg",
      alt: "syslabs3",
      width: 129,
      height: 52,
    },
    { src: "images/Pali.svg", alt: "syslabs4", width: 142, height: 52 },
    {
      src: "images/superDapp.svg",
      alt: "syslabs5",
      width: 84,
      height: 52,
    },
    {
      src: "images/pegasys.svg",
      alt: "syslabs6",
      width: 119,
      height: 52,
    },
  ]

  return (
    <div className="flex w-full h-full lg:h-[178.43px] flex-col justify-start items-center gap-6 lg:px-[130px] mb-12 lg:mb-32">
      <div className="w-[310px] lg:w-full h-full lg:h-[102px] flex-col justify-center items-center gap-6 flex">
        <div className="text-white text-3xl font-extrabold leading-[50px]">
          Syslabs
        </div>
        <div className="text-center text-white text-lg font-normal leading-7">
          Connecting users, dApps, and assets for a seamless flows between
          ecosystems.
        </div>
      </div>
      <div className="flex flex-row flex-wrap w-[310px] lg:w-[1010px] h-full lg:h-[52px] justify-center lg:justify-between items-center gap-4 lg:gap-0">
        {images.map((image, index) => (
          <ImageComponent key={index} {...image} />
        ))}
      </div>
    </div>
  )
}
