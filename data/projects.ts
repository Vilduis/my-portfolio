import type { StaticImageData } from "next/image"

import Portfolio1 from "../assets/Portfolio1.png"
import ContigoVoy from "../assets/ContigoVoy.png"
import AsdenPeru from "../assets/AsdenPeru.png"
import NovaTech from "../assets/NovaTech.png"
import CodeJourney from "../assets/CodeJourney.png"
import MamaDelia from "../assets/MamaDelia.png"
import QuizAnime from "../assets/QuizAnime.png"
import EspecialLicencias from "../assets/EspecialLicencias.png"
import Simulacredit from "../assets/SimulaCredit.png"
import CVSanius from "../assets/CVSanius.png"
import LiriAI from "../assets/LiriAI.png"
import Workshop from "../assets/Workshop.png"
import Kairos from "../assets/Kairos.png"


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
      "Aplicación full stack de fitness y seguimiento de rutinas de entrenamiento, construida con Next.js. Actualmente en desarrollo.",
    github: "https://github.com/Vilduis/Vilfit",
    demo: "https://vilfit.vercel.app/"
  },
  {
    id: 2,
    name: "CVMatch",
    technologies: ["Nextjs", "TypeScript", "TailwindCSS", "Authjs", "PostgreSQL", "Neon", "Shadcnui", "DrizzleORM"],
    image: Portfolio1,
    description:
      "Plataforma full stack para la búsqueda y match entre candidatos y empleadores en el mercado peruano, construida con Next.js. Actualmente en desarrollo.",
    github: "https://github.com/Vilduis/CVMatch",
    demo: "https://cv-match-pe.vercel.app/"
  },

  {
    id: 3,
    name: "Kairos",
    technologies: ["Nextjs", "TypeScript", "TailwindCSS", "FastAPI", "Shadcnui", "PostgreSQL", "Authjs"],
    image: Kairos,
    description:
      "Aplicación full stack construida con Next.js y FastAPI. Proyecto terminado.",
    github: "https://github.com/Vilduis/front-kairos",
    demo: "https://kairos-pe.vercel.app/"
  },
  {
    id: 4,
    name: "Workshop",
    technologies: ["React", "TypeScript", "TailwindCSS", "Spring", "Shadcnui", "PostgreSQL", "Vite"],
    image: Workshop,
    description:
      "Aplicación full stack para gestión de talleres, construida con React y Spring Boot. Proyecto terminado.",
    github: "https://github.com/Vilduis/Workshop",
    demo: "https://worksho-pe.vercel.app/"
  },
  {
    id: 5,
    name: "SimulaCredit",
    technologies: ["React", "TypeScript", "TailwindCSS", "Supabase", "Vite", "Shadcnui"],
    image: Simulacredit,
    description:
      "Aplicación full stack para simulación de créditos financieros, construida con React y Supabase. Proyecto terminado.",
    github: "https://github.com/Vilduis/SimulaCredit",
    demo: "https://simulacredit.netlify.app/"
  },
  {
    id: 6,
    name: "CodeJourney",
    technologies: ["Nextjs", "TypeScript", "TailwindCSS", "Expressjs", "MongoDB"],
    image: CodeJourney,
    description:
      "CodeJourney es una plataforma social de blogging técnico diseñada para desarrolladores. Permite publicar y compartir conocimientos mediante posts, utilizando una arquitectura moderna y escalable.",
    github: "https://github.com/SandovalCoder/front-CodeJourney",
    demo: "https://code-journey-phi.vercel.app",
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
  },

  {
    id: 8,
    name: "CV Sanius",
    technologies: ["React", "TypeScript", "TailwindCSS", "Vite"],
    image: CVSanius,
    description:
      "Aplicación frontend en React que integra la API de Gemini para analizar y mejorar currículums de forma inteligente.",
    github: "https://github.com/Vilduis/Sanius",
    demo: "https://cv-sanius.netlify.app/"
  },
  {
    id: 9,
    name: "Liriai",
    technologies: ["React", "TypeScript", "TailwindCSS", "Vite"],
    image: LiriAI,
    description:
      "Aplicación frontend en React con integración de la API de Gemini para generación y análisis de contenido.",
    github: "https://github.com/Vilduis/LiriAI",
    demo: "https://liriai.netlify.app/"
  },

  {
    id: 10,
    name: "NovaTech",
    technologies: ["React", "TypeScript", "TailwindCSS"],
    image: NovaTech,
    description:
      "NovaTech es una aplicación de comercio electrónico moderna dedicada a la venta de tecnologías de punta: smartphones, laptops, televisores y más.",
    github: "https://github.com/SandovalCoder/NovaTech",
    demo: "https://nova-tech-two.vercel.app/",
  },
  {
    id: 11,
    name: "MamaDelia",
    technologies: ["HTML", "CSS", "JavaScript"],
    image: MamaDelia,
    description:
      "Sitio web estático de restaurante Mama Delia. Presenta especialidades, testimonios, reservas y un carrito simple, con soporte de modo claro/oscuro.",
    github: "https://github.com/Vilduis/RestDelia",
    demo: "https://rest-delia.vercel.app/",
  },
  {
    id: 12,
    name: "QuizAnime",
    technologies: ["HTML", "CSS", "JavaScript"],
    image: QuizAnime,
    description:
      "QuizAnime es una web con 40 preguntas aleatorias, cada una con imagen del anime. Interfaz con Tailwind CSS e iconos de Lucide; lógica en JavaScript.",
    github: "https://github.com/Vilduis/Quiz-anime",
    demo: "https://quiz-animes.vercel.app/",
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
