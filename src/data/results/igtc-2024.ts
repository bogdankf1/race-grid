import type { EventResults } from './types'

// IGTC 2024 results — verified from intercontinentalgtchallenge.com, motorsport.com
// Champion: Charles Weerts (BMW)
export const igtcResults2024: Record<string, EventResults> = {
  'igtc-2024-bathurst': { endurance: { overall: { driverIds: ['vanthoor', 'guven', 'campbell'], teamId: 'porsche-penske' }, classes: [{ className: 'Overall', podium: [{ position: 1, driverIds: ['vanthoor', 'guven', 'campbell'], teamId: 'porsche-penske' }] }] } },
  'igtc-2024-nurburgring': { endurance: { overall: { driverIds: ['feller', 'mies', 'stippler'], teamId: 'scherer-sport-phx' }, classes: [{ className: 'Overall', podium: [{ position: 1, driverIds: ['feller', 'mies', 'stippler'], teamId: 'scherer-sport-phx' }] }] } },
  'igtc-2024-indianapolis': { endurance: { overall: { driverIds: ['juncadella', 'marciello'], teamId: 'craft-bamboo' }, classes: [{ className: 'Overall', podium: [{ position: 1, driverIds: ['juncadella', 'marciello'], teamId: 'craft-bamboo' }] }] } },
}
