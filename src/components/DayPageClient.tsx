'use client'

import { useEffect, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { format, parse, addDays, subDays } from 'date-fns'
import { ChevronLeft, ChevronRight, Share2, Check } from 'lucide-react'
import { useLocalStorage } from '@/hooks/useLocalStorage'
import { getDefaultTimezone } from '@/lib/timezone'
import { ALL_SERIES } from '@/data/series-registry'
import { getDefaultLocale, formatDateLocale, formatDateShort, type Locale } from '@/lib/i18n'
import { applyTheme, getDefaultTheme, type Theme } from '@/lib/theme'
import { Header } from '@/components/Header'
import { DayDetail } from '@/components/DayDetail'

interface DayPageClientProps {
  date: string
}

export function DayPageClient({ date }: DayPageClientProps) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const highlightEventId = searchParams.get('event') ?? undefined
  const [selectedSeries, setSelectedSeries] = useLocalStorage<string[]>(
    'race-grid:series',
    ALL_SERIES.map(s => s.id)
  )
  const [timezone, setTimezone] = useLocalStorage<string>('race-grid:timezone', getDefaultTimezone())
  const [theme, setTheme] = useLocalStorage<Theme>('race-grid:theme', getDefaultTheme())
  const [locale, setLocale] = useLocalStorage<Locale>('race-grid:locale', getDefaultLocale())

  useEffect(() => { applyTheme(theme) }, [theme])

  const parsed = parse(date, 'yyyy-MM-dd', new Date())
  const monthPath = format(parsed, 'yyyy-MM')
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
    height: 36,
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
        backHref={`/?month=${monthPath}`}
      />

      <div className="rg-day-wrap">
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
              className="rg-nav-btn"
              onClick={() => router.push(`/day/${prevDate}`)}
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
              className="rg-nav-btn"
              onClick={() => router.push(`/day/${nextDate}`)}
              style={navBtnStyle}
            >
              <ChevronRight style={{ width: 20, height: 20 }} />
            </button>
          </div>

          {/* Share button */}
          <button
            onClick={shareDay}
            style={{
              ...navBtnStyle,
              marginLeft: 'auto',
              width: 'auto',
              gap: 6,
              padding: '0 14px',
              fontSize: 13,
              fontWeight: 500,
              color: copied ? '#4ade80' : 'var(--rg-text2)',
            }}
          >
            {copied ? <Check style={{ width: 15, height: 15 }} /> : <Share2 style={{ width: 15, height: 15 }} />}
            <span>{copied ? (locale === 'uk' ? 'Скопійовано' : 'Copied!') : (locale === 'uk' ? 'Поділитись' : 'Share')}</span>
          </button>
        </div>

        <DayDetail
          date={date}
          selectedSeriesIds={selectedSeries}
          timezone={timezone}
          locale={locale}
          highlightEventId={highlightEventId}
        />
      </div>
    </div>
  )
}
