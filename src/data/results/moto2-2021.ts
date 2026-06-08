import type { EventResults } from './types'

// Moto2 2021 results — all 18 rounds completed
// Sources: Wikipedia "2021 Moto2 season", per-Grand-Prix Wikipedia pages, motogp.com, crash.net,
//   motomatters.com, motorsport.com, speedcafe.com
// Champion: Remy Gardner (Red Bull KTM Ajo) — clinched at Valencia (Round 18) by 4 points over
//   teammate Raúl Fernández despite Fernández winning more races
export const moto2Results2021: Record<string, EventResults> = {
  'moto2-2021-qatar': {
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
      // Lowes wins season opener at Losail
      overall: { driverIds: ['lowes'], teamId: 'marc-vds-moto2' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['lowes'], teamId: 'marc-vds-moto2' },
          { position: 2, driverIds: ['gardner-r'], teamId: 'red-bull-ktm-ajo' },
          { position: 3, driverIds: ['di-giannantonio'], teamId: 'gresini-moto2' },
        ],
      }],
    },
  },
  'moto2-2021-doha': {
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
      // Lowes back-to-back wins at Losail. Raúl Fernández's first Moto2 podium
      overall: { driverIds: ['lowes'], teamId: 'marc-vds-moto2' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['lowes'], teamId: 'marc-vds-moto2' },
          { position: 2, driverIds: ['fernandez-r'], teamId: 'red-bull-ktm-ajo' },
          { position: 3, driverIds: ['bezzecchi'], teamId: 'sky-vr46-moto2' },
        ],
      }],
    },
  },
  'moto2-2021-portugal': {
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
      // Raúl Fernández's maiden Moto2 win on his second-ever Moto2 weekend at Portimao
      overall: { driverIds: ['fernandez-r'], teamId: 'red-bull-ktm-ajo' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['fernandez-r'], teamId: 'red-bull-ktm-ajo' },
          { position: 2, driverIds: ['canet'], teamId: 'aspar-moto2' },
          { position: 3, driverIds: ['di-giannantonio'], teamId: 'gresini-moto2' },
        ],
      }],
    },
  },
  'moto2-2021-spain': {
    qualifying: {
      overall: { driverIds: ['gardner-r'], teamId: 'red-bull-ktm-ajo' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['gardner-r'], teamId: 'red-bull-ktm-ajo' },
        ],
      }],
    },
    race: {
      // Di Giannantonio's first Moto2 victory at Jerez
      overall: { driverIds: ['di-giannantonio'], teamId: 'gresini-moto2' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['di-giannantonio'], teamId: 'gresini-moto2' },
          { position: 2, driverIds: ['gardner-r'], teamId: 'red-bull-ktm-ajo' },
          { position: 3, driverIds: ['bezzecchi'], teamId: 'sky-vr46-moto2' },
        ],
      }],
    },
  },
  'moto2-2021-france': {
    qualifying: {
      overall: { driverIds: ['fernandez-r'], teamId: 'red-bull-ktm-ajo' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['fernandez-r'], teamId: 'red-bull-ktm-ajo' },
        ],
      }],
    },
    race: {
      // Raúl Fernández holds off teammate Gardner at Le Mans
      overall: { driverIds: ['fernandez-r'], teamId: 'red-bull-ktm-ajo' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['fernandez-r'], teamId: 'red-bull-ktm-ajo' },
          { position: 2, driverIds: ['gardner-r'], teamId: 'red-bull-ktm-ajo' },
          { position: 3, driverIds: ['bezzecchi'], teamId: 'sky-vr46-moto2' },
        ],
      }],
    },
  },
  'moto2-2021-italy': {
    qualifying: {
      overall: { driverIds: ['fernandez-r'], teamId: 'red-bull-ktm-ajo' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['fernandez-r'], teamId: 'red-bull-ktm-ajo' },
        ],
      }],
    },
    race: {
      // Gardner's first Moto2 win at Mugello
      overall: { driverIds: ['gardner-r'], teamId: 'red-bull-ktm-ajo' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['gardner-r'], teamId: 'red-bull-ktm-ajo' },
          { position: 2, driverIds: ['lowes'], teamId: 'marc-vds-moto2' },
          { position: 3, driverIds: ['fernandez-r'], teamId: 'red-bull-ktm-ajo' },
        ],
      }],
    },
  },
  'moto2-2021-catalunya': {
    qualifying: {
      overall: { driverIds: ['gardner-r'], teamId: 'red-bull-ktm-ajo' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['gardner-r'], teamId: 'red-bull-ktm-ajo' },
        ],
      }],
    },
    race: {
      // Gardner's second Moto2 win at Catalunya
      overall: { driverIds: ['gardner-r'], teamId: 'red-bull-ktm-ajo' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['gardner-r'], teamId: 'red-bull-ktm-ajo' },
          { position: 2, driverIds: ['fernandez-r'], teamId: 'red-bull-ktm-ajo' },
          { position: 3, driverIds: ['bezzecchi'], teamId: 'sky-vr46-moto2' },
        ],
      }],
    },
  },
  'moto2-2021-germany': {
    qualifying: {
      overall: { driverIds: ['fernandez-r'], teamId: 'red-bull-ktm-ajo' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['fernandez-r'], teamId: 'red-bull-ktm-ajo' },
        ],
      }],
    },
    race: {
      // Gardner takes a hat-trick of wins at the Sachsenring
      overall: { driverIds: ['gardner-r'], teamId: 'red-bull-ktm-ajo' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['gardner-r'], teamId: 'red-bull-ktm-ajo' },
          { position: 2, driverIds: ['fernandez-r'], teamId: 'red-bull-ktm-ajo' },
          { position: 3, driverIds: ['bezzecchi'], teamId: 'sky-vr46-moto2' },
        ],
      }],
    },
  },
  'moto2-2021-netherlands': {
    qualifying: {
      overall: { driverIds: ['fernandez-r'], teamId: 'red-bull-ktm-ajo' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['fernandez-r'], teamId: 'red-bull-ktm-ajo' },
        ],
      }],
    },
    race: {
      // Raúl Fernández wins at Assen; Augusto Fernández podium for Marc VDS
      overall: { driverIds: ['fernandez-r'], teamId: 'red-bull-ktm-ajo' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['fernandez-r'], teamId: 'red-bull-ktm-ajo' },
          { position: 2, driverIds: ['gardner-r'], teamId: 'red-bull-ktm-ajo' },
          { position: 3, driverIds: ['fernandez-a'], teamId: 'marc-vds-moto2' },
        ],
      }],
    },
  },
  'moto2-2021-styria': {
    qualifying: {
      overall: { driverIds: ['gardner-r'], teamId: 'red-bull-ktm-ajo' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['gardner-r'], teamId: 'red-bull-ktm-ajo' },
        ],
      }],
    },
    race: {
      // Bezzecchi takes his maiden Moto2 victory at the Red Bull Ring
      overall: { driverIds: ['bezzecchi'], teamId: 'sky-vr46-moto2' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['bezzecchi'], teamId: 'sky-vr46-moto2' },
          { position: 2, driverIds: ['gardner-r'], teamId: 'red-bull-ktm-ajo' },
          { position: 3, driverIds: ['schrotter'], teamId: 'intact-gp' },
        ],
      }],
    },
  },
  'moto2-2021-austria': {
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
      // Raúl Fernández wins; Chantra's first Moto2 podium
      overall: { driverIds: ['fernandez-r'], teamId: 'red-bull-ktm-ajo' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['fernandez-r'], teamId: 'red-bull-ktm-ajo' },
          { position: 2, driverIds: ['chantra'], teamId: 'honda-team-asia' },
          { position: 3, driverIds: ['schrotter'], teamId: 'intact-gp' },
        ],
      }],
    },
  },
  'moto2-2021-great-britain': {
    qualifying: {
      overall: { driverIds: ['bezzecchi'], teamId: 'sky-vr46-moto2' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['bezzecchi'], teamId: 'sky-vr46-moto2' },
        ],
      }],
    },
    race: {
      // Gardner wins at Silverstone; Navarro's first Moto2 podium of the year
      overall: { driverIds: ['gardner-r'], teamId: 'red-bull-ktm-ajo' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['gardner-r'], teamId: 'red-bull-ktm-ajo' },
          { position: 2, driverIds: ['navarro-j'], teamId: 'speed-up-racing' },
          { position: 3, driverIds: ['bezzecchi'], teamId: 'sky-vr46-moto2' },
        ],
      }],
    },
  },
  'moto2-2021-aragon': {
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
      // Raúl Fernández wins from injury — 5th win as a rookie, equal-Marc Marquez record
      overall: { driverIds: ['fernandez-r'], teamId: 'red-bull-ktm-ajo' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['fernandez-r'], teamId: 'red-bull-ktm-ajo' },
          { position: 2, driverIds: ['gardner-r'], teamId: 'red-bull-ktm-ajo' },
          { position: 3, driverIds: ['fernandez-a'], teamId: 'marc-vds-moto2' },
        ],
      }],
    },
  },
  'moto2-2021-san-marino': {
    qualifying: {
      overall: { driverIds: ['fernandez-r'], teamId: 'red-bull-ktm-ajo' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['fernandez-r'], teamId: 'red-bull-ktm-ajo' },
        ],
      }],
    },
    race: {
      // Raúl Fernández's 6th win of the season at Misano
      overall: { driverIds: ['fernandez-r'], teamId: 'red-bull-ktm-ajo' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['fernandez-r'], teamId: 'red-bull-ktm-ajo' },
          { position: 2, driverIds: ['gardner-r'], teamId: 'red-bull-ktm-ajo' },
          { position: 3, driverIds: ['canet'], teamId: 'aspar-moto2' },
        ],
      }],
    },
  },
  'moto2-2021-usa': {
    qualifying: {
      overall: { driverIds: ['fernandez-r'], teamId: 'red-bull-ktm-ajo' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['fernandez-r'], teamId: 'red-bull-ktm-ajo' },
        ],
      }],
    },
    race: {
      // Raúl Fernández wins at COTA as Gardner crashes; 7th win of the season
      overall: { driverIds: ['fernandez-r'], teamId: 'red-bull-ktm-ajo' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['fernandez-r'], teamId: 'red-bull-ktm-ajo' },
          { position: 2, driverIds: ['di-giannantonio'], teamId: 'gresini-moto2' },
          { position: 3, driverIds: ['bezzecchi'], teamId: 'sky-vr46-moto2' },
        ],
      }],
    },
  },
  'moto2-2021-emilia-romagna': {
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
      // Lowes wins at Misano in dramatic title-twist race; Raúl Fernández crashes from the lead
      overall: { driverIds: ['lowes'], teamId: 'marc-vds-moto2' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['lowes'], teamId: 'marc-vds-moto2' },
          { position: 2, driverIds: ['fernandez-a'], teamId: 'marc-vds-moto2' },
          { position: 3, driverIds: ['canet'], teamId: 'aspar-moto2' },
        ],
      }],
    },
  },
  'moto2-2021-algarve': {
    qualifying: {
      overall: { driverIds: ['fernandez-r'], teamId: 'red-bull-ktm-ajo' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['fernandez-r'], teamId: 'red-bull-ktm-ajo' },
        ],
      }],
    },
    race: {
      // Gardner wins at Portimao to close in on title; Lowes 3rd
      overall: { driverIds: ['gardner-r'], teamId: 'red-bull-ktm-ajo' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['gardner-r'], teamId: 'red-bull-ktm-ajo' },
          { position: 2, driverIds: ['fernandez-r'], teamId: 'red-bull-ktm-ajo' },
          { position: 3, driverIds: ['lowes'], teamId: 'marc-vds-moto2' },
        ],
      }],
    },
  },
  'moto2-2021-valencia': {
    qualifying: {
      overall: { driverIds: ['corsi'], teamId: 'mv-agusta-forward' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['corsi'], teamId: 'mv-agusta-forward' },
        ],
      }],
    },
    race: {
      // Raúl Fernández wins title decider; Gardner P10 to seal the championship by 4 points
      // Race red-flagged early after a multi-rider crash, restarted over 16 laps
      overall: { driverIds: ['fernandez-r'], teamId: 'red-bull-ktm-ajo' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['fernandez-r'], teamId: 'red-bull-ktm-ajo' },
          { position: 2, driverIds: ['di-giannantonio'], teamId: 'gresini-moto2' },
          { position: 3, driverIds: ['fernandez-a'], teamId: 'marc-vds-moto2' },
        ],
      }],
    },
  },
}
