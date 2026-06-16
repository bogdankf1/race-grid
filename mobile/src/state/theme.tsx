// Theme provider: applies the web app's --rg-* palette (src/lib/theme.ts) as
// NativeWind CSS variables at the root, and exposes raw values for the places
// className styling can't reach (navigation chrome, dynamic per-series colors).

import { vars } from 'nativewind'
import { createContext, useContext, useMemo } from 'react'
import { View } from 'react-native'
import type { ReactNode } from 'react'

import { themes, type Theme } from '@/lib/theme'
import { useSettings } from '~/state/settings'

interface ThemeContextValue {
  theme: Theme
  /** Raw palette, keyed by CSS var name (e.g. '--rg-bg'). */
  palette: Record<string, string>
  /** Shorthand lookup: c('bg') -> palette['--rg-bg']. */
  c: (name: string) => string
}

const ThemeContext = createContext<ThemeContextValue | null>(null)

export function ThemeProvider({ children }: { children: ReactNode }) {
  const { theme } = useSettings()

  const value = useMemo<ThemeContextValue>(() => {
    const palette = themes[theme]
    return { theme, palette, c: (name: string) => palette[`--rg-${name}`] ?? '#000' }
  }, [theme])

  return (
    <ThemeContext.Provider value={value}>
      <View style={[{ flex: 1, backgroundColor: value.c('bg') }, vars(value.palette)]}>
        {children}
      </View>
    </ThemeContext.Provider>
  )
}

export function useTheme(): ThemeContextValue {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider')
  return ctx
}
