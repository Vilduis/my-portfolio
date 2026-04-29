"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "motion/react"
import { Menu, X, Terminal } from "lucide-react"
import Link from "next/link"
import { ModeToggle } from "./mode-toggle"
import { GitHub } from "@/components/icons"

const menuItems = [
  { name: "Inicio", href: "/" },
  { name: "Sobre Mí", href: "/about" },
  { name: "Proyectos", href: "/project" },
  { name: "Contacto", href: "/contact" },
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div
      className={`fixed top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "top-4 left-1/2 w-full max-w-xl -translate-x-1/2"
          : "top-0 right-0 left-0 w-full"
      }`}
    >
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className={`bg-background/80 backdrop-blur-md transition-all duration-500 ${
          scrolled
            ? "rounded-full border border-border shadow-lg shadow-black/5"
            : "border-b border-border"
        }`}
      >
        <div
          className={`mx-auto flex w-full items-center justify-between px-6 transition-all duration-500 ${
            scrolled ? "h-12 max-w-xl" : "h-16 max-w-7xl"
          }`}
        >
          <Link
            href="/"
            className="flex items-center gap-1.5 text-base font-semibold text-foreground transition-colors hover:text-primary"
          >
            <Terminal size={16} />
            Vilduis
          </Link>

          <ul className="hidden items-center gap-8 md:flex">
            {menuItems.map((item, i) => (
              <motion.li
                key={item.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 + 0.3 }}
              >
                <Link
                  href={item.href}
                  className="group relative text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {item.name}
                  <motion.span
                    className="absolute -bottom-1 left-0 h-[2px] bg-primary"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.25 }}
                  />
                </Link>
              </motion.li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <Link
              href="https://github.com/Vilduis"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-foreground"
              aria-label="GitHub"
            >
              <GitHub width={18} height={18} />
            </Link>

            <ModeToggle />

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-muted-foreground transition-colors hover:text-foreground md:hidden"
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={isOpen ? "close" : "open"}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {isOpen ? <X size={20} /> : <Menu size={20} />}
                </motion.div>
              </AnimatePresence>
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden border-t border-border bg-background md:hidden"
            >
              <div className="flex flex-col gap-1 px-6 py-4">
                {menuItems.map((item, i) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.07 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="block py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </div>
  )
}

export default Navbar
