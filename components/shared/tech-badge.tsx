import type { SimpleIcon } from "simple-icons"
import {
  siDrizzle,
  siExpress,
  siFastapi,
  siJavascript,
  siMongodb,
  siNextdotjs,
  siNodedotjs,
  siPostgresql,
  siReact,
  siSpring,
  siSupabase,
  siTailwindcss,
  siTypescript,
} from "simple-icons"

import { Badge } from "@/components/ui/badge"

const icons: Record<string, SimpleIcon> = {
  React: siReact,
  Nextjs: siNextdotjs,
  TypeScript: siTypescript,
  JavaScript: siJavascript,
  TailwindCSS: siTailwindcss,
  MongoDB: siMongodb,
  Expressjs: siExpress,
  PostgreSQL: siPostgresql,
  Spring: siSpring,
  Supabase: siSupabase,
  DrizzleORM: siDrizzle,
  FastAPI: siFastapi,
  Nodejs: siNodedotjs,
}

const labels: Record<string, string> = {
  Spring: "Spring Boot",
  DrizzleORM: "Drizzle ORM",
}

export function TechBadge({ name }: { name: string }) {
  const icon = icons[name]

  return (
    <Badge variant="secondary" className="gap-1.5 font-mono">
      {icon && (
        <svg
          className="tech-icon"
          style={{ "--brand": `#${icon.hex}` } as React.CSSProperties}
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d={icon.path} />
        </svg>
      )}
      {labels[name] ?? icon?.title ?? name}
    </Badge>
  )
}
