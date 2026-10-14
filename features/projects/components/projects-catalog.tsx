import Link from "next/link"
import { ArrowLeft } from "lucide-react"

import { Button } from "@/components/ui/button"
import { HeadingAccent } from "@/components/shared/heading-accent"
import { projects } from "@/features/projects/data/projects"
import { getProjectsPage } from "@/features/projects/lib/catalog"
import { ProjectCard } from "@/features/projects/components/project-card"
import { ProjectFilters } from "@/features/projects/components/project-filters"
import { ProjectPagination } from "@/features/projects/components/project-pagination"
import type { ProjectCategory } from "@/features/projects/types"

interface ProjectsCatalogProps {
  category?: ProjectCategory
  page?: string
}

export function ProjectsCatalog({ category, page }: ProjectsCatalogProps) {
  const {
    projects: visibleProjects,
    currentPage,
    totalPages,
  } = getProjectsPage(category, page)

  return (
    <div className="mx-auto w-full max-w-6xl px-5 pt-28 pb-16 sm:px-6 sm:pt-36">
      <Button
        variant="ghost"
        size="sm"
        className="-ml-2.5 text-muted-foreground"
        nativeButton={false}
        render={<Link href="/" />}
      >
        <ArrowLeft />
        Volver al inicio
      </Button>

      <h1 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl">
        Proyectos
      </h1>
      <HeadingAccent className="mt-3" />

      <p className="mt-5 max-w-2xl text-sm leading-relaxed text-balance-pretty text-muted-foreground sm:text-base">
        {projects.length} proyectos construidos de principio a fin entre
        frontend, full stack y APIs REST. Todos tienen el código público y una
        demo que puedes abrir ahora mismo.
      </p>

      <ProjectFilters active={category} />

      <div className="mt-8 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {visibleProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      <ProjectPagination
        category={category}
        currentPage={currentPage}
        totalPages={totalPages}
      />
    </div>
  )
}
