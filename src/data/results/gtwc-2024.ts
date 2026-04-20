import type { EventResults } from './types'

// GTWC Europe 2024 results — verified from gt-world-challenge-europe.com, Wikipedia
// Overall Champions: Auer/Engel (Winward Racing, Mercedes-AMG)
export const gtwcResults2024: Record<string, EventResults> = {
  'gtwc-2024-spa-24h': { endurance: { overall: { driverIds: ['weerts', 'vanthoor'], teamId: 'team-wrt' }, classes: [{ className: 'Overall', podium: [{ position: 1, driverIds: ['weerts', 'vanthoor'], teamId: 'team-wrt' }] }] } },
}
