export function DotGrid() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10"
      style={{
        backgroundImage:
          "radial-gradient(circle, color-mix(in oklch, var(--foreground) 10%, transparent) 1px, transparent 1px)",
        backgroundSize: "28px 28px",
      }}
    />
  )
}
