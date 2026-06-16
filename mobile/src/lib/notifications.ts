// Local session-start reminders via expo-notifications. The planning step is
// pure and lives in notification-plan.ts; this module owns the OS side:
// permissions, the Android channel, and (re)scheduling.

import * as Notifications from 'expo-notifications'
import { Platform } from 'react-native'
import type { SeriesConfig } from '@/lib/types'
import { planNotifications, type NotificationPrefs } from '~/lib/notification-plan'

export {
  DEFAULT_NOTIFICATION_PREFS,
  MAX_SCHEDULED,
  planNotifications,
  type LeadTime,
  type NotificationPrefs,
  type PlannedNotification,
} from '~/lib/notification-plan'

export async function ensureNotificationPermission(): Promise<boolean> {
  const current = await Notifications.getPermissionsAsync()
  if (current.granted) return true
  if (!current.canAskAgain) return false
  const requested = await Notifications.requestPermissionsAsync()
  return requested.granted
}

export async function setupNotificationChannel(): Promise<void> {
  if (Platform.OS !== 'android') return
  await Notifications.setNotificationChannelAsync('session-reminders', {
    name: 'Session reminders',
    importance: Notifications.AndroidImportance.HIGH,
  })
}

/** Replace all pending reminders with a fresh plan. Returns scheduled count. */
export async function rescheduleAll(
  seriesList: SeriesConfig[],
  followedIds: string[],
  prefs: NotificationPrefs,
): Promise<number> {
  await Notifications.cancelAllScheduledNotificationsAsync()
  if (!prefs.enabled) return 0

  const planned = planNotifications(seriesList, followedIds, prefs, Date.now())
  for (const item of planned) {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: item.title,
        body: item.body,
        data: { eventId: item.eventId },
      },
      trigger: {
        type: Notifications.SchedulableTriggerInputTypes.DATE,
        date: new Date(item.triggerAt),
        channelId: Platform.OS === 'android' ? 'session-reminders' : undefined,
      },
    })
  }
  return planned.length
}
