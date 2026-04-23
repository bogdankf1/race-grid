import Link from 'next/link'

export default function NotFound() {
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
      <span style={{ fontSize: 64, marginBottom: 16 }}>🏁</span>
      <h1 className="font-display" style={{
        fontSize: 48,
        color: 'var(--rg-text)',
        margin: '0 0 8px',
        letterSpacing: 1,
      }}>
        404
      </h1>
      <p style={{ fontSize: 16, color: 'var(--rg-text3)', marginBottom: 24 }}>
        This page doesn&apos;t exist — maybe it was a DNF.
      </p>
      <Link
        href="/"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 8,
          padding: '12px 24px',
          borderRadius: 12,
          background: 'var(--rg-accent)',
          color: '#fff',
          fontSize: 14,
          fontWeight: 600,
          textDecoration: 'none',
        }}
      >
        Back to calendar
      </Link>
    </div>
  )
}
