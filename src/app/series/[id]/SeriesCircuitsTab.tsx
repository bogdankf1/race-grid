import Link from 'next/link'
import { MapPin } from 'lucide-react'
import type { Circuit } from '@/data/circuits'
import { countryFlag } from '@/lib/format'

export function SeriesCircuitsTab({ circuits }: { circuits: Circuit[] }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
      {circuits.map(circuit => (
        <Link
          key={circuit.id}
          href={`/circuits/${circuit.id}`}
          style={{
            display: 'flex', alignItems: 'center', gap: 12, padding: '10px 16px',
            borderRadius: 10, background: 'var(--rg-surface)', border: '1px solid var(--rg-card-border)',
            textDecoration: 'none', color: 'inherit',
          }}
        >
          <MapPin style={{ width: 14, height: 14, color: 'var(--rg-text3)', flexShrink: 0 }} />
          <span style={{ fontSize: 14, fontWeight: 500, color: 'var(--rg-text)', flex: 1 }}>{circuit.name}</span>
          {circuit.countryCode && (
            <span style={{ fontSize: 13, color: 'var(--rg-text3)' }}>{countryFlag(circuit.countryCode)} {circuit.country}</span>
          )}
        </Link>
      ))}
    </div>
  )
}
