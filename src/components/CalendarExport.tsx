'use client'

import { useState, useRef, useEffect } from 'react'
import { CalendarPlus, Download, Rss } from 'lucide-react'
import { downloadIcs, googleCalendarUrl, downloadSeriesIcs } from '@/lib/ical'
import { t, type Locale } from '@/lib/i18n'
import type { RaceEvent, Session } from '@/lib/types'

interface CalendarExportProps {
  event: RaceEvent
  sessions: Session[]
  seriesName: string
  seriesId: string
  seriesEvents: RaceEvent[]
  locale: Locale
}

const menuItemStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: 8,
  width: '100%',
  padding: '8px 10px',
  borderRadius: 8,
  background: 'transparent',
  border: 'none',
  fontSize: 13,
  color: 'var(--rg-text)',
  cursor: 'pointer',
  textAlign: 'left',
  textDecoration: 'none',
}

const sectionLabelStyle: React.CSSProperties = {
  padding: '6px 10px',
  fontSize: 11,
  fontWeight: 600,
  color: 'var(--rg-text3)',
  textTransform: 'uppercase',
  letterSpacing: 0.8,
}

const calIcon = (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none">
    <rect x="2" y="3" width="20" height="19" rx="3" stroke="currentColor" strokeWidth="2" />
    <path d="M2 9h20" stroke="currentColor" strokeWidth="2" />
    <path d="M8 1v4M16 1v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
)

export function CalendarExport({ event, sessions, seriesName, seriesId, seriesEvents, locale }: CalendarExportProps) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  const subscribeUrl = `webcal://race-grid.com/calendar/${seriesId}.ics`

  return (
    <div ref={ref} style={{ position: 'relative', flexShrink: 0 }}>
      <button
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
        <CalendarPlus style={{ width: 14, height: 14 }} />
        {t('cal.export', locale)}
      </button>

      {open && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            right: 0,
            marginTop: 6,
            minWidth: 240,
            background: 'var(--rg-surface)',
            border: '1px solid var(--rg-card-border)',
            borderRadius: 12,
            padding: 8,
            zIndex: 50,
            boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
          }}
        >
          {/* Google Calendar — individual sessions */}
          <div style={sectionLabelStyle}>
            {t('cal.google', locale)}
          </div>
          {sessions.map((session, i) => (
            <a
              key={i}
              href={googleCalendarUrl(event, session, seriesName)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              style={menuItemStyle}
              onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--rg-elevated)')}
              onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
            >
              {calIcon}
              <span>{session.label}</span>
            </a>
          ))}

          <div style={{ height: 1, background: 'var(--rg-border)', margin: '6px 0' }} />

          {/* Download .ics — this event */}
          <button
            onClick={() => { downloadIcs(event, sessions, seriesName); setOpen(false) }}
            style={menuItemStyle}
            onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--rg-elevated)')}
            onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
          >
            <Download style={{ width: 16, height: 16 }} />
            <span>{t('cal.allSessions', locale)}</span>
          </button>

          {/* Download full season .ics */}
          <button
            onClick={() => { downloadSeriesIcs(seriesEvents, seriesId, seriesName); setOpen(false) }}
            style={menuItemStyle}
            onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--rg-elevated)')}
            onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
          >
            <Download style={{ width: 16, height: 16 }} />
            <span>{seriesName} — {t('cal.season', locale)}</span>
          </button>

          <div style={{ height: 1, background: 'var(--rg-border)', margin: '6px 0' }} />

          {/* Subscribe via webcal:// */}
          <a
            href={subscribeUrl}
            onClick={() => setOpen(false)}
            style={menuItemStyle}
            onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--rg-elevated)')}
            onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
          >
            <Rss style={{ width: 16, height: 16 }} />
            <div>
              <div>{t('cal.subscribe', locale)}</div>
              <div style={{ fontSize: 10, color: 'var(--rg-text3)', marginTop: 2 }}>
                {t('cal.subscribeHint', locale)}
              </div>
            </div>
          </a>
        </div>
      )}
    </div>
  )
}
