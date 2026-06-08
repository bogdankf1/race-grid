import type { EventResults } from './types'

// Moto2 2022 results — all 20 rounds completed
// Sources: Wikipedia "2022 Moto2 season", per-Grand-Prix Wikipedia pages, motogp.com, crash.net,
//   motomatters.com, motorsport.com
// Champion: Augusto Fernández (Red Bull KTM Ajo) — clinched at Valencia (Round 20) by 9.5 points
//   over Ai Ogura after Acosta crashed early in the title decider
export const moto2Results2022: Record<string, EventResults> = {
  'moto2-2022-qatar': {
    qualifying: {
      overall: { driverIds: ['vietti'], teamId: 'mooney-vr46-moto2' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['vietti'], teamId: 'mooney-vr46-moto2' },
        ],
      }],
    },
    race: {
      // Vietti wins season opener at Lusail — VR46's first Moto2 win
      overall: { driverIds: ['vietti'], teamId: 'mooney-vr46-moto2' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['vietti'], teamId: 'mooney-vr46-moto2' },
          { position: 2, driverIds: ['ogura'], teamId: 'honda-team-asia' },
          { position: 3, driverIds: ['canet'], teamId: 'flexbox-hp40' },
        ],
      }],
    },
  },
  'moto2-2022-indonesia': {
    qualifying: {
      overall: { driverIds: ['dixon-j'], teamId: 'aspar-moto2' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['dixon-j'], teamId: 'aspar-moto2' },
        ],
      }],
    },
    race: {
      // Chantra's maiden Moto2 victory — first ever for a Thai rider in the intermediate class
      overall: { driverIds: ['chantra'], teamId: 'honda-team-asia' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['chantra'], teamId: 'honda-team-asia' },
          { position: 2, driverIds: ['ogura'], teamId: 'honda-team-asia' },
          { position: 3, driverIds: ['aldeguer'], teamId: 'speed-up-racing' },
        ],
      }],
    },
  },
  'moto2-2022-argentina': {
    qualifying: {
      overall: { driverIds: ['aldeguer'], teamId: 'speed-up-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['aldeguer'], teamId: 'speed-up-racing' },
        ],
      }],
    },
    race: {
      // Vietti's second win — at a chaotic Termas; condensed schedule due to freight delays
      overall: { driverIds: ['vietti'], teamId: 'mooney-vr46-moto2' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['vietti'], teamId: 'mooney-vr46-moto2' },
          { position: 2, driverIds: ['ogura'], teamId: 'honda-team-asia' },
          { position: 3, driverIds: ['canet'], teamId: 'flexbox-hp40' },
        ],
      }],
    },
  },
  'moto2-2022-usa': {
    qualifying: {
      overall: { driverIds: ['beaubier'], teamId: 'american-racing-moto2' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['beaubier'], teamId: 'american-racing-moto2' },
        ],
      }],
    },
    race: {
      // Arbolino's maiden Moto2 victory at COTA
      overall: { driverIds: ['arbolino'], teamId: 'marc-vds-moto2' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['arbolino'], teamId: 'marc-vds-moto2' },
          { position: 2, driverIds: ['canet'], teamId: 'flexbox-hp40' },
          { position: 3, driverIds: ['ogura'], teamId: 'honda-team-asia' },
        ],
      }],
    },
  },
  'moto2-2022-portugal': {
    qualifying: {
      overall: { driverIds: ['canet'], teamId: 'flexbox-hp40' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['canet'], teamId: 'flexbox-hp40' },
        ],
      }],
    },
    race: {
      // Joe Roberts' first Moto2 win at Portimao
      overall: { driverIds: ['roberts-j'], teamId: 'italtrans-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['roberts-j'], teamId: 'italtrans-racing' },
          { position: 2, driverIds: ['vietti'], teamId: 'mooney-vr46-moto2' },
          { position: 3, driverIds: ['navarro-j'], teamId: 'flexbox-hp40' },
        ],
      }],
    },
  },
  'moto2-2022-spain': {
    qualifying: {
      overall: { driverIds: ['ogura'], teamId: 'honda-team-asia' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['ogura'], teamId: 'honda-team-asia' },
        ],
      }],
    },
    race: {
      // Ai Ogura's maiden Moto2 victory at Jerez
      overall: { driverIds: ['ogura'], teamId: 'honda-team-asia' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['ogura'], teamId: 'honda-team-asia' },
          { position: 2, driverIds: ['lowes'], teamId: 'marc-vds-moto2' },
          { position: 3, driverIds: ['arbolino'], teamId: 'marc-vds-moto2' },
        ],
      }],
    },
  },
  'moto2-2022-france': {
    qualifying: {
      overall: { driverIds: ['acosta'], teamId: 'red-bull-ktm-ajo' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['acosta'], teamId: 'red-bull-ktm-ajo' },
        ],
      }],
    },
    race: {
      // Augusto Fernández's first Moto2 victory at Le Mans
      overall: { driverIds: ['fernandez-a'], teamId: 'red-bull-ktm-ajo' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['fernandez-a'], teamId: 'red-bull-ktm-ajo' },
          { position: 2, driverIds: ['roberts-j'], teamId: 'italtrans-racing' },
          { position: 3, driverIds: ['ogura'], teamId: 'honda-team-asia' },
        ],
      }],
    },
  },
  'moto2-2022-italy': {
    qualifying: {
      overall: { driverIds: ['canet'], teamId: 'flexbox-hp40' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['canet'], teamId: 'flexbox-hp40' },
        ],
      }],
    },
    race: {
      // Acosta's first Moto2 win at Mugello, in his rookie season
      overall: { driverIds: ['acosta'], teamId: 'red-bull-ktm-ajo' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['acosta'], teamId: 'red-bull-ktm-ajo' },
          { position: 2, driverIds: ['fernandez-a'], teamId: 'red-bull-ktm-ajo' },
          { position: 3, driverIds: ['ogura'], teamId: 'honda-team-asia' },
        ],
      }],
    },
  },
  'moto2-2022-catalunya': {
    qualifying: {
      overall: { driverIds: ['vietti'], teamId: 'mooney-vr46-moto2' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['vietti'], teamId: 'mooney-vr46-moto2' },
        ],
      }],
    },
    race: {
      // Vietti's third win of the year at Catalunya
      overall: { driverIds: ['vietti'], teamId: 'mooney-vr46-moto2' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['vietti'], teamId: 'mooney-vr46-moto2' },
          { position: 2, driverIds: ['canet'], teamId: 'flexbox-hp40' },
          { position: 3, driverIds: ['fernandez-a'], teamId: 'red-bull-ktm-ajo' },
        ],
      }],
    },
  },
  'moto2-2022-germany': {
    qualifying: {
      overall: { driverIds: ['lowes'], teamId: 'marc-vds-moto2' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['lowes'], teamId: 'marc-vds-moto2' },
        ],
      }],
    },
    race: {
      // Augusto Fernández wins at the Sachsenring
      overall: { driverIds: ['fernandez-a'], teamId: 'red-bull-ktm-ajo' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['fernandez-a'], teamId: 'red-bull-ktm-ajo' },
          { position: 2, driverIds: ['ogura'], teamId: 'honda-team-asia' },
          { position: 3, driverIds: ['schrotter'], teamId: 'intact-gp' },
        ],
      }],
    },
  },
  'moto2-2022-netherlands': {
    qualifying: {
      overall: { driverIds: ['dixon-j'], teamId: 'aspar-moto2' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['dixon-j'], teamId: 'aspar-moto2' },
        ],
      }],
    },
    race: {
      // Augusto Fernández's third win in four races at Assen
      overall: { driverIds: ['fernandez-a'], teamId: 'red-bull-ktm-ajo' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['fernandez-a'], teamId: 'red-bull-ktm-ajo' },
          { position: 2, driverIds: ['vietti'], teamId: 'mooney-vr46-moto2' },
          { position: 3, driverIds: ['canet'], teamId: 'flexbox-hp40' },
        ],
      }],
    },
  },
  'moto2-2022-great-britain': {
    qualifying: {
      overall: { driverIds: ['fernandez-a'], teamId: 'red-bull-ktm-ajo' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['fernandez-a'], teamId: 'red-bull-ktm-ajo' },
        ],
      }],
    },
    race: {
      // Augusto Fernández wins again at Silverstone, championship lead growing
      overall: { driverIds: ['fernandez-a'], teamId: 'red-bull-ktm-ajo' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['fernandez-a'], teamId: 'red-bull-ktm-ajo' },
          { position: 2, driverIds: ['dixon-j'], teamId: 'aspar-moto2' },
          { position: 3, driverIds: ['ogura'], teamId: 'honda-team-asia' },
        ],
      }],
    },
  },
  'moto2-2022-austria': {
    qualifying: {
      overall: { driverIds: ['ogura'], teamId: 'honda-team-asia' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['ogura'], teamId: 'honda-team-asia' },
        ],
      }],
    },
    race: {
      // Ogura's second Moto2 victory at the Red Bull Ring; closes title gap to Fernández
      overall: { driverIds: ['ogura'], teamId: 'honda-team-asia' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['ogura'], teamId: 'honda-team-asia' },
          { position: 2, driverIds: ['vietti'], teamId: 'mooney-vr46-moto2' },
          { position: 3, driverIds: ['arenas'], teamId: 'aspar-moto2' },
        ],
      }],
    },
  },
  'moto2-2022-san-marino': {
    qualifying: {
      overall: { driverIds: ['vietti'], teamId: 'mooney-vr46-moto2' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['vietti'], teamId: 'mooney-vr46-moto2' },
        ],
      }],
    },
    race: {
      // Alonso López's maiden Moto2 victory at Misano — only his 5th Moto2 weekend
      overall: { driverIds: ['lopez-a'], teamId: 'speed-up-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['lopez-a'], teamId: 'speed-up-racing' },
          { position: 2, driverIds: ['ogura'], teamId: 'honda-team-asia' },
          { position: 3, driverIds: ['canet'], teamId: 'flexbox-hp40' },
        ],
      }],
    },
  },
  'moto2-2022-aragon': {
    qualifying: {
      overall: { driverIds: ['fernandez-a'], teamId: 'red-bull-ktm-ajo' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['fernandez-a'], teamId: 'red-bull-ktm-ajo' },
        ],
      }],
    },
    race: {
      // Acosta's second Moto2 win, beating teammate Fernández
      overall: { driverIds: ['acosta'], teamId: 'red-bull-ktm-ajo' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['acosta'], teamId: 'red-bull-ktm-ajo' },
          { position: 2, driverIds: ['fernandez-a'], teamId: 'red-bull-ktm-ajo' },
          { position: 3, driverIds: ['arenas'], teamId: 'aspar-moto2' },
        ],
      }],
    },
  },
  'moto2-2022-japan': {
    qualifying: {
      overall: { driverIds: ['canet'], teamId: 'flexbox-hp40' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['canet'], teamId: 'flexbox-hp40' },
        ],
      }],
    },
    race: {
      // Ogura's third win — at home in front of Honda's home crowd at Motegi
      overall: { driverIds: ['ogura'], teamId: 'honda-team-asia' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['ogura'], teamId: 'honda-team-asia' },
          { position: 2, driverIds: ['fernandez-a'], teamId: 'red-bull-ktm-ajo' },
          { position: 3, driverIds: ['dixon-j'], teamId: 'aspar-moto2' },
        ],
      }],
    },
  },
  'moto2-2022-thailand': {
    qualifying: {
      overall: { driverIds: ['chantra'], teamId: 'honda-team-asia' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['chantra'], teamId: 'honda-team-asia' },
        ],
      }],
    },
    race: {
      // Arbolino's second Moto2 victory; Chantra on the podium at home in Thailand
      overall: { driverIds: ['arbolino'], teamId: 'marc-vds-moto2' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['arbolino'], teamId: 'marc-vds-moto2' },
          { position: 2, driverIds: ['ogura'], teamId: 'honda-team-asia' },
          { position: 3, driverIds: ['chantra'], teamId: 'honda-team-asia' },
        ],
      }],
    },
  },
  'moto2-2022-australia': {
    qualifying: {
      overall: { driverIds: ['aldeguer'], teamId: 'speed-up-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['aldeguer'], teamId: 'speed-up-racing' },
        ],
      }],
    },
    race: {
      // Alonso López wins at Phillip Island from third on the grid
      overall: { driverIds: ['lopez-a'], teamId: 'speed-up-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['lopez-a'], teamId: 'speed-up-racing' },
          { position: 2, driverIds: ['acosta'], teamId: 'red-bull-ktm-ajo' },
          { position: 3, driverIds: ['dixon-j'], teamId: 'aspar-moto2' },
        ],
      }],
    },
  },
  'moto2-2022-malaysia': {
    qualifying: {
      overall: { driverIds: ['ogura'], teamId: 'honda-team-asia' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['ogura'], teamId: 'honda-team-asia' },
        ],
      }],
    },
    race: {
      // Arbolino wins at Sepang; Ogura crashed from pole
      overall: { driverIds: ['arbolino'], teamId: 'marc-vds-moto2' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['arbolino'], teamId: 'marc-vds-moto2' },
          { position: 2, driverIds: ['lopez-a'], teamId: 'speed-up-racing' },
          { position: 3, driverIds: ['dixon-j'], teamId: 'aspar-moto2' },
        ],
      }],
    },
  },
  'moto2-2022-valencia': {
    qualifying: {
      overall: { driverIds: ['lopez-a'], teamId: 'speed-up-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['lopez-a'], teamId: 'speed-up-racing' },
        ],
      }],
    },
    race: {
      // Acosta wins the title decider; Augusto Fernández seals the championship with P5
      overall: { driverIds: ['acosta'], teamId: 'red-bull-ktm-ajo' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['acosta'], teamId: 'red-bull-ktm-ajo' },
          { position: 2, driverIds: ['beaubier'], teamId: 'american-racing-moto2' },
          { position: 3, driverIds: ['roberts-j'], teamId: 'italtrans-racing' },
        ],
      }],
    },
  },
}
