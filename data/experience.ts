type ExperienceProject = {
  name: string
  achievements: string[]
}

export type Experience = {
  title: string
  company: string
  period: string
  location: string
  projects: ExperienceProject[]
}

export const experiences: Experience[] = [
  {
    title: "Desarrollador Frontend",
    company: "El Comercio",
    period: "Sep 2025 - Actualidad",
    location: "Lima, Perú",
    projects: [
      {
        name: "Licencias de conducir en Perú",
        achievements: [
          "Desarrollé secciones del especial interactivo \"Licencias de conducir en Perú\", parte del segmento ECData de El Comercio, con React, TypeScript y Tailwind CSS.",
          "Implementé visualizaciones de datos interactivas con Recharts, permitiendo al usuario explorar información en tiempo real.",
          "Integré animaciones con Framer Motion para enriquecer la experiencia visual de las secciones desarrolladas.",
          "Garanticé la responsividad y consistencia visual en dispositivos móviles y desktop.",
        ],
      },
    ],
  },
  {
    title: "Desarrollador Web Jr",
    company: "Neon House Led",
    period: "Dic 2024 - Mar 2025",
    location: "Lima, Perú",
    projects: [
      {
        name: "ContigoVoy",
        achievements: [
          "Desarrollé interfaces para \"Contigo Voy\", plataforma de terapia psicológica online, a partir de diseños en Figma con Next.js, TypeScript y Tailwind CSS, garantizando una experiencia de usuario consistente y accesible.",
          "Consumí APIs de Supabase para gestionar datos de usuarios, citas y sesiones desde el frontend.",
          "Construí componentes reutilizables con Shadcn/UI, manteniendo consistencia visual y acelerando la entrega de nuevas funcionalidades.",
          "Participé en revisiones de código, promoviendo buenas prácticas y contribuyendo a la mantenibilidad del proyecto.",
        ],
      },
    ],
  },
]
