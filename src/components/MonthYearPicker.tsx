'use client'

import { useEffect, useRef, useMemo } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { AVAILABLE_YEARS } from '@/data/series-registry'
import { useYearData } from '@/hooks/useYearData'
import type { Locale } from '@/lib/i18n'

interface MonthYearPickerProps {
  open: boolean
  onClose: () => void
  currentMonth: string // 'yyyy-MM'
  onSelect: (month: string) => void
  locale: Locale
  anchorRef: React.RefObject<HTMLElement | null>
}

const MONTH_KEYS_EN = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
const MONTH_KEYS_UK = ['Січ', 'Лют', 'Бер', 'Кві', 'Тра', 'Чер', 'Лип', 'Сер', 'Вер', 'Жов', 'Лис', 'Гру']

function getMonthsWithEvents(series: { events: { sessions: { startUtc: string }[] }[] }[]): Set<number> {
  const months = new Set<number>()
  for (const s of series) {
    for (const event of s.events) {
      for (const session of event.sessions) {
        const m = new Date(session.startUtc).getMonth()
        months.add(m)
      }
    }
  }
  return months
}

export function MonthYearPicker({ open, onClose, currentMonth, onSelect, locale, anchorRef }: MonthYearPickerProps) {
  const panelRef = useRef<HTMLDivElement>(null)

  const [selectedYear, selectedMonthIdx] = useMemo(() => {
    const [y, m] = currentMonth.split('-').map(Number)
    return [y, m - 1]
  }, [currentMonth])

  const now = new Date()
  const todayYear = now.getFullYear()
  const todayMonth = now.getMonth()

  const yearSeries = useYearData(selectedYear)
  const activeMonths = useMemo(() => getMonthsWithEvents(yearSeries), [yearSeries])
  const monthLabels = locale === 'uk' ? MONTH_KEYS_UK : MONTH_KEYS_EN

  // Close on Escape
  useEffect(() => {
    if (!open) return
    const handleKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [open, onClose])

  // Close on outside click
  useEffect(() => {
    if (!open) return
    const handleClick = (e: MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(e.target as Node) &&
          anchorRef.current && !anchorRef.current.contains(e.target as Node)) {
        onClose()
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [open, onClose, anchorRef])

  if (!open) return null

  const handleMonthClick = (monthIdx: number) => {
    const mm = String(monthIdx + 1).padStart(2, '0')
    onSelect(`${selectedYear}-${mm}`)
    onClose()
  }

  const handleYearChange = (year: number) => {
    const mm = String(selectedMonthIdx + 1).padStart(2, '0')
    onSelect(`${year}-${mm}`)
  }

  const yearIdx = AVAILABLE_YEARS.indexOf(selectedYear)
  const canPrevYear = yearIdx < AVAILABLE_YEARS.length - 1
  const canNextYear = yearIdx > 0

  const yearNavBtn: React.CSSProperties = {
    width: 28,
    height: 28,
    borderRadius: 7,
    background: 'transparent',
    border: '1px solid var(--rg-border)',
    color: 'var(--rg-text2)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    flexShrink: 0,
  }

  return (
    <div
      ref={panelRef}
      style={{
        position: 'absolute',
        top: '100%',
        left: 0,
        marginTop: 6,
        background: 'var(--rg-elevated)',
        border: '1px solid var(--rg-border)',
        borderRadius: 12,
        padding: '14px 16px 16px',
        zIndex: 100,
        width: 280,
        boxShadow: '0 8px 24px rgba(0,0,0,0.25)',
        animation: 'rg-fade-in 0.15s ease',
      }}
    >
      {/* Year row */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 14, marginBottom: 12 }}>
        <button
          onClick={() => canPrevYear && handleYearChange(AVAILABLE_YEARS[yearIdx + 1])}
          style={{ ...yearNavBtn, opacity: canPrevYear ? 1 : 0.3 }}
          disabled={!canPrevYear}
        >
          <ChevronLeft style={{ width: 14, height: 14 }} />
        </button>
        <span style={{ fontSize: 16, fontWeight: 700, color: 'var(--rg-text)', minWidth: 50, textAlign: 'center' }}>
          {selectedYear}
        </span>
        <button
          onClick={() => canNextYear && handleYearChange(AVAILABLE_YEARS[yearIdx - 1])}
          style={{ ...yearNavBtn, opacity: canNextYear ? 1 : 0.3 }}
          disabled={!canNextYear}
        >
          <ChevronRight style={{ width: 14, height: 14 }} />
        </button>
      </div>

      {/* Month grid — 4x3 */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 6 }}>
        {monthLabels.map((label, idx) => {
          const isSelected = idx === selectedMonthIdx
          const isCurrent = selectedYear === todayYear && idx === todayMonth
          const hasEvents = activeMonths.has(idx)

          return (
            <button
              key={idx}
              onClick={() => handleMonthClick(idx)}
              style={{
                padding: '8px 4px',
                borderRadius: 8,
                border: isCurrent && !isSelected ? '1px solid var(--rg-link)' : '1px solid transparent',
                background: isSelected ? 'var(--rg-link)' : 'transparent',
                color: isSelected ? '#fff' : hasEvents ? 'var(--rg-text)' : 'var(--rg-text3)',
                fontSize: 13,
                fontWeight: isSelected ? 700 : 500,
                cursor: 'pointer',
                opacity: hasEvents ? 1 : 0.45,
                transition: 'background 0.15s, color 0.15s',
              }}
            >
              {label}
            </button>
          )
        })}
      </div>
    </div>
  )
}
