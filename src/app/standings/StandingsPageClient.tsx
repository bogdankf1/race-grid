'use client'

import { useState, useMemo, useEffect } from 'react'
import Link from 'next/link'
import { Search, Trophy, Users } from 'lucide-react'
import { useLocalStorage } from '@/hooks/useLocalStorage'
import { getDefaultTimezone } from '@/lib/timezone'
import { getDefaultLocale, t, type Locale } from '@/lib/i18n'
import { applyTheme, getDefaultTheme, type Theme } from '@/lib/theme'
import { AVAILABLE_YEARS, SERIES_META } from '@/data/series-registry'
import { getStandings, hasStandings } from '@/data/standings'
import { getDriver } from '@/data/drivers'
import { getTeam } from '@/data/teams'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import type { DriverStandingEntry, TeamStandingEntry } from '@/data/standings/types'

function countryFlag(countryCode: string): string {
  if (!countryCode) return ''
  return countryCode.toUpperCase().split('').map(c => String.fromCodePoint(0x1f1e6 + c.charCodeAt(0) - 65)).join('')
}

const POSITION_STYLE: Record<number, string> = { 1: '#FFD700', 2: '#C0C0C0', 3: '#CD7F32' }

export function StandingsPageClient() {
  const [timezone, setTimezone] = useLocalStorage<string>('race-grid:timezone', getDefaultTimezone())
  const [theme, setTheme] = useLocalStorage<Theme>('race-grid:theme', getDefaultTheme())
  const [locale, setLocale] = useLocalStorage<Locale>('race-grid:locale', getDefaultLocale())
  const [spoilerFree, setSpoilerFree] = useLocalStorage<boolean>('race-grid:spoiler-free', false)
  const [selectedSeries, setSelectedSeries] = useLocalStorage<string[]>('race-grid:series', SERIES_META.map(s => s.id))
  const [seriesId, setSeriesId] = useLocalStorage<string>('race-grid:standings-series', 'f1')
  const [year, setYear] = useLocalStorage<number>('race-grid:standings-year', 2025)
  const [query, setQuery] = useState('')
  const [tab, setTab] = useState<'drivers' | 'constructors'>('drivers')

  useEffect(() => { applyTheme(theme) }, [theme])

  const standings = useMemo(() => getStandings(seriesId, year), [seriesId, year])
  const seriesMeta = SERIES_META.find(s => s.id === seriesId)

  // Reset to drivers tab when switching to a series without constructors
  useEffect(() => {
    if (standings && standings.constructors.length === 0) setTab('drivers')
  }, [standings])

  // Series that have standings data
  const availableSeries = useMemo(() => {
    const result: { id: string; years: number[] }[] = []
    for (const meta of SERIES_META) {
      const years = AVAILABLE_YEARS.filter(y => hasStandings(meta.id, y))
      if (years.length > 0) result.push({ id: meta.id, years })
    }
    return result
  }, [])

  const filteredDrivers = useMemo(() => {
    if (!standings) return []
    if (!query.trim()) return standings.drivers
    const q = query.toLowerCase()
    return standings.drivers.filter(entry => {
      const driver = getDriver(entry.driverId)
      const team = getTeam(entry.teamId)
      return driver?.name.toLowerCase().includes(q) || team?.name.toLowerCase().includes(q)
    })
  }, [standings, query])

  const filteredConstructors = useMemo(() => {
    if (!standings) return []
    if (!query.trim()) return standings.constructors
    const q = query.toLowerCase()
    return standings.constructors.filter(entry => {
      const team = getTeam(entry.teamId)
      return team?.name.toLowerCase().includes(q)
    })
  }, [standings, query])

  const toggleSeries = (id: string) => {
    const updated = selectedSeries.includes(id) ? selectedSeries.filter(s => s !== id) : [...selectedSeries, id]
    setSelectedSeries(updated)
  }

  return (
    <div style={{ minHeight: '100vh', background: 'var(--rg-bg)', color: 'var(--rg-text)' }}>
      <Header
        selectedSeriesIds={selectedSeries} onToggleSeries={toggleSeries} onSetSeries={setSelectedSeries}
        timezone={timezone} onTimezoneChange={setTimezone}
        theme={theme} onToggleTheme={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        locale={locale} onToggleLocale={() => setLocale(locale === 'en' ? 'uk' : 'en')}
        spoilerFree={spoilerFree} onToggleSpoilerFree={() => setSpoilerFree(!spoilerFree)}
        showSeriesFilter={false}
      />

      <div className="rg-calendar-wrap">
        {/* Search */}
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
              placeholder={t('search.standings', locale)}
              style={{
                flex: 1, background: 'transparent', border: 'none', outline: 'none',
                color: 'var(--rg-text)', fontSize: 13, minWidth: 0,
              }}
            />
          </div>
        </div>

        {/* Series selector chips */}
        <div style={{ display: 'flex', gap: 6, marginBottom: 16, flexWrap: 'wrap' }}>
          {availableSeries.map(({ id }) => {
            const meta = SERIES_META.find(m => m.id === id)
            if (!meta) return null
            const active = seriesId === id
            return (
              <button
                key={id}
                onClick={() => setSeriesId(id)}
                style={{
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                  padding: '5px 12px', borderRadius: 8, fontSize: 12, fontWeight: 700, letterSpacing: 0.5,
                  border: active ? 'none' : `1.5px solid ${meta.color}`,
                  backgroundColor: active ? meta.color : 'transparent',
                  color: active ? meta.textColor : meta.color,
                  cursor: 'pointer', transition: 'all 0.15s', lineHeight: 1,
                }}
              >
                {meta.shortName}
              </button>
            )
          })}
          {availableSeries.length === 0 && (
            <p style={{ color: 'var(--rg-text3)', fontSize: 13 }}>No standings data available yet.</p>
          )}
        </div>

        {/* Year selector */}
        <div style={{ display: 'flex', gap: 6, marginBottom: 24 }}>
          {AVAILABLE_YEARS.map(y => (
            <button
              key={y}
              onClick={() => setYear(y)}
              style={{
                padding: '6px 16px', borderRadius: 8, fontSize: 14, fontWeight: 600,
                border: '1px solid var(--rg-border)',
                background: year === y ? 'var(--rg-link)' : 'transparent',
                color: year === y ? '#fff' : 'var(--rg-text2)',
                cursor: 'pointer', transition: 'all 0.15s',
                opacity: hasStandings(seriesId, y) ? 1 : 0.4,
              }}
              disabled={!hasStandings(seriesId, y)}
            >
              {y}
            </button>
          ))}
        </div>

        {standings ? (
          <>
            {/* Tabs: Drivers / Constructors — hide tab bar if no constructors */}
            {standings.constructors.length > 0 ? (
              <div style={{ display: 'flex', gap: 2, background: 'var(--rg-btn-bg)', borderRadius: 10, padding: 2, marginBottom: 20, width: 'fit-content' }}>
                <button
                  onClick={() => setTab('drivers')}
                  style={{
                    padding: '8px 20px', borderRadius: 8, fontSize: 13, fontWeight: 600,
                    background: tab === 'drivers' ? 'var(--rg-elevated)' : 'transparent',
                    border: tab === 'drivers' ? '1px solid var(--rg-border)' : '1px solid transparent',
                    color: tab === 'drivers' ? 'var(--rg-text)' : 'var(--rg-text3)',
                    cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6,
                  }}
                >
                  <Trophy style={{ width: 13, height: 13 }} />
                  Drivers
                </button>
                <button
                  onClick={() => setTab('constructors')}
                  style={{
                    padding: '8px 20px', borderRadius: 8, fontSize: 13, fontWeight: 600,
                    background: tab === 'constructors' ? 'var(--rg-elevated)' : 'transparent',
                    border: tab === 'constructors' ? '1px solid var(--rg-border)' : '1px solid transparent',
                    color: tab === 'constructors' ? 'var(--rg-text)' : 'var(--rg-text3)',
                    cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6,
                  }}
                >
                  <Users style={{ width: 13, height: 13 }} />
                  Constructors
                </button>
              </div>
            ) : null}

            {/* Standings table */}
            {tab === 'drivers' ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                {filteredDrivers.map(entry => (
                  <DriverRow key={entry.driverId} entry={entry} seriesColor={seriesMeta?.color} />
                ))}
                {filteredDrivers.length === 0 && (
                  <p style={{ color: 'var(--rg-text3)', textAlign: 'center', padding: '16px 0' }}>
                    {t('search.noResults', locale)}
                  </p>
                )}
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                {filteredConstructors.map(entry => (
                  <ConstructorRow key={entry.teamId} entry={entry} seriesColor={seriesMeta?.color} />
                ))}
                {filteredConstructors.length === 0 && (
                  <p style={{ color: 'var(--rg-text3)', textAlign: 'center', padding: '16px 0' }}>
                    {t('search.noResults', locale)}
                  </p>
                )}
              </div>
            )}
          </>
        ) : (
          <p style={{ color: 'var(--rg-text3)', textAlign: 'center', padding: '32px 0' }}>
            No standings data available for this series and year.
          </p>
        )}
      </div>

      <Footer locale={locale} />
    </div>
  )
}

