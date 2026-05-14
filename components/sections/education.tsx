"use client"

import { motion } from "motion/react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Calendar, MapPin, GraduationCap } from "lucide-react"
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
      <Card className="overflow-hidden border border-border border-l-4 border-l-primary bg-card shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10">
        <CardHeader>
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex items-start gap-4">
              <div className="hidden rounded-lg bg-primary/10 p-3 sm:block">
                <GraduationCap size={32} className="text-primary" />
              </div>
              <div>
                <CardTitle className="text-xl font-bold text-foreground">
                  {education.degree}
                </CardTitle>
                <p className="mt-0.5 text-base font-medium text-primary">
                  {education.institution}
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              <Badge
                variant="outline"
                className="flex items-center gap-1 border-border px-2.5 py-1 text-xs text-muted-foreground"
              >
                <Calendar size={12} />
                <span>{education.period}</span>
              </Badge>
              <Badge
                variant="outline"
                className="flex items-center gap-1 border-border px-2.5 py-1 text-xs text-muted-foreground"
              >
                <MapPin size={12} />
                <span>{education.location}</span>
              </Badge>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex flex-wrap gap-2">
              {education.highlights.map((text) => (
                <span
                  key={text}
                  className="rounded-full border border-primary/30 bg-primary/10 px-3 py-0.5 text-xs font-medium text-primary"
                >
                  {text}
                </span>
              ))}
            </div>

            <Separator />

            <ul className="space-y-2">
              {education.achievements.map((achievement) => (
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
        </CardContent>
      </Card>
    </motion.div>
  )
}
