import { describe, it, expect } from 'vitest'
import { t, formatDateLocale, formatDateShort, formatMonthLocale, LOCALE_LABELS, type Locale } from './i18n'

// Pull the internal translations table by re-importing the module and
// inspecting the `t` function's behaviour. We don't export the table,
// so we walk a known key list — but we also enforce parity by going
// through every key the EN locale knows about via `t`.
//
// Approach: build the set of keys by reading the i18n.ts source at runtime
// is overkill; instead we use a representative seed of EN keys and then
// rely on a second, lower-level parity assertion that re-imports the
// module's compiled internal map by re-evaluating `t` against a list of
// known keys harvested from the module source.

// Hard-coded representative keys (must exist in both locales):
const SEED_KEYS = [
  'app.title',
  'nav.back',
  'nav.today',
  'view.month',
  'view.week',
  'search.placeholder',
  'session.race',
  'session.qualifying',
  'group.openwheel',
  'group.endurance',
  'weekday.mon',
  'weekday.sun',
  'settings.title',
  'cal.export',
  'notify.title',
]

describe('t()', () => {
  it('returns the translation for known keys in both locales', () => {
    for (const key of SEED_KEYS) {
      const en = t(key, 'en')
      const uk = t(key, 'uk')
      expect(en, `en[${key}] should be a non-empty string`).toBeTruthy()
      expect(uk, `uk[${key}] should be a non-empty string`).toBeTruthy()
      expect(en).not.toBe(key) // not just echoing the key back
      expect(uk).not.toBe(key)
    }
  })

  it('falls back to English for unknown locales', () => {
    // Cast through unknown to bypass strict Locale typing for the fallback test
    const out = t('app.title', 'fr' as unknown as Locale)
    expect(out).toBe('RACE GRID')
  })

  it('falls back to the key itself if missing in both locales', () => {
    expect(t('this.key.does.not.exist', 'en')).toBe('this.key.does.not.exist')
  })
})

describe('locale key parity', () => {
  // We import the translations indirectly by reading the source file.
  // The cleanest, framework-free way: read the file at test time and
  // count keys. Vitest runs in Node by default, so fs is available.
  it('en and uk dictionaries share the exact same set of keys', async () => {
    const fs = await import('node:fs/promises')
    const path = await import('node:path')
    const url = await import('node:url')
    const here = path.dirname(url.fileURLToPath(import.meta.url))
    const src = await fs.readFile(path.join(here, 'i18n.ts'), 'utf8')

    // Extract the en: { ... } and uk: { ... } blocks.
    // The file structure is stable: top-level `translations: { en: { ... }, uk: { ... } }`.
    const extractKeys = (blockName: string): string[] => {
      // Find the start of the block then balance braces
      const startRegex = new RegExp(`${blockName}:\\s*\\{`)
      const startMatch = startRegex.exec(src)
      if (!startMatch) throw new Error(`Could not find ${blockName} block in i18n.ts`)
      let depth = 1
      let i = startMatch.index + startMatch[0].length
      const startBody = i
      while (i < src.length && depth > 0) {
        const ch = src[i]
        if (ch === '{') depth++
        else if (ch === '}') depth--
        i++
      }
      const body = src.slice(startBody, i - 1)
      // Match keys: lines like `'app.title': '...'` — keys are quoted strings ending in colon
      const keyRe = /'([^']+)'\s*:/g
      const keys: string[] = []
      let m: RegExpExecArray | null
      while ((m = keyRe.exec(body)) !== null) keys.push(m[1])
      return keys
    }

    const enKeys = extractKeys('en').sort()
    const ukKeys = extractKeys('uk').sort()
    expect(ukKeys).toEqual(enKeys)
  })

  it('every key in EN resolves to a non-empty string in UK (via the public t() API)', async () => {
    // Same source-scrape, used as input to t().
    const fs = await import('node:fs/promises')
    const path = await import('node:path')
    const url = await import('node:url')
    const here = path.dirname(url.fileURLToPath(import.meta.url))
    const src = await fs.readFile(path.join(here, 'i18n.ts'), 'utf8')

    const enMatch = /en:\s*\{/.exec(src)
    if (!enMatch) throw new Error('en block not found')
    let depth = 1
    let i = enMatch.index + enMatch[0].length
    const start = i
    while (i < src.length && depth > 0) {
      const ch = src[i]
      if (ch === '{') depth++
      else if (ch === '}') depth--
      i++
    }
    const body = src.slice(start, i - 1)
    const keyRe = /'([^']+)'\s*:/g
    let m: RegExpExecArray | null
    const offenders: string[] = []
    while ((m = keyRe.exec(body)) !== null) {
      const key = m[1]
      const ukValue = t(key, 'uk')
      if (!ukValue || ukValue === key) offenders.push(key)
    }
    expect(offenders).toEqual([])
  })
})

describe('date formatters', () => {
  const ref = new Date('2026-07-04T12:00:00Z')

  it('formatDateLocale returns non-empty strings for both locales', () => {
    expect(formatDateLocale(ref, 'en')).toMatch(/2026/)
    expect(formatDateLocale(ref, 'uk')).toMatch(/2026/)
  })

  it('formatDateShort returns non-empty strings for both locales', () => {
    expect(formatDateShort(ref, 'en')).toMatch(/2026/)
    expect(formatDateShort(ref, 'uk')).toMatch(/2026/)
  })

  it('formatMonthLocale capitalises the first letter (matters for uk-UA)', () => {
    const en = formatMonthLocale(ref, 'en')
    const uk = formatMonthLocale(ref, 'uk')
    expect(en[0]).toBe(en[0].toUpperCase())
    expect(uk[0]).toBe(uk[0].toUpperCase())
  })
})

describe('LOCALE_LABELS', () => {
  it('has a label for each Locale', () => {
    expect(LOCALE_LABELS.en).toBe('EN')
    expect(LOCALE_LABELS.uk).toBe('UA')
  })
})
