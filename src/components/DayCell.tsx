'use client'

import { useState } from 'react'
import Link from 'next/link'
import { DaySeriesInfo } from '@/hooks/useCalendarEvents'

interface DayCellProps {
  date: string
  dayNumber: number
  isCurrentMonth: boolean
  isToday: boolean
  isNextRaceDay?: boolean
  isHighlighted?: boolean
  seriesInfos: DaySeriesInfo[]
  moreLabel?: string
  nextUpLabel?: string
}

function cleanEventName(name: string): string {
  return name
    .replace(/Grand Prix/gi, 'GP')
    .replace(/\d+\.\s*/g, '')
    .replace(/^NLS\s*\d+\s*[—–-]\s*/i, '')
}

export function DayCell({ date, dayNumber, isCurrentMonth, isToday, isNextRaceDay, isHighlighted, seriesInfos, moreLabel = 'more', nextUpLabel = 'Next up' }: DayCellProps) {
  const isPast = !isToday && date < new Date().toISOString().slice(0, 10)
  const [expanded, setExpanded] = useState(false)
  const MAX_CHIPS = 3
  const showAll = expanded || seriesInfos.length <= MAX_CHIPS
  const visibleSeries = showAll ? seriesInfos : seriesInfos.slice(0, MAX_CHIPS)
  const overflow = seriesInfos.length - MAX_CHIPS

  const inner = (
    <div
      className="rg-day-cell-inner"
      style={{
        height: '100%',
        padding: 10,
        borderRadius: 12,
        overflow: 'hidden',
        border: isNextRaceDay
          ? '2px solid var(--rg-link)'
          : isToday
            ? '2px solid var(--rg-today-border)'
            : `1px solid ${isCurrentMonth ? 'var(--rg-card-border)' : 'transparent'}`,
        background: isToday
          ? 'var(--rg-elevated)'
          : isCurrentMonth ? 'var(--rg-surface)' : 'transparent',
        boxShadow: isHighlighted
          ? 'inset 0 0 0 3px var(--rg-success), 0 0 20px rgba(74,222,128,0.25)'
          : isNextRaceDay ? '0 0 16px rgba(122,179,255,0.25)' : undefined,
        opacity: !isCurrentMonth ? 0.3 : isPast ? 0.5 : 1,
        cursor: isCurrentMonth ? 'pointer' : 'default',
        transition: 'background 0.15s ease, opacity 0.2s ease, box-shadow 0.5s ease',
        minHeight: 100,
      }}
      onMouseEnter={e => {
        if (isCurrentMonth && !isToday) (e.currentTarget as HTMLDivElement).style.background = 'var(--rg-elevated)'
      }}
      onMouseLeave={e => {
        if (isCurrentMonth && !isToday) (e.currentTarget as HTMLDivElement).style.background = 'var(--rg-surface)'
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 6 }}>
        <span
          className="rg-day-number"
          style={{
            fontSize: 14,
            fontWeight: isToday || isNextRaceDay ? 700 : 500,
            color: isNextRaceDay ? 'var(--rg-link)' : isToday ? 'var(--rg-text)' : 'var(--rg-text2)',
          }}
        >
          {dayNumber}
        </span>
        {isNextRaceDay && (
          <>
            <span
              className="rg-next-up-label"
              style={{
                fontSize: 8,
                fontWeight: 700,
                color: 'var(--rg-link)',
                textTransform: 'uppercase',
                letterSpacing: 1,
              }}
            >
              {nextUpLabel.toUpperCase()}
            </span>
            <span
              className="rg-next-up-dot"
              style={{
                display: 'none',
                width: 6,
                height: 6,
                borderRadius: '50%',
                background: 'var(--rg-link)',
                flexShrink: 0,
              }}
            />
          </>
        )}
      </div>

      {seriesInfos.length > 0 && (
        <div className="rg-chip-list" style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          {visibleSeries.map(info => (
            <div
              key={info.series.id}
              style={{
                display: 'flex',
                alignItems: 'center',
                borderRadius: 6,
                overflow: 'hidden',
                lineHeight: 1,
              }}
            >
              <span
                className="rg-chip-series"
                style={{
                  padding: '5px 6px',
                  background: info.series.color,
                  color: info.series.textColor,
                  whiteSpace: 'nowrap',
                  flexShrink: 0,
                  fontSize: 11,
                  fontWeight: 600,
                }}
              >
                {info.series.shortName}
              </span>
              <span
                className="rg-chip-label"
                style={{
                  padding: '5px 7px',
                  background: 'rgba(255,255,255,0.06)',
                  color: 'var(--rg-chip-text)',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                  minWidth: 0,
                  flex: 1,
                  fontWeight: 500,
                  fontSize: 11,
                }}
              >
                {cleanEventName(info.eventNames[0])}
              </span>
            </div>
          ))}
          {!showAll && overflow > 0 && (
            <button
              className="rg-overflow-chip"
              onClick={e => {
                e.preventDefault()
                e.stopPropagation()
                setExpanded(true)
              }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 3,
                padding: '3px 8px',
                borderRadius: 6,
                fontSize: 11,
                fontWeight: 600,
                background: 'var(--rg-border)',
                color: 'var(--rg-text3)',
                width: 'fit-content',
                border: 'none',
              }}
            >
              <span>+{overflow}</span><span className="rg-overflow-more">{moreLabel}</span>
            </button>
          )}
        </div>
      )}
    </div>
  )

  const cellStyle: React.CSSProperties = { minWidth: 0, overflow: 'hidden', height: '100%' }

  if (isCurrentMonth) {
    return (
      <Link href={`/day/${date}`} style={{ display: 'block', textDecoration: 'none', ...cellStyle }}>
        {inner}
      </Link>
    )
  }

  return <div style={cellStyle}>{inner}</div>
}
