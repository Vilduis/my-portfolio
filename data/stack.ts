import type { StackGroup } from "@/types"

export type { StackGroup }

export const stack: StackGroup[] = [
  {
    label: "Frontend",
    technologies: [
      "React",
      "Nextjs",
      "TypeScript",
      "JavaScript",
      "TailwindCSS",
    ],
  },
  {
    label: "Backend",
    technologies: ["Nodejs", "Expressjs", "FastAPI", "Spring"],
  },
  {
    label: "Base de datos",
    technologies: ["PostgreSQL", "MongoDB", "Supabase", "DrizzleORM"],
  },
]
