import { About } from '@/components/About'
import { Apply } from '@/components/Apply'
import { Hero } from '@/components/Hero'
import { Projects } from '@/components/Projects'
import { Stake } from '@/components/Stake'
import { Syslabs } from '@/components/Syslabs'

export default function Home() {
  return (
    <div className="flex flex-col gap-11 lg:gap-32">
      <Hero />
      <Projects />
      <Apply />
      <Stake />
      <About />
      <Syslabs />
    </div>
  )
}
