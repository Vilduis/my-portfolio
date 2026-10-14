import type { ComponentProps } from "react"

import { site } from "@/config/site"
import { GitHubIcon, LinkedInIcon } from "@/components/shared/icons"
import { ExternalLinkButton } from "@/components/shared/external-link-button"

type SocialLinksProps = Pick<ComponentProps<typeof ExternalLinkButton>, "size">

export function SocialLinks({ size }: SocialLinksProps) {
  return (
    <>
      <ExternalLinkButton href={site.linkedin} variant="outline" size={size}>
        <LinkedInIcon className="size-4" />
        LinkedIn
      </ExternalLinkButton>
      <ExternalLinkButton href={site.github} variant="outline" size={size}>
        <GitHubIcon className="size-4" />
        GitHub
      </ExternalLinkButton>
    </>
  )
}
