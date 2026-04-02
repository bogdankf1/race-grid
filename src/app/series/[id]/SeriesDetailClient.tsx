'use client'

import { useState, useEffect, useMemo } from 'react'
import Link from 'next/link'
import { Trophy, MapPin, Search, Calendar, Users, Flag } from 'lucide-react'
import { useLocalStorage } from '@/hooks/useLocalStorage'
import { getDefaultTimezone } from '@/lib/timezone'
import { getDefaultLocale, t, type Locale } from '@/lib/i18n'
import { applyTheme, getDefaultTheme, type Theme } from '@/lib/theme'
import { getSeriesForYear, AVAILABLE_YEARS, SERIES_META } from '@/data/series-registry'
import { getCircuit } from '@/data/circuits'
import { getResult } from '@/data/results'
import { getEntries } from '@/data/entries'
import { getStandings } from '@/data/standings'
import { getDriver } from '@/data/drivers'
import { getTeam } from '@/data/teams'
import type { SeriesConfig, RaceEvent } from '@/lib/types'
import { SeriesLogo } from '@/components/SeriesLogo'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

function countryFlag(countryCode: string): string {
  if (!countryCode) return ''
  return countryCode.toUpperCase().split('').map(c => String.fromCodePoint(0x1f1e6 + c.charCodeAt(0) - 65)).join('')
}

