'use client'

import { useMemo } from 'react'
import { useRouter } from 'next/navigation'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import {
  addMonths, eachDayOfInterval, endOfMonth, endOfWeek,
  format, isSameMonth, startOfMonth, startOfWeek, subMonths,
} from 'date-fns'
import type { DaySeriesInfo } from '@/hooks/useCalendarEvents'
import { formatMonthLocale, t, type Locale } from '@/lib/i18n'

interface MiniMonthProps {
  month: string // yyyy-MM
  onMonthChange: (month: string) => void
  events: Map<string, DaySeriesInfo[]>
  locale: Locale
}

const WEEKDAY_KEYS = ['weekday.mon', 'weekday.tue', 'weekday.wed', 'weekday.thu', 'weekday.fri', 'weekday.sat', 'weekday.sun']

/** V2 sidebar — compact month with series-colored dots; click a day to open it. */
export function MiniMonth({ month, onMonthChange, events, locale }: MiniMonthProps) {
  const router = useRouter()
  const todayIso = format(new Date(), 'yyyy-MM-dd')

  const currentDate = useMemo(() => {
    const [year, m] = month.split('-').map(Number)
    return new Date(year, m - 1, 1)
  }, [month])

  const days = useMemo(() => {
    const start = startOfWeek(startOfMonth(currentDate), { weekStartsOn: 1 })
    const end = endOfWeek(endOfMonth(currentDate), { weekStartsOn: 1 })
    return eachDayOfInterval({ start, end })
  }, [currentDate])

  return (
    <div className="v2-mini">
      <div className="v2-mini-head">
        <span className="font-display v2-mini-label">{formatMonthLocale(currentDate, locale)}</span>
        <div className="v2-mini-nav">
          <button
            onClick={() => onMonthChange(format(subMonths(currentDate, 1), 'yyyy-MM'))}
            aria-label={t('nav.prev', locale)}
          >
            <ChevronLeft style={{ width: 15, height: 15 }} />
          </button>
          <button
            onClick={() => onMonthChange(format(addMonths(currentDate, 1), 'yyyy-MM'))}
            aria-label={t('nav.next', locale)}
          >
            <ChevronRight style={{ width: 15, height: 15 }} />
          </button>
        </div>
      </div>

      <div className="v2-mini-grid">
        {WEEKDAY_KEYS.map(key => (
          <span key={key} className="v2-mini-wd">{t(key, locale).slice(0, 1)}</span>
        ))}
        {days.map(day => {
          const dateStr = format(day, 'yyyy-MM-dd')
          const inMonth = isSameMonth(day, currentDate)
          const infos = inMonth ? (events.get(dateStr) || []) : []
          const isToday = dateStr === todayIso
          return (
            <button
              key={dateStr}
              className={`v2-mini-day${isToday ? ' is-today' : ''}${!inMonth ? ' is-out' : ''}${infos.length > 0 ? ' has-events' : ''}`}
              onClick={() => inMonth && router.push(`/day/${dateStr}`)}
              tabIndex={inMonth ? 0 : -1}
            >
              <span className="v2-mini-num">{day.getDate()}</span>
              {infos.length > 0 && (
                <span className="v2-mini-dots">
                  {infos.slice(0, 3).map(info => (
                    <span key={info.series.id} style={{ background: info.series.color }} />
                  ))}
                </span>
              )}
            </button>
          )
        })}
      </div>
    </div>
  )
}
