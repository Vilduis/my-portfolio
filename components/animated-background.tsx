"use client"

import { useEffect, useRef, useState, useCallback } from "react"
import { motion, AnimatePresence } from "motion/react"

type Wave = {
  id: number
  x: number
  y: number
}

const RINGS = [
  { size: 120, delay: 0.0, duration: 2.8 },
  { size: 240, delay: 0.25, duration: 3.0 },
  { size: 380, delay: 0.5, duration: 3.2 },
  { size: 540, delay: 0.75, duration: 3.4 },
  { size: 720, delay: 1.0, duration: 3.6 },
  { size: 920, delay: 1.25, duration: 3.8 }, // ← cubre bien la pantalla
]

export function AnimatedBackground() {
  const [waves, setWaves] = useState<Wave[]>([])
  const counterRef = useRef(0)

  const spawnWave = useCallback(() => {
    const id = counterRef.current++
    const x = 8 + Math.random() * 84
    const y = 8 + Math.random() * 84

    setWaves((prev) => [...prev, { id, x, y }])

    setTimeout(() => {
      setWaves((prev) => prev.filter((w) => w.id !== id))
    }, 5000)
  }, [])

  useEffect(() => {
    spawnWave()
    const timer = setInterval(spawnWave, 2200)
    return () => clearInterval(timer)
  }, [spawnWave])

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <AnimatePresence>
        {waves.map((wave) => (
          <div
            key={wave.id}
            className="absolute"
            style={{ left: `${wave.x}%`, top: `${wave.y}%` }}
          >
            {/* Gota que cae */}
            <motion.div
              className="absolute h-1.5 w-1.5 rounded-full bg-primary/50 dark:bg-primary/60"
              initial={{ x: -3, y: -22, opacity: 1, scaleY: 1.4 }}
              animate={{ x: -3, y: 0, opacity: 0, scaleY: 0.6 }}
              exit={{}}
              transition={{ duration: 0.25, ease: "easeIn" }}
            />

            {/* Corona de impacto — óvalo achatado */}
            <motion.div
              className="absolute rounded-full border border-primary/40 dark:border-primary/50"
              initial={{
                width: 0,
                height: 0,
                x: 0,
                y: 0,
                opacity: 0.9,
                scaleY: 0.4,
              }}
              animate={{
                width: 40,
                height: 40,
                x: -20,
                y: -20,
                opacity: 0,
                scaleY: 1,
              }}
              exit={{}}
              transition={{ duration: 0.35, ease: "easeOut" }}
            />

            {/* Anillos expansivos */}
            {RINGS.map((ring, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full border border-primary/20 dark:border-primary/30"
                initial={{
                  width: 0,
                  height: 0,
                  x: 0,
                  y: 0,
                  opacity: 0.8,
                }}
                animate={{
                  width: ring.size,
                  height: ring.size,
                  x: -(ring.size / 2),
                  y: -(ring.size / 2),
                  opacity: 0,
                }}
                exit={{}}
                transition={{
                  duration: ring.duration,
                  delay: ring.delay,
                  ease: [0.1, 0.4, 0.3, 1],
                }}
              />
            ))}
          </div>
        ))}
      </AnimatePresence>
    </div>
  )
}
