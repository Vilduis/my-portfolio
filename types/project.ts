import type { StaticImageData } from "next/image"

export type ProjectCategory = "fullstack" | "frontend" | "backend"

interface BaseProject {
  id: number
  name: string
  technologies: string[]
  image: StaticImageData
  description: string
}

export interface Project extends BaseProject {
  github: string
  demo?: string
  category: ProjectCategory
}
