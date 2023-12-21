"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { menuData } from "./menuData"
import { usePathname } from "next/navigation"
import { BiWallet } from "react-icons/bi"
import { RiUserLine, RiLogoutBoxLine } from "react-icons/ri"
import { useAccount, useDisconnect } from "wagmi"
import { useConnectWallet } from "@/stores/connectWallet"

export const Header = () => {
  const pathname = usePathname()

  const { disconnect } = useDisconnect()

  const { onOpen } = useConnectWallet()

  const { address, isConnected } = useAccount()

  const [isClient, setIsClient] = useState(false)

  // Sticky Navbar
  const [sticky, setSticky] = useState(false)
  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true)
    } else {
      setSticky(false)
    }
  }

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar)
  })

  return (
    <header
      className={`header top-0 z-40 flex w-full justify-center items-center bg-transparent h-[105px] ${
        sticky
          ? "!fixed !bg-gray-900 !bg-opacity-80 shadow-sticky backdrop-blur-sm !transition dark:!bg-primary dark:!bg-opacity-20"
          : "absolute"
      }`}
    >
      <div className="relative flex w-full lg:justify-between justify-center items-center px-0 max-[1279px]:px-[32px] max-w-[1280px]">
        <div className="w-52 max-w-full">
          <Link
            href="/"
            className={`header-logo block w-full ${
              sticky ? "py-5 lg:py-2" : "py-8"
            } `}
          >
            <Image
              src="/images/logo/camada-logo-dark.svg"
              alt="logo"
              width={160}
              height={30}
              className="w-full"
            />
          </Link>
        </div>
        <div className="flex justify-center items-center xl:gap-6 lg:gap-3">
          <nav
            id="navbarCollapse"
            className={
              "navbar absolute right-0 z-30 w-full rounded border-[.5px] border-body-color/50 bg-white py-4 px-6 duration-300 dark:border-body-color/20 dark:bg-dark lg:visible lg:static lg:w-auto lg:border-none lg:!bg-transparent lg:p-0 lg:opacity-100 invisible top-[120%] opacity-0"
            }
          >
            <ul className="block lg:flex lg:space-x-6">
              {menuData.map((menuItem) => (
                <li key={menuItem.id} className="group relative">
                  <Link
                    href={menuItem.path || "/"}
                    className={
                      "flex text-base text-dark font-medium leading-relaxed group-hover:opacity-70 dark:text-white lg:mr-0 lg:inline-flex lg:px-0"
                    }
                  >
                    {menuItem.title}
                  </Link>
                  {pathname === menuItem.path && (
                    <div className="self-stretch grow shrink basis-0 border border-brandBlue-200" />
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="min-w-[212px] hidden lg:flex">
          {isClient &&
            (!isConnected ? (
              <button
                type="button"
                className="flex max-w-[212px] h-[45px] pl-4 pr-6 py-4 bg-brandBlue-200 rounded-[5px] justify-center items-center gap-4 text-sm"
                onClick={onOpen}
              >
                <BiWallet size={"1.5rem"} />
                <div className="text-white text-lg font-bold">
                  Connect Wallet
                </div>
              </button>
            ) : (
              <div className="flex group flex-col relative cursor-pointer">
                <div className="flex max-w-[212px] h-[45px] pl-4 pr-6 py-4 bg-gray-500 rounded-[5px] justify-center items-center gap-4 text-sm">
                  <div className="w-30 h-30 rounded-full flex justify-center items-center bg-brandBlue-200 p-2">
                    <RiUserLine size={18} color="white" />
                  </div>
                  {address && `${address.slice(0, 6)}...${address.slice(-4)}`}
                </div>
                <div className="flex group-hover:flex opacity-0 group-hover:opacity-100 group-hover:transition-opacity absolute bottom-[-50px] left-0 right-0 z-1">
                  <button
                    onClick={() => disconnect()}
                    className="flex mt-2 gap-2 bg-gray-500 rounded-[5px] w-full h-[45px] justify-center items-center"
                  >
                    <RiLogoutBoxLine size={18} color="white" />
                    <div>Disconnect</div>
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </header>
  )
}
