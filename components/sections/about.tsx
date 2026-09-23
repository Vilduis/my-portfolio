import Image from "next/image"
import { Code2, UserRound } from "lucide-react"

import { stack } from "@/data/stack"
import { Section } from "@/components/shared/section"
import { TechBadge } from "@/components/shared/tech-badge"

export function AboutSection() {
  return (
    <Section id="sobre-mi" title="Sobre mí" icon={UserRound}>
      <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-start md:gap-10">
        <div>
          <p className="max-w-[38rem] text-sm leading-relaxed text-balance-pretty text-muted-foreground sm:text-base">
            Me llamo{" "}
            <strong className="font-semibold text-foreground">
              Vilder Luis Sandoval Verde
            </strong>{" "}
            y soy desarrollador full stack en Lima, Perú, especializado en
            frontend. Las APIs que hay detrás de varios de mis proyectos las
            construí y desplegué yo mismo. Cuento con inglés B2.
          </p>

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
                  <ul className="flex flex-wrap gap-1.5">
                    {group.technologies.map((technology) => (
                      <li key={technology}>
                        <TechBadge name={technology} />
                      </li>
                    ))}
                  </ul>
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
          className="mx-auto aspect-square w-64 rotate-2 rounded-2xl border border-border object-cover shadow-2xl shadow-black/30 transition-[filter] duration-300 sm:w-80 md:mx-0 dark:brightness-[.85] dark:saturate-[.85] dark:hover:brightness-100 dark:hover:saturate-100"
        />
      </div>
    </Section>
  )
}
