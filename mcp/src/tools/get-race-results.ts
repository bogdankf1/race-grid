import { z } from 'zod'
import { getEventResults, getSeasonResults, getSeriesMeta } from '../data-bridge'

const schema = {
  series_id: z.string().describe('Series id (e.g. "f1"). See list_series.'),
  year: z.number().int().describe('Season year (2021–2026).'),
  event_id: z
    .string()
    .optional()
    .describe(
      'Optional event id (e.g. "f1-2024-monaco"). Omit to return results for every completed race that season.',
    ),
}

export const getRaceResultsTool = {
  name: 'get_race_results',
  description:
    'Get race results — overall podium, class podiums (for endurance), and fastest lap if recorded. Pass event_id for a single race, or omit it for the full season.',
  schema,
  handler: async (args: { series_id: string; year: number; event_id?: string }) => {
    if (!getSeriesMeta(args.series_id)) {
      return errorText(`Unknown series_id "${args.series_id}".`)
    }
    if (args.event_id) {
      const results = getEventResults(args.event_id)
      if (results.length === 0) {
        return errorText(`No results found for event "${args.event_id}".`)
      }
      return ok({ eventId: args.event_id, results })
    }
    const season = getSeasonResults(args.series_id, args.year)
    return ok({
      seriesId: args.series_id,
      year: args.year,
      events: season,
      count: season.length,
    })
  },
}

function ok(payload: unknown) {
  return {
    content: [{ type: 'text' as const, text: JSON.stringify(payload, null, 2) }],
  }
}

function errorText(msg: string) {
  return { content: [{ type: 'text' as const, text: JSON.stringify({ error: msg }) }] }
}
