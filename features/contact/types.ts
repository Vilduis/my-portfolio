import type { ContactField, ContactValues } from "@/features/contact/schema"

export type ContactState = {
  status: "idle" | "success" | "error"
  message?: string
  errors?: Partial<Record<ContactField, string[]>>
  values?: ContactValues
}

export const initialContactState: ContactState = { status: "idle" }
