'use client'

import { useState, useRef, useEffect } from 'react'
import { Filter, ChevronDown, Check } from 'lucide-react'
import { ALL_SERIES } from '@/data/series-registry'

interface SeriesFilterDropdownProps {
  selectedIds: string[]
  onToggle: (id: string) => void
  onSetAll: (ids: string[]) => void
}

export function SeriesFilterDropdown({ selectedIds, onToggle, onSetAll }: SeriesFilterDropdownProps) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  const allSelected = selectedIds.length === ALL_SERIES.length

  const label = allSelected
    ? 'All series'
    : `${selectedIds.length} series`

  const toggleAll = () => {
    if (allSelected) {
      onSetAll([])
    } else {
      onSetAll(ALL_SERIES.map(s => s.id))
    }
  }

  return (
    <div ref={ref} style={{ position: 'relative' }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 6,
          padding: '8px 14px',
          borderRadius: 10,
          background: '#252538',
          border: '1px solid #2e2e46',
          color: '#aaa',
          fontSize: 13,
          cursor: 'pointer',
          whiteSpace: 'nowrap',
        }}
      >
        <Filter style={{ width: 15, height: 15 }} />
        <span>{label}</span>
        <ChevronDown style={{ width: 13, height: 13 }} />
      </button>

      {open && (
        <div
          className="rg-dropdown-panel"
          style={{
            position: 'absolute',
            right: 0,
            top: '100%',
            marginTop: 8,
            width: 280,
            borderRadius: 14,
            background: '#1c1c30',
            border: '1px solid #2e2e46',
            boxShadow: '0 16px 48px rgba(0,0,0,0.5)',
            zIndex: 50,
            padding: 8,
          }}
        >
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
              color: '#bbb',
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              borderBottom: '1px solid #2a2a42',
              marginBottom: 4,
            }}
          >
            <span
              style={{
                width: 18,
                height: 18,
                borderRadius: 4,
                border: `2px solid ${allSelected ? '#4ade80' : '#444'}`,
                background: allSelected ? '#4ade80' : 'transparent',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              {allSelected && <Check style={{ width: 12, height: 12, color: '#000' }} />}
            </span>
            <span>{allSelected ? 'Deselect all' : 'Select all'}</span>
          </button>

          {/* Series list */}
          {ALL_SERIES.map(series => {
            const active = selectedIds.includes(series.id)
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
                  padding: '10px 14px',
                  borderRadius: 8,
                  fontSize: 13,
                  color: active ? '#eee' : '#666',
                  background: active ? '#252538' : 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                }}
              >
                {/* Color dot */}
                <span
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: '50%',
                    background: active ? series.color : '#3a3a50',
                    flexShrink: 0,
                  }}
                />
                {/* Name */}
                <span style={{ flex: 1 }}>{series.name}</span>
                {/* Checkbox */}
                <span
                  style={{
                    width: 18,
                    height: 18,
                    borderRadius: 4,
                    border: `2px solid ${active ? '#4ade80' : '#3a3a50'}`,
                    background: active ? '#4ade80' : 'transparent',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  {active && <Check style={{ width: 12, height: 12, color: '#000' }} />}
                </span>
              </button>
            )
          })}
        </div>
      )}
    </div>
  )
}
