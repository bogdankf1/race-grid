import Link from 'next/link'
import { getDriver } from '@/data/drivers'
import type { Team } from '@/data/teams'
import type { EntryItem } from '@/data/entries/types'
import type { ClassStandings } from '@/data/standings/types'
import { countryFlag } from '@/lib/format'
import { ClassTabs } from '@/components/ClassTabs'

interface SeriesTeamsTabProps {
  teams: Team[]
  entries: EntryItem[]
  allClasses: ClassStandings[]
  activeClassIdx: number
  onSelectClass: (idx: number) => void
}

export function SeriesTeamsTab({ teams, entries, allClasses, activeClassIdx, onSelectClass }: SeriesTeamsTabProps) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      <ClassTabs classes={allClasses} activeIdx={activeClassIdx} onSelect={onSelectClass} />

      {teams.map(team => {
        // Find drivers for this team
        const teamDrivers = entries.filter(e => e.teamId === team.id)
        return (
          <Link
            key={team.id}
            href={`/teams/${team.id}`}
            className="rg-team-row"
            style={{
              display: 'flex', alignItems: 'center', gap: 12, padding: '10px 16px',
              borderRadius: 8, background: 'var(--rg-surface)', border: '1px solid var(--rg-card-border)',
              textDecoration: 'none', color: 'inherit',
            }}
          >
            {team.country && (
              <span style={{ fontSize: 14, flexShrink: 0 }}>{countryFlag(team.country)}</span>
            )}
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 14, fontWeight: 500, color: 'var(--rg-text)' }}>
                {team.name}
              </div>
              {teamDrivers.length > 0 && (
                <div style={{ fontSize: 12, color: 'var(--rg-text3)', marginTop: 2 }}>
                  {teamDrivers.map(e => getDriver(e.driverId)?.shortName).filter(Boolean).join(', ')}
                </div>
              )}
            </div>
          </Link>
        )
      })}
    </div>
  )
}
