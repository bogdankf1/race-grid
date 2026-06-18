'use client'

import { useEffect, useMemo, useRef } from 'react'
import Link from 'next/link'
import { format } from 'date-fns'
import type { DaySeriesInfo } from '@/hooks/useCalendarEvents'
import { t, type Locale } from '@/lib/i18n'

interface AgendaFeedProps {
  month: string // yyyy-MM
  events: Map<string, DaySeriesInfo[]>
  locale: Locale
}

function cleanEventName(name: string): string {
  return name
    .replace(/Grand Prix/gi, 'GP')
    .replace(/\d+\.\s*/g, '')
    .replace(/^NLS\s*\d+\s*[—–-]\s*/i, '')
}

/** V2 home default view — race days of the month as a vertical timeline. */
export function AgendaFeed({ month, events, locale }: AgendaFeedProps) {
  const todayIso = format(new Date(), 'yyyy-MM-dd')
  const loc = locale === 'uk' ? 'uk-UA' : 'en-US'

  const days = useMemo(() => {
    return Array.from(events.keys())
      .filter(d => d.startsWith(month) && (events.get(d)?.length ?? 0) > 0)
      .sort()
  }, [events, month])

  // On the current month, start at today (or the next race day) instead of the 1st
  const listRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (!month.startsWith(todayIso.slice(0, 7))) return
    const target = days.find(d => d >= todayIso)
    if (!target || target === days[0]) return
    listRef.current
      ?.querySelector(`[data-agenda-date="${target}"]`)
      ?.scrollIntoView({ behavior: 'instant', block: 'start' })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [month])

  if (days.length === 0) {
    return <div className="v2-agenda-empty">{t('v2.noRaces', locale)}</div>
  }

  return (
    <div className="v2-agenda" ref={listRef}>
      {days.map(dateStr => {
        const date = new Date(dateStr + 'T00:00:00')
        const infos = events.get(dateStr)!
        const isToday = dateStr === todayIso
        const isPast = !isToday && dateStr < todayIso

        return (
          <div
            key={dateStr}
            data-agenda-date={dateStr}
            className={`v2-agenda-day${isToday ? ' is-today' : ''}${isPast ? ' is-past' : ''}`}
          >
            <Link href={`/day/${dateStr}`} className="v2-agenda-date">
              <span className="font-display v2-agenda-daynum">{date.getDate()}</span>
              <span className="v2-agenda-weekday">
                {date.toLocaleDateString(loc, { weekday: 'short' })}
              </span>
              {isToday && <span className="v2-agenda-today-badge">{t('nav.today', locale)}</span>}
            </Link>

            <div className="v2-agenda-events">
              {infos.map(info => (
                <Link
                  key={info.series.id}
                  href={`/day/${dateStr}?event=${info.eventIds[0]}`}
                  className="v2-agenda-row"
                >
                  <span
                    className="v2-agenda-chip"
                    style={{ background: info.series.color, color: info.series.textColor }}
                  >
                    {info.series.shortName}
                  </span>
                  <span className="v2-agenda-name">
                    {info.eventNames.map(cleanEventName).join(' · ')}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )
      })}
    </div>
  )
}
