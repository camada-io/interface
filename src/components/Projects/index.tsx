import { Carousel } from '../Carousel'

export const Projects = () => {
  return (
    <div className="w-full h-[423px] flex-col justify-start items-center gap-20 inline-flex">
      <div className="flex-col justify-start items-center flex">
        <div className="text-white text-[40px] font-extrabold leading-[60px]">
          Know the Projects
        </div>
        <div className="text-white text-xl font-medium leading-[30px]">
          Know the projects and invest on great ideas with security!{' '}
        </div>
      </div>
      <div className="w-full justify-center items-center gap-6 flex">
        <Carousel />
      </div>
    </div>
  )
}
