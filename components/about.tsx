"use client"

import { motion } from "motion/react"
import Image from "next/image"
import { fadeInUp } from "@/lib/animations"

const stats = [
  { value: "1+", label: "Año de experiencia" },
  { value: "5+", label: "Proyectos realizados" },
]

export default function About() {
  return (
    <section className="relative py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={fadeInUp}
        >
          <h2 className="mb-12 text-center text-3xl font-bold text-primary">
            Sobre Mí
          </h2>

          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <motion.div
              variants={fadeInUp}
              transition={{ delay: 0.4 }}
              className="flex justify-center"
            >
              <div className="relative">
                <div className="absolute inset-0 scale-110 rounded-full bg-primary/20 blur-2xl" />
                <div className="relative rounded-full bg-linear-to-br from-primary via-primary/60 to-primary/20 p-[3px] shadow-xl shadow-primary/20">
                  <div className="h-64 w-64 overflow-hidden rounded-full md:h-72 md:w-72">
                    <Image
                      src="/Luis.jpg"
                      alt="Vilder Luis Sandoval"
                      width={400}
                      height={400}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              transition={{ delay: 0.5 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold text-foreground">
                Frontend Developer con{" "}
                <span className="text-primary">visión Full Stack</span>
              </h3>

              <p className="text-muted-foreground">
                Soy Vilder, estudiante de último ciclo de Ingeniería de Sistemas
                de Información en la UPC. Me especializo en construir interfaces
                modernas con React, Next.js y TypeScript, cuidando siempre la
                calidad visual y la experiencia del usuario.
              </p>

              <p className="text-muted-foreground">
                También tengo experiencia construyendo APIs con Express, FastAPI
                y Spring Boot, lo que me permite colaborar en proyectos
                completos de principio a fin.
              </p>

              <div className="flex gap-8">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <p className="text-3xl font-bold text-primary">
                      {stat.value}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
