"use client"

import { useState } from "react"
import Image from "next/image"
import { ExternalLink, ChevronDown } from "lucide-react"
import { motion } from "motion/react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { GitHub, Icons } from "@/components/shared/icons"
import { personalProjects } from "@/data/projects"
import type { Project, ProjectCategory } from "@/types"

const ITEMS_PER_PAGE = 6

type FilterOption = { label: string; value: "all" | ProjectCategory }

const FILTERS: FilterOption[] = [
  { label: "Todos", value: "all" },
  { label: "Full Stack", value: "fullstack" },
  { label: "Frontend", value: "frontend" },
  { label: "Backend", value: "backend" },
]

function ProjectCard({ item }: { item: Project }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="group relative"
    >
      <div className="absolute -inset-1 rounded-2xl bg-primary/20 opacity-0 blur transition duration-500 group-hover:opacity-100" />
      <Card className="relative overflow-hidden border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10">
        <div className="relative h-48 overflow-hidden md:h-64">
          <Image
            src={item.image}
            alt={item.name}
            className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
            fill
          />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-black/80 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-4">
            <h3 className="text-xl font-bold text-white">{item.name}</h3>
          </div>
        </div>

        <CardContent className="space-y-4 p-4">
          <div className="flex flex-wrap gap-1.5">
            {item.technologies.map((tech) => {
              const Icon = Icons[tech as keyof typeof Icons]
              if (!Icon) return null
              return (
                <span
                  key={tech}
                  className="flex items-center gap-1 rounded-full border border-border bg-card px-2.5 py-0.5 text-xs font-medium text-muted-foreground dark:bg-muted/30"
                >
                  <Icon className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                  {tech}
                </span>
              )
            })}
          </div>

          <div>
            <p
              className={`text-sm text-muted-foreground ${expanded ? "" : "line-clamp-2"}`}
            >
              {item.description}
            </p>
            <button
              onClick={() => setExpanded((v) => !v)}
              className="mt-1 flex items-center gap-1 text-xs text-primary hover:underline"
            >
              {expanded ? "Ver menos" : "Ver más"}
              <ChevronDown
                size={13}
                className={`transition-transform duration-200 ${expanded ? "rotate-180" : ""}`}
              />
            </button>
          </div>

          {item.github && (
            <div className="flex items-center gap-2 pt-1">
              <Button
                variant="outline"
                size="sm"
                className="border-border bg-muted/10 text-foreground hover:bg-muted"
                asChild
              >
                <a href={item.github} target="_blank" rel="noopener noreferrer">
                  <GitHub width={15} height={15} />
                  Código
                </a>
              </Button>
              {item.demo && (
                <Button
                  size="sm"
                  className="bg-primary text-primary-foreground hover:bg-primary/90"
                  asChild
                >
                  <a href={item.demo} target="_blank" rel="noopener noreferrer">
                    <ExternalLink size={15} />
                    Demo
                  </a>
                </Button>
              )}
            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  )
}

function ProjectPagination({
  currentPage,
  totalPages,
  onPageChange,
}: {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}) {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            onClick={() => onPageChange(Math.max(currentPage - 1, 1))}
            className={currentPage === 1 ? "cursor-not-allowed opacity-50" : ""}
            aria-disabled={currentPage === 1}
          />
        </PaginationItem>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <PaginationItem key={page}>
            <PaginationLink
              onClick={() => onPageChange(page)}
              isActive={currentPage === page}
            >
              {page}
            </PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem>
          <PaginationNext
            onClick={() => onPageChange(Math.min(currentPage + 1, totalPages))}
            className={
              currentPage === totalPages ? "cursor-not-allowed opacity-50" : ""
            }
            aria-disabled={currentPage === totalPages}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}

export default function ProjectsPage() {
  const [currentPage, setCurrentPage] = useState(1)
  const [activeFilter, setActiveFilter] = useState<"all" | ProjectCategory>("all")

  const filteredProjects =
    activeFilter === "all"
      ? personalProjects
      : personalProjects.filter((p) => p.category === activeFilter)

  const totalPages = Math.ceil(filteredProjects.length / ITEMS_PER_PAGE)

  const currentProjects = filteredProjects.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  )

  function handleFilterChange(value: "all" | ProjectCategory) {
    setActiveFilter(value)
    setCurrentPage(1)
  }

  return (
    <section className="w-full py-28" id="projects">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-3 text-4xl font-bold text-primary">Proyectos</h2>
          <p className="mx-auto max-w-xl text-muted-foreground">
            Cosas que construí por curiosidad o para resolver problemas reales.
          </p>
        </motion.div>

        <div className="mb-6 flex flex-wrap justify-center gap-2 sm:justify-start">
          {FILTERS.map((f) => (
            <button
              key={f.value}
              onClick={() => handleFilterChange(f.value)}
              className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
                activeFilter === f.value
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-muted/10 text-muted-foreground hover:border-primary/50 hover:text-foreground"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="grid gap-8 md:grid-cols-2">
            {currentProjects.map((project) => (
              <ProjectCard key={project.id} item={project} />
            ))}
          </div>
          {totalPages > 1 && (
            <div className="mt-8">
              <ProjectPagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
              />
            </div>
          )}
        </motion.div>
      </div>
    </section>
  )
}
