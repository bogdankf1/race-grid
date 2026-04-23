'use client'

import Link from 'next/link'
import { useMemo, useEffect, useRef, useState } from 'react'
import { SeriesConfig, RaceEvent, Session, SessionType } from '@/lib/types'
import { getSeriesForYear } from '@/data/series-registry'
import { getLocalDate, formatInTimezone, formatDuration } from '@/lib/timezone'
import { SeriesChip } from './SeriesChip'
import { getBroadcasts, detectCountry } from '@/data/broadcasts'
import { getCircuit, getCircuitTypeLabel } from '@/data/circuits'
import { CalendarExport } from './CalendarExport'
import { Countdown } from './Countdown'
import { RaceResult } from './RaceResult'
import { getResult } from '@/data/results'
import { WhereToWatchPopover } from './WhereToWatchPopover'
import { EyeOff, ChevronDown } from 'lucide-react'
import { t, type Locale } from '@/lib/i18n'

function SpoilerGuard({ locale, results }: { locale: Locale; results: { session: Session; result: NonNullable<ReturnType<typeof getResult>> }[] }) {
  const [revealed, setRevealed] = useState(false)
  if (revealed) return <RaceResult results={results} locale={locale} />
  return (
    <button
      onClick={() => setRevealed(true)}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
        width: '100%',
        marginTop: 12,
        padding: '16px',
        borderRadius: 12,
        background: 'var(--rg-surface)',
        border: '1px solid var(--rg-card-border)',
        color: 'var(--rg-text3)',
        fontSize: 13,
        cursor: 'pointer',
      }}
    >
      <EyeOff style={{ width: 15, height: 15 }} />
      {t('spoiler.reveal', locale)}
    </button>
  )
}

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
interface DayDetailProps { date: string; selectedSeriesIds: string[]; timezone: string; locale: Locale; highlightEventId?: string; spoilerFree?: boolean; visibleSessionTypes?: SessionType[] }

interface EventCardProps {
  series: SeriesConfig; event: RaceEvent; sessions: Session[]
  now: number; timezone: string; locale: Locale; spoilerFree?: boolean
}

function EventCard({ series, event, sessions, now, timezone, locale, spoilerFree }: EventCardProps) {
  const allFinished = sessions.every(s => {
    const endMs = new Date(s.startUtc).getTime() + (s.durationMinutes || 120) * 60000
    return now >= endMs
  })
  const [collapsed, setCollapsed] = useState(allFinished)

  return (
    <div
      data-event-id={event.id}
      style={{
        borderRadius: 16,
        background: 'var(--rg-surface)',
        border: '1px solid var(--rg-card-border)',
        borderLeft: `4px solid ${series.color}`,
        overflow: 'visible',
        opacity: allFinished ? 0.6 : 1,
        transition: 'opacity 0.2s ease',
      }}
    >
      {/* Header — always visible, clickable when collapsed */}
      <div
        className="rg-event-card-header"
        style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 16, cursor: allFinished ? 'pointer' : undefined }}
        onClick={allFinished ? () => setCollapsed(c => !c) : undefined}
      >
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: collapsed ? 0 : 8 }}>
            <Link href={`/series/${series.id}`} style={{ textDecoration: 'none' }} onClick={e => e.stopPropagation()}>
              <SeriesChip series={series} size="md" />
            </Link>
            {event.round && (
              <span style={{
                fontSize: 11, fontWeight: 600, color: 'var(--rg-text3)',
                padding: '3px 10px', borderRadius: 6,
                background: 'var(--rg-elevated)', border: '1px solid var(--rg-border)',
              }}>
                {t('progress.roundFull', locale)} {event.round}/{Math.max(series.events.length, ...series.events.map(e => e.round ?? 0))}
              </span>
            )}
            {collapsed && (
              <>
                <span style={{ fontSize: 12, color: 'var(--rg-text3)', fontWeight: 600, marginLeft: 'auto', flexShrink: 0 }}>
                  {t('session.finished', locale)}
                </span>
                <ChevronDown style={{ width: 14, height: 14, color: 'var(--rg-text3)', flexShrink: 0 }} />
              </>
            )}
          </div>
          {collapsed && (
            <div style={{ marginTop: 4 }}>
              <span style={{ fontWeight: 600, fontSize: 14, color: 'var(--rg-text)' }}>
                {event.name}
              </span>
              <span style={{ fontSize: 12, color: 'var(--rg-text3)', marginLeft: 8 }}>
                {sessions.map(s => `${SESSION_ICONS[s.type]} ${s.label}`).join(', ')}
              </span>
            </div>
          )}
          {!collapsed && (
            <>
              <h3 className="font-display rg-event-name" style={{ color: 'var(--rg-text)', margin: 0, marginBottom: 4, letterSpacing: 0.5 }}>
                {event.name}
              </h3>
              {(() => {
                const circuit = getCircuit(event.circuitId)
                if (!circuit) return null
                return (
                  <div className="rg-circuit-info" style={{ fontSize: 13, color: 'var(--rg-text3)' }}>
                    <Link href={`/circuits/${circuit.id}`} style={{ color: 'var(--rg-text3)', textDecoration: 'none' }} onClick={e => e.stopPropagation()}>
                      {countryFlag(circuit.countryCode)} {circuit.name}, {circuit.country}
                    </Link>
                    <span className="rg-circuit-sep" style={{ color: 'var(--rg-border)', margin: '0 6px' }}>·</span>
                    <span className="rg-circuit-details">
                      <span>{circuit.length}</span>
                      <span style={{ color: 'var(--rg-border)', margin: '0 6px' }}>·</span>
                      <span>{circuit.turns} {locale === 'uk' ? 'поворотів' : 'turns'}</span>
                      <span style={{ color: 'var(--rg-border)', margin: '0 6px' }}>·</span>
                      <span>{getCircuitTypeLabel(circuit.type, locale)}</span>
                    </span>
                  </div>
                )
              })()}
            </>
          )}
        </div>
        {!collapsed && (
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0 }}>
            <WhereToWatchPopover
              broadcasts={(() => {
                const country = detectCountry(timezone)
                return country ? getBroadcasts(series.id, country) : []
              })()}
              locale={locale}
            />
            <CalendarExport event={event} sessions={sessions} seriesName={series.name} seriesId={series.id} seriesEvents={series.events} locale={locale} />
          </div>
        )}
      </div>

      {/* Sessions + results — hidden when collapsed */}
      {!collapsed && (
        <div className="rg-event-card-sessions">
          {sessions.map((session) => {
            const startMs = new Date(session.startUtc).getTime()
            const endMs = startMs + (session.durationMinutes || 120) * 60000
            const isLive = now >= startMs && now < endMs
            const isFinished = now >= endMs

            return (
              <div key={session.startUtc}>
              <div
                className="rg-session-row"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 14,
                  padding: '8px 14px',
                  borderRadius: 12,
                  background: isLive ? 'var(--rg-surface)' : 'var(--rg-elevated)',
                  opacity: isFinished ? 0.5 : 1,
                  borderLeft: isLive ? '3px solid #dc2626' : undefined,
                }}
              >
                <span style={{ fontSize: 16, width: 24, textAlign: 'center', flexShrink: 0 }}>
                  {SESSION_ICONS[session.type]}
                </span>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
                    <span style={{ fontWeight: 600, fontSize: 14, color: 'var(--rg-text)' }}>
                      {session.label}
                    </span>
                  </div>
                </div>
                <div className="rg-session-time" style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
                  <span className="rg-session-time-start" style={{ fontWeight: 600, color: 'var(--rg-text)', textAlign: 'right' }}>
                    {formatInTimezone(session.startUtc, timezone, 'time', locale)}
                  </span>
                  {session.durationMinutes && (
                    <>
                      <span className="rg-session-time-sep" style={{ color: 'var(--rg-border)' }}>|</span>
                      <span className="rg-session-time-dur" style={{ color: 'var(--rg-text3)', textAlign: 'center' }}>
                        {formatDuration(session.durationMinutes)}
                      </span>
                    </>
                  )}
                  <span className="rg-session-time-sep" style={{ color: 'var(--rg-border)' }}>|</span>
                  <span className="rg-session-time-status" style={{ textAlign: 'center' }}>
                    {isLive ? (
                      <span className="rg-live-badge">{t('session.live', locale)}</span>
                    ) : isFinished ? (
                      <span style={{ color: 'var(--rg-text3)', fontWeight: 600 }}>
                        {t('session.finished', locale)}
                      </span>
                    ) : (
                      <Countdown targetUtc={session.startUtc} locale={locale} />
                    )}
                  </span>
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
            if (spoilerFree) return <SpoilerGuard locale={locale} results={sessionResults} />
            return <RaceResult results={sessionResults} locale={locale} />
          })()}
        </div>
      )}
    </div>
  )
}

