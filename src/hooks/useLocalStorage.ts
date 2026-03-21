'use client'

import { useState, useEffect, useCallback } from 'react'

export function useLocalStorage<T>(key: string, initial: T): [T, (val: T) => void] {
  const [value, setValue] = useState<T>(initial)
  const [hydrated, setHydrated] = useState(false)

  useEffect(() => {
    try {
      const stored = localStorage.getItem(key)
      if (stored !== null) {
        setValue(JSON.parse(stored))
      }
    } catch {
      // ignore parse errors
    }
    setHydrated(true)
  }, [key])

  const set = useCallback(
    (val: T) => {
      setValue(val)
      try {
        localStorage.setItem(key, JSON.stringify(val))
      } catch {
        // ignore storage errors
      }
    },
    [key]
  )

  if (!hydrated) return [initial, set]
  return [value, set]
}
