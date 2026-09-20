"use client"

import { useState, type ReactNode } from "react"

import { site } from "@/data/site"
import { Button, type buttonVariants } from "@/components/ui/button"
import type { VariantProps } from "class-variance-authority"

function mailto() {
  return `mailto:${atob(site.emailEncoded)}`
}

interface MailButtonProps extends VariantProps<typeof buttonVariants> {
  children: ReactNode
  className?: string
}

export function MailButton({
  children,
  variant = "default",
  size = "lg",
  className,
}: MailButtonProps) {
  const [href, setHref] = useState<string>()

  const reveal = () => setHref((current) => current ?? mailto())

  return (
    <Button
      variant={variant}
      size={size}
      className={className}
      nativeButton={false}
      render={
        <a
          href={href ?? "#contacto"}
          onMouseEnter={reveal}
          onFocus={reveal}
          onTouchStart={reveal}
          onClick={(event) => {
            if (href) return
            event.preventDefault()
            window.location.href = mailto()
          }}
        />
      }
    >
      {children}
    </Button>
  )
}
