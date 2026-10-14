"use client"

import { useState, type ReactNode } from "react"
import type { VariantProps } from "class-variance-authority"

import { decodeEmail } from "@/config/site"
import { Button, type buttonVariants } from "@/components/ui/button"

const mailto = () => `mailto:${decodeEmail()}`

interface MailButtonProps extends VariantProps<typeof buttonVariants> {
  children: ReactNode
}

export function MailButton({
  children,
  variant = "default",
  size = "lg",
}: MailButtonProps) {
  const [href, setHref] = useState<string>()

  const reveal = () => setHref((current) => current ?? mailto())

  return (
    <Button
      variant={variant}
      size={size}
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
