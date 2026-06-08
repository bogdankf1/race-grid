'use client'

import { useState, useMemo, useEffect } from 'react'
import Link from 'next/link'
import { Search, Trophy, Users, ChevronDown } from 'lucide-react'
import { useLocalStorage } from '@/hooks/useLocalStorage'
import { getDefaultTimezone } from '@/lib/timezone'
import { getDefaultLocale, t, type Locale } from '@/lib/i18n'
import { applyTheme, getDefaultTheme, type Theme } from '@/lib/theme'
import { AVAILABLE_YEARS, getSeriesMeta, getVisibleSeries } from '@/data/series-registry'
import { getStandings, hasStandings, getAllClassStandings } from '@/data/standings'
import { getDriver } from '@/data/drivers'
import { getTeam } from '@/data/teams'
import type { SessionType } from '@/lib/types'
import { Header } from '@/components/Header'
import { YearSelector } from '@/components/YearSelector'
import { Footer } from '@/components/Footer'
import type { ClassStandings, DriverStandingEntry, TeamStandingEntry } from '@/data/standings/types'

const ALL_SESSION_TYPES: SessionType[] = [
  'race', 'qualifying', 'sprint', 'sprint_qualifying', 'hyperpole',
  'practice', 'warmup', 'stage', 'shakedown', 'endurance',
]

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
  const [visibleSessionTypes, setVisibleSessionTypes] = useLocalStorage<SessionType[]>('race-grid:session-types', ALL_SESSION_TYPES)
  const [selectedSeries, setSelectedSeries] = useLocalStorage<string[]>('race-grid:series', getVisibleSeries().map(s => s.id))
  const [seriesId, setSeriesId] = useLocalStorage<string>('race-grid:standings-series', 'f1')
  const [year, setYear] = useLocalStorage<number>('race-grid:standings-year', 2025)
  const [query, setQuery] = useState('')
  const [tab, setTab] = useState<'drivers' | 'constructors'>('drivers')

  useEffect(() => { applyTheme(theme) }, [theme])

  const standings = useMemo(() => getStandings(seriesId, year), [seriesId, year])
  const seriesMeta = getSeriesMeta(seriesId)

  const allClasses = useMemo(() => getAllClassStandings(seriesId, year), [seriesId, year])
  const [activeClassIdx, setActiveClassIdx] = useState(0)

  useEffect(() => { setActiveClassIdx(0) }, [seriesId, year])

  const activeClass: ClassStandings | null = allClasses[activeClassIdx] ?? null

  // Reset to drivers tab when switching to a series without constructors
  useEffect(() => {
    if (activeClass && activeClass.constructors.length === 0) setTab('drivers')
  }, [activeClass])

  // Series that have standings data
  const availableSeries = useMemo(() => {
    const result: { id: string; years: number[] }[] = []
    for (const meta of getVisibleSeries()) {
      const years = AVAILABLE_YEARS.filter(y => hasStandings(meta.id, y))
      if (years.length > 0) result.push({ id: meta.id, years })
    }
    return result
  }, [])

  const filteredDrivers = useMemo(() => {
    if (!activeClass) return []
    if (!query.trim()) return activeClass.drivers
    const q = query.toLowerCase()
    return activeClass.drivers.filter(entry => {
      const driver = getDriver(entry.driverId)
      const team = getTeam(entry.teamId)
      return driver?.name.toLowerCase().includes(q) || team?.name.toLowerCase().includes(q)
    })
  }, [activeClass, query])

  const filteredConstructors = useMemo(() => {
    if (!activeClass) return []
    if (!query.trim()) return activeClass.constructors
    const q = query.toLowerCase()
    return activeClass.constructors.filter(entry => {
      const team = getTeam(entry.teamId)
      return team?.name.toLowerCase().includes(q)
    })
  }, [activeClass, query])

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
          <YearSelector
            year={year}
            years={AVAILABLE_YEARS}
            onChange={setYear}
            isYearEnabled={y => hasStandings(seriesId, y)}
          />
        </div>

        {/* Series selector dropdown */}
        <div style={{ position: 'relative', marginBottom: 16, maxWidth: 480 }}>
          <select
            value={seriesId}
            onChange={e => setSeriesId(e.target.value)}
            style={{
              width: '100%',
              height: 'var(--rg-control-h)',
              padding: '0 36px 0 14px',
              borderRadius: 10,
              border: '1px solid var(--rg-border)',
              background: 'var(--rg-btn-bg)',
              color: 'var(--rg-text)',
              fontSize: 14,
              fontWeight: 500,
              cursor: 'pointer',
              appearance: 'none',
              outline: 'none',
            }}
          >
            {availableSeries.map(({ id }) => {
              const meta = getSeriesMeta(id)
              if (!meta) return null
              return (
                <option key={id} value={id}>{meta.name}</option>
              )
            })}
          </select>
          <ChevronDown style={{
            position: 'absolute', right: 12, top: '50%', transform: 'translateY(-50%)',
            width: 16, height: 16, color: 'var(--rg-text3)', pointerEvents: 'none',
          }} />
        </div>


        {standings ? (
          <>
            {allClasses.length > 1 && (
              <div
                className="rg-series-tabs"
                style={{
                  display: 'flex', gap: 2, background: 'var(--rg-btn-bg)',
                  borderRadius: 10, padding: 2, marginBottom: 12,
                  width: 'fit-content', maxWidth: '100%', flexWrap: 'wrap',
                }}
              >
                {allClasses.map((cls, idx) => (
                  <button
                    key={cls.className}
                    onClick={() => setActiveClassIdx(idx)}
                    className="rg-series-tab"
                    style={{
                      padding: '6px 14px', borderRadius: 8, fontSize: 12, fontWeight: 700,
                      letterSpacing: 0.5, textTransform: 'uppercase',
                      background: idx === activeClassIdx ? 'var(--rg-elevated)' : 'transparent',
                      border: idx === activeClassIdx ? '1px solid var(--rg-border)' : '1px solid transparent',
                      color: idx === activeClassIdx ? 'var(--rg-text)' : 'var(--rg-text3)',
                      cursor: 'pointer',
                    }}
                  >
                    {cls.className}
                  </button>
                ))}
              </div>
            )}

            {allClasses.length === 1 && allClasses[0].className && allClasses[0].className !== 'Overall' && (
              <div style={{ marginBottom: 12 }}>
                <span style={{
                  fontSize: 11, fontWeight: 700, letterSpacing: 1, textTransform: 'uppercase',
                  color: 'var(--rg-text3)',
                }}>
                  {allClasses[0].className}
                </span>
              </div>
            )}

            {/* Tabs: Drivers / Constructors — hide tab bar if no constructors */}
            {(activeClass?.constructors.length ?? 0) > 0 ? (
              <div className="rg-series-tabs" style={{ display: 'flex', gap: 2, background: 'var(--rg-btn-bg)', borderRadius: 10, padding: 2, marginBottom: 20, width: 'fit-content', maxWidth: '100%' }}>
                <button
                  onClick={() => setTab('drivers')}
                  className="rg-series-tab"
                  style={{
                    padding: '8px 20px', borderRadius: 8, fontSize: 13, fontWeight: 600,
                    background: tab === 'drivers' ? 'var(--rg-elevated)' : 'transparent',
                    border: tab === 'drivers' ? '1px solid var(--rg-border)' : '1px solid transparent',
                    color: tab === 'drivers' ? 'var(--rg-text)' : 'var(--rg-text3)',
                    cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, whiteSpace: 'nowrap', flexShrink: 0,
                  }}
                >
                  <Trophy style={{ width: 14, height: 14 }} />
                  <span className="rg-series-tab-label">Drivers</span>
                </button>
                <button
                  onClick={() => setTab('constructors')}
                  className="rg-series-tab"
                  style={{
                    padding: '8px 20px', borderRadius: 8, fontSize: 13, fontWeight: 600,
                    background: tab === 'constructors' ? 'var(--rg-elevated)' : 'transparent',
                    border: tab === 'constructors' ? '1px solid var(--rg-border)' : '1px solid transparent',
                    color: tab === 'constructors' ? 'var(--rg-text)' : 'var(--rg-text3)',
                    cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, whiteSpace: 'nowrap', flexShrink: 0,
                  }}
                >
                  <Users style={{ width: 14, height: 14 }} />
                  <span className="rg-series-tab-label">Constructors</span>
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

function DriverRow({ entry }: { entry: DriverStandingEntry; seriesColor?: string }) {
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
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 3, fontSize: 12, color: 'var(--rg-success)', fontWeight: 600, flexShrink: 0 }}>
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

function ConstructorRow({ entry }: { entry: TeamStandingEntry; seriesColor?: string }) {
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
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 3, fontSize: 12, color: 'var(--rg-success)', fontWeight: 600, flexShrink: 0 }}>
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
