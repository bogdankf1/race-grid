'use client'

import { useState, useLayoutEffect, useCallback, useRef } from 'react'

export function useLocalStorage<T>(key: string, initial: T): [T, (val: T) => void] {
  const [value, setValue] = useState<T>(initial)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

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
      // Debounce writes to avoid thrashing on rapid state changes
      if (timerRef.current) clearTimeout(timerRef.current)
      timerRef.current = setTimeout(() => {
        try {
          localStorage.setItem(key, JSON.stringify(val))
        } catch {
          // ignore storage errors (private browsing, quota exceeded)
        }
      }, 300)
    },
    [key]
  )

  return [value, set]
}
