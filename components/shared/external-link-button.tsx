import type { ComponentProps } from "react"

import { Button } from "@/components/ui/button"

type ExternalLinkButtonProps = Omit<
  ComponentProps<typeof Button>,
  "render" | "nativeButton"
> & {
  href: string
}

export function ExternalLinkButton({
  href,
  ...props
}: ExternalLinkButtonProps) {
  return (
    <Button
      nativeButton={false}
      render={<a href={href} target="_blank" rel="noopener noreferrer" />}
      {...props}
    />
  )
}
