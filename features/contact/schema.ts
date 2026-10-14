import { z } from "zod"

export const LIMITS = {
  name: 80,
  email: 160,
  messageMin: 10,
  message: 2000,
} as const

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "Escribe tu nombre.")
    .max(LIMITS.name, `Máximo ${LIMITS.name} caracteres.`),
  email: z
    .string()
    .trim()
    .min(1, "Escribe tu correo.")
    .max(LIMITS.email, `Máximo ${LIMITS.email} caracteres.`)
    .pipe(z.email("Ese correo no parece válido.")),
  message: z
    .string()
    .trim()
    .min(
      LIMITS.messageMin,
      `Cuéntame en qué puedo ayudarte, con al menos ${LIMITS.messageMin} caracteres.`
    )
    .max(LIMITS.message, `Máximo ${LIMITS.message} caracteres.`),
})

export type ContactValues = z.infer<typeof contactSchema>
export type ContactField = keyof ContactValues
