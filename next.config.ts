import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  images: {
    // 90 para las capturas de proyectos: el texto fino se degrada con 75.
    qualities: [75, 90],
  },
}

export default nextConfig
