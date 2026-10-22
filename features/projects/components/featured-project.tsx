import Image from "next/image"
import { ArrowUpRight } from "lucide-react"

import { GitHubIcon } from "@/components/shared/icons"
import { TechBadgeList } from "@/components/shared/tech-badge"
import { ExternalLinkButton } from "@/components/shared/external-link-button"
import {
  ProjectHeading,
  primaryLink,
} from "@/features/projects/components/project-heading"
import type { Project } from "@/features/projects/types"

export function FeaturedProject({ project }: { project: Project }) {
  return (
    <article className="group grid items-center gap-6 md:grid-cols-[1.25fr_1fr] md:gap-10">
      <a
        href={primaryLink(project)}
        target="_blank"
        rel="noopener noreferrer"
        tabIndex={-1}
        aria-hidden="true"
        className="overflow-hidden rounded-xl border border-border bg-card shadow-lg shadow-elevation/20 gradient-ring transition-colors group-hover:border-transparent group-hover:after:opacity-100"
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
        <ProjectHeading
          project={project}
          className="text-xl font-bold tracking-tight sm:text-2xl"
        />

        <TechBadgeList technologies={project.technologies} className="mt-3" />

        <p className="mt-4 max-w-prose text-[0.9375rem] leading-relaxed text-balance-pretty text-muted-foreground">
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.demo && (
            <ExternalLinkButton href={project.demo}>
              Ver demo
              <ArrowUpRight />
            </ExternalLinkButton>
          )}
          <ExternalLinkButton href={project.github} variant="outline">
            <GitHubIcon className="size-4" />
            Código
          </ExternalLinkButton>
        </div>
      </div>
    </article>
  )
}
