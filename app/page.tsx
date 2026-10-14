import { HeroSection } from "@/features/hero/components/hero-section"
import { ExperienceSection } from "@/features/experience/components/experience-section"
import { ProjectsSection } from "@/features/projects/components/projects-section"
import { AboutSection } from "@/features/about/components/about-section"
import { ContactSection } from "@/features/contact/components/contact-section"

export default function Page() {
  return (
    <>
      <HeroSection />
      <ExperienceSection />
      <ProjectsSection />
      <AboutSection />
      <ContactSection />
    </>
  )
}
