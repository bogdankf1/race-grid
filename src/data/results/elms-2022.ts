import type { EventResults } from './types'

// ELMS 2022 LMP2 results — verified from europeanlemansseries.com, Wikipedia
// Champion: Louis Delétraz (Prema Racing) — 125 pts
export const elmsResults2022: Record<string, EventResults> = {
  'elms-2022-le-castellet': { endurance: { overall: { driverIds: ['colombo', 'deletraz', 'habsburg'], teamId: 'prema-racing' }, classes: [{ className: 'LMP2', podium: [{ position: 1, driverIds: ['colombo', 'deletraz', 'habsburg'], teamId: 'prema-racing' }] }] } },
  'elms-2022-imola': { endurance: { overall: { driverIds: ['colombo', 'deletraz', 'habsburg'], teamId: 'prema-racing' }, classes: [{ className: 'LMP2', podium: [{ position: 1, driverIds: ['colombo', 'deletraz', 'habsburg'], teamId: 'prema-racing' }] }] } },
  'elms-2022-monza': { endurance: { overall: { driverIds: ['chatin', 'van-uitert'], teamId: 'idec-sport' }, classes: [{ className: 'LMP2', podium: [{ position: 1, driverIds: ['chatin', 'van-uitert'], teamId: 'idec-sport' }] }] } },
  'elms-2022-barcelona': { endurance: { overall: { driverIds: ['colombo', 'deletraz', 'habsburg'], teamId: 'prema-racing' }, classes: [{ className: 'LMP2', podium: [{ position: 1, driverIds: ['colombo', 'deletraz', 'habsburg'], teamId: 'prema-racing' }] }] } },
  'elms-2022-spa': { endurance: { overall: { driverIds: ['gamble', 'hanson'], teamId: 'united-autosports' }, classes: [{ className: 'LMP2', podium: [{ position: 1, driverIds: ['gamble', 'hanson'], teamId: 'united-autosports' }] }] } },
  'elms-2022-portimao': { endurance: { overall: { driverIds: ['deletraz', 'habsburg'], teamId: 'prema-racing' }, classes: [{ className: 'LMP2', podium: [{ position: 1, driverIds: ['deletraz', 'habsburg'], teamId: 'prema-racing' }] }] } },
}
