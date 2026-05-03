"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { motion } from "motion/react"
import { ArrowDown, Mail, Download, ArrowRight } from "lucide-react"
import Link from "next/link"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Icons, GitHub, LinkedIn } from "@/components/icons"

const terminalLines = [
  { prompt: "whoami", output: ["Vilder  Sandoval · Perú 🇵🇪"] },
  {
    prompt: "cat passion.txt",
    output: ["Transformar ideas en productos reales"],
  },
  { prompt: "cat hobbies.txt", output: ["Música · Café · Open Source"] },
  {
    prompt: "git log --oneline",
    output: [
      "a1b2c3 Aprendiendo todos los días",
      "d4e5f6 Nunca para de construir",
      "g7h8i9 Apasionado por el detalle",
    ],
  },
]

function Terminal() {
  const [revealed, setRevealed] = useState(0)

  useEffect(() => {
    if (revealed >= terminalLines.length) return
    const timer = setTimeout(() => setRevealed((r) => r + 1), 900)
    return () => clearTimeout(timer)
  }, [revealed])

  return (
    <div className="w-full max-w-lg overflow-hidden rounded-xl border border-border bg-card shadow-xl">
      <div className="flex items-center gap-2 border-b border-border px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-red-500" />
        <span className="h-3 w-3 rounded-full bg-yellow-500" />
        <span className="h-3 w-3 rounded-full bg-green-500" />
        <span className="ml-2 font-mono text-xs text-muted-foreground">
          ~/portfolio
        </span>
      </div>

      <div className="space-y-4 p-5 font-mono text-sm">
        {terminalLines.slice(0, revealed).map((line) => (
          <motion.div
            key={line.prompt}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="space-y-1"
          >
            <p>
              <span className="text-primary">vilder@dev</span>
              <span className="text-muted-foreground">:~$ </span>
              <span className="text-foreground">{line.prompt}</span>
            </p>
            {line.output.map((out) => (
              <p key={out} className="pl-4 text-muted-foreground">
                {out}
              </p>
            ))}
          </motion.div>
        ))}

        <p>
          <span className="text-primary">vilder@dev</span>
          <span className="text-muted-foreground">:~$ </span>
          <span className="animate-pulse text-foreground">█</span>
        </p>
      </div>
    </div>
  )
}

const leftTechStack = [
  "React",
  "Nextjs",
  "TypeScript",
  "JavaScript",
  "TailwindCSS",
] as const
const rightTechStack = [
  "Nodejs",
  "Expressjs",
  "MongoDB",
  "PostgreSQL",
  "Spring",
] as const

export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col justify-center py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="absolute top-1/4 left-15 hidden min-[1440px]:block">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="space-y-6"
          >
            {leftTechStack.map((tech, index) => {
              const Icon = Icons[tech]
              return (
                <motion.div
                  key={tech}
                  className="flex h-12 w-12 animate-pulse items-center justify-center rounded-full border border-border bg-card/90 shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-muted/40 dark:bg-muted/20 dark:hover:bg-muted/30"
                  style={{ animationDelay: `${index * 0.2}s` }}
                  whileHover={{ scale: 1.2, rotate: 10 }}
                >
                  <Icon className="h-7 w-7" aria-hidden="true" />
                </motion.div>
              )
            })}
          </motion.div>
        </div>

        <div className="absolute top-1/3 right-15 hidden min-[1440px]:block">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            className="space-y-6"
          >
            {rightTechStack.map((tech, index) => {
              const Icon = Icons[tech]
              return (
                <motion.div
                  key={tech}
                  className="flex h-12 w-12 animate-pulse items-center justify-center rounded-full border border-border bg-card/90 shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-muted/40 dark:bg-muted/20 dark:hover:bg-muted/30"
                  style={{ animationDelay: `${index * 0.2 + 0.1}s` }}
                  whileHover={{ scale: 1.2, rotate: -10 }}
                >
                  <Icon className="h-7 w-7" aria-hidden="true" />
                </motion.div>
              )
            })}
          </motion.div>
        </div>

        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-6">
              <div className="mb-4 inline-flex items-center rounded-full border border-border bg-muted/10 px-3 py-1 text-sm text-muted-foreground backdrop-blur-md">
                <span className="mr-2 h-2 w-2 rounded-full bg-green-400"></span>
                Disponible para trabajar inmediatamente
              </div>

              <h1 className="text-5xl font-bold text-foreground md:text-6xl lg:text-7xl">
                Hola, Soy <span className="text-primary">Vilder</span>
              </h1>

              <h2 className="text-3xl font-medium text-muted-foreground md:text-4xl">
                <span className="text-primary">Frontend</span> Developer
              </h2>

              <p className="max-w-xl text-lg text-muted-foreground">
                Estudiante de último ciclo de Ingeniería de Sistemas de
                Información en la UPC, con experiencia real en React, Next.js y
                TypeScript. Con capacidad full stack usando Express, FastAPI y
                Spring Boot.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button
                  variant="outline"
                  className="border-border bg-muted/10 text-foreground backdrop-blur-md hover:bg-muted"
                  asChild
                >
                  <Link
                    href="/Cv_stack_sandoval.pdf"
                    download="CV_Sandoval_Stack"
                  >
                    <Download size={18} />
                    Descargar CV
                  </Link>
                </Button>
                <Button
                  className="bg-primary text-primary-foreground hover:bg-primary/90"
                  asChild
                >
                  <Link href="/project">
                    Ver Proyectos
                    <ArrowRight size={18} />
                  </Link>
                </Button>
              </div>

              <div className="flex items-center gap-6 pt-4">
                <Tooltip>
                  <TooltipTrigger>
                    <Link
                      href="https://linkedin.com/in/vilder-sandoval"
                      target="_blank"
                      className="text-muted-foreground transition-colors hover:text-foreground"
                    >
                      <LinkedIn width={22} height={22} />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>LinkedIn</p>
                  </TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger>
                    <Link
                      href="https://github.com/Vilduis"
                      target="_blank"
                      className="text-muted-foreground transition-colors hover:text-foreground"
                    >
                      <GitHub width={22} height={22} />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>GitHub</p>
                  </TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger>
                    <Link
                      href="mailto:luisvilders@gmail.com"
                      className="text-muted-foreground transition-colors hover:text-foreground"
                    >
                      <Mail size={22} />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Email</p>
                  </TooltipContent>
                </Tooltip>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center"
          >
            <Terminal />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 transform"
        >
          <Button
            variant="ghost"
            size="icon"
            className="animate-bounce rounded-full border border-border bg-muted/10 backdrop-blur-md"
            onClick={() =>
              document
                .getElementById("tech-stack")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            <ArrowDown className="text-muted-foreground" />
            <span className="sr-only">Scroll Down</span>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
