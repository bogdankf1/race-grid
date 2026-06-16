import type { ReactNode } from 'react'
import { View } from 'react-native'

/**
 * Two-pane tablet layout: a fixed-width left rail with a divider, and a right
 * pane that fills the remaining space. Used by Schedule and Settings on iPad.
 * Render this only when useIsTablet() is true; phones use their single-column
 * layout unchanged.
 */
export function SplitView({
  left,
  right,
  railWidth = 320,
}: {
  left: ReactNode
  right: ReactNode
  railWidth?: number
}) {
  return (
    <View className="flex-1 flex-row">
      <View style={{ width: railWidth }} className="border-r border-rg-border">
        {left}
      </View>
      <View className="flex-1">{right}</View>
    </View>
  )
}
