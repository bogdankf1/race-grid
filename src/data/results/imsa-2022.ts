import type { EventResults } from './types'

// IMSA 2022 DPi results — verified from imsa.com, nbcsports.com
// Champions: Blomqvist/Jarvis (Meyer Shank Racing, Acura)
export const imsaResults2022: Record<string, EventResults> = {
  'imsa-2022-daytona': { endurance: { overall: { driverIds: ['r-taylor', 'albuquerque'], teamId: 'wayne-taylor-racing' }, classes: [{ className: 'DPi', podium: [{ position: 1, driverIds: ['r-taylor', 'albuquerque'], teamId: 'wayne-taylor-racing' }] }] } },
  'imsa-2022-petit-le-mans': { endurance: { overall: { driverIds: ['blomqvist', 'jarvis'], teamId: 'meyer-shank-racing' }, classes: [{ className: 'DPi', podium: [{ position: 1, driverIds: ['blomqvist', 'jarvis'], teamId: 'meyer-shank-racing' }] }] } },
}
