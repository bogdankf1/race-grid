'use client'

import Link from 'next/link'
import { ChevronLeft } from 'lucide-react'
import { TimezoneSelector } from './TimezoneSelector'
import { SeriesFilterDropdown } from './SeriesFilterDropdown'

interface HeaderProps {
  selectedSeriesIds: string[]
  onToggleSeries: (id: string) => void
  onSetSeries: (ids: string[]) => void
  timezone: string
  onTimezoneChange: (tz: string) => void
  backHref?: string
  backLabel?: string
}

export function Header({
  selectedSeriesIds,
  onToggleSeries,
  onSetSeries,
  timezone,
  onTimezoneChange,
  backHref,
  backLabel,
}: HeaderProps) {
  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 40,
        background: 'rgba(22, 22, 34, 0.92)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: '1px solid #2e2e46',
      }}
    >
      <div className="rg-header-inner">
        {backHref ? (
          <Link
            href={backHref}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 4,
              fontSize: 14,
              color: '#999',
              textDecoration: 'none',
              whiteSpace: 'nowrap',
            }}
          >
            <ChevronLeft style={{ width: 18, height: 18 }} />
            <span>{backLabel || 'Back to calendar'}</span>
          </Link>
        ) : (
          <h1 className="font-display rg-header-title">RACE GRID</h1>
        )}
        <div className="rg-header-controls" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <SeriesFilterDropdown
            selectedIds={selectedSeriesIds}
            onToggle={onToggleSeries}
            onSetAll={onSetSeries}
          />
          <TimezoneSelector value={timezone} onChange={onTimezoneChange} />
        </div>
      </div>
    </header>
  )
}
