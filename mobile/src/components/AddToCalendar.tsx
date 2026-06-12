// Native take on the web CalendarExport menu: insert the weekend's sessions
// into the device calendar (expo-calendar), or open per-session Google
// Calendar templates. Event titles match the web .ics convention:
//   `${seriesName}: ${session.label} — ${event.name}`

import * as Calendar from 'expo-calendar'
import { CalendarPlus } from 'lucide-react-native'
import { useState } from 'react'
import { Alert, Linking, Platform, Pressable, Text, View } from 'react-native'

import { getCircuit } from '@/data/circuits'
import { t, type Locale } from '@/lib/i18n'
import type { RaceEvent, Session } from '@/lib/types'
import { DEFAULT_SESSION_MINUTES, isTba } from '~/lib/data'
import { tm } from '~/lib/strings'
import { useTheme } from '~/state/theme'

function icsDate(iso: string): string {
  return iso.replace(/[-:]/g, '').replace(/\.\d{3}/, '')
}

function googleUrl(event: RaceEvent, session: Session, seriesName: string): string {
  const start = icsDate(session.startUtc)
  const endMs =
    new Date(session.startUtc).getTime() +
    (session.durationMinutes || DEFAULT_SESSION_MINUTES) * 60_000
  const end = icsDate(new Date(endMs).toISOString())
  const circuit = getCircuit(event.circuitId)
  const title = `${seriesName}: ${session.label} — ${event.name}`
  const location = `${circuit?.name ?? event.circuitId}, ${circuit?.country ?? ''}`
  const details = `${session.label} — ${event.name}\n${circuit?.name ?? ''}\n${seriesName}`
  return (
    'https://calendar.google.com/calendar/render?action=TEMPLATE' +
    `&text=${encodeURIComponent(title)}` +
    `&dates=${start}%2F${end}` +
    `&location=${encodeURIComponent(location)}` +
    `&details=${encodeURIComponent(details)}`
  )
}

async function writableCalendarId(): Promise<string | null> {
  if (Platform.OS === 'ios') {
    return (await Calendar.getDefaultCalendarAsync()).id
  }
  const calendars = await Calendar.getCalendarsAsync(Calendar.EntityTypes.EVENT)
  const writable = calendars.filter((cal) => cal.allowsModifications)
  return (writable.find((cal) => cal.isPrimary) ?? writable[0])?.id ?? null
}

interface AddToCalendarProps {
  event: RaceEvent
  sessions: Session[]
  seriesName: string
  locale: Locale
}

export function AddToCalendar({ event, sessions, seriesName, locale }: AddToCalendarProps) {
  const { c } = useTheme()
  const [expanded, setExpanded] = useState(false)
  const [busy, setBusy] = useState(false)
  const schedulable = sessions.filter((s) => !isTba(s))

  async function addAllToDevice() {
    setBusy(true)
    try {
      const permission = await Calendar.requestCalendarPermissionsAsync()
      if (!permission.granted) throw new Error('denied')
      const calendarId = await writableCalendarId()
      if (!calendarId) throw new Error('no calendar')
      const circuit = getCircuit(event.circuitId)
      for (const session of schedulable) {
        const endMs =
          new Date(session.startUtc).getTime() +
          (session.durationMinutes || DEFAULT_SESSION_MINUTES) * 60_000
        await Calendar.createEventAsync(calendarId, {
          title: `${seriesName}: ${session.label} — ${event.name}`,
          startDate: new Date(session.startUtc),
          endDate: new Date(endMs),
          location: `${circuit?.name ?? event.circuitId}, ${circuit?.country ?? ''}`,
          notes: `${seriesName} — race-grid.app`,
        })
      }
      Alert.alert(tm('cal.added', locale))
    } catch {
      Alert.alert(tm('cal.addError', locale))
    } finally {
      setBusy(false)
    }
  }

  if (schedulable.length === 0) return null

  return (
    <View className="mt-3 rounded-xl border border-rg-card-border bg-rg-surface px-4 py-3.5">
      <Pressable
        className="flex-row items-center gap-2"
        onPress={() => setExpanded((e) => !e)}
        accessibilityRole="button"
      >
        <CalendarPlus size={14} color={c('text3')} />
        <Text className="flex-1 text-xs font-semibold uppercase tracking-widest text-rg-text3">
          {t('cal.export', locale)}
        </Text>
        <Text className="text-xs text-rg-text3">{expanded ? '▲' : '▼'}</Text>
      </Pressable>

      {expanded && (
        <View className="mt-3 gap-2">
          <Pressable
            onPress={() => {
              addAllToDevice().catch(() => {})
            }}
            disabled={busy}
            accessibilityRole="button"
            className="rounded-lg border border-rg-border bg-rg-btn-bg px-3 py-2"
            style={{ opacity: busy ? 0.5 : 1 }}
          >
            <Text className="text-[13px] font-semibold text-rg-text">
              {tm('cal.device', locale)} ({schedulable.length})
            </Text>
          </Pressable>

          <Text className="mt-1 text-[11px] font-bold uppercase tracking-wider text-rg-text3">
            {t('cal.google', locale)}
          </Text>
          {schedulable.map((session) => (
            <Pressable
              key={`${session.type}-${session.startUtc}-${session.label}`}
              onPress={() => {
                Linking.openURL(googleUrl(event, session, seriesName)).catch(() => {})
              }}
              accessibilityRole="link"
            >
              <Text className="text-[13px] text-rg-link">{session.label}</Text>
            </Pressable>
          ))}
        </View>
      )}
    </View>
  )
}
