import type { EventResults } from './types'

// WEC 2026 results — verified from fiawec.com, racetrackmasters.com, motorsport.com
export const wecResults2026: Record<string, EventResults> = {
  'wec-2026-imola': {
    qualifying: {
      overall: { driverIds: ['giovinazzi'], teamId: 'ferrari-af-corse' },
      classes: [
        {
          className: 'Hypercar',
          podium: [
            { position: 1, driverIds: ['giovinazzi'], teamId: 'ferrari-af-corse' },
            { position: 2, driverIds: ['hirakawa'], teamId: 'toyota-gazoo-racing' },
            { position: 3, driverIds: ['fuoco'], teamId: 'ferrari-af-corse' },
          ],
        },
        {
          className: 'LMGT3',
          podium: [
            { position: 1, driverIds: ['fleming'], teamId: 'garage-59' },
            { position: 2, driverIds: ['david'], teamId: 'akkodis-asp' },
            { position: 3, driverIds: ['schmid'], teamId: 'akkodis-asp' },
          ],
        },
      ],
    },
    hyperpole: {
      overall: { driverIds: ['giovinazzi'], teamId: 'ferrari-af-corse' },
      classes: [
        {
          className: 'Hypercar',
          podium: [
            { position: 1, driverIds: ['giovinazzi'], teamId: 'ferrari-af-corse' },
            { position: 2, driverIds: ['hirakawa'], teamId: 'toyota-gazoo-racing' },
            { position: 3, driverIds: ['fuoco'], teamId: 'ferrari-af-corse' },
          ],
        },
        {
          className: 'LMGT3',
          podium: [
            { position: 1, driverIds: ['fleming'], teamId: 'garage-59' },
            { position: 2, driverIds: ['david'], teamId: 'akkodis-asp' },
            { position: 3, driverIds: ['schmid'], teamId: 'akkodis-asp' },
          ],
        },
      ],
    },
    race: {
      overall: { driverIds: ['buemi', 'hartley', 'hirakawa'], teamId: 'toyota-gazoo-racing' },
      classes: [
        {
          className: 'Hypercar',
          podium: [
            { position: 1, driverIds: ['buemi', 'hartley', 'hirakawa'], teamId: 'toyota-gazoo-racing' },
            { position: 2, driverIds: ['giovinazzi', 'calado', 'pier-guidi'], teamId: 'ferrari-af-corse' },
            { position: 3, driverIds: ['conway', 'kobayashi', 'de-vries'], teamId: 'toyota-gazoo-racing' },
          ],
        },
        {
          className: 'LMGT3',
          podium: [
            { position: 1, driverIds: ['mcintosh', 'thompson', 'harper'], teamId: 'team-wrt' },
            { position: 2, driverIds: ['au', 'fleming', 'kirchhoefer'], teamId: 'garage-59' },
            { position: 3, driverIds: ['shahin', 'pera', 'lietz'], teamId: 'manthey' },
          ],
        },
      ],
    },
  },
}
