'use client'

import { useEffect } from 'react'
import { format } from 'date-fns'
import { useLocalStorage } from '@/hooks/useLocalStorage'
import { useCalendarEvents } from '@/hooks/useCalendarEvents'
import { getDefaultTimezone } from '@/lib/timezone'
import { ALL_SERIES } from '@/data/series-registry'
import { getDefaultLocale, type Locale } from '@/lib/i18n'
import { applyTheme, getDefaultTheme, type Theme } from '@/lib/theme'
import { Header } from '@/components/Header'
import { CalendarGrid } from '@/components/CalendarGrid'

export default function HomePage() {
  const [selectedSeries, setSelectedSeries] = useLocalStorage<string[]>(
    'race-grid:series',
    ALL_SERIES.map(s => s.id)
  )
  const [timezone, setTimezone] = useLocalStorage<string>('race-grid:timezone', getDefaultTimezone())
  const [month, setMonth] = useLocalStorage<string>('race-grid:month', format(new Date(), 'yyyy-MM'))
  const [theme, setTheme] = useLocalStorage<Theme>('race-grid:theme', getDefaultTheme())
  const [locale, setLocale] = useLocalStorage<Locale>('race-grid:locale', getDefaultLocale())

  useEffect(() => { applyTheme(theme) }, [theme])

  const events = useCalendarEvents(selectedSeries, timezone, month)

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
      <CalendarGrid
        month={month}
        onMonthChange={setMonth}
        events={events}
        locale={locale}
      />
    </div>
  )
}
