'use client'

import { useState } from 'react'
import { Heart } from 'lucide-react'
import { t, type Locale } from '@/lib/i18n'
import { SupportModal } from './SupportModal'

interface FooterProps {
  locale: Locale
}

export function Footer({ locale }: FooterProps) {
  const [supportOpen, setSupportOpen] = useState(false)

  return (
    <footer
      className="rg-footer"
      style={{
        padding: '32px 20px 40px',
        textAlign: 'center',
        fontSize: 13,
        color: 'var(--rg-text3)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 8,
      }}
    >
      <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}>
        {t('footer.madeWith', locale)}
        <Heart style={{ width: 13, height: 13, fill: '#e25555', color: '#e25555' }} />
        {t('footer.forFans', locale)}
      </span>
      <button
        type="button"
        className="rg-support-btn"
        onClick={() => setSupportOpen(true)}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 6,
          padding: '6px 14px',
          borderRadius: 8,
          background: 'var(--rg-btn-bg)',
          border: '1px solid var(--rg-border)',
          color: 'var(--rg-text2)',
          fontSize: 12,
          fontWeight: 600,
          cursor: 'pointer',
          font: 'inherit',
        }}
      >
        <Heart style={{ width: 13, height: 13, fill: '#e25555', color: '#e25555' }} />
        {t('footer.support', locale)}
      </button>
      <SupportModal open={supportOpen} onClose={() => setSupportOpen(false)} locale={locale} />
    </footer>
  )
}
