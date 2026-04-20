import type { EventResults } from './types'

// IMSA 2023 GTP results — verified from imsa.com, nbcsports.com
// Champions: Derani/Sims (Whelen Engineering / Action Express, Cadillac)
export const imsaResults2023: Record<string, EventResults> = {
  'imsa-2023-daytona': { endurance: { overall: { driverIds: ['r-taylor', 'albuquerque'], teamId: 'wayne-taylor-racing' }, classes: [{ className: 'GTP', podium: [{ position: 1, driverIds: ['r-taylor', 'albuquerque'], teamId: 'wayne-taylor-racing' }] }] } },
  'imsa-2023-petit-le-mans': { endurance: { overall: { driverIds: ['blomqvist', 'jarvis'], teamId: 'meyer-shank-racing' }, classes: [{ className: 'GTP', podium: [{ position: 1, driverIds: ['blomqvist', 'jarvis'], teamId: 'meyer-shank-racing' }] }] } },
}
