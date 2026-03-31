import type { EventResults } from './types'

// IGTC 2026 results — verified from bathurst12hour.com.au, motorsport.com
export const igtcResults2026: Record<string, EventResults> = {
  'igtc-2026-bathurst': {
    qualifying: {
      overall: { driverIds: ['marciello'], teamId: 'team-wrt' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['marciello'], teamId: 'team-wrt' },
          { position: 2, driverIds: ['engel'], teamId: 'gruppem-racing' },
          { position: 3, driverIds: ['pepper'], teamId: 'audi-sport' },
        ],
      }],
    },
    endurance: {
      overall: { driverIds: ['engel', 'martin', 'grenier'], teamId: 'gruppem-racing' },
      classes: [
        {
          className: 'Overall',
          podium: [
            { position: 1, driverIds: ['engel', 'martin', 'grenier'], teamId: 'gruppem-racing' },
            { position: 2, driverIds: ['boccolacci'], teamId: 'high-class-racing' },
            { position: 3, driverIds: ['farfus', 'marciello', 'rossi'], teamId: 'team-wrt' },
          ],
        },
      ],
    },
  },
}
