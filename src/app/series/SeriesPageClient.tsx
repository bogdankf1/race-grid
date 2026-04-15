'use client'

import { useState, useMemo, useEffect } from 'react'
import Link from 'next/link'
import { Calendar, Search } from 'lucide-react'
import { useLocalStorage } from '@/hooks/useLocalStorage'
import { getDefaultTimezone } from '@/lib/timezone'
import { getDefaultLocale, t, type Locale } from '@/lib/i18n'
import { applyTheme, getDefaultTheme, type Theme } from '@/lib/theme'
import { getSeriesForYear, AVAILABLE_YEARS, SERIES_META, SERIES_GROUPS } from '@/data/series-registry'
import type { SeriesConfig, SessionType } from '@/lib/types'
import { SeriesLogo } from '@/components/SeriesLogo'

const ALL_SESSION_TYPES: SessionType[] = [
  'race', 'qualifying', 'sprint', 'sprint_qualifying', 'hyperpole',
  'practice', 'warmup', 'stage', 'shakedown', 'endurance',
]
import { SeriesFilterDropdown } from '@/components/SeriesFilterDropdown'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

function getSeriesProgress(series: SeriesConfig): { completed: number; total: number } {
  const now = Date.now()
  const total = Math.max(series.events.length, ...series.events.map(e => e.round ?? 0))
  const completed = series.events.filter(event => {
    const lastSession = event.sessions[event.sessions.length - 1]
    if (!lastSession) return false
    const endMs = new Date(lastSession.startUtc).getTime() + (lastSession.durationMinutes || 120) * 60000
    return now >= endMs
  }).length
  return { completed, total }
}

function getNextEvent(series: SeriesConfig): { name: string; date: string } | null {
  const now = Date.now()
  for (const event of series.events) {
    const firstSession = event.sessions[0]
    if (!firstSession) continue
    if (new Date(firstSession.startUtc).getTime() > now) {
      return { name: event.name, date: firstSession.startUtc.slice(0, 10) }
    }
  }
  return null
}

