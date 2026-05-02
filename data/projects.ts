import type { StaticImageData } from "next/image"

import Portfolio1 from "../assets/Portfolio1.png"
import ContigoVoy from "../assets/ContigoVoy.png"
import AsdenPeru from "../assets/AsdenPeru.png"
import CodeJourney from "../assets/CodeJourney.png"
import BackWorkshop from "../assets/BackWorkshop.png"
import BackKairos from "../assets/BackKairos.png"
import EspecialLicencias from "../assets/EspecialLicencias.png"
import Simulacredit from "../assets/SimulaCredit.png"
import CVSanius from "../assets/CVSanius.png"
import LiriAI from "../assets/LiriAI.png"
import Workshop from "../assets/Workshop.png"
import Kairos from "../assets/Kairos.png"
import BackCodeJourney from "../assets/BackCodeJourney.png"


export type ProjectCategory = "fullstack" | "frontend" | "backend"

interface BaseProject {
  id: number
  name: string
  technologies: string[]
  image: StaticImageData
  description: string
}

export interface Project extends BaseProject {
  github: string
  demo?: string
  category: ProjectCategory
}

export interface Service extends BaseProject {
  company: string
}

export const personalProjects: Project[] = [
  {
    id: 1,
    name: "Vilfit",
    technologies: ["Nextjs", "TypeScript", "TailwindCSS", "Authjs", "PostgreSQL", "Neon", "Shadcnui", "DrizzleORM"],
    image: Portfolio1,
    description:
      "Marketplace de empleo para Latinoamérica que usa IA para eliminar el filtrado manual de CVs. Los reclutadores reciben un ranking automático de candidatos con score de compatibilidad, mientras los candidatos se postulan subiendo su CV.",
    github: "https://github.com/Vilduis/Vilfit",
    demo: "https://vilfit.vercel.app/",
    category: "fullstack",
  },
  {
    id: 2,
    name: "CVMatch",
    technologies: ["Nextjs", "TypeScript", "TailwindCSS", "Authjs", "PostgreSQL", "Neon", "Shadcnui", "DrizzleORM"],
    image: Portfolio1,
    description:
      "Plataforma que analiza la compatibilidad entre un CV y una oferta laboral usando IA. Genera en segundos un puntaje de match, fortalezas, brechas y sugerencias de mejora, con preguntas probables de entrevista si el match supera el 70%.",
    github: "https://github.com/Vilduis/CVMatch",
    demo: "https://cv-match-pe.vercel.app/",
    category: "fullstack",
  },
  {
    id: 3,
    name: "Kairos",
    technologies: ["Nextjs", "TypeScript", "TailwindCSS", "FastAPI", "Shadcnui", "PostgreSQL", "Authjs"],
    image: Kairos,
    description:
      "Plataforma de orientación vocacional que guía a estudiantes en la elección de carrera mediante un chatbot con test RIASEC. Incluye paneles diferenciados para estudiantes, evaluadores y administradores, con rutas protegidas por rol.",
    github: "https://github.com/Vilduis/front-kairos",
    demo: "https://kairos-pe.vercel.app/",
    category: "fullstack",
  },
  {
    id: 4,
    name: "Workshop",
    technologies: ["React", "TypeScript", "TailwindCSS", "Spring", "Shadcnui", "PostgreSQL", "Vite"],
    image: Workshop,
    description:
      "Sistema web para la administración integral de talleres mecánicos. Gestiona órdenes de servicio, técnicos, clientes y vehículos con control de acceso por roles (Admin / Técnico) y dashboard de métricas en tiempo real.",
    github: "https://github.com/Vilduis/Workshop",
    demo: "https://worksho-pe.vercel.app/",
    category: "fullstack",
  },
  {
    id: 5,
    name: "SimulaCredit",
    technologies: ["React", "TypeScript", "TailwindCSS", "Supabase", "Vite", "Shadcnui"],
    image: Simulacredit,
    description:
      "Aplicación web full stack para simular créditos hipotecarios. Calcula cuotas mensuales, cronogramas de amortización e indicadores financieros clave (TCEA, VAN, TIR). Incluye gestión de clientes y propiedades, generación de reportes y exportación a PDF y Excel.",
    github: "https://github.com/Vilduis/SimulaCredit",
    demo: "https://simulacredit.netlify.app/",
    category: "fullstack",
  },
  {
    id: 6,
    name: "CodeJourney",
    technologies: ["Nextjs", "TypeScript", "TailwindCSS", "Expressjs", "MongoDB"],
    image: CodeJourney,
    description:
      "Plataforma social de blogging técnico para desarrolladores. Permite publicar artículos con imágenes, comentar posts de la comunidad y gestionar el perfil personal y rutas protegidas por autenticación.",
    github: "https://github.com/SandovalCoder/front-CodeJourney",
    demo: "https://code-journey-phi.vercel.app",
    category: "fullstack",
  },
  {
    id: 7,
    name: "Portfolio",
    technologies: ["Nextjs", "TypeScript", "TailwindCSS", "Shadcnui", "Resend"],
    image: Portfolio1,
    description:
      "Mi portafolio personal construido con Next.js, Tailwind CSS, TypeScript y Framer Motion.",
    github: "https://github.com/Vilduis/my-portfolio",
    demo: "https://vilduis.vercel.app/",
    category: "frontend",
  },
  {
    id: 8,
    name: "CV Sanius",
    technologies: ["React", "TypeScript", "TailwindCSS", "Vite"],
    image: CVSanius,
    description:
      "Editor de currículums con asistencia de IA. Genera resúmenes profesionales y optimiza descripciones de experiencia laboral con Google Gemini, con vista previa en tiempo real y exportación a PDF.",
    github: "https://github.com/Vilduis/Sanius",
    demo: "https://cv-sanius.netlify.app/",
    category: "frontend",
  },
  {
    id: 9,
    name: "Liriai",
    technologies: ["React", "TypeScript", "TailwindCSS", "Vite"],
    image: LiriAI,
    description:
      "Aplicación web que usa Google Gemini para crear poemas y frases a partir de una idea o sentimiento, y redactar respuestas a mensajes con distintos tonos y formatos.",
    github: "https://github.com/Vilduis/LiriAI",
    demo: "https://liriai.netlify.app/",
    category: "frontend",
  },
  {
    id: 10,
    name: "Kairos API",
    technologies: ["FastAPI", "PostgreSQL", "JWT"],
    image: BackKairos,
    description:
      "API REST del backend de Kairos. Procesa respuestas vocacionales con un modelo RIASEC (TF-IDF + similitud de coseno) e integra Google Gemini para conversaciones guiadas con IA, recomendando las tres carreras más afines al perfil del estudiante.",
    github: "https://github.com/Vilduis/back-kairos",
    demo: "https://back-kairos.onrender.com/docs",
    category: "backend",
  },
  {
    id: 11,
    name: "Workshop API",
    technologies: ["Spring", "JWT", "PostgreSQL", "Neon"],
    image: BackWorkshop,
    description:
      "API REST del backend de Workshop. Centraliza la gestión de clientes, vehículos, técnicos y órdenes de servicio de un taller mecánico, con autenticación JWT, control de acceso por roles (Admin / Técnico) y documentación interactiva con Swagger UI.",
    github: "https://github.com/Vilduis/Back-workshop",
    demo: "https://back-workshop.onrender.com/api/docs",
    category: "backend",
  },
  {
    id: 12,
    name: "CodeJourney API",
    technologies: ["Nodejs", "Expressjs", "JavaScript", "MongoDB", "JWT"],
    image: BackCodeJourney,
    description:
      "API REST del backend de CodeJourney. Gestiona usuarios, posts con imágenes y comentarios, con autenticación JWT, almacenamiento en Cloudinary y base de datos MongoDB Atlas.",
    github: "https://github.com/Vilduis/back-CodeJourney-",
    demo: "https://back-code-journey.vercel.app/api/docs/",
    category: "backend",
  },

]

