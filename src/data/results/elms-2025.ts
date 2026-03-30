import { EventResults } from './types'

// ELMS 2025 results — verified from europeanlemansseries.com, 24h-lemans.com, sportscar365.com
export const elmsResults2025: Record<string, EventResults> = {
  'elms-2025-barcelona': {
    // Pole: No. 30 Duqueine Team (LMP2), No. 17 CLX Motorsport (LMGT3)
    qualifying: {
      overall: { drivers: ['de Gerus', 'Nissany', 'Simonazzi'], team: 'Duqueine Team #30' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, drivers: ['de Gerus', 'Nissany', 'Simonazzi'], team: 'Duqueine Team #30' },
        ],
      }],
    },
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
    qualifying: {
      overall: { drivers: ['Dillmann', 'Śmiechowski', 'Yelloly'], team: 'Inter Europol Competition #43' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, drivers: ['Dillmann', 'Śmiechowski', 'Yelloly'], team: 'Inter Europol Competition #43' },
        ],
      }],
    },
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
    qualifying: {
      overall: { drivers: ['Binder'], team: 'Algarve Pro Racing #25' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, drivers: ['Binder'], team: 'Algarve Pro Racing #25' },
        ],
      }],
    },
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
    qualifying: {
      overall: { drivers: ['Nielsen'], team: 'Nielsen Racing #24' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, drivers: ['Nielsen'], team: 'Nielsen Racing #24' },
        ],
      }],
    },
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
    qualifying: {
      overall: { drivers: ['Gray', 'Milesi', 'Masson'], team: 'VDS Panis Racing #48' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, drivers: ['Gray', 'Milesi', 'Masson'], team: 'VDS Panis Racing #48' },
        ],
      }],
    },
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
    qualifying: {
      overall: { drivers: ['Deletraz'], team: 'Iron Lynx–Proton #9' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, drivers: ['Deletraz'], team: 'Iron Lynx–Proton #9' },
        ],
      }],
    },
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
