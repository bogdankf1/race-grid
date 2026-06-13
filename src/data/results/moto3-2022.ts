import type { EventResults } from './types'

// Moto3 2022 results — all 20 rounds completed
// Sources: per-Grand-Prix Wikipedia pages, crash.net, motorsport.com, motogp.com,
//   bikesportnews.com race reports
// Verification date: 2026-06-08
// Champion: Izan Guevara (Gaviota GasGas Aspar Team) — clinched at Australia (R18)
//   with two rounds to spare, the first World Championship for the GasGas brand;
//   Aspar also took its first Moto3 Teams' title in the same race
// Note: 2022 Italian GP — Guevara crossed the line first but received a 1-position
//   penalty for exceeding track limits on the final lap, promoting Sergio García
//   to the win; Suzuki P3
// Note: 2022 Qatar pole-sitter Izan Guevara started from the back of the grid
//   after a penalty for irresponsible riding in qualifying
export const moto3Results2022: Record<string, EventResults> = {
  'moto3-2022-qatar': {
    qualifying: {
      // Guevara pole, then demoted to back of grid for irresponsible riding
      overall: { driverIds: ['guevara'], teamId: 'gaviota-gasgas-aspar' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['guevara'], teamId: 'gaviota-gasgas-aspar' },
        ],
      }],
    },
    race: {
      // Migno wins the season opener for Rivacold Snipers — first win since 2017;
      //   García P2 maiden runner-up of 2022, Toba P3
      overall: { driverIds: ['migno'], teamId: 'rivacold-snipers' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['migno'], teamId: 'rivacold-snipers' },
          { position: 2, driverIds: ['garcia-s'], teamId: 'gaviota-gasgas-aspar' },
          { position: 3, driverIds: ['toba'], teamId: 'red-bull-ktm-tech3-moto3' },
        ],
      }],
    },
  },
  'moto3-2022-indonesia': {
    qualifying: {
      // Tatay maiden Moto3 pole for CFMoto Racing PrüstelGP — first pole for CFMoto
      overall: { driverIds: ['tatay'], teamId: 'cfmoto-racing-prustelgp' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['tatay'], teamId: 'cfmoto-racing-prustelgp' },
        ],
      }],
    },
    race: {
      // Foggia wins the inaugural Mandalika Moto3 race; Guevara P2, Tatay P3
      //   — first podium for CFMoto in Moto3
      overall: { driverIds: ['foggia'], teamId: 'leopard-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['foggia'], teamId: 'leopard-racing' },
          { position: 2, driverIds: ['guevara'], teamId: 'gaviota-gasgas-aspar' },
          { position: 3, driverIds: ['tatay'], teamId: 'cfmoto-racing-prustelgp' },
        ],
      }],
    },
  },
  'moto3-2022-argentina': {
    qualifying: {
      // Sergio García pole at Termas de Río Hondo
      overall: { driverIds: ['garcia-s'], teamId: 'gaviota-gasgas-aspar' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['garcia-s'], teamId: 'gaviota-gasgas-aspar' },
        ],
      }],
    },
    race: {
      // García converts pole to victory at Termas; Foggia P2, Sasaki P3 maiden Moto3 podium
      overall: { driverIds: ['garcia-s'], teamId: 'gaviota-gasgas-aspar' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['garcia-s'], teamId: 'gaviota-gasgas-aspar' },
          { position: 2, driverIds: ['foggia'], teamId: 'leopard-racing' },
          { position: 3, driverIds: ['sasaki-a'], teamId: 'sterilgarda-max-racing' },
        ],
      }],
    },
  },
  'moto3-2022-usa': {
    qualifying: {
      // Migno pole at COTA on the Rivacold Honda
      overall: { driverIds: ['migno'], teamId: 'rivacold-snipers' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['migno'], teamId: 'rivacold-snipers' },
        ],
      }],
    },
    race: {
      // Masià wins with a last-lap move at COTA; Foggia P2, Migno P3 —
      //   his first victory since 2021 Qatar
      overall: { driverIds: ['masia'], teamId: 'red-bull-ktm-ajo-moto3' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['masia'], teamId: 'red-bull-ktm-ajo-moto3' },
          { position: 2, driverIds: ['foggia'], teamId: 'leopard-racing' },
          { position: 3, driverIds: ['migno'], teamId: 'rivacold-snipers' },
        ],
      }],
    },
  },
  'moto3-2022-portugal': {
    qualifying: {
      // Öncü pole at Portimão for Red Bull KTM Tech3
      overall: { driverIds: ['oncu'], teamId: 'red-bull-ktm-tech3-moto3' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['oncu'], teamId: 'red-bull-ktm-tech3-moto3' },
        ],
      }],
    },
    race: {
      // García second 2022 win; Masià P2, Sasaki P3
      overall: { driverIds: ['garcia-s'], teamId: 'gaviota-gasgas-aspar' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['garcia-s'], teamId: 'gaviota-gasgas-aspar' },
          { position: 2, driverIds: ['masia'], teamId: 'red-bull-ktm-ajo-moto3' },
          { position: 3, driverIds: ['sasaki-a'], teamId: 'sterilgarda-max-racing' },
        ],
      }],
    },
  },
  'moto3-2022-spain': {
    qualifying: {
      // Guevara pole at Jerez
      overall: { driverIds: ['guevara'], teamId: 'gaviota-gasgas-aspar' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['guevara'], teamId: 'gaviota-gasgas-aspar' },
        ],
      }],
    },
    race: {
      // Guevara converts pole to maiden Moto3 victory at Jerez (his first win);
      //   García P2 (team 1–2), Masià P3
      overall: { driverIds: ['guevara'], teamId: 'gaviota-gasgas-aspar' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['guevara'], teamId: 'gaviota-gasgas-aspar' },
          { position: 2, driverIds: ['garcia-s'], teamId: 'gaviota-gasgas-aspar' },
          { position: 3, driverIds: ['masia'], teamId: 'red-bull-ktm-ajo-moto3' },
        ],
      }],
    },
  },
  'moto3-2022-france': {
    qualifying: {
      // Foggia pole at Le Mans
      overall: { driverIds: ['foggia'], teamId: 'leopard-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['foggia'], teamId: 'leopard-racing' },
        ],
      }],
    },
    race: {
      // Masià wins at Le Mans; Sasaki P2, Guevara P3
      overall: { driverIds: ['masia'], teamId: 'red-bull-ktm-ajo-moto3' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['masia'], teamId: 'red-bull-ktm-ajo-moto3' },
          { position: 2, driverIds: ['sasaki-a'], teamId: 'sterilgarda-max-racing' },
          { position: 3, driverIds: ['guevara'], teamId: 'gaviota-gasgas-aspar' },
        ],
      }],
    },
  },
  'moto3-2022-italy': {
    qualifying: {
      // Öncü back-to-back poles, second of 2022 at Mugello
      overall: { driverIds: ['oncu'], teamId: 'red-bull-ktm-tech3-moto3' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['oncu'], teamId: 'red-bull-ktm-tech3-moto3' },
        ],
      }],
    },
    race: {
      // García wins after Guevara is demoted one position for exceeding track limits
      //   on the final lap; Suzuki P3 — team 1–2 promoted to García/Guevara
      overall: { driverIds: ['garcia-s'], teamId: 'gaviota-gasgas-aspar' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['garcia-s'], teamId: 'gaviota-gasgas-aspar' },
          { position: 2, driverIds: ['guevara'], teamId: 'gaviota-gasgas-aspar' },
          { position: 3, driverIds: ['suzuki-t'], teamId: 'leopard-racing' },
        ],
      }],
    },
  },
  'moto3-2022-catalunya': {
    qualifying: {
      // Foggia pole at Catalunya
      overall: { driverIds: ['foggia'], teamId: 'leopard-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['foggia'], teamId: 'leopard-racing' },
        ],
      }],
    },
    race: {
      // Guevara second win of 2022; Muñoz P2 maiden Moto3 podium for Finetwork Boé,
      //   Suzuki P3
      overall: { driverIds: ['guevara'], teamId: 'gaviota-gasgas-aspar' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['guevara'], teamId: 'gaviota-gasgas-aspar' },
          { position: 2, driverIds: ['munoz-da'], teamId: 'finetwork-team-boe' },
          { position: 3, driverIds: ['suzuki-t'], teamId: 'leopard-racing' },
        ],
      }],
    },
  },
  'moto3-2022-germany': {
    qualifying: {
      // Guevara pole with a new Sachsenring Moto3 lap record
      overall: { driverIds: ['guevara'], teamId: 'gaviota-gasgas-aspar' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['guevara'], teamId: 'gaviota-gasgas-aspar' },
        ],
      }],
    },
    race: {
      // Guevara converts pole to a dominant home win; Foggia P2, García P3 —
      //   Aspar team 1–3, championship lead extended
      overall: { driverIds: ['guevara'], teamId: 'gaviota-gasgas-aspar' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['guevara'], teamId: 'gaviota-gasgas-aspar' },
          { position: 2, driverIds: ['foggia'], teamId: 'leopard-racing' },
          { position: 3, driverIds: ['garcia-s'], teamId: 'gaviota-gasgas-aspar' },
        ],
      }],
    },
  },
  'moto3-2022-netherlands': {
    qualifying: {
      // Sasaki pole at Assen
      overall: { driverIds: ['sasaki-a'], teamId: 'sterilgarda-max-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['sasaki-a'], teamId: 'sterilgarda-max-racing' },
        ],
      }],
    },
    race: {
      // Sasaki maiden Moto3 victory at Assen for Sterilgarda Husqvarna;
      //   Guevara P2, García P3
      overall: { driverIds: ['sasaki-a'], teamId: 'sterilgarda-max-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['sasaki-a'], teamId: 'sterilgarda-max-racing' },
          { position: 2, driverIds: ['guevara'], teamId: 'gaviota-gasgas-aspar' },
          { position: 3, driverIds: ['garcia-s'], teamId: 'gaviota-gasgas-aspar' },
        ],
      }],
    },
  },
  'moto3-2022-great-britain': {
    qualifying: {
      // Moreira maiden Moto3 pole at Silverstone for MT Helmets-MSi
      overall: { driverIds: ['moreira'], teamId: 'mt-helmets-msi-moto3' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['moreira'], teamId: 'mt-helmets-msi-moto3' },
        ],
      }],
    },
    race: {
      // Foggia third win of 2022 at Silverstone; Masià P2, Öncü P3
      overall: { driverIds: ['foggia'], teamId: 'leopard-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['foggia'], teamId: 'leopard-racing' },
          { position: 2, driverIds: ['masia'], teamId: 'red-bull-ktm-ajo-moto3' },
          { position: 3, driverIds: ['oncu'], teamId: 'red-bull-ktm-tech3-moto3' },
        ],
      }],
    },
  },
  'moto3-2022-austria': {
    qualifying: {
      // Holgado maiden Moto3 pole for Red Bull KTM Ajo
      overall: { driverIds: ['holgado'], teamId: 'red-bull-ktm-ajo-moto3' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['holgado'], teamId: 'red-bull-ktm-ajo-moto3' },
        ],
      }],
    },
    race: {
      // Sasaki second win of 2022; Suzuki P2, Muñoz P3
      overall: { driverIds: ['sasaki-a'], teamId: 'sterilgarda-max-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['sasaki-a'], teamId: 'sterilgarda-max-racing' },
          { position: 2, driverIds: ['suzuki-t'], teamId: 'leopard-racing' },
          { position: 3, driverIds: ['munoz-da'], teamId: 'finetwork-team-boe' },
        ],
      }],
    },
  },
  'moto3-2022-san-marino': {
    qualifying: {
      // Öncü third pole of 2022 at Misano
      overall: { driverIds: ['oncu'], teamId: 'red-bull-ktm-tech3-moto3' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['oncu'], teamId: 'red-bull-ktm-tech3-moto3' },
        ],
      }],
    },
    race: {
      // Foggia fourth win of 2022 at home — first rider to win three races at a
      //   single track; Masià P2 after late-lap lunge, Guevara P3 as García is
      //   black-flagged
      overall: { driverIds: ['foggia'], teamId: 'leopard-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['foggia'], teamId: 'leopard-racing' },
          { position: 2, driverIds: ['masia'], teamId: 'red-bull-ktm-ajo-moto3' },
          { position: 3, driverIds: ['guevara'], teamId: 'gaviota-gasgas-aspar' },
        ],
      }],
    },
  },
  'moto3-2022-aragon': {
    qualifying: {
      // Guevara pole at MotorLand Aragón
      overall: { driverIds: ['guevara'], teamId: 'gaviota-gasgas-aspar' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['guevara'], teamId: 'gaviota-gasgas-aspar' },
        ],
      }],
    },
    race: {
      // Guevara converts pole to fourth 2022 win; Sasaki P2, Holgado P3 maiden
      //   Moto3 podium for Red Bull KTM Ajo
      overall: { driverIds: ['guevara'], teamId: 'gaviota-gasgas-aspar' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['guevara'], teamId: 'gaviota-gasgas-aspar' },
          { position: 2, driverIds: ['sasaki-a'], teamId: 'sterilgarda-max-racing' },
          { position: 3, driverIds: ['holgado'], teamId: 'red-bull-ktm-ajo-moto3' },
        ],
      }],
    },
  },
  'moto3-2022-japan': {
    qualifying: {
      // Suzuki maiden 2022 pole at Motegi
      overall: { driverIds: ['suzuki-t'], teamId: 'leopard-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['suzuki-t'], teamId: 'leopard-racing' },
        ],
      }],
    },
    race: {
      // Guevara fifth win of 2022; Foggia P2, Masià P3 — Guevara extends his
      //   championship lead at MotoGP's first Japanese GP since 2019
      overall: { driverIds: ['guevara'], teamId: 'gaviota-gasgas-aspar' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['guevara'], teamId: 'gaviota-gasgas-aspar' },
          { position: 2, driverIds: ['foggia'], teamId: 'leopard-racing' },
          { position: 3, driverIds: ['masia'], teamId: 'red-bull-ktm-ajo-moto3' },
        ],
      }],
    },
  },
  'moto3-2022-thailand': {
    qualifying: {
      // Foggia pole at Chang International
      overall: { driverIds: ['foggia'], teamId: 'leopard-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['foggia'], teamId: 'leopard-racing' },
        ],
      }],
    },
    race: {
      // Foggia converts pole to fifth win of 2022 at Buriram; Sasaki P2,
      //   Riccardo Rossi P3 maiden Moto3 podium
      overall: { driverIds: ['foggia'], teamId: 'leopard-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['foggia'], teamId: 'leopard-racing' },
          { position: 2, driverIds: ['sasaki-a'], teamId: 'sterilgarda-max-racing' },
          { position: 3, driverIds: ['rossi-r'], teamId: 'sic58-squadra-corse' },
        ],
      }],
    },
  },
  'moto3-2022-australia': {
    qualifying: {
      // Sasaki pole at Phillip Island
      overall: { driverIds: ['sasaki-a'], teamId: 'sterilgarda-max-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['sasaki-a'], teamId: 'sterilgarda-max-racing' },
        ],
      }],
    },
    race: {
      // Guevara sixth win of 2022 to clinch the World Championship with two rounds
      //   to spare — first GasGas world title; Öncü P2, García P3 (Aspar 1–3
      //   to seal the Teams' Championship)
      overall: { driverIds: ['guevara'], teamId: 'gaviota-gasgas-aspar' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['guevara'], teamId: 'gaviota-gasgas-aspar' },
          { position: 2, driverIds: ['oncu'], teamId: 'red-bull-ktm-tech3-moto3' },
          { position: 3, driverIds: ['garcia-s'], teamId: 'gaviota-gasgas-aspar' },
        ],
      }],
    },
  },
  'moto3-2022-malaysia': {
    qualifying: {
      // Foggia third pole of 2022 at Sepang
      overall: { driverIds: ['foggia'], teamId: 'leopard-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['foggia'], teamId: 'leopard-racing' },
        ],
      }],
    },
    race: {
      // John McPhee maiden 2022 victory at Sepang — first Moto3 win since 2020;
      //   Sasaki P2, García P3 — final Moto3 race for McPhee before BSB switch
      overall: { driverIds: ['mcphee'], teamId: 'sterilgarda-max-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['mcphee'], teamId: 'sterilgarda-max-racing' },
          { position: 2, driverIds: ['sasaki-a'], teamId: 'sterilgarda-max-racing' },
          { position: 3, driverIds: ['garcia-s'], teamId: 'gaviota-gasgas-aspar' },
        ],
      }],
    },
  },
  'moto3-2022-valencia': {
    qualifying: {
      // Newly crowned champion Guevara takes pole at the Valencia finale
      overall: { driverIds: ['guevara'], teamId: 'gaviota-gasgas-aspar' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['guevara'], teamId: 'gaviota-gasgas-aspar' },
        ],
      }],
    },
    race: {
      // Guevara eighth win of 2022 — record-equalling season tally in the
      //   modern Moto3 era; Öncü P2, García P3 (Aspar 1–3 finale)
      overall: { driverIds: ['guevara'], teamId: 'gaviota-gasgas-aspar' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['guevara'], teamId: 'gaviota-gasgas-aspar' },
          { position: 2, driverIds: ['oncu'], teamId: 'red-bull-ktm-tech3-moto3' },
          { position: 3, driverIds: ['garcia-s'], teamId: 'gaviota-gasgas-aspar' },
        ],
      }],
    },
  },
}
