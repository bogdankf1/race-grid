import { z } from 'zod'
import { searchRaces } from '../data-bridge'

const schema = {
  from_date: z
    .string()
    .describe('Start of the window, ISO format (YYYY-MM-DD or full ISO datetime).'),
  to_date: z.string().describe('End of the window, ISO format.'),
  country: z
    .string()
    .optional()
    .describe('Optional country name filter, case-insensitive (e.g. "Italy", "United States").'),
  country_code: z
    .string()
    .optional()
    .describe('Optional ISO 3166-1 alpha-2 country code (e.g. "IT", "US"). Takes precedence over country if both passed.'),
  series_ids: z
    .array(z.string())
    .optional()
    .describe('Optional list of series ids to restrict the search to.'),
}

export const searchRacesTool = {
  name: 'search_races',
  description:
    'Search for races across all 27 series in a date window, optionally filtering by country or series. Useful for "what races happen in May 2026?" or "all Italian races this year".',
  schema,
  handler: async (args: {
    from_date: string
    to_date: string
    country?: string
    country_code?: string
    series_ids?: string[]
  }) => {
    const events = searchRaces({
      fromDate: args.from_date,
      toDate: args.to_date,
      country: args.country,
      countryCode: args.country_code,
      seriesIds: args.series_ids,
    })
    return {
      content: [
        {
          type: 'text' as const,
          text: JSON.stringify({ count: events.length, events }, null, 2),
        },
      ],
    }
  },
}
