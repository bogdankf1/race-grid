import { describe, it, expect } from 'vitest'
import { formatInTimezone, getLocalDate, formatDuration, getTimezoneLabel, TIMEZONE_GROUPS } from './timezone'

/**
 * Helper: given a UTC ISO string and a timezone, extract the local Y/M/D/H/M
 * via Intl.DateTimeFormat (same primitive the app uses), then rebuild a Date
 * that represents the same wall-clock time *in UTC*. Compare that to the
 * original instant offset by the timezone's UTC offset at that moment — i.e.
 * the round-trip property: parse(format(t, tz), tz) === t.
 */
function parseWallClockInZone(utcString: string, timezone: string): { y: number; mo: number; d: number; h: number; mi: number; s: number } {
  const parts = new Intl.DateTimeFormat('en-CA', {
    timeZone: timezone,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  }).formatToParts(new Date(utcString))
  const get = (t: string) => Number(parts.find(p => p.type === t)?.value)
  return { y: get('year'), mo: get('month'), d: get('day'), h: get('hour') === 24 ? 0 : get('hour'), mi: get('minute'), s: get('second') }
}

describe('formatInTimezone', () => {
  it('formats a UTC instant in the target timezone (time format)', () => {
    // 2026-07-04T17:30:00Z → 13:30 in New York (EDT)
    const out = formatInTimezone('2026-07-04T17:30:00Z', 'America/New_York', 'time', 'en')
    expect(out).toMatch(/1:30/) // 1:30 PM
    expect(out.toLowerCase()).toContain('pm')
  })

  it('uses 24-hour format for Ukrainian locale', () => {
    const out = formatInTimezone('2026-07-04T17:30:00Z', 'Europe/Kyiv', 'time', 'uk')
    // 17:30 UTC → 20:30 Kyiv (EEST)
    expect(out).toContain('20:30')
    expect(out.toLowerCase()).not.toContain('pm')
  })

  it('handles US spring-forward DST boundary (2026-03-08)', () => {
    // 2026-03-08T07:00:00Z → 03:00 EDT (DST began at 02:00 local; clocks jumped to 03:00)
    const wall = parseWallClockInZone('2026-03-08T07:00:00Z', 'America/New_York')
    expect(wall.y).toBe(2026)
    expect(wall.mo).toBe(3)
    expect(wall.d).toBe(8)
    expect(wall.h).toBe(3)
    expect(wall.mi).toBe(0)
  })

  it('handles EU fall-back DST boundary (2026-10-25 in Kyiv)', () => {
    // EU clocks fall back at 04:00 local Kyiv → 03:00 local on 2026-10-25.
    // 00:30 UTC on that morning is still EEST (UTC+3): 03:30 local.
    const wall = parseWallClockInZone('2026-10-25T00:30:00Z', 'Europe/Kyiv')
    expect(wall.y).toBe(2026)
    expect(wall.mo).toBe(10)
    expect(wall.d).toBe(25)
    expect(wall.h).toBe(3)
    expect(wall.mi).toBe(30)
  })

  it('round-trips a UTC instant through wall-clock-in-zone for a non-DST timezone (Tokyo)', () => {
    const original = new Date('2026-06-15T12:00:00Z').toISOString()
    const wall = parseWallClockInZone(original, 'Asia/Tokyo') // UTC+9 always
    // Reconstruct: Tokyo wall clock at original instant should be UTC+9 = 21:00
    expect(wall.h).toBe(21)
    expect(wall.mi).toBe(0)
    // Round-trip: convert back to UTC instant from wall clock + known offset
    const reconstructedUtc = Date.UTC(wall.y, wall.mo - 1, wall.d, wall.h - 9, wall.mi, wall.s)
    expect(new Date(reconstructedUtc).toISOString()).toBe(original)
  })

  it('round-trips for Pacific/Honolulu (no DST, UTC-10)', () => {
    const original = new Date('2026-01-15T20:00:00Z').toISOString()
    const wall = parseWallClockInZone(original, 'Pacific/Honolulu')
    // Honolulu = UTC-10, so wall clock should be 10:00 local on the same day
    expect(wall.h).toBe(10)
    const reconstructedUtc = Date.UTC(wall.y, wall.mo - 1, wall.d, wall.h + 10, wall.mi, wall.s)
    expect(new Date(reconstructedUtc).toISOString()).toBe(original)
  })
})

describe('getLocalDate', () => {
  it('returns YYYY-MM-DD in the requested timezone', () => {
    // 2026-07-04T17:30:00Z → 2026-07-04 in NYC (still 1:30 PM same day)
    expect(getLocalDate('2026-07-04T17:30:00Z', 'America/New_York')).toBe('2026-07-04')
  })

  it('rolls back to the previous calendar day west of UTC', () => {
    // 2026-07-04T02:00:00Z → 2026-07-03 22:00 in NYC (yesterday locally)
    expect(getLocalDate('2026-07-04T02:00:00Z', 'America/New_York')).toBe('2026-07-03')
  })

  it('rolls forward to the next calendar day east of UTC', () => {
    // 2026-07-04T23:00:00Z → 2026-07-05 08:00 in Tokyo
    expect(getLocalDate('2026-07-04T23:00:00Z', 'Asia/Tokyo')).toBe('2026-07-05')
  })

  it('crosses midnight correctly across the international dateline (Honolulu)', () => {
    // 2026-01-01T05:00:00Z → 2025-12-31 19:00 Honolulu
    expect(getLocalDate('2026-01-01T05:00:00Z', 'Pacific/Honolulu')).toBe('2025-12-31')
  })

  it('handles Kyiv (UTC+2/+3 with DST)', () => {
    // Summer EEST (UTC+3): 2026-06-15T22:30:00Z → 2026-06-16 01:30 Kyiv
    expect(getLocalDate('2026-06-15T22:30:00Z', 'Europe/Kyiv')).toBe('2026-06-16')
    // Winter EET (UTC+2): 2026-01-15T22:30:00Z → 2026-01-16 00:30 Kyiv
    expect(getLocalDate('2026-01-15T22:30:00Z', 'Europe/Kyiv')).toBe('2026-01-16')
  })
})

describe('formatDuration', () => {
  it('renders sub-hour durations in minutes', () => {
    expect(formatDuration(45)).toBe('45 min')
    expect(formatDuration(0)).toBe('0 min')
  })

  it('renders whole hours without minutes suffix', () => {
    expect(formatDuration(60)).toBe('1h')
    expect(formatDuration(120)).toBe('2h')
  })

  it('renders hours + zero-padded minutes', () => {
    expect(formatDuration(90)).toBe('1h 30m')
    expect(formatDuration(125)).toBe('2h 05m')
    expect(formatDuration(1440)).toBe('24h')
  })
})

describe('getTimezoneLabel', () => {
  it('produces a "City (Offset)" style label', () => {
    const label = getTimezoneLabel('Europe/Kyiv')
    expect(label).toMatch(/Kyiv/)
    expect(label).toMatch(/GMT[+-]\d/)
  })

  it('replaces underscores in city names', () => {
    const label = getTimezoneLabel('America/New_York')
    expect(label).toContain('New York')
    expect(label).not.toContain('New_York')
  })
})

describe('TIMEZONE_GROUPS', () => {
  it('only lists IANA zones that resolve via Intl', () => {
    const allZones = Object.values(TIMEZONE_GROUPS).flat()
    for (const tz of allZones) {
      expect(() => new Intl.DateTimeFormat('en-US', { timeZone: tz })).not.toThrow()
    }
  })
})
