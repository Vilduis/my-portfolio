import type { ComponentType, ReactNode } from "react"

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
          <span
            aria-hidden="true"
            className="mt-3 block h-0.5 w-14 rounded-full bg-primary/70"
          />
        </div>
        {children}
      </div>
    </section>
  )
}
