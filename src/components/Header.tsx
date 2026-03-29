'use client'

import Link from 'next/link'
import { useState } from 'react'
import { ChevronLeft, Settings } from 'lucide-react'
import { SeriesFilterDropdown } from './SeriesFilterDropdown'
import { InstallOrNotify } from './InstallOrNotify'
import { SettingsModal } from './SettingsModal'
import { t, type Locale } from '@/lib/i18n'
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
  spoilerFree: boolean
  onToggleSpoilerFree: () => void
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
  spoilerFree,
  onToggleSpoilerFree,
  backHref,
}: HeaderProps) {
  const [settingsOpen, setSettingsOpen] = useState(false)

  return (
    <>
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

            <InstallOrNotify locale={locale} />

            {/* Settings */}
            <button
              className="rg-control"
              onClick={() => setSettingsOpen(true)}
              title={t('settings.title', locale)}
              style={{
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
              <Settings style={{ width: 15, height: 15 }} />
            </button>
          </div>
        </div>
      </header>

      <SettingsModal
        open={settingsOpen}
        onClose={() => setSettingsOpen(false)}
        timezone={timezone}
        onTimezoneChange={onTimezoneChange}
        theme={theme}
        onToggleTheme={onToggleTheme}
        locale={locale}
        onToggleLocale={onToggleLocale}
        spoilerFree={spoilerFree}
        onToggleSpoilerFree={onToggleSpoilerFree}
      />
    </>
  )
}
