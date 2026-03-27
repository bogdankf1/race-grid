'use client'

import { useMemo } from 'react'
import { useRouter } from 'next/navigation'
import { CalendarClock, ChevronDown } from 'lucide-react'
import { useLocalStorage } from '@/hooks/useLocalStorage'
import { ALL_SERIES } from '@/data/series-registry'
import { getLocalDate } from '@/lib/timezone'
import { t, type Locale } from '@/lib/i18n'

interface UpcomingRacesProps {
  selectedSeriesIds: string[]
  timezone: string
  locale: Locale
}

interface UpcomingEvent {
  seriesShortName: string
  seriesColor: string
  seriesTextColor: string
  eventId: string
  eventName: string
  circuit: string
  date: string        // local date yyyy-MM-dd
  startUtc: string    // first race session UTC
  sessionType: string
}

const RACE_TYPES = new Set(['race', 'endurance', 'sprint', 'stage'])

export function UpcomingRaces({ selectedSeriesIds, timezone, locale }: UpcomingRacesProps) {
  const [expanded, setExpanded] = useLocalStorage('race-grid:upcoming-open', false)
  const router = useRouter()

  const upcoming = useMemo(() => {
    const now = Date.now()
    const results: UpcomingEvent[] = []
    const selectedSeries = ALL_SERIES.filter(s => selectedSeriesIds.includes(s.id))
    const seen = new Set<string>() // one entry per event

    for (const series of selectedSeries) {
      for (const event of series.events) {
        // Find the first future race/endurance/sprint/stage session
        for (const session of event.sessions) {
          if (!RACE_TYPES.has(session.type)) continue
          const startMs = new Date(session.startUtc).getTime()
          if (startMs <= now) continue
          if (seen.has(event.id)) continue
          seen.add(event.id)

          results.push({
            seriesShortName: series.shortName,
            seriesColor: series.color,
            seriesTextColor: series.textColor,
            eventId: event.id,
            eventName: event.name,
            circuit: event.circuit,
            date: getLocalDate(session.startUtc, timezone),
            startUtc: session.startUtc,
            sessionType: session.type,
          })
          break
        }
      }
    }

    return results
      .sort((a, b) => new Date(a.startUtc).getTime() - new Date(b.startUtc).getTime())
      .slice(0, 7)
  }, [selectedSeriesIds, timezone])

  const formatDate = (dateStr: string) => {
    const d = new Date(dateStr + 'T00:00:00')
    const loc = locale === 'uk' ? 'uk-UA' : 'en-US'
    return d.toLocaleDateString(loc, { weekday: 'short', month: 'short', day: 'numeric' })
  }

  const formatCountdown = (utc: string) => {
    const ms = new Date(utc).getTime() - Date.now()
    if (ms <= 0) return null
    const days = Math.floor(ms / 86400000)
    const hours = Math.floor((ms % 86400000) / 3600000)
    if (locale === 'uk') {
      if (days > 0) return `${days}д ${hours}год`
      return `${hours}год`
    }
    if (days > 0) return `${days}d ${hours}h`
    return `${hours}h`
  }

  if (upcoming.length === 0) return null

  return (
    <div
      style={{
        marginBottom: 16,
        padding: '14px 16px',
        borderRadius: 14,
        background: 'var(--rg-surface)',
        border: '1px solid var(--rg-card-border)',
      }}
    >
      <button
        className="rg-disclosure"
        onClick={() => setExpanded(!expanded)}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          width: '100%',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          padding: 0,
        }}
      >
        <CalendarClock style={{ width: 14, height: 14, color: 'var(--rg-text3)', flexShrink: 0 }} />
        <span style={{ fontSize: 12, fontWeight: 600, color: 'var(--rg-text3)', textTransform: 'uppercase', letterSpacing: 1, flex: 1, textAlign: 'left' }}>
          {t('upcoming.title', locale)}
        </span>
        <ChevronDown
          style={{
            width: 14,
            height: 14,
            color: 'var(--rg-text3)',
            transition: 'transform 0.2s ease',
            transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)',
          }}
        />
      </button>

      {expanded && (
        <div style={{ marginTop: 10, display: 'flex', flexDirection: 'column', gap: 2 }}>
          {upcoming.map((ev) => (
            <button
              key={ev.eventId}
              onClick={() => router.push(`/day/${ev.date}?event=${ev.eventId}`)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                width: '100%',
                padding: '9px 8px',
                borderRadius: 8,
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                textAlign: 'left',
              }}
              onMouseEnter={e => (e.currentTarget.style.background = 'var(--rg-elevated)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
            >
              {/* Series chip */}
              <span
                style={{
                  padding: '3px 6px',
                  borderRadius: 4,
                  background: ev.seriesColor,
                  color: ev.seriesTextColor,
                  fontSize: 10,
                  fontWeight: 700,
                  flexShrink: 0,
                  lineHeight: 1,
                }}
              >
                {ev.seriesShortName}
              </span>

              {/* Event name */}
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--rg-text)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                  {ev.eventName}
                </div>
                <div style={{ fontSize: 11, color: 'var(--rg-text3)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                  {ev.circuit}
                </div>
              </div>

              {/* Date + countdown */}
              <div style={{ textAlign: 'right', flexShrink: 0 }}>
                <div style={{ fontSize: 12, fontWeight: 500, color: 'var(--rg-text2)' }}>
                  {formatDate(ev.date)}
                </div>
                {(() => {
                  const cd = formatCountdown(ev.startUtc)
                  return cd ? (
                    <div style={{ fontSize: 11, color: 'var(--rg-link)', fontWeight: 600 }}>
                      {cd}
                    </div>
                  ) : null
                })()}
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
