import type { StaticImageData } from "next/image"

export type ProjectCategory = "frontend" | "fullstack" | "backend"

export interface Project {
  id: number
  name: string
  technologies: string[]
  image: StaticImageData
  description: string
  github: string
  demo?: string
  category: ProjectCategory
}
