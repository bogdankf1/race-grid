// Regenerate public/og.png — the social/Open Graph preview image (1200x630 PNG).
//
// It's a "product peek": a real screenshot of the dark-theme calendar with a
// bottom gradient + tagline overlaid. Social platforms (X, Facebook, LinkedIn,
// Discord, Telegram) don't render SVG, so the served OG image must be a PNG.
//
// Prerequisites:
//   1. Dev server running on port 3002:  npm run dev -- -p 3002
//   2. Playwright + sharp available:      npx playwright screenshot ... (auto-fetches)
//
// Usage:  node scripts/generate-og.mjs
//
// Steps: capture dark homepage -> crop top region to 1200:630 -> overlay tagline.

import { execFileSync } from 'node:child_process'
import { mkdtempSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import sharp from 'sharp'

const URL = 'http://localhost:3002/'
const work = mkdtempSync(join(tmpdir(), 'rg-og-'))
const shot = join(work, 'home-dark.png')

console.log('Capturing screenshot…')
execFileSync('npx', [
  'playwright', 'screenshot',
  '--color-scheme=dark',
  '--viewport-size=1440,900',
  '--wait-for-timeout=2500',
  URL, shot,
], { stdio: 'inherit' })

const overlay = Buffer.from(`<svg xmlns='http://www.w3.org/2000/svg' width='1200' height='630'>
  <defs>
    <linearGradient id='g' x1='0' y1='0' x2='0' y2='1'>
      <stop offset='0.55' stop-color='#13131d' stop-opacity='0'/>
      <stop offset='0.78' stop-color='#13131d' stop-opacity='0.75'/>
      <stop offset='1' stop-color='#13131d' stop-opacity='0.97'/>
    </linearGradient>
  </defs>
  <rect width='1200' height='630' fill='url(#g)'/>
  <rect x='62' y='527' width='64' height='4' rx='2' fill='#FF1801'/>
  <text x='60' y='572' fill='#ffffff' font-family='DejaVu Sans, system-ui, sans-serif' font-size='40' font-weight='700' letter-spacing='0.5'>All your motorsport in one calendar</text>
  <text x='62' y='606' fill='#9ca3af' font-family='DejaVu Sans, system-ui, sans-serif' font-size='23'>Session times in your local timezone · 35 series</text>
</svg>`)

console.log('Composing og.png…')
const base = await sharp(shot).extract({ left: 0, top: 0, width: 1440, height: 756 }).resize(1200, 630).png().toBuffer()
await sharp(base).composite([{ input: overlay, top: 0, left: 0 }]).png().toFile('public/og.png')
console.log('Wrote public/og.png')
