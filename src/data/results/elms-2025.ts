import type { EventResults } from './types'

// ELMS 2025 results — verified from europeanlemansseries.com, 24h-lemans.com, sportscar365.com
export const elmsResults2025: Record<string, EventResults> = {
  'elms-2025-barcelona': {
    // Pole: No. 30 Duqueine Team (LMP2), No. 17 CLX Motorsport (LMGT3)
    qualifying: {
      overall: { driverIds: ['de-gerus', 'nissany', 'simonazzi'], teamId: 'duqueine' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['de-gerus', 'nissany', 'simonazzi'], teamId: 'duqueine' },
        ],
      }],
    },
    endurance: {
      overall: { driverIds: ['perrodo', 'rovera', 'vaxiviere'], teamId: 'ferrari-af-corse' },
      classes: [
        {
          className: 'LMP2',
          podium: [
            { position: 1, driverIds: ['perrodo', 'rovera', 'vaxiviere'], teamId: 'ferrari-af-corse' },
          ],
        },
        {
          className: 'LMGT3',
          podium: [
            { position: 1, driverIds: ['martin', 'bovy', 'gatting'], teamId: 'iron-dames' },
          ],
        },
      ],
    },
  },
  'elms-2025-le-castellet': {
    qualifying: {
      overall: { driverIds: ['dillmann', 'smiechowski', 'yelloly'], teamId: 'inter-europol' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['dillmann', 'smiechowski', 'yelloly'], teamId: 'inter-europol' },
        ],
      }],
    },
    endurance: {
      overall: { driverIds: ['juncadella', 'jaubert', 'chadwick'], teamId: 'idec-sport' },
      classes: [
        {
          className: 'LMP2',
          podium: [
            { position: 1, driverIds: ['juncadella', 'jaubert', 'chadwick'], teamId: 'idec-sport' },
          ],
        },
      ],
    },
  },
  'elms-2025-imola': {
    qualifying: {
      overall: { driverIds: ['binder'], teamId: 'algarve-pro' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['binder'], teamId: 'algarve-pro' },
        ],
      }],
    },
    endurance: {
      overall: { driverIds: ['gray', 'milesi', 'masson'], teamId: 'vds-panis' },
      classes: [
        {
          className: 'LMP2',
          podium: [
            { position: 1, driverIds: ['gray', 'milesi', 'masson'], teamId: 'vds-panis' },
          ],
        },
        {
          className: 'LMGT3',
          podium: [
            { position: 1, driverIds: ['eastwood'], teamId: 'tf-sport' },
          ],
        },
      ],
    },
  },
  'elms-2025-spa': {
    qualifying: {
      overall: { driverIds: ['nielsen'], teamId: 'nielsen-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['nielsen'], teamId: 'nielsen-racing' },
        ],
      }],
    },
    endurance: {
      overall: { driverIds: ['gray', 'milesi', 'masson'], teamId: 'vds-panis' },
      classes: [
        {
          className: 'LMP2',
          podium: [
            { position: 1, driverIds: ['gray', 'milesi', 'masson'], teamId: 'vds-panis' },
          ],
        },
      ],
    },
  },
  'elms-2025-silverstone': {
    qualifying: {
      overall: { driverIds: ['gray', 'milesi', 'masson'], teamId: 'vds-panis' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['gray', 'milesi', 'masson'], teamId: 'vds-panis' },
        ],
      }],
    },
    endurance: {
      overall: { driverIds: ['juncadella', 'jaubert', 'chadwick'], teamId: 'idec-sport' },
      classes: [
        {
          className: 'LMP2',
          podium: [
            { position: 1, driverIds: ['juncadella', 'jaubert', 'chadwick'], teamId: 'idec-sport' },
          ],
        },
      ],
    },
  },
  'elms-2025-portimao': {
    qualifying: {
      overall: { driverIds: ['deletraz'], teamId: 'iron-lynx' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['deletraz'], teamId: 'iron-lynx' },
        ],
      }],
    },
    endurance: {
      overall: { driverIds: ['gray', 'milesi', 'masson'], teamId: 'vds-panis' },
      classes: [
        {
          className: 'LMP2',
          podium: [
            { position: 1, driverIds: ['gray', 'milesi', 'masson'], teamId: 'vds-panis' },
          ],
        },
      ],
    },
  },
}
