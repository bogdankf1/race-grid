'use client'

import { useMemo } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import {
  startOfMonth, endOfMonth, startOfWeek, endOfWeek,
  eachDayOfInterval, format, addMonths, subMonths,
  isSameMonth, isToday as isDateToday,
} from 'date-fns'
import { DayCell } from './DayCell'
import { DaySeriesInfo } from '@/hooks/useCalendarEvents'
import { t, formatMonthLocale, type Locale } from '@/lib/i18n'

function findNextRaceDay(events: Map<string, DaySeriesInfo[]>): string | null {
  const today = format(new Date(), 'yyyy-MM-dd')
  const futureDates = Array.from(events.keys())
    .filter(d => d >= today && events.get(d)!.length > 0)
    .sort()
  return futureDates[0] ?? null
}

interface CalendarGridProps {
  month: string
  onMonthChange: (month: string) => void
  events: Map<string, DaySeriesInfo[]>
  locale: Locale
}

const WEEKDAY_KEYS = ['weekday.mon', 'weekday.tue', 'weekday.wed', 'weekday.thu', 'weekday.fri', 'weekday.sat', 'weekday.sun']

export function CalendarGrid({ month, onMonthChange, events, locale }: CalendarGridProps) {
  const currentDate = useMemo(() => {
    const [year, m] = month.split('-').map(Number)
    return new Date(year, m - 1, 1)
  }, [month])

  const days = useMemo(() => {
    const monthStart = startOfMonth(currentDate)
    const monthEnd = endOfMonth(currentDate)
    const calendarStart = startOfWeek(monthStart, { weekStartsOn: 1 })
    const calendarEnd = endOfWeek(monthEnd, { weekStartsOn: 1 })
    return eachDayOfInterval({ start: calendarStart, end: calendarEnd })
  }, [currentDate])

  const nextRaceDay = useMemo(() => findNextRaceDay(events), [events])

  const goToPrev = () => onMonthChange(format(subMonths(currentDate, 1), 'yyyy-MM'))
  const goToNext = () => onMonthChange(format(addMonths(currentDate, 1), 'yyyy-MM'))
  const goToToday = () => onMonthChange(format(new Date(), 'yyyy-MM'))

  return (
    <div className="rg-calendar-wrap">
      {/* Month nav */}
      <div
        className="rg-month-nav"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: 28,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <button
            onClick={goToPrev}
            className="rg-nav-btn"
            style={{
              padding: 8,
              borderRadius: 10,
              background: 'transparent',
              border: '1px solid var(--rg-border)',
              color: 'var(--rg-text2)',
              display: 'flex',
            }}
          >
            <ChevronLeft style={{ width: 20, height: 20 }} />
          </button>
          <h2 className="font-display rg-month-label">
            {formatMonthLocale(currentDate, locale)}
          </h2>
          <button
            onClick={goToNext}
            className="rg-nav-btn"
            style={{
              padding: 8,
              borderRadius: 10,
              background: 'transparent',
              border: '1px solid var(--rg-border)',
              color: 'var(--rg-text2)',
              display: 'flex',
            }}
          >
            <ChevronRight style={{ width: 20, height: 20 }} />
          </button>
        </div>

        <button
          onClick={goToToday}
          className="rg-today-btn"
          style={{
            padding: '8px 20px',
            borderRadius: 10,
            background: 'var(--rg-btn-bg)',
            border: '1px solid var(--rg-border)',
            color: 'var(--rg-text2)',
            fontSize: 14,
            fontWeight: 500,
          }}
        >
          {t('nav.today', locale)}
        </button>
      </div>

      {/* Weekday headers */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(7, minmax(0, 1fr))',
          gap: 6,
          marginBottom: 6,
        }}
      >
        {WEEKDAY_KEYS.map(key => (
          <div
            key={key}
            className="rg-weekday-header"
            style={{
              textAlign: 'center',
              fontSize: 12,
              fontWeight: 600,
              color: 'var(--rg-text3)',
              textTransform: 'uppercase',
              letterSpacing: 2,
              padding: '8px 0',
            }}
          >
            {t(key, locale)}
          </div>
        ))}
      </div>

      {/* Day grid */}
      <div
        className="rg-day-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(7, minmax(0, 1fr))',
          gap: 6,
        }}
      >
        {days.map(day => {
          const dateStr = format(day, 'yyyy-MM-dd')
          return (
            <DayCell
              key={dateStr}
              date={dateStr}
              dayNumber={day.getDate()}
              isCurrentMonth={isSameMonth(day, currentDate)}
              isToday={isDateToday(day)}
              isNextRaceDay={dateStr === nextRaceDay}
              seriesInfos={events.get(dateStr) || []}
            />
          )
        })}
      </div>
    </div>
  )
}
