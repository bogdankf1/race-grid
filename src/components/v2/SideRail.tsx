'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { NAV_ITEMS } from '../Navigation'
import { t, type Locale } from '@/lib/i18n'

/** V2 desktop navigation — fixed icon rail on the left edge. Hidden ≤768px (bottom dock takes over). */
export function SideRail({ locale }: { locale: Locale }) {
  const pathname = usePathname()
  const [mounted, setMounted] = useState(false)
  useEffect(() => { setMounted(true) }, [])

  return (
    <aside className="v2-rail">
      <Link href="/" className="v2-rail-mark" aria-label={t('app.title', locale)}>
        <span />
      </Link>
      <nav className="v2-rail-nav">
        {NAV_ITEMS.map(item => {
          const active = mounted && item.match(pathname)
          const Icon = item.icon
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`v2-rail-btn${active ? ' is-active' : ''}`}
              title={t(item.labelKey, locale)}
            >
              <Icon style={{ width: 19, height: 19 }} />
              <span className="v2-rail-label">{t(item.labelKey, locale)}</span>
            </Link>
          )
        })}
      </nav>
    </aside>
  )
}
