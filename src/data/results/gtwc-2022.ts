import type { EventResults } from './types'

// GTWC Europe 2022 results — verified from gt-world-challenge-europe.com, Wikipedia
// Overall Champion: Raffaele Marciello (Akkodis ASP)
export const gtwcResults2022: Record<string, EventResults> = {
  'gtwc-2022-spa-24h': { endurance: { overall: { driverIds: ['marciello', 'gounon', 'juncadella'], teamId: 'akkodis-asp' }, classes: [{ className: 'Overall', podium: [{ position: 1, driverIds: ['marciello', 'gounon', 'juncadella'], teamId: 'akkodis-asp' }] }] } },
}
