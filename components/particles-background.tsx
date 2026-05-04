"use client"

import { useEffect, useRef } from "react"
import { useTheme } from "next-themes"

type Particle = {
  x: number
  y: number
  vx: number
  vy: number
  baseVx: number
  baseVy: number
  radius: number
}

const PARTICLE_COUNT = 80
const MAX_DISTANCE = 160
const MOUSE_RADIUS = 140
const MOUSE_FORCE = 0.012
const MAX_SPEED = 1.0
const RETURN_SPEED = 0.03

export function ParticlesBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const frameRef = useRef<number>(0)
  const particlesRef = useRef<Particle[]>([])
  const mouseRef = useRef({ x: -999, y: -999 })
  const { resolvedTheme } = useTheme()
  const themeRef = useRef(resolvedTheme)

  useEffect(() => {
    themeRef.current = resolvedTheme
  }, [resolvedTheme])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initParticles()
    }

    const initParticles = () => {
      particlesRef.current = Array.from({ length: PARTICLE_COUNT }, () => {
        const vx = (Math.random() - 0.5) * 0.5
        const vy = (Math.random() - 0.5) * 0.5
        return {
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx,
          vy,
          baseVx: vx,
          baseVy: vy,
          radius: Math.random() * 1.5 + 0.8,
        }
      })
    }

    resize()
    window.addEventListener("resize", resize)

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY }
    }
    const handleMouseLeave = () => {
      mouseRef.current = { x: -999, y: -999 }
    }
    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("mouseleave", handleMouseLeave)

    const draw = () => {
      const W = canvas.width
      const H = canvas.height
      const pts = particlesRef.current
      const mouse = mouseRef.current
      const isDark = themeRef.current === "dark"

      const dotColor = isDark
        ? "oklch(0.65 0.18 255 / 55%)"
        : "oklch(0.35 0.20 255 / 65%)"

      ctx.clearRect(0, 0, W, H)

      pts.forEach((p) => {
        const dx = p.x - mouse.x
        const dy = p.y - mouse.y
        const dist = Math.hypot(dx, dy)

        if (dist < MOUSE_RADIUS && dist > 0) {
          const force = (1 - dist / MOUSE_RADIUS) * MOUSE_FORCE
          p.vx += (dx / dist) * force * MOUSE_RADIUS
          p.vy += (dy / dist) * force * MOUSE_RADIUS
        }

        p.vx += (p.baseVx - p.vx) * RETURN_SPEED
        p.vy += (p.baseVy - p.vy) * RETURN_SPEED

        const speed = Math.hypot(p.vx, p.vy)
        if (speed > MAX_SPEED) {
          p.vx = (p.vx / speed) * MAX_SPEED
          p.vy = (p.vy / speed) * MAX_SPEED
        }

        p.x += p.vx
        p.y += p.vy

        if (p.x < 0) p.x = W
        if (p.x > W) p.x = 0
        if (p.y < 0) p.y = H
        if (p.y > H) p.y = 0

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fillStyle = dotColor
        ctx.fill()
      })

      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx = pts[i].x - pts[j].x
          const dy = pts[i].y - pts[j].y
          const dist = Math.hypot(dx, dy)

          if (dist < MAX_DISTANCE) {
            const alpha = isDark
              ? (1 - dist / MAX_DISTANCE) * 0.35
              : (1 - dist / MAX_DISTANCE) * 0.45
            const lineColor = isDark
              ? `oklch(0.65 0.18 255 / ${alpha})`
              : `oklch(0.35 0.20 255 / ${alpha})`
            ctx.beginPath()
            ctx.moveTo(pts[i].x, pts[i].y)
            ctx.lineTo(pts[j].x, pts[j].y)
            ctx.strokeStyle = lineColor
            ctx.lineWidth = 0.6
            ctx.stroke()
          }
        }
      }

      frameRef.current = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      cancelAnimationFrame(frameRef.current)
      window.removeEventListener("resize", resize)
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 -z-10"
      aria-hidden="true"
    />
  )
}
