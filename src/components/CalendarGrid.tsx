'use client'

import { useMemo, useState, useRef } from 'react'
import { ChevronLeft, ChevronRight, ChevronDown, Calendar, CalendarDays } from 'lucide-react'
import {
  startOfMonth, endOfMonth, startOfWeek, endOfWeek,
  eachDayOfInterval, format, addMonths, subMonths,
  addWeeks, subWeeks,
  isSameMonth, isToday as isDateToday,
} from 'date-fns'
import { DayCell } from './DayCell'
import { CalendarSearch } from './CalendarSearch'
import { SwipeContainer } from './SwipeContainer'
import { MonthYearPicker } from './MonthYearPicker'
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
  highlightDate?: string | null
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
  selectedSeriesIds, timezone, highlightDate,
}: CalendarGridProps) {
  const [pickerOpen, setPickerOpen] = useState(false)
  const monthLabelRef = useRef<HTMLButtonElement>(null)

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
    width: 36,
    borderRadius: 10,
    background: 'transparent',
    border: '1px solid var(--rg-border)',
    color: 'var(--rg-text2)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
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
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, position: 'relative' }}>
          <button onClick={goToPrev} className="rg-nav-btn rg-control" style={navBtnStyle}>
            <ChevronLeft style={{ width: 20, height: 20 }} />
          </button>
          <button
            ref={monthLabelRef}
            onClick={() => viewMode === 'month' && setPickerOpen(o => !o)}
            className="font-display rg-month-label"
            style={{
              background: 'none',
              border: 'none',
              color: 'inherit',
              cursor: viewMode === 'month' ? 'pointer' : 'default',
              display: 'flex',
              alignItems: 'center',
              gap: 4,
              padding: 0,
              margin: 0,
            }}
          >
            {navLabel}
            {viewMode === 'month' && (
              <ChevronDown style={{ width: 16, height: 16, color: 'var(--rg-text3)', transition: 'transform 0.2s', transform: pickerOpen ? 'rotate(180deg)' : 'none' }} />
            )}
          </button>
          <button onClick={goToNext} className="rg-nav-btn rg-control" style={navBtnStyle}>
            <ChevronRight style={{ width: 20, height: 20 }} />
          </button>
          <MonthYearPicker
            open={pickerOpen}
            onClose={() => setPickerOpen(false)}
            currentMonth={month}
            onSelect={onMonthChange}
            locale={locale}
            anchorRef={monthLabelRef}
          />
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          {/* View mode toggle */}
          <div className="rg-view-toggle-desktop rg-control" style={{ display: 'flex', gap: 2, background: 'var(--rg-btn-bg)', borderRadius: 10, padding: 2, flexShrink: 0, alignItems: 'center' }}>
            <button onClick={() => switchMode('month')} style={viewBtnStyle(viewMode === 'month')} title={t('view.month', locale)}>
              <Calendar style={{ width: 13, height: 13 }} />
              <span className="rg-view-label">{t('view.month', locale)}</span>
            </button>
            <button onClick={() => switchMode('week')} style={viewBtnStyle(viewMode === 'week')} title={t('view.week', locale)}>
              <CalendarDays style={{ width: 13, height: 13 }} />
              <span className="rg-view-label">{t('view.week', locale)}</span>
            </button>
          </div>

          <button
            onClick={goToToday}
            className="rg-today-btn rg-control"
            style={{
              padding: '0 20px',
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
      </div>

      {/* Toolbar: search + view toggle (mobile) */}
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

        {/* View mode toggle — mobile only */}
        <div className="rg-view-toggle-mobile rg-control" style={{ display: 'none', gap: 2, background: 'var(--rg-btn-bg)', borderRadius: 10, padding: 2, flexShrink: 0, alignItems: 'center' }}>
          <button onClick={() => switchMode('month')} style={viewBtnStyle(viewMode === 'month')} title={t('view.month', locale)}>
            <Calendar style={{ width: 13, height: 13 }} />
          </button>
          <button onClick={() => switchMode('week')} style={viewBtnStyle(viewMode === 'week')} title={t('view.week', locale)}>
            <CalendarDays style={{ width: 13, height: 13 }} />
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

      {/* Day grid — swipeable */}
      <SwipeContainer
        onSwipeLeft={goToNext}
        onSwipeRight={goToPrev}
        contentKey={viewMode === 'week' ? weekStart : month}
      >
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
                isHighlighted={dateStr === highlightDate}
                seriesInfos={events.get(dateStr) || []}
                moreLabel={t('day.more', locale)}
                nextUpLabel={t('day.nextUp', locale)}
              />
            )
          })}
        </div>

        {/* Empty week message */}
        {viewMode === 'week' && weekDays.every(d => (events.get(format(d, 'yyyy-MM-dd')) || []).length === 0) && (
          <div style={{ textAlign: 'center', padding: '32px 0 16px', color: 'var(--rg-text3)', fontSize: 15 }}>
            {t('week.noRaces', locale)}
          </div>
        )}
      </SwipeContainer>
    </div>
  )
}
