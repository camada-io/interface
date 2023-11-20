"use client"

import { useCallback, useState } from "react"
import { useQuery } from "@apollo/client"
import { FaThList } from "react-icons/fa"
import { BsGrid3X3GapFill } from "react-icons/bs"
import { FiSearch, FiFilter } from "react-icons/fi"
import { XMarkIcon } from "@heroicons/react/24/solid"

import { PageHeader } from "@/components/PageHeader"
import { ProjectList } from "./components/projectList"
import { PROJECTS } from "@/Apollo/queries/sales"
import Modal from "@/components/Modal"
import { useDisclosure } from "@/hooks/useDisclosure"

type Sort = {
  name: string
  order: "asc" | "desc"
}

interface CheckBoxMenuProps extends React.HTMLAttributes<HTMLDivElement> {
  items: string[]
  checkFn: (item: string) => boolean
  onCheck: (items: string[]) => void
  state: string[]
  itemStyle?: string
}

export default function Projects() {
  const [selectedStatus, setSelectedStatus] = useState<string[]>([])
  const [selectedCategory, setSelectedCategory] = useState<string[]>([])
  const [selectedView, setSelectedView] = useState<"list" | "grid">("list")
  const [sortList, setSortList] = useState<Sort[]>([])
  const [searchValue, setSearchValue] = useState("")
  const filterModal = useDisclosure()

  let timer: ReturnType<typeof setTimeout>

  const { data } = useQuery(PROJECTS, {
    fetchPolicy: "no-cache",
    variables: {
      active: true,
      search: searchValue,
      categories: selectedCategory,
      status: selectedStatus,
      sort: sortList,
    },
  })

  const statusList = ["On going", "Coming soon", "Finished"]
  const categoryList = ["DeFi", "Finance", "SDK", "Tooling"]

  const addSortToList = useCallback((sort: Sort) => {
    setSortList((prev) => {
      return [...prev.filter((s) => s.name !== sort.name), sort]
    })
  }, [])

  const isStatusChecked = (status: string) => {
    return selectedStatus.includes(status)
  }

  const isCategoryChecked = (category: string) => {
    return selectedCategory.includes(category)
  }

  function search(value: string) {
    clearTimeout(timer)
    timer = setTimeout(() => setSearchValue(value), 1500)
  }

  function clearAll() {
    setSelectedStatus([])
    setSelectedCategory([])
    setSortList([])
    filterModal.onClose()
  }

  const ViewSelector = ({ showLabel = true }: { showLabel?: boolean }) => (
    <div className="flex flex-col gap-1">
      {showLabel && <p className="text-weight-[500]">View</p>}

      <div className="flex">
        <button
          className={`border border-whiteAlpha-300 max-[639px]:py-[9px] max-[639px]:px-[24px] py-[4.5px] px-[16px] bg-gray-600 rounded-[100px] rounded-r-[0px] ${
            selectedView === "list" &&
            "!border-brandBlue-100 !bg-whiteAlpha-300"
          }`}
          onClick={() => setSelectedView("list")}
        >
          <FaThList
            size={20}
            className={`${selectedView === "list" && "text-brandBlue-100"}`}
          />
        </button>
        <button
          className={`border border-whiteAlpha-300  max-[639px]:py-[9px] max-[639px]:px-[24px] py-[2px] px-[16px] bg-gray-600 rounded-[100px] rounded-l-[0px] ${
            selectedView === "grid" &&
            "!border-brandBlue-100 !bg-whiteAlpha-300"
          }`}
          onClick={() => setSelectedView("grid")}
        >
          <BsGrid3X3GapFill
            size={20}
            className={`${selectedView === "grid" && "text-brandBlue-100"}`}
          />
        </button>
      </div>
    </div>
  )

  const CheckBoxMenu = useCallback(
    ({ items, onCheck, checkFn, state, itemStyle = "" }: CheckBoxMenuProps) => (
      <div className="flex gap-2 ">
        {items.map((item) => (
          <label key={item} htmlFor={item}>
            <div
              className={`w-max cursor-pointer border border-whiteAlpha-300 py-[2px] px-[16px] bg-gray-600 rounded-[100px] ${
                checkFn(item) && "!border-brandBlue-100 !bg-whiteAlpha-300"
              } ${itemStyle}`}
              key={item}
            >
              {item}
            </div>

            <input
              onChange={({ target: { checked } }) => {
                onCheck(
                  checked ? [...state, item] : state.filter((s) => s !== item),
                )
              }}
              type="checkbox"
              name={item}
              id={item}
              className="hidden"
            />
          </label>
        ))}
      </div>
    ),
    [],
  )

  return (
    <>
      <PageHeader
        title="Projects"
        description="Spend your Allocations to help other projects grow!"
      />

      <div className="py-[50px] sm:py-[100px] mx-auto flex gap-[60px] w-full flex-col max-[639px]:px-[32px] max-w-[1280px] max-[1279px]:px-[32px]">
        <div className="flex w-full gap-[24px]">
          <div className="flex w-full flex-col gap-4 lg:hidden">
            <div className="flex gap-2 justify-between items-center items-center">
              <div
                onClick={filterModal.onOpen}
                className="w-[124px] h-[45px] pl-4 pr-6 py-4 rounded-[5px] border border-brandBlue-100 justify-center items-center gap-4 inline-flex cursor-pointer"
              >
                <div className="w-6 h-6 justify-center items-center flex">
                  <FiFilter size={18} />
                </div>
                <div className="text-white text-lg font-bold">Filter</div>
              </div>
              <ViewSelector showLabel={false} />
            </div>

            <div className="flex w-full justify-end relative">
              <div className="absolute top-[12px] right-[14px] bg-gray-500">
                <FiSearch size={32} color="#FFFFFF5C" />
              </div>
              <input
                type="text"
                className="flex w-full shadow-sm rounded-[8px] bg-gray-500 px-[14px] py-[16px] text-white placeholder:text-whiteAlpha-500 placehoder:text-[16px] outline-none"
                placeholder="Search project name..."
                onChange={(e) => search(e.target.value)}
              />
            </div>
          </div>

          <div className="flex-col w-full gap-[24px]  max-[1023px]:!hidden md:flex md:flex-row">
            <div className="flex w-full flex-col gap-1">
              <p className="text-weight-[500]">Status</p>
              <CheckBoxMenu
                items={statusList}
                onCheck={setSelectedStatus}
                checkFn={isStatusChecked}
                state={selectedStatus}
              />
            </div>

            <div className="flex w-full flex-col gap-1">
              <p className="text-weight-[500]">Categories</p>
              <CheckBoxMenu
                items={categoryList}
                onCheck={setSelectedCategory}
                checkFn={isCategoryChecked}
                state={selectedCategory}
              />
            </div>

            <ViewSelector />
          </div>

          <div className="w-full justify-end relative max-[1023px]:!hidden md:flex">
            <div className="absolute top-[14px] right-[14px] bg-gray-500">
              <FiSearch size={32} color="#FFFFFF5C" />
            </div>
            <input
              type="text"
              className="flex w-[90%] shadow-sm rounded-[8px] bg-gray-500 px-[14px] py-[10px] text-white placeholder:text-whiteAlpha-500 placehoder:text-[16px] outline-none"
              placeholder="Search project name..."
              onChange={(e) => search(e.target.value)}
            />
          </div>
        </div>

        <ProjectList
          onOrderChange={addSortToList}
          projects={data?.getAllSales?.sales || []}
          pageInfo={data?.getAllSales?.pageInfo}
          status={selectedStatus}
          categories={selectedCategory}
          view={selectedView}
        />
      </div>

      <Modal
        isOpen={filterModal.isOpen}
        containerStyle="max-[1023px]:!items-end"
        contentContainerStyle="max-[1023px]:!min-w-[100%]"
      >
        <div className="relative flex w-full justify-end">
          <button className="fixed mt-[20px] mr-[20px] z-10">
            <XMarkIcon className="w-6 h-6" onClick={filterModal.onClose} />
          </button>
        </div>
        <div className="flex w-full pt-[30px] rounded-t-[20px] px-[18px] items-center bg-gray-600">
          <div className="flex w-full flex-col justify-start items-start gap-6 inline-flex">
            <div className="text-white text-2xl font-extrabold leading-10">
              Filter
            </div>
            <div className="pb-6 flex-col justify-start items-start gap-6 flex">
              <div className="flex-col justify-center items-start gap-1 flex">
                <div className="text-white text-sm font-medium leading-normal">
                  Status
                </div>
                <div className="justify-start items-center gap-2 inline-flex">
                  <CheckBoxMenu
                    items={statusList}
                    onCheck={setSelectedStatus}
                    checkFn={isStatusChecked}
                    state={selectedStatus}
                    itemStyle="!py-[6px]"
                  />
                </div>
              </div>
              <div className="flex-col justify-center items-start gap-1 flex">
                <div className="text-white text-sm font-medium leading-normal">
                  Categories
                </div>
                <div className="justify-start items-center gap-2 inline-flex">
                  <CheckBoxMenu
                    items={categoryList}
                    onCheck={setSelectedCategory}
                    checkFn={isCategoryChecked}
                    state={selectedCategory}
                    itemStyle="!py-[6px]"
                  />
                </div>
              </div>
            </div>
            <div className="flex w-full justify-between items-center gap-6 mb-6">
              <div
                onClick={clearAll}
                className="grow shrink basis-0 h-[45px] px-6 py-4 rounded-[5px] border border-brandBlue-100 justify-center items-center gap-2.5 flex"
              >
                <div className="text-white text-lg font-bold">Clear all</div>
              </div>
              <div
                onClick={filterModal.onClose}
                className="grow shrink basis-0 h-[45px] px-6 py-4 bg-cyan-500 rounded-[5px] justify-center items-center gap-2.5 flex"
              >
                <div className="text-white text-lg font-bold">Filter</div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  )
}
