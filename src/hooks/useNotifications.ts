'use client'

import { useCallback, useEffect, useState } from 'react'
import { useLocalStorage } from './useLocalStorage'
import { ALL_SERIES } from '@/data/series-registry'

export type LeadTime = 15 | 30 | 60

export interface NotificationPrefs {
  enabled: boolean
  leadMinutes: LeadTime
  seriesIds: string[]
}

const DEFAULT_PREFS: NotificationPrefs = {
  enabled: false,
  leadMinutes: 30,
  seriesIds: ALL_SERIES.map(s => s.id),
}

export function useNotifications() {
  const [prefs, setPrefs] = useLocalStorage<NotificationPrefs>('race-grid:notify', DEFAULT_PREFS)
  const [permission, setPermission] = useState<NotificationPermission>('default')

  useEffect(() => {
    if (typeof Notification !== 'undefined') {
      setPermission(Notification.permission)
    }
  }, [])

  const requestPermission = useCallback(async () => {
    if (typeof Notification === 'undefined') return 'denied' as const
    const result = await Notification.requestPermission()
    setPermission(result)
    return result
  }, [])

  const enable = useCallback(async () => {
    const perm = await requestPermission()
    if (perm === 'granted') {
      setPrefs({ ...prefs, enabled: true })
    }
    return perm
  }, [prefs, setPrefs, requestPermission])

  const disable = useCallback(() => {
    setPrefs({ ...prefs, enabled: false })
    // Tell SW to clear scheduled notifications
    navigator.serviceWorker?.controller?.postMessage({ type: 'CLEAR_NOTIFICATIONS' })
  }, [prefs, setPrefs])

  const setLeadMinutes = useCallback((leadMinutes: LeadTime) => {
    setPrefs({ ...prefs, leadMinutes })
  }, [prefs, setPrefs])

  const toggleSeries = useCallback((seriesId: string) => {
    const ids = prefs.seriesIds.includes(seriesId)
      ? prefs.seriesIds.filter(id => id !== seriesId)
      : [...prefs.seriesIds, seriesId]
    setPrefs({ ...prefs, seriesIds: ids })
  }, [prefs, setPrefs])

  // Schedule notifications whenever prefs change
  useEffect(() => {
    if (!prefs.enabled || permission !== 'granted') return
    if (typeof navigator === 'undefined' || !navigator.serviceWorker) return

    const selectedSeries = ALL_SERIES.filter(s => prefs.seriesIds.includes(s.id))
    const now = Date.now()
    const sessions: Array<{ key: string; title: string; body: string; triggerAt: number; url: string }> = []

    for (const series of selectedSeries) {
      for (const event of series.events) {
        for (const session of event.sessions) {
          const startMs = new Date(session.startUtc).getTime()
          const triggerAt = startMs - prefs.leadMinutes * 60 * 1000
          if (triggerAt <= now) continue // already past

          sessions.push({
            key: `${event.id}-${session.label}`,
            title: `${series.shortName}: ${session.label}`,
            body: `${event.name} — starts in ${prefs.leadMinutes} min`,
            triggerAt,
            url: `/day/${session.startUtc.slice(0, 10)}`,
          })
        }
      }
    }

    // Wait for SW to be ready, then send
    navigator.serviceWorker.ready.then((reg) => {
      reg.active?.postMessage({
        type: 'SCHEDULE_NOTIFICATIONS',
        payload: { sessions },
      })
    })
  }, [prefs, permission])

  return {
    prefs,
    permission,
    enable,
    disable,
    setLeadMinutes,
    toggleSeries,
  }
}
