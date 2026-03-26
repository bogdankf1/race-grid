export type Theme = 'dark' | 'light'

export const themes: Record<Theme, Record<string, string>> = {
  dark: {
    '--rg-bg': '#13131d',
    '--rg-surface': '#1c1c30',
    '--rg-elevated': '#232340',
    '--rg-border': '#2e2e46',
    '--rg-text': '#eee',
    '--rg-text2': '#999',
    '--rg-text3': '#666',
    '--rg-header-bg': 'rgba(22, 22, 34, 0.92)',
    '--rg-chip-bg': 'rgba(255,255,255,0.06)',
    '--rg-chip-text': '#ccc',
    '--rg-btn-bg': '#252538',
    '--rg-today-border': 'rgba(255,255,255,0.25)',
    '--rg-link': '#7ab3ff',
    '--rg-success': '#4ade80',
    '--rg-card-border': '#2a2a42',
  },
  light: {
    '--rg-bg': '#f4f4f8',
    '--rg-surface': '#ffffff',
    '--rg-elevated': '#eeeef4',
    '--rg-border': '#d8d8e4',
    '--rg-text': '#1a1a2e',
    '--rg-text2': '#555',
    '--rg-text3': '#888',
    '--rg-header-bg': 'rgba(255, 255, 255, 0.92)',
    '--rg-chip-bg': 'rgba(0,0,0,0.05)',
    '--rg-chip-text': '#333',
    '--rg-btn-bg': '#e4e4f0',
    '--rg-today-border': 'rgba(0,0,0,0.2)',
    '--rg-link': '#1a56db',
    '--rg-success': '#16a34a',
    '--rg-card-border': '#d0d0e0',
  },
}

export function applyTheme(theme: Theme) {
  const vars = themes[theme]
  const root = document.documentElement
  for (const [key, value] of Object.entries(vars)) {
    root.style.setProperty(key, value)
  }
  root.style.colorScheme = theme
}

export function getDefaultTheme(): Theme {
  if (typeof window === 'undefined') return 'dark'
  try {
    const stored = localStorage.getItem('race-grid:theme')
    if (stored === 'light' || stored === 'dark') return stored
  } catch {}
  return 'dark'
}