export function SeriesDetailClient({ seriesId }: { seriesId: string }) {
  const [timezone, setTimezone] = useLocalStorage<string>('race-grid:timezone', getDefaultTimezone())
  const [theme, setTheme] = useLocalStorage<Theme>('race-grid:theme', getDefaultTheme())
  const [locale, setLocale] = useLocalStorage<Locale>('race-grid:locale', getDefaultLocale())
  const [spoilerFree, setSpoilerFree] = useLocalStorage<boolean>('race-grid:spoiler-free', false)
  const [selectedSeries, setSelectedSeries] = useLocalStorage<string[]>('race-grid:series', SERIES_META.map(s => s.id))
  const [year, setYear] = useLocalStorage<number>('race-grid:series-detail-year', AVAILABLE_YEARS[0])

  useEffect(() => { applyTheme(theme) }, [theme])

  const series = useMemo(() => {
    const all = getSeriesForYear(year)
    return all.find(s => s.id === seriesId) ?? null
  }, [seriesId, year])

  const meta = SERIES_META.find(s => s.id === seriesId)
  const totalRounds = series ? Math.max(series.events.length, ...series.events.map(e => e.round ?? 0)) : 0
  const now = Date.now()
  const completedRounds = series ? series.events.filter(event => {
    const last = event.sessions[event.sessions.length - 1]
    return last && new Date(last.startUtc).getTime() + (last.durationMinutes || 120) * 60000 <= now
  }).length : 0

  const [query, setQuery] = useState('')
  const [tab, setTab] = useState<'calendar' | 'circuits' | 'drivers' | 'teams'>('calendar')

  const entries = useMemo(() => {
    // Prefer standings data (has full grid) over entries (only podium finishers)
    const standings = getStandings(seriesId, year)
    if (standings && standings.drivers.length > 0) {
      const seen = new Set<string>()
      return standings.drivers
        .filter(d => { if (seen.has(d.driverId)) return false; seen.add(d.driverId); return true })
        .map(d => ({ driverId: d.driverId, teamId: d.teamId, carNumber: undefined as number | undefined }))
    }
    return getEntries(seriesId, year)
  }, [seriesId, year])

  // Unique teams for this series+year
  const teams = useMemo(() => {
    const seen = new Set<string>()
    return entries
      .map(e => e.teamId)
      .filter(id => { if (seen.has(id)) return false; seen.add(id); return true })
      .map(id => getTeam(id))
      .filter(Boolean) as NonNullable<ReturnType<typeof getTeam>>[]
  }, [entries])

  // Unique circuits for this series+year
  const circuits = useMemo(() => {
    if (!series) return []
    const seen = new Set<string>()
    return series.events
      .map(e => {
        if (seen.has(e.circuitId)) return null
        seen.add(e.circuitId)
        return getCircuit(e.circuitId)
      })
      .filter(Boolean) as NonNullable<ReturnType<typeof getCircuit>>[]
  }, [series])

  const toggleSeries = (id: string) => {
    const updated = selectedSeries.includes(id) ? selectedSeries.filter(s => s !== id) : [...selectedSeries, id]
    setSelectedSeries(updated)
  }

  if (!meta) {
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
        <div className="rg-calendar-wrap" style={{ textAlign: 'center', color: 'var(--rg-text3)' }}>
          Series not found.
        </div>
      </div>
    )
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
        {/* Series header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 8 }}>
          <div style={{ width: 72, height: 44, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <SeriesLogo seriesId={seriesId} height={36} />
          </div>
          <div>
            <h1 className="font-display" style={{ fontSize: 32, letterSpacing: 1, color: 'var(--rg-text)', margin: 0 }}>
              {meta.name}
            </h1>
          </div>
        </div>

        {/* Progress */}
        {series && (
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16, maxWidth: 300 }}>
            <div style={{ flex: 1, height: 3, borderRadius: 2, background: 'var(--rg-border)' }}>
              <div style={{ height: '100%', borderRadius: 2, background: meta.color, width: `${totalRounds > 0 ? (completedRounds / totalRounds) * 100 : 0}%`, transition: 'width 0.3s' }} />
            </div>
            <span style={{ fontSize: 12, color: 'var(--rg-text3)', fontWeight: 500, whiteSpace: 'nowrap' }}>
              {t('progress.round', locale)} {completedRounds} {t('progress.of', locale)} {totalRounds}
            </span>
          </div>
        )}

        {/* Search */}
        {series && series.events.length > 0 && (
          <div style={{ marginBottom: 16 }}>
            <div
              className="rg-control"
              style={{
                display: 'flex', alignItems: 'center', gap: 8, padding: '0 12px',
                borderRadius: 10, background: 'var(--rg-btn-bg)', border: '1px solid var(--rg-border)',
                maxWidth: 480,
              }}
            >
              <Search style={{ width: 15, height: 15, color: 'var(--rg-text3)', flexShrink: 0 }} />
              <input
                type="text"
                value={query}
                onChange={e => setQuery(e.target.value)}
                placeholder={t('search.placeholder', locale)}
                style={{
                  flex: 1, background: 'transparent', border: 'none', outline: 'none',
                  color: 'var(--rg-text)', fontSize: 13, minWidth: 0,
                }}
              />
            </div>
          </div>
        )}

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
              }}
            >
              {y}
            </button>
          ))}
        </div>

        {/* Tab bar */}
        {series && (
          <div style={{ display: 'flex', gap: 2, background: 'var(--rg-btn-bg)', borderRadius: 10, padding: 2, marginBottom: 20, width: 'fit-content' }}>
            {([
              { key: 'calendar' as const, icon: Calendar, label: t('nav.calendar', locale), count: series.events.length },
              { key: 'circuits' as const, icon: MapPin, label: t('nav.circuits', locale), count: circuits.length },
              { key: 'drivers' as const, icon: Users, label: 'Drivers', count: entries.length },
              { key: 'teams' as const, icon: Flag, label: 'Teams', count: teams.length },
            ] as const).filter(t => t.count > 0).map(item => (
              <button
                key={item.key}
                onClick={() => setTab(item.key)}
                style={{
                  padding: '8px 16px', borderRadius: 8, fontSize: 13, fontWeight: 600,
                  background: tab === item.key ? 'var(--rg-elevated)' : 'transparent',
                  border: tab === item.key ? '1px solid var(--rg-border)' : '1px solid transparent',
                  color: tab === item.key ? 'var(--rg-text)' : 'var(--rg-text3)',
                  cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6,
                }}
              >
                <item.icon style={{ width: 13, height: 13 }} />
                {item.label}
                <span style={{ fontSize: 11, color: 'var(--rg-text3)' }}>({item.count})</span>
              </button>
            ))}
          </div>
        )}

        {/* Calendar tab */}
        {tab === 'calendar' && series && series.events.length > 0 && (() => {
          const q = query.toLowerCase().trim()
          const filteredEvents = q
            ? series.events.filter(event => {
                const circuit = getCircuit(event.circuitId)
                return event.name.toLowerCase().includes(q) ||
                  (circuit?.name.toLowerCase().includes(q)) ||
                  (circuit?.country.toLowerCase().includes(q))
              })
            : series.events
          return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              {filteredEvents.map(event => (
                <EventRow key={event.id} event={event} series={series} spoilerFree={spoilerFree} locale={locale} />
              ))}
              {filteredEvents.length === 0 && (
                <p style={{ color: 'var(--rg-text3)', textAlign: 'center', padding: '16px 0' }}>
                  {t('search.noResults', locale)}
                </p>
              )}
            </div>
          )
        })()}

        {/* Circuits tab */}
        {tab === 'circuits' && circuits.length > 0 && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            {circuits.map(circuit => (
              <Link
                key={circuit.id}
                href={`/circuits/${circuit.id}`}
                style={{
                  display: 'flex', alignItems: 'center', gap: 12, padding: '10px 16px',
                  borderRadius: 10, background: 'var(--rg-surface)', border: '1px solid var(--rg-card-border)',
                  textDecoration: 'none', color: 'inherit',
                }}
              >
                <MapPin style={{ width: 14, height: 14, color: 'var(--rg-text3)', flexShrink: 0 }} />
                <span style={{ fontSize: 14, fontWeight: 500, color: 'var(--rg-text)', flex: 1 }}>{circuit.name}</span>
                {circuit.countryCode && (
                  <span style={{ fontSize: 13, color: 'var(--rg-text3)' }}>{countryFlag(circuit.countryCode)} {circuit.country}</span>
                )}
              </Link>
            ))}
          </div>
        )}

        {/* Drivers tab */}
        {tab === 'drivers' && entries.length > 0 && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            {entries.map(entry => {
              const driver = getDriver(entry.driverId)
              const team = getTeam(entry.teamId)
              if (!driver) return null
              return (
                <div
                  key={entry.driverId}
                  style={{
                    display: 'flex', alignItems: 'center', gap: 12, padding: '8px 16px',
                    borderRadius: 8, background: 'var(--rg-surface)', border: '1px solid var(--rg-card-border)',
                  }}
                >
                  {driver.nationality && (
                    <span style={{ fontSize: 14, flexShrink: 0 }}>{countryFlag(driver.nationality)}</span>
                  )}
                  <Link href={`/drivers/${entry.driverId}`} style={{ fontSize: 14, fontWeight: 500, color: 'var(--rg-text)', flex: 1, textDecoration: 'none' }}>
                    {driver.name}
                  </Link>
                  {entry.carNumber && (
                    <span style={{ fontSize: 12, fontWeight: 700, color: 'var(--rg-text3)', padding: '2px 6px', borderRadius: 4, background: 'var(--rg-elevated)' }}>
                      #{entry.carNumber}
                    </span>
                  )}
                  {team && (
                    <Link href={`/teams/${entry.teamId}`} style={{ fontSize: 13, color: 'var(--rg-text3)', textAlign: 'right', textDecoration: 'none' }}>
                      {team.name}
                    </Link>
                  )}
                </div>
              )
            })}
          </div>
        )}

        {/* Teams tab */}
        {tab === 'teams' && teams.length > 0 && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            {teams.map(team => {
              // Find drivers for this team
              const teamDrivers = entries.filter(e => e.teamId === team.id)
              return (
                <Link
                  key={team.id}
                  href={`/teams/${team.id}`}
                  style={{
                    display: 'flex', alignItems: 'center', gap: 12, padding: '10px 16px',
                    borderRadius: 8, background: 'var(--rg-surface)', border: '1px solid var(--rg-card-border)',
                    textDecoration: 'none', color: 'inherit',
                  }}
                >
                  {team.country && (
                    <span style={{ fontSize: 14, flexShrink: 0 }}>{countryFlag(team.country)}</span>
                  )}
                  <span style={{ fontSize: 14, fontWeight: 500, color: 'var(--rg-text)', flex: 1 }}>
                    {team.name}
                  </span>
                  <span style={{ fontSize: 12, color: 'var(--rg-text3)' }}>
                    {teamDrivers.map(e => getDriver(e.driverId)?.shortName).filter(Boolean).join(', ')}
                  </span>
                </Link>
              )
            })}
          </div>
        )}

        {/* No data for this year */}
        {!series && (
          <p style={{ color: 'var(--rg-text3)', textAlign: 'center', padding: '32px 0' }}>
            No data available for {meta.name} in {year}.
          </p>
        )}
      </div>

      <Footer locale={locale} />
    </div>
  )
}

