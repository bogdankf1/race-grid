import { RaceEvent, Session } from './types'

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
  const summary = `${seriesName}: ${session.label} — ${event.name}`
  const location = `${event.circuit}, ${event.country}`

  return [
    'BEGIN:VEVENT',
    `UID:${uid(event.id, index)}`,
    `DTSTAMP:${formatIcsDate(new Date().toISOString())}`,
    `DTSTART:${start}`,
    `DTEND:${end}`,
    `SUMMARY:${escapeIcs(summary)}`,
    `LOCATION:${escapeIcs(location)}`,
    `DESCRIPTION:${escapeIcs(`${session.label} — ${event.name}\\n${event.circuit}\\n${seriesName}`)}`,
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
  const title = `${seriesName}: ${session.label} — ${event.name}`
  const location = `${event.circuit}, ${event.country}`
  const details = `${session.label} — ${event.name}\n${event.circuit}\n${seriesName}`

  const params = new URLSearchParams({
    action: 'TEMPLATE',
    text: title,
    dates: `${start}/${end}`,
    location,
    details,
  })
  return `https://calendar.google.com/calendar/render?${params.toString()}`
}

export function downloadIcs(event: RaceEvent, sessions: Session[], seriesName: string): void {
  const ics = generateIcs(event, sessions, seriesName)
  const blob = new Blob([ics], { type: 'text/calendar;charset=utf-8' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = `${event.id}.ics`
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
  URL.revokeObjectURL(url)
}
