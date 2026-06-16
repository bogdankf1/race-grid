import { Platform, useWindowDimensions } from 'react-native'

import { gridColumns, isTabletWidth } from '~/lib/responsive'

/**
 * True when the current window width warrants the iPad layout. iOS-only:
 * Android keeps the phone layout per the feature scope. Reactive to rotation
 * and iPad Split View via useWindowDimensions.
 */
export function useIsTablet(): boolean {
  const { width } = useWindowDimensions()
  return Platform.OS === 'ios' && isTabletWidth(width)
}

/** Tablet grid column count (1 on phones and on non-iOS). Reactive to width. */
export function useGridColumns(): number {
  const { width } = useWindowDimensions()
  return Platform.OS === 'ios' ? gridColumns(width) : 1
}
