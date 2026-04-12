'use client'

import { useState, useEffect, useMemo } from 'react'
import Link from 'next/link'
import { Trophy } from 'lucide-react'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { useLocalStorage } from '@/hooks/useLocalStorage'
import { getDefaultLocale, type Locale } from '@/lib/i18n'
import { applyTheme, getDefaultTheme, type Theme } from '@/lib/theme'
import { getDefaultTimezone } from '@/lib/timezone'
import { SERIES_META } from '@/data/series-registry'
import { getDriver } from '@/data/drivers'
import { getTeam } from '@/data/teams'
import type { SessionType } from '@/lib/types'
import { getDriverResults } from '@/data/driver-results'
import { Header } from '@/components/Header'

const ALL_SESSION_TYPES: SessionType[] = [
  'race', 'qualifying', 'sprint', 'sprint_qualifying', 'hyperpole',
  'practice', 'warmup', 'stage', 'shakedown', 'endurance',
]
import { Footer } from '@/components/Footer'

function countryFlag(countryCode: string): string {
  if (!countryCode) return ''
  return countryCode.toUpperCase().split('').map(c => String.fromCodePoint(0x1f1e6 + c.charCodeAt(0) - 65)).join('')
}

function countryName(code: string): string {
  if (!code) return ''
  try {
    return new Intl.DisplayNames(['en'], { type: 'region' }).of(code.toUpperCase()) ?? code
  } catch { return code }
}

