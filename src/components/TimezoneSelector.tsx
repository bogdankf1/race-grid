'use client'

import { useState, useRef, useEffect } from 'react'
import { Globe, ChevronDown, Search } from 'lucide-react'
import { TIMEZONE_GROUPS, getTimezoneLabel } from '@/lib/timezone'

interface TimezoneSelectorProps {
  value: string
  onChange: (tz: string) => void
}

export function TimezoneSelector({ value, onChange }: TimezoneSelectorProps) {
  const [open, setOpen] = useState(false)
  const [search, setSearch] = useState('')
  const ref = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  useEffect(() => {
    if (open && inputRef.current) {
      inputRef.current.focus()
    }
  }, [open])

  const cityLabel = value.split('/').pop()?.replace(/_/g, ' ') ?? value

  const filtered = Object.entries(TIMEZONE_GROUPS).reduce<Record<string, string[]>>(
    (acc, [group, zones]) => {
      const matches = zones.filter(tz =>
        tz.toLowerCase().includes(search.toLowerCase()) ||
        getTimezoneLabel(tz).toLowerCase().includes(search.toLowerCase())
      )
      if (matches.length > 0) acc[group] = matches
      return acc
    },
    {}
  )

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
        <Globe style={{ width: 15, height: 15 }} />
        <span>{cityLabel}</span>
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
            width: 300,
            maxHeight: 360,
            overflowY: 'auto',
            borderRadius: 14,
            background: '#1c1c30',
            border: '1px solid #2e2e46',
            boxShadow: '0 16px 48px rgba(0,0,0,0.5)',
            zIndex: 50,
          }}
        >
          {/* Search */}
          <div
            style={{
              position: 'sticky',
              top: 0,
              background: '#1c1c30',
              padding: 12,
              borderBottom: '1px solid #2e2e46',
            }}
          >
            <div style={{ position: 'relative' }}>
              <Search
                style={{
                  position: 'absolute',
                  left: 12,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  width: 15,
                  height: 15,
                  color: '#666',
                }}
              />
              <input
                ref={inputRef}
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Search timezone..."
                style={{
                  width: '100%',
                  padding: '10px 14px 10px 36px',
                  borderRadius: 10,
                  background: '#252538',
                  border: '1px solid #2e2e46',
                  color: '#eee',
                  fontSize: 13,
                  outline: 'none',
                }}
              />
            </div>
          </div>

          {/* Options */}
          <div style={{ padding: 8 }}>
            {Object.entries(filtered).map(([group, zones]) => (
              <div key={group}>
                <div
                  style={{
                    padding: '10px 14px 6px',
                    fontSize: 11,
                    fontWeight: 700,
                    color: '#555',
                    textTransform: 'uppercase',
                    letterSpacing: 1.5,
                  }}
                >
                  {group}
                </div>
                {zones.map(tz => (
                  <button
                    key={tz}
                    onClick={() => {
                      onChange(tz)
                      setOpen(false)
                      setSearch('')
                    }}
                    style={{
                      display: 'block',
                      width: '100%',
                      textAlign: 'left',
                      padding: '8px 14px',
                      borderRadius: 8,
                      fontSize: 13,
                      color: tz === value ? '#eee' : '#999',
                      background: tz === value ? '#252538' : 'transparent',
                      border: 'none',
                      cursor: 'pointer',
                    }}
                  >
                    {getTimezoneLabel(tz)}
                  </button>
                ))}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
