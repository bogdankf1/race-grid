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

interface CalendarGridProps {
  month: string
  onMonthChange: (month: string) => void
  events: Map<string, DaySeriesInfo[]>
}

const WEEKDAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

export function CalendarGrid({ month, onMonthChange, events }: CalendarGridProps) {
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
              border: '1px solid #2e2e46',
              color: '#999',
              display: 'flex',
            }}
          >
            <ChevronLeft style={{ width: 20, height: 20 }} />
          </button>
          <h2 className="font-display rg-month-label">
            {format(currentDate, 'MMMM yyyy')}
          </h2>
          <button
            onClick={goToNext}
            className="rg-nav-btn"
            style={{
              padding: 8,
              borderRadius: 10,
              background: 'transparent',
              border: '1px solid #2e2e46',
              color: '#999',
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
            background: '#252538',
            border: '1px solid #2e2e46',
            color: '#aaa',
            fontSize: 14,
            fontWeight: 500,
          }}
        >
          Today
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
        {WEEKDAYS.map(day => (
          <div
            key={day}
            className="rg-weekday-header"
            style={{
              textAlign: 'center',
              fontSize: 12,
              fontWeight: 600,
              color: '#666',
              textTransform: 'uppercase',
              letterSpacing: 2,
              padding: '8px 0',
            }}
          >
            {day}
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
              seriesInfos={events.get(dateStr) || []}
            />
          )
        })}
      </div>
    </div>
  )
}
