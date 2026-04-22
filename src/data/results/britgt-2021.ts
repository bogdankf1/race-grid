import type { EventResults } from './types'

// British GT Championship 2021 results
export const britgtResults2021: Record<string, EventResults> = {
  'britgt-2021-brands-hatch': { endurance: { overall: { driverIds: ['igoe', 'keen'], teamId: 'wpi-motorsport' }, classes: [{ className: 'GT3', podium: [{ position: 1, driverIds: ['igoe', 'keen'], teamId: 'wpi-motorsport' }] }] } },
  'britgt-2021-silverstone': { endurance: { overall: { driverIds: ['abbott', 'kodric'], teamId: 'two-seas-motorsport' }, classes: [{ className: 'GT3', podium: [{ position: 1, driverIds: ['abbott', 'kodric'], teamId: 'two-seas-motorsport' }] }] } },
  'britgt-2021-donington-1': { endurance: { overall: { driverIds: ['buurman', 'loggie'], teamId: 'ram-racing' }, classes: [{ className: 'GT3', podium: [{ position: 1, driverIds: ['buurman', 'loggie'], teamId: 'ram-racing' }] }] } },
  'britgt-2021-spa': { endurance: { overall: { driverIds: ['machitski', 'lind'], teamId: 'barwell-motorsport' }, classes: [{ className: 'GT3', podium: [{ position: 1, driverIds: ['machitski', 'lind'], teamId: 'barwell-motorsport' }] }] } },
  'britgt-2021-snetterton': { race: { overall: { driverIds: ['buurman', 'loggie'], teamId: 'ram-racing' }, classes: [{ className: 'GT3', podium: [{ position: 1, driverIds: ['buurman', 'loggie'], teamId: 'ram-racing' }] }] } },
  'britgt-2021-oulton-park': { race: { overall: { driverIds: ['igoe', 'keen'], teamId: 'wpi-motorsport' }, classes: [{ className: 'GT3', podium: [{ position: 1, driverIds: ['igoe', 'keen'], teamId: 'wpi-motorsport' }] }] } },
  'britgt-2021-donington-2': { endurance: { overall: { driverIds: ['clutton', 'tillbrook'], teamId: 'enduro-motorsport' }, classes: [{ className: 'GT3', podium: [{ position: 1, driverIds: ['clutton', 'tillbrook'], teamId: 'enduro-motorsport' }] }] } },
}
