import { z } from 'zod'
import { findNextRace, getSeriesMeta } from '../data-bridge'

const schema = {
  series_id: z
    .string()
    .optional()
    .describe('Optional series filter (e.g. "f1"). Omit to find the next race across ALL series.'),
  timezone: z
    .string()
    .optional()
    .describe(
      'Optional IANA timezone (e.g. "Europe/Kyiv", "America/Los_Angeles") to localize the race-start time in the response. Session times remain in UTC.',
    ),
}

export const getNextRaceTool = {
  name: 'get_next_race',
  description:
    'Find the next upcoming race (race session or its weekend) relative to now. Optionally scope to one series and/or convert the start time to a local timezone for display.',
  schema,
  handler: async (args: { series_id?: string; timezone?: string }) => {
    if (args.series_id && !getSeriesMeta(args.series_id)) {
      return errorText(`Unknown series_id "${args.series_id}".`)
    }
    const next = findNextRace(new Date(), args.series_id)
    if (!next) {
      return {
        content: [
          {
            type: 'text' as const,
            text: JSON.stringify({
              message: 'No upcoming race found for current year.',
              seriesId: args.series_id ?? null,
            }),
          },
        ],
      }
    }
    const raceSession =
      next.sessions.find((s) => s.type === 'race') ??
      next.sessions.find((s) => s.type === 'endurance') ??
      next.sessions[next.sessions.length - 1]

    const localized = args.timezone
      ? safeFormatInTz(raceSession.startUtc, args.timezone)
      : undefined

    return {
      content: [
        {
          type: 'text' as const,
          text: JSON.stringify(
            {
              ...next,
              raceSession,
              raceStartLocal: localized,
              timezone: args.timezone ?? null,
            },
            null,
            2,
          ),
        },
      ],
    }
  },
}

function safeFormatInTz(iso: string, tz: string): string | null {
  try {
    return new Intl.DateTimeFormat('en-GB', {
      timeZone: tz,
      dateStyle: 'full',
      timeStyle: 'short',
    }).format(new Date(iso))
  } catch {
    return null
  }
}

function errorText(msg: string) {
  return { content: [{ type: 'text' as const, text: JSON.stringify({ error: msg }) }] }
}
