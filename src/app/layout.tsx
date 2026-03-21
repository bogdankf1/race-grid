import type { Metadata } from 'next'
import { Bebas_Neue, DM_Sans } from 'next/font/google'
import '@/styles/globals.css'

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-display',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-body',
})

export const metadata: Metadata = {
  title: 'race-grid — Motorsport Calendar',
  description: 'Universal motorsport calendar. Track F1, WEC, IndyCar, NASCAR, NLS, and WRC all in one place.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${bebasNeue.variable} ${dmSans.variable}`}>
      <body className="min-h-screen">
        {children}
      </body>
    </html>
  )
}
