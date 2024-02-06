"use client"

import { About } from "@/components/About"
import { Apply } from "@/components/Apply"
import { Hero } from "@/components/Hero"
import { Projects } from "@/components/Projects"
import { Stake } from "@/components/Stake"
import { Syslabs } from "@/components/Syslabs"
import { checkUserAuthenticated } from "@/utils/userAuth"
import { useAccount } from "wagmi"

export default function Home() {
  const { isConnected } = useAccount()
  const isUserAuthenticated = checkUserAuthenticated(isConnected)

  return (
    <div className="flex flex-col gap-20 lg:gap-[120px]">
      <Hero />
      {isUserAuthenticated && (
        <>
          <Projects />
          <Apply />
          <Stake />
        </>
      )}
      <About />
      <Syslabs />
    </div>
  )
}
