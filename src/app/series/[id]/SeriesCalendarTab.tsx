import Link from 'next/link'
import { t, type Locale } from '@/lib/i18n'
import { getCircuit } from '@/data/circuits'
import { getResult } from '@/data/results'
import type { SeriesConfig, RaceEvent } from '@/lib/types'
import { countryFlag, getTotalRounds } from '@/lib/format'

export function SeriesCalendarTab({ series, query, spoilerFree, locale }: { series: SeriesConfig; query: string; spoilerFree: boolean; locale: Locale }) {
  const q = query.toLowerCase().trim()
  const filteredEvents = q
    ? series.events.filter(event => {
        const circuit = getCircuit(event.circuitId)
        return event.name.toLowerCase().includes(q) ||
          (circuit?.name.toLowerCase().includes(q)) ||
          (circuit?.country.toLowerCase().includes(q))
      })
    : series.events
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
      {filteredEvents.map(event => (
        <EventRow key={event.id} event={event} series={series} spoilerFree={spoilerFree} locale={locale} />
      ))}
      {filteredEvents.length === 0 && (
        <p style={{ color: 'var(--rg-text3)', textAlign: 'center', padding: '16px 0' }}>
          {t('search.noResults', locale)}
        </p>
      )}
    </div>
  )
}

function EventRow({ event, series, spoilerFree, locale }: { event: RaceEvent; series: SeriesConfig; spoilerFree: boolean; locale: Locale }) {
  const circuit = getCircuit(event.circuitId)
  const now = Date.now()
  const lastSession = event.sessions[event.sessions.length - 1]
  const isPast = lastSession ? new Date(lastSession.startUtc).getTime() + (lastSession.durationMinutes || 120) * 60000 <= now : false
  const isNext = !isPast && event.sessions[0] && new Date(event.sessions[0].startUtc).getTime() > now

  // Find race winner
  let winnerDisplay: string | undefined
  if (isPast && !spoilerFree) {
    for (const type of ['race', 'endurance', 'stage'] as const) {
      const result = getResult(event.id, type)
      if (result) {
        winnerDisplay = `${result.overall.drivers.join(', ')} (${result.overall.team})`
        break
      }
    }
  }

  const totalRounds = getTotalRounds(series)
  const raceDate = lastSession ? lastSession.startUtc.slice(0, 10) : ''

  return (
    <Link
      href={`/day/${raceDate}?event=${event.id}`}
      style={{
        display: 'flex', alignItems: 'center', gap: 12, padding: '12px 16px',
        borderRadius: 10, background: 'var(--rg-surface)', border: '1px solid var(--rg-card-border)',
        textDecoration: 'none', color: 'inherit',
        borderLeft: isNext ? `3px solid ${series.color}` : undefined,
      }}
    >
      {/* Round chip */}
      {event.round && (
        <span style={{
          fontSize: 11, fontWeight: 600, color: 'var(--rg-text3)',
          padding: '3px 8px', borderRadius: 6,
          background: 'var(--rg-elevated)', border: '1px solid var(--rg-border)',
          whiteSpace: 'nowrap', flexShrink: 0,
        }}>
          {t('progress.round', locale)} {event.round}/{totalRounds}
        </span>
      )}

      {/* Event name + circuit */}
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontSize: 14, fontWeight: 500, color: 'var(--rg-text)' }}>{event.name}</div>
        {circuit && (
          <div style={{ fontSize: 12, color: 'var(--rg-text3)', marginTop: 2 }}>
            {circuit.countryCode ? countryFlag(circuit.countryCode) + ' ' : ''}{circuit.name}
          </div>
        )}
      </div>

      {/* Date */}
      <span style={{ fontSize: 13, color: 'var(--rg-text3)', flexShrink: 0 }}>
        {raceDate && new Date(raceDate + 'T00:00:00').toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
      </span>

    </Link>
  )
}