export function SeriesPageClient() {
  const [timezone, setTimezone] = useLocalStorage<string>('race-grid:timezone', getDefaultTimezone())
  const [theme, setTheme] = useLocalStorage<Theme>('race-grid:theme', getDefaultTheme())
  const [locale, setLocale] = useLocalStorage<Locale>('race-grid:locale', getDefaultLocale())
  const [spoilerFree, setSpoilerFree] = useLocalStorage<boolean>('race-grid:spoiler-free', false)
  const [visibleSessionTypes, setVisibleSessionTypes] = useLocalStorage<SessionType[]>('race-grid:session-types', ALL_SESSION_TYPES)
  const [selectedSeries, setSelectedSeries] = useLocalStorage<string[]>('race-grid:series', SERIES_META.map(s => s.id))
  const [year, setYear] = useLocalStorage<number>('race-grid:series-year', AVAILABLE_YEARS[0])
  const [filterSeriesIds, setFilterSeriesIds] = useLocalStorage<string[]>('race-grid:series-filter', SERIES_META.map(s => s.id))
  const [query, setQuery] = useState('')

  useEffect(() => { applyTheme(theme) }, [theme])

  const groupedSeries = useMemo(() => {
    const all = getSeriesForYear(year)
    const seriesSet = new Set(filterSeriesIds)
    let filtered = all.filter(s => seriesSet.has(s.id))
    if (query.trim()) {
      const q = query.toLowerCase()
      filtered = filtered.filter(s =>
        s.name.toLowerCase().includes(q) || s.shortName.toLowerCase().includes(q)
      )
    }
    const byId = new Map(filtered.map(s => [s.id, s]))
    return SERIES_GROUPS
      .map(group => ({
        labelKey: group.labelKey,
        series: group.ids.map(id => byId.get(id)).filter((s): s is SeriesConfig => !!s),
      }))
      .filter(g => g.series.length > 0)
  }, [year, filterSeriesIds, query])

  const toggleSeries = (id: string) => {
    const updated = selectedSeries.includes(id) ? selectedSeries.filter(s => s !== id) : [...selectedSeries, id]
    setSelectedSeries(updated)
  }

  const toggleSessionType = (type: SessionType) => {
    const updated = visibleSessionTypes.includes(type)
      ? visibleSessionTypes.filter(t => t !== type)
      : [...visibleSessionTypes, type]
    if (updated.length > 0) setVisibleSessionTypes(updated)
  }

  return (
    <div style={{ minHeight: '100vh', background: 'var(--rg-bg)', color: 'var(--rg-text)' }}>
      <Header
        selectedSeriesIds={selectedSeries} onToggleSeries={toggleSeries} onSetSeries={setSelectedSeries}
        timezone={timezone} onTimezoneChange={setTimezone}
        theme={theme} onToggleTheme={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        locale={locale} onToggleLocale={() => setLocale(locale === 'en' ? 'uk' : 'en')}
        spoilerFree={spoilerFree} onToggleSpoilerFree={() => setSpoilerFree(!spoilerFree)}
        visibleSessionTypes={visibleSessionTypes} onToggleSessionType={toggleSessionType}
        onSetSessionTypes={setVisibleSessionTypes}
        showSeriesFilter={false}
      />

      <div className="rg-calendar-wrap">
        {/* Search + series filter */}
        <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: 16, flexWrap: 'wrap' }}>
          <div
            className="rg-control"
            style={{
              display: 'flex', alignItems: 'center', gap: 8, padding: '0 12px',
              borderRadius: 10, background: 'var(--rg-btn-bg)', border: '1px solid var(--rg-border)',
              flex: 1, minWidth: 200, maxWidth: 480,
            }}
          >
            <Search style={{ width: 15, height: 15, color: 'var(--rg-text3)', flexShrink: 0 }} />
            <input
              type="text"
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder={t('search.series', locale)}
              style={{
                flex: 1, background: 'transparent', border: 'none', outline: 'none',
                color: 'var(--rg-text)', fontSize: 13, minWidth: 0,
              }}
            />
          </div>
          <SeriesFilterDropdown
            selectedIds={filterSeriesIds}
            onToggle={(id) => {
              const updated = filterSeriesIds.includes(id)
                ? filterSeriesIds.filter(s => s !== id)
                : [...filterSeriesIds, id]
              setFilterSeriesIds(updated)
            }}
            onSetAll={setFilterSeriesIds}
            locale={locale}
            showProgress={false}
          />
        </div>

        {/* Year selector */}
        <div style={{ display: 'flex', gap: 6, marginBottom: 24 }}>
          {AVAILABLE_YEARS.map(y => (
            <button
              key={y}
              onClick={() => setYear(y)}
              style={{
                padding: '6px 16px',
                borderRadius: 8,
                fontSize: 14,
                fontWeight: 600,
                border: '1px solid var(--rg-border)',
                background: year === y ? 'var(--rg-link)' : 'transparent',
                color: year === y ? '#fff' : 'var(--rg-text2)',
                cursor: 'pointer',
                transition: 'all 0.15s',
              }}
            >
              {y}
            </button>
          ))}
        </div>

        {/* Series list grouped */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          {groupedSeries.map(group => (
            <div key={group.labelKey}>
              <div style={{
                fontSize: 12,
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                color: 'var(--rg-text3)',
                marginBottom: 10,
                paddingLeft: 2,
              }}>
                {t(group.labelKey, locale)}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {group.series.map(series => (
                  <SeriesCard key={series.id} series={series} locale={locale} />
                ))}
              </div>
            </div>
          ))}
          {groupedSeries.length === 0 && (
            <p style={{ color: 'var(--rg-text3)', textAlign: 'center', padding: '32px 0' }}>
              {t('search.noResults', locale)}
            </p>
          )}
        </div>
      </div>

      <Footer locale={locale} />
    </div>
  )
}

function SeriesCard({ series }: { series: SeriesConfig; locale: Locale }) {
  const { completed, total } = getSeriesProgress(series)
  const pct = total > 0 ? (completed / total) * 100 : 0
  const next = getNextEvent(series)

  return (
    <Link
      href={`/series/${series.id}`}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 16,
        padding: '16px 18px',
        borderRadius: 12,
        background: 'var(--rg-surface)',
        border: '1px solid var(--rg-card-border)',
        borderLeft: `4px solid ${series.color}`,
        textDecoration: 'none',
        color: 'inherit',
        transition: 'border-color 0.15s',
      }}
    >
      {/* Logo */}
      <div style={{ width: 56, height: 36, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
        <SeriesLogo seriesId={series.id} height={28} />
      </div>

      {/* Info */}
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontWeight: 600, fontSize: 15, color: 'var(--rg-text)', marginBottom: 4 }}>
          {series.name}
        </div>

        {/* Progress bar */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
          <div style={{ flex: 1, height: 3, borderRadius: 2, background: 'var(--rg-border)' }}>
            <div style={{ height: '100%', borderRadius: 2, background: series.color, width: `${pct}%`, transition: 'width 0.3s' }} />
          </div>
          <span style={{ fontSize: 11, color: 'var(--rg-text3)', fontWeight: 500, whiteSpace: 'nowrap' }}>
            {completed}/{total}
          </span>
        </div>

        {/* Next event */}
        {next ? (
          <div style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: 12, color: 'var(--rg-text3)' }}>
            <Calendar style={{ width: 11, height: 11 }} />
            <span>{next.name}</span>
            <span style={{ marginLeft: 'auto', whiteSpace: 'nowrap' }}>
              {new Date(next.date + 'T00:00:00').toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
            </span>
          </div>
        ) : (
          <div style={{ fontSize: 12, color: 'var(--rg-text3)' }}>
            Season complete
          </div>
        )}
      </div>
    </Link>
  )
}
