export type Theme = 'dark' | 'light'
export type UIVersion = 'v1' | 'v2'

export const themes: Record<Theme, Record<string, string>> = {
  dark: {
    '--rg-bg': '#13131d',
    '--rg-surface': '#1c1c30',
    '--rg-elevated': '#232340',
    '--rg-border': '#2e2e46',
    '--rg-text': '#eee',
    '--rg-text2': '#999',
    '--rg-text3': '#909090',
    '--rg-header-bg': 'rgba(22, 22, 34, 0.92)',
    '--rg-chip-bg': 'rgba(255,255,255,0.06)',
    '--rg-chip-text': '#ccc',
    '--rg-btn-bg': '#252538',
    '--rg-today-border': 'rgba(255,255,255,0.25)',
    '--rg-link': '#7ab3ff',
    '--rg-success': '#4ade80',
    '--rg-card-border': '#2a2a42',
    '--rg-logo-bg': 'rgba(255, 255, 255, 0.95)',
  },
  light: {
    '--rg-bg': '#f4f4f8',
    '--rg-surface': '#ffffff',
    '--rg-elevated': '#eeeef4',
    '--rg-border': '#d8d8e4',
    '--rg-text': '#1a1a2e',
    '--rg-text2': '#555',
    '--rg-text3': '#666',
    '--rg-header-bg': 'rgba(255, 255, 255, 0.92)',
    '--rg-chip-bg': 'rgba(0,0,0,0.05)',
    '--rg-chip-text': '#333',
    '--rg-btn-bg': '#e4e4f0',
    '--rg-today-border': 'rgba(0,0,0,0.2)',
    '--rg-link': '#1a56db',
    '--rg-success': '#15803d',
    '--rg-card-border': '#d0d0e0',
    '--rg-logo-bg': 'transparent',
  },
}

// V2 palettes — "carbon" dark / "paper" light. Same keys as V1 plus
// V2-only tokens consumed exclusively by v2.css (inert while V1 is active).
export const themesV2: Record<Theme, Record<string, string>> = {
  dark: {
    '--rg-bg': '#0a0a0e',
    '--rg-surface': '#131318',
    '--rg-elevated': '#1b1b22',
    '--rg-border': '#26262e',
    '--rg-text': '#f4f4f6',
    '--rg-text2': '#a0a0ac',
    '--rg-text3': '#71717d',
    '--rg-header-bg': 'rgba(10, 10, 14, 0.72)',
    '--rg-chip-bg': 'rgba(255,255,255,0.05)',
    '--rg-chip-text': '#c8c8d0',
    '--rg-btn-bg': '#17171e',
    '--rg-today-border': 'rgba(255,255,255,0.32)',
    '--rg-link': '#ff4d42',
    '--rg-success': '#34d399',
    '--rg-card-border': '#1f1f27',
    '--rg-logo-bg': 'rgba(255, 255, 255, 0.95)',
    '--rg-shadow': '0 12px 32px rgba(0, 0, 0, 0.45)',
    '--rg-shadow-sm': '0 4px 14px rgba(0, 0, 0, 0.35)',
    '--rg-wash': 'rgba(255, 77, 66, 0.05)',
  },
  light: {
    '--rg-bg': '#f7f7f8',
    '--rg-surface': '#ffffff',
    '--rg-elevated': '#f0f0f2',
    '--rg-border': '#e4e4e9',
    '--rg-text': '#131318',
    '--rg-text2': '#565660',
    '--rg-text3': '#84848e',
    '--rg-header-bg': 'rgba(255, 255, 255, 0.78)',
    '--rg-chip-bg': 'rgba(0,0,0,0.04)',
    '--rg-chip-text': '#3a3a42',
    '--rg-btn-bg': '#ffffff',
    '--rg-today-border': 'rgba(0,0,0,0.3)',
    '--rg-link': '#d92d20',
    '--rg-success': '#079455',
    '--rg-card-border': '#e8e8ec',
    '--rg-logo-bg': 'transparent',
    '--rg-shadow': '0 12px 32px rgba(16, 16, 24, 0.10)',
    '--rg-shadow-sm': '0 4px 14px rgba(16, 16, 24, 0.07)',
    '--rg-wash': 'rgba(217, 45, 32, 0.04)',
  },
}

export function applyTheme(theme: Theme) {
  const uiVersion = getUIVersion()
  const vars = (uiVersion === 'v2' ? themesV2 : themes)[theme]
  const root = document.documentElement
  for (const [key, value] of Object.entries(vars)) {
    root.style.setProperty(key, value)
  }
  root.style.colorScheme = theme
  root.dataset.ui = uiVersion
}

export function getUIVersion(): UIVersion {
  if (typeof window === 'undefined') return 'v1'
  try {
    // useLocalStorage JSON-encodes values, so accept both raw and quoted forms
    const stored = localStorage.getItem('race-grid:ui-version')
    if (stored && stored.replace(/"/g, '') === 'v2') return 'v2'
  } catch {}
  return 'v1'
}

export function setUIVersion(version: UIVersion, theme: Theme) {
  try {
    localStorage.setItem('race-grid:ui-version', JSON.stringify(version))
  } catch {}
  applyTheme(theme)
}

export function getDefaultTheme(): Theme {
  if (typeof window === 'undefined') return 'dark'
  try {
    const stored = localStorage.getItem('race-grid:theme')
    if (stored === 'light' || stored === 'dark') return stored
  } catch {}
  // Respect system preference
  if (typeof window.matchMedia === 'function' && window.matchMedia('(prefers-color-scheme: light)').matches) {
    return 'light'
  }
  return 'dark'
}
