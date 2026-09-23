import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, Code2 } from "lucide-react"

import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Página no encontrada",
}

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[70svh] w-full max-w-6xl flex-col justify-center px-5 pt-28 pb-16 sm:px-6">
      <p className="font-mono text-sm font-medium text-primary">404</p>

      <h1 className="mt-3 text-4xl font-bold tracking-[-0.03em] text-balance sm:text-5xl">
        Esta página no existe
      </h1>
      <span
        aria-hidden="true"
        className="mt-4 block h-0.5 w-14 rounded-full bg-primary/70"
      />

      <p className="mt-5 max-w-xl text-sm leading-relaxed text-balance-pretty text-muted-foreground sm:text-base">
        Puede que el enlace esté mal escrito o que la página se haya movido. Lo
        que buscas seguro está en el inicio o entre mis proyectos.
      </p>

      <div className="mt-8 flex flex-wrap gap-2">
        <Button size="lg" nativeButton={false} render={<Link href="/" />}>
          <ArrowLeft />
          Volver al inicio
        </Button>
        <Button
          variant="outline"
          size="lg"
          nativeButton={false}
          render={<Link href="/projects" />}
        >
          <Code2 />
          Ver proyectos
        </Button>
      </div>
    </div>
  )
}
