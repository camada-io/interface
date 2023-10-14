import { menuDataFooter } from '@/types/menu'
import { colors } from '@/utils/colors'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { RiHome2Line } from 'react-icons/ri'

export const FooterMenu = () => {
  const pathname = usePathname()

  return (
    <div className="fixed bottom-0 w-full">
      <div className="w-full h-[46px] justify-between items-start inline-flex bg-gray-600">
        {/* TODO: refactor to Button with interaction state */}
        <div className="px-8 h-full bg-brandBlue-200 rounded-tr-[100px] justify-center items-center gap-2 flex">
          <div className="text-white text-sm font-bold leading-normal">
            sys1q...dk4jd
          </div>
        </div>
        <button className="pl-7 pr-8 h-full bg-brandBlue-100 rounded-tl-[100px] justify-start items-center gap-2.5 flex">
          <Link href={'/'}>
            <RiHome2Line size={'1.5rem'} />
          </Link>
        </button>
      </div>
      <div className="w-full h-[74px] bg-gray-500 py-4 px-6 lg:hidden">
        <div className="flex justify-center items-center gap-5">
          {menuDataFooter.map((item) => (
            <Link
              key={item.id}
              className="flex flex-col items-center"
              href={item.path || '/'}
            >
              {item.title === 'About us' ? (
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.4705 0.9H23.1V7.41481H18.5496C16.7675 7.41481 14.9901 7.88919 13.6605 8.88606C12.4781 9.77227 11.5369 10.5798 10.7206 11.2875L10.7205 11.2876L10.5012 11.4777L10.5001 11.4787C9.77613 12.1086 9.15269 12.6493 8.53654 13.0968L8.53594 13.0972C7.86009 13.5889 7.18683 13.9746 6.39492 14.2376L6.39423 14.2378C5.59849 14.5028 4.68197 14.6451 3.52941 14.6451H0.9V8.13027H5.45034C7.23248 8.13027 9.00989 7.65588 10.3394 6.65901C11.5219 5.77281 12.4631 4.96522 13.2794 4.25757L13.2795 4.2575L13.4988 4.06735L13.4999 4.06636C14.2236 3.43671 14.8472 2.89582 15.4635 2.4475C16.1397 1.95628 16.8131 1.57047 17.605 1.30747L17.6057 1.30724C18.4015 1.04226 19.318 0.9 20.4705 0.9Z"
                    stroke={
                      pathname === item.path ? colors.brandBlue[100] : 'white'
                    }
                    stroke-width="1.8"
                  />
                  <path
                    d="M20.4707 11.0363H23.1001V17.5511H18.5497C16.7676 17.5511 14.9902 18.0255 13.6607 19.0224C12.4782 19.9086 11.537 20.7162 10.7207 21.4238L10.7206 21.4239L10.5013 21.614L10.5002 21.615C9.77625 22.2449 9.15281 22.7856 8.53667 23.2331L8.53607 23.2335C7.86021 23.7252 7.18695 24.1109 6.39505 24.3739L6.39435 24.3742C5.59862 24.6391 4.68209 24.7814 3.52953 24.7814H0.900122V18.2666H5.45047C7.2326 18.2666 9.01001 17.7922 10.3395 16.7953C11.522 15.9091 12.4632 15.1015 13.2795 14.3939L13.2796 14.3938L13.4989 14.2037L13.5 14.2027C14.2237 13.573 14.8473 13.0321 15.4637 12.5838C16.1398 12.0926 16.8132 11.7068 17.6052 11.4438L17.6059 11.4436C18.4016 11.1786 19.3181 11.0363 20.4707 11.0363Z"
                    stroke={
                      pathname === item.path ? colors.brandBlue[100] : 'white'
                    }
                    stroke-width="1.8"
                  />
                </svg>
              ) : (
                <item.icon
                  size={'1.375rem'}
                  color={
                    pathname === item.path ? colors.brandBlue[100] : 'white'
                  }
                />
              )}

              <span className="text-xs text-white">{item.title}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
