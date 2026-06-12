'use client'

import { useEffect, useMemo, useState } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { ALL_SERIES } from '@/data/series-registry'
import { getCircuit } from '@/data/circuits'
import { formatInTimezone, getLocalDate } from '@/lib/timezone'
import { t, type Locale } from '@/lib/i18n'
import type { RaceEvent, SeriesConfig, Session } from '@/lib/types'

interface HeroNextRaceProps {
  selectedSeriesIds: string[]
  timezone: string
  locale: Locale
}

const RACE_TYPES = new Set(['race', 'endurance', 'sprint', 'stage'])

interface NextRace {
  series: SeriesConfig
  event: RaceEvent
  raceSession: Session
  upcomingSessions: Session[]
}

function findNextRace(selectedSeriesIds: string[]): NextRace | null {
  const now = Date.now()
  let best: NextRace | null = null
  let bestMs = Infinity

  for (const series of ALL_SERIES) {
    if (!selectedSeriesIds.includes(series.id)) continue
    for (const event of series.events) {
      for (const session of event.sessions) {
        if (!RACE_TYPES.has(session.type)) continue
        const ms = new Date(session.startUtc).getTime()
        if (ms <= now || ms >= bestMs) continue
        bestMs = ms
        best = {
          series,
          event,
          raceSession: session,
          upcomingSessions: event.sessions
            .filter(s => new Date(s.startUtc).getTime() > now)
            .sort((a, b) => new Date(a.startUtc).getTime() - new Date(b.startUtc).getTime())
            .slice(0, 4),
        }
        break
      }
    }
  }
  return best
}

function countryFlag(countryCode: string): string {
  return countryCode.toUpperCase().split('')
    .map(c => String.fromCodePoint(0x1f1e6 + c.charCodeAt(0) - 65)).join('')
}

function useCountdownParts(targetUtc: string) {
  const [parts, setParts] = useState<{ d: number; h: number; m: number; s: number } | null>(null)
  useEffect(() => {
    const update = () => {
      const ms = new Date(targetUtc).getTime() - Date.now()
      if (ms <= 0) { setParts(null); return }
      const totalSec = Math.floor(ms / 1000)
      setParts({
        d: Math.floor(totalSec / 86400),
        h: Math.floor((totalSec % 86400) / 3600),
        m: Math.floor((totalSec % 3600) / 60),
        s: totalSec % 60,
      })
    }
    update()
    const id = setInterval(update, 1000)
    return () => clearInterval(id)
  }, [targetUtc])
  return parts
}

export function HeroNextRace({ selectedSeriesIds, timezone, locale }: HeroNextRaceProps) {
  // Recompute when the minute ticks over so a started race falls off naturally
  const [, setTick] = useState(0)
  useEffect(() => {
    const id = setInterval(() => setTick(v => v + 1), 60_000)
    return () => clearInterval(id)
  }, [])

  const next = useMemo(() => findNextRace(selectedSeriesIds), [selectedSeriesIds])
  const parts = useCountdownParts(next?.raceSession.startUtc ?? '')

  if (!next) return null

  const { series, event, raceSession, upcomingSessions } = next
  const circuit = getCircuit(event.circuitId)
  const dayHref = `/day/${getLocalDate(raceSession.startUtc, timezone)}?event=${event.id}`
  const loc = locale === 'uk' ? 'uk-UA' : 'en-US'

  const cdSegments = parts ? [
    { value: parts.d, label: t('v2.cd.days', locale), show: parts.d > 0 },
    { value: parts.h, label: t('v2.cd.hours', locale), show: true },
    { value: parts.m, label: t('v2.cd.min', locale), show: true },
    { value: parts.s, label: t('v2.cd.sec', locale), show: parts.d === 0 },
  ].filter(seg => seg.show) : []

  return (
    <section
      className="v2-hero"
      style={{
        background: `linear-gradient(120deg, color-mix(in srgb, ${series.color} 16%, var(--rg-surface)) 0%, var(--rg-surface) 55%)`,
      }}
    >
      <div className="v2-hero-stripe" style={{ background: series.color }} />

      <div className="v2-hero-main">
        <div className="v2-hero-label">
          <span className="v2-hero-dot" />
          {t('v2.nextRace', locale)}
        </div>

        <div className="v2-hero-series-row">
          <span className="v2-hero-chip" style={{ background: series.color, color: series.textColor }}>
            {series.shortName}
          </span>
          {event.round != null && (
            <span className="v2-hero-round">
              {t('progress.roundFull', locale)} {event.round}
            </span>
          )}
        </div>

        <Link href={dayHref} className="v2-hero-title-link">
          <h2 className="font-display v2-hero-title">{event.name}</h2>
        </Link>

        {circuit && (
          <div className="v2-hero-circuit">
            {countryFlag(circuit.countryCode)} {circuit.name}, {circuit.country}
          </div>
        )}

        <div className="v2-hero-sessions">
          {upcomingSessions.map(s => (
            <div key={s.startUtc + s.label} className="v2-hero-session">
              <span className="v2-hero-session-label">{s.label}</span>
              <span className="v2-hero-session-time">
                {s.tba
                  ? 'TBA'
                  : `${new Date(s.startUtc).toLocaleDateString(loc, { weekday: 'short' })} · ${formatInTimezone(s.startUtc, timezone, 'time', locale)}`}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="v2-hero-side">
        {parts && (
          <div className="v2-hero-countdown" aria-label={t('v2.startsIn', locale)}>
            {cdSegments.map(seg => (
              <div key={seg.label} className="v2-hero-cd-seg">
                <span className="font-display v2-hero-cd-num">{String(seg.value).padStart(2, '0')}</span>
                <span className="v2-hero-cd-label">{seg.label}</span>
              </div>
            ))}
          </div>
        )}
        <Link href={dayHref} className="v2-hero-cta">
          {t('v2.viewDay', locale)}
          <ArrowRight style={{ width: 15, height: 15 }} />
        </Link>
      </div>
    </section>
  )
}
