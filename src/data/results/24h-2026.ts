import type { EventResults } from './types'

// 24H Series 2026 results
export const twentyfourhResults2026: Record<string, EventResults> = {
  // 6th Michelin 12H Paul Ricard 2026 (5–7 June). Source: 24hseries.com official
  // per-class classification PDF, pitdebrief.com, sportscar365.com.
  '24h-2026-paul-ricard': {
    qualifying: {
      // Overall pole — Maro Engel (track record lap) for GetSpeed Team PCX Racing (#28)
      overall: { driverIds: ['engel'], teamId: 'getspeed' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['engel', 'boisson', 'paque'], teamId: 'getspeed' },
          { position: 2, driverIds: ['ayrton-redant', 'yannick-redant', 'de-breucker'], teamId: 'ajith-redant-racing' },
          { position: 3, driverIds: ['pierre-kaffer', 'stephane-tribaudini', 'elia-erhart'], teamId: 'sainteloc-junior-team' },
        ],
      }],
    },
    endurance: {
      overall: { driverIds: ['kratz', 'partl', 'alexander-prinz', 'michael-kroll'], teamId: 'hofor-racing' },
      classes: [
        {
          className: 'Overall',
          podium: [
            { position: 1, driverIds: ['kratz', 'partl', 'alexander-prinz', 'michael-kroll'], teamId: 'hofor-racing' },
            { position: 2, driverIds: ['paque', 'boisson', 'charlaix', 'engel'], teamId: 'getspeed' },
            { position: 3, driverIds: ['pierre-kaffer', 'stephane-tribaudini', 'elia-erhart', 'michael-doppelmayr'], teamId: 'sainteloc-junior-team' },
          ],
        },
        {
          className: 'GT3 Pro-Am',
          podium: [
            { position: 1, driverIds: ['charlaix', 'boisson', 'paque', 'engel'], teamId: 'getspeed' },
          ],
        },
        {
          className: 'GT3-Am',
          podium: [
            { position: 1, driverIds: ['michael-kroll', 'alexander-prinz', 'kratz', 'partl'], teamId: 'hofor-racing' },
          ],
        },
        {
          className: '992',
          podium: [
            { position: 1, driverIds: ['ivo-breukers', 'luc-breukers', 'rik-breukers', 'danz'], teamId: 'red-camel-jordans' },
          ],
        },
        {
          className: 'GTX',
          podium: [
            { position: 1, driverIds: ['bonnel', 'boillot-j', 'de-bernardinis'], teamId: 'vortex' },
          ],
        },
        {
          className: 'GT4',
          podium: [
            { position: 1, driverIds: ['de-rouw', 'huez', 'poppe', 'dekker'], teamId: 'circuit-toys' },
          ],
        },
        {
          className: 'TCE',
          podium: [
            { position: 1, driverIds: ['ohlsson', 'teirlinck', 'gieras'], teamId: 'asbest-racing' },
          ],
        },
      ],
    },
  },
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
