"use client"

import { motion } from "motion/react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Globe, Server, Database } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { fadeInUp } from "@/lib/animations"
import { Icons } from "@/components/icons"

const techIconMap: Record<string, keyof typeof Icons> = {
  "React": "React",
  "Next.js": "Nextjs",
  "TypeScript": "TypeScript",
  "JavaScript": "JavaScript",
  "TailwindCSS": "TailwindCSS",
  "Shadcn/UI": "Shadcnui",
  "HTML5": "HTML5",
  "CSS3": "CSS",
  "Angular": "Angular",
  "Node.js": "Nodejs",
  "Express.js": "Expressjs",
  "Spring Boot": "Spring",
  "FastAPI": "FastAPI",
  "Java": "Java",
  "Python": "Python",
  "MongoDB": "MongoDB",
  "PostgreSQL": "PostgreSQL",
  "MySQL": "MySQL",
  "Supabase": "Supabase",
}

type TechCategory = {
  value: string
  label: string
  icon: LucideIcon
  techs: string[]
}

const categories: TechCategory[] = [
  {
    value: "frontend",
    label: "Frontend",
    icon: Globe,
    techs: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "TailwindCSS",
      "Shadcn/UI",
      "HTML5",
      "CSS3",
      "Angular",
    ],
  },
  {
    value: "backend",
    label: "Backend",
    icon: Server,
    techs: [
      "Node.js",
      "Express.js",
      "Spring Boot",
      "FastAPI",
      "Java",
      "Python",
    ],
  },
  {
    value: "databases",
    label: "Base de datos",
    icon: Database,
    techs: ["MongoDB", "PostgreSQL", "MySQL", "Supabase"],
  },
]

export default function Technology() {
  return (
    <section id="technologies" className="py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={fadeInUp}
        >
          <h2 className="mb-12 text-center text-3xl font-bold text-primary">
            Tecnologías
          </h2>

          <Tabs defaultValue="frontend" className="w-full">
            <TabsList className="mb-8 grid w-full grid-cols-3 border border-border bg-muted/10">
              {categories.map((cat) => (
                <TabsTrigger
                  key={cat.value}
                  value={cat.value}
                  className="flex items-center gap-2"
                >
                  <cat.icon size={16} />
                  {cat.label}
                </TabsTrigger>
              ))}
            </TabsList>

            {categories.map((cat) => (
              <TabsContent key={cat.value} value={cat.value}>
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                  {cat.techs.map((tech) => {
                    const iconKey = techIconMap[tech]
                    const Icon = iconKey ? Icons[iconKey] : null
                    return (
                      <div
                        key={tech}
                        className="flex cursor-default flex-col items-center justify-center gap-2 rounded-lg border border-border bg-card px-4 py-4 text-sm font-medium text-foreground transition-all duration-200 hover:scale-105 hover:border-primary/50 hover:bg-muted/40 hover:text-primary"
                      >
                        {Icon && <Icon className="h-7 w-7 shrink-0" aria-hidden="true" />}
                        {tech}
                      </div>
                    )
                  })}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>
      </div>
    </section>
  )
}
