import { categoryLabel, projects } from "@/features/projects/data/projects"
import type { ProjectCategory } from "@/features/projects/types"

const PAGE_SIZE = 9

const categories = Object.keys(categoryLabel) as ProjectCategory[]

export const isProjectCategory = (value?: string): value is ProjectCategory =>
  categories.includes(value as ProjectCategory)

export function projectsHref(category?: ProjectCategory, page = 1) {
  const params = new URLSearchParams()
  if (category) params.set("categoria", category)
  if (page > 1) params.set("page", String(page))
  const query = params.toString()
  return query ? `/projects?${query}` : "/projects"
}

const countByCategory = (category: ProjectCategory) =>
  projects.filter((project) => project.category === category).length

export const categoryFilters = [
  { value: undefined, label: "Todos", count: projects.length },
  ...categories.map((value) => ({
    value,
    label: categoryLabel[value],
    count: countByCategory(value),
  })),
].filter((filter) => filter.count > 0)

export function getProjectsPage(category?: ProjectCategory, page?: string) {
  const filtered = category
    ? projects.filter((project) => project.category === category)
    : projects

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE))
  const requested = Number.parseInt(page ?? "1", 10)
  const currentPage = Number.isNaN(requested)
    ? 1
    : Math.min(Math.max(requested, 1), totalPages)

  return {
    totalPages,
    currentPage,
    projects: filtered.slice(
      (currentPage - 1) * PAGE_SIZE,
      currentPage * PAGE_SIZE
    ),
  }
}
