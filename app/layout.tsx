import type { Metadata } from 'next'
import { Inter, Fira_Code } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import './globals.css'

// Google Fonts setup
const geistSans = Inter({ subsets: ['latin'], variable: '--geist-sans' })
const geistMono = Fira_Code({ subsets: ['latin'], variable: '--geist-mono' })

export const metadata: Metadata = {
  title: 'v0 App',
  description: 'Created with v0',
  generator: 'v0.app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${geistSans.variable} ${geistMono.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
