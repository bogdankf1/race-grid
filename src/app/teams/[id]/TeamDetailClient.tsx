'use client'

import { useState, useEffect, useMemo } from 'react'
import Link from 'next/link'
import { Trophy, Users } from 'lucide-react'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { useLocalStorage } from '@/hooks/useLocalStorage'
import { getDefaultLocale, type Locale } from '@/lib/i18n'
import { applyTheme, getDefaultTheme, type Theme } from '@/lib/theme'
import { getDefaultTimezone } from '@/lib/timezone'
import { AVAILABLE_YEARS, SERIES_META } from '@/data/series-registry'
import { getTeam } from '@/data/teams'
import { getDriver } from '@/data/drivers'
import { getTeamResults } from '@/data/driver-results'
import { getStandings } from '@/data/standings'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

function countryFlag(countryCode: string): string {
  if (!countryCode) return ''
  return countryCode.toUpperCase().split('').map(c => String.fromCodePoint(0x1f1e6 + c.charCodeAt(0) - 65)).join('')
}

function countryName(code: string): string {
  if (!code) return ''
  try { return new Intl.DisplayNames(['en'], { type: 'region' }).of(code.toUpperCase()) ?? code } catch { return code }
}

export function TeamDetailClient({ teamId }: { teamId: string }) {
  const [timezone, setTimezone] = useLocalStorage<string>('race-grid:timezone', getDefaultTimezone())
  const [theme, setTheme] = useLocalStorage<Theme>('race-grid:theme', getDefaultTheme())
  const [locale, setLocale] = useLocalStorage<Locale>('race-grid:locale', getDefaultLocale())
  const [spoilerFree, setSpoilerFree] = useLocalStorage<boolean>('race-grid:spoiler-free', false)
  const [selectedSeries, setSelectedSeries] = useLocalStorage<string[]>('race-grid:series', SERIES_META.map(s => s.id))
  const [tab, setTab] = useState<'drivers' | 'results'>('drivers')

  useEffect(() => { applyTheme(theme) }, [theme])

  const team = useMemo(() => getTeam(teamId), [teamId])
  const allSeasons = useMemo(() => getTeamResults(teamId), [teamId])

  // Available years for this team
  const years = useMemo(() => [...new Set(allSeasons.map(s => s.year))].sort((a, b) => b - a), [allSeasons])
  const [year, setYear] = useState(() => years[0] ?? AVAILABLE_YEARS[0])

  // Seasons for selected year
  const seasons = useMemo(() => allSeasons.filter(s => s.year === year), [allSeasons, year])
  const totalWins = seasons.reduce((sum, s) => sum + s.wins, 0)
  const allDrivers = useMemo(() => {
    const seen = new Set<string>()
    // First add drivers from standings (full grid)
    for (const season of seasons) {
      const standings = getStandings(season.seriesId, year)
      if (standings) {
        for (const d of standings.drivers) {
          if (d.teamId === teamId && !seen.has(d.driverId)) {
            seen.add(d.driverId)
          }
        }
      }
    }
    // Then add from entries (podium-based)
    for (const id of seasons.flatMap(s => s.driverIds)) {
      seen.add(id)
    }
    return [...seen]
  }, [seasons, year, teamId])
  const allResults = useMemo(() => seasons.flatMap(s => s.results), [seasons])

  const toggleSeries = (id: string) => {
    const updated = selectedSeries.includes(id) ? selectedSeries.filter(s => s !== id) : [...selectedSeries, id]
    setSelectedSeries(updated)
  }

  const headerProps = {
    selectedSeriesIds: selectedSeries, onToggleSeries: toggleSeries, onSetSeries: setSelectedSeries,
    timezone, onTimezoneChange: setTimezone,
    theme, onToggleTheme: () => setTheme(theme === 'dark' ? 'light' : 'dark'),
    locale, onToggleLocale: () => setLocale(locale === 'en' ? 'uk' : 'en'),
    spoilerFree, onToggleSpoilerFree: () => setSpoilerFree(!spoilerFree),
    showSeriesFilter: false as const,
  }

  if (!team) {
    return (
      <div style={{ minHeight: '100vh', background: 'var(--rg-bg)', color: 'var(--rg-text)' }}>
        <Header {...headerProps} />
        <div className="rg-calendar-wrap" style={{ textAlign: 'center', color: 'var(--rg-text3)' }}>Team not found.</div>
      </div>
    )
  }

  return (
    <div style={{ minHeight: '100vh', background: 'var(--rg-bg)', color: 'var(--rg-text)' }}>
      <Header {...headerProps} />

      <div className="rg-calendar-wrap">
        <Breadcrumbs items={[
          { label: 'Series', href: '/series' },
          { label: team.name },
        ]} />

        {/* Team header */}
        <div style={{ marginBottom: 16 }}>
          <h1 className="font-display" style={{ fontSize: 32, letterSpacing: 1, color: 'var(--rg-text)', margin: '0 0 6px' }}>
            {team.name}
          </h1>
          {team.country && (
            <p style={{ fontSize: 16, color: 'var(--rg-text2)', margin: 0 }}>
              {countryFlag(team.country)} {countryName(team.country)}
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

        {/* Wins summary */}
        {totalWins > 0 && (
          <div style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 13, color: 'var(--rg-text3)', marginBottom: 16 }}>
            <Trophy style={{ width: 13, height: 13 }} /> {totalWins} wins in {year}
          </div>
        )}

        {/* Year selector */}
        {years.length > 0 && (
          <div style={{ display: 'flex', gap: 6, marginBottom: 20 }}>
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

        {/* Tabs */}
        {seasons.length > 0 && (
          <div style={{ display: 'flex', gap: 2, background: 'var(--rg-btn-bg)', borderRadius: 10, padding: 2, marginBottom: 20, width: 'fit-content' }}>
            <button
              onClick={() => setTab('drivers')}
              style={{
                padding: '8px 16px', borderRadius: 8, fontSize: 13, fontWeight: 600,
                background: tab === 'drivers' ? 'var(--rg-elevated)' : 'transparent',
                border: tab === 'drivers' ? '1px solid var(--rg-border)' : '1px solid transparent',
                color: tab === 'drivers' ? 'var(--rg-text)' : 'var(--rg-text3)',
                cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6,
              }}
            >
              <Users style={{ width: 13, height: 13 }} />
              Drivers
              <span style={{ fontSize: 11, color: 'var(--rg-text3)' }}>({allDrivers.length})</span>
            </button>
            {allResults.length > 0 && (
              <button
                onClick={() => setTab('results')}
                style={{
                  padding: '8px 16px', borderRadius: 8, fontSize: 13, fontWeight: 600,
                  background: tab === 'results' ? 'var(--rg-elevated)' : 'transparent',
                  border: tab === 'results' ? '1px solid var(--rg-border)' : '1px solid transparent',
                  color: tab === 'results' ? 'var(--rg-text)' : 'var(--rg-text3)',
                  cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6,
                }}
              >
                <Trophy style={{ width: 13, height: 13 }} />
                Podiums
                <span style={{ fontSize: 11, color: 'var(--rg-text3)' }}>({allResults.length})</span>
              </button>
            )}
          </div>
        )}

        {/* Drivers tab */}
        {tab === 'drivers' && allDrivers.length > 0 && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            {allDrivers.map(did => {
              const d = getDriver(did)
              if (!d) return null
              return (
                <Link
                  key={did}
                  href={`/drivers/${did}`}
                  style={{
                    display: 'flex', alignItems: 'center', gap: 10, padding: '8px 14px',
                    borderRadius: 8, background: 'var(--rg-surface)', border: '1px solid var(--rg-card-border)',
                    textDecoration: 'none', color: 'inherit',
                  }}
                >
                  {d.nationality && <span style={{ fontSize: 14 }}>{countryFlag(d.nationality)}</span>}
                  <span style={{ fontSize: 14, fontWeight: 500, color: 'var(--rg-text)' }}>{d.name}</span>
                </Link>
              )
            })}
          </div>
        )}

        {/* Results tab */}
        {tab === 'results' && allResults.length > 0 && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            {allResults.map((r, idx) => (
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
                <div style={{ flex: 1, minWidth: 0 }}>
                  <span style={{ fontSize: 13, fontWeight: 500, color: 'var(--rg-text)' }}>{r.eventName}</span>
                  <span style={{ fontSize: 12, color: 'var(--rg-text3)', marginLeft: 6 }}>{r.winnerDrivers}</span>
                </div>
                <span style={{ fontSize: 12, color: 'var(--rg-text3)', flexShrink: 0 }}>
                  {new Date(r.raceDate + 'T00:00:00').toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                </span>
              </Link>
            ))}
          </div>
        )}

        {seasons.length === 0 && (
          <p style={{ color: 'var(--rg-text3)', textAlign: 'center', padding: '32px 0' }}>No data for {year}.</p>
        )}
      </div>

      <Footer locale={locale} />
    </div>
  )
}
