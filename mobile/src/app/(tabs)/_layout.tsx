import { Tabs } from 'expo-router'
import { CalendarDays, Flag, MapPin, Settings, Trophy } from 'lucide-react-native'

import { t } from '@/lib/i18n'
import { tm } from '~/lib/strings'
import { useSettings } from '~/state/settings'
import { useTheme } from '~/state/theme'

export default function TabsLayout() {
  const { c } = useTheme()
  const { locale } = useSettings()

  return (
    <Tabs
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
    </Tabs>
  )
}
