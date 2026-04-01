import { Suspense } from 'react'
import { StandingsPageClient } from './StandingsPageClient'

export const metadata = {
  title: 'Standings — Race Grid',
  description: 'Championship standings for F1, IndyCar, NASCAR, WEC and more. Driver and constructor results.',
}

export default function StandingsPage() {
  return (
    <Suspense>
      <StandingsPageClient />
    </Suspense>
  )
}
