import { Suspense } from 'react'
import { CircuitsPageClient } from './CircuitsPageClient'

export const metadata = {
  title: 'Circuits — Race Grid',
  description: 'Browse all motorsport circuits across 14 racing series. Track details, event history, and series information.',
}

export default function CircuitsPage() {
  return (
    <Suspense>
      <CircuitsPageClient />
    </Suspense>
  )
}
