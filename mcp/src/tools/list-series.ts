import { z } from 'zod'
import { listSeries, listAvailableYears } from '../data-bridge'

export const listSeriesTool = {
  name: 'list_series',
  description:
    'List all 27 racing series tracked by Race Grid (F1, NASCAR, WEC, MotoGP, etc.) with their group classification and available seasons. Call this first when you need to know what series_id values are valid.',
  schema: {},
  handler: async () => {
    const series = listSeries()
    const years = listAvailableYears()
    return {
      content: [
        {
          type: 'text' as const,
          text: JSON.stringify({ availableYears: years, series }, null, 2),
        },
      ],
    }
  },
} satisfies {
  name: string
  description: string
  schema: z.ZodRawShape
  handler: (args: Record<string, never>) => Promise<{
    content: Array<{ type: 'text'; text: string }>
  }>
}
