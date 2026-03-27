'use client'

import { useEffect, useState } from 'react'
import { format, startOfWeek } from 'date-fns'
import { useLocalStorage } from '@/hooks/useLocalStorage'
import { useViewEvents } from '@/hooks/useCalendarEvents'
import { getDefaultTimezone } from '@/lib/timezone'
import { ALL_SERIES } from '@/data/series-registry'
import { getDefaultLocale, type Locale } from '@/lib/i18n'
import { applyTheme, getDefaultTheme, type Theme } from '@/lib/theme'
import { Header } from '@/components/Header'
import { CalendarGrid } from '@/components/CalendarGrid'
import { ErrorBoundary } from '@/components/ErrorBoundary'
import { UpcomingRaces } from '@/components/UpcomingRaces'
import { Footer } from '@/components/Footer'

export default function HomePage() {
  const [selectedSeries, setSelectedSeries] = useLocalStorage<string[]>(
    'race-grid:series',
    ALL_SERIES.map(s => s.id)
  )
  const [timezone, setTimezone] = useLocalStorage<string>('race-grid:timezone', getDefaultTimezone())
  const [month, setMonth] = useLocalStorage<string>('race-grid:month', format(new Date(), 'yyyy-MM'))
  const [theme, setTheme] = useLocalStorage<Theme>('race-grid:theme', getDefaultTheme())
  const [locale, setLocale] = useLocalStorage<Locale>('race-grid:locale', getDefaultLocale())
  const [viewMode, setViewMode] = useLocalStorage<'month' | 'week'>('race-grid:view', 'month')
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

  const events = useViewEvents(selectedSeries, timezone, viewMode, month, weekStart)

  const toggleSeries = (id: string) => {
    const updated = selectedSeries.includes(id)
      ? selectedSeries.filter(s => s !== id)
      : [...selectedSeries, id]
    setSelectedSeries(updated)
  }

  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark')
  const toggleLocale = () => setLocale(locale === 'en' ? 'uk' : 'en')

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
