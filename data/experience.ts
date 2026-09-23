import type { Experience } from "@/types"

export type { Experience }

export const experiences: Experience[] = [
  {
    title: "Practicante de Ingeniería de Sistemas de Información",
    company: "Banco de la Nación de Perú",
    period: "May 2026 - Actualidad",
    location: "Lima, Perú",
    achievements: [
      "Documenté el funcionamiento de aplicativos internos mediante diagramas de secuencia y casos de uso, incluyendo reglas de negocio y requerimientos funcionales, sirviendo de base para el desarrollo y las pruebas del equipo.",
      "Contribuí al desarrollo full stack de aplicativos internos en ASP.NET MVC, implementando controladores y lógica en C#, mejorando vistas con HTML, CSS y JavaScript, y elaborando consultas SQL sobre Oracle.",
      "Diseñé y ejecuté casos de prueba funcionales a partir de la documentación de casos de uso, validando el cumplimiento de requerimientos.",
    ],
  },
  {
    title: "Practicante de Desarrollo Frontend",
    company: "El Comercio",
    period: "Sep 2025 - May 2026",
    location: "Lima, Perú",
    achievements: [
      "Implementé visualizaciones de datos interactivas a partir de diseños en Figma y datasets sobre trámites gubernamentales, utilizando React, TypeScript y Recharts.",
      "Diseñé experiencias de scrollytelling para comunicar problemáticas ambientales complejas de forma clara y accesible al público general, utilizando GSAP y Framer Motion para narrar visualmente el fenómeno.",
      "Garanticé consistencia visual y responsividad en secciones interactivas de alto tráfico, optimizando la experiencia en dispositivos móviles y desktop.",
    ],
  },
  {
    title: "Desarrollador Web Jr",
    company: "Neon House Led",
    period: "Dic 2024 - Mar 2025",
    location: "Lima, Perú",
    achievements: [
      "Construí interfaces accesibles y consistentes para una plataforma de salud mental online, traduciendo diseños de Figma a código con Next.js, TypeScript y Tailwind CSS.",
      "Integré la gestión de usuarios, citas y sesiones en tiempo real conectando el frontend con Supabase, agilizando el flujo de reserva para los usuarios finales.",
      "Creé componentes de interfaz reutilizables con Shadcn/UI, agilizando el desarrollo de nuevas pantallas y manteniendo un diseño uniforme en toda la plataforma.",
    ],
  },
]
