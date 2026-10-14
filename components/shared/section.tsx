import type { ComponentType, ReactNode } from "react"

import { HeadingAccent } from "@/components/shared/heading-accent"

interface SectionProps {
  id: string
  title: string
  icon: ComponentType<{ className?: string }>
  children: ReactNode
}

export function Section({ id, title, icon: Icon, children }: SectionProps) {
  return (
    <section id={id} className="scroll-mt-24 py-12 sm:py-16">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-6">
        <div className="mb-8">
          <h2 className="flex items-center gap-2.5 text-2xl font-bold tracking-tight sm:text-3xl">
            <Icon className="size-6 text-primary" />
            {title}
          </h2>
          <HeadingAccent className="mt-3" />
        </div>
        {children}
      </div>
    </section>
  )
}
