import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

import { projects } from "@/data/projects"
import { Button } from "@/components/ui/button"
import { ProjectCard } from "@/components/shared/project-card"

export const metadata: Metadata = {
  title: "Proyectos",
  description:
    "Todos los proyectos de Vilder Sandoval: aplicaciones frontend, full stack y APIs REST, cada uno con demo en vivo y código público.",
}

export default function ProjectsPage() {
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
      <span
        aria-hidden="true"
        className="mt-3 block h-0.5 w-14 rounded-full bg-primary/70"
      />

      <p className="mt-5 max-w-2xl text-sm leading-relaxed text-balance-pretty text-muted-foreground sm:text-base">
        {projects.length} proyectos construidos de principio a fin — frontend,
        full stack y APIs REST. Todos tienen el código público y una demo que
        puedes abrir ahora mismo.
      </p>

      <div className="mt-12 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  )
}
