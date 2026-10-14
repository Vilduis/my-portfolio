import { cn } from "@/lib/utils"

export function HeadingAccent({ className }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={cn("block h-0.5 w-14 rounded-full bg-primary/70", className)}
    />
  )
}
