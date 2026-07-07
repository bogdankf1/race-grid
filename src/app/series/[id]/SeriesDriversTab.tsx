import Link from 'next/link'
import { getDriver } from '@/data/drivers'
import { getTeam } from '@/data/teams'
import type { EntryItem } from '@/data/entries/types'
import type { ClassStandings } from '@/data/standings/types'
import { countryFlag } from '@/lib/format'
import { ClassTabs } from '@/components/ClassTabs'

interface SeriesDriversTabProps {
  entries: EntryItem[]
  allClasses: ClassStandings[]
  activeClassIdx: number
  onSelectClass: (idx: number) => void
}

export function SeriesDriversTab({ entries, allClasses, activeClassIdx, onSelectClass }: SeriesDriversTabProps) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      <ClassTabs classes={allClasses} activeIdx={activeClassIdx} onSelect={onSelectClass} />
      {entries.map(entry => {
        const driver = getDriver(entry.driverId)
        const team = getTeam(entry.teamId)
        if (!driver) return null
        return (
          <div
            key={entry.driverId}
            style={{
              display: 'flex', alignItems: 'center', gap: 12, padding: '8px 16px',
              borderRadius: 8, background: 'var(--rg-surface)', border: '1px solid var(--rg-card-border)',
            }}
          >
            {driver.nationality && (
              <span style={{ fontSize: 14, flexShrink: 0 }}>{countryFlag(driver.nationality)}</span>
            )}
            <Link href={`/drivers/${entry.driverId}`} style={{ fontSize: 14, fontWeight: 500, color: 'var(--rg-text)', flex: 1, textDecoration: 'none' }}>
              {driver.name}
            </Link>
            {entry.carNumber && (
              <span style={{ fontSize: 12, fontWeight: 700, color: 'var(--rg-text3)', padding: '2px 6px', borderRadius: 4, background: 'var(--rg-elevated)' }}>
                #{entry.carNumber}
              </span>
            )}
            {team && (
              <Link href={`/teams/${entry.teamId}`} style={{ fontSize: 13, color: 'var(--rg-text3)', textAlign: 'right', textDecoration: 'none' }}>
                {team.name}
              </Link>
            )}
          </div>
        )
      })}
    </div>
  )
}
