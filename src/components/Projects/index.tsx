import { Carousel } from "../Carousel"

export const Projects = () => {
  return (
    <div className="w-full h-[423px] flex-col justify-start items-center gap-20 inline-flex max-w-[1280px] mx-auto max-[1024px]:px-[32px]">
      <div className="flex-col justify-start items-center flex">
        <div className="text-white text-[30px] leading-[38px] sm:text-[40px] font-extrabold sm:leading-[60px]">
          Know the Projects
        </div>
        <div className="text-white text-xl font-[300] leading-[30px] text-center">
          Know the projects and invest on great ideas with security!{" "}
        </div>
      </div>
      <div className="w-full justify-center items-center flex">
        <Carousel />
      </div>
    </div>
  )
}
