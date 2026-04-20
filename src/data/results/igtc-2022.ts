import type { EventResults } from './types'

// IGTC 2022 results — verified from intercontinentalgtchallenge.com, sportscar365.com
// Champion: Daniel Juncadella (Mercedes-AMG)
export const igtcResults2022: Record<string, EventResults> = {
  'igtc-2022-bathurst': { endurance: { overall: { driverIds: ['gounon', 'stolz'], teamId: 'sunenergy1-racing' }, classes: [{ className: 'Overall', podium: [{ position: 1, driverIds: ['gounon', 'stolz'], teamId: 'sunenergy1-racing' }] }] } },
  'igtc-2022-spa': { endurance: { overall: { driverIds: ['marciello', 'gounon', 'juncadella'], teamId: 'akkodis-asp' }, classes: [{ className: 'Overall', podium: [{ position: 1, driverIds: ['marciello', 'gounon', 'juncadella'], teamId: 'akkodis-asp' }] }] } },
  'igtc-2022-indianapolis': { endurance: { overall: { driverIds: ['juncadella', 'marciello'], teamId: 'craft-bamboo' }, classes: [{ className: 'Overall', podium: [{ position: 1, driverIds: ['juncadella', 'marciello'], teamId: 'craft-bamboo' }] }] } },
}
