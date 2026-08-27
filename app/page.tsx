import Hero from "@/components/sections/hero"
import { TechMarquee } from "@/components/sections/tech-marquee"

export default function Page() {
  return (
    <div className="flex min-h-svh flex-col">
      <Hero />
      <TechMarquee />
    </div>
  )
}
