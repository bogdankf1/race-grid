import { EventResults } from './types'

// IGTC 2026 results — verified from bathurst12hour.com.au, motorsport.com
export const igtcResults2026: Record<string, EventResults> = {
  'igtc-2026-bathurst': {
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
