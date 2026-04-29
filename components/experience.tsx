"use client"

import { motion } from "motion/react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, CheckCircle } from "lucide-react"
import { experiences } from "@/data/experience"

export default function Experience() {
  return (
    <div className="relative">
      <div className="absolute left-4 top-2 bottom-2 w-px bg-border" />

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
              <div className="h-2.5 w-2.5 rounded-full bg-primary" />
            </div>

            <Card className="border border-border bg-card shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10">
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
                            <CheckCircle
                              size={15}
                              className="mt-0.5 shrink-0 text-primary"
                            />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
