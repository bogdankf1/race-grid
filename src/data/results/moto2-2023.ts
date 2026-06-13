import type { EventResults } from './types'

// Moto2 2023 results — 20 rounds completed (Kazakhstan was on the original schedule but cancelled)
// Sources: Wikipedia "2023 Moto2 season", per-Grand-Prix Wikipedia pages, motogp.com, crash.net,
//   motomatters.com, motorsport.com, paddock-gp.com, bikesportnews.com
// Champion: Pedro Acosta (Red Bull KTM Ajo) — youngest intermediate-class champion since Pedrosa;
//   title sealed at Sepang (Round 18) with two rounds to spare
export const moto2Results2023: Record<string, EventResults> = {
  'moto2-2023-portugal': {
    qualifying: {
      overall: { driverIds: ['salac'], teamId: 'qjmotor-gresini-moto2' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['salac'], teamId: 'qjmotor-gresini-moto2' },
        ],
      }],
    },
    race: {
      // Acosta wins the 2023 opener at Portimao
      overall: { driverIds: ['acosta'], teamId: 'red-bull-ktm-ajo' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['acosta'], teamId: 'red-bull-ktm-ajo' },
          { position: 2, driverIds: ['canet'], teamId: 'pons-wegow-los40' },
          { position: 3, driverIds: ['arbolino'], teamId: 'marc-vds-moto2' },
        ],
      }],
    },
  },
  'moto2-2023-argentina': {
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
      // Wet race reduced from 21 to 14 laps; Arbolino takes 2023's only win in the rain
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
  'moto2-2023-usa': {
    qualifying: {
      overall: { driverIds: ['vietti'], teamId: 'fantic-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['vietti'], teamId: 'fantic-racing' },
        ],
      }],
    },
    race: {
      // Acosta holds off Arbolino by 0.146s at COTA; Bendsneyder's first Moto2 podium
      overall: { driverIds: ['acosta'], teamId: 'red-bull-ktm-ajo' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['acosta'], teamId: 'red-bull-ktm-ajo' },
          { position: 2, driverIds: ['arbolino'], teamId: 'marc-vds-moto2' },
          { position: 3, driverIds: ['bendsneyder'], teamId: 'pertamina-mandalika-sag' },
        ],
      }],
    },
  },
  'moto2-2023-spain': {
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
      // Sam Lowes wins from pole at Jerez
      overall: { driverIds: ['lowes'], teamId: 'marc-vds-moto2' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['lowes'], teamId: 'marc-vds-moto2' },
          { position: 2, driverIds: ['acosta'], teamId: 'red-bull-ktm-ajo' },
          { position: 3, driverIds: ['lopez-a'], teamId: 'speed-up-racing' },
        ],
      }],
    },
  },
  'moto2-2023-france': {
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
      // Race red-flagged on lap 2 for a multi-rider accident; restarted over 14 laps. Marc VDS 1-2
      overall: { driverIds: ['arbolino'], teamId: 'marc-vds-moto2' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['arbolino'], teamId: 'marc-vds-moto2' },
          { position: 2, driverIds: ['salac'], teamId: 'qjmotor-gresini-moto2' },
          { position: 3, driverIds: ['lopez-a'], teamId: 'speed-up-racing' },
        ],
      }],
    },
  },
  'moto2-2023-italy': {
    qualifying: {
      overall: { driverIds: ['canet'], teamId: 'pons-wegow-los40' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['canet'], teamId: 'pons-wegow-los40' },
        ],
      }],
    },
    race: {
      // Acosta dominates at Mugello by 6.194s — all-Kalex podium
      overall: { driverIds: ['acosta'], teamId: 'red-bull-ktm-ajo' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['acosta'], teamId: 'red-bull-ktm-ajo' },
          { position: 2, driverIds: ['arbolino'], teamId: 'marc-vds-moto2' },
          { position: 3, driverIds: ['dixon-j'], teamId: 'aspar-moto2' },
        ],
      }],
    },
  },
  'moto2-2023-germany': {
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
      // Acosta's third win of 2023 at the Sachsenring
      overall: { driverIds: ['acosta'], teamId: 'red-bull-ktm-ajo' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['acosta'], teamId: 'red-bull-ktm-ajo' },
          { position: 2, driverIds: ['arbolino'], teamId: 'marc-vds-moto2' },
          { position: 3, driverIds: ['dixon-j'], teamId: 'aspar-moto2' },
        ],
      }],
    },
  },
  'moto2-2023-netherlands': {
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
      // Jake Dixon takes his maiden Moto2 victory at Assen
      overall: { driverIds: ['dixon-j'], teamId: 'aspar-moto2' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['dixon-j'], teamId: 'aspar-moto2' },
          { position: 2, driverIds: ['ogura'], teamId: 'honda-team-asia' },
          { position: 3, driverIds: ['acosta'], teamId: 'red-bull-ktm-ajo' },
        ],
      }],
    },
  },
  'moto2-2023-great-britain': {
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
      // Aldeguer's maiden Moto2 win at Silverstone — first non-Kalex win since 2021
      overall: { driverIds: ['aldeguer'], teamId: 'speed-up-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['aldeguer'], teamId: 'speed-up-racing' },
          { position: 2, driverIds: ['canet'], teamId: 'pons-wegow-los40' },
          { position: 3, driverIds: ['acosta'], teamId: 'red-bull-ktm-ajo' },
        ],
      }],
    },
  },
  'moto2-2023-austria': {
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
      // Vietti wins for Fantic at the Red Bull Ring — his first win since 2022
      overall: { driverIds: ['vietti'], teamId: 'fantic-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['vietti'], teamId: 'fantic-racing' },
          { position: 2, driverIds: ['acosta'], teamId: 'red-bull-ktm-ajo' },
          { position: 3, driverIds: ['ogura'], teamId: 'honda-team-asia' },
        ],
      }],
    },
  },
  'moto2-2023-catalunya': {
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
      // Jake Dixon wins from pole at Catalunya by 0.205s — his second Moto2 win
      overall: { driverIds: ['dixon-j'], teamId: 'aspar-moto2' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['dixon-j'], teamId: 'aspar-moto2' },
          { position: 2, driverIds: ['canet'], teamId: 'pons-wegow-los40' },
          { position: 3, driverIds: ['arenas'], teamId: 'red-bull-ktm-ajo' },
        ],
      }],
    },
  },
  'moto2-2023-san-marino': {
    qualifying: {
      overall: { driverIds: ['vietti'], teamId: 'fantic-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['vietti'], teamId: 'fantic-racing' },
        ],
      }],
    },
    race: {
      // Acosta wins at Misano by 6.305s, extending his title lead
      overall: { driverIds: ['acosta'], teamId: 'red-bull-ktm-ajo' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['acosta'], teamId: 'red-bull-ktm-ajo' },
          { position: 2, driverIds: ['vietti'], teamId: 'fantic-racing' },
          { position: 3, driverIds: ['lopez-a'], teamId: 'speed-up-racing' },
        ],
      }],
    },
  },
  'moto2-2023-india': {
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
      // Race red-flagged after lap-1 multi-rider crash and restarted over 12 laps. Acosta wins
      overall: { driverIds: ['acosta'], teamId: 'red-bull-ktm-ajo' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['acosta'], teamId: 'red-bull-ktm-ajo' },
          { position: 2, driverIds: ['arbolino'], teamId: 'marc-vds-moto2' },
          { position: 3, driverIds: ['roberts-j'], teamId: 'italtrans-racing' },
        ],
      }],
    },
  },
  'moto2-2023-japan': {
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
      // Chantra's second Moto2 victory at Motegi; Kalex sealed an 11th consecutive constructors' title
      overall: { driverIds: ['chantra'], teamId: 'honda-team-asia' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['chantra'], teamId: 'honda-team-asia' },
          { position: 2, driverIds: ['ogura'], teamId: 'honda-team-asia' },
          { position: 3, driverIds: ['acosta'], teamId: 'red-bull-ktm-ajo' },
        ],
      }],
    },
  },
  'moto2-2023-indonesia': {
    qualifying: {
      overall: { driverIds: ['canet'], teamId: 'pons-wegow-los40' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['canet'], teamId: 'pons-wegow-los40' },
        ],
      }],
    },
    race: {
      // Acosta wins at Mandalika; all-Spanish podium
      overall: { driverIds: ['acosta'], teamId: 'red-bull-ktm-ajo' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['acosta'], teamId: 'red-bull-ktm-ajo' },
          { position: 2, driverIds: ['canet'], teamId: 'pons-wegow-los40' },
          { position: 3, driverIds: ['aldeguer'], teamId: 'speed-up-racing' },
        ],
      }],
    },
  },
  'moto2-2023-australia': {
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
      // Race red-flagged after 9 laps in poor weather, not restarted — half points awarded
      overall: { driverIds: ['arbolino'], teamId: 'marc-vds-moto2' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['arbolino'], teamId: 'marc-vds-moto2' },
          { position: 2, driverIds: ['canet'], teamId: 'pons-wegow-los40' },
          { position: 3, driverIds: ['aldeguer'], teamId: 'speed-up-racing' },
        ],
      }],
    },
  },
  'moto2-2023-thailand': {
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
      // Aldeguer wins from pole at Buriram; Chantra on home podium
      overall: { driverIds: ['aldeguer'], teamId: 'speed-up-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['aldeguer'], teamId: 'speed-up-racing' },
          { position: 2, driverIds: ['acosta'], teamId: 'red-bull-ktm-ajo' },
          { position: 3, driverIds: ['chantra'], teamId: 'honda-team-asia' },
        ],
      }],
    },
  },
  'moto2-2023-malaysia': {
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
      // Aldeguer wins again; Acosta clinches the title with P2 — youngest Moto2 champion since Pedrosa
      overall: { driverIds: ['aldeguer'], teamId: 'speed-up-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['aldeguer'], teamId: 'speed-up-racing' },
          { position: 2, driverIds: ['acosta'], teamId: 'red-bull-ktm-ajo' },
          { position: 3, driverIds: ['ramirez-m'], teamId: 'forward' },
        ],
      }],
    },
  },
  'moto2-2023-qatar': {
    qualifying: {
      overall: { driverIds: ['roberts-j'], teamId: 'italtrans-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['roberts-j'], teamId: 'italtrans-racing' },
        ],
      }],
    },
    race: {
      // Aldeguer continues his winning streak at Lusail
      overall: { driverIds: ['aldeguer'], teamId: 'speed-up-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['aldeguer'], teamId: 'speed-up-racing' },
          { position: 2, driverIds: ['gonzalez-m'], teamId: 'correos-yamaha-vr46-moto2' },
          { position: 3, driverIds: ['canet'], teamId: 'pons-wegow-los40' },
        ],
      }],
    },
  },
  'moto2-2023-valencia': {
    qualifying: {
      overall: { driverIds: ['canet'], teamId: 'pons-wegow-los40' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['canet'], teamId: 'pons-wegow-los40' },
        ],
      }],
    },
    race: {
      // Aldeguer's fourth win in a row to close out 2023 dominantly
      overall: { driverIds: ['aldeguer'], teamId: 'speed-up-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['aldeguer'], teamId: 'speed-up-racing' },
          { position: 2, driverIds: ['canet'], teamId: 'pons-wegow-los40' },
          { position: 3, driverIds: ['lopez-a'], teamId: 'speed-up-racing' },
        ],
      }],
    },
  },
}
