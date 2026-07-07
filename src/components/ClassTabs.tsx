'use client'

import type { ClassStandings } from '@/data/standings/types'

interface ClassTabsProps {
  classes: ClassStandings[]
  activeIdx: number
  onSelect: (idx: number) => void
  singleLabelMarginBottom?: number
}

export function ClassTabs({ classes, activeIdx, onSelect, singleLabelMarginBottom = 8 }: ClassTabsProps) {
  return (
    <>
      {classes.length > 1 && (
        <div
          className="rg-series-tabs"
          style={{
            display: 'flex', gap: 2, background: 'var(--rg-btn-bg)',
            borderRadius: 10, padding: 2, marginBottom: 12,
            width: 'fit-content', maxWidth: '100%', flexWrap: 'wrap',
          }}
        >
          {classes.map((cls, idx) => (
            <button
              key={cls.className}
              onClick={() => onSelect(idx)}
              className="rg-series-tab"
              style={{
                padding: '6px 14px', borderRadius: 8, fontSize: 12, fontWeight: 700,
                letterSpacing: 0.5, textTransform: 'uppercase',
                background: idx === activeIdx ? 'var(--rg-elevated)' : 'transparent',
                border: idx === activeIdx ? '1px solid var(--rg-border)' : '1px solid transparent',
                color: idx === activeIdx ? 'var(--rg-text)' : 'var(--rg-text3)',
                cursor: 'pointer',
              }}
            >
              {cls.className}
            </button>
          ))}
        </div>
      )}

      {classes.length === 1 && classes[0].className && classes[0].className !== 'Overall' && (
        <div style={{ marginBottom: singleLabelMarginBottom }}>
          <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1, textTransform: 'uppercase', color: 'var(--rg-text3)' }}>
            {classes[0].className}
          </span>
        </div>
      )}
    </>
  )
}
