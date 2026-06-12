// App settings persisted to AsyncStorage under the same `race-grid:` keys the
// web app uses in localStorage (values JSON-encoded, matching useLocalStorage).

import AsyncStorage from '@react-native-async-storage/async-storage'
import { getCalendars, getLocales } from 'expo-localization'
import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { Appearance } from 'react-native'
import type { ReactNode } from 'react'

import { getSeriesForYear } from '@/data/series-registry'
import type { Locale } from '@/lib/i18n'
import type { Theme } from '@/lib/theme'
import { getDefaultTimezone } from '@/lib/timezone'
import { SEASON } from '~/lib/data'
import { DEFAULT_NOTIFICATION_PREFS, type NotificationPrefs } from '~/lib/notifications'

const KEYS = {
  theme: 'race-grid:theme',
  locale: 'race-grid:locale',
  timezone: 'race-grid:timezone',
  spoilerFree: 'race-grid:spoiler-free',
  series: 'race-grid:series',
  notify: 'race-grid:notify',
} as const

export interface SettingsState {
  theme: Theme
  locale: Locale
  timezone: string
  spoilerFree: boolean
  followedSeriesIds: string[]
  notifyPrefs: NotificationPrefs
}

interface SettingsContextValue extends SettingsState {
  hydrated: boolean
  setTheme: (theme: Theme) => void
  setLocale: (locale: Locale) => void
  setTimezone: (timezone: string) => void
  setSpoilerFree: (value: boolean) => void
  setFollowedSeriesIds: (ids: string[]) => void
  toggleFollowedSeries: (id: string) => void
  setNotifyPrefs: (prefs: NotificationPrefs) => void
}

function defaultTheme(): Theme {
  return Appearance.getColorScheme() === 'light' ? 'light' : 'dark'
}

function defaultLocale(): Locale {
  const lang = getLocales()[0]?.languageCode?.toLowerCase() ?? ''
  return lang.startsWith('uk') ? 'uk' : 'en'
}

function deviceTimezone(): string {
  return getCalendars()[0]?.timeZone ?? getDefaultTimezone()
}

function allSeriesIds(): string[] {
  return getSeriesForYear(SEASON).map((s) => s.id)
}

function defaults(): SettingsState {
  const ids = allSeriesIds()
  return {
    theme: defaultTheme(),
    locale: defaultLocale(),
    timezone: deviceTimezone(),
    spoilerFree: false,
    followedSeriesIds: ids,
    notifyPrefs: { ...DEFAULT_NOTIFICATION_PREFS, seriesIds: ids },
  }
}

function parse<T>(raw: string | null | undefined, fallback: T): T {
  if (raw == null) return fallback
  try {
    return JSON.parse(raw) as T
  } catch {
    return fallback
  }
}

const SettingsContext = createContext<SettingsContextValue | null>(null)

export function SettingsProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<SettingsState>(defaults)
  const [hydrated, setHydrated] = useState(false)

  useEffect(() => {
    let cancelled = false
    AsyncStorage.multiGet(Object.values(KEYS))
      .then((pairs) => {
        if (cancelled) return
        const stored = Object.fromEntries(pairs)
        const base = defaults()
        setState({
          theme: parse<Theme>(stored[KEYS.theme], base.theme),
          locale: parse<Locale>(stored[KEYS.locale], base.locale),
          timezone: parse<string>(stored[KEYS.timezone], base.timezone),
          spoilerFree: parse<boolean>(stored[KEYS.spoilerFree], base.spoilerFree),
          followedSeriesIds: parse<string[]>(stored[KEYS.series], base.followedSeriesIds),
          notifyPrefs: {
            ...base.notifyPrefs,
            ...parse<Partial<NotificationPrefs>>(stored[KEYS.notify], base.notifyPrefs),
          },
        })
      })
      .catch(() => {})
      .finally(() => {
        if (!cancelled) setHydrated(true)
      })
    return () => {
      cancelled = true
    }
  }, [])

  const update = useCallback(<K extends keyof SettingsState>(
    key: K,
    storageKey: string,
    value: SettingsState[K],
  ) => {
    setState((prev) => ({ ...prev, [key]: value }))
    AsyncStorage.setItem(storageKey, JSON.stringify(value)).catch(() => {})
  }, [])

  const value = useMemo<SettingsContextValue>(
    () => ({
      ...state,
      hydrated,
      setTheme: (theme) => update('theme', KEYS.theme, theme),
      setLocale: (locale) => update('locale', KEYS.locale, locale),
      setTimezone: (timezone) => update('timezone', KEYS.timezone, timezone),
      setSpoilerFree: (spoilerFree) => update('spoilerFree', KEYS.spoilerFree, spoilerFree),
      setFollowedSeriesIds: (ids) => update('followedSeriesIds', KEYS.series, ids),
      toggleFollowedSeries: (id) => {
        const ids = state.followedSeriesIds.includes(id)
          ? state.followedSeriesIds.filter((s) => s !== id)
          : [...state.followedSeriesIds, id]
        update('followedSeriesIds', KEYS.series, ids)
      },
      setNotifyPrefs: (prefs) => update('notifyPrefs', KEYS.notify, prefs),
    }),
    [state, hydrated, update],
  )

  return <SettingsContext.Provider value={value}>{children}</SettingsContext.Provider>
}

export function useSettings(): SettingsContextValue {
  const ctx = useContext(SettingsContext)
  if (!ctx) throw new Error('useSettings must be used within SettingsProvider')
  return ctx
}
