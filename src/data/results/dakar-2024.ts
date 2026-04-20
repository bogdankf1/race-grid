import type { EventResults } from './types'
// Dakar 2024 results — verified from dakar.com, Wikipedia
// Winner: Carlos Sainz Sr. (Audi)
export const dakarResults2024: Record<string, EventResults> = {
  'dakar-2024': { stage: { overall: { driverIds: ['c-sainz-sr'], teamId: 'audi' }, classes: [{ className: 'Cars', podium: [{ position: 1, driverIds: ['c-sainz-sr'], teamId: 'audi' }] }] } },
}
