// Display conventions ported 1:1 from the web app (DayDetail, UpcomingRaces).

import type { Locale } from '@/lib/i18n'
import type { SessionType } from '@/lib/types'

/** Session icons from web DayDetail. */
export const SESSION_ICONS: Record<SessionType, string> = {
  race: '\u{1F3C1}',
  qualifying: '⏱',
  sprint: '⚡',
  sprint_qualifying: '⚡',
  hyperpole: '\u{1F3AF}',
  practice: '\u{1F527}',
  warmup: '\u{1F527}',
  stage: '\u{1F5FA}',
  shakedown: '\u{1F5FA}',
  endurance: '\u{1F3C1}',
}

/** Gold / silver / bronze accents for P1–P3 (web driver/team pages). */
export const MEDAL_COLORS = ['#FFD700', '#C0C0C0', '#CD7F32']

/** Localized country name from an ISO code (web driver/team pages). */
export function countryName(code: string, locale: Locale): string {
  if (!code) return ''
  try {
    return (
      new Intl.DisplayNames([locale === 'uk' ? 'uk' : 'en'], { type: 'region' }).of(
        code.toUpperCase(),
      ) ?? code
    )
  } catch {
    return code
  }
}

/** Country code → emoji flag (web DayDetail). */
export function countryFlag(countryCode: string): string {
  return countryCode
    .toUpperCase()
    .split('')
    .map((c) => String.fromCodePoint(0x1f1e6 + c.charCodeAt(0) - 65))
    .join('')
}

/** Coarse countdown, e.g. "2d 4h" / "3h" (web UpcomingRaces.formatCountdown). */
export function formatCountdown(targetUtc: string, now: number, locale: Locale): string | null {
  const ms = new Date(targetUtc).getTime() - now
  if (ms <= 0) return null
  const days = Math.floor(ms / 86_400_000)
  const hours = Math.floor((ms % 86_400_000) / 3_600_000)
  const minutes = Math.floor((ms % 3_600_000) / 60_000)
  if (locale === 'uk') {
    if (days > 0) return `${days}д ${hours}год`
    if (hours > 0) return `${hours}год ${minutes}хв`
    return `${minutes}хв`
  }
  if (days > 0) return `${days}d ${hours}h`
  if (hours > 0) return `${hours}h ${minutes}m`
  return `${minutes}m`
}

/** "Jun 12 – Jun 14" (or a single date when the event fits in one day). */
export function formatDateRange(startDate: string, endDate: string, locale: Locale): string {
  const loc = locale === 'uk' ? 'uk-UA' : 'en-US'
  const fmt = (iso: string) =>
    new Date(iso + 'T12:00:00Z').toLocaleDateString(loc, {
      month: 'short',
      day: 'numeric',
      timeZone: 'UTC',
    })
  if (startDate === endDate) return fmt(startDate)
  return `${fmt(startDate)} – ${fmt(endDate)}`
}

/** "Mon, Jun 8 – Sun, Jun 14" week header for an ISO Monday. */
export function formatWeekLabel(weekKey: string, locale: Locale): string {
  const loc = locale === 'uk' ? 'uk-UA' : 'en-US'
  const monday = new Date(weekKey + 'T12:00:00Z')
  const sunday = new Date(monday)
  sunday.setUTCDate(sunday.getUTCDate() + 6)
  const fmt = (d: Date) =>
    d.toLocaleDateString(loc, { month: 'short', day: 'numeric', timeZone: 'UTC' })
  return `${fmt(monday)} – ${fmt(sunday)}`
}
