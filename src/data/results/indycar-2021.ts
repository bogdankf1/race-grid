import type { EventResults } from './types'

// IndyCar 2021 results — verified from indycar.com, Wikipedia
// Champion: Álex Palou (Chip Ganassi Racing) — 549 pts, 3 wins
export const indycarResults2021: Record<string, EventResults> = {
  'indycar-2021-barber': { race: { overall: { driverIds: ['palou'], teamId: 'chip-ganassi-racing' }, classes: [{ className: 'Top 3', podium: [{ position: 1, driverIds: ['palou'], teamId: 'chip-ganassi-racing' }] }] } },
  'indycar-2021-st-petersburg': { race: { overall: { driverIds: ['herta'], teamId: 'andretti-autosport' }, classes: [{ className: 'Top 3', podium: [{ position: 1, driverIds: ['herta'], teamId: 'andretti-autosport' }] }] } },
  'indycar-2021-texas-1': { race: { overall: { driverIds: ['dixon'], teamId: 'chip-ganassi-racing' }, classes: [{ className: 'Top 3', podium: [{ position: 1, driverIds: ['dixon'], teamId: 'chip-ganassi-racing' }] }] } },
  'indycar-2021-texas-2': { race: { overall: { driverIds: ['oward'], teamId: 'arrow-mclaren' }, classes: [{ className: 'Top 3', podium: [{ position: 1, driverIds: ['oward'], teamId: 'arrow-mclaren' }] }] } },
  'indycar-2021-indianapolis-gp': { race: { overall: { driverIds: ['veekay'], teamId: 'ed-carpenter-racing' }, classes: [{ className: 'Top 3', podium: [{ position: 1, driverIds: ['veekay'], teamId: 'ed-carpenter-racing' }] }] } },
  'indycar-2021-indy500': { race: { overall: { driverIds: ['castroneves'], teamId: 'meyer-shank-racing' }, classes: [{ className: 'Top 3', podium: [{ position: 1, driverIds: ['castroneves'], teamId: 'meyer-shank-racing' }] }] } },
  'indycar-2021-detroit-1': { race: { overall: { driverIds: ['ericsson'], teamId: 'chip-ganassi-racing' }, classes: [{ className: 'Top 3', podium: [{ position: 1, driverIds: ['ericsson'], teamId: 'chip-ganassi-racing' }] }] } },
  'indycar-2021-detroit-2': { race: { overall: { driverIds: ['oward'], teamId: 'arrow-mclaren' }, classes: [{ className: 'Top 3', podium: [{ position: 1, driverIds: ['oward'], teamId: 'arrow-mclaren' }] }] } },
  'indycar-2021-road-america': { race: { overall: { driverIds: ['palou'], teamId: 'chip-ganassi-racing' }, classes: [{ className: 'Top 3', podium: [{ position: 1, driverIds: ['palou'], teamId: 'chip-ganassi-racing' }] }] } },
  'indycar-2021-mid-ohio': { race: { overall: { driverIds: ['newgarden'], teamId: 'team-penske' }, classes: [{ className: 'Top 3', podium: [{ position: 1, driverIds: ['newgarden'], teamId: 'team-penske' }] }] } },
  'indycar-2021-nashville': { race: { overall: { driverIds: ['ericsson'], teamId: 'chip-ganassi-racing' }, classes: [{ className: 'Top 3', podium: [{ position: 1, driverIds: ['ericsson'], teamId: 'chip-ganassi-racing' }] }] } },
  'indycar-2021-indianapolis-gp2': { race: { overall: { driverIds: ['power'], teamId: 'team-penske' }, classes: [{ className: 'Top 3', podium: [{ position: 1, driverIds: ['power'], teamId: 'team-penske' }] }] } },
  'indycar-2021-wwtr': { race: { overall: { driverIds: ['newgarden'], teamId: 'team-penske' }, classes: [{ className: 'Top 3', podium: [{ position: 1, driverIds: ['newgarden'], teamId: 'team-penske' }] }] } },
  'indycar-2021-portland': { race: { overall: { driverIds: ['palou'], teamId: 'chip-ganassi-racing' }, classes: [{ className: 'Top 3', podium: [{ position: 1, driverIds: ['palou'], teamId: 'chip-ganassi-racing' }] }] } },
  'indycar-2021-laguna-seca': { race: { overall: { driverIds: ['herta'], teamId: 'andretti-autosport' }, classes: [{ className: 'Top 3', podium: [{ position: 1, driverIds: ['herta'], teamId: 'andretti-autosport' }] }] } },
  'indycar-2021-long-beach': { race: { overall: { driverIds: ['herta'], teamId: 'andretti-autosport' }, classes: [{ className: 'Top 3', podium: [{ position: 1, driverIds: ['herta'], teamId: 'andretti-autosport' }] }] } },
}
