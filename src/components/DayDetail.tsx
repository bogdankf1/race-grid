'use client'

import { useMemo } from 'react'
import { SeriesConfig, RaceEvent, Session, SessionType } from '@/lib/types'
import { ALL_SERIES } from '@/data/series-registry'
import { getLocalDate, formatInTimezone, formatDuration } from '@/lib/timezone'
import { SeriesChip } from './SeriesChip'
import { SeriesLogo } from './SeriesLogo'
import { getBroadcasts, detectCountry } from '@/data/broadcasts'
import { getCircuitInfo, getCircuitTypeLabel } from '@/data/circuits'
import { CalendarExport } from './CalendarExport'
import { Countdown } from './Countdown'
import { MapPin, Ruler, CornerDownRight } from 'lucide-react'
import { t, type Locale } from '@/lib/i18n'
import { Tv } from 'lucide-react'

const SESSION_ICONS: Record<SessionType, string> = {
  race: '\u{1F3C1}', qualifying: '\u23F1', sprint: '\u26A1',
  sprint_qualifying: '\u26A1', hyperpole: '\u{1F3AF}',
  practice: '\u{1F527}', warmup: '\u{1F527}',
  stage: '\u{1F5FA}', shakedown: '\u{1F5FA}', endurance: '\u{1F3C1}',
}

function sessionLabel(type: SessionType, locale: Locale): string {
  return t(`session.${type}`, locale)
}

function countryFlag(countryCode: string): string {
  return countryCode.toUpperCase().split('')
    .map(c => String.fromCodePoint(0x1f1e6 + c.charCodeAt(0) - 65)).join('')
}

interface DayEventInfo { series: SeriesConfig; event: RaceEvent; sessions: Session[] }
interface DayDetailProps { date: string; selectedSeriesIds: string[]; timezone: string; locale: Locale }

export function DayDetail({ date, selectedSeriesIds, timezone, locale }: DayDetailProps) {
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
        <p style={{ color: 'var(--rg-text2)', fontSize: 18 }}>{t('day.noRaces', locale)}</p>
        <p style={{ color: 'var(--rg-text3)', fontSize: 14, marginTop: 6 }}>{t('day.offDay', locale)}</p>
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
            background: 'var(--rg-surface)',
            border: '1px solid var(--rg-card-border)',
            borderLeft: `4px solid ${series.color}`,
            overflow: 'hidden',
          }}
        >
          <div className="rg-event-card-header" style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 16 }}>
            <div style={{ flex: 1, minWidth: 0 }}>
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
              <h3 className="font-display rg-event-name" style={{ color: 'var(--rg-text)', marginBottom: 4, letterSpacing: 0.5 }}>
                {event.name}
              </h3>
              <p style={{ fontSize: 14, color: 'var(--rg-text3)' }}>
                {countryFlag(event.countryCode)} {event.circuit}, {event.country}
              </p>

              {/* Circuit info */}
              {(() => {
                const circuit = getCircuitInfo(event.circuit)
                if (!circuit) return null
                return (
                  <div
                    style={{
                      display: 'flex',
                      gap: 16,
                      marginTop: 12,
                      flexWrap: 'wrap',
                    }}
                  >
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5, fontSize: 12, color: 'var(--rg-text3)' }}>
                      <Ruler style={{ width: 13, height: 13 }} />
                      {circuit.length}
                    </span>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5, fontSize: 12, color: 'var(--rg-text3)' }}>
                      <CornerDownRight style={{ width: 13, height: 13 }} />
                      {circuit.turns} {locale === 'uk' ? 'поворотів' : 'turns'}
                    </span>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5, fontSize: 12, color: 'var(--rg-text3)' }}>
                      <MapPin style={{ width: 13, height: 13 }} />
                      {getCircuitTypeLabel(circuit.type, locale)}
                    </span>
                  </div>
                )
              })()}
            </div>
            <CalendarExport event={event} sessions={sessions} seriesName={series.name} locale={locale} />
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
                  background: 'var(--rg-elevated)',
                }}
              >
                <span style={{ fontSize: 18, width: 28, textAlign: 'center', flexShrink: 0 }}>
                  {SESSION_ICONS[session.type]}
                </span>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
                    <span style={{ fontWeight: 600, fontSize: 14, color: 'var(--rg-text)' }}>
                      {session.label}
                    </span>
                    <span style={{ fontSize: 11, color: 'var(--rg-text3)', padding: '3px 8px', borderRadius: 6, background: 'var(--rg-surface)', fontWeight: 500 }}>
                      {sessionLabel(session.type, locale)}
                    </span>
                  </div>
                </div>
                <div className="rg-session-time" style={{ textAlign: 'right', flexShrink: 0 }}>
                  <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--rg-text)' }}>
                    {formatInTimezone(session.startUtc, timezone)}
                  </div>
                  {session.durationMinutes && (
                    <div style={{ fontSize: 12, color: 'var(--rg-text3)', marginTop: 2 }}>
                      {formatDuration(session.durationMinutes)}
                    </div>
                  )}
                  <Countdown targetUtc={session.startUtc} locale={locale} />
                </div>
              </div>
            ))}

            {/* Where to watch */}
            {(() => {
              const country = detectCountry(timezone)
              if (!country) return null
              const broadcasts = getBroadcasts(series.id, country)
              if (broadcasts.length === 0) return null
              return (
                <div
                  style={{
                    marginTop: 12,
                    padding: '14px 16px',
                    borderRadius: 12,
                    background: 'var(--rg-surface)',
                    border: '1px solid var(--rg-card-border)',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
                    <Tv style={{ width: 14, height: 14, color: 'var(--rg-text3)' }} />
                    <span style={{ fontSize: 12, fontWeight: 600, color: 'var(--rg-text3)', textTransform: 'uppercase', letterSpacing: 1 }}>
                      {t('watch.title', locale)}
                    </span>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                    {broadcasts.map((b, i) => (
                      <div
                        key={i}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 10,
                          fontSize: 13,
                        }}
                      >
                        <span style={{ fontWeight: 600, color: 'var(--rg-chip-text)', flexShrink: 0 }}>
                          {b.url ? (
                            <a
                              href={b.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              style={{ color: 'var(--rg-link)', textDecoration: 'none' }}
                            >
                              {b.name}
                            </a>
                          ) : (
                            b.name
                          )}
                        </span>
                        {b.note && (
                          <span style={{ color: 'var(--rg-text3)', fontSize: 12 }}>
                            — {b.note}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )
            })()}
          </div>
        </div>
      ))}
    </div>
  )
}
