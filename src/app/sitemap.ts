import { MetadataRoute } from 'next'
import { eachDayOfInterval, format, subDays, addDays } from 'date-fns'
import { getSeriesForYear, AVAILABLE_YEARS, SERIES_META } from '@/data/series-registry'
import { getAllDrivers } from '@/data/drivers'
import { getAllTeams } from '@/data/teams'
import { getAllCircuits } from '@/data/circuits'

export const dynamic = 'force-static'

const BASE_URL = 'https://race-grid.com'

export default function sitemap(): MetadataRoute.Sitemap {
  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL, changeFrequency: 'daily', priority: 1.0 },
    { url: `${BASE_URL}/series`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/circuits`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/standings`, changeFrequency: 'weekly', priority: 0.8 },
  ]

  // Series pages
  const seriesPages: MetadataRoute.Sitemap = SERIES_META.map(s => ({
    url: `${BASE_URL}/series/${s.id}`,
    changeFrequency: 'weekly',
    priority: 0.8,
  }))

  // Driver pages
  const driverPages: MetadataRoute.Sitemap = getAllDrivers().map(d => ({
    url: `${BASE_URL}/drivers/${d.id}`,
    changeFrequency: 'monthly',
    priority: 0.5,
  }))

  // Team pages
  const teamPages: MetadataRoute.Sitemap = getAllTeams().map(t => ({
    url: `${BASE_URL}/teams/${t.id}`,
    changeFrequency: 'monthly',
    priority: 0.5,
  }))

  // Circuit pages
  const circuitPages: MetadataRoute.Sitemap = getAllCircuits().map(c => ({
    url: `${BASE_URL}/circuits/${c.id}`,
    changeFrequency: 'monthly',
    priority: 0.5,
  }))

  // Day pages — derive date range from session data
  let earliest = Infinity
  let latest = -Infinity

  for (const year of AVAILABLE_YEARS) {
    for (const series of getSeriesForYear(year)) {
      for (const event of series.events) {
        for (const session of event.sessions) {
          const ms = new Date(session.startUtc).getTime()
          if (ms < earliest) earliest = ms
          if (ms > latest) latest = ms
        }
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
    ...staticPages,
    ...seriesPages,
    ...driverPages,
    ...teamPages,
    ...circuitPages,
    ...dayPages,
  ]
}
