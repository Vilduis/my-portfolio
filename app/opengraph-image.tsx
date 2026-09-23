import { readFile } from "node:fs/promises"
import { join } from "node:path"
import { ImageResponse } from "next/og"

import { site } from "@/data/site"

export const alt = `${site.name}, Desarrollador Full Stack en ${site.location}`
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

const colors = {
  background: "#070708",
  foreground: "#f0f2f4",
  muted: "#a1a6ad",
  primary: "#9f6fff",
}

const stack = ["React", "Next.js", "TypeScript", "Node.js", "ASP.NET"]

export default async function OpengraphImage() {
  const photo = await readFile(join(process.cwd(), "public/louis.jpeg"))
  const photoSrc = `data:image/jpeg;base64,${photo.toString("base64")}`

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "72px 80px",
        backgroundColor: colors.background,
        backgroundImage: `radial-gradient(circle at 88% 30%, ${colors.primary}33, transparent 45%)`,
        color: colors.foreground,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={photoSrc}
          alt=""
          width={96}
          height={96}
          style={{
            borderRadius: 9999,
            objectFit: "cover",
            border: `3px solid ${colors.primary}`,
          }}
        />
        {site.available && (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              padding: "8px 18px",
              borderRadius: 9999,
              border: `1px solid ${colors.primary}66`,
              backgroundColor: `${colors.primary}1a`,
              color: colors.primary,
              fontSize: 22,
            }}
          >
            <div
              style={{
                width: 10,
                height: 10,
                borderRadius: 9999,
                backgroundColor: colors.primary,
              }}
            />
            Disponible para trabajar
          </div>
        )}
      </div>

      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          style={{
            display: "flex",
            fontSize: 92,
            fontWeight: 700,
            letterSpacing: "-0.03em",
            lineHeight: 1,
          }}
        >
          Hey, soy&nbsp;<span style={{ color: colors.primary }}>Vilder</span>
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 24,
            fontSize: 36,
            color: colors.muted,
          }}
        >
          {`Desarrollador Full Stack en ${site.location}`}
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          fontSize: 24,
          color: colors.muted,
        }}
      >
        <div style={{ display: "flex", gap: 14 }}>
          {stack.map((tech, i) => (
            <div key={tech} style={{ display: "flex", gap: 14 }}>
              {i > 0 && <span style={{ color: `${colors.muted}80` }}>·</span>}
              <span style={{ color: colors.foreground }}>{tech}</span>
            </div>
          ))}
        </div>
        <div style={{ display: "flex" }}>
          {site.url.replace("https://", "")}
        </div>
      </div>
    </div>,
    size
  )
}
