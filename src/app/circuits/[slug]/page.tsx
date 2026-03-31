import { Suspense } from 'react'
import { CircuitDetailClient } from './CircuitDetailClient'
import { getAllCircuits } from '@/data/circuits'

export function generateStaticParams() {
  return getAllCircuits().map(c => ({ slug: c.id }))
}

export default async function CircuitDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  return (
    <Suspense>
      <CircuitDetailClient slug={slug} />
    </Suspense>
  )
}
