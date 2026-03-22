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
  title: 'Race Grid — Motorsport Calendar',
  description: 'All your motorsport in one calendar. F1, IndyCar, NASCAR, WEC, WRC, IMSA, DTM, GT World Challenge and more — with session times in your local timezone.',
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    title: 'Race Grid — Motorsport Calendar',
    description: 'All your motorsport in one calendar. F1, IndyCar, NASCAR, WEC, WRC, IMSA, DTM, GTWC and more — with session times in your local timezone.',
    siteName: 'Race Grid',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Race Grid — Motorsport Calendar',
    description: 'All your motorsport in one calendar. F1, IndyCar, NASCAR, WEC, WRC, IMSA, DTM, GTWC and more.',
  },
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
