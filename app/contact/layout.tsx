import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "¿Tienes una propuesta o proyecto? Estoy disponible para nuevas oportunidades como Frontend Developer.",
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
