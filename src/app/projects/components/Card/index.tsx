import Image from 'next/image'
import { Tag, TagProject } from '@/components/Tag'
type Project = {
  id: string
  tokenName: string
  tokenSymbol: string
  icon: string
  banner: string
  status: string
  saleProgress: number
  categories: string[]
  saleAmountUsd: number
}

export const Card = ({ project }: { project: Project }) => {
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value)
  }

  const statusNameToNumber = (tag: string) => {
    switch (tag) {
      case 'On going':
        return 1
      case 'Coming soon':
        return 2
      case 'Finished':
        return 3
      default:
        return 0
    }
  }

  const categoryNameToNumber = (tag: string) => {
    switch (tag) {
      case 'DeFi':
        return 1
      case 'Finance':
        return 2
      case 'SDK':
        return 3
      case 'Tooling':
        return 4
      default:
        return 0
    }
  }

  return (
    <div
      className="flex flex-col w-full w-[310px] lg:max-w-[480px] h-[224px] bg-no-repeat pt-6 bg-cover rounded-[20px] justify-between"
      style={{
        backgroundImage: `url(${
          project.banner || '/images/backgroundCardDefault.svg'
        })`,
      }}
    >
      <div className="w-full h-7 px-6 justify-start items-start gap-1 inline-flex">
        <Tag type={statusNameToNumber(project.status)} />
        {project.categories?.map((category) => (
          <TagProject key={category} type={categoryNameToNumber(category)} />
        ))}
      </div>
      <div className="flex flex-col p-6 h-32 backdrop-blur-sm bg-opacity-50 rounded-tr-[100px] rounded-bl-[20px] rounded-br-[20px] bg-gray-650 gap-2">
        <div className="max-w-max pl-2 pr-5 h-7 flex bg-whiteAlpha-500 rounded-[100px] backdrop-blur-sm justify-start items-center gap-2">
          <Image
            src={project?.icon || '/images/icon_not_found.jpg'}
            alt="heroImage"
            width={20}
            height={20}
            className="rounded-full"
          />
          <div className="text-white text-sm font-bold leading-normal">
            {`${project.tokenName} ${project.tokenSymbol}`}
          </div>
        </div>
        <div className="flex max-w-[284px] lg:max-w-[400px] h-[27px] left-[10px] top-[114px] justify-start items-center gap-2">
          <div className="flex h-2 w-full bg-white bg-opacity-40 rounded-[100px] items-center justify-start">
            <div
              className="flex h-2 text-xs leading-none text-center text-white bg-brandBlue-200 rounded-[100px]"
              style={{ width: project.saleProgress }}
            />
          </div>
          <div className="text-white text-sm font-bold leading-normal">
            {project.saleProgress}%
          </div>
        </div>
        <div className="w-[178px] h-6 left-[10px] justify-start items-start gap-2 inline-flex">
          <div className="text-white text-sm font-bold leading-normal">
            Expected Raise:
          </div>
          <div className="text-white text-sm font-bold leading-normal">
            {formatCurrency(project.saleAmountUsd)}
          </div>
        </div>
      </div>
    </div>
  )
}
