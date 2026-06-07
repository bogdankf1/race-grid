import type { EventResults } from './types'

// Moto3 2025 results — all 22 rounds completed
// Sources: motorsport.com per-round results pages, motomatters.com, motogp.com,
//   crash.net, bikesportnews.com, Wikipedia "2025 Moto3 World Championship"
// Note: Malaysia podium reflects the post-race disqualification of Adrián Fernández
//   (non-homologated electronics map), which promoted David Almansa to P3
export const moto3Results2025: Record<string, EventResults> = {
  'moto3-2025-thailand': {
    qualifying: {
      // Bertelle pole on a KTM
      overall: { driverIds: ['bertelle'], teamId: 'levelup-mta' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['bertelle'], teamId: 'levelup-mta' },
        ],
      }],
    },
    race: {
      // Rueda dominant season-opener; Carpe last-corner move for P2; Fernández up from 11th
      overall: { driverIds: ['rueda-ja'], teamId: 'red-bull-ktm-ajo-moto3' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['rueda-ja'], teamId: 'red-bull-ktm-ajo-moto3' },
          { position: 2, driverIds: ['carpe'], teamId: 'red-bull-ktm-ajo-moto3' },
          { position: 3, driverIds: ['fernandez-ad'], teamId: 'leopard-racing' },
        ],
      }],
    },
  },
  'moto3-2025-argentina': {
    qualifying: {
      // Bertelle's second pole in a row
      overall: { driverIds: ['bertelle'], teamId: 'levelup-mta' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['bertelle'], teamId: 'levelup-mta' },
        ],
      }],
    },
    race: {
      // Piqueras takes the championship lead with last-lap pass on Rueda; Fernández P2
      overall: { driverIds: ['piqueras'], teamId: 'frinsa-mt-helmets-msi' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['piqueras'], teamId: 'frinsa-mt-helmets-msi' },
          { position: 2, driverIds: ['fernandez-ad'], teamId: 'leopard-racing' },
          { position: 3, driverIds: ['rueda-ja'], teamId: 'red-bull-ktm-ajo-moto3' },
        ],
      }],
    },
  },
  'moto3-2025-usa': {
    qualifying: {
      // Muñoz first pole of the season
      overall: { driverIds: ['munoz-da'], teamId: 'intact-gp-moto3' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['munoz-da'], teamId: 'intact-gp-moto3' },
        ],
      }],
    },
    race: {
      // Rueda dominates COTA by 2.4s; rookie sensation Bertelle on the podium
      overall: { driverIds: ['rueda-ja'], teamId: 'red-bull-ktm-ajo-moto3' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['rueda-ja'], teamId: 'red-bull-ktm-ajo-moto3' },
          { position: 2, driverIds: ['kelso'], teamId: 'levelup-mta' },
          { position: 3, driverIds: ['bertelle'], teamId: 'levelup-mta' },
        ],
      }],
    },
  },
  'moto3-2025-qatar': {
    qualifying: {
      // Yamanaka pole, MSi 1-3 lockout in qualifying foreshadowing the race
      overall: { driverIds: ['yamanaka-r'], teamId: 'frinsa-mt-helmets-msi' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['yamanaka-r'], teamId: 'frinsa-mt-helmets-msi' },
        ],
      }],
    },
    race: {
      // Piqueras beat Furusato by 0.009s in a photo finish; Yamanaka P3 for MSi 1-3
      overall: { driverIds: ['piqueras'], teamId: 'frinsa-mt-helmets-msi' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['piqueras'], teamId: 'frinsa-mt-helmets-msi' },
          { position: 2, driverIds: ['furusato'], teamId: 'honda-team-asia-moto3' },
          { position: 3, driverIds: ['yamanaka-r'], teamId: 'frinsa-mt-helmets-msi' },
        ],
      }],
    },
  },
  'moto3-2025-spain': {
    qualifying: {
      // Rueda's first pole of 2025 at Jerez
      overall: { driverIds: ['rueda-ja'], teamId: 'red-bull-ktm-ajo-moto3' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['rueda-ja'], teamId: 'red-bull-ktm-ajo-moto3' },
        ],
      }],
    },
    race: {
      // Rueda controlled Jerez from pole to flag
      overall: { driverIds: ['rueda-ja'], teamId: 'red-bull-ktm-ajo-moto3' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['rueda-ja'], teamId: 'red-bull-ktm-ajo-moto3' },
          { position: 2, driverIds: ['piqueras'], teamId: 'frinsa-mt-helmets-msi' },
          { position: 3, driverIds: ['kelso'], teamId: 'levelup-mta' },
        ],
      }],
    },
  },
  'moto3-2025-france': {
    qualifying: {
      // Quiles first career pole
      overall: { driverIds: ['quiles'], teamId: 'aspar-moto3' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['quiles'], teamId: 'aspar-moto3' },
        ],
      }],
    },
    race: {
      // Rueda extends championship lead at Le Mans
      overall: { driverIds: ['rueda-ja'], teamId: 'red-bull-ktm-ajo-moto3' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['rueda-ja'], teamId: 'red-bull-ktm-ajo-moto3' },
          { position: 2, driverIds: ['kelso'], teamId: 'levelup-mta' },
          { position: 3, driverIds: ['munoz-da'], teamId: 'intact-gp-moto3' },
        ],
      }],
    },
  },
  'moto3-2025-great-britain': {
    qualifying: {
      // Rueda pole at Silverstone with lap record pace
      overall: { driverIds: ['rueda-ja'], teamId: 'red-bull-ktm-ajo-moto3' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['rueda-ja'], teamId: 'red-bull-ktm-ajo-moto3' },
        ],
      }],
    },
    race: {
      // Rueda commanding Silverstone win
      overall: { driverIds: ['rueda-ja'], teamId: 'red-bull-ktm-ajo-moto3' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['rueda-ja'], teamId: 'red-bull-ktm-ajo-moto3' },
          { position: 2, driverIds: ['quiles'], teamId: 'aspar-moto3' },
          { position: 3, driverIds: ['lunetta'], teamId: 'sic58-squadra-corse' },
        ],
      }],
    },
  },
  'moto3-2025-aragon': {
    qualifying: {
      // Rueda back-to-back poles heading into Aragon
      overall: { driverIds: ['rueda-ja'], teamId: 'red-bull-ktm-ajo-moto3' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['rueda-ja'], teamId: 'red-bull-ktm-ajo-moto3' },
        ],
      }],
    },
    race: {
      // Muñoz maiden GP victory with a last-corner move on Quiles
      overall: { driverIds: ['munoz-da'], teamId: 'intact-gp-moto3' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['munoz-da'], teamId: 'intact-gp-moto3' },
          { position: 2, driverIds: ['quiles'], teamId: 'aspar-moto3' },
          { position: 3, driverIds: ['carpe'], teamId: 'red-bull-ktm-ajo-moto3' },
        ],
      }],
    },
  },
  'moto3-2025-italy': {
    qualifying: {
      // Carpe maiden pole at Mugello
      overall: { driverIds: ['carpe'], teamId: 'red-bull-ktm-ajo-moto3' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['carpe'], teamId: 'red-bull-ktm-ajo-moto3' },
        ],
      }],
    },
    race: {
      // Quiles' debut Moto3 victory by 0.006s — photo finish; Foggia first podium since 2022
      overall: { driverIds: ['quiles'], teamId: 'aspar-moto3' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['quiles'], teamId: 'aspar-moto3' },
          { position: 2, driverIds: ['carpe'], teamId: 'red-bull-ktm-ajo-moto3' },
          { position: 3, driverIds: ['foggia'], teamId: 'aspar-moto3' },
        ],
      }],
    },
  },
  'moto3-2025-netherlands': {
    qualifying: {
      // Rueda another pole at Assen
      overall: { driverIds: ['rueda-ja'], teamId: 'red-bull-ktm-ajo-moto3' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['rueda-ja'], teamId: 'red-bull-ktm-ajo-moto3' },
        ],
      }],
    },
    race: {
      // Rueda wins; Perrone maiden podium with Tech3
      overall: { driverIds: ['rueda-ja'], teamId: 'red-bull-ktm-ajo-moto3' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['rueda-ja'], teamId: 'red-bull-ktm-ajo-moto3' },
          { position: 2, driverIds: ['munoz-da'], teamId: 'intact-gp-moto3' },
          { position: 3, driverIds: ['perrone'], teamId: 'red-bull-ktm-tech3-moto3' },
        ],
      }],
    },
  },
  'moto3-2025-germany': {
    qualifying: {
      // Ogden maiden pole on the CIP KTM
      overall: { driverIds: ['ogden'], teamId: 'cip-green-power' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['ogden'], teamId: 'cip-green-power' },
        ],
      }],
    },
    race: {
      // Muñoz final-corner victory; Quiles second by 0.241s
      overall: { driverIds: ['munoz-da'], teamId: 'intact-gp-moto3' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['munoz-da'], teamId: 'intact-gp-moto3' },
          { position: 2, driverIds: ['quiles'], teamId: 'aspar-moto3' },
          { position: 3, driverIds: ['rueda-ja'], teamId: 'red-bull-ktm-ajo-moto3' },
        ],
      }],
    },
  },
  'moto3-2025-czechia': {
    qualifying: {
      // Pini maiden pole at Brno
      overall: { driverIds: ['pini'], teamId: 'intact-gp-moto3' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['pini'], teamId: 'intact-gp-moto3' },
        ],
      }],
    },
    race: {
      // Rueda dominant 3.471s win at Brno — seventh victory of the season
      overall: { driverIds: ['rueda-ja'], teamId: 'red-bull-ktm-ajo-moto3' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['rueda-ja'], teamId: 'red-bull-ktm-ajo-moto3' },
          { position: 2, driverIds: ['quiles'], teamId: 'aspar-moto3' },
          { position: 3, driverIds: ['munoz-da'], teamId: 'intact-gp-moto3' },
        ],
      }],
    },
  },
  'moto3-2025-austria': {
    qualifying: {
      // Perrone first pole at the Red Bull Ring on his Tech3 KTM
      overall: { driverIds: ['perrone'], teamId: 'red-bull-ktm-tech3-moto3' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['perrone'], teamId: 'red-bull-ktm-tech3-moto3' },
        ],
      }],
    },
    race: {
      // Piqueras wins; MSi 1-2 with Yamanaka completing the team double
      overall: { driverIds: ['piqueras'], teamId: 'frinsa-mt-helmets-msi' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['piqueras'], teamId: 'frinsa-mt-helmets-msi' },
          { position: 2, driverIds: ['yamanaka-r'], teamId: 'frinsa-mt-helmets-msi' },
          { position: 3, driverIds: ['munoz-da'], teamId: 'intact-gp-moto3' },
        ],
      }],
    },
  },
  'moto3-2025-hungary': {
    qualifying: {
      // Quiles pole at the inaugural Balaton Park Moto3 round
      overall: { driverIds: ['quiles'], teamId: 'aspar-moto3' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['quiles'], teamId: 'aspar-moto3' },
        ],
      }],
    },
    race: {
      // Quiles edges Perrone by 0.018s at Balaton Park
      overall: { driverIds: ['quiles'], teamId: 'aspar-moto3' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['quiles'], teamId: 'aspar-moto3' },
          { position: 2, driverIds: ['perrone'], teamId: 'red-bull-ktm-tech3-moto3' },
          { position: 3, driverIds: ['munoz-da'], teamId: 'intact-gp-moto3' },
        ],
      }],
    },
  },
  'moto3-2025-catalunya': {
    qualifying: {
      // Almansa maiden pole at Catalunya
      overall: { driverIds: ['almansa'], teamId: 'leopard-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['almansa'], teamId: 'leopard-racing' },
        ],
      }],
    },
    race: {
      // Piqueras wins on home soil; Rueda P2 extends championship lead
      overall: { driverIds: ['piqueras'], teamId: 'frinsa-mt-helmets-msi' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['piqueras'], teamId: 'frinsa-mt-helmets-msi' },
          { position: 2, driverIds: ['rueda-ja'], teamId: 'red-bull-ktm-ajo-moto3' },
          { position: 3, driverIds: ['furusato'], teamId: 'honda-team-asia-moto3' },
        ],
      }],
    },
  },
  'moto3-2025-san-marino': {
    qualifying: {
      // Perrone second pole of the season at Misano
      overall: { driverIds: ['perrone'], teamId: 'red-bull-ktm-tech3-moto3' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['perrone'], teamId: 'red-bull-ktm-tech3-moto3' },
        ],
      }],
    },
    race: {
      // Rueda back to the top step at Misano
      overall: { driverIds: ['rueda-ja'], teamId: 'red-bull-ktm-ajo-moto3' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['rueda-ja'], teamId: 'red-bull-ktm-ajo-moto3' },
          { position: 2, driverIds: ['quiles'], teamId: 'aspar-moto3' },
          { position: 3, driverIds: ['fernandez-ad'], teamId: 'leopard-racing' },
        ],
      }],
    },
  },
  'moto3-2025-japan': {
    qualifying: {
      // Rueda pole at Motegi
      overall: { driverIds: ['rueda-ja'], teamId: 'red-bull-ktm-ajo-moto3' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['rueda-ja'], teamId: 'red-bull-ktm-ajo-moto3' },
        ],
      }],
    },
    race: {
      // Muñoz takes Motegi win
      overall: { driverIds: ['munoz-da'], teamId: 'intact-gp-moto3' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['munoz-da'], teamId: 'intact-gp-moto3' },
          { position: 2, driverIds: ['rueda-ja'], teamId: 'red-bull-ktm-ajo-moto3' },
          { position: 3, driverIds: ['quiles'], teamId: 'aspar-moto3' },
        ],
      }],
    },
  },
  'moto3-2025-indonesia': {
    qualifying: {
      // Fernández maiden Moto3 pole at Mandalika
      overall: { driverIds: ['fernandez-ad'], teamId: 'leopard-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['fernandez-ad'], teamId: 'leopard-racing' },
        ],
      }],
    },
    race: {
      // Rueda wins to clinch the 2025 Moto3 title with 4 races to spare;
      // red-flagged race; Quiles and Fernández received post-race penalties;
      // Pini debut podium with Intact GP
      overall: { driverIds: ['rueda-ja'], teamId: 'red-bull-ktm-ajo-moto3' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['rueda-ja'], teamId: 'red-bull-ktm-ajo-moto3' },
          { position: 2, driverIds: ['lunetta'], teamId: 'sic58-squadra-corse' },
          { position: 3, driverIds: ['pini'], teamId: 'intact-gp-moto3' },
        ],
      }],
    },
  },
  'moto3-2025-australia': {
    qualifying: {
      // Kelso pole at his home GP
      overall: { driverIds: ['kelso'], teamId: 'levelup-mta' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['kelso'], teamId: 'levelup-mta' },
        ],
      }],
    },
    race: {
      // Newly crowned champion Rueda wins at Phillip Island
      overall: { driverIds: ['rueda-ja'], teamId: 'red-bull-ktm-ajo-moto3' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['rueda-ja'], teamId: 'red-bull-ktm-ajo-moto3' },
          { position: 2, driverIds: ['kelso'], teamId: 'levelup-mta' },
          { position: 3, driverIds: ['carpe'], teamId: 'red-bull-ktm-ajo-moto3' },
        ],
      }],
    },
  },
  'moto3-2025-malaysia': {
    qualifying: {
      // Almansa second pole of the season at Sepang
      overall: { driverIds: ['almansa'], teamId: 'leopard-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['almansa'], teamId: 'leopard-racing' },
        ],
      }],
    },
    race: {
      // Furusato's maiden Moto3 victory and Honda's first 2025 win;
      // Almansa promoted to P3 after Fernández's DQ (non-homologated map)
      overall: { driverIds: ['furusato'], teamId: 'honda-team-asia-moto3' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['furusato'], teamId: 'honda-team-asia-moto3' },
          { position: 2, driverIds: ['piqueras'], teamId: 'frinsa-mt-helmets-msi' },
          { position: 3, driverIds: ['almansa'], teamId: 'leopard-racing' },
        ],
      }],
    },
  },
  'moto3-2025-portugal': {
    qualifying: {
      // Kelso second pole of the season at Portimão
      overall: { driverIds: ['kelso'], teamId: 'levelup-mta' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['kelso'], teamId: 'levelup-mta' },
        ],
      }],
    },
    race: {
      // Quiles wins at Portimão ahead of Piqueras and Furusato
      overall: { driverIds: ['quiles'], teamId: 'aspar-moto3' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['quiles'], teamId: 'aspar-moto3' },
          { position: 2, driverIds: ['piqueras'], teamId: 'frinsa-mt-helmets-msi' },
          { position: 3, driverIds: ['furusato'], teamId: 'honda-team-asia-moto3' },
        ],
      }],
    },
  },
  'moto3-2025-valencia': {
    qualifying: {
      // Fernández pole at Valencia
      overall: { driverIds: ['fernandez-ad'], teamId: 'leopard-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['fernandez-ad'], teamId: 'leopard-racing' },
        ],
      }],
    },
    race: {
      // Fernández converts pole to maiden Moto3 victory in the season finale;
      // Furusato demoted to P3 for last-lap track limits, promoting Carpe to P2
      overall: { driverIds: ['fernandez-ad'], teamId: 'leopard-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['fernandez-ad'], teamId: 'leopard-racing' },
          { position: 2, driverIds: ['carpe'], teamId: 'red-bull-ktm-ajo-moto3' },
          { position: 3, driverIds: ['furusato'], teamId: 'honda-team-asia-moto3' },
        ],
      }],
    },
  },
}
