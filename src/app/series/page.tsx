import { Suspense } from 'react'
import { SeriesPageClient } from './SeriesPageClient'

export const metadata = {
  title: 'Series — Race Grid',
  description: 'Browse all 26 racing series. F1, IndyCar, NASCAR, WEC, WRC, IMSA, DTM, GTWC and more.',
}

export default function SeriesPage() {
  return (
    <Suspense>
      <SeriesPageClient />
    </Suspense>
  )
}
