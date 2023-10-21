import { Apply } from '@/components/Apply'
import { Hero } from '@/components/Hero'
import { Syslabs } from '@/components/Syslabs'

export default function Home() {
  return (
    <div className="flex flex-col gap-11 lg:gap-32">
      <Hero />
      <Apply />
      <Syslabs />
    </div>
  )
}
