// Header back control for detail screens. Pops the stack when there's history;
// when the screen was the entry point (deep link or a notification cold-start),
// there's nothing to pop, so it falls back to the Schedule tab. This guarantees
// every detail screen always has a way out.

import { useRouter } from 'expo-router'
import { ChevronLeft, House } from 'lucide-react-native'
import { Pressable } from 'react-native'

import { useTheme } from '~/state/theme'

export function HeaderBack() {
  const router = useRouter()
  const { c } = useTheme()
  const canGoBack = router.canGoBack()

  return (
    <Pressable
      onPress={() => (canGoBack ? router.back() : router.replace('/'))}
      accessibilityRole="button"
      accessibilityLabel={canGoBack ? 'Back' : 'Home'}
      hitSlop={12}
      style={{ paddingRight: 12 }}
    >
      {canGoBack ? (
        <ChevronLeft size={26} color={c('text')} />
      ) : (
        <House size={22} color={c('text')} />
      )}
    </Pressable>
  )
}
