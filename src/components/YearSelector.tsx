'use client'

import { ChevronDown } from 'lucide-react'

interface YearSelectorProps {
  /** Currently selected year. */
  year: number
  /** Available years to choose from (ordered as you want them rendered). */
  years: readonly number[]
  /** Called when the user picks a year. */
  onChange: (year: number) => void
  /** Optional predicate — return false to disable a year. */
  isYearEnabled?: (year: number) => boolean
  /** Optional width override (default 92px — just enough for a 4-digit year + chevron). */
  width?: number
  /** Optional bottom margin (0 when placed inline in a flex row). */
  marginBottom?: number
}

export function YearSelector({
  year,
  years,
  onChange,
  isYearEnabled,
  width = 92,
  marginBottom = 0,
}: YearSelectorProps) {
  return (
    <div style={{ position: 'relative', marginBottom, width, flexShrink: 0 }}>
      <select
        value={year}
        onChange={e => onChange(Number(e.target.value))}
        style={{
          width: '100%',
          height: 'var(--rg-control-h)',
          padding: '0 28px 0 12px',
          borderRadius: 10,
          border: '1px solid var(--rg-border)',
          background: 'var(--rg-btn-bg)',
          color: 'var(--rg-text)',
          fontSize: 14,
          fontWeight: 600,
          cursor: 'pointer',
          appearance: 'none',
          outline: 'none',
        }}
      >
        {years.map(y => {
          const enabled = isYearEnabled ? isYearEnabled(y) : true
          return (
            <option key={y} value={y} disabled={!enabled}>
              {y}
            </option>
          )
        })}
      </select>
      <ChevronDown
        style={{
          position: 'absolute',
          right: 8,
          top: '50%',
          transform: 'translateY(-50%)',
          width: 14,
          height: 14,
          color: 'var(--rg-text3)',
          pointerEvents: 'none',
        }}
      />
    </div>
  )
}
