import { Tabs } from 'expo-router'
import { Text } from 'react-native'

import { tm } from '~/lib/strings'
import { useSettings } from '~/state/settings'
import { useTheme } from '~/state/theme'

function TabIcon({ glyph, focused }: { glyph: string; focused: boolean }) {
  return <Text style={{ fontSize: 20, opacity: focused ? 1 : 0.45 }}>{glyph}</Text>
}

export default function TabsLayout() {
  const { c } = useTheme()
  const { locale } = useSettings()

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: c('surface'), borderTopColor: c('border') },
        tabBarActiveTintColor: c('text'),
        tabBarInactiveTintColor: c('text3'),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: tm('tab.schedule', locale),
          tabBarIcon: ({ focused }) => <TabIcon glyph="📅" focused={focused} />,
        }}
      />
      <Tabs.Screen
        name="series"
        options={{
          title: tm('tab.series', locale),
          tabBarIcon: ({ focused }) => <TabIcon glyph="🏁" focused={focused} />,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: tm('tab.settings', locale),
          tabBarIcon: ({ focused }) => <TabIcon glyph="⚙️" focused={focused} />,
        }}
      />
    </Tabs>
  )
}
