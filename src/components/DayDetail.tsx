'use client'

import { useMemo, useEffect, useRef, useState } from 'react'
import { SeriesConfig, RaceEvent, Session, SessionType } from '@/lib/types'
import { ALL_SERIES } from '@/data/series-registry'
import { getLocalDate, formatInTimezone, formatDuration } from '@/lib/timezone'
import { SeriesChip } from './SeriesChip'
import { SeriesLogo } from './SeriesLogo'
import { getBroadcasts, detectCountry } from '@/data/broadcasts'
import { getCircuitInfo, getCircuitTypeLabel } from '@/data/circuits'
import { CalendarExport } from './CalendarExport'
import { Countdown } from './Countdown'
import { RaceResult } from './RaceResult'
import { getResult } from '@/data/results'
import { WhereToWatch } from './WhereToWatch'
import { MapPin, Ruler, CornerDownRight } from 'lucide-react'
import { t, type Locale } from '@/lib/i18n'

const SESSION_ICONS: Record<SessionType, string> = {
  race: '\u{1F3C1}', qualifying: '\u23F1', sprint: '\u26A1',
  sprint_qualifying: '\u26A1', hyperpole: '\u{1F3AF}',
  practice: '\u{1F527}', warmup: '\u{1F527}',
  stage: '\u{1F5FA}', shakedown: '\u{1F5FA}', endurance: '\u{1F3C1}',
}

function countryFlag(countryCode: string): string {
  return countryCode.toUpperCase().split('')
    .map(c => String.fromCodePoint(0x1f1e6 + c.charCodeAt(0) - 65)).join('')
}

interface DayEventInfo { series: SeriesConfig; event: RaceEvent; sessions: Session[] }
interface DayDetailProps { date: string; selectedSeriesIds: string[]; timezone: string; locale: Locale; highlightEventId?: string }

export function DayDetail({ date, selectedSeriesIds, timezone, locale, highlightEventId }: DayDetailProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!highlightEventId || !containerRef.current) return

    // Wait for render
    const timer = setTimeout(() => {
      const el = containerRef.current?.querySelector(`[data-event-id="${highlightEventId}"]`) as HTMLElement | null
      if (!el) return

      // Dim all other cards, keep the target fully visible
      const allCards = containerRef.current?.children
      if (allCards) {
        for (const card of Array.from(allCards) as HTMLElement[]) {
          card.style.transition = 'opacity 0.3s ease'
          card.style.opacity = card === el ? '1' : '0.2'
        }
      }
      el.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
      setTimeout(() => {
        if (!allCards) return
        for (const card of Array.from(allCards) as HTMLElement[]) {
          card.style.opacity = '1'
        }
      }, 2500)
    }, 100)

    return () => clearTimeout(timer)
  }, [highlightEventId])
  // Tick every 30s for LIVE/Finished status
  const [now, setNow] = useState(Date.now())
  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 30_000)
    return () => clearInterval(id)
  }, [])

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
    <div ref={containerRef} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
      {dayEvents.map(({ series, event, sessions }) => (
        <div
          key={`${series.id}-${event.id}`}
          data-event-id={event.id}
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
                {event.round && (
                  <span style={{
                    fontSize: 11, fontWeight: 600, color: 'var(--rg-text3)',
                    padding: '3px 10px', borderRadius: 6,
                    background: 'var(--rg-elevated)', border: '1px solid var(--rg-border)',
                  }}>
                    {t('progress.roundFull', locale)} {event.round}/{series.events.length}
                  </span>
                )}
                <div
                  style={{
                    height: 28,
                    display: 'flex',
                    alignItems: 'center',
                    borderRadius: 6,
                    overflow: 'hidden',
                    padding: series.logoBgWhite ? '2px 8px' : 0,
                    background: series.logoBgWhite ? '#fff' : 'transparent',
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
            <CalendarExport event={event} sessions={sessions} seriesName={series.name} seriesId={series.id} seriesEvents={series.events} locale={locale} />
          </div>

          <div className="rg-event-card-sessions">
            {sessions.map((session, i) => {
              const startMs = new Date(session.startUtc).getTime()
              const endMs = startMs + (session.durationMinutes || 120) * 60000
              const isLive = now >= startMs && now < endMs
              const isFinished = now >= endMs

              return (
                <div key={`${session.label}-${i}`}>
                <div
                  className="rg-session-row"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 14,
                    padding: '12px 16px',
                    borderRadius: 12,
                    background: isLive ? 'var(--rg-surface)' : 'var(--rg-elevated)',
                    opacity: isFinished ? 0.5 : 1,
                    borderLeft: isLive ? '3px solid #dc2626' : undefined,
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
                      {isLive && <span className="rg-live-badge">{t('session.live', locale)}</span>}
                    </div>
                  </div>
                  <div className="rg-session-time" style={{ textAlign: 'right', flexShrink: 0 }}>
                    <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--rg-text)' }}>
                      {formatInTimezone(session.startUtc, timezone, 'time', locale)}
                    </div>
                    {session.durationMinutes && (
                      <div style={{ fontSize: 12, color: 'var(--rg-text3)', marginTop: 2 }}>
                        {formatDuration(session.durationMinutes)}
                      </div>
                    )}
                    {isFinished ? (
                      <div style={{ fontSize: 11, color: 'var(--rg-text3)', marginTop: 2, fontWeight: 600 }}>
                        {t('session.finished', locale)}
                      </div>
                    ) : (
                      <Countdown targetUtc={session.startUtc} locale={locale} />
                    )}
                  </div>
                </div>
                </div>
              )
            })}

            {/* Results */}
            {(() => {
              const resultTypes: SessionType[] = ['race', 'endurance', 'sprint', 'sprint_qualifying', 'qualifying', 'hyperpole', 'stage']
              const seen = new Set<SessionType>()
              const sessionResults = sessions
                .filter(s => resultTypes.includes(s.type) && now >= new Date(s.startUtc).getTime() + (s.durationMinutes || 120) * 60000)
                .map(s => ({ session: s, result: getResult(event.id, s.type) }))
                .filter(r => {
                  if (!r.result || seen.has(r.session.type)) return false
                  seen.add(r.session.type)
                  return true
                }) as { session: Session; result: NonNullable<ReturnType<typeof getResult>> }[]
              if (sessionResults.length === 0) return null
              return <RaceResult results={sessionResults} locale={locale} />
            })()}

            {/* Where to watch */}
            <WhereToWatch
              broadcasts={(() => {
                const country = detectCountry(timezone)
                return country ? getBroadcasts(series.id, country) : []
              })()}
              locale={locale}
            />
          </div>
        </div>
      ))}
    </div>
  )
}
