'use client'

import { useState } from 'react'
import Link from 'next/link'
import { DaySeriesInfo } from '@/hooks/useCalendarEvents'

interface DayCellProps {
  date: string
  dayNumber: number
  isCurrentMonth: boolean
  isToday: boolean
  seriesInfos: DaySeriesInfo[]
}

function cleanEventName(name: string): string {
  return name
    .replace(/Grand Prix/gi, 'GP')
    .replace(/\d+\.\s*/g, '')
    .replace(/^NLS\s*\d+\s*[—–-]\s*/i, '')
}

export function DayCell({ date, dayNumber, isCurrentMonth, isToday, seriesInfos }: DayCellProps) {
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
        border: isToday
          ? '2px solid rgba(255,255,255,0.25)'
          : `1px solid ${isCurrentMonth ? '#2a2a42' : 'transparent'}`,
        background: isToday
          ? '#252540'
          : isCurrentMonth ? '#1c1c30' : 'transparent',
        opacity: isCurrentMonth ? 1 : 0.3,
        cursor: isCurrentMonth ? 'pointer' : 'default',
        transition: 'background 0.15s ease',
        minHeight: 100,
      }}
      onMouseEnter={e => {
        if (isCurrentMonth) (e.currentTarget as HTMLDivElement).style.background = '#232340'
      }}
      onMouseLeave={e => {
        if (isCurrentMonth) (e.currentTarget as HTMLDivElement).style.background = isToday ? '#252540' : '#1c1c30'
      }}
    >
      <span
        className="rg-day-number"
        style={{
          fontSize: 14,
          fontWeight: isToday ? 700 : 500,
          color: isToday ? '#fff' : '#999',
          display: 'block',
          marginBottom: 6,
        }}
      >
        {dayNumber}
      </span>

      {seriesInfos.length > 0 && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
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
                  color: '#ccc',
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
                padding: '3px 8px',
                borderRadius: 6,
                fontSize: 11,
                fontWeight: 600,
                background: '#2a2a42',
                color: '#888',
                width: 'fit-content',
                border: 'none',
              }}
            >
              +{overflow} more
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
