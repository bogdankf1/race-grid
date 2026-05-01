import type { EventResults } from './types'

// British GT Championship 2026 results
export const britgtResults2026: Record<string, EventResults> = {
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
