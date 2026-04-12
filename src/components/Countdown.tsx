'use client'

import { useState, useEffect, useRef } from 'react'

interface CountdownProps {
  targetUtc: string
  locale: 'en' | 'uk'
}

function formatRemaining(ms: number, locale: 'en' | 'uk'): string | null {
  if (ms <= 0) return null

  const totalSec = Math.floor(ms / 1000)
  const totalMin = Math.floor(totalSec / 60)
  const days = Math.floor(totalMin / 1440)
  const hours = Math.floor((totalMin % 1440) / 60)
  const minutes = totalMin % 60
  const seconds = totalSec % 60

  if (locale === 'uk') {
    if (days > 0) return `Через ${days}д ${hours}год`
    if (hours > 0) return `Через ${hours}год ${minutes}хв`
    if (minutes >= 5) return `Через ${minutes}хв`
    if (minutes > 0) return `Через ${minutes}:${seconds.toString().padStart(2, '0')}`
    return `Через ${seconds}с`
  }

  if (days > 0) return `In ${days}d ${hours}h`
  if (hours > 0) return `In ${hours}h ${minutes}m`
  if (minutes >= 5) return `In ${minutes}m`
  if (minutes > 0) return `In ${minutes}:${seconds.toString().padStart(2, '0')}`
  return `In ${seconds}s`
}

export function Countdown({ targetUtc, locale }: CountdownProps) {
  const [remaining, setRemaining] = useState<string | null>(null)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    function getInterval(): number {
      const ms = new Date(targetUtc).getTime() - Date.now()
      if (ms <= 0) return 30_000
      if (ms <= 5 * 60 * 1000) return 1_000     // < 5 min: every second
      return 30_000                               // else: every 30s
    }

    function update() {
      const ms = new Date(targetUtc).getTime() - Date.now()
      setRemaining(formatRemaining(ms, locale))

      // Adjust interval frequency based on proximity
      const newInterval = getInterval()
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current)
      }
      intervalRef.current = setInterval(update, newInterval)
    }

    update()
    return () => {
      if (intervalRef.current !== null) clearInterval(intervalRef.current)
    }
  }, [targetUtc, locale])

  if (!remaining) return null

  return (
    <span className="rg-countdown" style={{ fontSize: 'inherit', color: 'var(--rg-link)', fontWeight: 600 }}>
      {remaining}
    </span>
  )
}