function DriverRow({ entry, seriesColor }: { entry: DriverStandingEntry; seriesColor?: string }) {
  const driver = getDriver(entry.driverId)
  const team = getTeam(entry.teamId)
  const posColor = POSITION_STYLE[entry.position]

  return (
    <div
      style={{
        display: 'flex', alignItems: 'center', gap: 12, padding: '10px 16px',
        borderRadius: 10, background: 'var(--rg-surface)', border: '1px solid var(--rg-card-border)',
        borderLeft: posColor ? `3px solid ${posColor}` : undefined,
      }}
    >
      {/* Position */}
      <span style={{ width: 28, fontSize: 14, fontWeight: 700, color: posColor ?? 'var(--rg-text3)', textAlign: 'center', flexShrink: 0 }}>
        {entry.position}
      </span>

      {/* Flag + name */}
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          {driver?.nationality && <span style={{ fontSize: 14 }}>{countryFlag(driver.nationality)}</span>}
          <Link href={`/drivers/${entry.driverId}`} style={{ fontSize: 14, fontWeight: 600, color: 'var(--rg-text)', textDecoration: 'none' }}>
            {driver?.name ?? entry.driverId}
          </Link>
        </div>
        <Link href={`/teams/${entry.teamId}`} style={{ display: 'block', fontSize: 12, color: 'var(--rg-text3)', marginTop: 2, textDecoration: 'none' }}>
          {team?.name ?? entry.teamId}
        </Link>
      </div>

      {/* Wins */}
      {entry.wins > 0 && (
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 3, fontSize: 12, color: seriesColor ?? 'var(--rg-link)', fontWeight: 600, flexShrink: 0 }}>
          <Trophy style={{ width: 11, height: 11 }} /> {entry.wins}
        </span>
      )}

      {/* Points */}
      <span style={{ fontSize: 15, fontWeight: 700, color: 'var(--rg-text)', minWidth: 40, textAlign: 'right', flexShrink: 0 }}>
        {entry.points}
      </span>
    </div>
  )
}

