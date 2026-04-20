import type { EventResults } from './types'

// ELMS 2021 LMP2 results — verified from europeanlemansseries.com, Wikipedia
// Champions: Delétraz/Kubica/Ye (Team WRT) — 118 pts
export const elmsResults2021: Record<string, EventResults> = {
  'elms-2021-barcelona': { endurance: { overall: { driverIds: ['deletraz', 'kubica', 'ye'], teamId: 'team-wrt' }, classes: [{ className: 'LMP2', podium: [{ position: 1, driverIds: ['deletraz', 'kubica', 'ye'], teamId: 'team-wrt' }] }] } },
  'elms-2021-red-bull-ring': { endurance: { overall: { driverIds: ['deletraz', 'kubica', 'ye'], teamId: 'team-wrt' }, classes: [{ className: 'LMP2', podium: [{ position: 1, driverIds: ['deletraz', 'kubica', 'ye'], teamId: 'team-wrt' }] }] } },
  'elms-2021-le-castellet': { endurance: { overall: { driverIds: ['de-vries'], teamId: 'g-drive-racing' }, classes: [{ className: 'LMP2', podium: [{ position: 1, driverIds: ['de-vries'], teamId: 'g-drive-racing' }] }] } },
  'elms-2021-monza': { endurance: { overall: { driverIds: ['stevens'], teamId: 'panis-racing' }, classes: [{ className: 'LMP2', podium: [{ position: 1, driverIds: ['stevens'], teamId: 'panis-racing' }] }] } },
  'elms-2021-spa': { endurance: { overall: { driverIds: ['deletraz', 'kubica', 'ye'], teamId: 'team-wrt' }, classes: [{ className: 'LMP2', podium: [{ position: 1, driverIds: ['deletraz', 'kubica', 'ye'], teamId: 'team-wrt' }] }] } },
  'elms-2021-portimao': { endurance: { overall: { driverIds: ['lapierre', 'milesi'], teamId: 'cool-racing' }, classes: [{ className: 'LMP2', podium: [{ position: 1, driverIds: ['lapierre', 'milesi'], teamId: 'cool-racing' }] }] } },
}
