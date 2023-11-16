import { About } from "@/components/About"
import { Apply } from "@/components/Apply"
import { Hero } from "@/components/Hero"
import { Projects } from "@/components/Projects"
import { Stake } from "@/components/Stake"
import { Syslabs } from "@/components/Syslabs"

export default function Home() {
  return (
    <div className="flex flex-col gap-20 lg:gap-[120px]">
      <Hero />
      <Projects />
      <Apply />
      <Stake />
      <About />
      <Syslabs />
    </div>
  )
}
