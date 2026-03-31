import { Suspense } from 'react'
import { SeriesDetailClient } from './SeriesDetailClient'
import { SERIES_META } from '@/data/series-registry'

export function generateStaticParams() {
  return SERIES_META.map(s => ({ id: s.id }))
}

export default async function SeriesDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  return (
    <Suspense>
      <SeriesDetailClient seriesId={id} />
    </Suspense>
  )
}
