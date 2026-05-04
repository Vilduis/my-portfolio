"use client"

import { useTheme } from "next-themes"
import { motion } from "motion/react"

type Blob = {
  x: number
  y: number
  width: number
  height: number
  duration: number
  delay: number
  darkColor: string
  lightColor: string
  opacity: number
}

const HERO_BLOBS: Blob[] = [
  {
    x: -8,
    y: 10,
    width: 50,
    height: 55,
    duration: 20,
    delay: 0,
    darkColor: "oklch(0.35 0.12 255)",
    lightColor: "oklch(0.70 0.12 255)",
    opacity: 0.55,
  },
  {
    x: 52,
    y: 15,
    width: 48,
    height: 52,
    duration: 24,
    delay: -7,
    darkColor: "oklch(0.30 0.10 255)",
    lightColor: "oklch(0.65 0.10 255)",
    opacity: 0.45,
  },
  {
    x: 30,
    y: 60,
    width: 42,
    height: 45,
    duration: 18,
    delay: -4,
    darkColor: "oklch(0.32 0.11 255)",
    lightColor: "oklch(0.68 0.11 255)",
    opacity: 0.45,
  },
]

export function AuroraBackground() {
  const { resolvedTheme } = useTheme()

  if (!resolvedTheme) return null

  const isDark = resolvedTheme === "dark"

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {HERO_BLOBS.map((blob, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            left: `${blob.x}%`,
            top: `${blob.y}%`,
            width: `${blob.width}vw`,
            height: `${blob.height}vh`,
            background: `radial-gradient(ellipse at center, ${isDark ? blob.darkColor : blob.lightColor} 0%, transparent 70%)`,
            filter: "blur(70px)",
            mixBlendMode: isDark ? "screen" : "multiply",
            opacity: blob.opacity,
          }}
          animate={{
            x: ["0%", "6%", "-5%", "3%", "0%"],
            y: ["0%", "-6%", "5%", "-3%", "0%"],
            scale: [1, 1.06, 0.96, 1.03, 1],
          }}
          transition={{
            duration: blob.duration,
            delay: blob.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  )
}
