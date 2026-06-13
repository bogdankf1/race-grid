import { Tabs } from 'expo-router'
import { CalendarDays, Flag, MapPin, Settings, Trophy } from 'lucide-react-native'

import { t } from '@/lib/i18n'
import { tm } from '~/lib/strings'
import { HeaderBack } from '~/components/HeaderBack'
import { useSettings } from '~/state/settings'
import { useTheme } from '~/state/theme'

export default function TabsLayout() {
  const { c } = useTheme()
  const { locale } = useSettings()

  // Detail screens live inside the tab navigator (hidden from the bar via
  // href: null) so the bottom navigation stays visible on them. They show a
  // header — title set per-screen with useScreenTitle, back via HeaderBack.
  const detailOptions = {
    href: null,
    headerShown: true,
    headerStyle: { backgroundColor: c('surface') },
    headerTintColor: c('text'),
    headerTitleStyle: { color: c('text') },
    headerLeft: () => <HeaderBack />,
  }

  return (
    <Tabs
      // 'history' so back from a detail screen returns to where it was opened
      // (e.g. driver → team → back → driver), not the first tab.
      backBehavior="history"
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: c('surface'), borderTopColor: c('border') },
        tabBarActiveTintColor: c('link'),
        tabBarInactiveTintColor: c('text3'),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: tm('tab.schedule', locale),
          tabBarIcon: ({ color }) => <CalendarDays size={20} color={color} />,
        }}
      />
      <Tabs.Screen
        name="series"
        options={{
          title: t('nav.series', locale),
          tabBarIcon: ({ color }) => <Flag size={20} color={color} />,
        }}
      />
      <Tabs.Screen
        name="standings"
        options={{
          title: t('nav.standings', locale),
          tabBarIcon: ({ color }) => <Trophy size={20} color={color} />,
        }}
      />
      <Tabs.Screen
        name="circuits"
        options={{
          title: t('nav.circuits', locale),
          tabBarIcon: ({ color }) => <MapPin size={20} color={color} />,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: tm('tab.settings', locale),
          tabBarIcon: ({ color }) => <Settings size={20} color={color} />,
        }}
      />

      {/* Hidden detail routes — reachable by push, bottom bar stays visible. */}
      <Tabs.Screen name="race/[id]" options={detailOptions} />
      <Tabs.Screen name="series/[id]" options={detailOptions} />
      <Tabs.Screen name="circuit/[id]" options={detailOptions} />
      <Tabs.Screen name="driver/[id]" options={detailOptions} />
      <Tabs.Screen name="team/[id]" options={detailOptions} />
    </Tabs>
  )
}
