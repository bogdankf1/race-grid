import { z } from 'zod'
import { getCalendar, getSeriesMeta, listAvailableYears } from '../data-bridge'

const schema = {
  series_id: z
    .string()
    .describe('Series id, e.g. "f1", "wec", "nascar". Use list_series to discover valid ids.'),
  year: z
    .number()
    .int()
    .describe('Season year. Supported: 2021–2026.'),
}

export const getCalendarTool = {
  name: 'get_calendar',
  description:
    'Get the full race calendar for one series and one season. Each event includes the circuit, country, and all session times in UTC. Use this for "when is the next X race?" or to list all 2024 F1 rounds.',
  schema,
  handler: async (args: { series_id: string; year: number }) => {
    if (!getSeriesMeta(args.series_id)) {
      return errorText(
        `Unknown series_id "${args.series_id}". Call list_series to see valid ids.`,
      )
    }
    const years = listAvailableYears()
    if (!years.includes(args.year)) {
      return errorText(`Year ${args.year} not supported. Available: ${years.join(', ')}.`)
    }
    const events = getCalendar(args.series_id, args.year)
    return {
      content: [
        {
          type: 'text' as const,
          text: JSON.stringify(
            { seriesId: args.series_id, year: args.year, count: events.length, events },
            null,
            2,
          ),
        },
      ],
    }
  },
}

function errorText(msg: string) {
  return { content: [{ type: 'text' as const, text: JSON.stringify({ error: msg }) }] }
}
