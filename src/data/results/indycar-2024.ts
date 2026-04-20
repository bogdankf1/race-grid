import type { EventResults } from './types'

// IndyCar 2024 results — verified from indycar.com, Wikipedia
// Champion: Álex Palou (Chip Ganassi Racing) — back-to-back titles
export const indycarResults2024: Record<string, EventResults> = {
  'indycar-2024-st-petersburg': { race: { overall: { driverIds: ['oward'], teamId: 'arrow-mclaren' }, classes: [{ className: 'Top 3', podium: [{ position: 1, driverIds: ['oward'], teamId: 'arrow-mclaren' }] }] } },
  'indycar-2024-long-beach': { race: { overall: { driverIds: ['dixon'], teamId: 'chip-ganassi-racing' }, classes: [{ className: 'Top 3', podium: [{ position: 1, driverIds: ['dixon'], teamId: 'chip-ganassi-racing' }] }] } },
  'indycar-2024-barber': { race: { overall: { driverIds: ['mclaughlin'], teamId: 'team-penske' }, classes: [{ className: 'Top 3', podium: [{ position: 1, driverIds: ['mclaughlin'], teamId: 'team-penske' }] }] } },
  'indycar-2024-indianapolis-gp': { race: { overall: { driverIds: ['palou'], teamId: 'chip-ganassi-racing' }, classes: [{ className: 'Top 3', podium: [{ position: 1, driverIds: ['palou'], teamId: 'chip-ganassi-racing' }] }] } },
  'indycar-2024-indy500': { race: { overall: { driverIds: ['newgarden'], teamId: 'team-penske' }, classes: [{ className: 'Top 3', podium: [{ position: 1, driverIds: ['newgarden'], teamId: 'team-penske' }] }] } },
  'indycar-2024-detroit': { race: { overall: { driverIds: ['dixon'], teamId: 'chip-ganassi-racing' }, classes: [{ className: 'Top 3', podium: [{ position: 1, driverIds: ['dixon'], teamId: 'chip-ganassi-racing' }] }] } },
  'indycar-2024-road-america': { race: { overall: { driverIds: ['power'], teamId: 'team-penske' }, classes: [{ className: 'Top 3', podium: [{ position: 1, driverIds: ['power'], teamId: 'team-penske' }] }] } },
  'indycar-2024-laguna-seca': { race: { overall: { driverIds: ['palou'], teamId: 'chip-ganassi-racing' }, classes: [{ className: 'Top 3', podium: [{ position: 1, driverIds: ['palou'], teamId: 'chip-ganassi-racing' }] }] } },
  'indycar-2024-mid-ohio': { race: { overall: { driverIds: ['oward'], teamId: 'arrow-mclaren' }, classes: [{ className: 'Top 3', podium: [{ position: 1, driverIds: ['oward'], teamId: 'arrow-mclaren' }] }] } },
  'indycar-2024-iowa-1': { race: { overall: { driverIds: ['mclaughlin'], teamId: 'team-penske' }, classes: [{ className: 'Top 3', podium: [{ position: 1, driverIds: ['mclaughlin'], teamId: 'team-penske' }] }] } },
  'indycar-2024-iowa-2': { race: { overall: { driverIds: ['power'], teamId: 'team-penske' }, classes: [{ className: 'Top 3', podium: [{ position: 1, driverIds: ['power'], teamId: 'team-penske' }] }] } },
  'indycar-2024-toronto': { race: { overall: { driverIds: ['herta'], teamId: 'andretti-global' }, classes: [{ className: 'Top 3', podium: [{ position: 1, driverIds: ['herta'], teamId: 'andretti-global' }] }] } },
  'indycar-2024-wwtr': { race: { overall: { driverIds: ['newgarden'], teamId: 'team-penske' }, classes: [{ className: 'Top 3', podium: [{ position: 1, driverIds: ['newgarden'], teamId: 'team-penske' }] }] } },
  'indycar-2024-portland': { race: { overall: { driverIds: ['power'], teamId: 'team-penske' }, classes: [{ className: 'Top 3', podium: [{ position: 1, driverIds: ['power'], teamId: 'team-penske' }] }] } },
  'indycar-2024-milwaukee-1': { race: { overall: { driverIds: ['oward'], teamId: 'arrow-mclaren' }, classes: [{ className: 'Top 3', podium: [{ position: 1, driverIds: ['oward'], teamId: 'arrow-mclaren' }] }] } },
  'indycar-2024-milwaukee-2': { race: { overall: { driverIds: ['mclaughlin'], teamId: 'team-penske' }, classes: [{ className: 'Top 3', podium: [{ position: 1, driverIds: ['mclaughlin'], teamId: 'team-penske' }] }] } },
  'indycar-2024-nashville': { race: { overall: { driverIds: ['herta'], teamId: 'andretti-global' }, classes: [{ className: 'Top 3', podium: [{ position: 1, driverIds: ['herta'], teamId: 'andretti-global' }] }] } },
}