export function DriverDetailClient({ driverId }: { driverId: string }) {
  const [timezone, setTimezone] = useLocalStorage<string>('race-grid:timezone', getDefaultTimezone())
  const [theme, setTheme] = useLocalStorage<Theme>('race-grid:theme', getDefaultTheme())
  const [locale, setLocale] = useLocalStorage<Locale>('race-grid:locale', getDefaultLocale())
  const [spoilerFree, setSpoilerFree] = useLocalStorage<boolean>('race-grid:spoiler-free', false)
  const [visibleSessionTypes, setVisibleSessionTypes] = useLocalStorage<SessionType[]>('race-grid:session-types', ALL_SESSION_TYPES)
  const [selectedSeries, setSelectedSeries] = useLocalStorage<string[]>('race-grid:series', SERIES_META.map(s => s.id))

  useEffect(() => { applyTheme(theme) }, [theme])

  const driver = useMemo(() => getDriver(driverId), [driverId])
  const allSeasons = useMemo(() => getDriverResults(driverId), [driverId])

  const years = useMemo(() => [...new Set(allSeasons.map(s => s.year))].sort((a, b) => b - a), [allSeasons])
  const [year, setYear] = useState(() => years[0] ?? 2026)

  const seasons = useMemo(() => allSeasons.filter(s => s.year === year), [allSeasons, year])

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

  const headerProps = {
    selectedSeriesIds: selectedSeries, onToggleSeries: toggleSeries, onSetSeries: setSelectedSeries,
    timezone, onTimezoneChange: setTimezone,
    theme, onToggleTheme: () => setTheme(theme === 'dark' ? 'light' : 'dark'),
    locale, onToggleLocale: () => setLocale(locale === 'en' ? 'uk' : 'en'),
    spoilerFree, onToggleSpoilerFree: () => setSpoilerFree(!spoilerFree),
    visibleSessionTypes, onToggleSessionType: toggleSessionType,
    onSetSessionTypes: setVisibleSessionTypes,
    showSeriesFilter: false as const,
  }

  if (!driver) {
    return (
      <div style={{ minHeight: '100vh', background: 'var(--rg-bg)', color: 'var(--rg-text)' }}>
        <Header {...headerProps} />
        <div className="rg-calendar-wrap" style={{ textAlign: 'center', color: 'var(--rg-text3)' }}>Driver not found.</div>
      </div>
    )
  }

  return (
    <div style={{ minHeight: '100vh', background: 'var(--rg-bg)', color: 'var(--rg-text)' }}>
      <Header {...headerProps} />

      <div className="rg-calendar-wrap">
        <Breadcrumbs items={[
          { label: 'Series', href: '/series' },
          { label: driver.name },
        ]} />

        {/* Driver header */}
        <div style={{ marginBottom: 24 }}>
          <h1 className="font-display" style={{ fontSize: 32, letterSpacing: 1, color: 'var(--rg-text)', margin: '0 0 6px' }}>
            {driver.name}
          </h1>
          {driver.nationality && (
            <p style={{ fontSize: 16, color: 'var(--rg-text2)', margin: 0 }}>
              {countryFlag(driver.nationality)} {countryName(driver.nationality)}
            </p>
          )}
        </div>

        {/* Series badges */}
        {allSeasons.length > 0 && (
          <div style={{ display: 'flex', gap: 6, marginBottom: 16, flexWrap: 'wrap' }}>
            {[...new Set(allSeasons.map(s => s.seriesId))].map(sid => {
              const meta = SERIES_META.find(m => m.id === sid)
              if (!meta) return null
              return (
                <Link key={sid} href={`/series/${sid}`} style={{
                  display: 'inline-flex', alignItems: 'center', padding: '5px 12px',
                  borderRadius: 8, fontSize: 12, fontWeight: 700, letterSpacing: 0.5,
                  backgroundColor: meta.color, color: meta.textColor,
                  textDecoration: 'none', lineHeight: 1,
                }}>
                  {meta.shortName}
                </Link>
              )
            })}
          </div>
        )}

        {/* Year selector */}
        {years.length > 0 && (
          <div style={{ display: 'flex', gap: 6, marginBottom: 24 }}>
            {years.map(y => (
              <button
                key={y}
                onClick={() => setYear(y)}
                style={{
                  padding: '6px 16px', borderRadius: 8, fontSize: 14, fontWeight: 600,
                  border: '1px solid var(--rg-border)',
                  background: year === y ? 'var(--rg-link)' : 'transparent',
                  color: year === y ? '#fff' : 'var(--rg-text2)',
                  cursor: 'pointer', transition: 'all 0.15s',
                }}
              >
                {y}
              </button>
            ))}
          </div>
        )}

        {/* Season-by-season */}
        {seasons.map(season => {
          const team = getTeam(season.teamId)
          return (
            <div key={`${season.seriesId}-${season.year}`} style={{ marginBottom: 28 }}>
              {/* Season header */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                <span style={{
                  display: 'inline-flex', alignItems: 'center', padding: '3px 8px',
                  borderRadius: 6, fontSize: 10, fontWeight: 700, letterSpacing: 0.5,
                  backgroundColor: season.seriesColor, color: season.seriesTextColor, lineHeight: 1,
                }}>
                  {season.seriesShortName}
                </span>
                <span style={{ fontSize: 15, fontWeight: 700, color: 'var(--rg-text)' }}>{season.year}</span>
                {team && (
                  <Link href={`/teams/${season.teamId}`} style={{ fontSize: 13, color: 'var(--rg-text3)', textDecoration: 'none' }}>
                    {team.name}
                  </Link>
                )}
                <div style={{ display: 'flex', gap: 12, marginLeft: 'auto', fontSize: 12, color: 'var(--rg-text3)' }}>
                  {season.wins > 0 && <span style={{ display: 'flex', alignItems: 'center', gap: 3 }}><Trophy style={{ width: 11, height: 11 }} /> {season.wins} wins</span>}
                  {season.podiums > 0 && <span>{season.podiums} podiums</span>}
                </div>
              </div>

              {/* Results list */}
              {season.results.length > 0 ? (
                <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                  {season.results.map((r, idx) => (
                    <Link
                      key={`${r.eventId}-${r.sessionType}-${idx}`}
                      href={`/day/${r.raceDate}?event=${r.eventId}`}
                      style={{
                        display: 'flex', alignItems: 'center', gap: 10, padding: '8px 14px',
                        borderRadius: 8, background: 'var(--rg-surface)', border: '1px solid var(--rg-card-border)',
                        textDecoration: 'none', color: 'inherit',
                        borderLeft: r.position === 1 ? '3px solid #FFD700' : r.position === 2 ? '3px solid #C0C0C0' : r.position === 3 ? '3px solid #CD7F32' : undefined,
                      }}
                    >
                      <span style={{ width: 24, fontSize: 13, fontWeight: 700, color: r.position === 1 ? '#FFD700' : r.position === 2 ? '#C0C0C0' : r.position === 3 ? '#CD7F32' : 'var(--rg-text3)', textAlign: 'center', flexShrink: 0 }}>
                        P{r.position}
                      </span>
                      <span style={{ fontSize: 13, fontWeight: 500, color: 'var(--rg-text)', flex: 1 }}>{r.eventName}</span>
                      <span style={{ fontSize: 12, color: 'var(--rg-text3)', flexShrink: 0 }}>
                        {new Date(r.raceDate + 'T00:00:00').toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                      </span>
                    </Link>
                  ))}
                </div>
              ) : (
                <p style={{ fontSize: 13, color: 'var(--rg-text3)', padding: '8px 0' }}>No top 3 results recorded.</p>
              )}
            </div>
          )
        })}

        {seasons.length === 0 && allSeasons.length > 0 && (
          <p style={{ color: 'var(--rg-text3)', textAlign: 'center', padding: '32px 0' }}>No data for {year}.</p>
        )}
        {allSeasons.length === 0 && (
          <p style={{ color: 'var(--rg-text3)', textAlign: 'center', padding: '32px 0' }}>No season data available for this driver.</p>
        )}
      </div>

      <Footer locale={locale} />
    </div>
  )
}
