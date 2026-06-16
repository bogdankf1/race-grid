// Small country-code badge shown where the web uses a flag emoji. Flag glyphs
// don't render on the iOS Simulator (and inconsistently on devices), so we show
// the 2-letter ISO code in a subtle pill instead.

import { Text, View } from 'react-native'

export function CountryCode({ code }: { code: string }) {
  if (!code) return null
  return (
    <View className="rounded bg-rg-elevated px-1.5 py-0.5">
      <Text className="text-[10px] font-bold tracking-wide text-rg-text3">{code.toUpperCase()}</Text>
    </View>
  )
}
