'use client'

import { useState, useEffect, useMemo } from 'react'
import Link from 'next/link'
import { Search, ExternalLink } from 'lucide-react'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { useLocalStorage } from '@/hooks/useLocalStorage'
import { useSelectedSeries } from '@/hooks/useSelectedSeries'
import { getDefaultTimezone } from '@/lib/timezone'
import { getDefaultLocale, t, type Locale } from '@/lib/i18n'
import { applyTheme, getDefaultTheme, type Theme } from '@/lib/theme'
import { AVAILABLE_YEARS, getFamilyForSeries, getFamilyMembers, getSeriesMeta } from '@/data/series-registry'
import { useYearData } from '@/hooks/useYearData'
import { getCircuit } from '@/data/circuits'
import { getEntries } from '@/data/entries'
import { getStandings, getAllClassStandings } from '@/data/standings'
import type { ClassStandings } from '@/data/standings/types'
import { getTeam } from '@/data/teams'
import type { SessionType } from '@/lib/types'
import { getTotalRounds } from '@/lib/format'
import { SeriesLogo } from '@/components/SeriesLogo'
import { YearSelector } from '@/components/YearSelector'
import { Header } from '@/components/Header'
import { SeriesTabBar } from './SeriesTabBar'
import { SeriesCalendarTab } from './SeriesCalendarTab'
import { SeriesCircuitsTab } from './SeriesCircuitsTab'
import { SeriesDriversTab } from './SeriesDriversTab'
import { SeriesTeamsTab } from './SeriesTeamsTab'

const ALL_SESSION_TYPES: SessionType[] = [
  'race', 'qualifying', 'sprint', 'sprint_qualifying', 'hyperpole',
  'practice', 'warmup', 'stage', 'shakedown', 'endurance',
]
import { Footer } from '@/components/Footer'

