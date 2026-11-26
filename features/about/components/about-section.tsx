import Image from "next/image"
import { Code2, UserRound } from "lucide-react"

import { stack } from "@/features/about/data/stack"
import { Section } from "@/components/shared/section"
import { TechBadgeList } from "@/components/shared/tech-badge"

export function AboutSection() {
  return (
    <Section id="sobre-mi" title="Sobre mí" icon={UserRound}>
      <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-start md:gap-10">
        <div>
          <div className="max-w-[38rem] space-y-4 text-sm leading-relaxed text-balance-pretty text-muted-foreground sm:text-base">
            <p>
              Me llamo{" "}
              <strong className="font-semibold text-foreground">
                Vilder Luis Sandoval Verde
              </strong>
              , aunque en internet me encuentras como Vilduis. Estudié
              Ingeniería de Sistemas de Información en la UPC gracias a la Beca
              18 y hoy soy bachiller. Lo que más disfruto es el frontend: me
              encanta que una interfaz se sienta viva.
            </p>
            <p>
              En El Comercio desarrollé las animaciones de un especial sobre el
              lago Titicaca, y hoy en el Banco de la Nación trabajo en
              aplicativos internos con C# y Oracle. Fuera del trabajo sigo
              impulsando proyectos propios, con el objetivo de mejorar un poco
              cada día y mantenerme actualizado con las tecnologías que van
              transformando el desarrollo web.
            </p>
          </div>

          <h3 className="mt-8 mb-4 flex items-center gap-2 text-sm font-semibold tracking-wide uppercase">
            <Code2 className="size-4 text-primary" />
            Tecnologías
          </h3>

          <dl className="space-y-5">
            {stack.map((group) => (
              <div
                key={group.label}
                className="grid gap-2 sm:grid-cols-[8rem_1fr] sm:gap-4"
              >
                <dt className="text-xs font-medium tracking-wide text-muted-foreground uppercase sm:pt-1.5">
                  {group.label}
                </dt>
                <dd>
                  <TechBadgeList technologies={group.technologies} />
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <Image
          src="/louis.jpeg"
          alt="Vilder Luis Sandoval"
          width={520}
          height={520}
          className="mx-auto aspect-square w-64 rotate-2 rounded-2xl border border-border object-cover shadow-2xl shadow-elevation/30 transition-[filter] duration-300 sm:w-80 md:mx-0 md:w-64 lg:w-80 dark:brightness-[.85] dark:saturate-[.85] dark:hover:brightness-100 dark:hover:saturate-100"
        />
      </div>
    </Section>
  )
}
