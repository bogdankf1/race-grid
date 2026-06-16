/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      // Mirrors the web app's --rg-* CSS variables (src/lib/theme.ts).
      // Values are injected at runtime via vars(themes[theme]) at the app root.
      colors: {
        'rg-bg': 'var(--rg-bg)',
        'rg-surface': 'var(--rg-surface)',
        'rg-elevated': 'var(--rg-elevated)',
        'rg-border': 'var(--rg-border)',
        'rg-text': 'var(--rg-text)',
        'rg-text2': 'var(--rg-text2)',
        'rg-text3': 'var(--rg-text3)',
        'rg-chip-bg': 'var(--rg-chip-bg)',
        'rg-chip-text': 'var(--rg-chip-text)',
        'rg-btn-bg': 'var(--rg-btn-bg)',
        'rg-link': 'var(--rg-link)',
        'rg-success': 'var(--rg-success)',
        'rg-card-border': 'var(--rg-card-border)',
      },
    },
  },
  plugins: [],
}
