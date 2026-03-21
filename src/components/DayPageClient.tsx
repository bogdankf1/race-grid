'use client'

import { useRouter } from 'next/navigation'
import { format, parse, addDays, subDays } from 'date-fns'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useLocalStorage } from '@/hooks/useLocalStorage'
import { getDefaultTimezone } from '@/lib/timezone'
import { ALL_SERIES } from '@/data/series-registry'
import { Header } from '@/components/Header'
import { DayDetail } from '@/components/DayDetail'

interface DayPageClientProps {
  date: string
}

export function DayPageClient({ date }: DayPageClientProps) {
  const router = useRouter()
  const [selectedSeries, setSelectedSeries] = useLocalStorage<string[]>(
    'race-grid:series',
    ALL_SERIES.map(s => s.id)
  )
  const [timezone, setTimezone] = useLocalStorage<string>('race-grid:timezone', getDefaultTimezone())

  const parsed = parse(date, 'yyyy-MM-dd', new Date())
  const monthPath = format(parsed, 'yyyy-MM')
  const dateLabel = format(parsed, 'EEEE, MMMM d, yyyy')
  const prevDate = format(subDays(parsed, 1), 'yyyy-MM-dd')
  const nextDate = format(addDays(parsed, 1), 'yyyy-MM-dd')

  const toggleSeries = (id: string) => {
    const updated = selectedSeries.includes(id)
      ? selectedSeries.filter(s => s !== id)
      : [...selectedSeries, id]
    setSelectedSeries(updated)
  }

  const navBtnStyle: React.CSSProperties = {
    padding: 8,
    borderRadius: 10,
    background: 'transparent',
    border: '1px solid #2e2e46',
    color: '#999',
    display: 'flex',
  }

  return (
    <div style={{ minHeight: '100vh', background: '#13131d' }}>
      <Header
        selectedSeriesIds={selectedSeries}
        onToggleSeries={toggleSeries}
        onSetSeries={setSelectedSeries}
        timezone={timezone}
        onTimezoneChange={setTimezone}
        backHref={`/?month=${monthPath}`}
        backLabel="Back to calendar"
      />

      <div className="rg-day-wrap">
        {/* Day nav */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            marginBottom: 28,
          }}
        >
          <button
            className="rg-nav-btn"
            onClick={() => router.push(`/day/${prevDate}`)}
            style={navBtnStyle}
          >
            <ChevronLeft style={{ width: 20, height: 20 }} />
          </button>
          <h1
            className="font-display rg-day-heading"
            style={{ margin: 0, width: 460, textAlign: 'center' }}
          >
            {dateLabel}
          </h1>
          <button
            className="rg-nav-btn"
            onClick={() => router.push(`/day/${nextDate}`)}
            style={navBtnStyle}
          >
            <ChevronRight style={{ width: 20, height: 20 }} />
          </button>
        </div>

        <DayDetail
          date={date}
          selectedSeriesIds={selectedSeries}
          timezone={timezone}
        />
      </div>
    </div>
  )
}
