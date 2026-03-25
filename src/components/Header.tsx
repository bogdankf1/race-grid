'use client'

import Link from 'next/link'
import { ChevronLeft, Sun, Moon } from 'lucide-react'
import { TimezoneSelector } from './TimezoneSelector'
import { SeriesFilterDropdown } from './SeriesFilterDropdown'
import { NotificationSettings } from './NotificationSettings'
import { t, LOCALE_LABELS, type Locale } from '@/lib/i18n'
import type { Theme } from '@/lib/theme'

interface HeaderProps {
  selectedSeriesIds: string[]
  onToggleSeries: (id: string) => void
  onSetSeries: (ids: string[]) => void
  timezone: string
  onTimezoneChange: (tz: string) => void
  theme: Theme
  onToggleTheme: () => void
  locale: Locale
  onToggleLocale: () => void
  backHref?: string
}

export function Header({
  selectedSeriesIds,
  onToggleSeries,
  onSetSeries,
  timezone,
  onTimezoneChange,
  theme,
  onToggleTheme,
  locale,
  onToggleLocale,
  backHref,
}: HeaderProps) {
  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 40,
        background: 'var(--rg-header-bg)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: '1px solid var(--rg-border)',
      }}
    >
      <div className="rg-header-inner">
        {backHref ? (
          <Link
            href={backHref}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 4,
              fontSize: 14,
              color: 'var(--rg-text2)',
              textDecoration: 'none',
              whiteSpace: 'nowrap',
            }}
          >
            <ChevronLeft style={{ width: 18, height: 18 }} />
            <span>{t('nav.back', locale)}</span>
          </Link>
        ) : (
          <h1 className="font-display rg-header-title">{t('app.title', locale)}</h1>
        )}
        <div className="rg-header-controls" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <SeriesFilterDropdown
            selectedIds={selectedSeriesIds}
            onToggle={onToggleSeries}
            onSetAll={onSetSeries}
            locale={locale}
          />
          <TimezoneSelector value={timezone} onChange={onTimezoneChange} locale={locale} />

          <NotificationSettings locale={locale} />

          {/* Theme toggle */}
          <button
            onClick={onToggleTheme}
            title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            style={{
              height: 36,
              width: 36,
              borderRadius: 10,
              background: 'var(--rg-btn-bg)',
              border: '1px solid var(--rg-border)',
              color: 'var(--rg-text2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {theme === 'dark' ? <Sun style={{ width: 15, height: 15 }} /> : <Moon style={{ width: 15, height: 15 }} />}
          </button>

          {/* Locale toggle */}
          <button
            onClick={onToggleLocale}
            title={locale === 'en' ? 'Перемкнути на українську' : 'Switch to English'}
            style={{
              height: 36,
              padding: '0 10px',
              borderRadius: 10,
              background: 'var(--rg-btn-bg)',
              border: '1px solid var(--rg-border)',
              color: 'var(--rg-text2)',
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: 1,
            }}
          >
            {LOCALE_LABELS[locale]}
          </button>
        </div>
      </div>
    </header>
  )
}
