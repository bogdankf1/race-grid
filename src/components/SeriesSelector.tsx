'use client'

import { useState } from 'react'
import { ALL_SERIES } from '@/data/series-registry'
import Image from 'next/image'

const SERIES_DESCRIPTIONS: Record<string, string> = {
  f1: 'The pinnacle of open-wheel racing',
  wec: 'Endurance — Le Mans and beyond',
  indycar: 'Open-wheel — home of the Indy 500',
  nascar: 'Stock car racing across America',
  nls: 'Endurance on the Nurburgring Nordschleife',
  wrc: 'Rally racing across the globe',
}

const LOGO_FILES: Record<string, string> = {
  f1: '/logos/f1.svg',
  wec: '/logos/wec.svg',
  indycar: '/logos/indycar.svg',
  nascar: '/logos/nascar.svg',
  nls: '/logos/nls.png',
  wrc: '/logos/wrc.png',
}

interface SeriesSelectorProps {
  onConfirm: (selectedIds: string[]) => void
  initialSelection?: string[]
}

export function SeriesSelector({ onConfirm, initialSelection = [] }: SeriesSelectorProps) {
  const [selected, setSelected] = useState<string[]>(
    initialSelection.length > 0 ? initialSelection : []
  )

  const toggle = (id: string) => {
    setSelected(prev =>
      prev.includes(id) ? prev.filter(s => s !== id) : [...prev, id]
    )
  }

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '48px 20px',
        background: '#13131d',
      }}
    >
      <div style={{ maxWidth: 720, width: '100%' }}>
        {/* Header */}
        <h1
          style={{
            fontFamily: 'var(--font-display), system-ui, sans-serif',
            fontSize: 56,
            textAlign: 'center',
            letterSpacing: 6,
            color: '#fff',
            marginBottom: 8,
          }}
        >
          RACE GRID
        </h1>
        <p
          style={{
            textAlign: 'center',
            color: '#888',
            fontSize: 16,
            marginBottom: 48,
          }}
        >
          Pick the series you want to follow
        </p>

        {/* Series grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
            gap: 16,
          }}
        >
          {ALL_SERIES.map(series => {
            const isSelected = selected.includes(series.id)
            return (
              <button
                key={series.id}
                onClick={() => toggle(series.id)}
                style={{
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  padding: '32px 24px 28px',
                  borderRadius: 16,
                  border: `2px solid ${isSelected ? series.color : '#2a2a3e'}`,
                  background: isSelected ? '#1e1e30' : '#191925',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  outline: 'none',
                }}
                onMouseEnter={e => {
                  if (!isSelected) {
                    ;(e.currentTarget as HTMLButtonElement).style.background = '#1e1e30'
                    ;(e.currentTarget as HTMLButtonElement).style.borderColor = '#3a3a55'
                  }
                }}
                onMouseLeave={e => {
                  if (!isSelected) {
                    ;(e.currentTarget as HTMLButtonElement).style.background = '#191925'
                    ;(e.currentTarget as HTMLButtonElement).style.borderColor = '#2a2a3e'
                  }
                }}
              >
                {/* Selection dot */}
                {isSelected && (
                  <div
                    style={{
                      position: 'absolute',
                      top: 12,
                      right: 12,
                      width: 10,
                      height: 10,
                      borderRadius: '50%',
                      background: series.color,
                    }}
                  />
                )}

                {/* Logo */}
                <div
                  style={{
                    height: 56,
                    width: '100%',
                    maxWidth: 160,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: 16,
                    borderRadius: 10,
                    padding: ['wec', 'nls', 'wrc'].includes(series.id) ? '6px 16px' : '0',
                    background: ['wec', 'nls', 'wrc'].includes(series.id) ? '#fff' : 'transparent',
                  }}
                >
                  <Image
                    src={LOGO_FILES[series.id]}
                    alt={series.name}
                    width={160}
                    height={56}
                    unoptimized
                    style={{
                      maxHeight: ['wec', 'nls', 'wrc'].includes(series.id) ? 40 : 56,
                      maxWidth: 160,
                      width: 'auto',
                      objectFit: 'contain',
                    }}
                  />
                </div>

                {/* Title */}
                <div
                  style={{
                    color: '#eee',
                    fontWeight: 600,
                    fontSize: 15,
                    lineHeight: 1.3,
                    marginBottom: 6,
                  }}
                >
                  {series.name}
                </div>

                {/* Description */}
                <div
                  style={{
                    color: '#777',
                    fontSize: 13,
                    lineHeight: 1.4,
                  }}
                >
                  {SERIES_DESCRIPTIONS[series.id]}
                </div>
              </button>
            )
          })}
        </div>

        {/* CTA */}
        <div style={{ marginTop: 48, display: 'flex', justifyContent: 'center' }}>
          <button
            disabled={selected.length === 0}
            onClick={() => onConfirm(selected)}
            style={{
              padding: '16px 48px',
              borderRadius: 14,
              border: 'none',
              fontSize: 17,
              fontWeight: 600,
              cursor: selected.length > 0 ? 'pointer' : 'not-allowed',
              transition: 'all 0.2s ease',
              background: selected.length > 0 ? '#fff' : '#252535',
              color: selected.length > 0 ? '#13131d' : '#555',
              width: '100%',
              maxWidth: 360,
            }}
            onMouseEnter={e => {
              if (selected.length > 0) {
                ;(e.currentTarget as HTMLButtonElement).style.background = '#e0e0e0'
              }
            }}
            onMouseLeave={e => {
              if (selected.length > 0) {
                ;(e.currentTarget as HTMLButtonElement).style.background = '#fff'
              }
            }}
          >
            {selected.length > 0
              ? `Continue with ${selected.length} series →`
              : 'Select at least one series'}
          </button>
        </div>
      </div>
    </div>
  )
}