export function SeriesDetailClient({ seriesId }: { seriesId: string }) {
  const [timezone, setTimezone] = useLocalStorage<string>('race-grid:timezone', getDefaultTimezone())
  const [theme, setTheme] = useLocalStorage<Theme>('race-grid:theme', getDefaultTheme())
  const [locale, setLocale] = useLocalStorage<Locale>('race-grid:locale', getDefaultLocale())
  const [spoilerFree, setSpoilerFree] = useLocalStorage<boolean>('race-grid:spoiler-free', false)
  const [visibleSessionTypes, setVisibleSessionTypes] = useLocalStorage<SessionType[]>('race-grid:session-types', ALL_SESSION_TYPES)
  const [selectedSeries, setSelectedSeries] = useSelectedSeries()
  const [year, setYear] = useLocalStorage<number>('race-grid:series-detail-year', AVAILABLE_YEARS[0])

  useEffect(() => { applyTheme(theme) }, [theme])

  const allSeries = useYearData(year)
  const series = useMemo(() => {
    return allSeries.find(s => s.id === seriesId) ?? null
  }, [seriesId, allSeries])

  const meta = getSeriesMeta(seriesId)
  const family = getFamilyForSeries(seriesId)
  const familySiblings = family
    ? getFamilyMembers(family.id).filter(m => m.id !== seriesId)
    : []
  const totalRounds = series ? getTotalRounds(series) : 0
  const now = Date.now()
  const completedRounds = series ? series.events.filter(event => {
    const last = event.sessions[event.sessions.length - 1]
    return last && new Date(last.startUtc).getTime() + (last.durationMinutes || 120) * 60000 <= now
  }).length : 0

  const [query, setQuery] = useState('')
  const [tab, setTab] = useState<'calendar' | 'circuits' | 'drivers' | 'teams'>('calendar')

  const standingsData = useMemo(() => getStandings(seriesId, year), [seriesId, year])
  const allClasses = useMemo(() => getAllClassStandings(seriesId, year), [seriesId, year])
  const [activeClassIdx, setActiveClassIdx] = useState(0)

  useEffect(() => { setActiveClassIdx(0) }, [seriesId, year])

  const activeClass: ClassStandings | null = allClasses[activeClassIdx] ?? null

  const entries = useMemo(() => {
    // The entries file is the authoritative roster (full grid). Prefer it over
    // standings, which for an in-progress/recent season only list classified or
    // points-scoring drivers and undercount the field.
    const rawEntries = getEntries(seriesId, year)
    const scoped = allClasses.length > 1 && activeClass
      ? rawEntries.filter(e => e.class === activeClass.className)
      : rawEntries
    if (scoped.length > 0) return scoped
    // Fallback — no entries data for this class/season: derive roster from standings
    if (activeClass && activeClass.drivers.length > 0) {
      const seen = new Set<string>()
      return activeClass.drivers
        .filter(d => { if (seen.has(d.driverId)) return false; seen.add(d.driverId); return true })
        .map(d => ({ driverId: d.driverId, teamId: d.teamId, carNumber: undefined as number | undefined }))
    }
    return scoped
  }, [activeClass, allClasses.length, seriesId, year])

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

  const toggleSessionType = (type: SessionType) => {
    const updated = visibleSessionTypes.includes(type)
      ? visibleSessionTypes.filter(t => t !== type)
      : [...visibleSessionTypes, type]
    if (updated.length > 0) setVisibleSessionTypes(updated)
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
          visibleSessionTypes={visibleSessionTypes} onToggleSessionType={toggleSessionType}
          onSetSessionTypes={setVisibleSessionTypes}
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
        visibleSessionTypes={visibleSessionTypes} onToggleSessionType={toggleSessionType}
        onSetSessionTypes={setVisibleSessionTypes}
        showSeriesFilter={false}
      />

      <div className="rg-calendar-wrap">
        <Breadcrumbs items={[
          { label: t('nav.series', locale), href: '/series' },
          { label: meta.name },
        ]} />

        {/* Series header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 8 }}>
          <div style={{ width: 72, height: 44, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <SeriesLogo seriesId={seriesId} height={36} />
          </div>
          <div>
            <h1 className="font-display" style={{ fontSize: 32, letterSpacing: 1, color: 'var(--rg-text)', margin: 0, display: 'flex', alignItems: 'center', gap: 10 }}>
              {meta.name}
              {meta.wikipedia && (
                <a
                  href={`https://en.wikipedia.org/wiki/${meta.wikipedia}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={t('series.wikipedia', locale)}
                  style={{ color: 'var(--rg-text3)', display: 'inline-flex', alignItems: 'center', transition: 'color 0.15s' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--rg-link)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--rg-text3)')}
                >
                  <ExternalLink style={{ width: 18, height: 18 }} />
                </a>
              )}
            </h1>
          </div>
        </div>

        {/* Family — link to siblings if part of a family */}
        {family && familySiblings.length > 0 && (
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16, flexWrap: 'wrap' }}>
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1, textTransform: 'uppercase', color: 'var(--rg-text3)' }}>
              {family.name} Family
            </span>
            {familySiblings.map(sibling => (
              <Link
                key={sibling.id}
                href={`/series/${sibling.id}`}
                style={{
                  display: 'inline-flex', alignItems: 'center', padding: '4px 10px',
                  borderRadius: 6, fontSize: 11, fontWeight: 700, letterSpacing: 0.5,
                  backgroundColor: sibling.color, color: sibling.textColor,
                  textDecoration: 'none', lineHeight: 1, whiteSpace: 'nowrap',
                }}
              >
                {sibling.shortName}
              </Link>
            ))}
          </div>
        )}

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

        {/* Year + Search */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20, flexWrap: 'wrap' }}>
          <YearSelector year={year} years={AVAILABLE_YEARS} onChange={setYear} />
          {series && series.events.length > 0 && (
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
                placeholder={t('search.events', locale)}
                style={{
                  flex: 1, background: 'transparent', border: 'none', outline: 'none',
                  color: 'var(--rg-text)', fontSize: 13, minWidth: 0,
                }}
              />
            </div>
          )}
        </div>

        {/* Tab bar */}
        {series && (
          <SeriesTabBar
            activeTab={tab}
            onSelect={setTab}
            locale={locale}
            eventCount={series.events.length}
            circuitCount={circuits.length}
            driverCount={entries.length}
            teamCount={teams.length}
          />
        )}

        {/* Calendar tab */}
        {tab === 'calendar' && series && series.events.length > 0 && (
          <SeriesCalendarTab series={series} query={query} spoilerFree={spoilerFree} locale={locale} />
        )}

        {/* Circuits tab */}
        {tab === 'circuits' && circuits.length > 0 && (
          <SeriesCircuitsTab circuits={circuits} />
        )}

        {/* Drivers tab */}
        {tab === 'drivers' && entries.length > 0 && (
          <SeriesDriversTab entries={entries} allClasses={allClasses} activeClassIdx={activeClassIdx} onSelectClass={setActiveClassIdx} />
        )}

        {/* Teams tab */}
        {tab === 'teams' && teams.length > 0 && (
          <SeriesTeamsTab teams={teams} entries={entries} allClasses={allClasses} activeClassIdx={activeClassIdx} onSelectClass={setActiveClassIdx} />
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
