import type { Experience } from "@/types"

export type { Experience }

export const experiences: Experience[] = [
  {
    title: "Practicante de Ingeniería de Sistemas de Información",
    company: "Banco de la Nación",
    period: "May 2026 - Actualidad",
    location: "Lima, Perú",
    achievements: [
      "Desarrollo funcionalidades full stack con ASP.NET MVC para aplicativos de uso interno del banco: controladores y lógica de negocio en C#, vistas con HTML, CSS y JavaScript, y consultas SQL sobre Oracle.",
      "Elaboro la documentación funcional de los sistemas mediante diagramas de secuencia y casos de uso, definiendo reglas de negocio y requerimientos que guían el desarrollo y las pruebas del equipo.",
      "Diseño y ejecuto casos de prueba funcionales a partir de los casos de uso, validando el cumplimiento de los requerimientos antes de su paso a producción.",
    ],
  },
  {
    title: "Practicante de Desarrollo Frontend",
    company: "El Comercio",
    period: "Ago 2025 - May 2026",
    location: "Lima, Perú",
    achievements: [
      "Implementé secciones de scrollytelling con GSAP y Framer Motion en el especial \"Bajo la superficie: la crisis que esconde el lago Titicaca\", investigación multimedia sobre la contaminación del lago.",
      "Desarrollé visualizaciones de datos interactivas con React, TypeScript y Recharts para un especial sobre el trámite de licencias de conducir, a partir de diseños en Figma.",
      "Colaboré con un equipo interdisciplinario de periodismo, diseño, análisis de datos y desarrollo, asegurando la responsividad y la consistencia visual de las secciones en móvil y desktop.",
    ],
  },
  {
    title: "Practicante de Desarrollo Web",
    company: "Neon House Led",
    period: "Dic 2024 - Mar 2025",
    location: "Lima, Perú",
    achievements: [
      "Desarrollé interfaces para Contigo Voy, plataforma de terapia psicológica online para niños, adolescentes, adultos, parejas y familias, con Next.js, TypeScript y Tailwind CSS a partir de diseños en Figma.",
      "Integré la gestión de usuarios, citas y sesiones en tiempo real con Supabase, simplificando la reserva de terapias para los pacientes.",
      "Creé componentes reutilizables con Shadcn/UI, acelerando el desarrollo de nuevas pantallas y manteniendo un diseño uniforme en toda la plataforma.",
    ],
  },
]
