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
            { position: 2, driverIds: ['au', 'fleming', 'kirchhofer'], teamId: 'garage-59' },
            { position: 3, driverIds: ['shahin', 'pera', 'lietz'], teamId: 'manthey' },
          ],
        },
      ],
    },
  },
  'wec-2026-spa': {
    qualifying: {
      overall: { driverIds: ['milesi'], teamId: 'alpine' },
      classes: [
        {
          className: 'Hypercar',
          podium: [
            { position: 1, driverIds: ['milesi'], teamId: 'alpine' },
            { position: 2, driverIds: ['jakobsen'], teamId: 'peugeot' },
            { position: 3, driverIds: ['gounon'], teamId: 'alpine' },
          ],
        },
        {
          className: 'LMGT3',
          podium: [
            { position: 1, driverIds: ['umbrarescu'], teamId: 'akkodis-asp' },
            { position: 2, driverIds: ['tuck'], teamId: 'proton-competition' },
            { position: 3, driverIds: [], teamId: 'iron-lynx' },
          ],
        },
      ],
    },
    hyperpole: {
      overall: { driverIds: ['jakobsen'], teamId: 'peugeot' },
      classes: [
        {
          className: 'Hypercar',
          podium: [
            { position: 1, driverIds: ['jakobsen'], teamId: 'peugeot' },
            { position: 2, driverIds: ['stevens'], teamId: 'jota' },
            { position: 3, driverIds: ['milesi'], teamId: 'alpine' },
          ],
        },
        {
          className: 'LMGT3',
          podium: [
            { position: 1, driverIds: ['david-h'], teamId: 'akkodis-asp' },
            { position: 2, driverIds: ['robichon'], teamId: 'heart-of-racing' },
            { position: 3, driverIds: ['tuck'], teamId: 'proton-competition' },
          ],
        },
      ],
    },
    race: {
      overall: { driverIds: ['frijns', 'rast', 's-van-der-linde'], teamId: 'bmw-wrt' },
      classes: [
        {
          className: 'Hypercar',
          podium: [
            { position: 1, driverIds: ['frijns', 'rast', 's-van-der-linde'], teamId: 'bmw-wrt' },
            { position: 2, driverIds: ['magnussen', 'marciello', 'vanthoor'], teamId: 'bmw-wrt' },
            { position: 3, driverIds: ['fuoco', 'molina', 'nielsen'], teamId: 'ferrari-af-corse' },
          ],
        },
        {
          className: 'LMGT3',
          podium: [
            { position: 1, driverIds: ['au', 'fleming', 'kirchhofer'], teamId: 'garage-59' },
            { position: 2, driverIds: ['james-i', 'robichon', 'drudi'], teamId: 'heart-of-racing' },
            { position: 3, driverIds: ['shahin', 'pera', 'lietz'], teamId: 'the-bend-manthey' },
          ],
        },
      ],
    },
  },
  // Le Mans: Wednesday Qualifying session result pending; Hyperpole (Thu) verified below.
  // Race ongoing at time of update (starts 13 Jun 14:00 UTC) — to be added next update.
  'wec-2026-le-mans': {
    hyperpole: {
      overall: { driverIds: ['vanthoor'], teamId: 'bmw-wrt' },
      classes: [
        {
          className: 'Hypercar',
          podium: [
            { position: 1, driverIds: ['vanthoor'], teamId: 'bmw-wrt' },
            { position: 2, driverIds: ['nato'], teamId: 'jota' },
            { position: 3, driverIds: ['habsburg'], teamId: 'alpine' },
          ],
        },
        {
          className: 'LMGT3',
          podium: [
            { position: 1, driverIds: ['drudi'], teamId: 'heart-of-racing' },
            { position: 2, driverIds: ['rovera'], teamId: 'vista-af-corse' },
            { position: 3, driverIds: [], teamId: 'akkodis-asp' },
          ],
        },
      ],
    },
  },
}
