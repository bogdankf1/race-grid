import type { EventResults } from './types'

// Moto2 2025 results — all 22 rounds completed
// Sources: Wikipedia "2025 Moto2 World Championship", motogp.com, crash.net,
//   motomatters.com, motorsport.com, bikesportnews.com, roadracingworld.com
export const moto2Results2025: Record<string, EventResults> = {
  'moto2-2025-thailand': {
    qualifying: {
      overall: { driverIds: ['gonzalez-m'], teamId: 'intact-gp' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['gonzalez-m'], teamId: 'intact-gp' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['gonzalez-m'], teamId: 'intact-gp' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['gonzalez-m'], teamId: 'intact-gp' },
          { position: 2, driverIds: ['canet'], teamId: 'fantic-racing' },
          { position: 3, driverIds: ['agius'], teamId: 'intact-gp' },
        ],
      }],
    },
  },
  'moto2-2025-argentina': {
    qualifying: {
      overall: { driverIds: ['gonzalez-m'], teamId: 'intact-gp' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['gonzalez-m'], teamId: 'intact-gp' },
        ],
      }],
    },
    race: {
      // Jake Dixon's first win with Marc VDS / Boscoscuro
      overall: { driverIds: ['dixon-j'], teamId: 'marc-vds-moto2' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['dixon-j'], teamId: 'marc-vds-moto2' },
          { position: 2, driverIds: ['gonzalez-m'], teamId: 'intact-gp' },
          { position: 3, driverIds: ['vietti'], teamId: 'speedrs-team' },
        ],
      }],
    },
  },
  'moto2-2025-usa': {
    qualifying: {
      overall: { driverIds: ['dixon-j'], teamId: 'marc-vds-moto2' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['dixon-j'], teamId: 'marc-vds-moto2' },
        ],
      }],
    },
    race: {
      // Wet race; Dixon dominated lights to flag
      overall: { driverIds: ['dixon-j'], teamId: 'marc-vds-moto2' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['dixon-j'], teamId: 'marc-vds-moto2' },
          { position: 2, driverIds: ['arbolino'], teamId: 'pramac-yamaha-moto2' },
          { position: 3, driverIds: ['lopez-a'], teamId: 'speedrs-team' },
        ],
      }],
    },
  },
  'moto2-2025-qatar': {
    qualifying: {
      overall: { driverIds: ['gonzalez-m'], teamId: 'intact-gp' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['gonzalez-m'], teamId: 'intact-gp' },
        ],
      }],
    },
    race: {
      // Canet's comeback victory; first win of 2025
      overall: { driverIds: ['canet'], teamId: 'fantic-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['canet'], teamId: 'fantic-racing' },
          { position: 2, driverIds: ['oncu'], teamId: 'red-bull-ktm-ajo' },
          { position: 3, driverIds: ['gonzalez-m'], teamId: 'intact-gp' },
        ],
      }],
    },
  },
  'moto2-2025-spain': {
    qualifying: {
      overall: { driverIds: ['gonzalez-m'], teamId: 'intact-gp' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['gonzalez-m'], teamId: 'intact-gp' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['gonzalez-m'], teamId: 'intact-gp' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['gonzalez-m'], teamId: 'intact-gp' },
          { position: 2, driverIds: ['baltus'], teamId: 'fantic-racing' },
          { position: 3, driverIds: ['agius'], teamId: 'intact-gp' },
        ],
      }],
    },
  },
  'moto2-2025-france': {
    qualifying: {
      overall: { driverIds: ['gonzalez-m'], teamId: 'intact-gp' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['gonzalez-m'], teamId: 'intact-gp' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['gonzalez-m'], teamId: 'intact-gp' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['gonzalez-m'], teamId: 'intact-gp' },
          { position: 2, driverIds: ['baltus'], teamId: 'fantic-racing' },
          { position: 3, driverIds: ['canet'], teamId: 'fantic-racing' },
        ],
      }],
    },
  },
  'moto2-2025-great-britain': {
    qualifying: {
      overall: { driverIds: ['canet'], teamId: 'fantic-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['canet'], teamId: 'fantic-racing' },
        ],
      }],
    },
    race: {
      // Agius's maiden Moto2 win after last-lap battle
      overall: { driverIds: ['agius'], teamId: 'intact-gp' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['agius'], teamId: 'intact-gp' },
          { position: 2, driverIds: ['moreira'], teamId: 'italtrans-racing' },
          { position: 3, driverIds: ['alonso-d'], teamId: 'aspar-moto2' },
        ],
      }],
    },
  },
  'moto2-2025-aragon': {
    qualifying: {
      overall: { driverIds: ['moreira'], teamId: 'italtrans-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['moreira'], teamId: 'italtrans-racing' },
        ],
      }],
    },
    race: {
      // Closest finish in Moto2 history: Oncu over Moreira by 0.003s — first Turkish Moto2 winner
      overall: { driverIds: ['oncu'], teamId: 'red-bull-ktm-ajo' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['oncu'], teamId: 'red-bull-ktm-ajo' },
          { position: 2, driverIds: ['moreira'], teamId: 'italtrans-racing' },
          { position: 3, driverIds: ['baltus'], teamId: 'fantic-racing' },
        ],
      }],
    },
  },
  'moto2-2025-italy': {
    qualifying: {
      overall: { driverIds: ['moreira'], teamId: 'italtrans-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['moreira'], teamId: 'italtrans-racing' },
        ],
      }],
    },
    race: {
      overall: { driverIds: ['gonzalez-m'], teamId: 'intact-gp' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['gonzalez-m'], teamId: 'intact-gp' },
          { position: 2, driverIds: ['arenas'], teamId: 'gresini-moto2' },
          { position: 3, driverIds: ['canet'], teamId: 'fantic-racing' },
        ],
      }],
    },
  },
  'moto2-2025-netherlands': {
    qualifying: {
      overall: { driverIds: ['moreira'], teamId: 'italtrans-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['moreira'], teamId: 'italtrans-racing' },
        ],
      }],
    },
    race: {
      // Moreira's maiden Moto2 win — first ever for a Brazilian in the intermediate class
      overall: { driverIds: ['moreira'], teamId: 'italtrans-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['moreira'], teamId: 'italtrans-racing' },
          { position: 2, driverIds: ['canet'], teamId: 'fantic-racing' },
          { position: 3, driverIds: ['gonzalez-m'], teamId: 'intact-gp' },
        ],
      }],
    },
  },
  'moto2-2025-germany': {
    qualifying: {
      overall: { driverIds: ['dixon-j'], teamId: 'marc-vds-moto2' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['dixon-j'], teamId: 'marc-vds-moto2' },
        ],
      }],
    },
    race: {
      // Red-flagged race ended on lap 21; classification from lap 20. Oncu's second win
      overall: { driverIds: ['oncu'], teamId: 'red-bull-ktm-ajo' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['oncu'], teamId: 'red-bull-ktm-ajo' },
          { position: 2, driverIds: ['baltus'], teamId: 'fantic-racing' },
          { position: 3, driverIds: ['dixon-j'], teamId: 'marc-vds-moto2' },
        ],
      }],
    },
  },
  'moto2-2025-czechia': {
    qualifying: {
      overall: { driverIds: ['baltus'], teamId: 'fantic-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['baltus'], teamId: 'fantic-racing' },
        ],
      }],
    },
    race: {
      // Joe Roberts's first win since 2024 Mugello
      overall: { driverIds: ['roberts-j'], teamId: 'american-racing-moto2' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['roberts-j'], teamId: 'american-racing-moto2' },
          { position: 2, driverIds: ['baltus'], teamId: 'fantic-racing' },
          { position: 3, driverIds: ['gonzalez-m'], teamId: 'intact-gp' },
        ],
      }],
    },
  },
  'moto2-2025-austria': {
    qualifying: {
      overall: { driverIds: ['gonzalez-m'], teamId: 'intact-gp' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['gonzalez-m'], teamId: 'intact-gp' },
        ],
      }],
    },
    race: {
      // Moreira's second win; Holgado's first Moto2 podium as a rookie
      overall: { driverIds: ['moreira'], teamId: 'italtrans-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['moreira'], teamId: 'italtrans-racing' },
          { position: 2, driverIds: ['holgado'], teamId: 'aspar-moto2' },
          { position: 3, driverIds: ['vietti'], teamId: 'speedrs-team' },
        ],
      }],
    },
  },
  'moto2-2025-hungary': {
    qualifying: {
      overall: { driverIds: ['moreira'], teamId: 'italtrans-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['moreira'], teamId: 'italtrans-racing' },
        ],
      }],
    },
    race: {
      // Alonso's maiden Moto2 win — first ever for a Colombian in the intermediate class
      overall: { driverIds: ['alonso-d'], teamId: 'aspar-moto2' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['alonso-d'], teamId: 'aspar-moto2' },
          { position: 2, driverIds: ['moreira'], teamId: 'italtrans-racing' },
          { position: 3, driverIds: ['gonzalez-m'], teamId: 'intact-gp' },
        ],
      }],
    },
  },
  'moto2-2025-catalunya': {
    qualifying: {
      overall: { driverIds: ['holgado'], teamId: 'aspar-moto2' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['holgado'], teamId: 'aspar-moto2' },
        ],
      }],
    },
    race: {
      // Holgado's maiden Moto2 win (lights-to-flag); Munoz subbed for injured Oncu (first podium)
      overall: { driverIds: ['holgado'], teamId: 'aspar-moto2' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['holgado'], teamId: 'aspar-moto2' },
          { position: 2, driverIds: ['dixon-j'], teamId: 'marc-vds-moto2' },
          { position: 3, driverIds: ['munoz-d'], teamId: 'red-bull-ktm-ajo' },
        ],
      }],
    },
  },
  'moto2-2025-san-marino': {
    qualifying: {
      overall: { driverIds: ['holgado'], teamId: 'aspar-moto2' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['holgado'], teamId: 'aspar-moto2' },
        ],
      }],
    },
    race: {
      // Vietti's first win of 2025; second consecutive Misano victory
      overall: { driverIds: ['vietti'], teamId: 'speedrs-team' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['vietti'], teamId: 'speedrs-team' },
          { position: 2, driverIds: ['baltus'], teamId: 'fantic-racing' },
          { position: 3, driverIds: ['holgado'], teamId: 'aspar-moto2' },
        ],
      }],
    },
  },
  'moto2-2025-japan': {
    qualifying: {
      overall: { driverIds: ['gonzalez-m'], teamId: 'intact-gp' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['gonzalez-m'], teamId: 'intact-gp' },
        ],
      }],
    },
    race: {
      // Holgado's second win — lights-to-flag dominance at Motegi
      overall: { driverIds: ['holgado'], teamId: 'aspar-moto2' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['holgado'], teamId: 'aspar-moto2' },
          { position: 2, driverIds: ['dixon-j'], teamId: 'marc-vds-moto2' },
          { position: 3, driverIds: ['moreira'], teamId: 'italtrans-racing' },
        ],
      }],
    },
  },
  'moto2-2025-indonesia': {
    qualifying: {
      overall: { driverIds: ['moreira'], teamId: 'italtrans-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['moreira'], teamId: 'italtrans-racing' },
        ],
      }],
    },
    race: {
      // Moreira dominated; Gonzalez was disqualified post-race for non-homologated software,
      // promoting Guevara to P2 and Canet to P3
      overall: { driverIds: ['moreira'], teamId: 'italtrans-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['moreira'], teamId: 'italtrans-racing' },
          { position: 2, driverIds: ['guevara'], teamId: 'pramac-yamaha-moto2' },
          { position: 3, driverIds: ['canet'], teamId: 'fantic-racing' },
        ],
      }],
    },
  },
  'moto2-2025-australia': {
    qualifying: {
      overall: { driverIds: ['moreira'], teamId: 'italtrans-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['moreira'], teamId: 'italtrans-racing' },
        ],
      }],
    },
    race: {
      // Agius — first Australian Moto2 winner at Phillip Island
      overall: { driverIds: ['agius'], teamId: 'intact-gp' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['agius'], teamId: 'intact-gp' },
          { position: 2, driverIds: ['alonso-d'], teamId: 'aspar-moto2' },
          { position: 3, driverIds: ['moreira'], teamId: 'italtrans-racing' },
        ],
      }],
    },
  },
  'moto2-2025-malaysia': {
    qualifying: {
      overall: { driverIds: ['holgado'], teamId: 'aspar-moto2' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['holgado'], teamId: 'aspar-moto2' },
        ],
      }],
    },
    race: {
      // Red flag after 2 laps; restarted as 11-lap sprint. Gonzalez crashed late;
      // Moreira took the title lead for the first time
      overall: { driverIds: ['dixon-j'], teamId: 'marc-vds-moto2' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['dixon-j'], teamId: 'marc-vds-moto2' },
          { position: 2, driverIds: ['alonso-d'], teamId: 'aspar-moto2' },
          { position: 3, driverIds: ['baltus'], teamId: 'fantic-racing' },
        ],
      }],
    },
  },
  'moto2-2025-portugal': {
    qualifying: {
      overall: { driverIds: ['moreira'], teamId: 'italtrans-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['moreira'], teamId: 'italtrans-racing' },
        ],
      }],
    },
    race: {
      // Moreira won by 0.090s; extended title lead to 24 points before Valencia
      overall: { driverIds: ['moreira'], teamId: 'italtrans-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['moreira'], teamId: 'italtrans-racing' },
          { position: 2, driverIds: ['veijer'], teamId: 'red-bull-ktm-ajo' },
          { position: 3, driverIds: ['alonso-d'], teamId: 'aspar-moto2' },
        ],
      }],
    },
  },
  'moto2-2025-valencia': {
    qualifying: {
      overall: { driverIds: ['holgado'], teamId: 'aspar-moto2' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['holgado'], teamId: 'aspar-moto2' },
        ],
      }],
    },
    race: {
      // Guevara's maiden Moto2 win; Ortola's first Moto2 podium.
      // Moreira clinched the world title with P11, becoming first Brazilian motorcycle GP champion
      overall: { driverIds: ['guevara'], teamId: 'pramac-yamaha-moto2' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['guevara'], teamId: 'pramac-yamaha-moto2' },
          { position: 2, driverIds: ['holgado'], teamId: 'aspar-moto2' },
          { position: 3, driverIds: ['ortola'], teamId: 'qjmotor-msi' },
        ],
      }],
    },
  },
}
