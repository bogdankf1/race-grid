'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Flag, ChevronDown } from 'lucide-react'
import { t, type Locale } from '@/lib/i18n'
import type { RaceResult as RaceResultType, Session } from '@/lib/types'
import { getDriverIdByName, getTeamIdByName } from '@/data/lookup'

interface RaceResultProps {
  results: { session: Session; result: RaceResultType }[]
  locale: Locale
}

const MEDAL = ['🥇', '🥈', '🥉']

function DriverLink({ name }: { name: string }) {
  const id = getDriverIdByName(name)
  if (!id) return <>{name}</>
  return <Link href={`/drivers/${id}`} style={{ color: 'inherit', textDecoration: 'none' }}>{name}</Link>
}

function TeamLink({ name }: { name: string }) {
  const id = getTeamIdByName(name)
  if (!id) return <>{name}</>
  return <Link href={`/teams/${id}`} style={{ color: 'inherit', textDecoration: 'none' }}>{name}</Link>
}

function DriversDisplay({ drivers }: { drivers: string[] }) {
  return (
    <>
      {drivers.map((name, i) => (
        <span key={name}>
          {i > 0 && ', '}
          <DriverLink name={name} />
        </span>
      ))}
    </>
  )
}

export function RaceResult({ results, locale }: RaceResultProps) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div
      style={{
        marginTop: 12,
        padding: '14px 16px',
        borderRadius: 12,
        background: 'var(--rg-surface)',
        border: '1px solid var(--rg-card-border)',
      }}
    >
      <button
        className="rg-disclosure"
        onClick={() => setExpanded(!expanded)}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          width: '100%',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          padding: 0,
        }}
      >
        <Flag style={{ width: 14, height: 14, color: 'var(--rg-text3)', flexShrink: 0 }} />
        <span style={{ fontSize: 12, fontWeight: 600, color: 'var(--rg-text3)', textTransform: 'uppercase', letterSpacing: 1, flex: 1, textAlign: 'left' }}>
          {t('result.title', locale)}
        </span>
        <ChevronDown
          style={{
            width: 14,
            height: 14,
            color: 'var(--rg-text3)',
            transition: 'transform 0.2s ease',
            transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)',
          }}
        />
      </button>

      {expanded && (
        <div style={{ marginTop: 12, display: 'flex', flexDirection: 'column', gap: 16 }}>
          {results.map(({ session, result }) => (
            <div key={session.label}>
              {/* Session label if multiple results */}
              {results.length > 1 && (
                <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--rg-text3)', textTransform: 'uppercase', letterSpacing: 0.8, marginBottom: 8 }}>
                  {session.label}
                </div>
              )}

              {/* Podium — classes or just overall top 3 */}
              {result.classes && result.classes.length > 0 ? (
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  {result.classes.map((cls) => (
                    <div key={cls.className}>
                      {result.classes!.length > 1 && (
                        <div style={{ fontSize: 10, fontWeight: 700, color: 'var(--rg-text3)', textTransform: 'uppercase', letterSpacing: 0.8, marginBottom: 4 }}>
                          {cls.className}
                        </div>
                      )}
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                        {cls.podium.map((entry) => (
                          <div key={entry.position} style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 13 }}>
                            <span style={{ width: 20, textAlign: 'center', flexShrink: 0 }}>
                              {MEDAL[entry.position - 1] ?? `${entry.position}.`}
                            </span>
                            <span style={{ fontWeight: 600, color: 'var(--rg-text)' }}>
                              <DriversDisplay drivers={entry.drivers} />
                            </span>
                            <span style={{ color: 'var(--rg-text3)', fontSize: 12 }}>
                              — <TeamLink name={entry.team} />
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 13 }}>
                  <span style={{ width: 20, textAlign: 'center', flexShrink: 0 }}>🏆</span>
                  <span style={{ fontWeight: 600, color: 'var(--rg-text)' }}>
                    <DriversDisplay drivers={result.overall.drivers} />
                  </span>
                  <span style={{ color: 'var(--rg-text3)', fontSize: 12 }}>
                    — <TeamLink name={result.overall.team} />
                  </span>
                </div>
              )}

              {/* Fastest lap */}
              {result.fastestLap && (
                <div style={{ fontSize: 12, color: 'var(--rg-text3)', marginTop: 6 }}>
                  ⏱ {t('result.fastestLap', locale)}: <DriverLink name={result.fastestLap} />
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
