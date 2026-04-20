import type { EventResults } from './types'
// Dakar 2021 results — verified from dakar.com, Wikipedia
// Winner: Stéphane Peterhansel (X-raid MINI JCW Team)
export const dakarResults2021: Record<string, EventResults> = {
  'dakar-2021': { stage: { overall: { driverIds: ['peterhansel'], teamId: 'x-raid-mini' }, classes: [{ className: 'Cars', podium: [{ position: 1, driverIds: ['peterhansel'], teamId: 'x-raid-mini' }] }] } },
}
