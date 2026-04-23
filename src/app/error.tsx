'use client'

export default function Error({
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '60vh',
      padding: 32,
      textAlign: 'center',
    }}>
      <span style={{ fontSize: 64, marginBottom: 16 }}>⚠️</span>
      <h1 className="font-display" style={{
        fontSize: 48,
        color: 'var(--rg-text)',
        margin: '0 0 8px',
        letterSpacing: 1,
      }}>
        Something went wrong
      </h1>
      <p style={{ fontSize: 16, color: 'var(--rg-text3)', marginBottom: 24 }}>
        An unexpected error occurred. Try again or go back to the calendar.
      </p>
      <div style={{ display: 'flex', gap: 12 }}>
        <button
          onClick={reset}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            padding: '12px 24px',
            borderRadius: 12,
            background: 'var(--rg-accent)',
            color: '#fff',
            fontSize: 14,
            fontWeight: 600,
            border: 'none',
            cursor: 'pointer',
          }}
        >
          Try again
        </button>
        <a
          href="/"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            padding: '12px 24px',
            borderRadius: 12,
            background: 'var(--rg-surface)',
            color: 'var(--rg-text)',
            fontSize: 14,
            fontWeight: 600,
            textDecoration: 'none',
            border: '1px solid var(--rg-border)',
          }}
        >
          Back to calendar
        </a>
      </div>
    </div>
  )
}
