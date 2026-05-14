"use client"

import { motion } from "motion/react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Briefcase } from "lucide-react"
import { experiences } from "@/data/experience"
import { Icons } from "@/components/shared/icons"
import { Separator } from "@/components/ui/separator"

export default function Experience() {
  return (
    <div className="relative">
      <div className="absolute left-4 top-2 bottom-2 w-px bg-linear-to-b from-primary via-primary/40 to-transparent" />

      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.company}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.15 }}
            className="relative pl-12"
          >
            <div className="absolute left-0 top-5 flex h-8 w-8 items-center justify-center rounded-full border-2 border-primary bg-background shadow-sm shadow-primary/20">
              <Briefcase size={14} className="text-primary" />
            </div>

            <Card className="border border-border border-l-4 border-l-primary bg-card shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10">
              <CardHeader className="pb-3">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <CardTitle className="text-xl font-bold text-foreground">
                      {exp.title}
                    </CardTitle>
                    <p className="mt-0.5 text-base font-medium text-primary">
                      {exp.company}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Badge
                      variant="outline"
                      className="flex items-center gap-1 border-border px-2.5 py-1 text-xs text-muted-foreground"
                    >
                      <Calendar size={12} />
                      {exp.period}
                    </Badge>
                    <Badge
                      variant="outline"
                      className="flex items-center gap-1 border-border px-2.5 py-1 text-xs text-muted-foreground"
                    >
                      <MapPin size={12} />
                      {exp.location}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {exp.projects.map((project) => (
                    <div key={project.name}>
                      <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary/70">
                        {project.name}
                      </p>
                      <ul className="space-y-2">
                        {project.achievements.map((achievement) => (
                          <li
                            key={achievement}
                            className="flex items-start gap-2 text-sm text-muted-foreground"
                          >
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                <Separator className="my-4" />
                <div className="flex flex-wrap gap-1.5">
                  {exp.technologies.map((tech) => {
                    const Icon = Icons[tech as keyof typeof Icons]
                    if (!Icon) return null
                    return (
                      <span
                        key={tech}
                        className="flex items-center gap-1 rounded-full border border-border bg-card px-2.5 py-0.5 text-xs font-medium text-muted-foreground dark:bg-muted/30"
                      >
                        <Icon className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                        {tech}
                      </span>
                    )
                  })}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
