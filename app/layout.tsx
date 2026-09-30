import type { Metadata } from "next"
import { Geist_Mono, Inter } from "next/font/google"

import "./globals.css"
import { site } from "@/data/site"
import { ThemeProvider } from "@/components/theme-provider"
import { Nav } from "@/components/shared/nav"
import { Footer } from "@/components/shared/footer"
import { cn } from "@/lib/utils"

const fontSans = Inter({ subsets: ["latin"], variable: "--font-sans" })

const fontMono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono" })

const title = `${site.name} | ${site.role}`

const description =
  "Desarrollador full stack con enfoque en frontend en Lima, Perú. React, Next.js y TypeScript; visualizaciones de datos y scrollytelling para El Comercio, y desarrollo con C# y Oracle en el Banco de la Nación."

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: title,
    template: `%s | ${site.name}`,
  },
  description,
  alternates: {
    canonical: "/",
  },
  keywords: [
    "Vilder Sandoval",
    "Full Stack Developer",
    "Desarrollador Full Stack",
    "React",
    "Next.js",
    "TypeScript",
    "FastAPI",
    "Spring Boot",
    "C#",
    "ASP.NET",
    "Oracle",
    "Lima",
    "Perú",
  ],
  authors: [{ name: site.fullName, url: site.url }],
  creator: site.fullName,
  openGraph: {
    type: "website",
    locale: "es_PE",
    url: site.url,
    siteName: site.name,
    title,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
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

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.fullName,
  alternateName: site.name,
  url: site.url,
  jobTitle: site.role,
  description,
  image: `${site.url}/louis.jpeg`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lima",
    addressCountry: "PE",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Universidad Peruana de Ciencias Aplicadas",
  },
  sameAs: [site.linkedin, site.github],
  knowsAbout: [
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Node.js",
    "Express",
    "FastAPI",
    "Spring Boot",
    "C#",
    "ASP.NET",
    "PostgreSQL",
    "Oracle",
    "MongoDB",
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="es"
      data-scroll-behavior="smooth"
      suppressHydrationWarning
      className={cn("antialiased", fontSans.variable, fontMono.variable)}
    >
      <body className="font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <ThemeProvider defaultTheme="dark">
          <Nav />
          <main className="w-full">{children}</main>
          <div className="mx-auto w-full max-w-6xl px-5 sm:px-6">
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
