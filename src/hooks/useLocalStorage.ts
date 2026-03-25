'use client'

import { useState, useLayoutEffect, useCallback } from 'react'

export function useLocalStorage<T>(key: string, initial: T): [T, (val: T) => void] {
  const [value, setValue] = useState<T>(initial)

  // Read from localStorage synchronously before paint (avoids flash)
  useLayoutEffect(() => {
    try {
      const stored = localStorage.getItem(key)
      if (stored !== null) {
        setValue(JSON.parse(stored))
      }
    } catch {
      // ignore parse errors
    }
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

  return [value, set]
}
