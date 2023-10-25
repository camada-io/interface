import { BiCoinStack } from "react-icons/bi"
import { AiOutlineMail } from "react-icons/ai"
import { RiTodoLine, RiFunctionLine } from "react-icons/ri"
import Camada from "@/assets/icons/camada.svg"

export type Menu = {
  id: number
  title: string
  path?: string
  newTab: boolean
  submenu?: Menu[]
  icon?: any
}

export const menuDataFooter: Menu[] = [
  {
    id: 1,
    title: "About us",
    path: "/about",
    newTab: false,
    icon: Camada,
  },
  {
    id: 2,
    title: "Stake",
    path: "/stake",
    newTab: false,
    icon: BiCoinStack,
  },
  {
    id: 3,
    title: "Projects",
    path: "/projects",
    newTab: false,
    icon: RiFunctionLine,
  },
  {
    id: 4,
    title: "Apply",
    path: "/apply",
    newTab: false,
    icon: RiTodoLine,
  },
  {
    id: 5,
    title: "Contact us",
    path: "/contact",
    newTab: false,
    icon: AiOutlineMail,
  },
]
