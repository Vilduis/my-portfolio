import Image from "next/image"
import { ArrowUpRight } from "lucide-react"

import type { Project } from "@/types"
import { categoryLabel } from "@/data/projects"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { GitHubIcon } from "@/components/shared/icons"
import { TechBadge } from "@/components/shared/tech-badge"

export function FeaturedProject({ project }: { project: Project }) {
  const primaryLink = project.demo ?? project.github

  return (
    <article className="group grid items-center gap-6 md:grid-cols-[1.25fr_1fr] md:gap-10">
      <a
        href={primaryLink}
        target="_blank"
        rel="noopener noreferrer"
        tabIndex={-1}
        aria-hidden="true"
        className="overflow-hidden rounded-xl border border-border bg-card shadow-lg shadow-elevation/20 transition-colors group-hover:border-primary/60"
      >
        <Image
          src={project.image}
          alt=""
          sizes="(min-width: 768px) 38rem, calc(100vw - 2.5rem)"
          quality={90}
          placeholder="blur"
          className="aspect-[16/10] w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.03]"
        />
      </a>

      <div>
        <div className="flex items-center gap-2.5">
          <h3 className="text-xl font-bold tracking-tight sm:text-2xl">
            <a
              href={primaryLink}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-sm decoration-primary/60 underline-offset-4 hover:underline"
            >
              {project.name}
            </a>
          </h3>
          <Badge variant="outline" className="text-muted-foreground">
            {categoryLabel[project.category]}
          </Badge>
        </div>

        <ul className="mt-3 flex flex-wrap gap-1.5">
          {project.technologies.map((technology) => (
            <li key={technology}>
              <TechBadge name={technology} />
            </li>
          ))}
        </ul>

        <p className="mt-4 max-w-prose text-sm leading-relaxed text-balance-pretty text-muted-foreground">
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.demo && (
            <Button
              nativeButton={false}
              render={
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                />
              }
            >
              Ver demo
              <ArrowUpRight />
            </Button>
          )}
          <Button
            variant="outline"
            nativeButton={false}
            render={
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              />
            }
          >
            <GitHubIcon className="size-4" />
            Código
          </Button>
        </div>
      </div>
    </article>
  )
}
