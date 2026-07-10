// Small persisted-state hook for per-screen prefs, mirroring the web's
// useLocalStorage (same race-grid:* keys, JSON-encoded values).

import AsyncStorage from '@react-native-async-storage/async-storage'
import { useCallback, useEffect, useState } from 'react'

export function usePersistedState<T>(key: string, initial: T): [T, (value: T) => void] {
  const [value, setValue] = useState<T>(initial)

  useEffect(() => {
    let cancelled = false
    AsyncStorage.getItem(key)
      .then((raw) => {
        if (cancelled || raw == null) return
        try {
          setValue(JSON.parse(raw) as T)
        } catch {}
      })
      .catch(() => {})
    return () => {
      cancelled = true
    }
  }, [key])

  const update = useCallback(
    (next: T) => {
      setValue(next)
      AsyncStorage.setItem(key, JSON.stringify(next)).catch(() => {})
    },
    [key],
  )

  return [value, update]
}
