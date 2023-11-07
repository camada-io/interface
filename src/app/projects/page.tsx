"use client"

import { useCallback, useState } from "react"
import { useQuery } from "@apollo/client"
import { FaThList } from "react-icons/fa"
import { BsGrid3X3GapFill } from "react-icons/bs"
import { FiSearch } from "react-icons/fi"

import { PageHeader } from "@/components/PageHeader"
import { ProjectList } from "./components/projectList"
import { PROJECTS } from "@/Apollo/queries/sales"

type Sort = {
  name: string
  order: "asc" | "desc"
}

export default function Projects() {
  const [selectedStatus, setSelectedStatus] = useState<string[]>([])
  const [selectedCategory, setSelectedCategory] = useState<string[]>([])
  const [selectedView, setSelectedView] = useState<"list" | "grid">("list")
  const [sortList, setSortList] = useState<Sort[]>([])
  const [searchValue, setSearchValue] = useState("")

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

  return (
    <>
      <PageHeader
        title="Projects"
        description="Spend your Allocations to help other projects grow!"
      />

      <div className="lg:px-[136px] py-[50px] sm:py-[100px] mx-auto flex gap-[60px] w-full flex-col max-[639px]:px-[32px] ">
        <div className="flex w-full gap-[24px]">
          <div className="flex w-full gap-[24px] max-[639px]:hidden">
            <div className="flex w-full flex-col gap-1">
              <p className="text-weight-[500]">Status</p>
              <ul className="flex gap-2 ">
                {statusList.map((status) => (
                  <label key={status} htmlFor={status}>
                    <li
                      className={`w-max cursor-pointer border border-whiteAlpha-300 py-[2px] px-[16px] bg-gray-600 rounded-[100px] ${
                        isStatusChecked(status) &&
                        "!border-brandBlue-100 !bg-whiteAlpha-300"
                      }`}
                      key={status}
                    >
                      {status}
                    </li>

                    <input
                      onChange={({ target: { checked } }) => {
                        setSelectedStatus(
                          checked
                            ? [...selectedStatus, status]
                            : selectedStatus.filter((s) => s !== status),
                        )
                      }}
                      type="checkbox"
                      name={status}
                      id={status}
                      className="hidden"
                    />
                  </label>
                ))}
              </ul>
            </div>

            <div className="flex w-full flex-col gap-1">
              <p className="text-weight-[500]">Categories</p>
              <ul className="flex gap-2 ">
                {categoryList.map((category) => (
                  <label key={category} htmlFor={category}>
                    <li
                      className={`cursor-pointer border border-whiteAlpha-300 py-[2px] px-[16px] bg-gray-600 rounded-[100px] ${
                        isCategoryChecked(category) &&
                        "!border-brandBlue-100 !bg-whiteAlpha-300"
                      }`}
                      key={category}
                    >
                      {category}
                    </li>

                    <input
                      onChange={({ target: { checked } }) => {
                        setSelectedCategory(
                          checked
                            ? [...selectedCategory, category]
                            : selectedCategory.filter((s) => s !== category),
                        )
                      }}
                      type="checkbox"
                      name={category}
                      id={category}
                      className="hidden"
                    />
                  </label>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-1">
              <p className="text-weight-[500]">View</p>

              <div className="flex">
                <button
                  className={`border border-whiteAlpha-300 py-[4.5px] px-[16px] bg-gray-600 rounded-[100px] rounded-r-[0px] ${
                    selectedView === "list" &&
                    "!border-brandBlue-100 !bg-whiteAlpha-300"
                  }`}
                  onClick={() => setSelectedView("list")}
                >
                  <FaThList
                    size={20}
                    className={`${
                      selectedView === "list" && "text-brandBlue-100"
                    }`}
                  />
                </button>
                <button
                  className={`border border-whiteAlpha-300 py-[2px] px-[16px] bg-gray-600 rounded-[100px] rounded-l-[0px] ${
                    selectedView === "grid" &&
                    "!border-brandBlue-100 !bg-whiteAlpha-300"
                  }`}
                  onClick={() => setSelectedView("grid")}
                >
                  <BsGrid3X3GapFill
                    size={20}
                    className={`${
                      selectedView === "grid" && "text-brandBlue-100"
                    }`}
                  />
                </button>
              </div>
            </div>
          </div>

          <div className="flex w-full justify-end relative max-[1200px]:hidden">
            <div className="absolute top-[14px] right-[14px]">
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
    </>
  )
}