export function DayDetail({ date, selectedSeriesIds, timezone, locale, highlightEventId, spoilerFree, visibleSessionTypes }: DayDetailProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!highlightEventId || !containerRef.current) return

    const timer = setTimeout(() => {
      const el = containerRef.current?.querySelector(`[data-event-id="${highlightEventId}"]`) as HTMLElement | null
      if (!el) return

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

  const [now, setNow] = useState(Date.now())
  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 30_000)
    return () => clearInterval(id)
  }, [])

  const dayEvents = useMemo(() => {
    const GAP_MS = 60 * 60 * 1000 // 1 hour — sessions farther apart get split into separate cards
    const results: DayEventInfo[] = []
    const yearSeries = getSeriesForYear(parseInt(date.slice(0, 4)))
    const selectedSeries = yearSeries.filter(s => selectedSeriesIds.includes(s.id))
    for (const series of selectedSeries) {
      for (const event of series.events) {
        const daySessions = event.sessions
          .filter(s => getLocalDate(s.startUtc, timezone) === date && (!visibleSessionTypes || visibleSessionTypes.includes(s.type)))
          .sort((a, b) => new Date(a.startUtc).getTime() - new Date(b.startUtc).getTime())
        if (daySessions.length === 0) continue

        // Split into groups of consecutive sessions (gap < 2h between end of one and start of next)
        const groups: Session[][] = [[daySessions[0]]]
        for (let j = 1; j < daySessions.length; j++) {
          const prev = daySessions[j - 1]
          const prevEnd = new Date(prev.startUtc).getTime() + (prev.durationMinutes || 120) * 60000
          const currStart = new Date(daySessions[j].startUtc).getTime()
          if (currStart - prevEnd >= GAP_MS) {
            groups.push([daySessions[j]])
          } else {
            groups[groups.length - 1].push(daySessions[j])
          }
        }

        for (const group of groups) {
          results.push({ series, event, sessions: group })
        }
      }
    }
    return results.sort((a, b) => new Date(a.sessions[0].startUtc).getTime() - new Date(b.sessions[0].startUtc).getTime())
  }, [date, selectedSeriesIds, timezone, visibleSessionTypes])

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
    <div ref={containerRef} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      {dayEvents.map(({ series, event, sessions }, idx) => (
        <EventCard
          key={`${series.id}-${event.id}-${idx}`}
          series={series}
          event={event}
          sessions={sessions}
          now={now}
          timezone={timezone}
          locale={locale}
          spoilerFree={spoilerFree}
        />
      ))}
    </div>
  )
}
