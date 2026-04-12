'use client'

import { useState } from 'react'
import { Tv, ChevronDown } from 'lucide-react'
import { t, type Locale } from '@/lib/i18n'
import type { BroadcastInfo } from '@/data/broadcasts'

interface WhereToWatchProps {
  broadcasts: BroadcastInfo[]
  locale: Locale
  seriesName?: string
  seriesColor?: string
}

export function WhereToWatch({ broadcasts, locale, seriesName, seriesColor }: WhereToWatchProps) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div
      style={{
        marginTop: 4,
        padding: '14px 16px',
        borderRadius: 12,
        background: 'var(--rg-surface)',
        border: '1px solid var(--rg-card-border)',
        borderLeft: seriesColor ? `3px solid ${seriesColor}` : undefined,
      }}
    >
      <button
        className="rg-disclosure"
        onClick={() => setExpanded(!expanded)}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          width: '100%',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          padding: 0,
        }}
      >
        <Tv style={{ width: 14, height: 14, color: 'var(--rg-text3)', flexShrink: 0 }} />
        <span style={{ fontSize: 12, fontWeight: 600, color: 'var(--rg-text3)', textTransform: 'uppercase', letterSpacing: 1, flex: 1, textAlign: 'left' }}>
          {t('watch.title', locale)}{seriesName && ` — ${seriesName}`}
        </span>
        <ChevronDown
          style={{
            width: 14,
            height: 14,
            color: 'var(--rg-text3)',
            transition: 'transform 0.2s ease',
            transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)',
          }}
        />
      </button>

      {expanded && (
        <div style={{ marginTop: 10 }}>
          {broadcasts.length > 0 ? (
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
          ) : (
            <p style={{ fontSize: 13, color: 'var(--rg-text3)' }}>
              {t('watch.fallback', locale)}
            </p>
          )}
        </div>
      )}
    </div>
  )
}
