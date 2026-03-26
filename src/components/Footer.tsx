import { Heart } from 'lucide-react'
import { t, type Locale } from '@/lib/i18n'

interface FooterProps {
  locale: Locale
}

export function Footer({ locale }: FooterProps) {
  return (
    <footer
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
      <a
        href="https://ko-fi.com/bohdanburukhin"
        target="_blank"
        rel="noopener noreferrer"
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
          textDecoration: 'none',
        }}
      >
        <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 8h1a4 4 0 010 8h-1"/>
          <path d="M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z"/>
          <line x1="6" y1="1" x2="6" y2="4"/>
          <line x1="10" y1="1" x2="10" y2="4"/>
          <line x1="14" y1="1" x2="14" y2="4"/>
        </svg>
        {t('footer.support', locale)}
      </a>
    </footer>
  )
}
