import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { ThemeProvider } from "@/components/theme-provider"

export async function generateMetadata(): Promise<Metadata> {

  return {
    title: "CHINEX - The People's Dragon Index",
    description: "CHINEX isn't just a coin — it's a current. Follow the 龙 (dragon) across the ledgers, Decode the 金流 (gold flow) before dawn.",
    metadataBase: new URL('https://chinex.fun'),
    openGraph: {
    title: "CHINEX - The People's Dragon Index",
      description: "CHINEX isn't just a coin — it's a current. Follow the 龙 (dragon) across the ledgers, Decode the 金流 (gold flow) before dawn.",
      images: '/logo.png'
    }

  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet" />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
