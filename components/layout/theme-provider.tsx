"use client"

import { useEffect, type ComponentProps } from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"

import { useToggleTheme } from "@/components/layout/use-toggle-theme"

export function ThemeProvider({
  children,
  ...props
}: ComponentProps<typeof NextThemesProvider>) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
      {...props}
    >
      <ThemeHotkey />
      {children}
    </NextThemesProvider>
  )
}

function isTypingTarget(target: EventTarget | null) {
  return (
    target instanceof HTMLElement &&
    (target.isContentEditable ||
      ["INPUT", "TEXTAREA", "SELECT"].includes(target.tagName))
  )
}

function ThemeHotkey() {
  const toggleTheme = useToggleTheme()

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (
        event.defaultPrevented ||
        event.repeat ||
        event.metaKey ||
        event.ctrlKey ||
        !event.altKey ||
        !event.shiftKey ||
        event.code !== "KeyD" ||
        isTypingTarget(event.target)
      ) {
        return
      }

      toggleTheme()
    }

    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [toggleTheme])

  return null
}
