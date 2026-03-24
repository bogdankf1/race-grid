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
  manifest: '/manifest.json',
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
    <html lang="en" className={`${bebasNeue.variable} ${dmSans.variable}`} suppressHydrationWarning>
      <head>
        <title>Race Grid — Motorsport Calendar</title>
        <meta name="theme-color" content="#13131d" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('race-grid:theme');if(!t)return;var d={dark:{'--rg-bg':'#13131d','--rg-surface':'#1c1c30','--rg-elevated':'#232340','--rg-border':'#2e2e46','--rg-text':'#eee','--rg-text2':'#999','--rg-text3':'#666','--rg-header-bg':'rgba(22,22,34,0.92)','--rg-chip-bg':'rgba(255,255,255,0.06)','--rg-chip-text':'#ccc','--rg-btn-bg':'#252538','--rg-today-border':'rgba(255,255,255,0.25)','--rg-link':'#7ab3ff','--rg-card-border':'#2a2a42'},light:{'--rg-bg':'#f4f4f8','--rg-surface':'#ffffff','--rg-elevated':'#eeeef4','--rg-border':'#d8d8e4','--rg-text':'#1a1a2e','--rg-text2':'#555','--rg-text3':'#888','--rg-header-bg':'rgba(255,255,255,0.92)','--rg-chip-bg':'rgba(0,0,0,0.05)','--rg-chip-text':'#333','--rg-btn-bg':'#e4e4f0','--rg-today-border':'rgba(0,0,0,0.2)','--rg-link':'#1a56db','--rg-card-border':'#d0d0e0'}};var v=d[t];if(v){var r=document.documentElement;for(var k in v)r.style.setProperty(k,v[k]);r.style.colorScheme=t}}catch(e){}})()`,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `if('serviceWorker' in navigator){navigator.serviceWorker.register('/sw.js')}`,
          }}
        />
      </head>
      <body className="min-h-screen">
        {children}
      </body>
    </html>
  )
}
