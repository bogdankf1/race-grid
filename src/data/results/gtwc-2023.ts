import type { EventResults } from './types'

// GTWC Europe 2023 results — verified from gt-world-challenge-europe.com, Wikipedia
// Overall Champions: Boguslavskiy/Marciello (Akkodis ASP)
export const gtwcResults2023: Record<string, EventResults> = {
  'gtwc-2023-spa-24h': { endurance: { overall: { driverIds: ['marciello', 'gounon'], teamId: 'akkodis-asp' }, classes: [{ className: 'Overall', podium: [{ position: 1, driverIds: ['marciello', 'gounon'], teamId: 'akkodis-asp' }] }] } },
}
