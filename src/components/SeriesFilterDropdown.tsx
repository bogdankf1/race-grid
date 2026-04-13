'use client'

import { useState, useRef, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { Filter, ChevronDown, Check } from 'lucide-react'
import { ALL_SERIES } from '@/data/series-registry'
import { t, type Locale } from '@/lib/i18n'
import type { SeriesConfig } from '@/lib/types'

function getSeriesProgress(series: SeriesConfig): { completed: number; total: number } {
  const now = Date.now()
  const total = Math.max(series.events.length, ...series.events.map(e => e.round ?? 0))
  const completed = series.events.filter(event => {
    const lastSession = event.sessions[event.sessions.length - 1]
    if (!lastSession) return false
    const endMs = new Date(lastSession.startUtc).getTime() + (lastSession.durationMinutes || 120) * 60000
    return now >= endMs
  }).length
  return { completed, total }
}

interface SeriesFilterDropdownProps {
  selectedIds: string[]
  onToggle: (id: string) => void
  onSetAll: (ids: string[]) => void
  locale: Locale
  showProgress?: boolean
}

interface SeriesGroup {
  labelKey: string
  ids: string[]
}

const GROUPS: SeriesGroup[] = [
  { labelKey: 'group.openwheel', ids: ['f1', 'indycar', 'superformula'] },
  { labelKey: 'group.endurance', ids: ['wec', 'elms', 'imsa', 'igtc'] },
  { labelKey: 'group.gt', ids: ['dtm', 'gtwc', 'supergt', 'nls', 'supercars'] },
  { labelKey: 'group.stock', ids: ['nascar'] },
  { labelKey: 'group.rally', ids: ['wrc'] },
]

function useIsMobile() {
  const [mobile, setMobile] = useState(false)
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 640px)')
    setMobile(mq.matches)
    const handler = (e: MediaQueryListEvent) => setMobile(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])
  return mobile
}

