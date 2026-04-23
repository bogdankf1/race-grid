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
    if (typeof Notification === 'undefined') return

    function syncPermission() {
      const current = Notification.permission
      setPermission(current)
      // If permission was revoked while notifications were "enabled", disable them
      if (current === 'denied' && prefs.enabled) {
        setPrefs({ ...prefs, enabled: false })
      }
    }

    syncPermission()

    // Re-check when page regains visibility (user may have changed permission in settings)
    function handleVisibility() {
      if (document.visibilityState === 'visible') syncPermission()
    }
    document.addEventListener('visibilitychange', handleVisibility)
    return () => document.removeEventListener('visibilitychange', handleVisibility)
  }, [prefs, setPrefs])

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

  // Build and send notification schedule to SW
  const sendSchedule = useCallback(() => {
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
          if (triggerAt <= now) continue

          sessions.push({
            key: `${event.id}-${session.label}-${session.startUtc}`,
            title: `${series.shortName}: ${session.label}`,
            body: `${event.name} — starts in ${prefs.leadMinutes} min`,
            triggerAt,
            url: `/day/${session.startUtc.slice(0, 10)}`,
          })
        }
      }
    }

    navigator.serviceWorker.ready.then((reg) => {
      reg.active?.postMessage({
        type: 'SCHEDULE_NOTIFICATIONS',
        payload: { sessions },
      })
    })
  }, [prefs, permission])

  // Schedule on prefs change
  useEffect(() => { sendSchedule() }, [sendSchedule])

  // Reschedule when page becomes visible (SW may have been killed)
  useEffect(() => {
    function handleVisibility() {
      if (document.visibilityState === 'visible') sendSchedule()
    }
    document.addEventListener('visibilitychange', handleVisibility)
    return () => document.removeEventListener('visibilitychange', handleVisibility)
  }, [sendSchedule])

  return {
    prefs,
    permission,
    enable,
    disable,
    setLeadMinutes,
    toggleSeries,
  }
}
