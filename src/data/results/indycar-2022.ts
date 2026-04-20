import type { EventResults } from './types'

// IndyCar 2022 results — verified from indycar.com, Wikipedia
// Champion: Will Power (Team Penske) — 560 pts, 1 win (title won on consistency)
export const indycarResults2022: Record<string, EventResults> = {
  'indycar-2022-st-petersburg': { race: { overall: { driverIds: ['mclaughlin'], teamId: 'team-penske' }, classes: [{ className: 'Top 3', podium: [{ position: 1, driverIds: ['mclaughlin'], teamId: 'team-penske' }] }] } },
  'indycar-2022-texas': { race: { overall: { driverIds: ['newgarden'], teamId: 'team-penske' }, classes: [{ className: 'Top 3', podium: [{ position: 1, driverIds: ['newgarden'], teamId: 'team-penske' }] }] } },
  'indycar-2022-long-beach': { race: { overall: { driverIds: ['newgarden'], teamId: 'team-penske' }, classes: [{ className: 'Top 3', podium: [{ position: 1, driverIds: ['newgarden'], teamId: 'team-penske' }] }] } },
  'indycar-2022-barber': { race: { overall: { driverIds: ['oward'], teamId: 'arrow-mclaren' }, classes: [{ className: 'Top 3', podium: [{ position: 1, driverIds: ['oward'], teamId: 'arrow-mclaren' }] }] } },
  'indycar-2022-indianapolis-gp': { race: { overall: { driverIds: ['herta'], teamId: 'andretti-autosport' }, classes: [{ className: 'Top 3', podium: [{ position: 1, driverIds: ['herta'], teamId: 'andretti-autosport' }] }] } },
  'indycar-2022-indy500': { race: { overall: { driverIds: ['ericsson'], teamId: 'chip-ganassi-racing' }, classes: [{ className: 'Top 3', podium: [{ position: 1, driverIds: ['ericsson'], teamId: 'chip-ganassi-racing' }] }] } },
  'indycar-2022-detroit': { race: { overall: { driverIds: ['power'], teamId: 'team-penske' }, classes: [{ className: 'Top 3', podium: [{ position: 1, driverIds: ['power'], teamId: 'team-penske' }] }] } },
  'indycar-2022-road-america': { race: { overall: { driverIds: ['newgarden'], teamId: 'team-penske' }, classes: [{ className: 'Top 3', podium: [{ position: 1, driverIds: ['newgarden'], teamId: 'team-penske' }] }] } },
  'indycar-2022-mid-ohio': { race: { overall: { driverIds: ['mclaughlin'], teamId: 'team-penske' }, classes: [{ className: 'Top 3', podium: [{ position: 1, driverIds: ['mclaughlin'], teamId: 'team-penske' }] }] } },
  'indycar-2022-toronto': { race: { overall: { driverIds: ['dixon'], teamId: 'chip-ganassi-racing' }, classes: [{ className: 'Top 3', podium: [{ position: 1, driverIds: ['dixon'], teamId: 'chip-ganassi-racing' }] }] } },
  'indycar-2022-iowa-1': { race: { overall: { driverIds: ['newgarden'], teamId: 'team-penske' }, classes: [{ className: 'Top 3', podium: [{ position: 1, driverIds: ['newgarden'], teamId: 'team-penske' }] }] } },
  'indycar-2022-iowa-2': { race: { overall: { driverIds: ['oward'], teamId: 'arrow-mclaren' }, classes: [{ className: 'Top 3', podium: [{ position: 1, driverIds: ['oward'], teamId: 'arrow-mclaren' }] }] } },
  'indycar-2022-indianapolis-gp2': { race: { overall: { driverIds: ['rossi'], teamId: 'andretti-autosport' }, classes: [{ className: 'Top 3', podium: [{ position: 1, driverIds: ['rossi'], teamId: 'andretti-autosport' }] }] } },
  'indycar-2022-nashville': { race: { overall: { driverIds: ['dixon'], teamId: 'chip-ganassi-racing' }, classes: [{ className: 'Top 3', podium: [{ position: 1, driverIds: ['dixon'], teamId: 'chip-ganassi-racing' }] }] } },
  'indycar-2022-wwtr': { race: { overall: { driverIds: ['newgarden'], teamId: 'team-penske' }, classes: [{ className: 'Top 3', podium: [{ position: 1, driverIds: ['newgarden'], teamId: 'team-penske' }] }] } },
  'indycar-2022-portland': { race: { overall: { driverIds: ['mclaughlin'], teamId: 'team-penske' }, classes: [{ className: 'Top 3', podium: [{ position: 1, driverIds: ['mclaughlin'], teamId: 'team-penske' }] }] } },
  'indycar-2022-laguna-seca': { race: { overall: { driverIds: ['palou'], teamId: 'chip-ganassi-racing' }, classes: [{ className: 'Top 3', podium: [{ position: 1, driverIds: ['palou'], teamId: 'chip-ganassi-racing' }] }] } },
}
