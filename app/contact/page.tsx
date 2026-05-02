"use client"

import { motion } from "motion/react"
import { useState, useTransition } from "react"
import { Mail, MapPin, Send, CheckCircle, AlertCircle } from "lucide-react"
import { sendContactEmail } from "@/app/actions/contact"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { GitHub, LinkedIn } from "@/components/icons"
import { fadeInUp } from "@/lib/animations"

type ContactItem = {
  Icon: React.ComponentType<Record<string, number>>
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

type Status = "idle" | "loading" | "success" | "error"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [status, setStatus] = useState<Status>("idle")
  const [isPending, startTransition] = useTransition()

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus("loading")
    startTransition(async () => {
      const result = await sendContactEmail(formData)
      if (result.success) {
        setStatus("success")
        setFormData({ name: "", email: "", subject: "", message: "" })
      } else {
        setStatus("error")
      }
    })
  }

  return (
    <section className="w-full py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-2 text-4xl font-bold text-primary">Contacto</h2>
          <p className="text-muted-foreground">
            ¿Hablamos? Estoy disponible para nuevas oportunidades.
          </p>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-2">
          {/* Left — info */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-3 py-1.5">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
              </span>
              <span className="text-xs font-medium text-green-500">
                Disponible para trabajar
              </span>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground">
                Estoy buscando nuevas oportunidades
              </h3>
              <p className="mt-2 text-muted-foreground">
                Actualmente busco mi próxima oportunidad como Frontend
                Developer. Si tienes una posición o propuesta, me encantaría
                conversar.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {contactItems.map((item) =>
                item.href ? (
                  <Link
                    key={item.label}
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                    className="group flex items-center gap-2.5 rounded-full border border-border bg-card px-4 py-2.5 text-sm font-medium text-muted-foreground transition-all duration-200 hover:border-primary/50 hover:bg-primary/5 hover:text-primary"
                  >
                    <span className="flex shrink-0 items-center text-muted-foreground transition-colors group-hover:text-primary">
                      <item.Icon {...item.iconProps} />
                    </span>
                    {item.value}
                  </Link>
                ) : (
                  <span
                    key={item.label}
                    className="flex items-center gap-2.5 rounded-full border border-border bg-card px-4 py-2.5 text-sm font-medium text-muted-foreground"
                  >
                    <item.Icon {...item.iconProps} />
                    {item.value}
                  </span>
                )
              )}
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
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

                  {status === "success" && (
                    <div className="flex items-center gap-2 rounded-lg bg-green-500/10 px-4 py-3 text-sm text-green-500">
                      <CheckCircle size={16} />
                      Mensaje enviado correctamente.
                    </div>
                  )}
                  {status === "error" && (
                    <div className="flex items-center gap-2 rounded-lg bg-destructive/10 px-4 py-3 text-sm text-destructive">
                      <AlertCircle size={16} />
                      Error al enviar. Inténtalo de nuevo.
                    </div>
                  )}

                  <Button
                    type="submit"
                    disabled={isPending}
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-60"
                  >
                    <Send size={16} className="mr-2" />
                    {isPending ? "Enviando..." : "Enviar mensaje"}
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
