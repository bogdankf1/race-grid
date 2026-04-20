import type { EventResults } from './types'
// Dakar 2022 results — verified from dakar.com, Wikipedia
// Winner: Nasser Al-Attiyah (Toyota Gazoo Racing)
export const dakarResults2022: Record<string, EventResults> = {
  'dakar-2022': { stage: { overall: { driverIds: ['al-attiyah'], teamId: 'toyota-gazoo-racing' }, classes: [{ className: 'Cars', podium: [{ position: 1, driverIds: ['al-attiyah'], teamId: 'toyota-gazoo-racing' }] }] } },
}
