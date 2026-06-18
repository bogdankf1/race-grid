import type { Metadata } from 'next'
import { Bebas_Neue, DM_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { OfflineIndicator } from '@/components/OfflineIndicator'
import '@/styles/globals.css'
import '@/styles/v2.css'

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
    description: 'All your motorsport in one calendar. F1, IndyCar, NASCAR, WEC, WRC and more — session times in your local timezone.',
    siteName: 'Race Grid',
    type: 'website',
    images: [{ url: 'https://race-grid.com/og.png', width: 1200, height: 630, type: 'image/png', alt: 'Race Grid — Motorsport Calendar' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Race Grid — Motorsport Calendar',
    description: 'All your motorsport in one calendar. F1, IndyCar, NASCAR, WEC, WRC, IMSA, DTM, GTWC and more.',
    images: ['https://race-grid.com/og.png'],
  },
  verification: {
    google: 'vCQu6tYFys2uv5hJLV14zFKjA1LJKHrS3HpjomGmh7Q',
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
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var u=localStorage.getItem('race-grid:ui-version');if(u&&u.replace(/"/g,'')==='v2'){var r2=document.documentElement;r2.dataset.ui='v2';var t2=localStorage.getItem('race-grid:theme');t2=t2?t2.replace(/"/g,''):((window.matchMedia&&matchMedia('(prefers-color-scheme: light)').matches)?'light':'dark');var d2={dark:{'--rg-bg':'#0a0a0e','--rg-surface':'#131318','--rg-elevated':'#1b1b22','--rg-border':'#26262e','--rg-text':'#f4f4f6','--rg-text2':'#a0a0ac','--rg-text3':'#71717d','--rg-header-bg':'rgba(10,10,14,0.72)','--rg-chip-bg':'rgba(255,255,255,0.05)','--rg-chip-text':'#c8c8d0','--rg-btn-bg':'#17171e','--rg-today-border':'rgba(255,255,255,0.32)','--rg-link':'#ff4d42','--rg-success':'#34d399','--rg-card-border':'#1f1f27','--rg-logo-bg':'rgba(255,255,255,0.95)','--rg-shadow':'0 12px 32px rgba(0,0,0,0.45)','--rg-shadow-sm':'0 4px 14px rgba(0,0,0,0.35)','--rg-wash':'rgba(255,77,66,0.05)'},light:{'--rg-bg':'#f7f7f8','--rg-surface':'#ffffff','--rg-elevated':'#f0f0f2','--rg-border':'#e4e4e9','--rg-text':'#131318','--rg-text2':'#565660','--rg-text3':'#84848e','--rg-header-bg':'rgba(255,255,255,0.78)','--rg-chip-bg':'rgba(0,0,0,0.04)','--rg-chip-text':'#3a3a42','--rg-btn-bg':'#ffffff','--rg-today-border':'rgba(0,0,0,0.3)','--rg-link':'#d92d20','--rg-success':'#079455','--rg-card-border':'#e8e8ec','--rg-logo-bg':'transparent','--rg-shadow':'0 12px 32px rgba(16,16,24,0.10)','--rg-shadow-sm':'0 4px 14px rgba(16,16,24,0.07)','--rg-wash':'rgba(217,45,32,0.04)'}};var v2=d2[t2];if(v2){for(var k2 in v2)r2.style.setProperty(k2,v2[k2]);r2.style.colorScheme=t2}return}var t=localStorage.getItem('race-grid:theme');if(!t)return;var d={dark:{'--rg-bg':'#13131d','--rg-surface':'#1c1c30','--rg-elevated':'#232340','--rg-border':'#2e2e46','--rg-text':'#eee','--rg-text2':'#999','--rg-text3':'#909090','--rg-header-bg':'rgba(22,22,34,0.92)','--rg-chip-bg':'rgba(255,255,255,0.06)','--rg-chip-text':'#ccc','--rg-btn-bg':'#252538','--rg-today-border':'rgba(255,255,255,0.25)','--rg-link':'#7ab3ff','--rg-success':'#4ade80','--rg-card-border':'#2a2a42'},light:{'--rg-bg':'#f4f4f8','--rg-surface':'#ffffff','--rg-elevated':'#eeeef4','--rg-border':'#d8d8e4','--rg-text':'#1a1a2e','--rg-text2':'#555','--rg-text3':'#666','--rg-header-bg':'rgba(255,255,255,0.92)','--rg-chip-bg':'rgba(0,0,0,0.05)','--rg-chip-text':'#333','--rg-btn-bg':'#e4e4f0','--rg-today-border':'rgba(0,0,0,0.2)','--rg-link':'#1a56db','--rg-success':'#15803d','--rg-card-border':'#d0d0e0'}};var v=d[t];if(v){var r=document.documentElement;for(var k in v)r.style.setProperty(k,v[k]);r.style.colorScheme=t}}catch(e){}})()`,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `if('serviceWorker' in navigator){navigator.serviceWorker.register('/sw.js',{updateViaCache:'none'})};window.__deferredInstallPrompt=null;window.addEventListener('beforeinstallprompt',function(e){e.preventDefault();window.__deferredInstallPrompt=e})`,
          }}
        />
      </head>
      <body className="min-h-screen">
        <a href="#main-content" className="rg-skip-link">Skip to content</a>
        <OfflineIndicator />
        <main id="main-content">
          {children}
        </main>
        <Analytics />
      </body>
    </html>
  )
}
