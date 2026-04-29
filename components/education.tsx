"use client"

import { motion } from "motion/react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Award, MapPin, GraduationCap } from "lucide-react"
import { fadeInUp } from "@/lib/animations"
import { education } from "@/data/education"

export default function Education() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      variants={fadeInUp}
    >
      <Card className="overflow-hidden border border-border bg-card shadow-xl transition-all duration-300 hover:-translate-y-1">
        <CardHeader>
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex items-start gap-4">
              <div className="hidden rounded-lg bg-muted/20 p-3 sm:block">
                <GraduationCap size={36} className="text-primary" />
              </div>
              <div>
                <CardTitle className="text-2xl font-bold text-foreground">
                  {education.degree}
                </CardTitle>
                <p className="mt-1 text-xl text-primary">
                  {education.institution}
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-2 sm:flex-row sm:gap-4">
              <Badge
                variant="outline"
                className="flex items-center gap-1 border-border px-3 py-1 text-muted-foreground"
              >
                <Calendar size={14} />
                <span>{education.period}</span>
              </Badge>
              <Badge
                variant="outline"
                className="flex items-center gap-1 border-border px-3 py-1 text-muted-foreground"
              >
                <MapPin size={14} />
                <span>{education.location}</span>
              </Badge>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="flex flex-wrap gap-3">
              {education.highlights.map((text) => (
                <Badge
                  key={text}
                  className="border-none bg-primary/10 text-primary hover:bg-primary/20"
                >
                  <Award size={14} className="mr-1" />
                  {text}
                </Badge>
              ))}
            </div>

            <div className="rounded-lg border border-border bg-muted/10 p-5">
              <h3 className="mb-3 text-lg font-semibold text-foreground">
                Logros Académicos
              </h3>
              <ul className="space-y-3">
                {education.achievements.map((achievement) => (
                  <li
                    key={achievement}
                    className="flex items-start text-muted-foreground"
                  >
                    <Award size={18} className="mt-1 mr-2 shrink-0 text-primary" />
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
