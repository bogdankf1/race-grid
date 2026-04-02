import { Suspense } from 'react'
import { DriverDetailClient } from './DriverDetailClient'
import { getAllDrivers } from '@/data/drivers'

export function generateStaticParams() {
  return getAllDrivers().map(d => ({ id: d.id }))
}

export default async function DriverPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  return (
    <Suspense>
      <DriverDetailClient driverId={id} />
    </Suspense>
  )
}
