import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Maha Attique - Portfolio',
  description: 'Professional portfolio showcasing my projects and skills',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-primary-light text-text-dark">{children}</body>
    </html>
  )
}
