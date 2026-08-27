"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { motion, useMotionValue, useSpring } from "motion/react"
import { Mail, Download, ArrowRight } from "lucide-react"
import Link from "next/link"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { GitHub, LinkedIn } from "@/components/shared/icons"

const terminalLines = [
  { prompt: "whoami", output: ["Vilder Sandoval · Perú 🇵🇪"] },
  { prompt: "cat passion.txt", output: ["Construyendo cosas para la web"] },
  { prompt: "cat hobbies.txt", output: ["Música · Café · Open Source"] },
  {
    prompt: "git log --oneline",
    output: [
      "a1b2c3 Aprendiendo cada día",
      "d4e5f6 Construyendo interfaces modernas",
      "g7h8i9 Disfrutando el proceso",
    ],
  },
]

function Terminal() {
  const [currentLine, setCurrentLine] = useState(0)
  const [typedChars, setTypedChars] = useState(0)
  const [outputVisible, setOutputVisible] = useState(false)

  useEffect(() => {
    if (currentLine >= terminalLines.length) return

    const line = terminalLines[currentLine]

    if (!outputVisible) {
      if (typedChars < line.prompt.length) {
        const t = setTimeout(() => setTypedChars((c) => c + 1), 55)
        return () => clearTimeout(t)
      }
      const t = setTimeout(() => setOutputVisible(true), 200)
      return () => clearTimeout(t)
    }

    const t = setTimeout(() => {
      setCurrentLine((l) => l + 1)
      setTypedChars(0)
      setOutputVisible(false)
    }, 700)
    return () => clearTimeout(t)
  }, [currentLine, typedChars, outputVisible])

  const isDone = currentLine >= terminalLines.length

  return (
    <div className="relative mx-auto w-full max-w-lg overflow-hidden rounded-xl border border-primary/30 bg-card shadow-2xl shadow-primary/10">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-10 rounded-xl"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 3px, color-mix(in oklch, var(--foreground) 3%, transparent) 3px, color-mix(in oklch, var(--foreground) 3%, transparent) 4px)",
        }}
      />

      <div className="flex items-center justify-between border-b border-border/60 bg-muted/30 px-4 py-2.5">
        <div className="flex items-center gap-1.5">
          <span className="h-3 w-3 rounded-full bg-red-400/90" />
          <span className="h-3 w-3 rounded-full bg-yellow-400/90" />
          <span className="h-3 w-3 rounded-full bg-green-400/90" />
        </div>
        <span className="font-mono text-xs text-muted-foreground">
          vilder@dev — zsh
        </span>
        <div className="w-14" />
      </div>

      <div className="min-h-[220px] space-y-3 p-5 font-mono text-sm">
        {terminalLines.slice(0, currentLine).map((line) => (
          <motion.div
            key={line.prompt}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
            className="space-y-1"
          >
            <p>
              <span className="text-primary">vilder@dev</span>
              <span className="text-muted-foreground">:~$ </span>
              <span className="text-foreground">{line.prompt}</span>
            </p>
            {line.output.map((out) => (
              <p key={out} className="pl-4 text-muted-foreground/80">
                {out}
              </p>
            ))}
          </motion.div>
        ))}

        {!isDone && (
          <div className="space-y-1">
            <p>
              <span className="text-primary">vilder@dev</span>
              <span className="text-muted-foreground">:~$ </span>
              <span className="text-foreground">
                {terminalLines[currentLine].prompt.slice(0, typedChars)}
              </span>
              <span className="animate-pulse text-primary">█</span>
            </p>
            {outputVisible &&
              terminalLines[currentLine].output.map((out) => (
                <motion.p
                  key={out}
                  initial={{ opacity: 0, x: -4 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2 }}
                  className="pl-4 text-muted-foreground/80"
                >
                  {out}
                </motion.p>
              ))}
          </div>
        )}
        {isDone && (
          <p>
            <span className="text-primary">vilder@dev</span>
            <span className="text-muted-foreground">:~$ </span>
            <span className="animate-pulse text-primary">█</span>
          </p>
        )}
      </div>

      <div className="flex items-center justify-between border-t border-border/60 bg-primary/10 px-4 py-1.5 font-mono text-xs text-primary/70">
        <span>● main</span>
        <span>~/portfolio</span>
        <span>zsh</span>
      </div>
    </div>
  )
}

function TiltTerminal() {
  const ref = useRef<HTMLDivElement>(null)
  const rotateX = useMotionValue(0)
  const rotateY = useMotionValue(0)
  const springX = useSpring(rotateX, { stiffness: 180, damping: 18 })
  const springY = useSpring(rotateY, { stiffness: 180, damping: 18 })

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const dx = e.clientX - (rect.left + rect.width / 2)
    const dy = e.clientY - (rect.top + rect.height / 2)
    rotateY.set((dx / (rect.width / 2)) * 12)
    rotateX.set(-(dy / (rect.height / 2)) * 8)
  }

  function handleMouseLeave() {
    rotateX.set(0)
    rotateY.set(0)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX: springX, rotateY: springY, transformPerspective: 1000 }}
      className="relative w-full cursor-default"
    >
      <motion.div
        className="absolute -inset-4 -z-10 rounded-2xl bg-primary/25 blur-2xl"
        animate={{ opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <Terminal />
    </motion.div>
  )
}

export default function Hero() {
  return (
    <section className="relative flex flex-1 flex-col justify-center overflow-x-clip pt-28 pb-10 md:pt-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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
                Especializado en construir interfaces modernas y funcionales con
                React, Next.js y TypeScript, con visión full stack usando
                Node.js, Express y Spring Boot.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button
                  variant="outline"
                  className="border-border bg-muted/10 text-foreground backdrop-blur-md hover:bg-muted"
                  asChild
                >
                  <a href="/CV-Sandoval.pdf" download="CV_Sandoval.pdf">
                    <Download size={18} />
                    Descargar CV
                  </a>
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
            <TiltTerminal />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
