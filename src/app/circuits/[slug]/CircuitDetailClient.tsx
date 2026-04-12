'use client'

import { useState, useEffect, useMemo } from 'react'
import Link from 'next/link'
import { MapPin, Gauge, RotateCcw, Trophy } from 'lucide-react'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { useLocalStorage } from '@/hooks/useLocalStorage'
import { getDefaultTimezone } from '@/lib/timezone'
import { getDefaultLocale, type Locale } from '@/lib/i18n'
import { applyTheme, getDefaultTheme, type Theme } from '@/lib/theme'
import type { SessionType } from '@/lib/types'
import { getCircuitWithEvents, type CircuitEventInfo } from '@/data/circuit-events'
import { getCircuitTypeLabel } from '@/data/circuits'
import { SERIES_META } from '@/data/series-registry'
import { Header } from '@/components/Header'

const ALL_SESSION_TYPES: SessionType[] = [
  'race', 'qualifying', 'sprint', 'sprint_qualifying', 'hyperpole',
  'practice', 'warmup', 'stage', 'shakedown', 'endurance',
]
import { Footer } from '@/components/Footer'

function countryFlag(countryCode: string): string {
  if (!countryCode) return ''
  return countryCode.toUpperCase().split('')
    .map(c => String.fromCodePoint(0x1f1e6 + c.charCodeAt(0) - 65)).join('')
}

