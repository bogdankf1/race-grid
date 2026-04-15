'use client'

import Link from 'next/link'
import { DaySeriesInfo } from '@/hooks/useCalendarEvents'
import { type Locale } from '@/lib/i18n'

interface MobileEventListProps {
  days: { dateStr: string; day: Date; isCurrentMonth: boolean; isToday: boolean; isNextRaceDay: boolean; isHighlighted: boolean }[]
  events: Map<string, DaySeriesInfo[]>
  locale: Locale
}

function cleanEventName(name: string): string {
  return name
    .replace(/Grand Prix/gi, 'GP')
    .replace(/\d+\.\s*/g, '')
    .replace(/^NLS\s*\d+\s*[—–-]\s*/i, '')
}

function formatWeekday(date: Date, locale: Locale): string {
  const loc = locale === 'uk' ? 'uk-UA' : 'en-US'
  return date.toLocaleDateString(loc, { weekday: 'short' })
}

function formatMonthDay(date: Date, locale: Locale): string {
  const loc = locale === 'uk' ? 'uk-UA' : 'en-US'
  return date.toLocaleDateString(loc, { month: 'short', day: 'numeric' })
}

export function MobileEventList({ days, events, locale }: MobileEventListProps) {
  const today = new Date().toISOString().slice(0, 10)

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
      {days.filter(d => d.isCurrentMonth).map(({ dateStr, day, isToday, isNextRaceDay, isHighlighted }) => {
        const infos = events.get(dateStr) || []
        const isPast = !isToday && dateStr < today
        const hasEvents = infos.length > 0

        // Empty day — compact single line
        if (!hasEvents) {
          return (
            <Link
              key={dateStr}
              href={`/day/${dateStr}`}
              data-mobile-date={dateStr}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                padding: '6px 12px',
                textDecoration: 'none',
                color: 'inherit',
                opacity: isPast ? 0.35 : 0.6,
                transition: 'opacity 0.2s',
              }}
            >
              <span style={{
                fontSize: 13,
                fontWeight: isToday ? 700 : 400,
                color: isToday ? 'var(--rg-text)' : 'var(--rg-text3)',
              }}>
                {formatMonthDay(day, locale)}
              </span>
              <span style={{
                fontSize: 11,
                color: 'var(--rg-text3)',
                fontWeight: 400,
              }}>
                {formatWeekday(day, locale)}
              </span>
              {isToday && (
                <span style={{
                  fontSize: 9,
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: 0.5,
                  color: 'var(--rg-text3)',
                  background: 'var(--rg-elevated)',
                  padding: '2px 6px',
                  borderRadius: 4,
                  border: '1px solid var(--rg-border)',
                }}>
                  today
                </span>
              )}
            </Link>
          )
        }

        // Day with events — card style
        const accentColor = isNextRaceDay
          ? 'var(--rg-link)'
          : isHighlighted
            ? 'var(--rg-success)'
            : undefined

        return (
          <div
            key={dateStr}
            data-mobile-date={dateStr}
            style={{
              opacity: isPast ? 0.45 : 1,
              transition: 'opacity 0.2s',
              background: 'var(--rg-surface)',
              borderRadius: 12,
              border: `1px solid ${accentColor || 'var(--rg-card-border)'}`,
              boxShadow: isNextRaceDay
                ? '0 0 12px rgba(122,179,255,0.15)'
                : isHighlighted
                  ? '0 0 12px rgba(74,222,128,0.15)'
                  : undefined,
              overflow: 'hidden',
            }}
          >
            {/* Date header */}
            <Link
              href={`/day/${dateStr}`}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                padding: '10px 14px 6px',
                textDecoration: 'none',
                color: 'inherit',
              }}
            >
              <span style={{
                fontSize: 20,
                fontWeight: 700,
                color: isNextRaceDay
                  ? 'var(--rg-link)'
                  : isToday
                    ? 'var(--rg-text)'
                    : 'var(--rg-text)',
                lineHeight: 1,
              }}>
                {day.getDate()}
              </span>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                <span style={{
                  fontSize: 12,
                  fontWeight: 600,
                  color: isNextRaceDay ? 'var(--rg-link)' : 'var(--rg-text2)',
                  lineHeight: 1.2,
                }}>
                  {formatWeekday(day, locale)}
                </span>
                <span style={{
                  fontSize: 10,
                  color: 'var(--rg-text3)',
                  lineHeight: 1.2,
                }}>
                  {day.toLocaleDateString(locale === 'uk' ? 'uk-UA' : 'en-US', { month: 'short' })}
                </span>
              </div>
              {isToday && (
                <span style={{
                  fontSize: 9,
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: 0.5,
                  color: 'var(--rg-text3)',
                  background: 'var(--rg-elevated)',
                  padding: '2px 6px',
                  borderRadius: 4,
                  border: '1px solid var(--rg-border)',
                  marginLeft: 'auto',
                }}>
                  today
                </span>
              )}
              {isNextRaceDay && !isToday && (
                <span style={{
                  fontSize: 9,
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: 0.5,
                  color: 'var(--rg-link)',
                  marginLeft: 'auto',
                }}>
                  next up
                </span>
              )}
            </Link>

            {/* Event rows */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 3, padding: '2px 10px 10px' }}>
              {infos.map((info) => (
                <Link
                  key={info.series.id}
                  href={`/day/${dateStr}?event=${info.eventIds[0]}`}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 0,
                    textDecoration: 'none',
                    color: 'inherit',
                    borderRadius: 8,
                    overflow: 'hidden',
                    background: 'var(--rg-bg)',
                  }}
                >
                  <span
                    style={{
                      padding: '7px 8px',
                      background: info.series.color,
                      color: info.series.textColor,
                      fontSize: 10,
                      fontWeight: 700,
                      whiteSpace: 'nowrap',
                      flexShrink: 0,
                      lineHeight: 1,
                    }}
                  >
                    {info.series.shortName}
                  </span>
                  <span
                    style={{
                      padding: '7px 10px',
                      color: 'var(--rg-text)',
                      fontSize: 13,
                      fontWeight: 500,
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap',
                      minWidth: 0,
                      flex: 1,
                      lineHeight: 1,
                    }}
                  >
                    {cleanEventName(info.eventNames[0])}
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
