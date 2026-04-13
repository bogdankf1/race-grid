import type { EventResults } from './types'

// Dakar 2025 results — verified from motorsport.com, redbull.com, toyotagazooracing.com
export const dakarResults2025: Record<string, EventResults> = {
  'dakar-2025': {
    stage: {
      overall: { driverIds: ['y-al-rajhi', 't-gottschalk'], teamId: 'overdrive-racing' },
      classes: [
        {
          className: 'Cars',
          podium: [
            { position: 1, driverIds: ['y-al-rajhi', 't-gottschalk'], teamId: 'overdrive-racing' },
            { position: 2, driverIds: ['h-lategan', 'b-cummings'], teamId: 'toyota-gazoo-racing' },
            { position: 3, driverIds: ['m-ekstrom', 'e-bergkvist'], teamId: 'm-sport-ford-dakar' },
          ],
        },
        {
          className: 'Bikes',
          podium: [
            { position: 1, driverIds: ['d-sanders'], teamId: 'red-bull-ktm' },
            { position: 2, driverIds: ['t-schareina'], teamId: 'monster-energy-honda' },
            { position: 3, driverIds: ['a-van-beveren'], teamId: 'monster-energy-honda' },
          ],
        },
        {
          className: 'Trucks',
          podium: [
            { position: 1, driverIds: ['m-macik', 'f-tomasek', 'd-svanda'], teamId: 'mm-technology' },
            { position: 2, driverIds: ['m-van-den-brink'], teamId: 'eurol-rally-sport' },
            { position: 3, driverIds: ['a-loprais'], teamId: 'instaforex-loprais' },
          ],
        },
      ],
    },
  },
}
