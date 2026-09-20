"use server"

import { Resend } from "resend"
import { z } from "zod"

import type { ContactState } from "@/types/contact"
import { contactSchema } from "@/lib/contact-schema"
import { site } from "@/data/site"

const recipient = () =>
  Buffer.from(site.emailEncoded, "base64").toString("utf8")

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
}

export async function sendContactEmail(
  _previous: ContactState,
  formData: FormData
): Promise<ContactState> {
  if (formData.get("company")) return { status: "success" }

  const submitted = {
    name: String(formData.get("name") ?? "").trim(),
    email: String(formData.get("email") ?? "").trim(),
    message: String(formData.get("message") ?? "").trim(),
  }

  const parsed = contactSchema.safeParse(submitted)
  if (!parsed.success) {
    return {
      status: "error",
      errors: z.flattenError(parsed.error).fieldErrors,
      values: submitted,
    }
  }

  const { name, email, message } = parsed.data

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    console.error("Falta RESEND_API_KEY: no se envió el mensaje de contacto.")
    return {
      status: "error",
      message:
        "El formulario no está disponible ahora mismo. Escríbeme por correo o LinkedIn.",
      values: submitted,
    }
  }

  try {
    const { error } = await new Resend(apiKey).emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: recipient(),
      replyTo: email,
      subject: `Contacto desde el portafolio — ${name}`,
      text: `Nombre: ${name}\nCorreo: ${email}\n\n${message}`,
      html: `
        <p><strong>Nombre:</strong> ${escapeHtml(name)}</p>
        <p><strong>Correo:</strong> ${escapeHtml(email)}</p>
        <p style="white-space:pre-wrap">${escapeHtml(message)}</p>
      `,
    })

    if (error) throw new Error(error.message)

    return { status: "success" }
  } catch (cause) {
    console.error("Fallo al enviar el mensaje de contacto:", cause)
    return {
      status: "error",
      message:
        "No se pudo enviar. Inténtalo otra vez o escríbeme por LinkedIn.",
      values: submitted,
    }
  }
}
