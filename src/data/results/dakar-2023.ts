import type { EventResults } from './types'
// Dakar 2023 results — verified from dakar.com, Wikipedia
// Winner: Nasser Al-Attiyah (Toyota Gazoo Racing)
export const dakarResults2023: Record<string, EventResults> = {
  'dakar-2023': { stage: { overall: { driverIds: ['al-attiyah'], teamId: 'toyota-gazoo-racing' }, classes: [{ className: 'Cars', podium: [{ position: 1, driverIds: ['al-attiyah'], teamId: 'toyota-gazoo-racing' }] }] } },
}
