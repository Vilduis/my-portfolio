import { Icons } from "@/components/icons"

type TechItem = {
  name: string
  icon: (typeof Icons)[keyof typeof Icons]
}

const techStack: TechItem[] = [
  { name: "React",       icon: Icons.React },
  { name: "Next.js",     icon: Icons.Nextjs },
  { name: "TypeScript",  icon: Icons.TypeScript },
  { name: "JavaScript",  icon: Icons.JavaScript },
  { name: "Tailwind CSS",icon: Icons.TailwindCSS },
  { name: "Express.js",  icon: Icons.Expressjs },
  { name: "MongoDB",     icon: Icons.MongoDB },
  { name: "PostgreSQL",  icon: Icons.PostgreSQL },
  { name: "Spring",      icon: Icons.Spring },
]

function MarqueeRow({
  items,
  reverse = false,
}: {
  items: TechItem[]
  reverse?: boolean
}) {
  const track = [...items, ...items]
  return (
    <div className="group flex overflow-hidden">
      <div
        className={`flex shrink-0 gap-4 ${
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        } group-hover:paused`}
      >
        {track.map((tech, i) => {
          const Icon = tech.icon
          return (
            <div
              key={`${tech.name}-${i}`}
              className="flex items-center gap-2 rounded-full border border-border bg-muted/30 px-4 py-2 backdrop-blur-sm"
            >
              <Icon className="h-5 w-5 shrink-0" aria-hidden="true" />
              <span className="whitespace-nowrap text-sm text-muted-foreground">
                {tech.name}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export function TechMarquee() {
  return (
    <section id="tech-stack" className="border-t border-border py-16">
      <p className="mb-10 text-center text-xs font-medium uppercase tracking-widest text-muted-foreground">
        Stack Tecnológico
      </p>
      <div
        className="space-y-4"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        }}
      >
        <MarqueeRow items={techStack} />
        <MarqueeRow items={[...techStack].reverse()} reverse />
      </div>
    </section>
  )
}
