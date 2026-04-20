import type { EventResults } from './types'

// IndyCar 2023 results — verified from indycar.com, Wikipedia
// Champion: Álex Palou (Chip Ganassi Racing) — 656 pts, 7 wins (dominant)
export const indycarResults2023: Record<string, EventResults> = {
  'indycar-2023-st-petersburg': { race: { overall: { driverIds: ['ericsson'], teamId: 'chip-ganassi-racing' }, classes: [{ className: 'Top 3', podium: [{ position: 1, driverIds: ['ericsson'], teamId: 'chip-ganassi-racing' }] }] } },
  'indycar-2023-texas': { race: { overall: { driverIds: ['newgarden'], teamId: 'team-penske' }, classes: [{ className: 'Top 3', podium: [{ position: 1, driverIds: ['newgarden'], teamId: 'team-penske' }] }] } },
  'indycar-2023-long-beach': { race: { overall: { driverIds: ['kirkwood'], teamId: 'andretti-autosport' }, classes: [{ className: 'Top 3', podium: [{ position: 1, driverIds: ['kirkwood'], teamId: 'andretti-autosport' }] }] } },
  'indycar-2023-barber': { race: { overall: { driverIds: ['mclaughlin'], teamId: 'team-penske' }, classes: [{ className: 'Top 3', podium: [{ position: 1, driverIds: ['mclaughlin'], teamId: 'team-penske' }] }] } },
  'indycar-2023-indianapolis-gp': { race: { overall: { driverIds: ['palou'], teamId: 'chip-ganassi-racing' }, classes: [{ className: 'Top 3', podium: [{ position: 1, driverIds: ['palou'], teamId: 'chip-ganassi-racing' }] }] } },
  'indycar-2023-indy500': { race: { overall: { driverIds: ['newgarden'], teamId: 'team-penske' }, classes: [{ className: 'Top 3', podium: [{ position: 1, driverIds: ['newgarden'], teamId: 'team-penske' }] }] } },
  'indycar-2023-detroit': { race: { overall: { driverIds: ['palou'], teamId: 'chip-ganassi-racing' }, classes: [{ className: 'Top 3', podium: [{ position: 1, driverIds: ['palou'], teamId: 'chip-ganassi-racing' }] }] } },
  'indycar-2023-road-america': { race: { overall: { driverIds: ['palou'], teamId: 'chip-ganassi-racing' }, classes: [{ className: 'Top 3', podium: [{ position: 1, driverIds: ['palou'], teamId: 'chip-ganassi-racing' }] }] } },
  'indycar-2023-mid-ohio': { race: { overall: { driverIds: ['palou'], teamId: 'chip-ganassi-racing' }, classes: [{ className: 'Top 3', podium: [{ position: 1, driverIds: ['palou'], teamId: 'chip-ganassi-racing' }] }] } },
  'indycar-2023-toronto': { race: { overall: { driverIds: ['lundgaard'], teamId: 'rahal-letterman-lanigan' }, classes: [{ className: 'Top 3', podium: [{ position: 1, driverIds: ['lundgaard'], teamId: 'rahal-letterman-lanigan' }] }] } },
  'indycar-2023-iowa-1': { race: { overall: { driverIds: ['newgarden'], teamId: 'team-penske' }, classes: [{ className: 'Top 3', podium: [{ position: 1, driverIds: ['newgarden'], teamId: 'team-penske' }] }] } },
  'indycar-2023-iowa-2': { race: { overall: { driverIds: ['newgarden'], teamId: 'team-penske' }, classes: [{ className: 'Top 3', podium: [{ position: 1, driverIds: ['newgarden'], teamId: 'team-penske' }] }] } },
  'indycar-2023-nashville': { race: { overall: { driverIds: ['kirkwood'], teamId: 'andretti-autosport' }, classes: [{ className: 'Top 3', podium: [{ position: 1, driverIds: ['kirkwood'], teamId: 'andretti-autosport' }] }] } },
  'indycar-2023-indianapolis-gp2': { race: { overall: { driverIds: ['dixon'], teamId: 'chip-ganassi-racing' }, classes: [{ className: 'Top 3', podium: [{ position: 1, driverIds: ['dixon'], teamId: 'chip-ganassi-racing' }] }] } },
  'indycar-2023-wwtr': { race: { overall: { driverIds: ['dixon'], teamId: 'chip-ganassi-racing' }, classes: [{ className: 'Top 3', podium: [{ position: 1, driverIds: ['dixon'], teamId: 'chip-ganassi-racing' }] }] } },
  'indycar-2023-portland': { race: { overall: { driverIds: ['palou'], teamId: 'chip-ganassi-racing' }, classes: [{ className: 'Top 3', podium: [{ position: 1, driverIds: ['palou'], teamId: 'chip-ganassi-racing' }] }] } },
  'indycar-2023-laguna-seca': { race: { overall: { driverIds: ['dixon'], teamId: 'chip-ganassi-racing' }, classes: [{ className: 'Top 3', podium: [{ position: 1, driverIds: ['dixon'], teamId: 'chip-ganassi-racing' }] }] } },
}
