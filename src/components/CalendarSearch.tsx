'use client'

import { useState, useRef, useEffect, useMemo } from 'react'
import { useRouter } from 'next/navigation'
import { Search, X } from 'lucide-react'
import { ALL_SERIES } from '@/data/series-registry'
import { getLocalDate } from '@/lib/timezone'
import { t, type Locale } from '@/lib/i18n'

interface SearchResult {
  seriesId: string
  seriesShortName: string
  seriesColor: string
  seriesTextColor: string
  eventId: string
  eventName: string
  circuit: string
  country: string
  date: string  // local date yyyy-MM-dd
}

interface CalendarSearchProps {
  selectedSeriesIds: string[]
  timezone: string
  locale: Locale
}

function buildIndex(selectedSeriesIds: string[], timezone: string): SearchResult[] {
  const results: SearchResult[] = []
  const selectedSeries = ALL_SERIES.filter(s => selectedSeriesIds.includes(s.id))

  for (const series of selectedSeries) {
    for (const event of series.events) {
      // Find the first session date as the event's primary date
      const dates = new Set<string>()
      for (const session of event.sessions) {
        dates.add(getLocalDate(session.startUtc, timezone))
      }
      // Use the earliest date
      const sortedDates = Array.from(dates).sort()
      const primaryDate = sortedDates[0]
      if (!primaryDate) continue

      results.push({
        seriesId: series.id,
        seriesShortName: series.shortName,
        seriesColor: series.color,
        seriesTextColor: series.textColor,
        eventId: event.id,
        eventName: event.name,
        circuit: event.circuit,
        country: event.country,
        date: primaryDate,
      })
    }
  }

  return results.sort((a, b) => a.date.localeCompare(b.date))
}

function searchEvents(index: SearchResult[], query: string): SearchResult[] {
  if (!query.trim()) return []
  const q = query.toLowerCase()
  return index.filter(r =>
    r.eventName.toLowerCase().includes(q) ||
    r.circuit.toLowerCase().includes(q) ||
    r.country.toLowerCase().includes(q) ||
    r.seriesShortName.toLowerCase().includes(q)
  )
}

export function CalendarSearch({ selectedSeriesIds, timezone, locale }: CalendarSearchProps) {
  const [query, setQuery] = useState('')
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const router = useRouter()

  const index = useMemo(() => buildIndex(selectedSeriesIds, timezone), [selectedSeriesIds, timezone])
  const results = useMemo(() => searchEvents(index, query), [index, query])

  // Close on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  const handleSelect = (result: SearchResult) => {
    setQuery('')
    setOpen(false)
    router.push(`/day/${result.date}?event=${result.eventId}`)
  }

  const clear = () => {
    setQuery('')
    inputRef.current?.focus()
  }

  const formatDate = (dateStr: string) => {
    const d = new Date(dateStr + 'T00:00:00')
    const loc = locale === 'uk' ? 'uk-UA' : 'en-US'
    return d.toLocaleDateString(loc, { month: 'short', day: 'numeric' })
  }

  return (
    <div ref={ref} style={{ position: 'relative', flex: 1, maxWidth: 360 }}>
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
        }}
      >
        <Search style={{ width: 15, height: 15, color: 'var(--rg-text3)', flexShrink: 0 }} />
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={e => { setQuery(e.target.value); setOpen(true) }}
          onFocus={() => setOpen(true)}
          placeholder={t('search.placeholder', locale)}
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
        {query && (
          <button
            onClick={clear}
            style={{ background: 'none', border: 'none', color: 'var(--rg-text3)', display: 'flex', cursor: 'pointer', padding: 0 }}
          >
            <X style={{ width: 14, height: 14 }} />
          </button>
        )}
      </div>

      {open && query.trim() && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            marginTop: 6,
            maxHeight: 360,
            overflowY: 'auto',
            background: 'var(--rg-surface)',
            border: '1px solid var(--rg-card-border)',
            borderRadius: 12,
            boxShadow: '0 12px 40px rgba(0,0,0,0.4)',
            zIndex: 50,
            padding: 6,
          }}
        >
          {results.length === 0 ? (
            <div style={{ padding: '16px 12px', fontSize: 13, color: 'var(--rg-text3)', textAlign: 'center' }}>
              {t('search.noResults', locale)}
            </div>
          ) : (
            results.map((r, i) => (
              <button
                key={`${r.seriesId}-${r.eventName}-${i}`}
                onClick={() => handleSelect(r)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                  width: '100%',
                  padding: '10px 10px',
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
                    background: r.seriesColor,
                    color: r.seriesTextColor,
                    fontSize: 10,
                    fontWeight: 700,
                    flexShrink: 0,
                    lineHeight: 1,
                  }}
                >
                  {r.seriesShortName}
                </span>
                {/* Event name + circuit */}
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--rg-text)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                    {r.eventName}
                  </div>
                  <div style={{ fontSize: 11, color: 'var(--rg-text3)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                    {r.circuit}
                  </div>
                </div>
                {/* Date */}
                <span style={{ fontSize: 12, color: 'var(--rg-text2)', flexShrink: 0, fontWeight: 500 }}>
                  {formatDate(r.date)}
                </span>
              </button>
            ))
          )}
        </div>
      )}
    </div>
  )
}
