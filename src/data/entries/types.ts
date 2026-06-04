export interface EntryItem {
  driverId: string
  teamId: string
  carNumber?: number
  /** Class identifier for multi-class series (e.g., "Hypercar", "LMGT3", "GTP", "GTD Pro", "GTD"). */
  class?: string
}
