// Settings tab: theme, language, timezone, spoiler-free mode, notification
// reminders and calendar refresh. Wording reuses the web i18n keys.

import { useState } from 'react'
import {
  Modal,
  Pressable,
  ScrollView,
  SectionList,
  Switch,
  Text,
  TextInput,
  View,
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import { Check, Heart, X } from 'lucide-react-native'
import { Linking } from 'react-native'

import { t, type Locale } from '@/lib/i18n'
import { getTimezoneLabel, TIMEZONE_GROUPS } from '@/lib/timezone'
import type { ReactNode } from 'react'
import { ensureNotificationPermission, type LeadTime } from '~/lib/notifications'
import { tm } from '~/lib/strings'
import { SeriesChip } from '~/components/SeriesChip'
import { SplitView } from '~/components/SplitView'
import { useData } from '~/state/data'
import { ALL_SESSION_TYPES, useSettings } from '~/state/settings'
import { useTheme } from '~/state/theme'
import { useIsTablet } from '~/lib/use-is-tablet'

const SUPPORT_LINKS = [
  { key: 'support.ukraine.label', method: 'support.ukraine.method', url: 'https://send.monobank.ua/jar/EHzLuicin' },
  { key: 'support.intl.label', method: 'support.intl.method', url: 'https://patreon.com/BohdanBurukhin' },
]

const TZ_GROUP_LABEL: Record<string, string> = {
  Americas: 'tz.americas',
  Europe: 'tz.europe',
  Asia: 'tz.asia',
  Pacific: 'tz.pacific',
  Africa: 'tz.africa',
}

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <View className="mb-5">
      <Text className="mb-2 text-xs font-bold uppercase tracking-widest text-rg-text3">
        {title}
      </Text>
      <View className="rounded-2xl border border-rg-card-border bg-rg-surface px-4">{children}</View>
    </View>
  )
}

function Row({ label, hint, children }: { label: string; hint?: string; children?: ReactNode }) {
  return (
    <View className="flex-row items-center justify-between gap-3 border-b border-rg-border py-3">
      <View className="flex-1">
        <Text className="text-sm text-rg-text">{label}</Text>
        {hint ? <Text className="mt-0.5 text-xs text-rg-text3">{hint}</Text> : null}
      </View>
      {children}
    </View>
  )
}

function Segmented<T extends string | number>({
  options,
  value,
  onChange,
}: {
  options: Array<{ value: T; label: string }>
  value: T
  onChange: (value: T) => void
}) {
  return (
    <View className="flex-row overflow-hidden rounded-lg border border-rg-border">
      {options.map((opt) => {
        const active = opt.value === value
        return (
          <Pressable
            key={String(opt.value)}
            onPress={() => onChange(opt.value)}
            accessibilityRole="button"
            className={active ? 'bg-rg-elevated px-3 py-1.5' : 'px-3 py-1.5'}
          >
            <Text
              className={
                active ? 'text-xs font-bold text-rg-text' : 'text-xs font-semibold text-rg-text3'
              }
            >
              {opt.label}
            </Text>
          </Pressable>
        )
      })}
    </View>
  )
}

