"use client"

import { Moon, Sun } from "lucide-react"

import { Button } from "@/components/ui/button"
import { useToggleTheme } from "@/components/layout/use-toggle-theme"

export function ThemeToggle() {
  const toggleTheme = useToggleTheme()

  return (
    <Button
      variant="ghost"
      size="icon-sm"
      className="touch-hitbox shrink-0 rounded-full"
      aria-label="Cambiar tema"
      onClick={toggleTheme}
    >
      <Sun className="dark:hidden" />
      <Moon className="hidden dark:block" />
    </Button>
  )
}
