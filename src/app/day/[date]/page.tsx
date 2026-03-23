import { DayPageClient } from '@/components/DayPageClient'
import { eachDayOfInterval, format } from 'date-fns'

export function generateStaticParams() {
  // Generate every day in 2026 so navigation never hits a 404
  const start = new Date(2026, 0, 1)
  const end = new Date(2026, 11, 31)
  const days = eachDayOfInterval({ start, end })

  return days.map(day => ({ date: format(day, 'yyyy-MM-dd') }))
}

export default async function DayPage({ params }: { params: Promise<{ date: string }> }) {
  const { date } = await params
  return <DayPageClient date={date} />
}
