import { RaceEvent, Session } from './types'

export interface SessionContext<S = unknown> {
  series: S
  event: RaceEvent
  session: Session
  eventIndex: number
  sessionIndex: number
}

/**
 * Walks the series → event → session tree in declaration order, yielding each
 * session with its full context. `series` is passed through unchanged so callers
 * keep whatever series shape they hold (SeriesConfig, or the minimal
 * `{ name, events }` used for iCal generation).
 */
export function* iterateSessions<S extends { events: RaceEvent[] }>(
  seriesList: S[]
): Generator<SessionContext<S>> {
  for (const series of seriesList) {
    const { events } = series
    for (let eventIndex = 0; eventIndex < events.length; eventIndex++) {
      const event = events[eventIndex]
      const { sessions } = event
      for (let sessionIndex = 0; sessionIndex < sessions.length; sessionIndex++) {
        yield { series, event, session: sessions[sessionIndex], eventIndex, sessionIndex }
      }
    }
  }
}