function ConstructorRow({ entry, seriesColor }: { entry: TeamStandingEntry; seriesColor?: string }) {
  const team = getTeam(entry.teamId)
  const posColor = POSITION_STYLE[entry.position]

  return (
    <div
      style={{
        display: 'flex', alignItems: 'center', gap: 12, padding: '10px 16px',
        borderRadius: 10, background: 'var(--rg-surface)', border: '1px solid var(--rg-card-border)',
        borderLeft: posColor ? `3px solid ${posColor}` : undefined,
      }}
    >
      {/* Position */}
      <span style={{ width: 28, fontSize: 14, fontWeight: 700, color: posColor ?? 'var(--rg-text3)', textAlign: 'center', flexShrink: 0 }}>
        {entry.position}
      </span>

      {/* Team name */}
      <div style={{ flex: 1, minWidth: 0 }}>
        <Link href={`/teams/${entry.teamId}`} style={{ fontSize: 14, fontWeight: 600, color: 'var(--rg-text)', textDecoration: 'none' }}>
          {team?.name ?? entry.teamId}
        </Link>
      </div>

      {/* Wins */}
      {entry.wins > 0 && (
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 3, fontSize: 12, color: seriesColor ?? 'var(--rg-link)', fontWeight: 600, flexShrink: 0 }}>
          <Trophy style={{ width: 11, height: 11 }} /> {entry.wins}
        </span>
      )}

      {/* Points */}
      <span style={{ fontSize: 15, fontWeight: 700, color: 'var(--rg-text)', minWidth: 40, textAlign: 'right', flexShrink: 0 }}>
        {entry.points}
      </span>
    </div>
  )
}
