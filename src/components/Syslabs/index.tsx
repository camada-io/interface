import Image from 'next/image'

const ImageComponent = ({
  src,
  alt,
  width,
  height,
}: {
  src: string
  alt: string
  width: string
  height: string
}) => (
  <div className={`relative w-[${width}] h-[${height}] `}>
    <Image src={src} alt={alt} layout="fill" objectFit="contain" />
  </div>
)

export const Syslabs = () => {
  const images = [
    {
      src: 'images/rollux.svg',
      alt: 'syslabs',
      width: '114px',
      height: '52px',
    },
    { src: 'images/luxy.svg', alt: 'syslabs', width: '68px', height: '52px' },
    {
      src: 'images/syscoin.svg',
      alt: 'syslabs',
      width: '129px',
      height: '52px',
    },
    { src: 'images/Pali.svg', alt: 'syslabs', width: '142px', height: '52px' },
    {
      src: 'images/superDapp.svg',
      alt: 'syslabs',
      width: '84px',
      height: '52px',
    },
    {
      src: 'images/pegasys.svg',
      alt: 'syslabs',
      width: '119px',
      height: '52px',
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
      <div className="flex flex-row flex-wrap w-[310px] lg:w-full h-full lg:h-[52px] justify-center lg:justify-between items-center gap-4 lg:gap-0">
        {images.map((image, index) => (
          <ImageComponent key={index} {...image} />
        ))}
      </div>
    </div>
  )
}
