'use client'

function SkeletonLine({ width = '100%', height = 14, style }: { width?: string | number; height?: number; style?: React.CSSProperties }) {
  return (
    <div
      className="rg-skeleton"
      style={{
        width,
        height,
        borderRadius: 6,
        background: 'var(--rg-elevated)',
        ...style,
      }}
    />
  )
}

export function CalendarSkeleton() {
  return (
    <div style={{ padding: '16px 0' }}>
      {/* Nav bar */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <SkeletonLine width={36} height={36} style={{ borderRadius: 10 }} />
          <SkeletonLine width={180} height={28} style={{ borderRadius: 8 }} />
          <SkeletonLine width={36} height={36} style={{ borderRadius: 10 }} />
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          <SkeletonLine width={100} height={32} style={{ borderRadius: 10 }} />
          <SkeletonLine width={80} height={32} style={{ borderRadius: 10 }} />
        </div>
      </div>
      {/* Day headers */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 4, marginBottom: 8 }}>
        {Array.from({ length: 7 }).map((_, i) => (
          <SkeletonLine key={i} height={16} style={{ borderRadius: 4 }} />
        ))}
      </div>
      {/* Grid cells */}
      {Array.from({ length: 5 }).map((_, row) => (
        <div key={row} style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 4, marginBottom: 4 }}>
          {Array.from({ length: 7 }).map((_, col) => (
            <SkeletonLine key={col} height={80} style={{ borderRadius: 10 }} />
          ))}
        </div>
      ))}
    </div>
  )
}

export function DayDetailSkeleton() {
  return (
    <div style={{ padding: '24px 0' }}>
      {/* Date header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 28 }}>
        <SkeletonLine width={36} height={36} style={{ borderRadius: 10 }} />
        <SkeletonLine width={280} height={32} style={{ borderRadius: 8 }} />
        <SkeletonLine width={36} height={36} style={{ borderRadius: 10 }} />
      </div>
      {/* Event cards */}
      {Array.from({ length: 3 }).map((_, i) => (
        <div key={i} style={{ marginBottom: 16, borderRadius: 16, border: '1px solid var(--rg-card-border)', padding: 20 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
            <SkeletonLine width={60} height={24} style={{ borderRadius: 6 }} />
            <SkeletonLine width={60} height={20} style={{ borderRadius: 6 }} />
          </div>
          <SkeletonLine width="60%" height={22} style={{ marginBottom: 8 }} />
          <SkeletonLine width="40%" height={14} style={{ marginBottom: 16 }} />
          {Array.from({ length: 3 }).map((_, j) => (
            <SkeletonLine key={j} width="100%" height={40} style={{ borderRadius: 10, marginBottom: 6 }} />
          ))}
        </div>
      ))}
    </div>
  )
}

export function DetailPageSkeleton() {
  return (
    <div style={{ padding: '24px 0' }}>
      <SkeletonLine width={200} height={14} style={{ marginBottom: 16 }} />
      <SkeletonLine width={300} height={32} style={{ marginBottom: 8 }} />
      <SkeletonLine width={180} height={16} style={{ marginBottom: 24 }} />
      {Array.from({ length: 5 }).map((_, i) => (
        <SkeletonLine key={i} width="100%" height={48} style={{ borderRadius: 10, marginBottom: 8 }} />
      ))}
    </div>
  )
}
