import type { Project, ProjectCategory } from "@/types"

import CodeJourney from "../assets/CodeJourney.png"
import BackWorkshop from "../assets/BackWorkshop.png"
import BackKairos from "../assets/BackKairos.png"
import Workshop from "../assets/Workshop.png"
import Kairos from "../assets/Kairos.png"
import BackCodeJourney from "../assets/BackCodeJourney.png"
import CVMatch from "../assets/Cvmatch.png"
import Stackly from "../assets/Stackly.png"
import CafeBle from "../assets/CafeBle.png"

export type { Project, ProjectCategory }

export const projects: Project[] = [
  {
    id: 1,
    name: "CVMatch",
    technologies: [
      "Nextjs",
      "TypeScript",
      "TailwindCSS",
      "DrizzleORM",
      "PostgreSQL",
    ],
    image: CVMatch,
    description:
      "Analiza con IA la compatibilidad entre un CV y una oferta laboral. Devuelve en segundos un puntaje de match, fortalezas, brechas y preguntas probables de entrevista.",
    github: "https://github.com/Vilduis/CVMatch",
    demo: "https://cv-match-pe.vercel.app/",
    category: "fullstack",
  },
  {
    id: 2,
    name: "Stackly",
    technologies: ["Nextjs", "TypeScript", "TailwindCSS"],
    image: Stackly,
    description:
      "Catálogo de herramientas para desarrollo web organizadas por categorías. Incluye fichas prácticas con precio, nivel técnico y casos de uso para elegir el stack ideal al instante.",
    github: "https://github.com/Vilduis/Stackly",
    demo: "https://stackly-eta.vercel.app/",
    category: "frontend",
  },
  {
    id: 3,
    name: "Kairos",
    technologies: [
      "Nextjs",
      "TypeScript",
      "TailwindCSS",
      "FastAPI",
      "PostgreSQL",
    ],
    image: Kairos,
    description:
      "Plataforma de orientación vocacional que guía la elección de carrera con un chatbot y test RIASEC. Incluye paneles por rol para estudiantes, evaluadores y administradores.",
    github: "https://github.com/Vilduis/front-kairos",
    demo: "https://kairos-pe.vercel.app/",
    category: "fullstack",
  },
  {
    id: 4,
    name: "CafeBle",
    technologies: ["React", "TypeScript", "TailwindCSS"],
    image: CafeBle,
    description:
      "CafeBle: landing page para café de altura de Tingo María, Perú, con catálogo de variedades, selección de peso y molienda, precios dinámicos y pedidos directos por WhatsApp.",
    github: "https://github.com/Vilduis/CafeBle",
    demo: "https://cafeble.vercel.app/",
    category: "frontend",
  },
  {
    id: 5,
    name: "Workshop",
    technologies: [
      "React",
      "TypeScript",
      "TailwindCSS",
      "Spring",
      "PostgreSQL",
    ],
    image: Workshop,
    description:
      "Sistema de gestión para talleres mecánicos: órdenes de servicio, técnicos, clientes y vehículos, con acceso por roles y dashboard de métricas en tiempo real.",
    github: "https://github.com/Vilduis/Workshop",
    demo: "https://worksho-pe.vercel.app/",
    category: "fullstack",
  },
  {
    id: 6,
    name: "CodeJourney",
    technologies: [
      "Nextjs",
      "TypeScript",
      "TailwindCSS",
      "Expressjs",
      "MongoDB",
    ],
    image: CodeJourney,
    description:
      "Plataforma social de blogging técnico para desarrolladores. Permite publicar artículos con imágenes, comentar posts de la comunidad y gestionar el perfil personal.",
    github: "https://github.com/SandovalCoder/front-CodeJourney",
    demo: "https://code-journey-phi.vercel.app",
    category: "fullstack",
  },
  {
    id: 7,
    name: "Kairos API",
    technologies: ["FastAPI", "PostgreSQL"],
    image: BackKairos,
    description:
      "API REST de Kairos. Procesa respuestas RIASEC con TF-IDF y similitud de coseno, e integra Google Gemini para recomendar las tres carreras más afines al estudiante.",
    github: "https://github.com/Vilduis/back-kairos",
    demo: "https://back-kairos.onrender.com/docs",
    category: "backend",
  },
  {
    id: 8,
    name: "Workshop API",
    technologies: ["Spring", "PostgreSQL"],
    image: BackWorkshop,
    description:
      "API REST de Workshop. Centraliza clientes, vehículos, técnicos y órdenes de servicio con autenticación JWT, control de acceso por roles y documentación en Swagger UI.",
    github: "https://github.com/Vilduis/Back-workshop",
    demo: "https://back-workshop.onrender.com/api/docs",
    category: "backend",
  },
  {
    id: 9,
    name: "CodeJourney API",
    technologies: ["Expressjs", "JavaScript", "MongoDB"],
    image: BackCodeJourney,
    description:
      "API REST del backend de CodeJourney. Gestiona usuarios, posts con imágenes y comentarios, con autenticación JWT, almacenamiento en Cloudinary y base de datos MongoDB Atlas.",
    github: "https://github.com/Vilduis/back-CodeJourney-",
    demo: "https://back-code-journey.vercel.app/api/docs/",
    category: "backend",
  },
]

export const featuredProjects = projects.slice(0, 3)

export const categoryLabel: Record<ProjectCategory, string> = {
  frontend: "Frontend",
  fullstack: "Full Stack",
  backend: "Backend",
}
