'use client'

import { useCallback, useEffect, useState } from 'react'
import { getUIVersion, setUIVersion, type Theme, type UIVersion } from '@/lib/theme'

const EVENT = 'rg:ui-version'

/**
 * UI version shared across the tree. Reads localStorage after mount
 * (SSR always renders V1 markup) and stays in sync between subscribers
 * via a window event, so picking V2 in the Settings modal reskins the
 * page live without a reload.
 */
export function useUIVersion(): [UIVersion, (v: UIVersion, theme: Theme) => void] {
  const [version, setVersion] = useState<UIVersion>('v1')

  useEffect(() => {
    setVersion(getUIVersion())
    const onChange = () => setVersion(getUIVersion())
    window.addEventListener(EVENT, onChange)
    return () => window.removeEventListener(EVENT, onChange)
  }, [])

  const set = useCallback((v: UIVersion, theme: Theme) => {
    setUIVersion(v, theme)
    window.dispatchEvent(new Event(EVENT))
  }, [])

  return [version, set]
}
