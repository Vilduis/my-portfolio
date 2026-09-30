import { Briefcase, GraduationCap } from "lucide-react"

import { education } from "@/data/education"
import { experiences } from "@/data/experience"
import { Section } from "@/components/shared/section"

function TimelineItem({
  title,
  subtitle,
  period,
  children,
}: {
  title: string
  subtitle: string
  period: string
  children: React.ReactNode
}) {
  return (
    <li className="relative grid gap-3 pb-12 pl-7 last:pb-0 sm:grid-cols-[15rem_1fr] sm:gap-10 lg:grid-cols-[17rem_1fr]">
      <span
        aria-hidden="true"
        className="absolute top-2 bottom-0 left-[3.5px] w-px bg-border"
      />
      <span
        aria-hidden="true"
        className="absolute top-[7px] left-0 size-2 rounded-full bg-primary ring-4 ring-background"
      />

      <div>
        <h3 className="leading-snug font-semibold text-balance text-primary">
          {title}
        </h3>
        <p className="mt-0.5 text-sm font-medium">{subtitle}</p>
        <p className="mt-1.5 font-mono text-xs text-muted-foreground">
          {period}
        </p>
      </div>

      <div className="max-w-[34rem]">{children}</div>
    </li>
  )
}

export function ExperienceSection() {
  return (
    <Section id="experiencia" title="Experiencia" icon={Briefcase}>
      <ol>
        {experiences.map((experience) => (
          <TimelineItem
            key={`${experience.company}-${experience.title}`}
            title={experience.title}
            subtitle={experience.company}
            period={experience.period}
          >
            <ul className="space-y-2 text-[0.9375rem] leading-relaxed text-muted-foreground">
              {experience.achievements.map((achievement) => (
                <li key={achievement} className="flex gap-2.5">
                  <span
                    aria-hidden="true"
                    className="mt-2 size-1 shrink-0 rounded-full bg-muted-foreground/50"
                  />
                  {achievement}
                </li>
              ))}
            </ul>
          </TimelineItem>
        ))}
      </ol>

      <h3 className="mt-2 mb-6 flex items-center gap-2 text-sm font-semibold tracking-wide text-muted-foreground uppercase">
        <GraduationCap className="size-4" />
        Formación
      </h3>

      <ol>
        <TimelineItem
          title={education.degree}
          subtitle={education.institution}
          period={education.period}
        >
          <ul className="space-y-2 text-[0.9375rem] leading-relaxed text-muted-foreground">
            {education.highlights.map((highlight) => (
              <li key={highlight} className="flex gap-2.5">
                <span
                  aria-hidden="true"
                  className="mt-2 size-1 shrink-0 rounded-full bg-muted-foreground/50"
                />
                {highlight}
              </li>
            ))}
          </ul>
        </TimelineItem>
      </ol>
    </Section>
  )
}
