import Image from "next/image"
import { ExternalLink } from "lucide-react"

import { GitHubIcon } from "@/components/shared/icons"
import { TechBadgeList } from "@/components/shared/tech-badge"
import { ExternalLinkButton } from "@/components/shared/external-link-button"
import {
  ProjectHeading,
  primaryLink,
} from "@/features/projects/components/project-heading"
import type { Project } from "@/features/projects/types"

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group flex flex-col">
      <a
        href={primaryLink(project)}
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
        <ProjectHeading project={project} className="text-lg font-bold" />

        <p className="mt-2 text-sm leading-relaxed text-balance-pretty text-muted-foreground">
          {project.description}
        </p>

        <TechBadgeList
          technologies={project.technologies}
          className="mt-auto pt-4"
        />

        <div className="mt-4 flex flex-wrap gap-2">
          <ExternalLinkButton
            href={project.github}
            variant="outline"
            size="sm"
            className="touch-hitbox"
          >
            <GitHubIcon className="size-4" />
            Código
          </ExternalLinkButton>
          {project.demo && (
            <ExternalLinkButton
              href={project.demo}
              size="sm"
              className="touch-hitbox"
            >
              <ExternalLink />
              Ver demo
            </ExternalLinkButton>
          )}
        </div>
      </div>
    </article>
  )
}
