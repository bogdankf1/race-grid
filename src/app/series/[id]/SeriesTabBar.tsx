import { MapPin, Calendar, Users, Flag } from 'lucide-react'
import { t, type Locale } from '@/lib/i18n'

type SeriesTab = 'calendar' | 'circuits' | 'drivers' | 'teams'

interface SeriesTabBarProps {
  activeTab: SeriesTab
  onSelect: (tab: SeriesTab) => void
  locale: Locale
  eventCount: number
  circuitCount: number
  driverCount: number
  teamCount: number
}

export function SeriesTabBar({ activeTab, onSelect, locale, eventCount, circuitCount, driverCount, teamCount }: SeriesTabBarProps) {
  return (
    <div className="rg-series-tabs" style={{ display: 'flex', gap: 2, background: 'var(--rg-btn-bg)', borderRadius: 10, padding: 2, marginBottom: 20, width: 'fit-content', maxWidth: '100%' }}>
      {([
        { key: 'calendar' as const, icon: Calendar, label: t('nav.calendar', locale), count: eventCount },
        { key: 'circuits' as const, icon: MapPin, label: t('nav.circuits', locale), count: circuitCount },
        { key: 'drivers' as const, icon: Users, label: 'Drivers', count: driverCount },
        { key: 'teams' as const, icon: Flag, label: 'Teams', count: teamCount },
      ] as const).filter(t => t.count > 0).map(item => (
        <button
          key={item.key}
          onClick={() => onSelect(item.key)}
          className="rg-series-tab"
          style={{
            padding: '8px 16px', borderRadius: 8, fontSize: 13, fontWeight: 600,
            background: activeTab === item.key ? 'var(--rg-elevated)' : 'transparent',
            border: activeTab === item.key ? '1px solid var(--rg-border)' : '1px solid transparent',
            color: activeTab === item.key ? 'var(--rg-text)' : 'var(--rg-text3)',
            cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, whiteSpace: 'nowrap', flexShrink: 0,
          }}
        >
          <item.icon style={{ width: 14, height: 14 }} />
          <span className="rg-series-tab-label">{item.label}</span>
          <span className="rg-series-tab-label" style={{ fontSize: 11, color: 'var(--rg-text3)' }}>({item.count})</span>
        </button>
      ))}
    </div>
  )
}
