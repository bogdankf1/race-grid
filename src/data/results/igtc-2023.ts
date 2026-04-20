import type { EventResults } from './types'

// IGTC 2023 results — verified from intercontinentalgtchallenge.com, dailysportscar.com
// Champion: Jules Gounon (Mercedes-AMG)
export const igtcResults2023: Record<string, EventResults> = {
  'igtc-2023-bathurst': { endurance: { overall: { driverIds: ['gounon', 'stolz'], teamId: 'sunenergy1-racing' }, classes: [{ className: 'Overall', podium: [{ position: 1, driverIds: ['gounon', 'stolz'], teamId: 'sunenergy1-racing' }] }] } },
  'igtc-2023-spa': { endurance: { overall: { driverIds: ['marciello', 'gounon', 'juncadella'], teamId: 'akkodis-asp' }, classes: [{ className: 'Overall', podium: [{ position: 1, driverIds: ['marciello', 'gounon', 'juncadella'], teamId: 'akkodis-asp' }] }] } },
  'igtc-2023-indianapolis': { endurance: { overall: { driverIds: ['juncadella', 'marciello'], teamId: 'craft-bamboo' }, classes: [{ className: 'Overall', podium: [{ position: 1, driverIds: ['juncadella', 'marciello'], teamId: 'craft-bamboo' }] }] } },
}
