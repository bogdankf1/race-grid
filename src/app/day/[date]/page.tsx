import { Suspense } from 'react'
import type { Metadata } from 'next'
import { DayPageClient } from '@/components/DayPageClient'
import { DayDetailSkeleton } from '@/components/Skeleton'
import { eachDayOfInterval, format, subDays, addDays, parseISO } from 'date-fns'
import { getSeriesForYear, AVAILABLE_YEARS } from '@/data/series-registry'

export function generateStaticParams() {
  // Derive date range from actual session data across all series and years
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

  // Pad by 7 days on each side for navigation comfort
  const start = subDays(new Date(earliest), 7)
  const end = addDays(new Date(latest), 7)
  const days = eachDayOfInterval({ start, end })

  return days.map(day => ({ date: format(day, 'yyyy-MM-dd') }))
}

export async function generateMetadata({ params }: { params: Promise<{ date: string }> }): Promise<Metadata> {
  const { date } = await params
  const d = parseISO(date)
  const formatted = format(d, 'EEEE, MMMM d, yyyy')
  return {
    title: `${formatted} — Race Grid`,
    description: `Motorsport schedule for ${formatted}. Session times in your local timezone.`,
    openGraph: {
      title: `${formatted} — Race Grid`,
      description: `Motorsport schedule for ${formatted}. Session times in your local timezone.`,
    },
  }
}

export default async function DayPage({ params }: { params: Promise<{ date: string }> }) {
  const { date } = await params
  return (
    <Suspense fallback={<DayDetailSkeleton />}>
      <DayPageClient date={date} />
    </Suspense>
  )
}
