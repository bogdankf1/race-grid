// Pure notification planning — no expo/react-native imports so it can run
// under Node (scripts/smoke-test.ts).
//
// Wording matches the web service-worker schedule (src/hooks/useNotifications.ts)
// and is spoiler-safe by construction — reminders mention only the series,
// session label, event name and lead time, never results:
//   title: `${series.shortName}: ${session.label}`
//   body:  `${event.name} — starts in ${leadMinutes} min`

import type { SeriesConfig } from '@/lib/types'
import { isTba } from '~/lib/data'

export type LeadTime = 15 | 30 | 60

/** Same shape (and storage key) as the web app's `race-grid:notify` prefs. */
export interface NotificationPrefs {
  enabled: boolean
  leadMinutes: LeadTime
  seriesIds: string[]
}

export const DEFAULT_NOTIFICATION_PREFS: NotificationPrefs = {
  enabled: false,
  leadMinutes: 30,
  seriesIds: [],
}

/** iOS caps pending local notifications at 64 — keep headroom. */
export const MAX_SCHEDULED = 60

export interface PlannedNotification {
  key: string
  title: string
  body: string
  triggerAt: number
  eventId: string
}

export function planNotifications(
  seriesList: SeriesConfig[],
  followedIds: string[],
  prefs: NotificationPrefs,
  now: number,
  limit: number = MAX_SCHEDULED,
): PlannedNotification[] {
  if (!prefs.enabled) return []
  const notifySet = new Set(prefs.seriesIds)
  const followedSet = new Set(followedIds)
  const planned: PlannedNotification[] = []

  for (const series of seriesList) {
    if (!followedSet.has(series.id) || !notifySet.has(series.id)) continue
    for (const event of series.events) {
      for (const session of event.sessions) {
        if (isTba(session)) continue
        const triggerAt = new Date(session.startUtc).getTime() - prefs.leadMinutes * 60_000
        if (triggerAt <= now) continue
        planned.push({
          key: `${event.id}-${session.label}-${session.startUtc}`,
          title: `${series.shortName}: ${session.label}`,
          body: `${event.name} — starts in ${prefs.leadMinutes} min`,
          triggerAt,
          eventId: event.id,
        })
      }
    }
  }

  return planned.sort((a, b) => a.triggerAt - b.triggerAt).slice(0, limit)
}
