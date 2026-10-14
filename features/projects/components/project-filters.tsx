import Link from "next/link"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { categoryFilters, projectsHref } from "@/features/projects/lib/catalog"
import type { ProjectCategory } from "@/features/projects/types"

export function ProjectFilters({ active }: { active?: ProjectCategory }) {
  return (
    <nav aria-label="Filtrar por categoría" className="mt-10">
      <ul className="flex flex-wrap gap-x-2 gap-y-3">
        {categoryFilters.map((filter) => {
          const isActive = filter.value === active
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
  )
}
