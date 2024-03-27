import { Tag } from "@/components/Tag"
import Image from "next/image"
import Link from "next/link"

type Project = {
  id: string
  address: string
  tokenName: string
  tokenSymbol: string
  icon: string
  banner: string
  status: string
  saleProgress: number
  categories: string[]
  saleAmountUsd: number
}

export function ItemList({ project }: { project: Project }) {
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value)
  }

  return (
    <Link
      href={`/projects/${project.address}`}
      className="border-b border-dashed border-b-whiteAlpha-300 last:border-b-0"
    >
      <div className="flex max-[1023px]:hidden sm:w-full backdrop-blur-sm bh-gray-600 gap-4 items-center p-4">
        <div className="flex w-full gap-2 items-center">
          <Image
            src={project?.icon || "/images/icon_not_found.jpg"}
            width={45}
            height={45}
            alt={project.tokenName}
            className="rounded-full w-[45px] h-[45px]"
          />
          <p className="font-bold uppercase">{project.tokenName}</p>
          <p>{project.tokenSymbol}</p>
        </div>
        <div className="flex w-full flex-start  max-w-[150px] min-w-[150px]">
          <Tag type={project.status} />
        </div>
        <div className="flex w-full gap-2 max-[1023px]:hidden">
          {project?.categories?.map((category) => (
            <div
              key={category}
              className="px-4 py-0.5 bg-white bg-opacity-20 rounded-[100px] justify-center items-center gap-2.5 inline-flex"
            >
              <div className="text-white text-sm font-medium leading-normal">
                {category}
              </div>
            </div>
          ))}
        </div>
        <div className="flex w-full  max-w-[150px] min-w-[150px]">
          <p>{formatCurrency(project.saleAmountUsd)}</p>
        </div>

        <div className="flex w-full flex-start items-center gap-[10px] ">
          <p>{project.saleProgress}%</p>
          <div className="flex w-full h-[8px] bg-whiteAlpha-500 rounded-[100px]">
            <div
              className={`flex h-[8px] bg-brandBlue-100 rounded-[100px]`}
              style={{
                width: project.saleProgress ? `${project.saleProgress}%` : "0%",
              }}
            ></div>
          </div>
        </div>
      </div>

      <div className="hidden max-[1023px]:flex flex-col gap-4 items-center py-4">
        <div className="flex w-full gap-4 items-center">
          <Image
            src={project?.icon || "/images/icon_not_found.jpg"}
            width={45}
            height={45}
            alt={project.tokenName}
            className="rounded-full"
          />
          <div>
            <div className="flex w-full gap-2 items-center">
              <p className="font-bold uppercase">{project.tokenName}</p>
              <p>{project.tokenSymbol}</p>
            </div>
            <div className="flex w-full gap-2">
              <Tag type={project.status} />
              {project?.categories?.map((category) => (
                <div
                  key={category}
                  className="w-[83px] h-7 px-4 py-0.5 bg-white bg-opacity-20 rounded-[100px] justify-center items-center gap-2.5 inline-flex"
                >
                  <div className="text-white text-sm font-medium leading-normal">
                    {category}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col gap-2">
          <div className="flex w-full justify-between">
            <p>Expected Raise</p>
            <p>{formatCurrency(project.saleAmountUsd)}</p>
          </div>
          <div className="flex w-full items-center gap-[10px]">
            <p>{project.saleProgress}%</p>
            <div className="flex w-full h-[8px] bg-whiteAlpha-500 rounded-[100px]">
              <div
                className={`flex w-[${project.saleProgress}%] h-[8px] bg-brandBlue-100 rounded-[100px]`}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
