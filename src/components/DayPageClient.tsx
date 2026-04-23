'use client'

import { useEffect, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { format, parse, addDays, subDays } from 'date-fns'
import { ChevronLeft, ChevronRight, Share2, Check, CalendarDays } from 'lucide-react'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { useLocalStorage } from '@/hooks/useLocalStorage'
import { getDefaultTimezone } from '@/lib/timezone'
import { getSeriesForYear } from '@/data/series-registry'
import { t, getDefaultLocale, formatDateLocale, formatDateShort, type Locale } from '@/lib/i18n'
import { applyTheme, getDefaultTheme, type Theme } from '@/lib/theme'
import type { SessionType } from '@/lib/types'

const ALL_SESSION_TYPES: SessionType[] = [
  'race', 'qualifying', 'sprint', 'sprint_qualifying', 'hyperpole',
  'practice', 'warmup', 'stage', 'shakedown', 'endurance',
]
import { Header } from '@/components/Header'
import { DayDetail } from '@/components/DayDetail'
import { ErrorBoundary } from '@/components/ErrorBoundary'
import { SwipeContainer } from '@/components/SwipeContainer'

interface DayPageClientProps {
  date: string
}

export function DayPageClient({ date }: DayPageClientProps) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const highlightEventId = searchParams.get('event') ?? undefined
  const pageYear = parseInt(date.slice(0, 4))
  const allSeriesForYear = getSeriesForYear(pageYear)
  const [selectedSeries, setSelectedSeries] = useLocalStorage<string[]>(
    'race-grid:series',
    allSeriesForYear.map(s => s.id)
  )
  const [timezone, setTimezone] = useLocalStorage<string>('race-grid:timezone', getDefaultTimezone())
  const [theme, setTheme] = useLocalStorage<Theme>('race-grid:theme', getDefaultTheme())
  const [locale, setLocale] = useLocalStorage<Locale>('race-grid:locale', getDefaultLocale())
  const [spoilerFree, setSpoilerFree] = useLocalStorage<boolean>('race-grid:spoiler-free', false)
  const [visibleSessionTypes, setVisibleSessionTypes] = useLocalStorage<SessionType[]>('race-grid:session-types', ALL_SESSION_TYPES)

  useEffect(() => { applyTheme(theme) }, [theme])

  const parsed = parse(date, 'yyyy-MM-dd', new Date())
  const today = format(new Date(), 'yyyy-MM-dd')
  const isToday = date === today
  const dateLabel = formatDateLocale(parsed, locale)
  const dateLabelShort = formatDateShort(parsed, locale)
  const prevDate = format(subDays(parsed, 1), 'yyyy-MM-dd')
  const nextDate = format(addDays(parsed, 1), 'yyyy-MM-dd')

  const toggleSeries = (id: string) => {
    const updated = selectedSeries.includes(id)
      ? selectedSeries.filter(s => s !== id)
      : [...selectedSeries, id]
    setSelectedSeries(updated)
  }

  const [copied, setCopied] = useState(false)

  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark')
  const toggleLocale = () => setLocale(locale === 'en' ? 'uk' : 'en')
  const toggleSpoilerFree = () => setSpoilerFree(!spoilerFree)
  const toggleSessionType = (type: SessionType) => {
    const updated = visibleSessionTypes.includes(type)
      ? visibleSessionTypes.filter(t => t !== type)
      : [...visibleSessionTypes, type]
    if (updated.length > 0) setVisibleSessionTypes(updated)
  }

  const shareDay = async () => {
    const url = `${window.location.origin}/day/${date}`
    try {
      if (navigator.share) {
        await navigator.share({ title: document.title, url })
      } else {
        await navigator.clipboard.writeText(url)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
      }
    } catch {
      // user cancelled share or fallback
    }
  }

  const navBtnStyle: React.CSSProperties = {
    width: 36,
    borderRadius: 10,
    background: 'transparent',
    border: '1px solid var(--rg-border)',
    color: 'var(--rg-text2)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }

  return (
    <div style={{ minHeight: '100vh', background: 'var(--rg-bg)', color: 'var(--rg-text)' }}>
      <Header
        selectedSeriesIds={selectedSeries}
        onToggleSeries={toggleSeries}
        onSetSeries={setSelectedSeries}
        timezone={timezone}
        onTimezoneChange={setTimezone}
        theme={theme}
        onToggleTheme={toggleTheme}
        locale={locale}
        onToggleLocale={toggleLocale}
        spoilerFree={spoilerFree}
        onToggleSpoilerFree={toggleSpoilerFree}
        visibleSessionTypes={visibleSessionTypes}
        onToggleSessionType={toggleSessionType}
        onSetSessionTypes={setVisibleSessionTypes}
        showSeriesFilter={true}
      />

      <div className="rg-day-wrap">
        <Breadcrumbs items={[
          { label: 'Calendar', href: `/?month=${format(parsed, 'yyyy-MM')}` },
          { label: formatDateShort(parsed, locale) },
        ]} />

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            marginBottom: 28,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <button
              className="rg-nav-btn rg-control"
              onClick={() => router.push(`/day/${prevDate}`)}
              aria-label={t('nav.prev', locale)}
              style={navBtnStyle}
            >
              <ChevronLeft style={{ width: 20, height: 20 }} />
            </button>
            <h1
              className="font-display rg-day-heading"
              style={{ margin: 0, width: 420, textAlign: 'center', whiteSpace: 'nowrap' }}
            >
              <span className="rg-date-full">{dateLabel}</span>
              <span className="rg-date-short">{dateLabelShort}</span>
            </h1>
            <button
              className="rg-nav-btn rg-control"
              onClick={() => router.push(`/day/${nextDate}`)}
              aria-label={t('nav.next', locale)}
              style={navBtnStyle}
            >
              <ChevronRight style={{ width: 20, height: 20 }} />
            </button>
          </div>

          <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 8 }}>
            {!isToday && (
              <button
                className="rg-control"
                onClick={() => router.push(`/day/${today}`)}
                style={{
                  ...navBtnStyle,
                  width: 'auto',
                  gap: 6,
                  padding: '0 14px',
                  fontSize: 13,
                  fontWeight: 500,
                }}
              >
                <CalendarDays style={{ width: 15, height: 15 }} />
                <span>{t('nav.today', locale)}</span>
              </button>
            )}
            <button
              className="rg-control"
              onClick={shareDay}
              aria-label="Share"
              style={{
                ...navBtnStyle,
                color: copied ? 'var(--rg-success)' : 'var(--rg-text2)',
              }}
            >
              {copied ? <Check style={{ width: 15, height: 15 }} /> : <Share2 style={{ width: 15, height: 15 }} />}
            </button>
          </div>
        </div>

        <SwipeContainer
          onSwipeLeft={() => router.push(`/day/${nextDate}`)}
          onSwipeRight={() => router.push(`/day/${prevDate}`)}
          contentKey={date}
        >
          <ErrorBoundary>
          <DayDetail
            date={date}
            selectedSeriesIds={selectedSeries}
            timezone={timezone}
            locale={locale}
            highlightEventId={highlightEventId}
            spoilerFree={spoilerFree}
            visibleSessionTypes={visibleSessionTypes}
          />
          </ErrorBoundary>
        </SwipeContainer>
      </div>
    </div>
  )
}
