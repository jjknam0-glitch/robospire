import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"

export const metadata: Metadata = {
  title: "RoboSpire - Inspiring Tomorrow's Innovators",
  description:
    "RoboSpire empowers local schools through funding and mentoring, helping students build robotics teams and compete in FIRST LEGO League competitions.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark antialiased">
      <body className={`font-sans bg-black text-white ${GeistSans.variable} ${GeistMono.variable}`}>{children}</body>
    </html>
  )
}
