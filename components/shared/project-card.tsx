import Image from "next/image"
import { ExternalLink } from "lucide-react"

import type { Project } from "@/types"
import { categoryLabel } from "@/data/projects"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { GitHubIcon } from "@/components/shared/icons"
import { TechBadge } from "@/components/shared/tech-badge"

export function ProjectCard({ project }: { project: Project }) {
  const primaryLink = project.demo ?? project.github

  return (
    <article className="group flex flex-col">
      <a
        href={primaryLink}
        target="_blank"
        rel="noopener noreferrer"
        tabIndex={-1}
        aria-hidden="true"
        className="overflow-hidden rounded-xl border border-border bg-card shadow-md shadow-black/5 transition-colors group-hover:border-primary/50"
      >
        <Image
          src={project.image}
          alt={`Captura de ${project.name}`}
          sizes="(min-width: 1152px) 22rem, (min-width: 1024px) calc((100vw - 7rem) / 3), (min-width: 640px) calc((100vw - 5rem) / 2), calc(100vw - 2.5rem)"
          quality={90}
          placeholder="blur"
          className="aspect-video w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
        />
      </a>

      <div className="mt-4 flex flex-1 flex-col">
        <div className="flex items-center gap-2.5">
          <h3 className="text-lg font-bold">
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

        <p className="mt-2 text-sm leading-relaxed text-balance-pretty text-muted-foreground">
          {project.description}
        </p>

        <ul className="mt-auto flex flex-wrap gap-1.5 pt-4">
          {project.technologies.map((technology) => (
            <li key={technology}>
              <TechBadge name={technology} />
            </li>
          ))}
        </ul>

        <div className="mt-4 flex flex-wrap gap-2">
          <Button
            variant="outline"
            size="sm"
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
          {project.demo && (
            <Button
              size="sm"
              nativeButton={false}
              render={
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                />
              }
            >
              <ExternalLink />
              Ver demo
            </Button>
          )}
        </div>
      </div>
    </article>
  )
}
