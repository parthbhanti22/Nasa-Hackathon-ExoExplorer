import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { StarfieldBackground } from "@/components/starfield-background"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "ExoML Explorer - K2 Exoplanet Classification",
  description:
    "Advanced machine learning platform for exoplanet classification using K2 mission data. Explore our 87.94% accurate Stacking Classifier model.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <Suspense fallback={null}>
          <StarfieldBackground />
          <Navigation />
        </Suspense>
        <main className="pt-16">{children}</main>
        <Analytics />
      </body>
    </html>
  )
}
