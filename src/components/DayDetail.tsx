'use client'

import { useMemo } from 'react'
import { SeriesConfig, RaceEvent, Session, SessionType } from '@/lib/types'
import { ALL_SERIES } from '@/data/series-registry'
import { getLocalDate, formatInTimezone, formatDuration } from '@/lib/timezone'
import { SeriesChip } from './SeriesChip'
import { SeriesLogo } from './SeriesLogo'

const SESSION_ICONS: Record<SessionType, string> = {
  race: '\u{1F3C1}', qualifying: '\u23F1', sprint: '\u26A1',
  sprint_qualifying: '\u26A1', hyperpole: '\u{1F3AF}',
  practice: '\u{1F527}', warmup: '\u{1F527}',
  stage: '\u{1F5FA}', shakedown: '\u{1F5FA}', endurance: '\u{1F3C1}',
}

const SESSION_LABELS: Record<SessionType, string> = {
  race: 'Race', qualifying: 'Qualifying', sprint: 'Sprint',
  sprint_qualifying: 'Sprint Quali', hyperpole: 'Hyperpole',
  practice: 'Practice', warmup: 'Warmup', stage: 'Stage',
  shakedown: 'Shakedown', endurance: 'Endurance',
}

function countryFlag(countryCode: string): string {
  return countryCode.toUpperCase().split('')
    .map(c => String.fromCodePoint(0x1f1e6 + c.charCodeAt(0) - 65)).join('')
}

interface DayEventInfo { series: SeriesConfig; event: RaceEvent; sessions: Session[] }
interface DayDetailProps { date: string; selectedSeriesIds: string[]; timezone: string }

export function DayDetail({ date, selectedSeriesIds, timezone }: DayDetailProps) {
  const dayEvents = useMemo(() => {
    const results: DayEventInfo[] = []
    const selectedSeries = ALL_SERIES.filter(s => selectedSeriesIds.includes(s.id))
    for (const series of selectedSeries) {
      for (const event of series.events) {
        const daySessions = event.sessions.filter(s => getLocalDate(s.startUtc, timezone) === date)
        if (daySessions.length > 0) {
          results.push({
            series, event,
            sessions: daySessions.sort((a, b) => new Date(a.startUtc).getTime() - new Date(b.startUtc).getTime()),
          })
        }
      }
    }
    return results.sort((a, b) => new Date(a.sessions[0].startUtc).getTime() - new Date(b.sessions[0].startUtc).getTime())
  }, [date, selectedSeriesIds, timezone])

  if (dayEvents.length === 0) {
    return (
      <div style={{ textAlign: 'center', padding: '80px 0' }}>
        <div style={{ fontSize: 40, marginBottom: 16 }}>{'\u{1F3CE}'}</div>
        <p style={{ color: '#999', fontSize: 18 }}>No races scheduled.</p>
        <p style={{ color: '#666', fontSize: 14, marginTop: 6 }}>Enjoy the off day!</p>
      </div>
    )
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
      {dayEvents.map(({ series, event, sessions }) => (
        <div
          key={`${series.id}-${event.id}`}
          style={{
            borderRadius: 16,
            background: '#1c1c30',
            border: '1px solid #2a2a42',
            borderLeft: `4px solid ${series.color}`,
            overflow: 'hidden',
          }}
        >
          <div className="rg-event-card-header">
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
              <SeriesChip series={series} size="md" />
              <div
                style={{
                  height: 28,
                  display: 'flex',
                  alignItems: 'center',
                  borderRadius: 6,
                  overflow: 'hidden',
                  padding: ['wec', 'nls', 'wrc', 'imsa', 'dtm'].includes(series.id) ? '2px 8px' : 0,
                  background: ['wec', 'nls', 'wrc', 'imsa', 'dtm'].includes(series.id) ? '#fff' : 'transparent',
                }}
              >
                <SeriesLogo seriesId={series.id} className="" />
              </div>
            </div>
            <h3 className="font-display rg-event-name" style={{ color: '#eee', marginBottom: 4, letterSpacing: 0.5 }}>
              {event.name}
            </h3>
            <p style={{ fontSize: 14, color: '#888' }}>
              {countryFlag(event.countryCode)} {event.circuit}, {event.country}
            </p>
          </div>

          <div className="rg-event-card-sessions">
            {sessions.map((session, i) => (
              <div
                key={`${session.label}-${i}`}
                className="rg-session-row"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 14,
                  padding: '12px 16px',
                  borderRadius: 12,
                  background: '#232340',
                }}
              >
                <span style={{ fontSize: 18, width: 28, textAlign: 'center', flexShrink: 0 }}>
                  {SESSION_ICONS[session.type]}
                </span>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
                    <span style={{ fontWeight: 600, fontSize: 14, color: '#ddd' }}>
                      {session.label}
                    </span>
                    <span style={{ fontSize: 11, color: '#777', padding: '3px 8px', borderRadius: 6, background: '#1c1c30', fontWeight: 500 }}>
                      {SESSION_LABELS[session.type]}
                    </span>
                  </div>
                </div>
                <div className="rg-session-time" style={{ textAlign: 'right', flexShrink: 0 }}>
                  <div style={{ fontSize: 14, fontWeight: 600, color: '#eee' }}>
                    {formatInTimezone(session.startUtc, timezone)}
                  </div>
                  {session.durationMinutes && (
                    <div style={{ fontSize: 12, color: '#666', marginTop: 2 }}>
                      {formatDuration(session.durationMinutes)}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
