'use client'

import { useState, useRef, useEffect } from 'react'
import { Bell, BellRing } from 'lucide-react'
import { useNotifications, type LeadTime } from '@/hooks/useNotifications'
import { ALL_SERIES } from '@/data/series-registry'
import { t, type Locale } from '@/lib/i18n'

interface NotificationSettingsProps {
  locale: Locale
}

const LEAD_OPTIONS: LeadTime[] = [15, 30, 60]

export function NotificationSettings({ locale }: NotificationSettingsProps) {
  const { prefs, permission, enable, disable, setLeadMinutes, toggleSeries } = useNotifications()
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  const isDenied = permission === 'denied'

  return (
    <div ref={ref} style={{ position: 'relative' }}>
      <button
        onClick={() => setOpen(!open)}
        title={t(prefs.enabled ? 'notify.disable' : 'notify.enable', locale)}
        style={{
          height: 36,
          width: 36,
          borderRadius: 10,
          background: 'var(--rg-btn-bg)',
          border: '1px solid var(--rg-border)',
          color: prefs.enabled ? 'var(--rg-link)' : 'var(--rg-text2)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {prefs.enabled ? <BellRing style={{ width: 15, height: 15 }} /> : <Bell style={{ width: 15, height: 15 }} />}
      </button>

      {open && (
        <div
          className="rg-dropdown-panel"
          style={{
            position: 'absolute',
            top: '100%',
            right: 0,
            marginTop: 8,
            width: 280,
            background: 'var(--rg-surface)',
            border: '1px solid var(--rg-card-border)',
            borderRadius: 14,
            padding: 16,
            zIndex: 50,
            boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
            <Bell style={{ width: 14, height: 14, color: 'var(--rg-text3)' }} />
            <span style={{ fontSize: 12, fontWeight: 600, color: 'var(--rg-text3)', textTransform: 'uppercase', letterSpacing: 1 }}>
              {t('notify.title', locale)}
            </span>
          </div>

          {isDenied ? (
            <p style={{ fontSize: 13, color: 'var(--rg-text3)' }}>
              {t('notify.denied', locale)}
            </p>
          ) : (
            <>
              {/* Enable/Disable toggle */}
              <button
                onClick={() => prefs.enabled ? disable() : enable()}
                style={{
                  width: '100%',
                  padding: '10px 14px',
                  borderRadius: 10,
                  background: prefs.enabled ? 'var(--rg-link)' : 'var(--rg-elevated)',
                  border: 'none',
                  color: prefs.enabled ? '#fff' : 'var(--rg-text)',
                  fontSize: 13,
                  fontWeight: 600,
                  cursor: 'pointer',
                  marginBottom: 14,
                }}
              >
                {t(prefs.enabled ? 'notify.disable' : 'notify.enable', locale)}
              </button>

              {prefs.enabled && (
                <>
                  {/* Lead time */}
                  <div style={{ marginBottom: 12 }}>
                    <div style={{ fontSize: 11, color: 'var(--rg-text3)', fontWeight: 600, marginBottom: 8 }}>
                      {t('notify.lead', locale)} {t('notify.before', locale)}
                    </div>
                    <div style={{ display: 'flex', gap: 6 }}>
                      {LEAD_OPTIONS.map((m) => (
                        <button
                          key={m}
                          onClick={() => setLeadMinutes(m)}
                          style={{
                            flex: 1,
                            padding: '7px 0',
                            borderRadius: 8,
                            border: '1px solid var(--rg-border)',
                            background: prefs.leadMinutes === m ? 'var(--rg-link)' : 'var(--rg-elevated)',
                            color: prefs.leadMinutes === m ? '#fff' : 'var(--rg-text2)',
                            fontSize: 12,
                            fontWeight: 600,
                            cursor: 'pointer',
                          }}
                        >
                          {t(`notify.${m}`, locale)}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Series filter */}
                  <div>
                    <div style={{ fontSize: 11, color: 'var(--rg-text3)', fontWeight: 600, marginBottom: 8 }}>
                      {t('notify.series', locale)}
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 4, maxHeight: 180, overflowY: 'auto' }}>
                      {ALL_SERIES.map((s) => (
                        <label
                          key={s.id}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 8,
                            padding: '5px 8px',
                            borderRadius: 8,
                            cursor: 'pointer',
                            fontSize: 13,
                            color: 'var(--rg-text)',
                          }}
                        >
                          <input
                            type="checkbox"
                            checked={prefs.seriesIds.includes(s.id)}
                            onChange={() => toggleSeries(s.id)}
                            style={{ accentColor: s.color }}
                          />
                          <span
                            style={{
                              width: 8,
                              height: 8,
                              borderRadius: '50%',
                              background: s.color,
                              flexShrink: 0,
                            }}
                          />
                          {s.shortName}
                        </label>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </>
          )}
        </div>
      )}
    </div>
  )
}
