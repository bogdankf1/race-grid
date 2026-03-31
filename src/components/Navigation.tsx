'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Calendar, Flag, MapPin, Trophy } from 'lucide-react'
import { t, type Locale } from '@/lib/i18n'

interface NavItem {
  href: string
  labelKey: string
  icon: React.ComponentType<{ style?: React.CSSProperties }>
  match: (path: string) => boolean
}

const NAV_ITEMS: NavItem[] = [
  {
    href: '/',
    labelKey: 'nav.calendar',
    icon: Calendar,
    match: (path) => path === '/' || path.startsWith('/day/'),
  },
  {
    href: '/series',
    labelKey: 'nav.series',
    icon: Flag,
    match: (path) => path.startsWith('/series') || path.startsWith('/drivers') || path.startsWith('/teams'),
  },
  {
    href: '/circuits',
    labelKey: 'nav.circuits',
    icon: MapPin,
    match: (path) => path.startsWith('/circuits'),
  },
  {
    href: '/standings',
    labelKey: 'nav.standings',
    icon: Trophy,
    match: (path) => path.startsWith('/standings'),
  },
]

/** Desktop nav links — rendered inside the header between logo and controls */
export function DesktopNav({ locale }: { locale: Locale }) {
  const pathname = usePathname()

  return (
    <nav className="rg-desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
      {NAV_ITEMS.map((item) => {
        const active = item.match(pathname)
        return (
          <Link
            key={item.href}
            href={item.href}
            style={{
              padding: '6px 14px',
              borderRadius: 8,
              fontSize: 14,
              fontWeight: 500,
              color: active ? 'var(--rg-link)' : 'var(--rg-text2)',
              textDecoration: 'none',
              transition: 'color 0.15s',
            }}
          >
            {t(item.labelKey, locale)}
          </Link>
        )
      })}
    </nav>
  )
}

/** Mobile bottom tab bar — rendered as a fixed bar at the viewport bottom */
export function BottomNav({ locale }: { locale: Locale }) {
  const pathname = usePathname()

  return (
    <nav
      className="rg-bottom-nav"
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 40,
        background: 'var(--rg-header-bg)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderTop: '1px solid var(--rg-border)',
        paddingBottom: 'env(safe-area-inset-bottom)',
        display: 'none',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', height: 56, maxWidth: 500, margin: '0 auto' }}>
        {NAV_ITEMS.map((item) => {
          const active = item.match(pathname)
          const Icon = item.icon
          return (
            <Link
              key={item.href}
              href={item.href}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 3,
                textDecoration: 'none',
                color: active ? 'var(--rg-link)' : 'var(--rg-text3)',
                transition: 'color 0.15s',
                minWidth: 64,
              }}
            >
              <Icon style={{ width: 20, height: 20 }} />
              <span style={{ fontSize: 11, fontWeight: 500 }}>
                {t(item.labelKey, locale)}
              </span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
