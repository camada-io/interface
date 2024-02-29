import { BsFilterLeft } from "react-icons/bs"
import { ItemList } from "./itemList"
import { Card } from "@/components/Card"
import Link from "next/link"
import { IconNames } from "./SocialIcon"

type Data = {
  id: string
  tokenName: string
  tokenSymbol: string
  tokenAddress: string
  address: string
  icon: string
  banner: string
  status: "On going" | "Finished" | "Coming soon"
  saleProgress: number
  categories: string[]
  saleAmountUsd: number
  description: string
  about: string
  averageUSDPrice: number
  endTime: string
  closeTime: string
  openTime: string
  socialLinks: LinkType
  totalRaised: number
}

type LinkType = {
  [key in IconNames]: string
}

type ProjectListProps = {
  projects: Data[]
  pageInfo?: { hasNextPage: boolean; hasPreviousPage: boolean }
  status: string[]
  categories: string[]
  view: "grid" | "list"
  onOrderChange?: (order: { name: string; order: "asc" | "desc" }) => void
}

export function ProjectList({
  projects,
  onOrderChange,
  pageInfo,
  view,
}: ProjectListProps) {
  const changeOrder = (
    event: React.MouseEvent<HTMLDivElement> & { target: HTMLDivElement },
  ) => {
    const { target } = event
    const orderData = target.getAttribute("data-order")
    const orderName = target.getAttribute("data-order-name")

    if (!onOrderChange || !orderName) return

    if (!orderData) {
      target.setAttribute("data-order", "asc")
      onOrderChange({ name: orderName, order: "asc" })
      return
    }

    const order = orderData === "desc" ? "asc" : "desc"

    target.setAttribute("data-order", order)

    onOrderChange({ name: orderName, order })
  }

  return (
    <>
      <div
        className={`flex w-full flex-col rounded-[20px] max-[639px]:bg-transparent ${
          view === "grid" ? "bg-transparent" : ""
        }`}
      >
        {view === "list" && (
          <div className="flex w-full gap-4 items-center p-4 font-bold text-[16px] rounded-t-[20px] bg-gray-600 max-[1023px]:hidden">
            <div className="flex w-full">
              <p>Project</p>
            </div>
            <div className="flex w-full flex-start max-w-[150px]">
              <div className="flex items-center gap-2">
                <p>Status</p>
                <div onClick={changeOrder}>
                  <BsFilterLeft
                    size={24}
                    data-order-name="status"
                    className="cursor-pointer data-[order='asc']:rotate-180 data-[order='asc']:scale-x-[-1]"
                  />
                </div>
              </div>
            </div>
            <div className="flex w-full max-[1023px]:hidden">
              <p>Categories</p>
            </div>
            <div className="flex w-full flex-start max-w-[150px]">
              <div className="flex items-center gap-2">
                <p>Expected Raise</p>
                <div onClick={changeOrder}>
                  <BsFilterLeft
                    size={24}
                    data-order-name="saleAmountUsd"
                    className="cursor-pointer data-[order='asc']:rotate-180 data-[order='asc']:scale-x-[-1]"
                  />
                </div>
              </div>
            </div>
            <div className="flex w-full flex-start items-center max-[639px]:min-w-[400px] max-[0px]:min-w-[10px]">
              <div className="flex items-center gap-2">
                <p>Progress</p>
                <div onClick={changeOrder}>
                  <BsFilterLeft
                    size={24}
                    data-order-name="saleProgress"
                    className="cursor-pointer data-[order='asc']:rotate-180 data-[order='asc']:scale-x-[-1]"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        <div
          className={`${
            view === "grid"
              ? "grid grid-cols-3 gap-4 max-[960px]:grid-cols-2 max-[639px]:grid-cols-1"
              : "flex-col flex"
          }`}
        >
          {view === "list"
            ? projects.map((project) => (
                <ItemList key={project.id} project={project} />
              ))
            : view === "grid"
            ? projects.map((project) => (
                <Link key={project.id} href={`/projects/${project.address}`}>
                  <Card
                    amountLabel="Expected Raise"
                    typeBadge={project.status}
                    data={project}
                  />
                </Link>
              ))
            : null}
        </div>
      </div>

      {pageInfo?.hasNextPage && (
        <button className="min-w-[310px] mx-auto rounded-[5px] px-[24px] py-[16px] bg-brandBlue-100 rounded-[20px] text-white font-bold text-[18px]">
          Load more
        </button>
      )}
    </>
  )
}
