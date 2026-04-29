export type Education = {
  degree: string
  institution: string
  period: string
  location: string
  highlights: string[]
  achievements: string[]
}

export const education: Education = {
  degree: "Ingeniería de Sistemas de Información",
  institution: "Universidad Peruana de Ciencias Aplicadas",
  period: "Ago 2021 - Actualidad",
  location: "Lima, Perú",
  highlights: ["Tercio Superior", "Becario Pronabec Beca 18", "10.º ciclo"],
  achievements: [
    "Mantenimiento constante en el tercio superior de la carrera.",
    "Participación en proyectos académicos con enfoque en desarrollo web y sistemas de información.",
    "Desarrollo de habilidades técnicas y blandas a través de trabajos colaborativos y presentaciones.",
  ],
}