export function CircuitDetailClient({ slug }: { slug: string }) {
  const [timezone, setTimezone] = useLocalStorage<string>('race-grid:timezone', getDefaultTimezone())
  const [theme, setTheme] = useLocalStorage<Theme>('race-grid:theme', getDefaultTheme())
  const [locale, setLocale] = useLocalStorage<Locale>('race-grid:locale', getDefaultLocale())
  const [spoilerFree, setSpoilerFree] = useLocalStorage<boolean>('race-grid:spoiler-free', false)
  const [visibleSessionTypes, setVisibleSessionTypes] = useLocalStorage<SessionType[]>('race-grid:session-types', ALL_SESSION_TYPES)
  const [selectedSeries, setSelectedSeries] = useLocalStorage<string[]>('race-grid:series', SERIES_META.map(s => s.id))

  useEffect(() => { applyTheme(theme) }, [theme])

  const circuit = useMemo(() => getCircuitWithEvents(slug), [slug])

  const toggleSeries = (id: string) => {
    const updated = selectedSeries.includes(id) ? selectedSeries.filter(s => s !== id) : [...selectedSeries, id]
    setSelectedSeries(updated)
  }

  const toggleSessionType = (type: SessionType) => {
    const updated = visibleSessionTypes.includes(type)
      ? visibleSessionTypes.filter(t => t !== type)
      : [...visibleSessionTypes, type]
    if (updated.length > 0) setVisibleSessionTypes(updated)
  }

  if (!circuit) {
    return (
      <div style={{ minHeight: '100vh', background: 'var(--rg-bg)', color: 'var(--rg-text)' }}>
        <Header
          selectedSeriesIds={selectedSeries} onToggleSeries={toggleSeries} onSetSeries={setSelectedSeries}
          timezone={timezone} onTimezoneChange={setTimezone}
          theme={theme} onToggleTheme={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          locale={locale} onToggleLocale={() => setLocale(locale === 'en' ? 'uk' : 'en')}
          spoilerFree={spoilerFree} onToggleSpoilerFree={() => setSpoilerFree(!spoilerFree)}
          visibleSessionTypes={visibleSessionTypes} onToggleSessionType={toggleSessionType}
          onSetSessionTypes={setVisibleSessionTypes}
          showSeriesFilter={false}
        />
        <div className="rg-calendar-wrap" style={{ textAlign: 'center', color: 'var(--rg-text3)' }}>
          Circuit not found.
        </div>
      </div>
    )
  }

  const years = useMemo(() => [...new Set(circuit.events.map(e => e.year))].sort((a, b) => b - a), [circuit.events])
  const [year, setYear] = useState(() => years[0] ?? 2026)

  const filteredEvents = useMemo(() =>
    circuit.events.filter(e => e.year === year).sort((a, b) => a.raceDate.localeCompare(b.raceDate)),
    [circuit.events, year]
  )

  return (
    <div style={{ minHeight: '100vh', background: 'var(--rg-bg)', color: 'var(--rg-text)' }}>
      <Header
        selectedSeriesIds={selectedSeries} onToggleSeries={toggleSeries} onSetSeries={setSelectedSeries}
        timezone={timezone} onTimezoneChange={setTimezone}
        theme={theme} onToggleTheme={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        locale={locale} onToggleLocale={() => setLocale(locale === 'en' ? 'uk' : 'en')}
        spoilerFree={spoilerFree} onToggleSpoilerFree={() => setSpoilerFree(!spoilerFree)}
        visibleSessionTypes={visibleSessionTypes} onToggleSessionType={toggleSessionType}
        onSetSessionTypes={setVisibleSessionTypes}
        showSeriesFilter={false}
      />

      <div className="rg-calendar-wrap">
        <Breadcrumbs items={[
          { label: 'Circuits', href: '/circuits' },
          { label: circuit.name },
        ]} />

        {/* Circuit header */}
        <div style={{ marginBottom: 24 }}>
          <h1 className="font-display" style={{ fontSize: 32, letterSpacing: 1, color: 'var(--rg-text)', margin: '0 0 8px' }}>
            {circuit.name}
          </h1>
          {circuit.countryCode && (
            <p style={{ fontSize: 16, color: 'var(--rg-text2)', margin: '0 0 16px' }}>
              {countryFlag(circuit.countryCode)} {circuit.country}
            </p>
          )}

          {/* Metadata row */}
          <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap', fontSize: 14, color: 'var(--rg-text3)' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
              <Gauge style={{ width: 14, height: 14 }} /> {circuit.length}
            </span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
              <RotateCcw style={{ width: 14, height: 14 }} /> {circuit.turns} {circuit.type === 'mixed' ? 'stages' : 'turns'}
            </span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
              <MapPin style={{ width: 14, height: 14 }} /> {getCircuitTypeLabel(circuit.type, locale)}
            </span>
          </div>
        </div>

        {/* Series that race here */}
        <div style={{ display: 'flex', gap: 6, marginBottom: 32, flexWrap: 'wrap' }}>
          {circuit.seriesIds.map(sid => {
            const meta = SERIES_META.find(m => m.id === sid)
            if (!meta) return null
            return (
              <Link
                key={sid}
                href={`/series/${sid}`}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  padding: '5px 12px',
                  borderRadius: 8,
                  fontSize: 12,
                  fontWeight: 700,
                  letterSpacing: 0.5,
                  backgroundColor: meta.color,
                  color: meta.textColor,
                  textDecoration: 'none',
                  lineHeight: 1,
                }}
              >
                {meta.shortName}
              </Link>
            )
          })}
        </div>

        {/* Year selector */}
        <div style={{ display: 'flex', gap: 6, marginBottom: 20 }}>
          {years.map(y => (
            <button
              key={y}
              onClick={() => setYear(y)}
              style={{
                padding: '6px 16px', borderRadius: 8, fontSize: 14, fontWeight: 600,
                border: '1px solid var(--rg-border)',
                background: year === y ? 'var(--rg-link)' : 'transparent',
                color: year === y ? '#fff' : 'var(--rg-text2)',
                cursor: 'pointer', transition: 'all 0.15s',
              }}
            >
              {y}
            </button>
          ))}
        </div>

        {/* Events for selected year */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          {filteredEvents.map(event => (
            <EventRow key={event.eventId} event={event} spoilerFree={spoilerFree} />
          ))}
          {filteredEvents.length === 0 && (
            <p style={{ color: 'var(--rg-text3)', textAlign: 'center', padding: '16px 0' }}>No events at this circuit in {year}.</p>
          )}
        </div>
      </div>

      <Footer locale={locale} />
    </div>
  )
}

function EventRow({ event, spoilerFree }: { event: CircuitEventInfo; spoilerFree: boolean }) {
  const meta = SERIES_META.find(m => m.id === event.seriesId)
  const now = Date.now()
  const isPast = new Date(event.raceDate).getTime() < now

  return (
    <Link
      href={`/day/${event.raceDate}?event=${event.eventId}`}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        padding: '12px 16px',
        borderRadius: 10,
        background: 'var(--rg-surface)',
        border: '1px solid var(--rg-card-border)',
        textDecoration: 'none',
        color: 'inherit',
      }}
    >
      {/* Series badge */}
      {meta && (
        <span style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '3px 8px',
          borderRadius: 6,
          fontSize: 10,
          fontWeight: 700,
          letterSpacing: 0.5,
          backgroundColor: meta.color,
          color: meta.textColor,
          lineHeight: 1,
          whiteSpace: 'nowrap',
          flexShrink: 0,
        }}>
          {meta.shortName}
        </span>
      )}

      {/* Round chip */}
      {event.round && (
        <span style={{
          fontSize: 11, fontWeight: 600, color: 'var(--rg-text3)',
          padding: '3px 8px', borderRadius: 6,
          background: 'var(--rg-elevated)', border: '1px solid var(--rg-border)',
          whiteSpace: 'nowrap', flexShrink: 0,
        }}>
          Round {event.round}/{event.totalRounds}
        </span>
      )}

      {/* Event name */}
      <div style={{ flex: 1, minWidth: 0 }}>
        <span style={{ fontSize: 14, fontWeight: 500, color: 'var(--rg-text)' }}>
          {event.eventName}
        </span>
      </div>

      {/* Date */}
      <span style={{ fontSize: 13, color: 'var(--rg-text3)', flexShrink: 0 }}>
        {new Date(event.raceDate + 'T00:00:00').toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
      </span>

      {/* Winner (if past and not spoiler-free) */}
      {isPast && event.winnerDisplay && !spoilerFree && (
        <span style={{ fontSize: 12, color: 'var(--rg-text3)', flexShrink: 0, maxWidth: 200, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', display: 'inline-flex', alignItems: 'center', gap: 4 }}>
          <Trophy style={{ width: 11, height: 11 }} /> {event.winnerDisplay}
        </span>
      )}
    </Link>
  )
}
