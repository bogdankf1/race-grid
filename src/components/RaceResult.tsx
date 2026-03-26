'use client'

import { useState } from 'react'
import { Flag, ChevronDown } from 'lucide-react'
import { t, type Locale } from '@/lib/i18n'
import type { RaceResult as RaceResultType, Session, SessionType } from '@/lib/types'

interface RaceResultProps {
  results: { session: Session; result: RaceResultType }[]
  locale: Locale
}

const MEDAL = ['🥇', '🥈', '🥉']

export function RaceResult({ results, locale }: RaceResultProps) {
  const [expanded, setExpanded] = useState(false)
  const qualiTypes: SessionType[] = ['qualifying', 'hyperpole']

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
      {/* Header — same style as "WHERE TO WATCH" */}
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

      {/* Expanded content */}
      {expanded && (
        <div style={{ marginTop: 12, display: 'flex', flexDirection: 'column', gap: 14 }}>
          {results.map(({ session, result }) => {
            const isQuali = qualiTypes.includes(session.type)
            const sectionLabel = isQuali ? t('result.pole', locale) : t('result.winner', locale)

            return (
              <div key={session.label}>
                {/* Session label if multiple results */}
                {results.length > 1 && (
                  <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--rg-text3)', textTransform: 'uppercase', letterSpacing: 0.8, marginBottom: 6 }}>
                    {session.label}
                  </div>
                )}

                {/* Winner / Pole */}
                <div style={{ fontSize: 12, fontWeight: 600, color: 'var(--rg-text3)', marginBottom: 4 }}>
                  {sectionLabel}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 13, marginBottom: 4 }}>
                  <span style={{ width: 18, textAlign: 'center', flexShrink: 0 }}>🏆</span>
                  <span style={{ fontWeight: 700, color: 'var(--rg-text)' }}>
                    {result.overall.drivers.join(', ')}
                  </span>
                  <span style={{ color: 'var(--rg-text3)', fontSize: 12 }}>
                    — {result.overall.team}
                  </span>
                </div>

                {/* Fastest lap */}
                {result.fastestLap && (
                  <div style={{ fontSize: 12, color: 'var(--rg-text3)', marginBottom: 4, paddingLeft: 24 }}>
                    ⏱ {t('result.fastestLap', locale)}: {result.fastestLap}
                  </div>
                )}

                {/* Class podiums */}
                {result.classes && result.classes.length > 0 && (
                  <div style={{ paddingLeft: 24, marginTop: 6, display: 'flex', flexDirection: 'column', gap: 10 }}>
                    {result.classes.map((cls) => (
                      <div key={cls.className}>
                        <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--rg-text3)', textTransform: 'uppercase', letterSpacing: 0.8, marginBottom: 4 }}>
                          {cls.className}
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                          {cls.podium.map((entry) => (
                            <div key={entry.position} style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12 }}>
                              <span style={{ width: 18, textAlign: 'center', flexShrink: 0 }}>
                                {MEDAL[entry.position - 1] ?? `${entry.position}.`}
                              </span>
                              <span style={{ fontWeight: 600, color: 'var(--rg-text)' }}>
                                {entry.drivers.join(', ')}
                              </span>
                              <span style={{ color: 'var(--rg-text3)' }}>
                                — {entry.team}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
