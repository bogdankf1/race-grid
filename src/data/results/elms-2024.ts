import type { EventResults } from './types'

// ELMS 2024 LMP2 results — verified from europeanlemansseries.com, Wikipedia
// Champions: Edgar/Kubica/Delétraz (AO by TF)
export const elmsResults2024: Record<string, EventResults> = {
  'elms-2024-barcelona': { endurance: { overall: { driverIds: ['hanley'], teamId: 'united-autosports' }, classes: [{ className: 'LMP2', podium: [{ position: 1, driverIds: ['hanley'], teamId: 'united-autosports' }] }] } },
  'elms-2024-le-castellet': { endurance: { overall: { driverIds: ['de-gerus', 'van-uitert'], teamId: 'idec-sport' }, classes: [{ className: 'LMP2', podium: [{ position: 1, driverIds: ['de-gerus', 'van-uitert'], teamId: 'idec-sport' }] }] } },
  'elms-2024-imola': { endurance: { overall: { driverIds: ['a-leclerc', 'milesi'], teamId: 'panis-racing' }, classes: [{ className: 'LMP2', podium: [{ position: 1, driverIds: ['a-leclerc', 'milesi'], teamId: 'panis-racing' }] }] } },
  'elms-2024-spa': { endurance: { overall: { driverIds: ['deletraz', 'edgar', 'kubica'], teamId: 'ao-by-tf' }, classes: [{ className: 'LMP2', podium: [{ position: 1, driverIds: ['deletraz', 'edgar', 'kubica'], teamId: 'ao-by-tf' }] }] } },
  'elms-2024-mugello': { endurance: { overall: { driverIds: ['cairoli'], teamId: 'iron-lynx' }, classes: [{ className: 'LMP2', podium: [{ position: 1, driverIds: ['cairoli'], teamId: 'iron-lynx' }] }] } },
  'elms-2024-portimao': { endurance: { overall: { driverIds: ['a-leclerc', 'milesi'], teamId: 'panis-racing' }, classes: [{ className: 'LMP2', podium: [{ position: 1, driverIds: ['a-leclerc', 'milesi'], teamId: 'panis-racing' }] }] } },
}
