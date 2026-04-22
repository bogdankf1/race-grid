import type { EventResults } from './types'

// British GT Championship 2022 results
export const britgtResults2022: Record<string, EventResults> = {
  'britgt-2022-oulton-park': { race: { overall: { driverIds: ['gounon', 'loggie'], teamId: 'ram-racing' }, classes: [{ className: 'GT3', podium: [{ position: 1, driverIds: ['gounon', 'loggie'], teamId: 'ram-racing' }] }] } },
  'britgt-2022-silverstone': { endurance: { overall: { driverIds: ['balon', 'mitchell-s'], teamId: 'barwell-motorsport' }, classes: [{ className: 'GT3', podium: [{ position: 1, driverIds: ['balon', 'mitchell-s'], teamId: 'barwell-motorsport' }] }] } },
  'britgt-2022-donington-1': { endurance: { overall: { driverIds: ['clutton', 'tillbrook'], teamId: 'enduro-motorsport' }, classes: [{ className: 'GT3', podium: [{ position: 1, driverIds: ['clutton', 'tillbrook'], teamId: 'enduro-motorsport' }] }] } },
  'britgt-2022-snetterton': { race: { overall: { driverIds: ['de-pauw', 'ferguson'], teamId: 'ram-racing' }, classes: [{ className: 'GT3', podium: [{ position: 1, driverIds: ['de-pauw', 'ferguson'], teamId: 'ram-racing' }] }] } },
  'britgt-2022-spa': { endurance: { overall: { driverIds: ['halstead-n', 'stanley'], teamId: 'fox-motorsport' }, classes: [{ className: 'GT3', podium: [{ position: 1, driverIds: ['halstead-n', 'stanley'], teamId: 'fox-motorsport' }] }] } },
  'britgt-2022-brands-hatch': { endurance: { overall: { driverIds: ['clutton', 'tillbrook'], teamId: 'enduro-motorsport' }, classes: [{ className: 'GT3', podium: [{ position: 1, driverIds: ['clutton', 'tillbrook'], teamId: 'enduro-motorsport' }] }] } },
  'britgt-2022-donington-2': { endurance: { overall: { driverIds: ['leung', 'sims'], teamId: 'century-motorsport' }, classes: [{ className: 'GT3', podium: [{ position: 1, driverIds: ['leung', 'sims'], teamId: 'century-motorsport' }] }] } },
}
