// AsyncStorage-backed cache. Keys follow the web app's `race-grid:` prefix
// convention (CLAUDE.md), namespaced under `race-grid:cache:`.

import AsyncStorage from '@react-native-async-storage/async-storage'

const PREFIX = 'race-grid:cache:'

export interface CachedValue<T> {
  savedAt: number
  value: T
}

export async function readCache<T>(key: string): Promise<CachedValue<T> | null> {
  try {
    const raw = await AsyncStorage.getItem(PREFIX + key)
    if (!raw) return null
    const parsed = JSON.parse(raw) as CachedValue<T>
    if (typeof parsed?.savedAt !== 'number') return null
    return parsed
  } catch {
    return null
  }
}

export async function writeCache<T>(key: string, value: T): Promise<void> {
  try {
    await AsyncStorage.setItem(PREFIX + key, JSON.stringify({ savedAt: Date.now(), value }))
  } catch {
    // Cache writes are best-effort; bundled data keeps the app functional.
  }
}

export function isStale(cached: CachedValue<unknown> | null, maxAgeMs: number): boolean {
  if (!cached) return true
  return Date.now() - cached.savedAt > maxAgeMs
}
