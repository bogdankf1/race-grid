import type { EventResults } from './types'

// IMSA 2024 GTP results — verified from imsa.com, porsche.com, nbcsports.com
// Champions: Cameron/Nasr (Porsche Penske Motorsport)
export const imsaResults2024: Record<string, EventResults> = {
  'imsa-2024-daytona': { endurance: { overall: { driverIds: ['cameron', 'nasr'], teamId: 'porsche-penske' }, classes: [{ className: 'GTP', podium: [{ position: 1, driverIds: ['cameron', 'nasr'], teamId: 'porsche-penske' }] }] } },
  'imsa-2024-petit-le-mans': { endurance: { overall: { driverIds: ['dixon'], teamId: 'chip-ganassi-racing' }, classes: [{ className: 'GTP', podium: [{ position: 1, driverIds: ['dixon'], teamId: 'chip-ganassi-racing' }] }] } },
}
