import { RaceEvent, Session } from './types'
import { getCircuit } from '@/data/circuits'

function formatIcsDate(utcString: string): string {
  const d = new Date(utcString)
  const pad = (n: number) => n.toString().padStart(2, '0')
  return `${d.getUTCFullYear()}${pad(d.getUTCMonth() + 1)}${pad(d.getUTCDate())}T${pad(d.getUTCHours())}${pad(d.getUTCMinutes())}${pad(d.getUTCSeconds())}Z`
}

function escapeIcs(text: string): string {
  return text.replace(/[\\;,]/g, c => `\\${c}`).replace(/\n/g, '\\n')
}

function uid(eventId: string, sessionIndex: number): string {
  return `${eventId}-s${sessionIndex}@racegrid`
}

function vevent(event: RaceEvent, session: Session, seriesName: string, index: number): string {
  const start = formatIcsDate(session.startUtc)
  const end = session.durationMinutes
    ? formatIcsDate(new Date(new Date(session.startUtc).getTime() + session.durationMinutes * 60000).toISOString())
    : formatIcsDate(new Date(new Date(session.startUtc).getTime() + 120 * 60000).toISOString()) // default 2h
  const circuit = getCircuit(event.circuitId)
  const circuitName = circuit?.name ?? event.circuitId
  const countryName = circuit?.country ?? ''
  const summary = `${seriesName}: ${session.label} — ${event.name}`
  const location = `${circuitName}, ${countryName}`

  return [
    'BEGIN:VEVENT',
    `UID:${uid(event.id, index)}`,
    `DTSTAMP:${formatIcsDate(new Date().toISOString())}`,
    `DTSTART:${start}`,
    `DTEND:${end}`,
    `SUMMARY:${escapeIcs(summary)}`,
    `LOCATION:${escapeIcs(location)}`,
    `DESCRIPTION:${escapeIcs(`${session.label} — ${event.name}\\n${circuitName}\\n${seriesName}`)}`,
    'END:VEVENT',
  ].join('\r\n')
}

export function generateIcs(event: RaceEvent, sessions: Session[], seriesName: string): string {
  const events = sessions.map((s, i) => vevent(event, s, seriesName, i))

  return [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Race Grid//Motorsport Calendar//EN',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    `X-WR-CALNAME:${escapeIcs(seriesName)} — ${escapeIcs(event.name)}`,
    ...events,
    'END:VCALENDAR',
  ].join('\r\n')
}

export function googleCalendarUrl(event: RaceEvent, session: Session, seriesName: string): string {
  const start = formatIcsDate(session.startUtc)
  const endMs = new Date(session.startUtc).getTime() + (session.durationMinutes || 120) * 60000
  const end = formatIcsDate(new Date(endMs).toISOString())
  const circuit = getCircuit(event.circuitId)
  const circuitName = circuit?.name ?? event.circuitId
  const countryName = circuit?.country ?? ''
  const title = `${seriesName}: ${session.label} — ${event.name}`
  const location = `${circuitName}, ${countryName}`
  const details = `${session.label} — ${event.name}\n${circuitName}\n${seriesName}`

  const params = new URLSearchParams({
    action: 'TEMPLATE',
    text: title,
    dates: `${start}/${end}`,
    location,
    details,
  })
  return `https://calendar.google.com/calendar/render?${params.toString()}`
}

export function generateSeriesIcs(events: RaceEvent[], seriesName: string): string {
  const vevents: string[] = []
  for (const event of events) {
    for (let i = 0; i < event.sessions.length; i++) {
      vevents.push(vevent(event, event.sessions[i], seriesName, i))
    }
  }

  return [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Race Grid//Motorsport Calendar//EN',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    `X-WR-CALNAME:Race Grid — ${escapeIcs(seriesName)}`,
    'REFRESH-INTERVAL;VALUE=DURATION:P1D',
    'X-PUBLISHED-TTL:P1D',
    ...vevents,
    'END:VCALENDAR',
  ].join('\r\n')
}

export function generateAllSeriesIcs(allSeries: Array<{ name: string; events: RaceEvent[] }>): string {
  const vevents: string[] = []
  for (const series of allSeries) {
    for (const event of series.events) {
      for (let i = 0; i < event.sessions.length; i++) {
        vevents.push(vevent(event, event.sessions[i], series.name, i))
      }
    }
  }

  return [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Race Grid//Motorsport Calendar//EN',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'X-WR-CALNAME:Race Grid — All Motorsport',
    'REFRESH-INTERVAL;VALUE=DURATION:P1D',
    'X-PUBLISHED-TTL:P1D',
    ...vevents,
    'END:VCALENDAR',
  ].join('\r\n')
}

export function downloadIcs(event: RaceEvent, sessions: Session[], seriesName: string): void {
  const ics = generateIcs(event, sessions, seriesName)
  triggerDownload(ics, `${event.id}.ics`)
}

export function downloadSeriesIcs(events: RaceEvent[], seriesId: string, seriesName: string): void {
  const ics = generateSeriesIcs(events, seriesName)
  triggerDownload(ics, `${seriesId}-2026.ics`)
}

function triggerDownload(ics: string, filename: string): void {
  const blob = new Blob([ics], { type: 'text/calendar;charset=utf-8' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = filename
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
  URL.revokeObjectURL(url)
}
