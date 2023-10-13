'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { menuData } from './menuData'
import { usePathname } from 'next/navigation'
import { BiWallet } from 'react-icons/bi'

export const Header = () => {
  const pathname = usePathname()

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
    window.addEventListener('scroll', handleStickyNavbar)
  })

  return (
    <header
      className={`header top-0 z-40 flex w-full lg:px-[130px] justify-center items-center bg-transparent h-[105px] ${
        sticky
          ? '!fixed !z-[9999] !bg-white !bg-opacity-80 shadow-sticky backdrop-blur-sm !transition dark:!bg-primary dark:!bg-opacity-20'
          : 'absolute'
      }`}
    >
      <div className="relative w-full lg:justify-between justify-center items-center">
        <div className="w-52 max-w-full">
          <Link
            href="/"
            className={`header-logo block w-full ${
              sticky ? 'py-5 lg:py-2' : 'py-8'
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
              'navbar absolute right-0 z-30 w-full rounded border-[.5px] border-body-color/50 bg-white py-4 px-6 duration-300 dark:border-body-color/20 dark:bg-dark lg:visible lg:static lg:w-auto lg:border-none lg:!bg-transparent lg:p-0 lg:opacity-100 invisible top-[120%] opacity-0'
            }
          >
            <ul className="block lg:flex lg:space-x-6">
              {menuData.map((menuItem) => (
                <li key={menuItem.id} className="group relative">
                  <Link
                    href={menuItem.path || '/'}
                    className={
                      'flex text-base text-dark font-medium leading-relaxed group-hover:opacity-70 dark:text-white lg:mr-0 lg:inline-flex lg:px-0'
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
        <button
          type="button"
          className="hidden lg:flex max-w-[212px] h-[45px] pl-4 pr-6 py-4 bg-brandBlue-200 rounded-[5px] justify-center items-center gap-4"
        >
          <BiWallet size={'1.5rem'} />
          <div className="text-white text-lg font-bold ">Connect Wallet</div>
        </button>
      </div>
    </header>
  )
}
