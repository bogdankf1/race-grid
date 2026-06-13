import '../global.css'
import '~/lib/preload-years'

import * as Notifications from 'expo-notifications'
import { Stack, useRouter } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { useEffect, useRef } from 'react'
import { AppState } from 'react-native'

import { rescheduleAll, setupNotificationChannel } from '~/lib/notifications'
import { DataProvider, useData } from '~/state/data'
import { SettingsProvider, useSettings } from '~/state/settings'
import { ThemeProvider, useTheme } from '~/state/theme'

// Show reminders as banners while the app is foregrounded.
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowBanner: true,
    shouldShowList: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
})

/** Keeps the pending local-notification schedule in sync with prefs and data. */
function NotificationManager() {
  const { seriesList } = useData()
  const { followedSeriesIds, notifyPrefs, hydrated } = useSettings()
  const router = useRouter()
  const debounce = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    setupNotificationChannel().catch(() => {})
  }, [])

  useEffect(() => {
    if (!hydrated) return
    if (debounce.current) clearTimeout(debounce.current)
    debounce.current = setTimeout(() => {
      rescheduleAll(seriesList, followedSeriesIds, notifyPrefs).catch(() => {})
    }, 1000)
    return () => {
      if (debounce.current) clearTimeout(debounce.current)
    }
  }, [hydrated, seriesList, followedSeriesIds, notifyPrefs])

  // Re-plan when the app returns to the foreground (sessions may have passed).
  useEffect(() => {
    const sub = AppState.addEventListener('change', (state) => {
      if (state === 'active' && hydrated) {
        rescheduleAll(seriesList, followedSeriesIds, notifyPrefs).catch(() => {})
      }
    })
    return () => sub.remove()
  }, [hydrated, seriesList, followedSeriesIds, notifyPrefs])

  // Tapping a reminder opens the race it is about.
  useEffect(() => {
    const sub = Notifications.addNotificationResponseReceivedListener((response) => {
      const eventId = response.notification.request.content.data?.eventId
      if (typeof eventId === 'string' && eventId) {
        router.push(`/race/${eventId}`)
      }
    })
    return () => sub.remove()
  }, [router])

  return null
}

function ThemedNavigator() {
  const { theme, c } = useTheme()
  const { hydrated } = useSettings()

  if (!hydrated) return null

  return (
    <>
      <StatusBar style={theme === 'dark' ? 'light' : 'dark'} />
      <NotificationManager />
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: c('bg') },
        }}
      >
        <Stack.Screen name="(tabs)" />
      </Stack>
    </>
  )
}

export default function RootLayout() {
  return (
    <SettingsProvider>
      <ThemeProvider>
        <DataProvider>
          <ThemedNavigator />
        </DataProvider>
      </ThemeProvider>
    </SettingsProvider>
  )
}
