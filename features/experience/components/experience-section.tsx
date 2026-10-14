import { Briefcase, GraduationCap } from "lucide-react"

import { education } from "@/features/experience/data/education"
import { experiences } from "@/features/experience/data/experience"
import { TimelineItem } from "@/features/experience/components/timeline-item"
import { Section } from "@/components/shared/section"

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
            items={experience.achievements}
          />
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
          items={education.highlights}
        />
      </ol>
    </Section>
  )
}
