import type { EventResults } from './types'

// Moto3 2023 results — all 20 rounds completed
// Sources: per-Grand-Prix Wikipedia pages, crash.net, motorsport.com, motogp.com,
//   bikesportnews.com race reports
// Verification date: 2026-06-08
// Champion: Jaume Masià (Leopard Racing, Honda) — clinched at Qatar (Round 19)
//   by winning the race; first Moto3 title for Masià at his sixth attempt, and
//   Leopard Racing's fourth Moto3 riders' title in nine seasons
// Note: David Alonso took 2023 Rookie of the Year; Liqui Moly Husqvarna Intact GP
//   won their first Moto3 Teams' Championship at Valencia
// Note: 2023 Indian GP at Buddh was the inaugural MotoGP visit to India and the
//   weekend ran with extreme-heat schedule adjustments (sessions shortened)
export const moto3Results2023: Record<string, EventResults> = {
  'moto3-2023-portugal': {
    qualifying: {
      // Sasaki maiden 2023 pole at Portimão
      overall: { driverIds: ['sasaki-a'], teamId: 'intact-gp-husqvarna-moto3' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['sasaki-a'], teamId: 'intact-gp-husqvarna-moto3' },
        ],
      }],
    },
    race: {
      // Holgado maiden Moto3 victory in the season opener — first win for Red Bull
      //   KTM Tech3; Muñoz P2, Moreira P3 (KTM 1–2–3)
      overall: { driverIds: ['holgado'], teamId: 'red-bull-ktm-tech3-moto3' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['holgado'], teamId: 'red-bull-ktm-tech3-moto3' },
          { position: 2, driverIds: ['munoz-da'], teamId: 'boe-motorsports' },
          { position: 3, driverIds: ['moreira'], teamId: 'mt-helmets-msi-moto3' },
        ],
      }],
    },
  },
  'moto3-2023-argentina': {
    qualifying: {
      // Sasaki back-to-back poles at Termas
      overall: { driverIds: ['sasaki-a'], teamId: 'intact-gp-husqvarna-moto3' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['sasaki-a'], teamId: 'intact-gp-husqvarna-moto3' },
        ],
      }],
    },
    race: {
      // Tatsuki Suzuki dominant wet-race victory at Termas — first Moto3 win for
      //   Suzuki and a Leopard Racing 1; Moreira P2, Migno P3 for CIP Green Power
      overall: { driverIds: ['suzuki-t'], teamId: 'leopard-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['suzuki-t'], teamId: 'leopard-racing' },
          { position: 2, driverIds: ['moreira'], teamId: 'mt-helmets-msi-moto3' },
          { position: 3, driverIds: ['migno'], teamId: 'cip-green-power' },
        ],
      }],
    },
  },
  'moto3-2023-usa': {
    qualifying: {
      // Masià maiden pole of 2023 at COTA
      overall: { driverIds: ['masia'], teamId: 'leopard-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['masia'], teamId: 'leopard-racing' },
        ],
      }],
    },
    race: {
      // Iván Ortolá maiden Moto3 win after a dramatic save through the field —
      //   ran in 22nd after a near-crash and fought back to win; Masià P2,
      //   Artigas P3 for CFMoto Racing PrüstelGP
      overall: { driverIds: ['ortola'], teamId: 'angeluss-mta' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['ortola'], teamId: 'angeluss-mta' },
          { position: 2, driverIds: ['masia'], teamId: 'leopard-racing' },
          { position: 3, driverIds: ['artigas'], teamId: 'cfmoto-racing-prustelgp' },
        ],
      }],
    },
  },
  'moto3-2023-spain': {
    qualifying: {
      // Öncü maiden 2023 pole at Jerez
      overall: { driverIds: ['oncu'], teamId: 'red-bull-ktm-ajo-moto3' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['oncu'], teamId: 'red-bull-ktm-ajo-moto3' },
        ],
      }],
    },
    race: {
      // Ortolá back-to-back wins by 0.034s; Alonso P2 maiden Moto3 podium,
      //   Masià P3 — Ortolá leads championship after a dramatic Jerez race
      overall: { driverIds: ['ortola'], teamId: 'angeluss-mta' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['ortola'], teamId: 'angeluss-mta' },
          { position: 2, driverIds: ['alonso-d'], teamId: 'gasgas-aspar-team' },
          { position: 3, driverIds: ['masia'], teamId: 'leopard-racing' },
        ],
      }],
    },
  },
  'moto3-2023-france': {
    qualifying: {
      // Sasaki third pole of 2023 at Le Mans
      overall: { driverIds: ['sasaki-a'], teamId: 'intact-gp-husqvarna-moto3' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['sasaki-a'], teamId: 'intact-gp-husqvarna-moto3' },
        ],
      }],
    },
    race: {
      // Holgado second win of 2023 at Le Mans; Sasaki P2, Masià P3
      overall: { driverIds: ['holgado'], teamId: 'red-bull-ktm-tech3-moto3' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['holgado'], teamId: 'red-bull-ktm-tech3-moto3' },
          { position: 2, driverIds: ['sasaki-a'], teamId: 'intact-gp-husqvarna-moto3' },
          { position: 3, driverIds: ['masia'], teamId: 'leopard-racing' },
        ],
      }],
    },
  },
  'moto3-2023-italy': {
    qualifying: {
      // Öncü pole at Mugello with a new lap record
      overall: { driverIds: ['oncu'], teamId: 'red-bull-ktm-ajo-moto3' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['oncu'], teamId: 'red-bull-ktm-ajo-moto3' },
        ],
      }],
    },
    race: {
      // Holgado third win of 2023 at Mugello; Öncü P2, Sasaki P3
      overall: { driverIds: ['holgado'], teamId: 'red-bull-ktm-tech3-moto3' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['holgado'], teamId: 'red-bull-ktm-tech3-moto3' },
          { position: 2, driverIds: ['oncu'], teamId: 'red-bull-ktm-ajo-moto3' },
          { position: 3, driverIds: ['sasaki-a'], teamId: 'intact-gp-husqvarna-moto3' },
        ],
      }],
    },
  },
  'moto3-2023-germany': {
    qualifying: {
      // Sasaki pole at Sachsenring
      overall: { driverIds: ['sasaki-a'], teamId: 'intact-gp-husqvarna-moto3' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['sasaki-a'], teamId: 'intact-gp-husqvarna-moto3' },
        ],
      }],
    },
    race: {
      // Öncü first 2023 win by 0.095s over Sasaki; Holgado P3
      overall: { driverIds: ['oncu'], teamId: 'red-bull-ktm-ajo-moto3' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['oncu'], teamId: 'red-bull-ktm-ajo-moto3' },
          { position: 2, driverIds: ['sasaki-a'], teamId: 'intact-gp-husqvarna-moto3' },
          { position: 3, driverIds: ['holgado'], teamId: 'red-bull-ktm-tech3-moto3' },
        ],
      }],
    },
  },
  'moto3-2023-netherlands': {
    qualifying: {
      // Muñoz maiden Moto3 pole at Assen for Boé Motorsports
      overall: { driverIds: ['munoz-da'], teamId: 'boe-motorsports' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['munoz-da'], teamId: 'boe-motorsports' },
        ],
      }],
    },
    race: {
      // Masià maiden 2023 victory at Assen; Sasaki P2, Öncü P3
      overall: { driverIds: ['masia'], teamId: 'leopard-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['masia'], teamId: 'leopard-racing' },
          { position: 2, driverIds: ['sasaki-a'], teamId: 'intact-gp-husqvarna-moto3' },
          { position: 3, driverIds: ['oncu'], teamId: 'red-bull-ktm-ajo-moto3' },
        ],
      }],
    },
  },
  'moto3-2023-great-britain': {
    qualifying: {
      // Masià pole at Silverstone in mixed conditions
      overall: { driverIds: ['masia'], teamId: 'leopard-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['masia'], teamId: 'leopard-racing' },
        ],
      }],
    },
    race: {
      // Alonso maiden Moto3 victory at Silverstone — first Colombian winner in
      //   Grand Prix history; Sasaki P2, Holgado P3
      overall: { driverIds: ['alonso-d'], teamId: 'gasgas-aspar-team' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['alonso-d'], teamId: 'gasgas-aspar-team' },
          { position: 2, driverIds: ['sasaki-a'], teamId: 'intact-gp-husqvarna-moto3' },
          { position: 3, driverIds: ['holgado'], teamId: 'red-bull-ktm-tech3-moto3' },
        ],
      }],
    },
  },
  'moto3-2023-austria': {
    qualifying: {
      // Veijer maiden Moto3 pole at the Red Bull Ring for Intact GP
      overall: { driverIds: ['veijer'], teamId: 'intact-gp-husqvarna-moto3' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['veijer'], teamId: 'intact-gp-husqvarna-moto3' },
        ],
      }],
    },
    race: {
      // Öncü second 2023 win at the Red Bull Ring; Holgado P2, Sasaki P3
      overall: { driverIds: ['oncu'], teamId: 'red-bull-ktm-ajo-moto3' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['oncu'], teamId: 'red-bull-ktm-ajo-moto3' },
          { position: 2, driverIds: ['holgado'], teamId: 'red-bull-ktm-tech3-moto3' },
          { position: 3, driverIds: ['sasaki-a'], teamId: 'intact-gp-husqvarna-moto3' },
        ],
      }],
    },
  },
  'moto3-2023-catalunya': {
    qualifying: {
      // Öncü pole at Catalunya
      overall: { driverIds: ['oncu'], teamId: 'red-bull-ktm-ajo-moto3' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['oncu'], teamId: 'red-bull-ktm-ajo-moto3' },
        ],
      }],
    },
    race: {
      // Alonso second 2023 win from 12th on the grid; Masià P2, Rueda P3
      //   maiden Moto3 podium for Red Bull KTM Ajo's rookie
      overall: { driverIds: ['alonso-d'], teamId: 'gasgas-aspar-team' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['alonso-d'], teamId: 'gasgas-aspar-team' },
          { position: 2, driverIds: ['masia'], teamId: 'leopard-racing' },
          { position: 3, driverIds: ['rueda-ja'], teamId: 'red-bull-ktm-ajo-moto3' },
        ],
      }],
    },
  },
  'moto3-2023-san-marino': {
    qualifying: {
      // Masià pole at Misano
      overall: { driverIds: ['masia'], teamId: 'leopard-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['masia'], teamId: 'leopard-racing' },
        ],
      }],
    },
    race: {
      // Alonso third 2023 win by 0.036s; Masià P2, Öncü P3 — a four-rider
      //   battle to the finish at Misano
      overall: { driverIds: ['alonso-d'], teamId: 'gasgas-aspar-team' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['alonso-d'], teamId: 'gasgas-aspar-team' },
          { position: 2, driverIds: ['masia'], teamId: 'leopard-racing' },
          { position: 3, driverIds: ['oncu'], teamId: 'red-bull-ktm-ajo-moto3' },
        ],
      }],
    },
  },
  'moto3-2023-india': {
    qualifying: {
      // Masià pole at the inaugural Indian GP at Buddh
      overall: { driverIds: ['masia'], teamId: 'leopard-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['masia'], teamId: 'leopard-racing' },
        ],
      }],
    },
    race: {
      // Masià dominates the inaugural Indian Moto3 GP from pole — extreme-heat
      //   weekend with shortened sessions; Toba P2, Sasaki P3
      overall: { driverIds: ['masia'], teamId: 'leopard-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['masia'], teamId: 'leopard-racing' },
          { position: 2, driverIds: ['toba'], teamId: 'sic58-squadra-corse' },
          { position: 3, driverIds: ['sasaki-a'], teamId: 'intact-gp-husqvarna-moto3' },
        ],
      }],
    },
  },
  'moto3-2023-japan': {
    qualifying: {
      // Masià back-to-back poles at Motegi
      overall: { driverIds: ['masia'], teamId: 'leopard-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['masia'], teamId: 'leopard-racing' },
        ],
      }],
    },
    race: {
      // Masià third win of 2023 in Japan; Sasaki P2 (home race), Holgado P3
      //   — championship fight tightens to four riders
      overall: { driverIds: ['masia'], teamId: 'leopard-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['masia'], teamId: 'leopard-racing' },
          { position: 2, driverIds: ['sasaki-a'], teamId: 'intact-gp-husqvarna-moto3' },
          { position: 3, driverIds: ['holgado'], teamId: 'red-bull-ktm-tech3-moto3' },
        ],
      }],
    },
  },
  'moto3-2023-indonesia': {
    qualifying: {
      // Moreira maiden Moto3 pole at Mandalika
      overall: { driverIds: ['moreira'], teamId: 'mt-helmets-msi-moto3' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['moreira'], teamId: 'mt-helmets-msi-moto3' },
        ],
      }],
    },
    race: {
      // Moreira maiden Moto3 victory at Mandalika — first Brazilian Grand Prix
      //   winner since Adu Celso-Santos; Alonso P2, Muñoz P3
      overall: { driverIds: ['moreira'], teamId: 'mt-helmets-msi-moto3' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['moreira'], teamId: 'mt-helmets-msi-moto3' },
          { position: 2, driverIds: ['alonso-d'], teamId: 'gasgas-aspar-team' },
          { position: 3, driverIds: ['munoz-da'], teamId: 'boe-motorsports' },
        ],
      }],
    },
  },
  'moto3-2023-australia': {
    qualifying: {
      // Sasaki pole at Phillip Island
      overall: { driverIds: ['sasaki-a'], teamId: 'intact-gp-husqvarna-moto3' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['sasaki-a'], teamId: 'intact-gp-husqvarna-moto3' },
        ],
      }],
    },
    race: {
      // Öncü third 2023 win at Phillip Island; Sasaki P2, Joel Kelso P3
      //   maiden Moto3 podium on home soil for CFMoto Racing PrüstelGP
      overall: { driverIds: ['oncu'], teamId: 'red-bull-ktm-ajo-moto3' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['oncu'], teamId: 'red-bull-ktm-ajo-moto3' },
          { position: 2, driverIds: ['sasaki-a'], teamId: 'intact-gp-husqvarna-moto3' },
          { position: 3, driverIds: ['kelso'], teamId: 'cfmoto-racing-prustelgp' },
        ],
      }],
    },
  },
  'moto3-2023-thailand': {
    qualifying: {
      // Öncü pole at Buriram
      overall: { driverIds: ['oncu'], teamId: 'red-bull-ktm-ajo-moto3' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['oncu'], teamId: 'red-bull-ktm-ajo-moto3' },
        ],
      }],
    },
    race: {
      // Alonso fourth 2023 win at Buriram; Furusato P2 maiden Moto3 podium,
      //   Veijer P3 maiden Moto3 podium for Intact GP rookie
      overall: { driverIds: ['alonso-d'], teamId: 'gasgas-aspar-team' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['alonso-d'], teamId: 'gasgas-aspar-team' },
          { position: 2, driverIds: ['furusato'], teamId: 'honda-team-asia-moto3' },
          { position: 3, driverIds: ['veijer'], teamId: 'intact-gp-husqvarna-moto3' },
        ],
      }],
    },
  },
  'moto3-2023-malaysia': {
    qualifying: {
      // Masià pole at Sepang
      overall: { driverIds: ['masia'], teamId: 'leopard-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['masia'], teamId: 'leopard-racing' },
        ],
      }],
    },
    race: {
      // Veijer maiden Moto3 victory at Sepang — first Dutch Moto3 winner since
      //   Bo Bendsneyder; Sasaki P2 (Husqvarna 1–2), Masià P3
      overall: { driverIds: ['veijer'], teamId: 'intact-gp-husqvarna-moto3' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['veijer'], teamId: 'intact-gp-husqvarna-moto3' },
          { position: 2, driverIds: ['sasaki-a'], teamId: 'intact-gp-husqvarna-moto3' },
          { position: 3, driverIds: ['masia'], teamId: 'leopard-racing' },
        ],
      }],
    },
  },
  'moto3-2023-qatar': {
    qualifying: {
      // Holgado pole at Lusail
      overall: { driverIds: ['holgado'], teamId: 'red-bull-ktm-tech3-moto3' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['holgado'], teamId: 'red-bull-ktm-tech3-moto3' },
        ],
      }],
    },
    race: {
      // Masià wins the Qatar race to clinch the 2023 Moto3 World Championship
      //   with one race to spare; Alonso P2, Öncü P3
      overall: { driverIds: ['masia'], teamId: 'leopard-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['masia'], teamId: 'leopard-racing' },
          { position: 2, driverIds: ['alonso-d'], teamId: 'gasgas-aspar-team' },
          { position: 3, driverIds: ['oncu'], teamId: 'red-bull-ktm-ajo-moto3' },
        ],
      }],
    },
  },
  'moto3-2023-valencia': {
    qualifying: {
      // Veijer pole at Valencia
      overall: { driverIds: ['veijer'], teamId: 'intact-gp-husqvarna-moto3' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['veijer'], teamId: 'intact-gp-husqvarna-moto3' },
        ],
      }],
    },
    race: {
      // Sasaki maiden Moto3 victory in the season finale at Valencia — first
      //   Japanese Moto3 winner since Tatsuki Suzuki (2022 not yet); Alonso P2,
      //   Ortolá P3 — Intact GP sealed first Moto3 Teams' Championship
      overall: { driverIds: ['sasaki-a'], teamId: 'intact-gp-husqvarna-moto3' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['sasaki-a'], teamId: 'intact-gp-husqvarna-moto3' },
          { position: 2, driverIds: ['alonso-d'], teamId: 'gasgas-aspar-team' },
          { position: 3, driverIds: ['ortola'], teamId: 'angeluss-mta' },
        ],
      }],
    },
  },
}
