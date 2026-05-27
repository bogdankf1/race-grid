import { describe, it, expect } from 'vitest'
import { generateIcs, generateSeriesIcs, googleCalendarUrl } from './ical'
import type { RaceEvent, Session } from './types'

// Use a real circuit id from src/data/circuits.ts so getCircuit() resolves
// for the LOCATION field. circuitId values that don't resolve fall back to
// the raw id, which is also fine — but using a real id mirrors actual usage.
const sampleEvent: RaceEvent = {
  id: 'test-event-2026',
  round: 1,
  name: 'Test Grand Prix',
  circuitId: 'silverstone-circuit',
  sessions: [
    {
      type: 'qualifying',
      label: 'Qualifying',
      startUtc: '2026-07-04T14:00:00Z',
      durationMinutes: 60,
    },
    {
      type: 'race',
      label: 'Race',
      startUtc: '2026-07-05T13:00:00Z',
      durationMinutes: 120,
    },
  ],
}

describe('generateIcs', () => {
  const ics = generateIcs(sampleEvent, sampleEvent.sessions, 'Test Series')

  it('opens with BEGIN:VCALENDAR and closes with END:VCALENDAR', () => {
    expect(ics.startsWith('BEGIN:VCALENDAR')).toBe(true)
    expect(ics.endsWith('END:VCALENDAR')).toBe(true)
  })

  it('uses CRLF line breaks as required by RFC 5545', () => {
    expect(ics).toContain('\r\n')
  })

  it('emits VERSION:2.0 and a PRODID', () => {
    expect(ics).toContain('VERSION:2.0')
    expect(ics).toMatch(/PRODID:.+/)
  })

  it('emits one VEVENT block per session', () => {
    const beginCount = ics.split('BEGIN:VEVENT').length - 1
    const endCount = ics.split('END:VEVENT').length - 1
    expect(beginCount).toBe(sampleEvent.sessions.length)
    expect(endCount).toBe(sampleEvent.sessions.length)
  })

  it('formats DTSTART/DTEND in UTC YYYYMMDDTHHMMSSZ form', () => {
    // 2026-07-04T14:00:00Z → 20260704T140000Z
    expect(ics).toContain('DTSTART:20260704T140000Z')
    expect(ics).toContain('DTEND:20260704T150000Z') // +60 min
    expect(ics).toContain('DTSTART:20260705T130000Z')
    expect(ics).toContain('DTEND:20260705T150000Z') // +120 min
  })

  it('falls back to a 2-hour DTEND when durationMinutes is missing', () => {
    const noDuration: Session = {
      type: 'race',
      label: 'Race',
      startUtc: '2026-07-05T13:00:00Z',
    }
    const out = generateIcs({ ...sampleEvent, sessions: [noDuration] }, [noDuration], 'Test')
    expect(out).toContain('DTSTART:20260705T130000Z')
    expect(out).toContain('DTEND:20260705T150000Z')
  })

  it('includes a SUMMARY built from series name, label, and event name', () => {
    expect(ics).toContain('SUMMARY:Test Series: Qualifying')
    expect(ics).toContain('Test Grand Prix')
  })

  it('emits a unique UID per session', () => {
    const uids = ics.split('\r\n').filter(l => l.startsWith('UID:'))
    expect(uids.length).toBe(2)
    expect(new Set(uids).size).toBe(2)
    for (const u of uids) expect(u).toContain('@racegrid')
  })
})

describe('escaping special characters', () => {
  it('escapes commas, semicolons, backslashes, and newlines in SUMMARY', () => {
    const tricky: RaceEvent = {
      id: 'tricky-1',
      name: 'Race; Final, Round 1\nDetails',
      circuitId: 'silverstone-circuit',
      sessions: [
        {
          type: 'race',
          label: 'Race \\ Backslash',
          startUtc: '2026-07-05T13:00:00Z',
          durationMinutes: 60,
        },
      ],
    }
    const out = generateIcs(tricky, tricky.sessions, 'Series, With Comma')

    // Find the SUMMARY line specifically
    const summaryLine = out.split('\r\n').find(l => l.startsWith('SUMMARY:'))
    expect(summaryLine).toBeDefined()
    expect(summaryLine!).toContain('\\,')   // comma escaped
    expect(summaryLine!).toContain('\\;')   // semicolon escaped
    expect(summaryLine!).toContain('\\\\')  // backslash escaped
    expect(summaryLine!).toContain('\\n')   // newline escaped to literal \n

    // And critically: no raw newline should appear inside the SUMMARY value
    // (that would break iCalendar line parsing).
    const rawNlInSummary = /SUMMARY:[^\r]*\n[^\r]/.test(out)
    expect(rawNlInSummary).toBe(false)
  })

  it('does not double-escape already-safe text', () => {
    const safe: RaceEvent = {
      id: 'safe-1',
      name: 'Plain Event',
      circuitId: 'silverstone-circuit',
      sessions: [
        { type: 'race', label: 'Race', startUtc: '2026-07-05T13:00:00Z', durationMinutes: 60 },
      ],
    }
    const out = generateIcs(safe, safe.sessions, 'Plain Series')
    expect(out).toContain('SUMMARY:Plain Series: Race')
    expect(out).not.toMatch(/SUMMARY:.*\\\\/) // no spurious backslashes
  })
})

describe('generateSeriesIcs', () => {
  it('includes calendar subscription headers and one VEVENT per session across all events', () => {
    const out = generateSeriesIcs([sampleEvent, sampleEvent], 'Test Series')
    expect(out).toContain('REFRESH-INTERVAL;VALUE=DURATION:P1D')
    expect(out).toContain('X-PUBLISHED-TTL:P1D')
    const veventCount = out.split('BEGIN:VEVENT').length - 1
    expect(veventCount).toBe(sampleEvent.sessions.length * 2)
  })
})

describe('googleCalendarUrl', () => {
  it('builds a calendar.google.com URL with UTC-formatted dates', () => {
    const url = googleCalendarUrl(sampleEvent, sampleEvent.sessions[1], 'Test Series')
    expect(url).toContain('https://calendar.google.com/calendar/render')
    expect(url).toContain('action=TEMPLATE')
    expect(url).toContain('dates=20260705T130000Z%2F20260705T150000Z')
  })
})
