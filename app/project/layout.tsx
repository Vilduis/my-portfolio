import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Proyectos",
  description:
    "Proyectos que construí con React, Next.js, TypeScript y más. Desde plataformas fullstack con IA hasta APIs REST.",
}

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
