"use client"

import { motion } from "motion/react"
import { useState } from "react"
import { Mail, MapPin, Send, type LucideIcon } from "lucide-react"
import type { SVGProps } from "react"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { GitHub, LinkedIn } from "@/components/icons"
import { fadeInUp } from "@/lib/animations"

type ContactItem = {
  Icon: LucideIcon | React.ComponentType<SVGProps<SVGSVGElement>>
  iconProps: Record<string, number>
  label: string
  value: string
  href: string | null
  external: boolean
}

const contactItems: ContactItem[] = [
  {
    Icon: Mail,
    iconProps: { size: 20 },
    label: "Email",
    value: "luisvilders@gmail.com",
    href: "mailto:luisvilders@gmail.com",
    external: false,
  },
  {
    Icon: LinkedIn,
    iconProps: { width: 20, height: 20 },
    label: "LinkedIn",
    value: "vilder-sandoval",
    href: "https://linkedin.com/in/vilder-sandoval",
    external: true,
  },
  {
    Icon: GitHub,
    iconProps: { width: 20, height: 20 },
    label: "GitHub",
    value: "Vilduis",
    href: "https://github.com/Vilduis",
    external: true,
  },
  {
    Icon: MapPin,
    iconProps: { size: 20 },
    label: "Ubicación",
    value: "Lima, Perú",
    href: null,
    external: false,
  },
]


export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(
      formData.subject || `Contacto desde portfolio - ${formData.name}`
    )
    const body = encodeURIComponent(
      `Nombre: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    )
    window.open(`mailto:luisvilders@gmail.com?subject=${subject}&body=${body}`)
  }

  return (
    <section className="w-full py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-2 text-4xl font-bold text-primary">Contacto</h2>
          <p className="text-muted-foreground">
            ¿Tienes un proyecto en mente? Hablemos.
          </p>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-2">
          {/* Left — info */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-xl font-semibold text-foreground">
                Estoy disponible para trabajar
              </h3>
              <p className="mt-2 text-muted-foreground">
                Actualmente busco oportunidades como desarrollador web. Si
                tienes una propuesta, idea o simplemente quieres conectar, no
                dudes en escribirme.
              </p>
            </div>

            <div className="space-y-3">
              {contactItems.map((item) => (
                <Card
                  key={item.label}
                  className="border border-border bg-card transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md hover:shadow-primary/10"
                >
                  <CardContent className="flex items-center gap-4 py-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <item.Icon {...item.iconProps} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs text-muted-foreground">
                        {item.label}
                      </p>
                      {item.href ? (
                        <Link
                          href={item.href}
                          target={item.external ? "_blank" : undefined}
                          rel={
                            item.external ? "noopener noreferrer" : undefined
                          }
                          className="truncate text-sm font-medium text-foreground transition-colors hover:text-primary"
                        >
                          {item.value}
                        </Link>
                      ) : (
                        <p className="text-sm font-medium text-foreground">
                          {item.value}
                        </p>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="border border-border bg-card shadow-xl">
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-5">
                  <FieldGroup>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <Field>
                        <FieldLabel htmlFor="name">Nombre</FieldLabel>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Tu nombre"
                        />
                      </Field>
                      <Field>
                        <FieldLabel htmlFor="email">Email</FieldLabel>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="tu@email.com"
                        />
                      </Field>
                    </div>

                    <Field>
                      <FieldLabel htmlFor="subject">Asunto</FieldLabel>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="¿En qué puedo ayudarte?"
                      />
                    </Field>

                    <Field>
                      <FieldLabel htmlFor="message">Mensaje</FieldLabel>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Cuéntame sobre tu proyecto..."
                      />
                    </Field>
                  </FieldGroup>

                  <Button
                    type="submit"
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                  >
                    <Send size={16} className="mr-2" />
                    Enviar mensaje
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
