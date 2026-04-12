'use client'

import { useState, useMemo, useEffect } from 'react'
import Link from 'next/link'
import { Search, MapPin, RotateCcw, Gauge } from 'lucide-react'
import { useLocalStorage } from '@/hooks/useLocalStorage'
import { getDefaultTimezone } from '@/lib/timezone'
import { getDefaultLocale, t, type Locale } from '@/lib/i18n'
import { applyTheme, getDefaultTheme, type Theme } from '@/lib/theme'
import type { SessionType } from '@/lib/types'
import { getAllCircuitsWithEvents, type CircuitWithEvents } from '@/data/circuit-events'
import { getCircuitTypeLabel } from '@/data/circuits'
import { SERIES_META } from '@/data/series-registry'
import { Header } from '@/components/Header'

const ALL_SESSION_TYPES: SessionType[] = [
  'race', 'qualifying', 'sprint', 'sprint_qualifying', 'hyperpole',
  'practice', 'warmup', 'stage', 'shakedown', 'endurance',
]
import { SeriesFilterDropdown } from '@/components/SeriesFilterDropdown'
import { Footer } from '@/components/Footer'

function countryFlag(countryCode: string): string {
  if (!countryCode) return ''
  return countryCode.toUpperCase().split('')
    .map(c => String.fromCodePoint(0x1f1e6 + c.charCodeAt(0) - 65)).join('')
}

const TYPE_FILTERS = ['all', 'permanent', 'street', 'oval', 'mixed'] as const
type TypeFilter = typeof TYPE_FILTERS[number]

export function CircuitsPageClient() {
  const [timezone, setTimezone] = useLocalStorage<string>('race-grid:timezone', getDefaultTimezone())
  const [theme, setTheme] = useLocalStorage<Theme>('race-grid:theme', getDefaultTheme())
  const [locale, setLocale] = useLocalStorage<Locale>('race-grid:locale', getDefaultLocale())
  const [spoilerFree, setSpoilerFree] = useLocalStorage<boolean>('race-grid:spoiler-free', false)
  const [visibleSessionTypes, setVisibleSessionTypes] = useLocalStorage<SessionType[]>('race-grid:session-types', ALL_SESSION_TYPES)
  const [selectedSeries, setSelectedSeries] = useLocalStorage<string[]>('race-grid:series', SERIES_META.map(s => s.id))

  useEffect(() => { applyTheme(theme) }, [theme])

  const [query, setQuery] = useState('')
  const [typeFilter, setTypeFilter] = useState<TypeFilter>('all')
  const [filterSeriesIds, setFilterSeriesIds] = useLocalStorage<string[]>(
    'race-grid:circuits-series',
    SERIES_META.map(s => s.id)
  )

  const allCircuits = useMemo(() => getAllCircuitsWithEvents(), [])

  const filtered = useMemo(() => {
    let result = allCircuits
    // Filter by series
    const seriesSet = new Set(filterSeriesIds)
    result = result.filter(c => c.seriesIds.some(sid => seriesSet.has(sid)))
    if (typeFilter !== 'all') {
      result = result.filter(c => c.type === typeFilter)
    }
    if (query.trim()) {
      const q = query.toLowerCase()
      result = result.filter(c =>
        c.name.toLowerCase().includes(q) ||
        c.country.toLowerCase().includes(q)
      )
    }
    return result
  }, [allCircuits, typeFilter, query, filterSeriesIds])

  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark')
  const toggleLocale = () => setLocale(locale === 'en' ? 'uk' : 'en')

  const toggleSeries = (id: string) => {
    const updated = selectedSeries.includes(id)
      ? selectedSeries.filter(s => s !== id)
      : [...selectedSeries, id]
    setSelectedSeries(updated)
  }

  const toggleSessionType = (type: SessionType) => {
    const updated = visibleSessionTypes.includes(type)
      ? visibleSessionTypes.filter(t => t !== type)
      : [...visibleSessionTypes, type]
    if (updated.length > 0) setVisibleSessionTypes(updated)
  }

  return (
    <div style={{ minHeight: '100vh', background: 'var(--rg-bg)', color: 'var(--rg-text)' }}>
      <Header
        selectedSeriesIds={selectedSeries}
        onToggleSeries={toggleSeries}
        onSetSeries={setSelectedSeries}
        timezone={timezone}
        onTimezoneChange={setTimezone}
        theme={theme}
        onToggleTheme={toggleTheme}
        locale={locale}
        onToggleLocale={toggleLocale}
        spoilerFree={spoilerFree}
        onToggleSpoilerFree={() => setSpoilerFree(!spoilerFree)}
        visibleSessionTypes={visibleSessionTypes}
        onToggleSessionType={toggleSessionType}
        onSetSessionTypes={setVisibleSessionTypes}
        showSeriesFilter={false}
      />

      <div className="rg-calendar-wrap">
        {/* Search + series filter */}
        <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: 16, flexWrap: 'wrap' }}>
          <div
            className="rg-control"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              padding: '0 12px',
              borderRadius: 10,
              background: 'var(--rg-btn-bg)',
              border: '1px solid var(--rg-border)',
              flex: 1,
              minWidth: 200,
              maxWidth: 480,
            }}
          >
            <Search style={{ width: 15, height: 15, color: 'var(--rg-text3)', flexShrink: 0 }} />
            <input
              type="text"
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder={t('search.circuits', locale)}
              style={{
                flex: 1,
                background: 'transparent',
                border: 'none',
                outline: 'none',
                color: 'var(--rg-text)',
                fontSize: 13,
                minWidth: 0,
              }}
            />
          </div>
          <SeriesFilterDropdown
            selectedIds={filterSeriesIds}
            onToggle={(id) => {
              const updated = filterSeriesIds.includes(id)
                ? filterSeriesIds.filter(s => s !== id)
                : [...filterSeriesIds, id]
              setFilterSeriesIds(updated)
            }}
            onSetAll={setFilterSeriesIds}
            locale={locale}
            showProgress={false}
          />
        </div>

        {/* Type filter chips */}
        <div style={{ display: 'flex', gap: 6, marginBottom: 24, flexWrap: 'wrap' }}>
          {TYPE_FILTERS.map(tf => (
            <button
              key={tf}
              onClick={() => setTypeFilter(tf)}
              style={{
                padding: '6px 14px',
                borderRadius: 8,
                fontSize: 13,
                fontWeight: 500,
                border: '1px solid var(--rg-border)',
                background: typeFilter === tf ? 'var(--rg-link)' : 'transparent',
                color: typeFilter === tf ? '#fff' : 'var(--rg-text2)',
                cursor: 'pointer',
                transition: 'all 0.15s',
              }}
            >
              {tf === 'all' ? 'All' : getCircuitTypeLabel(tf, locale)}
            </button>
          ))}
        </div>

        {/* Circuit list */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {filtered.map(circuit => (
            <CircuitRow key={circuit.id} circuit={circuit} locale={locale} />
          ))}
          {filtered.length === 0 && (
            <p style={{ color: 'var(--rg-text3)', textAlign: 'center', padding: '32px 0' }}>
              {t('search.noResults', locale)}
            </p>
          )}
        </div>
      </div>

      <Footer locale={locale} />
    </div>
  )
}

