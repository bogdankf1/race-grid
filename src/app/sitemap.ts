import { MetadataRoute } from 'next'
import { eachDayOfInterval, format, subDays, addDays } from 'date-fns'
import { ALL_SERIES } from '@/data/series-registry'

export const dynamic = 'force-static'

const BASE_URL = 'https://race-grid.com'

export default function sitemap(): MetadataRoute.Sitemap {
  // Derive date range from session data (same logic as generateStaticParams)
  let earliest = Infinity
  let latest = -Infinity

  for (const series of ALL_SERIES) {
    for (const event of series.events) {
      for (const session of event.sessions) {
        const ms = new Date(session.startUtc).getTime()
        if (ms < earliest) earliest = ms
        if (ms > latest) latest = ms
      }
    }
  }

  const start = subDays(new Date(earliest), 7)
  const end = addDays(new Date(latest), 7)
  const days = eachDayOfInterval({ start, end })

  const dayPages: MetadataRoute.Sitemap = days.map(day => ({
    url: `${BASE_URL}/day/${format(day, 'yyyy-MM-dd')}`,
    changeFrequency: 'weekly',
    priority: 0.6,
  }))

  return [
    {
      url: BASE_URL,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    ...dayPages,
  ]
}
