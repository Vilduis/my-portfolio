import type { StaticImageData } from "next/image"
import RidenOn from "../assets/RidenOn.png"
import Calculator from "../assets/Calculator.png"
import UniTrack from "../assets/UniTrack.png"
import OrganAlzer from "../assets/OrganAlzer.png"
import Portfolio1 from "../assets/Portfolio1.png"
import ContigoVoy from "../assets/ContigoVoy.png"
import AsdenPeru from "../assets/AsdenPeru.png"
import NovaTech from "../assets/NovaTech.png"
import CodeJourney from "../assets/CodeJourney.png"
import MamaDelia from "../assets/MamaDelia.png"
import QuizAnime from "../assets/QuizAnime.png"
import EspecialLicencias from "../assets/EspecialLicencias.png"

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
    name: "Portfolio",
    technologies: ["Nextjs", "TailwindCSS", "TypeScript"],
    image: Portfolio1,
    description:
      "Mi portafolio personal construido con Next.js, Tailwind CSS, TypeScript y Framer Motion.",
    github: "https://github.com/Vilduis/Portfolio_v2",
    demo: "https://vilduis.netlify.app/",
  },
  {
    id: 2,
    name: "CodeJourney",
    technologies: ["TypeScript", "TailwindCSS", "Nextjs", "Expressjs", "MongoDB"],
    image: CodeJourney,
    description:
      "CodeJourney es una plataforma social de blogging técnico diseñada para desarrolladores. Permite publicar y compartir conocimientos mediante posts, utilizando una arquitectura moderna y escalable.",
    github: "https://github.com/SandovalCoder/front-CodeJourney",
    demo: "https://code-journey-phi.vercel.app",
  },
  {
    id: 3,
    name: "NovaTech",
    technologies: ["React", "TypeScript", "TailwindCSS"],
    image: NovaTech,
    description:
      "NovaTech es una aplicación de comercio electrónico moderna dedicada a la venta de tecnologías de punta: smartphones, laptops, televisores y más.",
    github: "https://github.com/SandovalCoder/NovaTech",
    demo: "https://nova-tech-two.vercel.app/",
  },
  {
    id: 4,
    name: "MamaDelia",
    technologies: ["JavaScript", "TailwindCSS"],
    image: MamaDelia,
    description:
      "Sitio web estático de restaurante Mama Delia. Presenta especialidades, testimonios, reservas y un carrito simple, con soporte de modo claro/oscuro.",
    github: "https://github.com/Vilduis/RestDelia",
    demo: "https://rest-delia.vercel.app/",
  },
  {
    id: 5,
    name: "QuizAnime",
    technologies: ["JavaScript", "TailwindCSS"],
    image: QuizAnime,
    description:
      "QuizAnime una web con 40 preguntas aleatorias, cada una con imagen del anime. Interfaz con Tailwind CSS e iconos de Lucide; lógica en JavaScript.",
    github: "https://github.com/Vilduis/Quiz-anime",
    demo: "https://quiz-animes.vercel.app/",
  },
  {
    id: 6,
    name: "RidenOn",
    technologies: ["JavaScript"],
    image: RidenOn,
    description:
      "RideOn es una plataforma de compra de autos en línea con diseño responsivo, construida con HTML5, CSS3 y Bootstrap.",
    github: "https://github.com/SandovalCoder/RideOn_Landing_Page",
    demo: "https://rideon-y.vercel.app/",
  },
  {
    id: 7,
    name: "Calculator",
    technologies: ["JavaScript"],
    image: Calculator,
    description:
      "Calculadora simple con operaciones básicas y diseño responsivo, construida con HTML, CSS, Bootstrap 5 y JavaScript.",
    github: "https://github.com/SandovalCoder/Calculator",
  },
  {
    id: 8,
    name: "UniTrack",
    technologies: ["JavaScript"],
    image: UniTrack,
    description:
      "UniTrack es una plataforma para gestionar y hacer seguimiento de tu rendimiento académico. Registra tus cursos, calcula tu promedio ponderado y más.",
    github: "https://github.com/SandovalCoder/PoderadoUniversitario",
  },
  {
    id: 9,
    name: "OrganAlzer",
    technologies: ["JavaScript"],
    image: OrganAlzer,
    description:
      "OrganAIzer es un asistente de productividad inteligente que te ayuda a organizar tareas, establecer recordatorios y gestionar tu tiempo de manera eficiente.",
    github: "https://github.com/SandovalCoder/Coder.github.io",
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
