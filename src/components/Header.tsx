'use client'

import Link from 'next/link'
import { useState, useRef, useEffect } from 'react'
import { Settings } from 'lucide-react'
import { SeriesFilterDropdown } from './SeriesFilterDropdown'
import { SettingsModal } from './SettingsModal'
import { DesktopNav, BottomNav } from './Navigation'
import { t, type Locale } from '@/lib/i18n'
import type { Theme } from '@/lib/theme'
import type { SessionType } from '@/lib/types'

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
  visibleSessionTypes: SessionType[]
  onToggleSessionType: (type: SessionType) => void
  onSetSessionTypes: (types: SessionType[]) => void
  showSeriesFilter?: boolean
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
  visibleSessionTypes,
  onToggleSessionType,
  onSetSessionTypes,
  showSeriesFilter = true,
}: HeaderProps) {
  const [settingsOpen, setSettingsOpen] = useState(false)
  const headerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = headerRef.current
    if (!el) return
    const update = () => document.documentElement.style.setProperty('--rg-header-h', `${el.offsetHeight}px`)
    update()
    const ro = new ResizeObserver(update)
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  return (
    <>
      <header
        ref={headerRef}
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
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <Link href="/" style={{ textDecoration: 'none' }}>
              <h1 className="font-display rg-header-title" style={{ margin: 0 }}>{t('app.title', locale)}</h1>
            </Link>
            <DesktopNav locale={locale} />
          </div>
          <div className="rg-header-controls" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            {showSeriesFilter && (
              <SeriesFilterDropdown
                selectedIds={selectedSeriesIds}
                onToggle={onToggleSeries}
                onSetAll={onSetSeries}
                locale={locale}
              />
            )}

            {/* TODO: Notification icon hidden — needs backend push infrastructure to work properly */}
            {/* <InstallOrNotify locale={locale} /> */}

            {/* Settings */}
            <button
              className="rg-control"
              onClick={() => setSettingsOpen(true)}
              title={t('settings.title', locale)}
              aria-label={t('settings.title', locale)}
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

      <BottomNav locale={locale} />

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
        visibleSessionTypes={visibleSessionTypes}
        onToggleSessionType={onToggleSessionType}
        onSetSessionTypes={onSetSessionTypes}
      />
    </>
  )
}
