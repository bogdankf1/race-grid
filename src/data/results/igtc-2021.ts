import type { EventResults } from './types'

// IGTC 2021 results — verified from intercontinentalgtchallenge.com, dailysportscar.com
// Champions: Pier Guidi/Ledogar (Ferrari, Iron Lynx)
export const igtcResults2021: Record<string, EventResults> = {
  'igtc-2021-spa': { endurance: { overall: { driverIds: ['pier-guidi', 'ledogar', 'nielsen'], teamId: 'iron-lynx' }, classes: [{ className: 'Overall', podium: [{ position: 1, driverIds: ['pier-guidi', 'ledogar', 'nielsen'], teamId: 'iron-lynx' }] }] } },
  'igtc-2021-indianapolis': { endurance: { overall: { driverIds: ['pier-guidi', 'ledogar', 'nielsen'], teamId: 'iron-lynx' }, classes: [{ className: 'Overall', podium: [{ position: 1, driverIds: ['pier-guidi', 'ledogar', 'nielsen'], teamId: 'iron-lynx' }] }] } },
  'igtc-2021-kyalami': { endurance: { overall: { driverIds: ['gounon', 'marciello', 'juncadella'], teamId: 'akkodis-asp' }, classes: [{ className: 'Overall', podium: [{ position: 1, driverIds: ['gounon', 'marciello', 'juncadella'], teamId: 'akkodis-asp' }] }] } },
}
