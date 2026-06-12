// Native take on the web CalendarExport menu: insert the weekend's sessions
// into the device calendar (expo-calendar), open per-session Google Calendar
// templates, share .ics files (same generators the web uses), or subscribe to
// the hosted webcal feed. Event titles match the web .ics convention:
//   `${seriesName}: ${session.label} — ${event.name}`

import * as Calendar from 'expo-calendar'
import { File, Paths } from 'expo-file-system'
import * as Sharing from 'expo-sharing'
import { CalendarPlus } from 'lucide-react-native'
import { useState } from 'react'
import { Alert, Linking, Platform, Pressable, Text, View } from 'react-native'

import { getCircuit } from '@/data/circuits'
import { t, type Locale } from '@/lib/i18n'
import { generateIcs, generateSeriesIcs } from '@/lib/ical'
import type { RaceEvent, Session } from '@/lib/types'
import { DEFAULT_SESSION_MINUTES, isTba } from '~/lib/data'
import { tm } from '~/lib/strings'
import { useTheme } from '~/state/theme'

async function shareIcs(filename: string, ics: string): Promise<void> {
  const file = new File(Paths.cache, filename)
  if (file.exists) file.delete()
  file.write(ics)
  await Sharing.shareAsync(file.uri, { mimeType: 'text/calendar', UTI: 'com.apple.ical.ics' })
}

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
  seriesId: string
  seriesName: string
  seriesEvents: RaceEvent[]
  locale: Locale
}

export function AddToCalendar({
  event,
  sessions,
  seriesId,
  seriesName,
  seriesEvents,
  locale,
}: AddToCalendarProps) {
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

          <Text className="mt-2 text-[11px] font-bold uppercase tracking-wider text-rg-text3">
            {t('cal.export', locale)}
          </Text>
          <Pressable
            onPress={() => {
              shareIcs(`${event.id}.ics`, generateIcs(event, schedulable, seriesName)).catch(() =>
                Alert.alert(tm('cal.addError', locale)),
              )
            }}
            accessibilityRole="button"
          >
            <Text className="text-[13px] text-rg-link">{tm('cal.shareEvent', locale)}</Text>
          </Pressable>
          <Pressable
            onPress={() => {
              shareIcs(`${seriesId}-season.ics`, generateSeriesIcs(seriesEvents, seriesName)).catch(
                () => Alert.alert(tm('cal.addError', locale)),
              )
            }}
            accessibilityRole="button"
          >
            <Text className="text-[13px] text-rg-link">{tm('cal.shareSeason', locale)}</Text>
          </Pressable>

          <Text className="mt-2 text-[11px] font-bold uppercase tracking-wider text-rg-text3">
            {t('cal.subscribe', locale)}
          </Text>
          <Pressable
            onPress={() => {
              // Same hosted feed the web app subscribes to.
              Linking.openURL(`webcal://race-grid.com/calendar/${seriesId}.ics`).catch(() => {})
            }}
            accessibilityRole="link"
          >
            <Text className="text-[13px] text-rg-link">{t('cal.subscribeSeries', locale)}</Text>
            <Text className="text-[11px] text-rg-text3">{t('cal.subscribeHint', locale)}</Text>
          </Pressable>
        </View>
      )}
    </View>
  )
}
