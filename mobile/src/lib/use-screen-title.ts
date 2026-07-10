// Sets the navigation header title from inside a screen. Detail screens live
// in the Tabs navigator (so the bottom bar stays visible), where `<Stack.Screen
// options>` can't reach the right navigator — `navigation.setOptions` does.

import { useNavigation } from 'expo-router'
import { useEffect } from 'react'

export function useScreenTitle(title: string): void {
  const navigation = useNavigation()
  useEffect(() => {
    navigation.setOptions({ title })
  }, [navigation, title])
}
