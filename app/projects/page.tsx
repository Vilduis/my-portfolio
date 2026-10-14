import type { Metadata } from "next"

import { site } from "@/config/site"
import { isProjectCategory } from "@/features/projects/lib/catalog"
import { ProjectsCatalog } from "@/features/projects/components/projects-catalog"

const title = `Proyectos | ${site.name}`
const description =
  "Todos los proyectos de Vilder Sandoval: aplicaciones frontend, full stack y APIs REST, cada uno con demo en vivo y código público."

export const metadata: Metadata = {
  title: "Proyectos",
  description,
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    type: "website",
    locale: "es_PE",
    url: "/projects",
    siteName: site.name,
    title,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
}

export default async function ProjectsPage({
  searchParams,
}: {
  searchParams: Promise<{ categoria?: string; page?: string }>
}) {
  const { categoria, page } = await searchParams

  return (
    <ProjectsCatalog
      category={isProjectCategory(categoria) ? categoria : undefined}
      page={page}
    />
  )
}