function TimezonePicker({
  visible,
  locale,
  onClose,
  onPick,
}: {
  visible: boolean
  locale: Locale
  onClose: () => void
  onPick: (tz: string) => void
}) {
  const [query, setQuery] = useState('')
  const q = query.trim().toLowerCase()
  const sections = Object.entries(TIMEZONE_GROUPS)
    .map(([group, zones]) => ({
      title: t(TZ_GROUP_LABEL[group] ?? group, locale),
      data: zones.filter((z) => !q || z.toLowerCase().includes(q) || getTimezoneLabel(z).toLowerCase().includes(q)),
    }))
    .filter((s) => s.data.length > 0)

  return (
    <Modal visible={visible} animationType="slide" onRequestClose={onClose}>
      <SafeAreaView edges={['top', 'bottom']} className="flex-1 bg-rg-bg">
        <View className="flex-row items-center gap-3 px-4 py-3">
          <Text className="flex-1 text-lg font-bold text-rg-text">
            {t('settings.timezone', locale)}
          </Text>
          <Pressable onPress={onClose} accessibilityRole="button" hitSlop={12}>
            <X size={22} color="#888" />
          </Pressable>
        </View>
        <TextInput
          className="mx-4 mb-2 rounded-xl border border-rg-border bg-rg-surface px-3 py-2 text-sm text-rg-text"
          placeholder={t('tz.search', locale)}
          placeholderTextColor="#888"
          value={query}
          onChangeText={setQuery}
          autoCapitalize="none"
          autoCorrect={false}
        />
        <SectionList
          sections={sections}
          keyExtractor={(item) => item}
          stickySectionHeadersEnabled={false}
          contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 24 }}
          renderSectionHeader={({ section }) => (
            <Text className="mb-1 mt-3 text-xs font-bold uppercase tracking-widest text-rg-text3">
              {section.title}
            </Text>
          )}
          renderItem={({ item }) => (
            <Pressable
              onPress={() => {
                onPick(item)
                onClose()
              }}
              accessibilityRole="button"
              className="border-b border-rg-border py-2.5"
            >
              <Text className="text-sm text-rg-text">{getTimezoneLabel(item)}</Text>
            </Pressable>
          )}
        />
      </SafeAreaView>
    </Modal>
  )
}

