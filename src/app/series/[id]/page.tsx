import { Suspense } from 'react'
import type { Metadata } from 'next'
import { SeriesDetailClient } from './SeriesDetailClient'
import { SERIES_META } from '@/data/series-registry'

export function generateStaticParams() {
  return SERIES_META.map(s => ({ id: s.id }))
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params
  const series = SERIES_META.find(s => s.id === id)
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
    <Suspense>
      <SeriesDetailClient seriesId={id} />
    </Suspense>
  )
}
