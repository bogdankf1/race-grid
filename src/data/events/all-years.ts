/**
 * Eagerly imports ALL years — only use in build-time code
 * (sitemap.ts, generateStaticParams). Never import this from client components.
 */
import type { RaceEvent } from '@/lib/types'
import { events2021 } from './year-2021'
import { events2022 } from './year-2022'
import { events2023 } from './year-2023'
import { events2024 } from './year-2024'
import { events2025 } from './year-2025'

export const ALL_HISTORICAL_EVENTS: Record<number, Record<string, RaceEvent[]>> = {
  2021: events2021,
  2022: events2022,
  2023: events2023,
  2024: events2024,
  2025: events2025,
}
