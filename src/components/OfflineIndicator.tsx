'use client'

import { useState, useEffect } from 'react'
import { WifiOff } from 'lucide-react'

export function OfflineIndicator() {
  const [offline, setOffline] = useState(false)

  useEffect(() => {
    function goOffline() { setOffline(true) }
    function goOnline() { setOffline(false) }

    if (!navigator.onLine) setOffline(true)

    window.addEventListener('offline', goOffline)
    window.addEventListener('online', goOnline)
    return () => {
      window.removeEventListener('offline', goOffline)
      window.removeEventListener('online', goOnline)
    }
  }, [])

  if (!offline) return null

  return (
    <div
      role="status"
      aria-live="polite"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 200,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
        padding: '6px 16px',
        background: '#b45309',
        color: '#fff',
        fontSize: 13,
        fontWeight: 500,
      }}
    >
      <WifiOff style={{ width: 14, height: 14 }} />
      You&apos;re offline — showing cached data
    </div>
  )
}
