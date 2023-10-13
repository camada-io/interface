import { BiCoinStack } from 'react-icons/bi'
import { AiOutlineMail } from 'react-icons/ai'
import { RiTodoLine, RiFunctionLine } from 'react-icons/ri'
import Camada from '@/assets/icons/camada.svg'

export type Menu = {
  id: number
  title: string
  path?: string
  newTab: boolean
  submenu?: Menu[]
}

export const menuItems = [
  {
    label: 'About us',
    icon: Camada,
  },
  {
    label: 'Stake',
    icon: BiCoinStack,
  },
  {
    label: 'Projects',
    icon: RiFunctionLine,
  },
  {
    label: 'Apply',
    icon: RiTodoLine,
  },
  {
    label: 'Contact',
    icon: AiOutlineMail,
  },
]