function CircuitRow({ circuit, locale }: { circuit: CircuitWithEvents; locale: Locale }) {
  return (
    <Link
      href={`/circuits/${circuit.id}`}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 16,
        padding: '14px 18px',
        borderRadius: 12,
        background: 'var(--rg-surface)',
        border: '1px solid var(--rg-card-border)',
        textDecoration: 'none',
        color: 'inherit',
        transition: 'border-color 0.15s',
      }}
    >
      {/* Left: circuit info */}
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
          <span style={{ fontWeight: 600, fontSize: 15, color: 'var(--rg-text)' }}>
            {circuit.name}
          </span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: 13, color: 'var(--rg-text3)', flexWrap: 'wrap' }}>
          {circuit.countryCode && (
            <span>{countryFlag(circuit.countryCode)} {circuit.country}</span>
          )}
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}>
            <Gauge style={{ width: 12, height: 12 }} /> {circuit.length}
          </span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}>
            <RotateCcw style={{ width: 12, height: 12 }} /> {circuit.turns} {circuit.type === 'mixed' ? 'stages' : 'turns'}
          </span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}>
            <MapPin style={{ width: 12, height: 12 }} /> {getCircuitTypeLabel(circuit.type, locale)}
          </span>
        </div>
      </div>

      {/* Right: series badges */}
      <div style={{ display: 'flex', gap: 4, flexShrink: 0, flexWrap: 'wrap', justifyContent: 'flex-end', maxWidth: 200 }}>
        {circuit.seriesIds.map(sid => {
          const meta = SERIES_META.find(m => m.id === sid)
          if (!meta) return null
          return (
            <span
              key={sid}
              style={{
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
              }}
            >
              {meta.shortName}
            </span>
          )
        })}
      </div>
    </Link>
  )
}
