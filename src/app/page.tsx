'use client'

import { useEffect, useState } from 'react'
import { format, startOfWeek } from 'date-fns'
import { useLocalStorage } from '@/hooks/useLocalStorage'
import { useViewEvents } from '@/hooks/useCalendarEvents'
import { getDefaultTimezone } from '@/lib/timezone'
import { useYearData } from '@/hooks/useYearData'
import { getDefaultLocale, type Locale } from '@/lib/i18n'
import { applyTheme, getDefaultTheme, type Theme } from '@/lib/theme'
import type { SessionType } from '@/lib/types'

const ALL_SESSION_TYPES: SessionType[] = [
  'race', 'qualifying', 'sprint', 'sprint_qualifying', 'hyperpole',
  'practice', 'warmup', 'stage', 'shakedown', 'endurance',
]
import { Header } from '@/components/Header'
import { CalendarGrid } from '@/components/CalendarGrid'
import { ErrorBoundary } from '@/components/ErrorBoundary'
import { UpcomingRaces } from '@/components/UpcomingRaces'
import { Footer } from '@/components/Footer'

export default function HomePage() {
  const [month, setMonth] = useLocalStorage<string>('race-grid:month', format(new Date(), 'yyyy-MM'))
  const year = parseInt(month.slice(0, 4))
  const allSeriesForYear = useYearData(year)
  const [selectedSeries, setSelectedSeries] = useLocalStorage<string[]>(
    'race-grid:series',
    allSeriesForYear.map(s => s.id)
  )
  const [timezone, setTimezone] = useLocalStorage<string>('race-grid:timezone', getDefaultTimezone())
  const [theme, setTheme] = useLocalStorage<Theme>('race-grid:theme', getDefaultTheme())
  const [locale, setLocale] = useLocalStorage<Locale>('race-grid:locale', getDefaultLocale())
  const [viewMode, setViewMode] = useLocalStorage<'month' | 'week'>('race-grid:view', 'month')
  const [spoilerFree, setSpoilerFree] = useLocalStorage<boolean>('race-grid:spoiler-free', false)
  const [visibleSessionTypes, setVisibleSessionTypes] = useLocalStorage<SessionType[]>('race-grid:session-types', ALL_SESSION_TYPES)
  const [weekStart, setWeekStart] = useLocalStorage<string>(
    'race-grid:week',
    format(startOfWeek(new Date(), { weekStartsOn: 1 }), 'yyyy-MM-dd')
  )

  useEffect(() => { applyTheme(theme) }, [theme])

  // Highlight day cell we navigated back from
  const [highlightDate, setHighlightDate] = useState<string | null>(null)
  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const from = params.get('from')
    if (from) {
      setHighlightDate(from)
      params.delete('from')
      const clean = params.toString()
      window.history.replaceState({}, '', clean ? `?${clean}` : window.location.pathname)
      setTimeout(() => setHighlightDate(null), 2000)
    }
  }, [])

  const events = useViewEvents(selectedSeries, timezone, viewMode, month, weekStart, allSeriesForYear, visibleSessionTypes)

  const toggleSeries = (id: string) => {
    const updated = selectedSeries.includes(id)
      ? selectedSeries.filter(s => s !== id)
      : [...selectedSeries, id]
    setSelectedSeries(updated)
  }

  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark')
  const toggleLocale = () => setLocale(locale === 'en' ? 'uk' : 'en')
  const toggleSpoilerFree = () => setSpoilerFree(!spoilerFree)
  const toggleSessionType = (type: SessionType) => {
    const updated = visibleSessionTypes.includes(type)
      ? visibleSessionTypes.filter(t => t !== type)
      : [...visibleSessionTypes, type]
    if (updated.length > 0) setVisibleSessionTypes(updated)
  }

  return (
    <div style={{ minHeight: '100vh', background: 'var(--rg-bg)', color: 'var(--rg-text)' }}>
      <Header
        selectedSeriesIds={selectedSeries}
        onToggleSeries={toggleSeries}
        onSetSeries={setSelectedSeries}
        timezone={timezone}
        onTimezoneChange={setTimezone}
        theme={theme}
        onToggleTheme={toggleTheme}
        locale={locale}
        onToggleLocale={toggleLocale}
        spoilerFree={spoilerFree}
        onToggleSpoilerFree={toggleSpoilerFree}
        visibleSessionTypes={visibleSessionTypes}
        onToggleSessionType={toggleSessionType}
        onSetSessionTypes={setVisibleSessionTypes}
      />
      <div className="rg-calendar-wrap" style={{ paddingBottom: 0 }}>
        <UpcomingRaces
          selectedSeriesIds={selectedSeries}
          timezone={timezone}
          locale={locale}
        />
      </div>
      <ErrorBoundary>
      <CalendarGrid
        month={month}
        onMonthChange={setMonth}
        events={events}
        locale={locale}
        viewMode={viewMode}
        onViewModeChange={setViewMode}
        weekStart={weekStart}
        onWeekStartChange={setWeekStart}
        selectedSeriesIds={selectedSeries}
        timezone={timezone}
        highlightDate={highlightDate}
      />
      </ErrorBoundary>
      <Footer locale={locale} />
    </div>
  )
}
