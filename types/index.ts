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

export interface Experience {
  title: string
  company: string
  period: string
  location: string
  achievements: string[]
}

export interface Education {
  degree: string
  institution: string
  period: string
  location: string
  highlights: string[]
}

export interface StackGroup {
  label: string
  technologies: string[]
}
