import { Suspense } from 'react'
import type { Metadata } from 'next'
import { SeriesDetailClient } from './SeriesDetailClient'
import { DetailPageSkeleton } from '@/components/Skeleton'
import { getSeriesMeta, getVisibleSeries } from '@/data/series-registry'

export function generateStaticParams() {
  return getVisibleSeries().map(s => ({ id: s.id }))
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params
  const series = getSeriesMeta(id)
  const name = series?.name ?? id.toUpperCase()
  return {
    title: `${name} Calendar & Results — Race Grid`,
    description: `${name} race schedule, session times in your timezone, standings and results.`,
    openGraph: {
      title: `${name} Calendar & Results — Race Grid`,
      description: `${name} race schedule, session times in your timezone, standings and results.`,
    },
  }
}

export default async function SeriesDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  return (
    <Suspense fallback={<DetailPageSkeleton />}>
      <SeriesDetailClient seriesId={id} />
    </Suspense>
  )
}
