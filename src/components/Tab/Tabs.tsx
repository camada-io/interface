'use client'

import {
  useState,
  Children,
  HTMLAttributes,
  DetailedHTMLProps,
  cloneElement,
  useMemo,
} from 'react'

interface TabsProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: React.ReactNode
}

type TabProps = {
  label: string
}

export function Tabs({ children, className, ...props }: TabsProps) {
  const tabs = Children.toArray(children) as React.ReactElement<TabProps>[]

  const [activeTab, setActiveTab] = useState(tabs[0].props.label)

  const handleClick = (newActiveTab: string) => {
    setActiveTab(newActiveTab)
  }

  const ActiveTab = useMemo(() => {
    const child = tabs.find(
      (child) => child.props.label === activeTab,
    ) as React.ReactElement<
      TabProps &
        DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
    >

    return cloneElement(child, {
      className: `${child.props.className} backdrop-blur-sm`,
    })
  }, [activeTab, tabs])

  return (
    <div
      className={`flex flex-col justify-center items-center ${className}`}
      {...props}
    >
      <div className="flex sm:gap-4 bg-gray-600 backdrop-blur-sm rounded-t-[10px] p-[8px]">
        {tabs.map((child) => {
          return (
            <button
              className={`px-[24px] py-[12px] text-[18px] max-[639px]:px-[16px] ${
                activeTab === child.props.label && 'bg-gray-500 rounded-[5px]'
              }`}
              key={child.props.label}
              onClick={() => handleClick(child.props.label)}
            >
              {child.props.label}
            </button>
          )
        })}
      </div>

      <div className="flex bg-gray-600 rounded-[10px] p-[24px] w-full">
        {ActiveTab}
      </div>
    </div>
  )
}
