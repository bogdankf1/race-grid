import { EventResults } from './types'

// IGTC 2026 results — verified from bathurst12hour.com.au, motorsport.com
export const igtcResults2026: Record<string, EventResults> = {
  'igtc-2026-bathurst': {
    qualifying: {
      overall: { drivers: ['Marciello'], team: 'Team WRT BMW' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, drivers: ['Marciello'], team: 'Team WRT BMW' },
          { position: 2, drivers: ['Engel'], team: 'GruppeM Racing Mercedes-AMG' },
          { position: 3, drivers: ['Pepper'], team: 'Audi Sport' },
        ],
      }],
    },
    endurance: {
      overall: { drivers: ['Engel', 'Martin', 'Grenier'], team: 'GruppeM Racing Mercedes-AMG' },
      classes: [
        {
          className: 'Overall',
          podium: [
            { position: 1, drivers: ['Engel', 'Martin', 'Grenier'], team: 'GruppeM Racing Mercedes-AMG' },
            { position: 2, drivers: ['Boccolacci'], team: 'High Class Racing Porsche' },
            { position: 3, drivers: ['Farfus', 'Marciello', 'Rossi'], team: 'Team WRT BMW' },
          ],
        },
      ],
    },
  },
}