export function SeriesFilterDropdown({ selectedIds, onToggle, onSetAll, locale, showProgress = true }: SeriesFilterDropdownProps) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)
  const touchStartY = useRef(0)
  const touchDelta = useRef(0)
  const isMobile = useIsMobile()

  useEffect(() => {
    if (!open || isMobile) return
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [open, isMobile])

  useEffect(() => {
    if (open && isMobile) {
      document.body.style.overflow = 'hidden'
      return () => { document.body.style.overflow = '' }
    }
  }, [open, isMobile])

  const allSelected = selectedIds.length === ALL_SERIES.length

  const label = allSelected
    ? t('filter.all', locale)
    : `${selectedIds.length} ${t('filter.series', locale)}`

  const toggleAll = () => {
    if (allSelected) {
      onSetAll([])
    } else {
      onSetAll(ALL_SERIES.map(s => s.id))
    }
  }

  const toggleGroup = (group: SeriesGroup) => {
    const allInGroupSelected = group.ids.every(id => selectedIds.includes(id))
    if (allInGroupSelected) {
      onSetAll(selectedIds.filter(id => !group.ids.includes(id)))
    } else {
      const merged = new Set([...selectedIds, ...group.ids])
      onSetAll(Array.from(merged))
    }
  }

  const checkboxStyle = (active: boolean) => ({
    width: 18,
    height: 18,
    borderRadius: 4,
    border: `2px solid ${active ? 'var(--rg-success)' : 'var(--rg-border)'}`,
    background: active ? 'var(--rg-success)' : 'transparent',
    display: 'flex' as const,
    alignItems: 'center' as const,
    justifyContent: 'center' as const,
    flexShrink: 0,
  })

  return (
    <div ref={ref} style={{ position: 'relative' }}>
      <button
        className="rg-control"
        onClick={() => setOpen(!open)}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 6,
          padding: '0 14px',
          borderRadius: 10,
          background: 'var(--rg-btn-bg)',
          border: '1px solid var(--rg-border)',
          color: 'var(--rg-text2)',
          fontSize: 13,
          cursor: 'pointer',
          whiteSpace: 'nowrap',
        }}
      >
        <Filter style={{ width: 15, height: 15 }} />
        <span className="rg-btn-label">{label}</span>
        <ChevronDown className="rg-btn-label" style={{ width: 13, height: 13 }} />
      </button>

      {open && !isMobile && (
        <div
          className="rg-dropdown-panel"
          style={{
            position: 'absolute',
            right: 0,
            top: '100%',
            marginTop: 8,
            width: 300,
            maxHeight: 480,
            overflowY: 'auto',
            borderRadius: 14,
            background: 'var(--rg-surface)',
            border: '1px solid var(--rg-border)',
            boxShadow: '0 16px 48px rgba(0,0,0,0.5)',
            zIndex: 50,
            padding: 8,
          }}
        >
          {renderPanelContent()}
        </div>
      )}

      {open && isMobile && createPortal(
        <div
          onClick={() => setOpen(false)}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 100,
            background: 'rgba(0,0,0,0.6)',
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'center',
          }}
        >
          <div
            ref={panelRef}
            onClick={e => e.stopPropagation()}
            onTouchStart={e => {
              touchStartY.current = e.touches[0].clientY
              touchDelta.current = 0
            }}
            onTouchMove={e => {
              const delta = e.touches[0].clientY - touchStartY.current
              touchDelta.current = delta
              if (delta > 0 && panelRef.current) {
                panelRef.current.style.transform = `translateY(${delta}px)`
                panelRef.current.style.transition = 'none'
              }
            }}
            onTouchEnd={() => {
              if (!panelRef.current) return
              if (touchDelta.current > 80) {
                panelRef.current.style.transition = 'transform 0.2s ease'
                panelRef.current.style.transform = 'translateY(100%)'
                setTimeout(() => setOpen(false), 200)
              } else {
                panelRef.current.style.transition = 'transform 0.2s ease'
                panelRef.current.style.transform = 'translateY(0)'
              }
            }}
            style={{
              width: '100%',
              maxHeight: '75dvh',
              overflowY: 'auto',
              background: 'var(--rg-surface)',
              borderRadius: '20px 20px 0 0',
              padding: '0 8px 8px',
              paddingBottom: 'max(8px, env(safe-area-inset-bottom))',
              animation: 'rg-slide-up 0.25s ease',
            }}
          >
            {/* Drag handle */}
            <div style={{ display: 'flex', justifyContent: 'center', padding: '12px 0 8px', cursor: 'grab' }}>
              <div style={{ width: 36, height: 4, borderRadius: 2, background: 'var(--rg-border)' }} />
            </div>
            {renderPanelContent()}
          </div>
        </div>,
        document.body,
      )}
    </div>
  )

  function renderPanelContent() {
    return (
      <>
        {/* Select / Deselect all */}
        <button
          onClick={toggleAll}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            width: '100%',
            textAlign: 'left',
            padding: '10px 14px',
            borderRadius: 8,
            fontSize: 13,
            fontWeight: 600,
            color: 'var(--rg-text2)',
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            borderBottom: '1px solid var(--rg-border)',
            marginBottom: 4,
          }}
        >
          <span style={checkboxStyle(allSelected)}>
            {allSelected && <Check style={{ width: 12, height: 12, color: '#000' }} />}
          </span>
          <span>{allSelected ? t('filter.deselectAll', locale) : t('filter.selectAll', locale)}</span>
        </button>

        {/* Grouped series list */}
        {GROUPS.map(group => {
          const groupSeries = group.ids
            .map(id => ALL_SERIES.find(s => s.id === id))
            .filter(Boolean) as typeof ALL_SERIES
          const allGroupSelected = group.ids.every(id => selectedIds.includes(id))
          const someGroupSelected = group.ids.some(id => selectedIds.includes(id))

          return (
            <div key={group.labelKey}>
              {/* Group header — clickable to toggle entire group */}
              <button
                onClick={() => toggleGroup(group)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                  width: '100%',
                  textAlign: 'left',
                  padding: '8px 14px',
                  marginTop: 6,
                  borderRadius: 8,
                  fontSize: 11,
                  fontWeight: 700,
                  color: 'var(--rg-text3)',
                  textTransform: 'uppercase',
                  letterSpacing: 1,
                  background: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                }}
              >
                <span
                  style={{
                    ...checkboxStyle(allGroupSelected),
                    width: 16,
                    height: 16,
                    borderRadius: 3,
                    border: `2px solid ${allGroupSelected ? 'var(--rg-success)' : someGroupSelected ? 'var(--rg-success)' : 'var(--rg-border)'}`,
                    background: allGroupSelected ? 'var(--rg-success)' : someGroupSelected ? 'color-mix(in srgb, var(--rg-success) 30%, transparent)' : 'transparent',
                  }}
                >
                  {allGroupSelected && <Check style={{ width: 10, height: 10, color: '#000' }} />}
                  {someGroupSelected && !allGroupSelected && (
                    <span style={{ width: 8, height: 2, background: 'var(--rg-success)', borderRadius: 1 }} />
                  )}
                </span>
                <span style={{ flex: 1 }}>{t(group.labelKey, locale)}</span>
              </button>

              {/* Series in group */}
              {groupSeries.map(series => {
                const active = selectedIds.includes(series.id)
                const progress = showProgress ? getSeriesProgress(series) : null
                const pct = progress && progress.total > 0 ? (progress.completed / progress.total) * 100 : 0
                return (
                  <button
                    key={series.id}
                    onClick={() => onToggle(series.id)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 12,
                      width: '100%',
                      textAlign: 'left',
                      padding: '9px 14px 9px 28px',
                      borderRadius: 8,
                      fontSize: 13,
                      color: active ? 'var(--rg-text)' : 'var(--rg-text3)',
                      background: active ? 'var(--rg-elevated)' : 'transparent',
                      border: 'none',
                      cursor: 'pointer',
                    }}
                  >
                    <span
                      style={{
                        width: 10,
                        height: 10,
                        borderRadius: '50%',
                        background: active ? series.color : 'var(--rg-border)',
                        flexShrink: 0,
                      }}
                    />
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                        <span>{series.name}</span>
                        {progress && (
                          <span style={{ fontSize: 10, color: 'var(--rg-text3)', fontWeight: 500, marginLeft: 'auto' }}>
                            {progress.completed}/{progress.total}
                          </span>
                        )}
                      </div>
                      {progress && (
                        <div style={{ height: 3, borderRadius: 2, background: 'var(--rg-border)', marginTop: 5 }}>
                          <div style={{ height: '100%', borderRadius: 2, background: series.color, width: `${pct}%`, transition: 'width 0.3s ease' }} />
                        </div>
                      )}
                    </div>
                    <span style={checkboxStyle(active)}>
                      {active && <Check style={{ width: 12, height: 12, color: '#000' }} />}
                    </span>
                  </button>
                )
              })}
            </div>
          )
        })}
      </>
    )
  }
}
