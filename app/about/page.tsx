import type { Metadata } from "next"
import About from "@/components/sections/about"

export const metadata: Metadata = {
  title: "Sobre mí",
  description:
    "Conoce mi historia, las tecnologías que uso y mi experiencia profesional como Frontend Developer.",
}
import Technology from "@/components/sections/technology"
import ExperienceEducation from "@/components/sections/experience-education"

export default function AboutPage() {
  return (
    <div>
      <About />
      <Technology />
      <ExperienceEducation />
    </div>
  )
}
