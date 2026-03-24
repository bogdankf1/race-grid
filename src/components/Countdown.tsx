'use client'

import { useState, useEffect } from 'react'

interface CountdownProps {
  targetUtc: string
  locale: 'en' | 'uk'
}

function formatRemaining(ms: number, locale: 'en' | 'uk'): string | null {
  if (ms <= 0) return null

  const totalMin = Math.floor(ms / 60000)
  const days = Math.floor(totalMin / 1440)
  const hours = Math.floor((totalMin % 1440) / 60)
  const minutes = totalMin % 60

  if (locale === 'uk') {
    if (days > 0) return `Через ${days}д ${hours}год`
    if (hours > 0) return `Через ${hours}год ${minutes}хв`
    return `Через ${minutes}хв`
  }

  if (days > 0) return `In ${days}d ${hours}h`
  if (hours > 0) return `In ${hours}h ${minutes}m`
  return `In ${minutes}m`
}

export function Countdown({ targetUtc, locale }: CountdownProps) {
  const [remaining, setRemaining] = useState<string | null>(null)

  useEffect(() => {
    function update() {
      const ms = new Date(targetUtc).getTime() - Date.now()
      setRemaining(formatRemaining(ms, locale))
    }
    update()
    const id = setInterval(update, 30_000) // update every 30s
    return () => clearInterval(id)
  }, [targetUtc, locale])

  if (!remaining) return null

  return (
    <div style={{ fontSize: 11, color: 'var(--rg-link)', marginTop: 2, fontWeight: 600 }}>
      {remaining}
    </div>
  )
}
