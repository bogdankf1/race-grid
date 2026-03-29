import { EventResults } from './types'

// ELMS 2025 results — verified from europeanlemansseries.com, 24h-lemans.com, sportscar365.com
export const elmsResults2025: Record<string, EventResults> = {
  'elms-2025-barcelona': {
    endurance: {
      overall: { drivers: ['Perrodo', 'Rovera', 'Vaxivière'], team: 'AF Corse' },
      classes: [
        {
          className: 'LMP2',
          podium: [
            { position: 1, drivers: ['Perrodo', 'Rovera', 'Vaxivière'], team: 'AF Corse' },
          ],
        },
        {
          className: 'LMGT3',
          podium: [
            { position: 1, drivers: ['Martin', 'Bovy', 'Gatting'], team: 'Iron Dames Porsche' },
          ],
        },
      ],
    },
  },
  'elms-2025-le-castellet': {
    endurance: {
      overall: { drivers: ['Juncadella', 'Jaubert', 'Chadwick'], team: 'IDEC Sport' },
      classes: [
        {
          className: 'LMP2',
          podium: [
            { position: 1, drivers: ['Juncadella', 'Jaubert', 'Chadwick'], team: 'IDEC Sport' },
          ],
        },
      ],
    },
  },
  'elms-2025-imola': {
    endurance: {
      overall: { drivers: ['Gray', 'Milesi', 'Masson'], team: 'VDS Panis Racing' },
      classes: [
        {
          className: 'LMP2',
          podium: [
            { position: 1, drivers: ['Gray', 'Milesi', 'Masson'], team: 'VDS Panis Racing' },
          ],
        },
        {
          className: 'LMGT3',
          podium: [
            { position: 1, drivers: ['Eastwood'], team: 'TF Sport Corvette' },
          ],
        },
      ],
    },
  },
  'elms-2025-spa': {
    endurance: {
      overall: { drivers: ['Gray', 'Milesi', 'Masson'], team: 'VDS Panis Racing' },
      classes: [
        {
          className: 'LMP2',
          podium: [
            { position: 1, drivers: ['Gray', 'Milesi', 'Masson'], team: 'VDS Panis Racing' },
          ],
        },
      ],
    },
  },
  'elms-2025-silverstone': {
    endurance: {
      overall: { drivers: ['Juncadella', 'Jaubert', 'Chadwick'], team: 'IDEC Sport' },
      classes: [
        {
          className: 'LMP2',
          podium: [
            { position: 1, drivers: ['Juncadella', 'Jaubert', 'Chadwick'], team: 'IDEC Sport' },
          ],
        },
      ],
    },
  },
  'elms-2025-portimao': {
    endurance: {
      overall: { drivers: ['Gray', 'Milesi', 'Masson'], team: 'VDS Panis Racing' },
      classes: [
        {
          className: 'LMP2',
          podium: [
            { position: 1, drivers: ['Gray', 'Milesi', 'Masson'], team: 'VDS Panis Racing' },
          ],
        },
      ],
    },
  },
}
