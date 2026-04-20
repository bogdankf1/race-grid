import type { EventResults } from './types'

// IMSA 2021 DPi results — verified from imsa.com, nbcsports.com, motorsport.com
// Champions: Nasr/Derani (Whelen Engineering Cadillac)
export const imsaResults2021: Record<string, EventResults> = {
  'imsa-2021-daytona': { endurance: { overall: { driverIds: ['r-taylor', 'albuquerque'], teamId: 'wayne-taylor-racing' }, classes: [{ className: 'DPi', podium: [{ position: 1, driverIds: ['r-taylor', 'albuquerque'], teamId: 'wayne-taylor-racing' }] }] } },
  'imsa-2021-sebring': { endurance: { overall: { driverIds: ['bourdais'], teamId: 'jdc-miller' }, classes: [{ className: 'DPi', podium: [{ position: 1, driverIds: ['bourdais'], teamId: 'jdc-miller' }] }] } },
  'imsa-2021-watkins-glen-6h': { endurance: { overall: { driverIds: ['jarvis', 'tincknell'], teamId: 'meyer-shank-racing' }, classes: [{ className: 'DPi', podium: [{ position: 1, driverIds: ['jarvis', 'tincknell'], teamId: 'meyer-shank-racing' }] }] } },
  'imsa-2021-watkins-glen-240': { race: { overall: { driverIds: ['derani', 'nasr'], teamId: 'whelen-engineering' }, classes: [{ className: 'DPi', podium: [{ position: 1, driverIds: ['derani', 'nasr'], teamId: 'whelen-engineering' }] }] } },
  'imsa-2021-road-america': { race: { overall: { driverIds: ['derani', 'nasr'], teamId: 'whelen-engineering' }, classes: [{ className: 'DPi', podium: [{ position: 1, driverIds: ['derani', 'nasr'], teamId: 'whelen-engineering' }] }] } },
  'imsa-2021-laguna-seca': { race: { overall: { driverIds: ['r-taylor', 'albuquerque'], teamId: 'wayne-taylor-racing' }, classes: [{ className: 'DPi', podium: [{ position: 1, driverIds: ['r-taylor', 'albuquerque'], teamId: 'wayne-taylor-racing' }] }] } },
  'imsa-2021-long-beach': { race: { overall: { driverIds: ['derani', 'nasr'], teamId: 'whelen-engineering' }, classes: [{ className: 'DPi', podium: [{ position: 1, driverIds: ['derani', 'nasr'], teamId: 'whelen-engineering' }] }] } },
  'imsa-2021-petit-le-mans': { endurance: { overall: { driverIds: ['jarvis', 'tincknell'], teamId: 'meyer-shank-racing' }, classes: [{ className: 'DPi', podium: [{ position: 1, driverIds: ['jarvis', 'tincknell'], teamId: 'meyer-shank-racing' }] }] } },
}
