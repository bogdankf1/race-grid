'use client'

import { useState, useRef, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { X, Sun, Moon, Globe, Search } from 'lucide-react'
import { TIMEZONE_GROUPS, getTimezoneLabel } from '@/lib/timezone'
import { t, type Locale } from '@/lib/i18n'
import type { Theme } from '@/lib/theme'

interface SettingsModalProps {
  open: boolean
  onClose: () => void
  timezone: string
  onTimezoneChange: (tz: string) => void
  theme: Theme
  onToggleTheme: () => void
  locale: Locale
  onToggleLocale: () => void
  spoilerFree: boolean
  onToggleSpoilerFree: () => void
}

function SettingRow({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 0', borderBottom: '1px solid var(--rg-border)' }}>
      <span style={{ fontSize: 14, color: 'var(--rg-text)' }}>{label}</span>
      {children}
    </div>
  )
}

function ToggleSwitch({ active, onClick }: { active: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      style={{
        width: 44,
        height: 24,
        borderRadius: 12,
        background: active ? 'var(--rg-link)' : 'var(--rg-border)',
        border: 'none',
        cursor: 'pointer',
        position: 'relative',
        transition: 'background 0.2s ease',
        flexShrink: 0,
      }}
    >
      <span
        style={{
          position: 'absolute',
          top: 3,
          left: active ? 23 : 3,
          width: 18,
          height: 18,
          borderRadius: '50%',
          background: '#fff',
          transition: 'left 0.2s ease',
        }}
      />
    </button>
  )
}

export function SettingsModal({
  open,
  onClose,
  timezone,
  onTimezoneChange,
  theme,
  onToggleTheme,
  locale,
  onToggleLocale,
  spoilerFree,
  onToggleSpoilerFree,
}: SettingsModalProps) {
  const [tzOpen, setTzOpen] = useState(false)
  const [tzSearch, setTzSearch] = useState('')
  const searchRef = useRef<HTMLInputElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)
  const touchStartY = useRef(0)
  const touchDelta = useRef(0)

  useEffect(() => {
    if (tzOpen && searchRef.current) searchRef.current.focus()
  }, [tzOpen])

  // Close on Escape
  useEffect(() => {
    if (!open) return
    function handleKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [open, onClose])

  // Prevent body scroll when open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
      return () => { document.body.style.overflow = '' }
    }
  }, [open])

  if (!open) return null

  const cityLabel = timezone.split('/').pop()?.replace(/_/g, ' ') ?? timezone

  const filtered = Object.entries(TIMEZONE_GROUPS).reduce<Record<string, string[]>>(
    (acc, [group, zones]) => {
      const matches = zones.filter(tz =>
        tz.toLowerCase().includes(tzSearch.toLowerCase()) ||
        getTimezoneLabel(tz).toLowerCase().includes(tzSearch.toLowerCase())
      )
      if (matches.length > 0) acc[group] = matches
      return acc
    },
    {}
  )

  const modal = (
    <div
      onClick={onClose}
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
            setTimeout(onClose, 200)
          } else {
            panelRef.current.style.transition = 'transform 0.2s ease'
            panelRef.current.style.transform = 'translateY(0)'
          }
        }}
        className="rg-settings-panel"
        style={{
          width: '100%',
          maxWidth: 420,
          maxHeight: '85dvh',
          background: 'var(--rg-surface)',
          borderRadius: '20px 20px 0 0',
          padding: '0 24px 24px',
          paddingBottom: 'max(24px, env(safe-area-inset-bottom))',
          overflowY: 'auto',
          animation: 'rg-slide-up 0.25s ease',
        }}
      >
        {/* Drag handle */}
        <div style={{ display: 'flex', justifyContent: 'center', padding: '12px 0 8px', cursor: 'grab' }}>
          <div style={{ width: 36, height: 4, borderRadius: 2, background: 'var(--rg-border)' }} />
        </div>

        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
          <h2 className="font-display" style={{ fontSize: 18, color: 'var(--rg-text)', margin: 0, letterSpacing: 0.5 }}>
            {t('settings.title', locale)}
          </h2>
          <button
            onClick={onClose}
            style={{
              width: 32, height: 32, borderRadius: 8,
              background: 'var(--rg-elevated)', border: 'none',
              color: 'var(--rg-text3)', cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}
          >
            <X style={{ width: 16, height: 16 }} />
          </button>
        </div>

        {/* Theme */}
        <SettingRow label={t('settings.theme', locale)}>
          <button
            onClick={onToggleTheme}
            style={{
              display: 'flex', alignItems: 'center', gap: 8,
              padding: '6px 14px', borderRadius: 8,
              background: 'var(--rg-elevated)', border: '1px solid var(--rg-border)',
              color: 'var(--rg-text)', fontSize: 13, cursor: 'pointer',
            }}
          >
            {theme === 'dark' ? <Moon style={{ width: 14, height: 14 }} /> : <Sun style={{ width: 14, height: 14 }} />}
            {theme === 'dark' ? t('settings.dark', locale) : t('settings.light', locale)}
          </button>
        </SettingRow>

        {/* Language */}
        <SettingRow label={t('settings.language', locale)}>
          <button
            onClick={onToggleLocale}
            style={{
              display: 'flex', alignItems: 'center', gap: 8,
              padding: '6px 14px', borderRadius: 8,
              background: 'var(--rg-elevated)', border: '1px solid var(--rg-border)',
              color: 'var(--rg-text)', fontSize: 13, fontWeight: 600, cursor: 'pointer',
            }}
          >
            {locale === 'en' ? '🇬🇧 English' : '🇺🇦 Українська'}
          </button>
        </SettingRow>

        {/* Spoiler-free */}
        <SettingRow label={t('spoiler.title', locale)}>
          <ToggleSwitch active={spoilerFree} onClick={onToggleSpoilerFree} />
        </SettingRow>

        {/* Timezone */}
        <div style={{ paddingTop: 14 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
            <span style={{ fontSize: 14, color: 'var(--rg-text)' }}>{t('settings.timezone', locale)}</span>
            <button
              onClick={() => setTzOpen(!tzOpen)}
              style={{
                display: 'flex', alignItems: 'center', gap: 8,
                padding: '6px 14px', borderRadius: 8,
                background: 'var(--rg-elevated)', border: '1px solid var(--rg-border)',
                color: 'var(--rg-text)', fontSize: 13, cursor: 'pointer',
              }}
            >
              <Globe style={{ width: 14, height: 14 }} />
              {cityLabel}
            </button>
          </div>

          {tzOpen && (
            <div style={{
              borderRadius: 12,
              background: 'var(--rg-elevated)',
              border: '1px solid var(--rg-border)',
              maxHeight: 280,
              overflowY: 'auto',
            }}>
              {/* Search */}
              <div style={{ position: 'sticky', top: 0, background: 'var(--rg-elevated)', padding: 10, borderBottom: '1px solid var(--rg-border)' }}>
                <div style={{ position: 'relative' }}>
                  <Search style={{ position: 'absolute', left: 10, top: '50%', transform: 'translateY(-50%)', width: 14, height: 14, color: 'var(--rg-text3)' }} />
                  <input
                    ref={searchRef}
                    value={tzSearch}
                    onChange={e => setTzSearch(e.target.value)}
                    placeholder={t('tz.search', locale)}
                    style={{
                      width: '100%', padding: '8px 12px 8px 32px', borderRadius: 8,
                      background: 'var(--rg-surface)', border: '1px solid var(--rg-border)',
                      color: 'var(--rg-text)', fontSize: 13, outline: 'none',
                    }}
                  />
                </div>
              </div>

              {/* Timezone list */}
              <div style={{ padding: 6 }}>
                {Object.entries(filtered).map(([group, zones]) => (
                  <div key={group}>
                    <div style={{ padding: '8px 10px 4px', fontSize: 10, fontWeight: 700, color: 'var(--rg-text3)', textTransform: 'uppercase', letterSpacing: 1.2 }}>
                      {t(`tz.${group.toLowerCase()}`, locale)}
                    </div>
                    {zones.map(tz => (
                      <button
                        key={tz}
                        onClick={() => { onTimezoneChange(tz); setTzOpen(false); setTzSearch('') }}
                        style={{
                          display: 'block', width: '100%', textAlign: 'left',
                          padding: '7px 10px', borderRadius: 6, fontSize: 13,
                          color: tz === timezone ? 'var(--rg-text)' : 'var(--rg-text2)',
                          background: tz === timezone ? 'var(--rg-surface)' : 'transparent',
                          border: 'none', cursor: 'pointer',
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
      </div>
    </div>
  )

  return createPortal(modal, document.body)
}
