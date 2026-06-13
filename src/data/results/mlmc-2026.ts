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
  'mlmc-2026-le-castellet': {
    qualifying: {
      overall: { driverIds: ['favre'], teamId: 'dkr-engineering' },
      classes: [
        {
          className: 'LMP3',
          podium: [
            { position: 1, driverIds: ['favre'], teamId: 'dkr-engineering' },
          ],
        },
        {
          className: 'GT3',
          podium: [
            { position: 1, driverIds: ['al-khelaifi'], teamId: 'team-qatar-iron-lynx' },
          ],
        },
      ],
    },
    endurance: {
      overall: { driverIds: ['maschio', 'queen'], teamId: '23events-racing' },
      classes: [
        {
          className: 'LMP3',
          podium: [
            { position: 1, driverIds: ['maschio', 'queen'], teamId: '23events-racing' },
          ],
        },
        {
          className: 'GT3',
          podium: [
            { position: 1, driverIds: ['fumanelli', 'innocenti'], teamId: 'kessel-racing' },
          ],
        },
      ],
    },
  },
  // Road to Le Mans (single 3h race). GT3: #77 SMC McLaren won on the road but was
  // DSQ'd post-race (diffuser), promoting Racing Spirit of Léman #10 to the GT3 win.
  // P2/P3 driver crews unverified at team level — recorded by team only.
  'mlmc-2026-le-mans': {
    qualifying: {
      overall: { driverIds: ['rogeon'], teamId: 'brutal-fish-campos' },
      classes: [
        {
          className: 'LMP3',
          podium: [
            { position: 1, driverIds: ['rogeon'], teamId: 'brutal-fish-campos' },
          ],
        },
        {
          className: 'GT3',
          podium: [
            { position: 1, driverIds: ['simmenauer'], teamId: 'smc-motorsport' },
          ],
        },
      ],
    },
    endurance: {
      overall: { driverIds: ['rogeon', 'raber'], teamId: 'brutal-fish-campos' },
      classes: [
        {
          className: 'LMP3',
          podium: [
            { position: 1, driverIds: ['rogeon', 'raber'], teamId: 'brutal-fish-campos' },
            { position: 2, driverIds: [], teamId: 'high-class-racing' },
          ],
        },
        {
          className: 'GT3',
          podium: [
            { position: 1, driverIds: [], teamId: 'racing-spirit-leman' },
          ],
        },
      ],
    },
  },
}
