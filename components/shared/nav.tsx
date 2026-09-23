"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { navigation } from "@/data/site"
import { cn } from "@/lib/utils"
import { ThemeToggle } from "@/components/shared/theme-toggle"

export function Nav() {
  const pathname = usePathname()
  const isHome = pathname === "/"
  const [active, setActive] = useState<string>("")

  useEffect(() => {
    if (!isHome) return

    const sections = navigation
      .map(({ href }) => document.querySelector<HTMLElement>(href))
      .filter((section): section is HTMLElement => section !== null)

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) => a.boundingClientRect.top - b.boundingClientRect.top
          )[0]

        if (visible) setActive(`#${visible.target.id}`)
      },
      { rootMargin: "-20% 0px -70% 0px", threshold: 0 }
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [isHome])

  const current = isHome
    ? active
    : pathname.startsWith("/projects")
      ? "#proyectos"
      : ""

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-3 py-3 sm:py-4">
      <div className="flex max-w-full items-center rounded-full border border-border bg-background/70 p-1 shadow-lg shadow-black/5 backdrop-blur-md">
        {/* Solo los enlaces se desplazan; el botón de tema queda fijo a la derecha. */}
        <nav
          aria-label="Navegación principal"
          className="no-scrollbar flex min-w-0 items-center gap-0.5 overflow-x-auto rounded-full"
        >
          {navigation.map(({ href, label }) => (
            <Link
              key={href}
              href={isHome ? href : `/${href}`}
              className={cn(
                "rounded-full px-2.5 py-1.5 text-xs font-medium whitespace-nowrap transition-colors sm:px-3 sm:text-sm",
                href === "#inicio" && "max-sm:hidden",
                current === href
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              )}
            >
              {label}
            </Link>
          ))}
        </nav>
        <span className="mx-1 h-4 w-px shrink-0 bg-border" aria-hidden="true" />
        <ThemeToggle />
      </div>
    </header>
  )
}
