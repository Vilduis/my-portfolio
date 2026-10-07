"use client"

import { useActionState, useEffect, useId, useRef } from "react"
import { Check, Loader2, Send } from "lucide-react"

import { sendContactEmail } from "@/app/actions/contact"
import { LIMITS } from "@/lib/contact-schema"
import { initialContactState } from "@/types/contact"
import { Button } from "@/components/ui/button"
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const asErrors = (messages?: string[]) =>
  messages?.map((message) => ({ message }))

export function ContactForm() {
  const [state, formAction, pending] = useActionState(
    sendContactEmail,
    initialContactState
  )
  const id = useId()
  const successRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (state.status === "success") successRef.current?.focus()
  }, [state.status])

  const ids = {
    name: `${id}-name`,
    email: `${id}-email`,
    message: `${id}-message`,
  }

  if (state.status === "success") {
    return (
      <div
        ref={successRef}
        role="status"
        tabIndex={-1}
        className="flex h-full min-h-64 flex-col items-center justify-center gap-3 rounded-xl border border-primary/30 bg-primary/5 p-8 text-center outline-none"
      >
        <span className="flex size-10 items-center justify-center rounded-full bg-primary/15">
          <Check className="size-5 text-primary" />
        </span>
        <p className="font-medium">Mensaje enviado.</p>
        <p className="max-w-xs text-sm text-balance-pretty text-muted-foreground">
          Gracias por escribir. Suelo responder el mismo día.
        </p>
      </div>
    )
  }

  return (
    <form action={formAction}>
      <div aria-hidden="true" className="hidden">
        <label htmlFor={`${id}-company`}>No rellenes este campo</label>
        <input
          id={`${id}-company`}
          name="company"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <FieldGroup className="gap-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <Field data-invalid={Boolean(state.errors?.name)}>
            <FieldLabel htmlFor={ids.name}>Nombre</FieldLabel>
            <Input
              key={state.values?.name ?? ""}
              className="dark:bg-background/50"
              id={ids.name}
              name="name"
              autoComplete="name"
              maxLength={LIMITS.name}
              required
              defaultValue={state.values?.name ?? ""}
              aria-invalid={Boolean(state.errors?.name)}
            />
            <FieldError errors={asErrors(state.errors?.name)} />
          </Field>

          <Field data-invalid={Boolean(state.errors?.email)}>
            <FieldLabel htmlFor={ids.email}>Correo</FieldLabel>
            <Input
              key={state.values?.email ?? ""}
              suppressHydrationWarning
              className="dark:bg-background/50"
              id={ids.email}
              name="email"
              type="email"
              autoComplete="email"
              maxLength={LIMITS.email}
              required
              defaultValue={state.values?.email ?? ""}
              aria-invalid={Boolean(state.errors?.email)}
            />
            <FieldError errors={asErrors(state.errors?.email)} />
          </Field>
        </div>

        <Field data-invalid={Boolean(state.errors?.message)}>
          <FieldLabel htmlFor={ids.message}>Mensaje</FieldLabel>
          <Textarea
            key={state.values?.message ?? ""}
            className="min-h-32 dark:bg-background/50"
            id={ids.message}
            name="message"
            rows={5}
            minLength={10}
            maxLength={LIMITS.message}
            required
            placeholder="Cuéntame qué necesitas y en qué plazo."
            defaultValue={state.values?.message ?? ""}
            aria-invalid={Boolean(state.errors?.message)}
          />
          <FieldError errors={asErrors(state.errors?.message)} />
        </Field>

        <Field orientation="horizontal">
          <Button type="submit" size="lg" disabled={pending}>
            {pending ? <Loader2 className="animate-spin" /> : <Send />}
            {pending ? "Enviando…" : "Enviar mensaje"}
          </Button>
          <FieldError>{state.message}</FieldError>
        </Field>
      </FieldGroup>
    </form>
  )
}
