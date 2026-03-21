import { ALL_SERIES } from '@/data/series-registry'
import { DayPageClient } from '@/components/DayPageClient'
import { eachDayOfInterval, format } from 'date-fns'

export function generateStaticParams() {
  const allDates = new Set<string>()

  for (const series of ALL_SERIES) {
    for (const event of series.events) {
      for (const session of event.sessions) {
        const date = new Date(session.startUtc)
        // Add the UTC date and adjacent dates to cover timezone shifts
        const d = new Date(date)
        allDates.add(format(d, 'yyyy-MM-dd'))
        d.setDate(d.getDate() - 1)
        allDates.add(format(d, 'yyyy-MM-dd'))
        d.setDate(d.getDate() + 2)
        allDates.add(format(d, 'yyyy-MM-dd'))
      }
    }
  }

  return Array.from(allDates).map(date => ({ date }))
}

export default async function DayPage({ params }: { params: Promise<{ date: string }> }) {
  const { date } = await params
  return <DayPageClient date={date} />
}
