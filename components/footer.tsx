import Link from "next/link"
import { Mail, Terminal } from "lucide-react"
import { GitHub, LinkedIn } from "@/components/icons"

const navLinks = [
  { name: "Inicio", href: "/" },
  { name: "Sobre Mí", href: "/about" },
  { name: "Proyectos", href: "/project" },
  { name: "Contacto", href: "/contact" },
]

const socialLinks = [
  { label: "LinkedIn", href: "https://linkedin.com/in/vilder-sandoval", icon: <LinkedIn width={18} height={18} /> },
  { label: "GitHub", href: "https://github.com/Vilduis", icon: <GitHub width={18} height={18} /> },
  { label: "Email", href: "mailto:luisvilders@gmail.com", icon: <Mail size={18} /> },
]

const Footer = () => {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <Link
            href="/"
            className="flex items-center gap-1.5 text-base font-semibold text-foreground transition-colors hover:text-primary"
          >
            <Terminal size={16} />
            Vilduis
          </Link>

          <ul className="flex flex-wrap justify-center gap-6">
            {navLinks.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4">
            {socialLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.label}
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.icon}
              </Link>
            ))}
          </div>
        </div>

        <p className="mt-8 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Vilder Luis Sandoval Verde. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  )
}

export default Footer
