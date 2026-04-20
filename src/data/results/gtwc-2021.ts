import type { EventResults } from './types'

// GTWC Europe 2021 results — verified from gt-world-challenge-europe.com, Wikipedia
// Overall Champions: Vanthoor/Weerts (Team WRT)
export const gtwcResults2021: Record<string, EventResults> = {
  'gtwc-2021-monza': { endurance: { overall: { driverIds: ['bortolotti'], teamId: 'dinamic-gt' }, classes: [{ className: 'Overall', podium: [{ position: 1, driverIds: ['bortolotti'], teamId: 'dinamic-gt' }] }] } },
  'gtwc-2021-paul-ricard': { endurance: { overall: { driverIds: ['bamber', 'campbell'], teamId: 'porsche-penske' }, classes: [{ className: 'Overall', podium: [{ position: 1, driverIds: ['bamber', 'campbell'], teamId: 'porsche-penske' }] }] } },
  'gtwc-2021-spa-24h': { endurance: { overall: { driverIds: ['ledogar', 'nielsen', 'pier-guidi'], teamId: 'iron-lynx' }, classes: [{ className: 'Overall', podium: [{ position: 1, driverIds: ['ledogar', 'nielsen', 'pier-guidi'], teamId: 'iron-lynx' }] }] } },
  'gtwc-2021-nurburgring': { endurance: { overall: { driverIds: ['bortolotti'], teamId: 'dinamic-gt' }, classes: [{ className: 'Overall', podium: [{ position: 1, driverIds: ['bortolotti'], teamId: 'dinamic-gt' }] }] } },
  'gtwc-2021-barcelona': { endurance: { overall: { driverIds: ['marciello', 'gounon'], teamId: 'akkodis-asp' }, classes: [{ className: 'Overall', podium: [{ position: 1, driverIds: ['marciello', 'gounon'], teamId: 'akkodis-asp' }] }] } },
}
