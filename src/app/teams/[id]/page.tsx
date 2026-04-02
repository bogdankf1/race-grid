import { Suspense } from 'react'
import { TeamDetailClient } from './TeamDetailClient'
import { getAllTeams } from '@/data/teams'

export function generateStaticParams() {
  return getAllTeams().map(t => ({ id: t.id }))
}

export default async function TeamPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  return (
    <Suspense>
      <TeamDetailClient teamId={id} />
    </Suspense>
  )
}