export default function SettingsScreen() {
  const settings = useSettings()
  const { seriesList, lastSync, refresh, refreshing } = useData()
  const { c } = useTheme()
  const { locale } = settings
  const [tzPickerOpen, setTzPickerOpen] = useState(false)
  const [permissionDenied, setPermissionDenied] = useState(false)

  const followedSeries = seriesList.filter((s) => settings.followedSeriesIds.includes(s.id))

  async function toggleNotifications(enabled: boolean) {
    if (!enabled) {
      settings.setNotifyPrefs({ ...settings.notifyPrefs, enabled: false })
      return
    }
    const granted = await ensureNotificationPermission()
    setPermissionDenied(!granted)
    if (granted) {
      settings.setNotifyPrefs({ ...settings.notifyPrefs, enabled: true })
    }
  }

  function toggleNotifySeries(id: string) {
    const ids = settings.notifyPrefs.seriesIds.includes(id)
      ? settings.notifyPrefs.seriesIds.filter((s) => s !== id)
      : [...settings.notifyPrefs.seriesIds, id]
    settings.setNotifyPrefs({ ...settings.notifyPrefs, seriesIds: ids })
  }

  const isTablet = useIsTablet()
  const [activeSection, setActiveSection] = useState('display')

  const sections: Array<{ id: string; label: string; render: () => ReactNode }> = [
    { id: 'display', label: t('settings.theme', locale), render: () => (
      <Section title={t('settings.theme', locale)}>
        <Row label={t('settings.theme', locale)}>
          <Segmented
            options={[
              { value: 'dark', label: t('settings.dark', locale) },
              { value: 'light', label: t('settings.light', locale) },
            ]}
            value={settings.theme}
            onChange={settings.setTheme}
          />
        </Row>
        <Row label={t('settings.language', locale)}>
          <Segmented
            options={[
              { value: 'en', label: 'EN' },
              { value: 'uk', label: 'UA' },
            ]}
            value={settings.locale}
            onChange={settings.setLocale}
          />
        </Row>
        <Row label={t('settings.timezone', locale)}>
          <Pressable
            onPress={() => setTzPickerOpen(true)}
            accessibilityRole="button"
            className="rounded-lg border border-rg-border bg-rg-btn-bg px-3 py-1.5"
          >
            <Text className="text-xs font-semibold text-rg-text2">
              {getTimezoneLabel(settings.timezone)}
            </Text>
          </Pressable>
        </Row>
      </Section>
    ) },
    { id: 'spoiler', label: t('spoiler.title', locale), render: () => (
      <Section title={t('spoiler.title', locale)}>
        <Row label={t('spoiler.title', locale)} hint={tm('settings.spoilerHint', locale)}>
          <Switch
            value={settings.spoilerFree}
            onValueChange={settings.setSpoilerFree}
            trackColor={{ true: c('success'), false: c('border') }}
            thumbColor="#fff"
          />
        </Row>
      </Section>
    ) },
    { id: 'sessions', label: t('settings.sessions', locale), render: () => (
      <Section title={t('settings.sessions', locale)}>
        <View className="py-3">
          <View className="mb-2 flex-row items-center justify-between">
            <Text className="text-sm text-rg-text">
              {settings.visibleSessionTypes.length === ALL_SESSION_TYPES.length
                ? t('filter.all', locale)
                : `${settings.visibleSessionTypes.length}/${ALL_SESSION_TYPES.length}`}
            </Text>
            <Pressable
              onPress={() => settings.setVisibleSessionTypes(ALL_SESSION_TYPES)}
              accessibilityRole="button"
              className="rounded-lg border border-rg-border bg-rg-btn-bg px-3 py-1.5"
            >
              <Text className="text-xs font-semibold text-rg-text2">
                {t('filter.selectAll', locale)}
              </Text>
            </Pressable>
          </View>
          <View className="flex-row flex-wrap gap-2">
            {ALL_SESSION_TYPES.map((type) => {
              const active = settings.visibleSessionTypes.includes(type)
              return (
                <Pressable
                  key={type}
                  onPress={() => settings.toggleSessionType(type)}
                  accessibilityRole="checkbox"
                  accessibilityState={{ checked: active }}
                  className={
                    active
                      ? 'flex-row items-center gap-1 rounded-lg bg-rg-elevated border border-rg-border px-2.5 py-1.5'
                      : 'flex-row items-center gap-1 rounded-lg border border-rg-border px-2.5 py-1.5'
                  }
                  style={{ opacity: active ? 1 : 0.55 }}
                >
                  {active && <Check size={11} color={c('success')} />}
                  <Text
                    className={
                      active
                        ? 'text-xs font-semibold text-rg-text'
                        : 'text-xs font-semibold text-rg-text3'
                    }
                  >
                    {t(`session.${type}`, locale)}
                  </Text>
                </Pressable>
              )
            })}
          </View>
        </View>
      </Section>
    ) },
    { id: 'notifications', label: t('notify.title', locale), render: () => (
      <Section title={t('notify.title', locale)}>
        <Row label={t('notify.enable', locale)} hint={tm('settings.notifyHint', locale)}>
          <Switch
            value={settings.notifyPrefs.enabled}
            onValueChange={(v) => {
              toggleNotifications(v).catch(() => {})
            }}
            trackColor={{ true: c('success'), false: c('border') }}
            thumbColor="#fff"
          />
        </Row>
        {permissionDenied && (
          <Text className="pb-2 text-xs text-rg-text3">{tm('notify.deniedOs', locale)}</Text>
        )}
        {settings.notifyPrefs.enabled && (
          <>
            <Row label={`${t('notify.lead', locale)} ${t('notify.before', locale)}`}>
              <Segmented<LeadTime>
                options={[
                  { value: 15, label: t('notify.15', locale) },
                  { value: 30, label: t('notify.30', locale) },
                  { value: 60, label: t('notify.60', locale) },
                ]}
                value={settings.notifyPrefs.leadMinutes}
                onChange={(leadMinutes) =>
                  settings.setNotifyPrefs({ ...settings.notifyPrefs, leadMinutes })
                }
              />
            </Row>
            <View className="py-3">
              <Text className="mb-2 text-sm text-rg-text">{t('notify.series', locale)}</Text>
              <View className="flex-row flex-wrap gap-2">
                {followedSeries.map((s) => (
                  <SeriesChip
                    key={s.id}
                    shortName={s.shortName}
                    color={s.color}
                    textColor={s.textColor}
                    active={settings.notifyPrefs.seriesIds.includes(s.id)}
                    onPress={() => toggleNotifySeries(s.id)}
                  />
                ))}
              </View>
            </View>
          </>
        )}
      </Section>
    ) },
    { id: 'data', label: tm('settings.dataSync', locale), render: () => (
      <Section title={tm('settings.dataSync', locale)}>
        <Row
          label={tm('settings.lastSync', locale)}
          hint={
            lastSync
              ? new Date(lastSync).toLocaleString(locale === 'uk' ? 'uk-UA' : 'en-US')
              : tm('settings.never', locale)
          }
        >
          <Pressable
            onPress={() => {
              refresh().catch(() => {})
            }}
            disabled={refreshing}
            accessibilityRole="button"
            className="rounded-lg border border-rg-border bg-rg-btn-bg px-3 py-1.5"
            style={{ opacity: refreshing ? 0.5 : 1 }}
          >
            <Text className="text-xs font-semibold text-rg-text2">
              {tm('settings.refreshNow', locale)}
            </Text>
          </Pressable>
        </Row>
      </Section>
    ) },
    { id: 'support', label: t('footer.support', locale), render: () => (
      <Section title={t('footer.support', locale)}>
        {SUPPORT_LINKS.map((link) => (
          <Row key={link.key} label={t(link.key, locale)} hint={t(link.method, locale)}>
            <Pressable
              onPress={() => {
                Linking.openURL(link.url).catch(() => {})
              }}
              accessibilityRole="link"
              className="flex-row items-center gap-1.5 rounded-lg border border-rg-border bg-rg-btn-bg px-3 py-1.5"
            >
              <Heart size={12} color="#e25555" />
              <Text className="text-xs font-semibold text-rg-text2">
                {t('footer.support', locale)}
              </Text>
            </Pressable>
          </Row>
        ))}
        <View className="flex-row items-center justify-center gap-1.5 py-3">
          <Text className="text-xs text-rg-text3">{t('footer.madeWith', locale)}</Text>
          <Heart size={11} color="#e25555" />
          <Text className="text-xs text-rg-text3">{t('footer.forFans', locale)}</Text>
        </View>
      </Section>
    ) },
  ]

  return (
    <SafeAreaView edges={['top']} className="flex-1 bg-rg-bg">
      {isTablet ? (
        <>
          <Text className="px-4 pb-3 pt-3 text-xl font-extrabold tracking-widest text-rg-text">
            {t('settings.title', locale)}
          </Text>
          <SplitView
            railWidth={260}
            left={
              <ScrollView contentContainerStyle={{ padding: 12 }}>
                {sections.map((s) => (
                  <Pressable
                    key={s.id}
                    onPress={() => setActiveSection(s.id)}
                    accessibilityRole="button"
                    className={
                      activeSection === s.id
                        ? 'mb-1 rounded-xl bg-rg-elevated px-3 py-2.5'
                        : 'mb-1 rounded-xl px-3 py-2.5'
                    }
                  >
                    <Text
                      className={
                        activeSection === s.id
                          ? 'text-sm font-bold text-rg-text'
                          : 'text-sm font-semibold text-rg-text3'
                      }
                    >
                      {s.label}
                    </Text>
                  </Pressable>
                ))}
              </ScrollView>
            }
            right={
              <ScrollView key={activeSection} contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 32, paddingTop: 8 }}>
                {sections.find((s) => s.id === activeSection)?.render()}
              </ScrollView>
            }
          />
        </>
      ) : (
        <ScrollView contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 32 }}>
          <Text className="pb-3 pt-3 text-xl font-extrabold tracking-widest text-rg-text">
            {t('settings.title', locale)}
          </Text>
          {sections.map((s) => (
            <View key={s.id}>{s.render()}</View>
          ))}
        </ScrollView>
      )}

      <TimezonePicker
        visible={tzPickerOpen}
        locale={locale}
        onClose={() => setTzPickerOpen(false)}
        onPick={settings.setTimezone}
      />
    </SafeAreaView>
  )
}
