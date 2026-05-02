"use server"

import { Resend } from "resend"

const resend = new Resend(process.env.API_RESEND)

type ContactFormData = {
  name: string
  email: string
  subject: string
  message: string
}

export async function sendContactEmail(data: ContactFormData) {
  try {
    await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: "luisvilders@gmail.com",
      replyTo: data.email,
      subject: data.subject || `Contacto desde portfolio — ${data.name}`,
      html: `
        <p><strong>Nombre:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${data.message.replace(/\n/g, "<br>")}</p>
      `,
    })
    return { success: true }
  } catch {
    return { success: false }
  }
}
