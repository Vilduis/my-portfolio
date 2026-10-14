import { Badge } from "@/components/ui/badge"
import { categoryLabel } from "@/features/projects/data/projects"
import type { Project } from "@/features/projects/types"

export const primaryLink = (project: Project) => project.demo ?? project.github

export function ProjectHeading({
  project,
  className,
}: {
  project: Project
  className?: string
}) {
  return (
    <div className="flex items-center gap-2.5">
      <h3 className={className}>
        <a
          href={primaryLink(project)}
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
  )
}
