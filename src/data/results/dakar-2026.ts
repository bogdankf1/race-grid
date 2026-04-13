import type { EventResults } from './types'

// Dakar 2026 results — verified from motorsport.com, rallytracks.nl, cyclenews.com
export const dakarResults2026: Record<string, EventResults> = {
  'dakar-2026': {
    stage: {
      overall: { driverIds: ['al-attiyah', 'lurquin'], teamId: 'dacia-sandriders' },
      classes: [
        {
          className: 'Cars',
          podium: [
            { position: 1, driverIds: ['al-attiyah', 'lurquin'], teamId: 'dacia-sandriders' },
            { position: 2, driverIds: ['n-roma', 'a-haro'], teamId: 'm-sport-ford-dakar' },
            { position: 3, driverIds: ['m-ekstrom', 'e-bergkvist'], teamId: 'm-sport-ford-dakar' },
          ],
        },
        {
          className: 'Bikes',
          podium: [
            { position: 1, driverIds: ['l-benavides'], teamId: 'red-bull-ktm' },
            { position: 2, driverIds: ['r-brabec'], teamId: 'monster-energy-honda' },
            { position: 3, driverIds: ['d-sanders'], teamId: 'red-bull-ktm' },
          ],
        },
        {
          className: 'Trucks',
          podium: [
            { position: 1, driverIds: ['v-zala', 'p-fiuza', 'm-van-grol'], teamId: 'team-de-rooy' },
            { position: 2, driverIds: ['a-loprais'], teamId: 'team-de-rooy' },
            { position: 3, driverIds: ['m-van-den-brink'], teamId: 'eurol-rally-sport' },
          ],
        },
      ],
    },
  },
}
