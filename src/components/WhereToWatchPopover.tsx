'use client'

import { useState, useRef, useEffect } from 'react'
import { Tv } from 'lucide-react'
import { t, type Locale } from '@/lib/i18n'
import type { BroadcastInfo } from '@/data/broadcasts'

interface WhereToWatchPopoverProps {
  broadcasts: BroadcastInfo[]
  locale: Locale
}

export function WhereToWatchPopover({ broadcasts, locale }: WhereToWatchPopoverProps) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  if (broadcasts.length === 0) return null

  return (
    <div ref={ref} style={{ position: 'relative', flexShrink: 0 }}>
      <button
        className="rg-cal-export-btn"
        onClick={() => setOpen(!open)}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 7,
          padding: '9px 16px',
          borderRadius: 10,
          background: 'var(--rg-surface)',
          border: '1px solid var(--rg-card-border)',
          color: 'var(--rg-text2)',
          fontSize: 13,
          fontWeight: 500,
          cursor: 'pointer',
        }}
      >
        <Tv style={{ width: 14, height: 14 }} />
        <span className="rg-cal-export-label">{t('watch.title', locale)}</span>
      </button>

      {open && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            right: 0,
            marginTop: 6,
            minWidth: 240,
            maxWidth: 320,
            background: 'var(--rg-surface)',
            border: '1px solid var(--rg-card-border)',
            borderRadius: 12,
            padding: 12,
            zIndex: 50,
            boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
          }}
        >
          <div style={{ fontSize: 11, fontWeight: 600, color: 'var(--rg-text3)', textTransform: 'uppercase', letterSpacing: 0.8, marginBottom: 8 }}>
            {t('watch.title', locale)}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            {broadcasts.map((b, i) => (
              <div
                key={i}
                style={{ fontSize: 13, lineHeight: 1.4 }}
              >
                <span style={{ fontWeight: 600 }}>
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
                    <span style={{ color: 'var(--rg-text)' }}>{b.name}</span>
                  )}
                </span>
                {b.note && (
                  <span style={{ color: 'var(--rg-text3)', fontSize: 12 }}>
                    {' '}— {b.note}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