export const professionalExperience: Service[] = [
  {
    id: 1,
    name: "Especial Licencia",
    technologies: ["React", "TailwindCSS", "TypeScript"],
    image: EspecialLicencias,
    description:
      "Especial interactivo de periodismo de datos con estética Pixel Art. Combina visualización de estadísticas complejas (mapas y gráficos) con una experiencia gamificada (trivia) para exponer la problemática de seguridad vial en Perú.",
    company: "El Comercio",
  },
  {
    id: 2,
    name: "ContigoVoy",
    technologies: ["Nextjs", "TypeScript", "TailwindCSS", "PostgreSQL"],
    image: ContigoVoy,
    description:
      "Plataforma integral de atención psicológica que ofrece terapias virtuales, reserva de citas y acompañamiento personalizado para usuarios en su proceso de bienestar emocional.",
    company: "Neon House Led",
  },
  {
    id: 3,
    name: "AsdenPerú",
    technologies: ["Nextjs", "TypeScript", "MongoDB", "Expressjs", "TailwindCSS"],
    image: AsdenPeru,
    description:
      "Plataforma digital que centraliza la gestión y difusión de iniciativas de desarrollo sostenible. Impulsa la innovación, transparencia y compromiso social para un Perú más justo.",
    company: "Neon House Led",
  },
]
