import type { EventResults } from './types'

// Michelin Le Mans Cup 2026 results
// Source: lemanscup.alkamelsystems.com — verified April 2026
export const mlmcResults2026: Record<string, EventResults> = {
  'mlmc-2026-barcelona': {
    qualifying: {
      overall: { driverIds: ['frost-d', 'peugeot-e'], teamId: 'r-ace-gp' },
    },
    endurance: {
      overall: { driverIds: ['frost-d', 'peugeot-e'], teamId: 'r-ace-gp' },
      classes: [
        {
          className: 'LMP3',
          podium: [
            { position: 1, driverIds: ['frost-d', 'peugeot-e'], teamId: 'r-ace-gp' },
            { position: 2, driverIds: ['maschio', 'queen'], teamId: '23events-racing' },
            { position: 3, driverIds: ['scoular', 'buhler'], teamId: 'r-ace-gp' },
          ],
        },
        {
          className: 'LMP3 Pro/Am',
          podium: [
            { position: 1, driverIds: ['zielonka', 'robinson-l'], teamId: 'bretton-racing' },
            { position: 2, driverIds: ['parrow', 'pedersen-m'], teamId: 'rinaldi-racing' },
            { position: 3, driverIds: ['gisy', 'kristensen-o'], teamId: 'racing-spirit-leman' },
          ],
        },
        {
          className: 'GT3',
          podium: [
            { position: 1, driverIds: ['sager', 'hasse-clot'], teamId: 'racing-spirit-leman' },
            { position: 2, driverIds: ['krahn', 'cressoni'], teamId: 'dinamic-gt' },
            { position: 3, driverIds: ['de-andres-martin', 'simmenauer'], teamId: 'smc-motorsport' },
          ],
        },
      ],
    },
  },
}
