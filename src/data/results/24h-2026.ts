import type { EventResults } from './types'

// 24H Series 2026 results
export const twentyfourhResults2026: Record<string, EventResults> = {
  '24h-2026-mugello': {
    qualifying: {
      // GT3 pole — Maro Engel anchored final Q3 lap for GetSpeed Team PCX Racing
      overall: { driverIds: ['engel'], teamId: 'getspeed' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['engel'], teamId: 'getspeed' },
          { position: 2, driverIds: ['pierre-kaffer', 'elia-erhart', 'stephane-tribaudini'], teamId: 'sainteloc-junior-team' },
          { position: 3, driverIds: ['marschall'], teamId: 'proton-competition' },
        ],
      }],
    },
    endurance: {
      overall: { driverIds: ['pierre-kaffer', 'elia-erhart', 'ernst-inderbitzin', 'stephane-tribaudini'], teamId: 'sainteloc-junior-team' },
    },
  },
  '24h-2026-spa': {
    qualifying: {
      // GT3 pole — Salman Owega in the No.77 McLaren for Optimum Motorsport
      overall: { driverIds: ['salman-owega', 'harry-george', 'freddie-tomlinson'], teamId: 'optimum-motorsport' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['salman-owega', 'harry-george', 'freddie-tomlinson'], teamId: 'optimum-motorsport' },
          { position: 2, driverIds: [], teamId: 'getspeed' },
          { position: 3, driverIds: ['bachler', 'alfred-renauer'], teamId: 'herberth-motorsport' },
        ],
      }],
    },
    endurance: {
      overall: { driverIds: ['harry-george', 'salman-owega', 'freddie-tomlinson'], teamId: 'optimum-motorsport' },
    },
  },
}
