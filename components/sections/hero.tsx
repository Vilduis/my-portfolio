import Image from "next/image"
import { Download, Mail } from "lucide-react"

import { site } from "@/data/site"
import { Button } from "@/components/ui/button"
import { GitHubIcon, LinkedInIcon } from "@/components/shared/icons"
import { MailButton } from "@/components/shared/mail-button"

export function Hero() {
  return (
    <section
      id="inicio"
      className="scroll-mt-24 pt-28 pb-12 sm:pt-32 sm:pb-16 lg:hero-glow"
    >
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-6">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,20rem)] xl:grid-cols-[minmax(0,1fr)_minmax(0,26rem)] xl:gap-14">
          <div>
            <div className="mb-6 flex flex-wrap items-center gap-3 sm:gap-4">
              <Image
                src="/louis.jpeg"
                alt={site.fullName}
                width={128}
                height={128}
                priority
                className="size-16 rounded-full object-cover ring-2 ring-primary/50 ring-offset-4 ring-offset-background"
              />
              {site.available && (
                <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                  <span className="relative flex size-1.5">
                    <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-75 motion-reduce:hidden" />
                    <span className="relative inline-flex size-1.5 rounded-full bg-primary" />
                  </span>
                  Disponible para trabajar
                </span>
              )}
            </div>

            <h1 className="text-5xl font-bold tracking-[-0.03em] text-balance sm:text-6xl lg:text-7xl">
              Hey, soy <span className="text-primary">Vilder</span>
            </h1>

            <p className="mt-5 max-w-[40rem] text-base leading-relaxed text-balance-pretty text-muted-foreground sm:text-lg">
              <strong className="font-semibold text-foreground">
                Desarrollador Full Stack
              </strong>{" "}
              de Lima, Perú. Construyo aplicaciones web de principio a fin: la
              interfaz y la API que hay detrás. He trabajado en plataformas de{" "}
              <strong className="font-semibold text-foreground">
                prensa digital
              </strong>{" "}
              y en{" "}
              <strong className="font-semibold text-foreground">
                sistemas internos de banca
              </strong>
              .
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              <MailButton>
                <Mail />
                Contáctame
              </MailButton>
              <Button
                variant="outline"
                size="lg"
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
                size="lg"
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
              <Button
                variant="ghost"
                size="lg"
                nativeButton={false}
                render={<a href={site.cv} download="CV-Vilder-Sandoval.pdf" />}
              >
                <Download />
                CV
              </Button>
            </div>
          </div>

          <Image
            src="/programador.webp"
            alt=""
            width={1254}
            height={1254}
            priority
            sizes="(max-width: 1023px) 1px, (min-width: 1280px) 26rem, 20rem"
            className="hidden aspect-square w-full hero-art object-cover lg:block"
          />
        </div>
      </div>
    </section>
  )
}