function EventRow({ event, series, spoilerFree, locale }: { event: RaceEvent; series: SeriesConfig; spoilerFree: boolean; locale: Locale }) {
  const circuit = getCircuit(event.circuitId)
  const now = Date.now()
  const lastSession = event.sessions[event.sessions.length - 1]
  const isPast = lastSession ? new Date(lastSession.startUtc).getTime() + (lastSession.durationMinutes || 120) * 60000 <= now : false
  const isNext = !isPast && event.sessions[0] && new Date(event.sessions[0].startUtc).getTime() > now

  // Find race winner
  let winnerDisplay: string | undefined
  if (isPast && !spoilerFree) {
    for (const type of ['race', 'endurance', 'stage'] as const) {
      const result = getResult(event.id, type)
      if (result) {
        winnerDisplay = `${result.overall.drivers.join(', ')} (${result.overall.team})`
        break
      }
    }
  }

  const totalRounds = Math.max(series.events.length, ...series.events.map(e => e.round ?? 0))
  const raceDate = lastSession ? lastSession.startUtc.slice(0, 10) : ''

  return (
    <Link
      href={`/day/${raceDate}?event=${event.id}`}
      style={{
        display: 'flex', alignItems: 'center', gap: 12, padding: '12px 16px',
        borderRadius: 10, background: 'var(--rg-surface)', border: '1px solid var(--rg-card-border)',
        textDecoration: 'none', color: 'inherit',
        borderLeft: isNext ? `3px solid ${series.color}` : undefined,
      }}
    >
      {/* Round chip */}
      {event.round && (
        <span style={{
          fontSize: 11, fontWeight: 600, color: 'var(--rg-text3)',
          padding: '3px 8px', borderRadius: 6,
          background: 'var(--rg-elevated)', border: '1px solid var(--rg-border)',
          whiteSpace: 'nowrap', flexShrink: 0,
        }}>
          {t('progress.round', locale)} {event.round}/{totalRounds}
        </span>
      )}

      {/* Event name + circuit */}
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontSize: 14, fontWeight: 500, color: 'var(--rg-text)' }}>{event.name}</div>
        {circuit && (
          <div style={{ fontSize: 12, color: 'var(--rg-text3)', marginTop: 2 }}>
            {circuit.countryCode ? countryFlag(circuit.countryCode) + ' ' : ''}{circuit.name}
          </div>
        )}
      </div>

      {/* Date */}
      <span style={{ fontSize: 13, color: 'var(--rg-text3)', flexShrink: 0 }}>
        {raceDate && new Date(raceDate + 'T00:00:00').toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
      </span>

      {/* Winner */}
      {winnerDisplay && (
        <span style={{ fontSize: 12, color: 'var(--rg-text3)', flexShrink: 0, maxWidth: 200, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', display: 'inline-flex', alignItems: 'center', gap: 4 }}>
          <Trophy style={{ width: 11, height: 11 }} /> {winnerDisplay}
        </span>
      )}
    </Link>
  )
}
