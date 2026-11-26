interface TimelineItemProps {
  title: string
  subtitle: string
  period: string
  description: string
}

export function TimelineItem({
  title,
  subtitle,
  period,
  description,
}: TimelineItemProps) {
  return (
    <li className="relative grid gap-3 pb-12 pl-7 last:pb-0 sm:grid-cols-[15rem_1fr] sm:gap-10 lg:grid-cols-[17rem_1fr]">
      <span
        aria-hidden="true"
        className="absolute top-2 bottom-0 left-[3.5px] w-px bg-border"
      />
      <span
        aria-hidden="true"
        className="absolute top-[7px] left-0 size-2 rounded-full bg-primary ring-4 ring-background"
      />

      <div>
        <h3 className="leading-snug font-semibold text-balance">{title}</h3>
        <p className="mt-0.5 text-sm font-medium">{subtitle}</p>
        <p className="mt-1.5 font-mono text-xs text-muted-foreground">
          {period}
        </p>
      </div>

      <p className="max-w-[40rem] text-[0.9375rem] leading-relaxed text-balance-pretty text-muted-foreground">
        {description}
      </p>
    </li>
  )
}
