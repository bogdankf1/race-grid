import { Suspense } from 'react'
import type { Metadata } from 'next'
import { CircuitDetailClient } from './CircuitDetailClient'
import { DetailPageSkeleton } from '@/components/Skeleton'
import { getAllCircuits, getCircuit } from '@/data/circuits'

export function generateStaticParams() {
  return getAllCircuits().map(c => ({ slug: c.id }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const circuit = getCircuit(slug)
  const name = circuit?.name ?? slug
  const country = circuit?.country ?? ''
  return {
    title: `${name}${country ? `, ${country}` : ''} — Race Grid`,
    description: `${name} race schedule, upcoming events and circuit info.`,
    openGraph: {
      title: `${name}${country ? `, ${country}` : ''} — Race Grid`,
      description: `${name} race schedule, upcoming events and circuit info.`,
    },
  }
}

export default async function CircuitDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  return (
    <Suspense fallback={<DetailPageSkeleton />}>
      <CircuitDetailClient slug={slug} />
    </Suspense>
  )
}
