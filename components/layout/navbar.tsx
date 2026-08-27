"use client"

import { useEffect, useLayoutEffect, useRef, useState } from "react"
import {
  animate,
  motion,
  AnimatePresence,
  useMotionValue,
  useReducedMotion,
  useTransform,
} from "motion/react"
import { Menu, X, Terminal } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ModeToggle } from "@/components/shared/mode-toggle"
import { GitHub } from "@/components/shared/icons"
import { navLinks } from "@/lib/navigation"

const SCROLL_RANGE = 120

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect

const clamp = (n: number) => Math.min(Math.max(n, 0), 1)

const Navbar = () => {
  const pathname = usePathname()
  const isHome = pathname === "/"
  const reduceMotion = useReducedMotion()

  const [menuPath, setMenuPath] = useState<string | null>(null)
  const isOpen = menuPath === pathname

  const progress = useMotionValue(isHome ? 0 : 1)
  const firstMount = useRef(true)
  const routeAnim = useRef<ReturnType<typeof animate> | null>(null)

  const top = useTransform(progress, [0, 1], [0, 16])
  const maxWidth = useTransform(progress, [0, 1], [1280, 620])
  const padX = useTransform(progress, [0, 1], [0, 20])
  const height = useTransform(progress, [0, 1], [64, 48])
  const radius = useTransform(progress, [0, 1], [0, 999])
  const gap = useTransform(progress, [0, 1], [32, 24])
  const chrome = useTransform(progress, [0, 0.4, 1], [0, 0.5, 1])

  useIsomorphicLayoutEffect(() => {
    const isMount = firstMount.current
    firstMount.current = false

    const targetFor = () => (isHome ? clamp(window.scrollY / SCROLL_RANGE) : 1)

    const sync = () => {
      routeAnim.current?.stop()
      progress.set(targetFor())
    }

    if (isMount || reduceMotion) {
      sync()
    } else {
      routeAnim.current?.stop()
      routeAnim.current = animate(progress, targetFor(), {
        duration: 0.4,
        ease: "easeOut",
      })
    }

    const raf = isMount ? requestAnimationFrame(sync) : 0
    window.addEventListener("scroll", sync, { passive: true })
    window.addEventListener("load", sync)
    window.addEventListener("pageshow", sync)

    return () => {
      if (raf) cancelAnimationFrame(raf)
      window.removeEventListener("scroll", sync)
      window.removeEventListener("load", sync)
      window.removeEventListener("pageshow", sync)
    }
  }, [isHome, progress, reduceMotion])

  useEffect(() => {
    if (!isOpen) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuPath(null)
    }
    document.addEventListener("keydown", onKeyDown)
    return () => document.removeEventListener("keydown", onKeyDown)
  }, [isOpen])

  const iconButton =
    "inline-flex h-9 w-9 items-center justify-center rounded-md text-muted-foreground transition-colors hover:text-foreground focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-none"

  return (
    <motion.nav
      aria-label="Navegación principal"
      initial={reduceMotion ? false : { y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      style={{ top, maxWidth }}
      className="fixed inset-x-0 z-50 mx-auto w-full px-4 sm:px-6 lg:px-8"
    >
      {isOpen && (
        <button
          type="button"
          aria-hidden="true"
          tabIndex={-1}
          onClick={() => setMenuPath(null)}
          className="fixed inset-0 cursor-default md:hidden"
        />
      )}

      <motion.div
        style={{ borderRadius: radius, paddingLeft: padX, paddingRight: padX }}
        className="relative"
      >
        <motion.div
          aria-hidden="true"
          style={{ opacity: chrome, borderRadius: radius }}
          className="absolute inset-0 border border-border bg-background/60 shadow-lg shadow-black/5 backdrop-blur-xl"
        />

        <motion.div
          style={{ height }}
          className="relative flex items-center justify-between"
        >
          <Link
            href="/"
            className="flex items-center gap-1.5 text-base font-semibold text-foreground transition-colors hover:text-primary"
          >
            <Terminal size={16} />
            Vilduis
          </Link>

          <motion.ul style={{ gap }} className="hidden items-center md:flex">
            {navLinks.map((item, i) => (
              <motion.li
                key={item.href}
                initial={reduceMotion ? false : { opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 + 0.3 }}
              >
                <Link
                  href={item.href}
                  aria-current={pathname === item.href ? "page" : undefined}
                  className={`group relative text-sm transition-colors hover:text-foreground ${
                    pathname === item.href
                      ? "text-primary"
                      : "text-muted-foreground"
                  }`}
                >
                  {item.name}
                  <motion.span
                    className="absolute -bottom-1 left-0 h-[2px] bg-primary"
                    initial={false}
                    animate={{ width: pathname === item.href ? "100%" : 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: reduceMotion ? 0 : 0.25 }}
                  />
                </Link>
              </motion.li>
            ))}
          </motion.ul>

          <div className="flex items-center gap-1">
            <Link
              href="https://github.com/Vilduis"
              target="_blank"
              rel="noopener noreferrer"
              className={iconButton}
              aria-label="GitHub"
            >
              <GitHub width={18} height={18} />
            </Link>

            <ModeToggle />

            <button
              type="button"
              onClick={() => setMenuPath(isOpen ? null : pathname)}
              className={`${iconButton} md:hidden`}
              aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={isOpen ? "close" : "open"}
                  initial={reduceMotion ? false : { rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={reduceMotion ? undefined : { rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex"
                >
                  {isOpen ? <X size={20} /> : <Menu size={20} />}
                </motion.span>
              </AnimatePresence>
            </button>
          </div>
        </motion.div>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: reduceMotion ? 0 : 0.2, ease: "easeOut" }}
            className="relative mt-2 overflow-hidden rounded-2xl border border-border bg-background/90 shadow-lg shadow-black/5 backdrop-blur-xl md:hidden"
          >
            <ul className="flex flex-col gap-1 px-5 py-4">
              {navLinks.map((item, i) => (
                <motion.li
                  key={item.href}
                  initial={reduceMotion ? false : { opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: reduceMotion ? 0 : i * 0.07 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setMenuPath(null)}
                    aria-current={pathname === item.href ? "page" : undefined}
                    className={`block py-2 text-sm transition-colors hover:text-foreground ${
                      pathname === item.href
                        ? "font-medium text-primary"
                        : "text-muted-foreground"
                    }`}
                  >
                    {item.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navbar
