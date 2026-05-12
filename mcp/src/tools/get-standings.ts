import { z } from 'zod'
import { getChampionshipStandings, getSeriesMeta } from '../data-bridge'

const schema = {
  series_id: z.string().describe('Series id (e.g. "f1"). See list_series.'),
  year: z.number().int().describe('Season year (2021–2026).'),
}

export const getStandingsTool = {
  name: 'get_standings',
  description:
    'Get the driver and constructor championship standings for one series and one season. Standings are not maintained for NLS (no consolidated table) and may lag mid-season by one round.',
  schema,
  handler: async (args: { series_id: string; year: number }) => {
    if (!getSeriesMeta(args.series_id)) {
      return errorText(`Unknown series_id "${args.series_id}".`)
    }
    const s = getChampionshipStandings(args.series_id, args.year)
    if (!s) {
      return errorText(
        `No standings available for ${args.series_id}-${args.year}. Some series (e.g. NLS) have no consolidated table.`,
      )
    }
    return {
      content: [{ type: 'text' as const, text: JSON.stringify(s, null, 2) }],
    }
  },
}

function errorText(msg: string) {
  return { content: [{ type: 'text' as const, text: JSON.stringify({ error: msg }) }] }
}
