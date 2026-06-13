// Port of the web SpoilerGuard: in spoiler-free mode results stay hidden
// behind an explicit "Tap to reveal results" button (per event, not global).

import { EyeOff } from 'lucide-react-native'
import { useState } from 'react'
import { Pressable, Text } from 'react-native'

import { t, type Locale } from '@/lib/i18n'
import type { SessionResultPair } from '~/lib/data'
import { ResultBlock } from '~/components/ResultBlock'
import { useTheme } from '~/state/theme'

export function SpoilerGuard({
  results,
  locale,
}: {
  results: SessionResultPair[]
  locale: Locale
}) {
  const { c } = useTheme()
  const [revealed, setRevealed] = useState(false)
  if (revealed) return <ResultBlock results={results} locale={locale} />
  return (
    <Pressable
      onPress={() => setRevealed(true)}
      accessibilityRole="button"
      className="mt-3 flex-row items-center justify-center gap-2 rounded-xl border border-rg-card-border bg-rg-surface p-4"
    >
      <EyeOff size={15} color={c('text3')} />
      <Text className="text-[13px] text-rg-text3">{t('spoiler.reveal', locale)}</Text>
    </Pressable>
  )
}
