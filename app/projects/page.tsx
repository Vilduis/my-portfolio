import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

import { categoryLabel, projects, type ProjectCategory } from "@/data/projects"
import { site } from "@/data/site"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { ProjectCard } from "@/components/shared/project-card"

const title = `Proyectos | ${site.name}`
const description =
  "Todos los proyectos de Vilder Sandoval: aplicaciones frontend, full stack y APIs REST, cada uno con demo en vivo y código público."

export const metadata: Metadata = {
  title: "Proyectos",
  description,
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    type: "website",
    locale: "es_PE",
    url: "/projects",
    siteName: site.name,
    title,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
}

const PAGE_SIZE = 9

const categories = Object.keys(categoryLabel) as ProjectCategory[]

const isCategory = (value?: string): value is ProjectCategory =>
  categories.includes(value as ProjectCategory)

function projectsHref(category?: ProjectCategory, page = 1) {
  const params = new URLSearchParams()
  if (category) params.set("categoria", category)
  if (page > 1) params.set("page", String(page))
  const query = params.toString()
  return query ? `/projects?${query}` : "/projects"
}

export default async function ProjectsPage({
  searchParams,
}: {
  searchParams: Promise<{ categoria?: string; page?: string }>
}) {
  const { categoria, page } = await searchParams
  const category = isCategory(categoria) ? categoria : undefined

  const filtered = category
    ? projects.filter((project) => project.category === category)
    : projects

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE))
  const requested = Number.parseInt(page ?? "1", 10)
  const currentPage = Number.isNaN(requested)
    ? 1
    : Math.min(Math.max(requested, 1), totalPages)

  const visibleProjects = filtered.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE
  )

  const filters = [
    { value: undefined, label: "Todos", count: projects.length },
    ...categories.map((value) => ({
      value,
      label: categoryLabel[value],
      count: projects.filter((project) => project.category === value).length,
    })),
  ].filter((filter) => filter.count > 0)

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
        {projects.length} proyectos construidos de principio a fin entre
        frontend, full stack y APIs REST. Todos tienen el código público y una
        demo que puedes abrir ahora mismo.
      </p>

      <nav aria-label="Filtrar por categoría" className="mt-10">
        <ul className="flex flex-wrap gap-x-2 gap-y-3">
          {filters.map((filter) => {
            const isActive = filter.value === category
            return (
              <li key={filter.label}>
                <Button
                  variant={isActive ? "secondary" : "ghost"}
                  size="sm"
                  className={cn(
                    "touch-hitbox",
                    !isActive && "text-muted-foreground"
                  )}
                  nativeButton={false}
                  render={
                    <Link
                      href={projectsHref(filter.value)}
                      scroll={false}
                      aria-current={isActive ? "page" : undefined}
                    />
                  }
                >
                  {filter.label}
                  <span className="font-mono text-xs text-muted-foreground">
                    {filter.count}
                  </span>
                </Button>
              </li>
            )
          })}
        </ul>
      </nav>

      <div className="mt-8 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {visibleProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {totalPages > 1 && (
        <Pagination className="mt-16">
          <PaginationContent>
            {currentPage > 1 && (
              <PaginationItem>
                <PaginationPrevious
                  href={projectsHref(category, currentPage - 1)}
                />
              </PaginationItem>
            )}
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
              <PaginationItem key={n}>
                <PaginationLink
                  href={projectsHref(category, n)}
                  isActive={n === currentPage}
                >
                  {n}
                </PaginationLink>
              </PaginationItem>
            ))}
            {currentPage < totalPages && (
              <PaginationItem>
                <PaginationNext
                  href={projectsHref(category, currentPage + 1)}
                />
              </PaginationItem>
            )}
          </PaginationContent>
        </Pagination>
      )}
    </div>
  )
}
