// Race detail route: resolves the id from the URL, sets the stack title, and
// renders the shared RaceDetail body (also used inline in the Schedule pane).

import { useLocalSearchParams } from 'expo-router'

import { useEventRef } from '~/lib/event-ref'
import { useScreenTitle } from '~/lib/use-screen-title'
import { RaceDetail } from '~/components/RaceDetail'

export default function RaceDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>()
  // Called here only to derive the nav title; RaceDetail looks the ref up
  // again internally. useEventRef is an O(1) memoized lookup, so this is cheap.
  const { ref } = useEventRef(id)
  useScreenTitle(ref?.series.shortName ?? '')
  return <RaceDetail id={id} />
}
