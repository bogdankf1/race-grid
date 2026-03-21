import { SeriesConfig } from '@/lib/types'

interface SeriesChipProps {
  series: SeriesConfig
  size?: 'sm' | 'md'
  active?: boolean
  onClick?: () => void
}

export function SeriesChip({ series, size = 'sm', active = true, onClick }: SeriesChipProps) {
  const isSmall = size === 'sm'

  return (
    <span
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onClick={onClick}
      onKeyDown={onClick ? (e) => { if (e.key === 'Enter' || e.key === ' ') onClick() } : undefined}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: isSmall ? 6 : 8,
        fontWeight: 700,
        letterSpacing: 0.5,
        border: active ? 'none' : `1.5px solid ${series.color}`,
        backgroundColor: active ? series.color : 'transparent',
        color: active ? series.textColor : series.color,
        padding: isSmall ? '4px 10px' : '6px 14px',
        fontSize: isSmall ? 11 : 13,
        lineHeight: 1,
        cursor: onClick ? 'pointer' : 'default',
        transition: 'all 0.15s ease',
        whiteSpace: 'nowrap',
      }}
    >
      {series.shortName}
    </span>
  )
}
