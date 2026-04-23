import { Suspense } from 'react'
import type { Metadata } from 'next'
import { TeamDetailClient } from './TeamDetailClient'
import { getAllTeams, getTeam } from '@/data/teams'

export function generateStaticParams() {
  return getAllTeams().map(t => ({ id: t.id }))
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params
  const team = getTeam(id)
  const name = team?.name ?? id
  return {
    title: `${name} — Race Grid`,
    description: `${name} drivers, race results and standings across motorsport series.`,
    openGraph: {
      title: `${name} — Race Grid`,
      description: `${name} drivers, race results and standings across motorsport series.`,
    },
  }
}

export default async function TeamPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  return (
    <Suspense>
      <TeamDetailClient teamId={id} />
    </Suspense>
  )
}
