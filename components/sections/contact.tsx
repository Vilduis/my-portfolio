import { AtSign, Mail } from "lucide-react"

import { site } from "@/data/site"
import { Button } from "@/components/ui/button"
import { Section } from "@/components/shared/section"
import { GitHubIcon, LinkedInIcon } from "@/components/shared/icons"
import { MailButton } from "@/components/shared/mail-button"
import { ContactForm } from "@/components/shared/contact-form"

export function ContactSection() {
  return (
    <Section id="contacto" title="Contacto" icon={AtSign}>
      <div className="grid gap-8 rounded-2xl border border-border bg-card p-6 shadow-xl shadow-black/20 sm:p-10 lg:grid-cols-[minmax(0,22rem)_minmax(0,1fr)] lg:gap-14">
        <div>
          <p className="text-lg leading-snug font-medium text-balance sm:text-2xl">
            Estoy disponible para trabajar.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-balance-pretty text-muted-foreground sm:text-base">
            Si buscas un desarrollador full stack para tu equipo o quieres
            conversar sobre un proyecto, escríbeme — suelo responder el mismo
            día.
          </p>

          <p className="mt-8 text-xs font-medium tracking-wide text-muted-foreground uppercase">
            O encuéntrame en
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            <Button
              variant="outline"
              nativeButton={false}
              render={
                <a
                  href={site.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                />
              }
            >
              <LinkedInIcon className="size-4" />
              LinkedIn
            </Button>
            <Button
              variant="outline"
              nativeButton={false}
              render={
                <a
                  href={site.github}
                  target="_blank"
                  rel="noopener noreferrer"
                />
              }
            >
              <GitHubIcon className="size-4" />
              GitHub
            </Button>
            <MailButton variant="ghost" size="default">
              <Mail />
              Correo
            </MailButton>
          </div>
        </div>

        <ContactForm />
      </div>
    </Section>
  )
}
