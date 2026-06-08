import type { EventResults } from './types'

// Moto2 2024 results — all 20 rounds completed
// Sources: Wikipedia "2024 Moto2 World Championship", motogp.com, crash.net,
//   motomatters.com, motorsport.com, bikesportnews.com, paddock-gp.com, roadracingworld.com
// Champion: Ai Ogura (MT Helmets — MSi) — first Japanese intermediate-class world champion since
//   Daijiro Kato in 2001; title sealed with P2 at Buriram (Round 18)
export const moto2Results2024: Record<string, EventResults> = {
  'moto2-2024-qatar': {
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
      // Lopez held off Baltus by 0.055s for his maiden 2024 win
      overall: { driverIds: ['lopez-a'], teamId: 'speed-up-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['lopez-a'], teamId: 'speed-up-racing' },
          { position: 2, driverIds: ['baltus'], teamId: 'rw-racing-moto2' },
          { position: 3, driverIds: ['garcia-s'], teamId: 'mt-helmets-msi-moto2' },
        ],
      }],
    },
  },
  'moto2-2024-portugal': {
    qualifying: {
      overall: { driverIds: ['gonzalez-m'], teamId: 'qjmotor-gresini-moto2' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['gonzalez-m'], teamId: 'qjmotor-gresini-moto2' },
        ],
      }],
    },
    race: {
      // Canet's emotional first Moto2 victory at Portimao
      overall: { driverIds: ['canet'], teamId: 'fantic-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['canet'], teamId: 'fantic-racing' },
          { position: 2, driverIds: ['roberts-j'], teamId: 'american-racing-moto2' },
          { position: 3, driverIds: ['gonzalez-m'], teamId: 'qjmotor-gresini-moto2' },
        ],
      }],
    },
  },
  'moto2-2024-usa': {
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
      // Sergio Garcia's maiden Moto2 win — MT Helmets MSI's 3rd Moto2 race
      overall: { driverIds: ['garcia-s'], teamId: 'mt-helmets-msi-moto2' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['garcia-s'], teamId: 'mt-helmets-msi-moto2' },
          { position: 2, driverIds: ['roberts-j'], teamId: 'american-racing-moto2' },
          { position: 3, driverIds: ['aldeguer'], teamId: 'speed-up-racing' },
        ],
      }],
    },
  },
  'moto2-2024-spain': {
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
      // Aldeguer wins; Roberts takes championship lead, first American to lead since Hayden 2006
      overall: { driverIds: ['aldeguer'], teamId: 'speed-up-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['aldeguer'], teamId: 'speed-up-racing' },
          { position: 2, driverIds: ['roberts-j'], teamId: 'american-racing-moto2' },
          { position: 3, driverIds: ['gonzalez-m'], teamId: 'qjmotor-gresini-moto2' },
        ],
      }],
    },
  },
  'moto2-2024-france': {
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
      // Sergio Garcia dominated at Le Mans; all-Boscoscuro podium
      overall: { driverIds: ['garcia-s'], teamId: 'mt-helmets-msi-moto2' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['garcia-s'], teamId: 'mt-helmets-msi-moto2' },
          { position: 2, driverIds: ['ogura'], teamId: 'mt-helmets-msi-moto2' },
          { position: 3, driverIds: ['lopez-a'], teamId: 'speed-up-racing' },
        ],
      }],
    },
  },
  'moto2-2024-catalunya': {
    qualifying: {
      overall: { driverIds: ['garcia-s'], teamId: 'mt-helmets-msi-moto2' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['garcia-s'], teamId: 'mt-helmets-msi-moto2' },
        ],
      }],
    },
    race: {
      // MT Helmets MSI 1-2: Ogura's first win since 2022 Japan; Aldeguer crashed from the lead
      overall: { driverIds: ['ogura'], teamId: 'mt-helmets-msi-moto2' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['ogura'], teamId: 'mt-helmets-msi-moto2' },
          { position: 2, driverIds: ['garcia-s'], teamId: 'mt-helmets-msi-moto2' },
          { position: 3, driverIds: ['dixon-j'], teamId: 'aspar-moto2' },
        ],
      }],
    },
  },
  'moto2-2024-italy': {
    qualifying: {
      overall: { driverIds: ['roberts-j'], teamId: 'american-racing-moto2' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['roberts-j'], teamId: 'american-racing-moto2' },
        ],
      }],
    },
    race: {
      // Joe Roberts wins at Mugello, denying Gonzalez by 0.06s — his second career Moto2 win
      overall: { driverIds: ['roberts-j'], teamId: 'american-racing-moto2' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['roberts-j'], teamId: 'american-racing-moto2' },
          { position: 2, driverIds: ['gonzalez-m'], teamId: 'qjmotor-gresini-moto2' },
          { position: 3, driverIds: ['lopez-a'], teamId: 'speed-up-racing' },
        ],
      }],
    },
  },
  'moto2-2024-netherlands': {
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
      // Ogura's second win of the season; all-Boscoscuro podium at Assen
      overall: { driverIds: ['ogura'], teamId: 'mt-helmets-msi-moto2' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['ogura'], teamId: 'mt-helmets-msi-moto2' },
          { position: 2, driverIds: ['aldeguer'], teamId: 'speed-up-racing' },
          { position: 3, driverIds: ['garcia-s'], teamId: 'mt-helmets-msi-moto2' },
        ],
      }],
    },
  },
  'moto2-2024-germany': {
    qualifying: {
      overall: { driverIds: ['vietti'], teamId: 'red-bull-ktm-ajo' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['vietti'], teamId: 'red-bull-ktm-ajo' },
        ],
      }],
    },
    race: {
      // Aldeguer's second victory of the year at the Sachsenring
      overall: { driverIds: ['aldeguer'], teamId: 'speed-up-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['aldeguer'], teamId: 'speed-up-racing' },
          { position: 2, driverIds: ['dixon-j'], teamId: 'aspar-moto2' },
          { position: 3, driverIds: ['ogura'], teamId: 'mt-helmets-msi-moto2' },
        ],
      }],
    },
  },
  'moto2-2024-great-britain': {
    qualifying: {
      overall: { driverIds: ['ogura'], teamId: 'mt-helmets-msi-moto2' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['ogura'], teamId: 'mt-helmets-msi-moto2' },
        ],
      }],
    },
    race: {
      // Jake Dixon takes a dream home win at Silverstone, beating Canet by 0.177s
      overall: { driverIds: ['dixon-j'], teamId: 'aspar-moto2' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['dixon-j'], teamId: 'aspar-moto2' },
          { position: 2, driverIds: ['canet'], teamId: 'fantic-racing' },
          { position: 3, driverIds: ['vietti'], teamId: 'red-bull-ktm-ajo' },
        ],
      }],
    },
  },
  'moto2-2024-austria': {
    qualifying: {
      overall: { driverIds: ['vietti'], teamId: 'red-bull-ktm-ajo' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['vietti'], teamId: 'red-bull-ktm-ajo' },
        ],
      }],
    },
    race: {
      // Vietti dominates the Red Bull Ring for the second year running
      overall: { driverIds: ['vietti'], teamId: 'red-bull-ktm-ajo' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['vietti'], teamId: 'red-bull-ktm-ajo' },
          { position: 2, driverIds: ['lopez-a'], teamId: 'speed-up-racing' },
          { position: 3, driverIds: ['dixon-j'], teamId: 'aspar-moto2' },
        ],
      }],
    },
  },
  'moto2-2024-aragon': {
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
      // Dixon's second win of 2024; Oncu's first Moto2 podium as a rookie
      overall: { driverIds: ['dixon-j'], teamId: 'aspar-moto2' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['dixon-j'], teamId: 'aspar-moto2' },
          { position: 2, driverIds: ['arbolino'], teamId: 'marc-vds-moto2' },
          { position: 3, driverIds: ['oncu'], teamId: 'red-bull-ktm-ajo' },
        ],
      }],
    },
  },
  'moto2-2024-san-marino': {
    qualifying: {
      overall: { driverIds: ['arbolino'], teamId: 'marc-vds-moto2' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['arbolino'], teamId: 'marc-vds-moto2' },
        ],
      }],
    },
    race: {
      // Ogura wins to take over the championship lead
      overall: { driverIds: ['ogura'], teamId: 'mt-helmets-msi-moto2' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['ogura'], teamId: 'mt-helmets-msi-moto2' },
          { position: 2, driverIds: ['canet'], teamId: 'fantic-racing' },
          { position: 3, driverIds: ['arbolino'], teamId: 'marc-vds-moto2' },
        ],
      }],
    },
  },
  'moto2-2024-emilia-romagna': {
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
      // Vietti edges Canet by 0.029s in a photo finish at Misano
      overall: { driverIds: ['vietti'], teamId: 'red-bull-ktm-ajo' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['vietti'], teamId: 'red-bull-ktm-ajo' },
          { position: 2, driverIds: ['canet'], teamId: 'fantic-racing' },
          { position: 3, driverIds: ['arbolino'], teamId: 'marc-vds-moto2' },
        ],
      }],
    },
  },
  'moto2-2024-indonesia': {
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
      // Canet dominates Mandalika by 6.2s — his second win of the season
      overall: { driverIds: ['canet'], teamId: 'fantic-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['canet'], teamId: 'fantic-racing' },
          { position: 2, driverIds: ['ogura'], teamId: 'mt-helmets-msi-moto2' },
          { position: 3, driverIds: ['lopez-a'], teamId: 'speed-up-racing' },
        ],
      }],
    },
  },
  'moto2-2024-japan': {
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
      // Race red-flagged & shortened due to rain. Gonzalez's maiden Moto2 win on a slick gamble
      overall: { driverIds: ['gonzalez-m'], teamId: 'qjmotor-gresini-moto2' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['gonzalez-m'], teamId: 'qjmotor-gresini-moto2' },
          { position: 2, driverIds: ['ogura'], teamId: 'mt-helmets-msi-moto2' },
          { position: 3, driverIds: ['salac'], teamId: 'marc-vds-moto2' },
        ],
      }],
    },
  },
  'moto2-2024-australia': {
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
      // Aldeguer beats Canet by 0.194s on the last lap; Agius's maiden Moto2 podium
      overall: { driverIds: ['aldeguer'], teamId: 'speed-up-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['aldeguer'], teamId: 'speed-up-racing' },
          { position: 2, driverIds: ['canet'], teamId: 'fantic-racing' },
          { position: 3, driverIds: ['agius'], teamId: 'husqvarna-intact-gp' },
        ],
      }],
    },
  },
  'moto2-2024-thailand': {
    qualifying: {
      overall: { driverIds: ['ogura'], teamId: 'mt-helmets-msi-moto2' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['ogura'], teamId: 'mt-helmets-msi-moto2' },
        ],
      }],
    },
    race: {
      // Red-flagged race in worsening rain. Canet wins; Ogura clinches the title with P2
      overall: { driverIds: ['canet'], teamId: 'fantic-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['canet'], teamId: 'fantic-racing' },
          { position: 2, driverIds: ['ogura'], teamId: 'mt-helmets-msi-moto2' },
          { position: 3, driverIds: ['ramirez-m'], teamId: 'american-racing-moto2' },
        ],
      }],
    },
  },
  'moto2-2024-malaysia': {
    qualifying: {
      overall: { driverIds: ['navarro-j'], teamId: 'american-racing-moto2' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['navarro-j'], teamId: 'american-racing-moto2' },
        ],
      }],
    },
    race: {
      // Vietti wins at Sepang; veteran Navarro takes P2 as a one-off sub at American Racing;
      // Guevara on the podium for the first time in Moto2
      overall: { driverIds: ['vietti'], teamId: 'red-bull-ktm-ajo' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['vietti'], teamId: 'red-bull-ktm-ajo' },
          { position: 2, driverIds: ['navarro-j'], teamId: 'american-racing-moto2' },
          { position: 3, driverIds: ['guevara'], teamId: 'aspar-moto2' },
        ],
      }],
    },
  },
  'moto2-2024-solidarity': {
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
      // Canet's fourth win of 2024; Moreira's maiden Moto2 podium (first Brazilian podium in
      //   the intermediate class since 1973). Solidarity GP replaced Valencia after the DANA floods
      overall: { driverIds: ['canet'], teamId: 'fantic-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['canet'], teamId: 'fantic-racing' },
          { position: 2, driverIds: ['gonzalez-m'], teamId: 'qjmotor-gresini-moto2' },
          { position: 3, driverIds: ['moreira'], teamId: 'italtrans-racing' },
        ],
      }],
    },
  },
}
