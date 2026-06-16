import { useWindowDimensions } from 'react-native'

import { gridColumns, isTabletWidth } from '~/lib/responsive'

/**
 * True when the current window width warrants the iPad layout. Reactive to
 * rotation and iPad Split View via useWindowDimensions.
 */
export function useIsTablet(): boolean {
  const { width } = useWindowDimensions()
  return isTabletWidth(width)
}

/** Current tablet grid column count (1 on phones). Reactive to width. */
export function useGridColumns(): number {
  const { width } = useWindowDimensions()
  return gridColumns(width)
}
