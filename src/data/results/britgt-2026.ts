import type { EventResults } from './types'

// British GT Championship 2026 results
export const britgtResults2026: Record<string, EventResults> = {
  // Oulton Park: 2x sprint format. GT3 Race 1 pole Howard (Beechdean), GT3 Race 2 pole Gunn (Beechdean).
  // Race 1 winners: GT3 Cook/Collard (Barwell), GT4 Warren/Brown (Optimum).
  // Race 2 winners: GT3 Tse/Gotz (2 Seas), GT4 Warren/Brown (Optimum).
  'britgt-2026-oulton-park': {
    qualifying: {
      overall: { driverIds: ['howard-a', 'gunn'], teamId: 'beechdean-motorsport' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['howard-a', 'gunn'], teamId: 'beechdean-motorsport' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['tse', 'gotz'], teamId: 'two-seas-motorsport' },
      classes: [{
        className: 'GT3',
        podium: [
          { position: 1, driverIds: ['tse', 'gotz'], teamId: 'two-seas-motorsport' },
          { position: 2, driverIds: ['cook-h', 'collard'], teamId: 'barwell-motorsport' },
          { position: 3, driverIds: ['petrobelli', 'adam'], teamId: 'blackthorn' },
        ],
      }, {
        className: 'GT4',
        podium: [
          { position: 1, driverIds: ['warren', 'brown-j'], teamId: 'optimum-motorsport' },
          { position: 2, driverIds: ['harry-george', 'hopkinson'], teamId: 'optimum-motorsport' },
        ],
      }],
    },
  },
  'britgt-2026-silverstone': {
    qualifying: {
      overall: { driverIds: ['darren-leung', 'dan-harper'], teamId: 'paradine-competition' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['darren-leung', 'dan-harper'], teamId: 'paradine-competition' },
          { position: 2, driverIds: ['dawson', 'jewiss'], teamId: 'two-seas-motorsport' },
          { position: 3, driverIds: ['collard', 'cook-h'], teamId: 'barwell-motorsport' },
        ],
      }],
    },
    endurance: {
      overall: { driverIds: ['shahin-y', 'patterson'], teamId: 'optimum-motorsport' },
      classes: [{
        className: 'GT3',
        podium: [
          { position: 1, driverIds: ['shahin-y', 'patterson'], teamId: 'optimum-motorsport' },
          { position: 2, driverIds: ['beeson', 'clark-c'], teamId: 'century-motorsport' },
          { position: 3, driverIds: ['darren-leung', 'dan-harper'], teamId: 'paradine-competition' },
        ],
      }, {
        className: 'GT4',
        podium: [
          { position: 1, driverIds: ['simpson-h', 'holland-t'], teamId: 'innovation-racing' },
        ],
      }],
    },
  },
}
