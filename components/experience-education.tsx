"use client"

import { motion } from "motion/react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Briefcase, GraduationCap } from "lucide-react"
import { fadeInUp } from "@/lib/animations"
import Experience from "@/components/experience"
import Education from "@/components/education"

export default function ExperienceEducation() {
  return (
    <section id="experience-education" className="py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={fadeInUp}
        >
          <h2 className="mb-12 text-center text-3xl font-bold text-primary">
            Experiencia & Educación
          </h2>

          <Tabs defaultValue="experience" className="w-full">
            <TabsList className="mb-8 grid w-full grid-cols-2 border border-border bg-muted/40">
              <TabsTrigger value="experience" className="flex items-center gap-2">
                <Briefcase size={16} />
                Experiencia
              </TabsTrigger>
              <TabsTrigger value="education" className="flex items-center gap-2">
                <GraduationCap size={16} />
                Educación
              </TabsTrigger>
            </TabsList>

            <TabsContent value="experience">
              <Experience />
            </TabsContent>
            <TabsContent value="education">
              <Education />
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </section>
  )
}
