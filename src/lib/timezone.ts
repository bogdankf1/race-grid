export const TIMEZONE_GROUPS: Record<string, string[]> = {
  Americas: [
    'America/New_York',
    'America/Chicago',
    'America/Denver',
    'America/Los_Angeles',
    'America/Anchorage',
    'Pacific/Honolulu',
    'America/Phoenix',
    'America/Toronto',
    'America/Vancouver',
    'America/Mexico_City',
    'America/Bogota',
    'America/Lima',
    'America/Santiago',
    'America/Sao_Paulo',
    'America/Buenos_Aires',
    'America/Caracas',
  ],
  Europe: [
    'Europe/London',
    'Europe/Dublin',
    'Europe/Lisbon',
    'Europe/Paris',
    'Europe/Berlin',
    'Europe/Madrid',
    'Europe/Rome',
    'Europe/Amsterdam',
    'Europe/Brussels',
    'Europe/Vienna',
    'Europe/Zurich',
    'Europe/Warsaw',
    'Europe/Prague',
    'Europe/Budapest',
    'Europe/Bucharest',
    'Europe/Helsinki',
    'Europe/Stockholm',
    'Europe/Oslo',
    'Europe/Copenhagen',
    'Europe/Athens',
    'Europe/Istanbul',
    'Europe/Moscow',
    'Europe/Kyiv',
  ],
  Asia: [
    'Asia/Dubai',
    'Asia/Riyadh',
    'Asia/Tehran',
    'Asia/Karachi',
    'Asia/Kolkata',
    'Asia/Dhaka',
    'Asia/Bangkok',
    'Asia/Singapore',
    'Asia/Hong_Kong',
    'Asia/Shanghai',
    'Asia/Seoul',
    'Asia/Tokyo',
    'Asia/Jakarta',
    'Asia/Manila',
    'Asia/Taipei',
    'Asia/Qatar',
  ],
  Pacific: [
    'Australia/Sydney',
    'Australia/Melbourne',
    'Australia/Brisbane',
    'Australia/Perth',
    'Australia/Adelaide',
    'Pacific/Auckland',
    'Pacific/Fiji',
    'Pacific/Guam',
  ],
  Africa: [
    'Africa/Cairo',
    'Africa/Lagos',
    'Africa/Johannesburg',
    'Africa/Nairobi',
    'Africa/Casablanca',
    'Africa/Accra',
  ],
}

export function getDefaultTimezone(): string {
  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone
  } catch {
    return 'UTC'
  }
}

export function formatInTimezone(utcString: string, timezone: string, format: 'time' | 'date' | 'datetime' = 'time'): string {
  const date = new Date(utcString)

  if (format === 'time') {
    return date.toLocaleString('en-US', {
      timeZone: timezone,
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
    })
  }

  if (format === 'date') {
    return date.toLocaleString('en-US', {
      timeZone: timezone,
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }

  return date.toLocaleString('en-US', {
    timeZone: timezone,
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  })
}

export function getLocalDate(utcString: string, timezone: string): string {
  const date = new Date(utcString)
  const parts = new Intl.DateTimeFormat('en-CA', {
    timeZone: timezone,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).formatToParts(date)

  const year = parts.find(p => p.type === 'year')?.value
  const month = parts.find(p => p.type === 'month')?.value
  const day = parts.find(p => p.type === 'day')?.value
  return `${year}-${month}-${day}`
}

export function formatDuration(minutes: number): string {
  if (minutes < 60) return `${minutes} min`
  const h = Math.floor(minutes / 60)
  const m = minutes % 60
  return m > 0 ? `${h}h ${m.toString().padStart(2, '0')}m` : `${h}h`
}

export function getTimezoneLabel(tz: string): string {
  const now = new Date()
  const offset = new Intl.DateTimeFormat('en-US', {
    timeZone: tz,
    timeZoneName: 'shortOffset',
  })
    .formatToParts(now)
    .find(p => p.type === 'timeZoneName')?.value ?? ''

  const city = tz.split('/').pop()?.replace(/_/g, ' ') ?? tz
  return `${city} (${offset})`
}
