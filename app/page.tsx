import { Hero } from "@/components/sections/hero"
import { ExperienceSection } from "@/components/sections/experience"
import { ProjectsSection } from "@/components/sections/projects"
import { AboutSection } from "@/components/sections/about"
import { ContactSection } from "@/components/sections/contact"

export default function Page() {
  return (
    <>
      <Hero />
      <ExperienceSection />
      <ProjectsSection />
      <AboutSection />
      <ContactSection />
    </>
  )
}
