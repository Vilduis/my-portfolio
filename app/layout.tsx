import type { Metadata } from "next"
import { Geist_Mono, Inter } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/shared/theme-provider"
import { TooltipProvider } from "@/components/ui/tooltip"
import { cn } from "@/lib/utils"
import Navbar from "@/components/layout/navbar"
import Footer from "@/components/layout/footer"
import { DotGrid } from "@/components/shared/dot-grid"

const BASE_URL = "https://vilduis.com/"

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Vilder Sandoval — Frontend Developer",
    template: "%s | Vilder Sandoval",
  },
  description:
    "Frontend Developer especializado en React, Next.js y TypeScript con visión full stack. Basado en Lima, Perú.",
  keywords: [
    "Frontend Developer",
    "React",
    "Next.js",
    "TypeScript",
    "TailwindCSS",
    "Vilder Sandoval",
    "Portfolio",
    "Full Stack",
    "Lima",
    "Perú",
  ],
  authors: [{ name: "Vilder Sandoval", url: BASE_URL }],
  creator: "Vilder Sandoval",
  openGraph: {
    type: "website",
    locale: "es_PE",
    url: BASE_URL,
    siteName: "Vilder Sandoval",
    title: "Vilder Sandoval — Frontend Developer",
    description:
      "Frontend Developer especializado en React, Next.js y TypeScript con visión full stack. Basado en Lima, Perú.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vilder Sandoval — Frontend Developer",
    description:
      "Frontend Developer especializado en React, Next.js y TypeScript con visión full stack. Basado en Lima, Perú.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="es"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        fontMono.variable,
        "font-sans",
        inter.variable
      )}
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Vilder Sandoval",
              url: BASE_URL,
              jobTitle: "Frontend Developer",
              description:
                "Frontend Developer especializado en React, Next.js y TypeScript con visión full stack.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Lima",
                addressCountry: "PE",
              },
              sameAs: [
                "https://linkedin.com/in/vilder-sandoval",
                "https://github.com/Vilduis",
              ],
              knowsAbout: [
                "React",
                "Next.js",
                "TypeScript",
                "TailwindCSS",
                "Node.js",
                "Express",
                "Spring Boot",
                "FastAPI",
                "PostgreSQL",
              ],
            }),
          }}
        />
        <ThemeProvider>
          <TooltipProvider>
            <DotGrid />
            <Navbar />
            <main>{children}</main>
            <Footer />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
