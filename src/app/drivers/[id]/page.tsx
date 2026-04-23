import { Suspense } from 'react'
import type { Metadata } from 'next'
import { DriverDetailClient } from './DriverDetailClient'
import { getAllDrivers, getDriver } from '@/data/drivers'

export function generateStaticParams() {
  return getAllDrivers().map(d => ({ id: d.id }))
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params
  const driver = getDriver(id)
  const name = driver?.name ?? id
  return {
    title: `${name} — Race Grid`,
    description: `${name} race results, team history and career stats across motorsport series.`,
    openGraph: {
      title: `${name} — Race Grid`,
      description: `${name} race results, team history and career stats across motorsport series.`,
    },
  }
}

export default async function DriverPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  return (
    <Suspense>
      <DriverDetailClient driverId={id} />
    </Suspense>
  )
}
