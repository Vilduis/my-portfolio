# Portfolio · Vilder Sandoval

Portafolio personal construido con Next.js, TypeScript, Tailwind CSS y shadcn/ui.

## Scripts

```bash
pnpm dev        # servidor de desarrollo
pnpm build      # build de producción
pnpm lint       # ESLint
pnpm typecheck  # TypeScript
pnpm format     # Prettier
```

## Estructura

```
app/                  Rutas, metadata y archivos especiales de Next.js
config/site.ts        Datos globales del sitio y navegación
components/
  ui/                 Primitivas de shadcn/ui
  layout/             Nav, footer y tema
  shared/             Componentes reutilizables entre features
features/
  hero/               Presentación inicial
  experience/         Experiencia laboral y formación
  projects/           Proyectos destacados, catálogo, filtros y paginación
  about/              Perfil y stack tecnológico
  contact/            Formulario, validación y server action de contacto
lib/utils.ts          Utilidades genéricas
```

Cada feature agrupa sus `components/`, `data/`, `types.ts` y, cuando aplica, `lib/`, `actions/` y `assets/`. Las features no se importan entre sí; lo común vive en `components/shared` o `config`.
