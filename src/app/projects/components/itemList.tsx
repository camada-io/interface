import { Tag, TagProject } from '@/components/Tag'
import Image from 'next/image'
import Link from 'next/link'

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

export function ItemList({ project }: { project: Project }) {
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
    <Link href={`/projects/${project.tokenName.toLowerCase()}`}>
      <div className="flex w-full backdrop-blur-sm bh-gray-600 gap-4 items-center p-4 border-b border-dashed border-b-whiteAlpha-300 last:border-b-0 max-[639px]:hidden">
        <div className="flex w-full gap-2 items-center">
          <Image
            src={project?.icon || '/images/icon_not_found.jpg'}
            width={45}
            height={45}
            alt={project.tokenName}
            className="rounded-full"
          />
          <p className="font-bold">{project.tokenName}</p>
          <p>{project.tokenSymbol}</p>
        </div>
        <div className="flex w-full flex-start max-w-[150px]">
          <Tag type={statusNameToNumber(project.status)} />
        </div>
        <div className="flex w-full gap-2">
          {project?.categories?.map((category) => (
            <TagProject key={category} type={categoryNameToNumber(category)} />
          ))}
        </div>
        <div className="flex w-full max-w-[150px]">
          <p>{formatCurrency(project.saleAmountUsd)}</p>
        </div>

        <div className="flex w-full flex-start items-center gap-[10px] sm:min-w-[400px] max-[0px]:min-w-[10px]">
          <p>{project.saleProgress}%</p>
          <div className="flex w-full h-[8px] bg-whiteAlpha-500 rounded-[100px]">
            <div
              className={`flex w-[${project.saleProgress}%] h-[8px] bg-brandBlue-100 rounded-[100px]`}
            ></div>
          </div>
        </div>
      </div>

      <div className="sm:hidden flex">
        <div className="flex w-full gap-2 items-center">
          <Image
            src={project?.icon || '/images/icon_not_found.jpg'}
            width={45}
            height={45}
            alt={project.tokenName}
            className="rounded-full"
          />
          <p className="font-bold">{project.tokenName}</p>
          <p>{project.tokenSymbol}</p>
        </div>
      </div>
    </Link>
  )
}
