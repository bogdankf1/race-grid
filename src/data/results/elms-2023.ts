import type { EventResults } from './types'

// ELMS 2023 LMP2 results — verified from europeanlemansseries.com, Wikipedia
// Champions: Allen/Lynn/Simpson (Algarve Pro Racing)
export const elmsResults2023: Record<string, EventResults> = {
  'elms-2023-barcelona': { endurance: { overall: { driverIds: ['de-gerus'], teamId: 'cool-racing' }, classes: [{ className: 'LMP2', podium: [{ position: 1, driverIds: ['de-gerus'], teamId: 'cool-racing' }] }] } },
  'elms-2023-le-castellet': { endurance: { overall: { driverIds: ['j-allen', 'lynn', 'simpson'], teamId: 'algarve-pro' }, classes: [{ className: 'LMP2', podium: [{ position: 1, driverIds: ['j-allen', 'lynn', 'simpson'], teamId: 'algarve-pro' }] }] } },
  'elms-2023-aragon': { endurance: { overall: { driverIds: ['hanson', 'jarvis'], teamId: 'united-autosports' }, classes: [{ className: 'LMP2', podium: [{ position: 1, driverIds: ['hanson', 'jarvis'], teamId: 'united-autosports' }] }] } },
  'elms-2023-spa': { endurance: { overall: { driverIds: ['j-allen', 'lynn', 'simpson'], teamId: 'algarve-pro' }, classes: [{ className: 'LMP2', podium: [{ position: 1, driverIds: ['j-allen', 'lynn', 'simpson'], teamId: 'algarve-pro' }] }] } },
  'elms-2023-portimao-1': { endurance: { overall: { driverIds: ['j-allen', 'lynn', 'simpson'], teamId: 'algarve-pro' }, classes: [{ className: 'LMP2', podium: [{ position: 1, driverIds: ['j-allen', 'lynn', 'simpson'], teamId: 'algarve-pro' }] }] } },
  'elms-2023-portimao-2': { endurance: { overall: { driverIds: ['chatin'], teamId: 'idec-sport' }, classes: [{ className: 'LMP2', podium: [{ position: 1, driverIds: ['chatin'], teamId: 'idec-sport' }] }] } },
}
