import { Suspense } from 'react'
import { DayPageClient } from '@/components/DayPageClient'
import { eachDayOfInterval, format, subDays, addDays } from 'date-fns'
import { ALL_SERIES } from '@/data/series-registry'

export function generateStaticParams() {
  // Derive date range from actual session data across all series
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

  // Pad by 7 days on each side for navigation comfort
  const start = subDays(new Date(earliest), 7)
  const end = addDays(new Date(latest), 7)
  const days = eachDayOfInterval({ start, end })

  return days.map(day => ({ date: format(day, 'yyyy-MM-dd') }))
}

export default async function DayPage({ params }: { params: Promise<{ date: string }> }) {
  const { date } = await params
  return (
    <Suspense>
      <DayPageClient date={date} />
    </Suspense>
  )
}
