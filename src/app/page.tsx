'use client'

import { format } from 'date-fns'
import { useLocalStorage } from '@/hooks/useLocalStorage'
import { useCalendarEvents } from '@/hooks/useCalendarEvents'
import { getDefaultTimezone } from '@/lib/timezone'
import { ALL_SERIES } from '@/data/series-registry'
import { Header } from '@/components/Header'
import { CalendarGrid } from '@/components/CalendarGrid'

export default function HomePage() {
  const [selectedSeries, setSelectedSeries] = useLocalStorage<string[]>(
    'race-grid:series',
    ALL_SERIES.map(s => s.id)
  )
  const [timezone, setTimezone] = useLocalStorage<string>('race-grid:timezone', getDefaultTimezone())
  const [month, setMonth] = useLocalStorage<string>('race-grid:month', format(new Date(), 'yyyy-MM'))

  const events = useCalendarEvents(selectedSeries, timezone, month)

  const toggleSeries = (id: string) => {
    const updated = selectedSeries.includes(id)
      ? selectedSeries.filter(s => s !== id)
      : [...selectedSeries, id]
    setSelectedSeries(updated)
  }

  return (
    <div style={{ minHeight: '100vh', background: '#13131d' }}>
      <Header
        selectedSeriesIds={selectedSeries}
        onToggleSeries={toggleSeries}
        onSetSeries={setSelectedSeries}
        timezone={timezone}
        onTimezoneChange={setTimezone}
      />
      <CalendarGrid
        month={month}
        onMonthChange={setMonth}
        events={events}
      />
    </div>
  )
}
