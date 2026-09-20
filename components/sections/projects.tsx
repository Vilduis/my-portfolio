import Link from "next/link"
import { ArrowRight, Code2 } from "lucide-react"

import { featuredProjects, projects } from "@/data/projects"
import { Button } from "@/components/ui/button"
import { Section } from "@/components/shared/section"
import { FeaturedProject } from "@/components/shared/featured-project"

export function ProjectsSection() {
  return (
    <Section id="proyectos" title="Proyectos" icon={Code2}>
      <div className="space-y-14 sm:space-y-20">
        {featuredProjects.map((project) => (
          <FeaturedProject key={project.id} project={project} />
        ))}
      </div>

      <div className="mt-14 flex justify-center">
        <Button
          variant="outline"
          size="lg"
          nativeButton={false}
          render={<Link href="/projects" />}
        >
          Ver los {projects.length} proyectos
          <ArrowRight />
        </Button>
      </div>
    </Section>
  )
}
