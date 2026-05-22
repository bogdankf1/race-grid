'use client'

import { useRef, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { X, ExternalLink } from 'lucide-react'
import { t, type Locale } from '@/lib/i18n'

interface SupportModalProps {
  open: boolean
  onClose: () => void
  locale: Locale
}

const MONOBANK_URL = 'https://send.monobank.ua/jar/EHzLuicin'
const PATREON_URL = 'https://patreon.com/BohdanBurukhin'

export function SupportModal({ open, onClose, locale }: SupportModalProps) {
  const panelRef = useRef<HTMLDivElement>(null)
  const touchStartY = useRef(0)
  const touchDelta = useRef(0)

  useEffect(() => {
    if (!open) return
    function handleKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [open, onClose])

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
      return () => { document.body.style.overflow = '' }
    }
  }, [open])

  useEffect(() => {
    if (!open) return
    const panel = panelRef.current
    if (!panel) return
    const focusable = panel.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    )
    if (focusable.length === 0) return
    const first = focusable[0]
    const last = focusable[focusable.length - 1]
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') { onClose(); return }
      if (e.key !== 'Tab') return
      if (e.shiftKey) {
        if (document.activeElement === first) { e.preventDefault(); last.focus() }
      } else {
        if (document.activeElement === last) { e.preventDefault(); first.focus() }
      }
    }
    panel.addEventListener('keydown', handleKeyDown)
    first.focus()
    return () => panel.removeEventListener('keydown', handleKeyDown)
  }, [open, onClose])

  if (!open) return null

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
        role="dialog"
        aria-modal="true"
        aria-label={t('support.title', locale)}
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
          maxWidth: 460,
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
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
          <h2 className="font-display" style={{ fontSize: 18, color: 'var(--rg-text)', margin: 0, letterSpacing: 0.5 }}>
            {t('support.title', locale)}
          </h2>
          <button
            onClick={onClose}
            aria-label="Close"
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

        <p style={{ fontSize: 13, color: 'var(--rg-text2)', lineHeight: 1.5, margin: '0 0 20px' }}>
          {t('support.subtitle', locale)}
        </p>

        {/* Cards */}
        <div className="rg-support-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
          <SupportCard
            href={MONOBANK_URL}
            flag="🇺🇦"
            label={t('support.ukraine.label', locale)}
            method={t('support.ukraine.method', locale)}
          />
          <SupportCard
            href={PATREON_URL}
            flag="🌍"
            label={t('support.intl.label', locale)}
            method={t('support.intl.method', locale)}
          />
        </div>

        <p style={{ fontSize: 13, color: 'var(--rg-text3)', textAlign: 'center', margin: '20px 0 0' }}>
          {t('support.thanks', locale)}
        </p>
      </div>

      {/* Stack cards on small screens */}
      <style>{`
        @media (max-width: 380px) {
          .rg-support-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  )

  return createPortal(modal, document.body)
}

function SupportCard({
  href, flag, label, method,
}: { href: string; flag: string; label: string; method: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
        padding: '24px 16px',
        borderRadius: 14,
        background: 'var(--rg-elevated)',
        border: '1px solid var(--rg-border)',
        textDecoration: 'none',
        color: 'var(--rg-text)',
        textAlign: 'center',
        transition: 'transform 0.15s ease, border-color 0.15s ease',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = 'var(--rg-link)'
        e.currentTarget.style.transform = 'translateY(-2px)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = 'var(--rg-border)'
        e.currentTarget.style.transform = 'translateY(0)'
      }}
    >
      <span style={{ fontSize: 36, lineHeight: 1 }} aria-hidden>{flag}</span>
      <span style={{ fontSize: 14, fontWeight: 600, color: 'var(--rg-text)' }}>{label}</span>
      <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4, fontSize: 12, color: 'var(--rg-text3)' }}>
        {method}
        <ExternalLink style={{ width: 11, height: 11 }} />
      </span>
    </a>
  )
}
