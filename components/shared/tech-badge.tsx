import type { SimpleIcon } from "simple-icons"
import {
  siDotnet,
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

type Icon = Pick<SimpleIcon, "title" | "hex" | "path">

const oracle: Icon = {
  title: "Oracle",
  hex: "C74634",
  path: "M7 6h10a6 6 0 0 1 0 12H7A6 6 0 0 1 7 6Zm0 2a4 4 0 0 0 0 8h10a4 4 0 0 0 0-8Z",
}

const icons: Record<string, Icon> = {
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
  AspNet: siDotnet,
  Oracle: oracle,
}

const labels: Record<string, string> = {
  AspNet: "ASP.NET",
  Spring: "Spring Boot",
  DrizzleORM: "Drizzle ORM",
}

const knockoutFill: Record<string, string> = {
  TypeScript: "#fff",
  JavaScript: "#000",
}

export function TechBadge({ name }: { name: string }) {
  const icon = icons[name]

  return (
    <Badge variant="secondary" className="gap-1.5 font-mono">
      {icon && (
        <svg
          className={knockoutFill[name] ? undefined : "tech-icon"}
          style={
            knockoutFill[name]
              ? { color: `#${icon.hex}` }
              : ({ "--brand": `#${icon.hex}` } as React.CSSProperties)
          }
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          {knockoutFill[name] && (
            <rect
              x="1"
              y="1"
              width="22"
              height="22"
              fill={knockoutFill[name]}
            />
          )}
          <path d={icon.path} />
        </svg>
      )}
      {labels[name] ?? icon?.title ?? name}
    </Badge>
  )
}
