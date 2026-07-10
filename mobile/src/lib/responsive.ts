// Pure responsive helpers — no React Native imports, so they run under the
// node smoke-test. The hook that consumes these lives in use-is-tablet.ts.

/** Window width (dp) at or above which we use the tablet (iPad) layout. */
export const TABLET_BREAKPOINT = 768

/** Window width (dp) at or above which tablet grids use 3 columns instead of 2. */
export const TABLET_WIDE_BREAKPOINT = 1024

/** True when the current window width warrants the tablet layout. */
export function isTabletWidth(width: number): boolean {
  return width >= TABLET_BREAKPOINT
}

/**
 * True when the physical device is a tablet, independent of orientation.
 * Uses the smaller screen dimension so a large phone in landscape (e.g. a
 * 932×430 Pro Max) is never classified as a tablet. Used for orientation
 * locking; layout decisions use isTabletWidth (current width) instead.
 */
export function isTabletDevice(width: number, height: number): boolean {
  return Math.min(width, height) >= TABLET_BREAKPOINT
}

/** Column count for tablet grids: 1 on phones, 2 in iPad portrait, 3 when wide. */
export function gridColumns(width: number): number {
  if (width >= TABLET_WIDE_BREAKPOINT) return 3
  if (width >= TABLET_BREAKPOINT) return 2
  return 1
}
