import type { EventResults } from './types'

// Moto3 2021 results — all 18 rounds completed
// Sources: per-Grand-Prix Wikipedia pages, crash.net, motorsport.com, motogp.com
// Verification date: 2026-06-08
// Champion: Pedro Acosta (Red Bull KTM Ajo) — clinched at Algarve (Round 17),
//   first rookie Moto3 champion since Loris Capirossi in 1990 (125cc)
// Note: Jason Dupasquier (CarXpert PrüstelGP) suffered fatal injuries in qualifying
//   for the Italian GP (R6) — his weekend results are not represented in podium data
export const moto3Results2021: Record<string, EventResults> = {
  'moto3-2021-qatar': {
    qualifying: {
      // Darryn Binder maiden Moto3 pole at Losail
      overall: { driverIds: ['binder-d'], teamId: 'petronas-sprinta-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['binder-d'], teamId: 'petronas-sprinta-racing' },
        ],
      }],
    },
    race: {
      // Masià wins the season opener for Red Bull KTM Ajo by 0.063s; Artigas P2, Binder P3
      overall: { driverIds: ['masia'], teamId: 'red-bull-ktm-ajo-moto3' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['masia'], teamId: 'red-bull-ktm-ajo-moto3' },
          { position: 2, driverIds: ['acosta'], teamId: 'red-bull-ktm-ajo-moto3' },
          { position: 3, driverIds: ['binder-d'], teamId: 'petronas-sprinta-racing' },
        ],
      }],
    },
  },
  'moto3-2021-doha': {
    qualifying: {
      // Masià pole at Doha
      overall: { driverIds: ['masia'], teamId: 'red-bull-ktm-ajo-moto3' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['masia'], teamId: 'red-bull-ktm-ajo-moto3' },
        ],
      }],
    },
    race: {
      // Acosta wins from pit lane after grid-position penalty — historic ride;
      //   first rookie debut win since 2019
      overall: { driverIds: ['acosta'], teamId: 'red-bull-ktm-ajo-moto3' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['acosta'], teamId: 'red-bull-ktm-ajo-moto3' },
          { position: 2, driverIds: ['binder-d'], teamId: 'petronas-sprinta-racing' },
          { position: 3, driverIds: ['antonelli-n'], teamId: 'avintia-vr46-academy' },
        ],
      }],
    },
  },
  'moto3-2021-portugal': {
    qualifying: {
      // Andrea Migno pole at Portimão
      overall: { driverIds: ['migno'], teamId: 'rivacold-snipers' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['migno'], teamId: 'rivacold-snipers' },
        ],
      }],
    },
    race: {
      // Acosta wins by 0.629s; Foggia P2, Migno P3 — Acosta extends championship lead
      overall: { driverIds: ['acosta'], teamId: 'red-bull-ktm-ajo-moto3' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['acosta'], teamId: 'red-bull-ktm-ajo-moto3' },
          { position: 2, driverIds: ['foggia'], teamId: 'leopard-racing' },
          { position: 3, driverIds: ['migno'], teamId: 'rivacold-snipers' },
        ],
      }],
    },
  },
  'moto3-2021-spain': {
    qualifying: {
      // Suzuki pole at Jerez
      overall: { driverIds: ['suzuki-t'], teamId: 'sic58-squadra-corse' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['suzuki-t'], teamId: 'sic58-squadra-corse' },
        ],
      }],
    },
    race: {
      // Acosta third consecutive win — historic rookie streak;
      //   Fenati P2, Alcoba maiden Moto3 podium P3
      overall: { driverIds: ['acosta'], teamId: 'red-bull-ktm-ajo-moto3' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['acosta'], teamId: 'red-bull-ktm-ajo-moto3' },
          { position: 2, driverIds: ['fenati'], teamId: 'sterilgarda-max-racing' },
          { position: 3, driverIds: ['alcoba'], teamId: 'indonesian-racing-gresini' },
        ],
      }],
    },
  },
  'moto3-2021-france': {
    qualifying: {
      // Andrea Migno pole at Le Mans with a new lap record
      overall: { driverIds: ['migno'], teamId: 'rivacold-snipers' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['migno'], teamId: 'rivacold-snipers' },
        ],
      }],
    },
    race: {
      // Sergio García maiden Moto3 win for Aspar GasGas — first win for the GasGas brand
      //   in Moto3; Salač P2, Rossi P3
      overall: { driverIds: ['garcia-s'], teamId: 'valresa-gasgas-aspar' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['garcia-s'], teamId: 'valresa-gasgas-aspar' },
          { position: 2, driverIds: ['salac'], teamId: 'rivacold-snipers' },
          { position: 3, driverIds: ['rossi-r'], teamId: 'boe-owlride' },
        ],
      }],
    },
  },
  'moto3-2021-italy': {
    qualifying: {
      // Suzuki second pole of 2021 at Mugello — qualifying overshadowed by
      //   Jason Dupasquier's tragic fatal accident in Q2
      overall: { driverIds: ['suzuki-t'], teamId: 'sic58-squadra-corse' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['suzuki-t'], teamId: 'sic58-squadra-corse' },
        ],
      }],
    },
    race: {
      // Foggia maiden 2021 win for Leopard Racing; Masià P2, Rodrigo P3 —
      //   raced with tributes to Jason Dupasquier
      overall: { driverIds: ['foggia'], teamId: 'leopard-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['foggia'], teamId: 'leopard-racing' },
          { position: 2, driverIds: ['masia'], teamId: 'red-bull-ktm-ajo-moto3' },
          { position: 3, driverIds: ['rodrigo-g'], teamId: 'indonesian-racing-gresini' },
        ],
      }],
    },
  },
  'moto3-2021-catalunya': {
    qualifying: {
      // Gabriel Rodrigo pole at Catalunya
      overall: { driverIds: ['rodrigo-g'], teamId: 'indonesian-racing-gresini' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['rodrigo-g'], teamId: 'indonesian-racing-gresini' },
        ],
      }],
    },
    race: {
      // García back-to-back wins on home soil for Aspar GasGas;
      //   Alcoba P2 maiden runner-up, Öncü maiden Moto3 podium P3
      overall: { driverIds: ['garcia-s'], teamId: 'valresa-gasgas-aspar' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['garcia-s'], teamId: 'valresa-gasgas-aspar' },
          { position: 2, driverIds: ['alcoba'], teamId: 'indonesian-racing-gresini' },
          { position: 3, driverIds: ['oncu'], teamId: 'red-bull-ktm-tech3-moto3' },
        ],
      }],
    },
  },
  'moto3-2021-germany': {
    qualifying: {
      // Salač maiden Moto3 pole at Sachsenring for Rivacold Snipers
      overall: { driverIds: ['salac'], teamId: 'rivacold-snipers' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['salac'], teamId: 'rivacold-snipers' },
        ],
      }],
    },
    race: {
      // Acosta fourth win of 2021; Toba maiden Moto3 podium P2, Foggia P3
      overall: { driverIds: ['acosta'], teamId: 'red-bull-ktm-ajo-moto3' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['acosta'], teamId: 'red-bull-ktm-ajo-moto3' },
          { position: 2, driverIds: ['toba'], teamId: 'cip-green-power' },
          { position: 3, driverIds: ['foggia'], teamId: 'leopard-racing' },
        ],
      }],
    },
  },
  'moto3-2021-netherlands': {
    qualifying: {
      // Alcoba maiden Moto3 pole at Assen
      overall: { driverIds: ['alcoba'], teamId: 'indonesian-racing-gresini' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['alcoba'], teamId: 'indonesian-racing-gresini' },
        ],
      }],
    },
    race: {
      // Foggia second win of the season; García P2, Fenati P3
      overall: { driverIds: ['foggia'], teamId: 'leopard-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['foggia'], teamId: 'leopard-racing' },
          { position: 2, driverIds: ['garcia-s'], teamId: 'valresa-gasgas-aspar' },
          { position: 3, driverIds: ['fenati'], teamId: 'sterilgarda-max-racing' },
        ],
      }],
    },
  },
  'moto3-2021-styria': {
    qualifying: {
      // Öncü maiden Moto3 pole at the Red Bull Ring
      overall: { driverIds: ['oncu'], teamId: 'red-bull-ktm-tech3-moto3' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['oncu'], teamId: 'red-bull-ktm-tech3-moto3' },
        ],
      }],
    },
    race: {
      // Acosta fifth win of 2021 by 0.043s; García P2, Fenati P3
      overall: { driverIds: ['acosta'], teamId: 'red-bull-ktm-ajo-moto3' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['acosta'], teamId: 'red-bull-ktm-ajo-moto3' },
          { position: 2, driverIds: ['garcia-s'], teamId: 'valresa-gasgas-aspar' },
          { position: 3, driverIds: ['fenati'], teamId: 'sterilgarda-max-racing' },
        ],
      }],
    },
  },
  'moto3-2021-austria': {
    qualifying: {
      // Fenati pole at the Red Bull Ring on the Husqvarna
      overall: { driverIds: ['fenati'], teamId: 'sterilgarda-max-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['fenati'], teamId: 'sterilgarda-max-racing' },
        ],
      }],
    },
    race: {
      // García third win of 2021; Öncü P2, Foggia P3
      overall: { driverIds: ['garcia-s'], teamId: 'valresa-gasgas-aspar' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['garcia-s'], teamId: 'valresa-gasgas-aspar' },
          { position: 2, driverIds: ['oncu'], teamId: 'red-bull-ktm-tech3-moto3' },
          { position: 3, driverIds: ['foggia'], teamId: 'leopard-racing' },
        ],
      }],
    },
  },
  'moto3-2021-great-britain': {
    qualifying: {
      // Fenati back-to-back poles at Silverstone
      overall: { driverIds: ['fenati'], teamId: 'sterilgarda-max-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['fenati'], teamId: 'sterilgarda-max-racing' },
        ],
      }],
    },
    race: {
      // Fenati converts pole to victory at Silverstone — first Moto3 win since 2018;
      //   Antonelli P2, Foggia P3
      overall: { driverIds: ['fenati'], teamId: 'sterilgarda-max-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['fenati'], teamId: 'sterilgarda-max-racing' },
          { position: 2, driverIds: ['antonelli-n'], teamId: 'avintia-vr46-academy' },
          { position: 3, driverIds: ['foggia'], teamId: 'leopard-racing' },
        ],
      }],
    },
  },
  'moto3-2021-aragon': {
    qualifying: {
      // Darryn Binder pole at MotorLand Aragón
      overall: { driverIds: ['binder-d'], teamId: 'petronas-sprinta-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['binder-d'], teamId: 'petronas-sprinta-racing' },
        ],
      }],
    },
    race: {
      // Foggia third win of the season; Öncü P2, Sasaki maiden Moto3 podium P3
      overall: { driverIds: ['foggia'], teamId: 'leopard-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['foggia'], teamId: 'leopard-racing' },
          { position: 2, driverIds: ['oncu'], teamId: 'red-bull-ktm-tech3-moto3' },
          { position: 3, driverIds: ['sasaki-a'], teamId: 'red-bull-ktm-tech3-moto3' },
        ],
      }],
    },
  },
  'moto3-2021-san-marino': {
    qualifying: {
      // Fenati third pole of 2021 at Misano
      overall: { driverIds: ['fenati'], teamId: 'sterilgarda-max-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['fenati'], teamId: 'sterilgarda-max-racing' },
        ],
      }],
    },
    race: {
      // Foggia fourth win of the season — closing the gap to championship leader Acosta;
      //   Antonelli P2, Migno P3
      overall: { driverIds: ['foggia'], teamId: 'leopard-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['foggia'], teamId: 'leopard-racing' },
          { position: 2, driverIds: ['antonelli-n'], teamId: 'avintia-vr46-academy' },
          { position: 3, driverIds: ['migno'], teamId: 'rivacold-snipers' },
        ],
      }],
    },
  },
  'moto3-2021-usa': {
    qualifying: {
      // Masià pole at COTA
      overall: { driverIds: ['masia'], teamId: 'red-bull-ktm-ajo-moto3' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['masia'], teamId: 'red-bull-ktm-ajo-moto3' },
        ],
      }],
    },
    race: {
      // Izan Guevara maiden Moto3 victory for Aspar GasGas; Foggia P2,
      //   McPhee P3 (final Moto3 podium for John McPhee)
      overall: { driverIds: ['guevara'], teamId: 'valresa-gasgas-aspar' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['guevara'], teamId: 'valresa-gasgas-aspar' },
          { position: 2, driverIds: ['foggia'], teamId: 'leopard-racing' },
          { position: 3, driverIds: ['mcphee'], teamId: 'petronas-sprinta-racing' },
        ],
      }],
    },
  },
  'moto3-2021-emilia-romagna': {
    qualifying: {
      // Antonelli pole at Misano
      overall: { driverIds: ['antonelli-n'], teamId: 'avintia-vr46-academy' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['antonelli-n'], teamId: 'avintia-vr46-academy' },
        ],
      }],
    },
    race: {
      // Foggia fifth win of the season — drawing equal with Acosta in race wins;
      //   Masià P2, Acosta P3
      overall: { driverIds: ['foggia'], teamId: 'leopard-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['foggia'], teamId: 'leopard-racing' },
          { position: 2, driverIds: ['masia'], teamId: 'red-bull-ktm-ajo-moto3' },
          { position: 3, driverIds: ['acosta'], teamId: 'red-bull-ktm-ajo-moto3' },
        ],
      }],
    },
  },
  'moto3-2021-algarve': {
    qualifying: {
      // Sergio García pole at Portimão
      overall: { driverIds: ['garcia-s'], teamId: 'valresa-gasgas-aspar' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['garcia-s'], teamId: 'valresa-gasgas-aspar' },
        ],
      }],
    },
    race: {
      // Acosta sixth win of 2021 to clinch the World Championship with one round to spare —
      //   youngest Moto3 champion in the four-stroke era, first rookie champion since
      //   Loris Capirossi (1990); Migno P2, Antonelli P3
      overall: { driverIds: ['acosta'], teamId: 'red-bull-ktm-ajo-moto3' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['acosta'], teamId: 'red-bull-ktm-ajo-moto3' },
          { position: 2, driverIds: ['migno'], teamId: 'rivacold-snipers' },
          { position: 3, driverIds: ['antonelli-n'], teamId: 'avintia-vr46-academy' },
        ],
      }],
    },
  },
  'moto3-2021-valencia': {
    qualifying: {
      // Newly crowned champion Acosta takes pole at Valencia
      overall: { driverIds: ['acosta'], teamId: 'red-bull-ktm-ajo-moto3' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['acosta'], teamId: 'red-bull-ktm-ajo-moto3' },
        ],
      }],
    },
    race: {
      // Xavier Artigas maiden Moto3 win in the season finale for Leopard Racing;
      //   García P2, Masià P3
      overall: { driverIds: ['artigas'], teamId: 'leopard-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['artigas'], teamId: 'leopard-racing' },
          { position: 2, driverIds: ['garcia-s'], teamId: 'valresa-gasgas-aspar' },
          { position: 3, driverIds: ['masia'], teamId: 'red-bull-ktm-ajo-moto3' },
        ],
      }],
    },
  },
}
