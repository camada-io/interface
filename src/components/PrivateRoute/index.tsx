"use client"

import { APP_ROUTES } from "@/utils/appRoutes"
import { checkUserAuthenticated } from "@/utils/userAuth"
import { useRouter } from "next/navigation"
import { ReactNode, useEffect } from "react"

type PrivateRouteProps = {
  children: ReactNode
}

export function PrivateRoute({ children }: PrivateRouteProps) {
  const { push } = useRouter()

  const isUserAuthenticated = checkUserAuthenticated()

  useEffect(() => {
    if (!isUserAuthenticated) {
      push(APP_ROUTES.public.home)
    }
  }, [isUserAuthenticated, push])

  return (
    <>
      {!isUserAuthenticated && null}
      {isUserAuthenticated && children}
    </>
  )
}
