"use client"

import { useTheme } from "next-themes"

export function useToggleTheme() {
  const { resolvedTheme, setTheme } = useTheme()

  return () => setTheme(resolvedTheme === "dark" ? "light" : "dark")
}
