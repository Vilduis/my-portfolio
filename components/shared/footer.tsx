import { site } from "@/data/site"

export function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="flex flex-col items-center justify-between gap-2 text-xs text-muted-foreground sm:flex-row">
        <p>
          © {new Date().getFullYear()} {site.name}. Todos los derechos
          reservados.
        </p>
        <p className="font-mono">{site.location}</p>
      </div>
    </footer>
  )
}
