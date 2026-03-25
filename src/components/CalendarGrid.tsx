'use client'

import { useMemo } from 'react'
import { ChevronLeft, ChevronRight, Calendar, CalendarDays } from 'lucide-react'
import {
  startOfMonth, endOfMonth, startOfWeek, endOfWeek,
  eachDayOfInterval, format, addMonths, subMonths,
  addWeeks, subWeeks,
  isSameMonth, isToday as isDateToday,
} from 'date-fns'
import { DayCell } from './DayCell'
import { CalendarSearch } from './CalendarSearch'
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
  viewMode: 'month' | 'week'
  onViewModeChange: (mode: 'month' | 'week') => void
  weekStart: string
  onWeekStartChange: (weekStart: string) => void
  selectedSeriesIds: string[]
  timezone: string
}

const WEEKDAY_KEYS = ['weekday.mon', 'weekday.tue', 'weekday.wed', 'weekday.thu', 'weekday.fri', 'weekday.sat', 'weekday.sun']

function formatWeekLabel(weekStart: string, locale: Locale): string {
  const start = new Date(weekStart + 'T00:00:00')
  const end = new Date(start)
  end.setDate(end.getDate() + 6)

  const loc = locale === 'uk' ? 'uk-UA' : 'en-US'
  const sameMonth = start.getMonth() === end.getMonth()

  if (sameMonth) {
    const month = start.toLocaleDateString(loc, { month: 'long' })
    return `${start.getDate()} – ${end.getDate()} ${month} ${start.getFullYear()}`
  }

  const startStr = start.toLocaleDateString(loc, { month: 'short', day: 'numeric' })
  const endStr = end.toLocaleDateString(loc, { month: 'short', day: 'numeric', year: 'numeric' })
  return `${startStr} – ${endStr}`
}

export function CalendarGrid({
  month, onMonthChange, events, locale,
  viewMode, onViewModeChange, weekStart, onWeekStartChange,
  selectedSeriesIds, timezone,
}: CalendarGridProps) {
  const currentDate = useMemo(() => {
    const [year, m] = month.split('-').map(Number)
    return new Date(year, m - 1, 1)
  }, [month])

  const weekStartDate = useMemo(() => new Date(weekStart + 'T00:00:00'), [weekStart])

  // Month mode: full calendar grid
  const monthDays = useMemo(() => {
    const monthStart = startOfMonth(currentDate)
    const monthEnd = endOfMonth(currentDate)
    const calendarStart = startOfWeek(monthStart, { weekStartsOn: 1 })
    const calendarEnd = endOfWeek(monthEnd, { weekStartsOn: 1 })
    return eachDayOfInterval({ start: calendarStart, end: calendarEnd })
  }, [currentDate])

  // Week mode: 7 days
  const weekDays = useMemo(() => {
    return eachDayOfInterval({ start: weekStartDate, end: new Date(weekStartDate.getTime() + 6 * 86400000) })
  }, [weekStartDate])

  const days = viewMode === 'week' ? weekDays : monthDays
  const nextRaceDay = useMemo(() => findNextRaceDay(events), [events])

  // Navigation
  const goToPrev = () => {
    if (viewMode === 'week') {
      onWeekStartChange(format(subWeeks(weekStartDate, 1), 'yyyy-MM-dd'))
    } else {
      onMonthChange(format(subMonths(currentDate, 1), 'yyyy-MM'))
    }
  }
  const goToNext = () => {
    if (viewMode === 'week') {
      onWeekStartChange(format(addWeeks(weekStartDate, 1), 'yyyy-MM-dd'))
    } else {
      onMonthChange(format(addMonths(currentDate, 1), 'yyyy-MM'))
    }
  }
  const goToToday = () => {
    if (viewMode === 'week') {
      onWeekStartChange(format(startOfWeek(new Date(), { weekStartsOn: 1 }), 'yyyy-MM-dd'))
    } else {
      onMonthChange(format(new Date(), 'yyyy-MM'))
    }
  }

  // When switching modes, sync the date context
  const switchMode = (mode: 'month' | 'week') => {
    if (mode === 'week' && viewMode === 'month') {
      // Switch to week: jump to the week containing the 1st of current month (or today if same month)
      const now = new Date()
      const ref = isSameMonth(now, currentDate) ? now : currentDate
      onWeekStartChange(format(startOfWeek(ref, { weekStartsOn: 1 }), 'yyyy-MM-dd'))
    } else if (mode === 'month' && viewMode === 'week') {
      // Switch to month: use the month of the current week's start
      onMonthChange(format(weekStartDate, 'yyyy-MM'))
    }
    onViewModeChange(mode)
  }

  const navLabel = viewMode === 'week'
    ? formatWeekLabel(weekStart, locale)
    : formatMonthLocale(currentDate, locale)

  const todayLabel = viewMode === 'week' ? t('nav.thisWeek', locale) : t('nav.today', locale)

  const navBtnStyle: React.CSSProperties = {
    padding: 8,
    borderRadius: 10,
    background: 'transparent',
    border: '1px solid var(--rg-border)',
    color: 'var(--rg-text2)',
    display: 'flex',
  }

  const viewBtnStyle = (active: boolean): React.CSSProperties => ({
    padding: '6px 10px',
    borderRadius: 8,
    background: active ? 'var(--rg-elevated)' : 'transparent',
    border: active ? '1px solid var(--rg-border)' : '1px solid transparent',
    color: active ? 'var(--rg-text)' : 'var(--rg-text3)',
    display: 'flex',
    alignItems: 'center',
    gap: 5,
    fontSize: 12,
    fontWeight: 600,
    cursor: 'pointer',
  })

  return (
    <div className="rg-calendar-wrap">
      {/* Nav — top row: prev/label/next */}
      <div
        className="rg-month-nav"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: 12,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <button onClick={goToPrev} className="rg-nav-btn" style={navBtnStyle}>
            <ChevronLeft style={{ width: 20, height: 20 }} />
          </button>
          <h2 className="font-display rg-month-label">
            {navLabel}
          </h2>
          <button onClick={goToNext} className="rg-nav-btn" style={navBtnStyle}>
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
            flexShrink: 0,
          }}
        >
          {todayLabel}
        </button>
      </div>

      {/* Nav — bottom row: search + view toggle */}
      <div
        className="rg-toolbar"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          marginBottom: 20,
        }}
      >
        <CalendarSearch
          selectedSeriesIds={selectedSeriesIds}
          timezone={timezone}
          locale={locale}
        />

        {/* View mode toggle */}
        <div style={{ display: 'flex', gap: 2, background: 'var(--rg-btn-bg)', borderRadius: 10, padding: 2, flexShrink: 0 }}>
          <button onClick={() => switchMode('month')} style={viewBtnStyle(viewMode === 'month')} title={t('view.month', locale)}>
            <Calendar style={{ width: 13, height: 13 }} />
            <span className="rg-view-label">{t('view.month', locale)}</span>
          </button>
          <button onClick={() => switchMode('week')} style={viewBtnStyle(viewMode === 'week')} title={t('view.week', locale)}>
            <CalendarDays style={{ width: 13, height: 13 }} />
            <span className="rg-view-label">{t('view.week', locale)}</span>
          </button>
        </div>
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
              isCurrentMonth={viewMode === 'week' ? true : isSameMonth(day, currentDate)}
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
