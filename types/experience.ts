type ExperienceProject = {
  name: string
  achievements: string[]
}

export type Experience = {
  title: string
  company: string
  period: string
  location: string
  technologies: string[]
  projects: ExperienceProject[]
}
