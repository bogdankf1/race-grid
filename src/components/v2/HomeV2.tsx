'use client'

import { useMemo } from 'react'
import { ChevronLeft, ChevronRight, LayoutGrid, List } from 'lucide-react'
import { addMonths, format, subMonths } from 'date-fns'
import { useLocalStorage } from '@/hooks/useLocalStorage'
import type { DaySeriesInfo } from '@/hooks/useCalendarEvents'
import { formatMonthLocale, t, type Locale } from '@/lib/i18n'
import { CalendarGrid } from '../CalendarGrid'
import { CalendarSearch } from '../CalendarSearch'
import { HeroNextRace } from './HeroNextRace'
import { AgendaFeed } from './AgendaFeed'
import { MiniMonth } from './MiniMonth'

interface HomeV2Props {
  month: string
  onMonthChange: (month: string) => void
  events: Map<string, DaySeriesInfo[]>
  locale: Locale
  viewMode: 'month' | 'week'
  onViewModeChange: (mode: 'month' | 'week') => void
  weekStart: string
  onWeekStartChange: (weekStart: string) => void
  selectedSeriesIds: string[]
  timezone: string
  highlightDate?: string | null
}

export function HomeV2(props: HomeV2Props) {
  const { month, onMonthChange, events, locale, selectedSeriesIds, timezone } = props
  const [view, setView] = useLocalStorage<'agenda' | 'grid'>('race-grid:v2-view', 'agenda')

  const currentDate = useMemo(() => {
    const [year, m] = month.split('-').map(Number)
    return new Date(year, m - 1, 1)
  }, [month])

  const stats = useMemo(() => {
    const eventIds = new Set<string>()
    const seriesIds = new Set<string>()
    for (const [date, infos] of events) {
      if (!date.startsWith(month)) continue
      for (const info of infos) {
        info.eventIds.forEach(id => eventIds.add(id))
        seriesIds.add(info.series.id)
      }
    }
    return { events: eventIds.size, series: seriesIds.size }
  }, [events, month])

  const viewToggle = (
    <div className="v2-view-toggle">
      <button className={view === 'agenda' ? 'is-active' : ''} onClick={() => setView('agenda')}>
        <List style={{ width: 13, height: 13 }} />
        <span>{t('v2.agenda', locale)}</span>
      </button>
      <button className={view === 'grid' ? 'is-active' : ''} onClick={() => setView('grid')}>
        <LayoutGrid style={{ width: 13, height: 13 }} />
        <span>{t('v2.grid', locale)}</span>
      </button>
    </div>
  )

  return (
    <div className="v2-home">
      <HeroNextRace selectedSeriesIds={selectedSeriesIds} timezone={timezone} locale={locale} />

      {view === 'grid' ? (
        <>
          <div className="v2-toolbar v2-toolbar-grid">{viewToggle}</div>
          <CalendarGrid {...props} />
        </>
      ) : (
        <>
          <div className="v2-toolbar">
            <div className="v2-month-nav">
              <button
                className="v2-icon-btn"
                onClick={() => onMonthChange(format(subMonths(currentDate, 1), 'yyyy-MM'))}
                aria-label={t('nav.prev', locale)}
              >
                <ChevronLeft style={{ width: 18, height: 18 }} />
              </button>
              <h2 className="font-display v2-month-label">{formatMonthLocale(currentDate, locale)}</h2>
              <button
                className="v2-icon-btn"
                onClick={() => onMonthChange(format(addMonths(currentDate, 1), 'yyyy-MM'))}
                aria-label={t('nav.next', locale)}
              >
                <ChevronRight style={{ width: 18, height: 18 }} />
              </button>
              <button className="v2-today-btn" onClick={() => onMonthChange(format(new Date(), 'yyyy-MM'))}>
                {t('nav.today', locale)}
              </button>
            </div>
            <div className="v2-toolbar-right">
              <CalendarSearch selectedSeriesIds={selectedSeriesIds} timezone={timezone} locale={locale} />
              {viewToggle}
            </div>
          </div>

          <div className="v2-home-body">
            <div className="v2-home-main">
              <AgendaFeed month={month} events={events} locale={locale} />
            </div>
            <aside className="v2-home-side">
              <MiniMonth month={month} onMonthChange={onMonthChange} events={events} locale={locale} />
              <div className="v2-stats">
                <span className="v2-stats-title">{t('v2.thisMonth', locale)}</span>
                <div className="v2-stats-row">
                  <div className="v2-stat">
                    <span className="font-display v2-stat-num">{stats.events}</span>
                    <span className="v2-stat-label">{t('v2.events', locale)}</span>
                  </div>
                  <div className="v2-stat">
                    <span className="font-display v2-stat-num">{stats.series}</span>
                    <span className="v2-stat-label">{t('v2.series', locale)}</span>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </>
      )}
    </div>
  )
}
