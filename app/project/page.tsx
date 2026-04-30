"use client"

import { useState } from "react"
import Image from "next/image"
import { ExternalLink, Briefcase, ChevronDown } from "lucide-react"
import { motion } from "motion/react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { GitHub, Icons } from "@/components/icons"
import { personalProjects, professionalExperience } from "@/data/projects"
import type { Project, Service } from "@/data/projects"

const ITEMS_PER_PAGE = 4

type ProjectCardProps =
  | { item: Project; type: "project" }
  | { item: Service; type: "service" }

function ProjectCard({ item, type }: ProjectCardProps) {
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
            {type === "service" && (
              <p className="mb-0.5 text-xs font-medium uppercase tracking-wider text-primary">
                {item.company}
              </p>
            )}
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
                  className="flex items-center gap-1 rounded-full border border-border bg-muted/30 px-2.5 py-0.5 text-xs font-medium text-muted-foreground"
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

          {type === "project" && item.github && (
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

type ProjectPaginationProps = {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

function ProjectPagination({ currentPage, totalPages, onPageChange }: ProjectPaginationProps) {
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
            className={currentPage === totalPages ? "cursor-not-allowed opacity-50" : ""}
            aria-disabled={currentPage === totalPages}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}

export default function ProjectsPage() {
  const [currentProjectPage, setCurrentProjectPage] = useState(1)
  const [currentServicePage, setCurrentServicePage] = useState(1)

  const totalProjectPages = Math.ceil(personalProjects.length / ITEMS_PER_PAGE)
  const totalServicePages = Math.ceil(professionalExperience.length / ITEMS_PER_PAGE)

  const currentProjects = personalProjects.slice(
    (currentProjectPage - 1) * ITEMS_PER_PAGE,
    currentProjectPage * ITEMS_PER_PAGE
  )
  const currentServices = professionalExperience.slice(
    (currentServicePage - 1) * ITEMS_PER_PAGE,
    currentServicePage * ITEMS_PER_PAGE
  )

  return (
    <section className="w-full py-28" id="projects">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-2 text-4xl font-bold text-primary">Proyectos</h2>
          <p className="text-muted-foreground">
            Proyectos personales y experiencia profesional.
          </p>
        </motion.div>

        <Tabs defaultValue="projects" className="w-full">
          <TabsList className="mb-10 grid w-full grid-cols-2 border border-border bg-muted/10">
            <TabsTrigger value="projects" className="flex items-center gap-2">
              <GitHub width={16} height={16} />
              <span className="hidden sm:inline">Proyectos</span>
            </TabsTrigger>
            <TabsTrigger value="professional" className="flex items-center gap-2">
              <Briefcase size={16} />
              <span className="hidden sm:inline">Experiencia Profesional</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="projects">
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="grid gap-8 md:grid-cols-2">
                {currentProjects.map((project) => (
                  <ProjectCard key={project.id} item={project} type="project" />
                ))}
              </div>
              {totalProjectPages > 1 && (
                <div className="mt-8">
                  <ProjectPagination
                    currentPage={currentProjectPage}
                    totalPages={totalProjectPages}
                    onPageChange={setCurrentProjectPage}
                  />
                </div>
              )}
            </motion.div>
          </TabsContent>

          <TabsContent value="professional">
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="grid gap-8 md:grid-cols-2">
                {currentServices.map((service) => (
                  <ProjectCard key={service.id} item={service} type="service" />
                ))}
              </div>
              {totalServicePages > 1 && (
                <div className="mt-8">
                  <ProjectPagination
                    currentPage={currentServicePage}
                    totalPages={totalServicePages}
                    onPageChange={setCurrentServicePage}
                  />
                </div>
              )}
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
