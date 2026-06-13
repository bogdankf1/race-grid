import type { EventResults } from './types'

// Moto3 2024 results — all 20 rounds completed
// Sources: crash.net per-round race & qualifying pages, motogp.com news,
//   bikesportnews.com, motomatters.com, Wikipedia "2024 Moto3 World Championship"
// Verification date: 2026-06-07
// Champion: David Alonso (CFMoto Aspar Team) — title clinched at Japan (Round 16)
//   with a record-setting 14 race wins; first Colombian World Champion in any class
// Note: Barcelona Solidarity podium reflects Adrián Fernández's post-race 3s penalty
//   that promoted Ángel Piqueras from 4th to 3rd
export const moto3Results2024: Record<string, EventResults> = {
  'moto3-2024-qatar': {
    qualifying: {
      // Holgado pole with a new Lusail Moto3 lap record (Pirelli era opens)
      overall: { driverIds: ['holgado'], teamId: 'red-bull-gasgas-tech3-moto3' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['holgado'], teamId: 'red-bull-gasgas-tech3-moto3' },
        ],
      }],
    },
    race: {
      // Alonso final-corner lunge on Holgado wins the season-opener by 0.041s; Furusato P3
      overall: { driverIds: ['alonso-d'], teamId: 'aspar-moto3' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['alonso-d'], teamId: 'aspar-moto3' },
          { position: 2, driverIds: ['holgado'], teamId: 'red-bull-gasgas-tech3-moto3' },
          { position: 3, driverIds: ['furusato'], teamId: 'honda-team-asia-moto3' },
        ],
      }],
    },
  },
  'moto3-2024-portugal': {
    qualifying: {
      // Rueda maiden pole with a new Portimão Moto3 lap record
      overall: { driverIds: ['rueda-ja'], teamId: 'red-bull-ktm-ajo-moto3' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['rueda-ja'], teamId: 'red-bull-ktm-ajo-moto3' },
        ],
      }],
    },
    race: {
      // Holgado edges Rueda by 0.04s for first 2024 win; Ortolá completes Spanish podium
      overall: { driverIds: ['holgado'], teamId: 'red-bull-gasgas-tech3-moto3' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['holgado'], teamId: 'red-bull-gasgas-tech3-moto3' },
          { position: 2, driverIds: ['rueda-ja'], teamId: 'red-bull-ktm-ajo-moto3' },
          { position: 3, driverIds: ['ortola'], teamId: 'mt-helmets-msi' },
        ],
      }],
    },
  },
  'moto3-2024-usa': {
    qualifying: {
      // Alonso maiden Moto3 pole — first Colombian polesitter in Grand Prix history
      overall: { driverIds: ['alonso-d'], teamId: 'aspar-moto3' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['alonso-d'], teamId: 'aspar-moto3' },
        ],
      }],
    },
    race: {
      // Alonso dominant 5.163s win at COTA; Holgado P2, Piqueras P3
      overall: { driverIds: ['alonso-d'], teamId: 'aspar-moto3' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['alonso-d'], teamId: 'aspar-moto3' },
          { position: 2, driverIds: ['holgado'], teamId: 'red-bull-gasgas-tech3-moto3' },
          { position: 3, driverIds: ['piqueras'], teamId: 'leopard-racing' },
        ],
      }],
    },
  },
  'moto3-2024-spain': {
    qualifying: {
      // Alonso back-to-back poles, dominating at Jerez
      overall: { driverIds: ['alonso-d'], teamId: 'aspar-moto3' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['alonso-d'], teamId: 'aspar-moto3' },
        ],
      }],
    },
    race: {
      // Veijer wins by 0.045s after Alonso crashes; Muñoz P2, Ortolá P3
      overall: { driverIds: ['veijer'], teamId: 'intact-gp-husqvarna-moto3' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['veijer'], teamId: 'intact-gp-husqvarna-moto3' },
          { position: 2, driverIds: ['munoz-da'], teamId: 'boe-motorsports' },
          { position: 3, driverIds: ['ortola'], teamId: 'mt-helmets-msi' },
        ],
      }],
    },
  },
  'moto3-2024-france': {
    qualifying: {
      // Alonso third consecutive pole with another lap record at Le Mans
      overall: { driverIds: ['alonso-d'], teamId: 'aspar-moto3' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['alonso-d'], teamId: 'aspar-moto3' },
        ],
      }],
    },
    race: {
      // Alonso wins by 0.105s after late battle with Holgado; Veijer rounds out the podium
      overall: { driverIds: ['alonso-d'], teamId: 'aspar-moto3' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['alonso-d'], teamId: 'aspar-moto3' },
          { position: 2, driverIds: ['holgado'], teamId: 'red-bull-gasgas-tech3-moto3' },
          { position: 3, driverIds: ['veijer'], teamId: 'intact-gp-husqvarna-moto3' },
        ],
      }],
    },
  },
  'moto3-2024-catalunya': {
    qualifying: {
      // Ortolá maiden Moto3 pole by 0.019s over Veijer
      overall: { driverIds: ['ortola'], teamId: 'mt-helmets-msi' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['ortola'], teamId: 'mt-helmets-msi' },
        ],
      }],
    },
    race: {
      // Alonso wins by 0.242s ahead of Ortolá; Rueda completes the podium
      overall: { driverIds: ['alonso-d'], teamId: 'aspar-moto3' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['alonso-d'], teamId: 'aspar-moto3' },
          { position: 2, driverIds: ['ortola'], teamId: 'mt-helmets-msi' },
          { position: 3, driverIds: ['rueda-ja'], teamId: 'red-bull-ktm-ajo-moto3' },
        ],
      }],
    },
  },
  'moto3-2024-italy': {
    qualifying: {
      // Alonso pole at Mugello, fourth of the season
      overall: { driverIds: ['alonso-d'], teamId: 'aspar-moto3' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['alonso-d'], teamId: 'aspar-moto3' },
        ],
      }],
    },
    race: {
      // Alonso third straight win in shortened race; Yamanaka's maiden podium on start 82
      overall: { driverIds: ['alonso-d'], teamId: 'aspar-moto3' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['alonso-d'], teamId: 'aspar-moto3' },
          { position: 2, driverIds: ['veijer'], teamId: 'intact-gp-husqvarna-moto3' },
          { position: 3, driverIds: ['yamanaka-r'], teamId: 'mt-helmets-msi' },
        ],
      }],
    },
  },
  'moto3-2024-netherlands': {
    qualifying: {
      // Piqueras maiden Moto3 pole after Veijer's late high-side at Assen
      overall: { driverIds: ['piqueras'], teamId: 'leopard-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['piqueras'], teamId: 'leopard-racing' },
        ],
      }],
    },
    race: {
      // Ortolá denies home favorite Veijer at the chicane in a 0.012s photo finish; Muñoz P3
      overall: { driverIds: ['ortola'], teamId: 'mt-helmets-msi' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['ortola'], teamId: 'mt-helmets-msi' },
          { position: 2, driverIds: ['veijer'], teamId: 'intact-gp-husqvarna-moto3' },
          { position: 3, driverIds: ['munoz-da'], teamId: 'boe-motorsports' },
        ],
      }],
    },
  },
  'moto3-2024-germany': {
    qualifying: {
      // Veijer pole with a new Sachsenring Moto3 lap record (first sub-1:25)
      overall: { driverIds: ['veijer'], teamId: 'intact-gp-husqvarna-moto3' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['veijer'], teamId: 'intact-gp-husqvarna-moto3' },
        ],
      }],
    },
    race: {
      // Alonso sixth win of 2024 by 0.187s ahead of Furusato; Ortolá P3
      overall: { driverIds: ['alonso-d'], teamId: 'aspar-moto3' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['alonso-d'], teamId: 'aspar-moto3' },
          { position: 2, driverIds: ['furusato'], teamId: 'honda-team-asia-moto3' },
          { position: 3, driverIds: ['ortola'], teamId: 'mt-helmets-msi' },
        ],
      }],
    },
  },
  'moto3-2024-great-britain': {
    qualifying: {
      // Ortolá pole at Silverstone with a new lap record
      overall: { driverIds: ['ortola'], teamId: 'mt-helmets-msi' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['ortola'], teamId: 'mt-helmets-msi' },
        ],
      }],
    },
    race: {
      // Ortolá converts pole to a birthday win at Silverstone; Alonso P2, Veijer P3
      overall: { driverIds: ['ortola'], teamId: 'mt-helmets-msi' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['ortola'], teamId: 'mt-helmets-msi' },
          { position: 2, driverIds: ['alonso-d'], teamId: 'aspar-moto3' },
          { position: 3, driverIds: ['veijer'], teamId: 'intact-gp-husqvarna-moto3' },
        ],
      }],
    },
  },
  'moto3-2024-austria': {
    qualifying: {
      // Ortolá back-to-back poles at the Red Bull Ring
      overall: { driverIds: ['ortola'], teamId: 'mt-helmets-msi' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['ortola'], teamId: 'mt-helmets-msi' },
        ],
      }],
    },
    race: {
      // Alonso recovers from a long-lap penalty to win; Muñoz P2, Holgado P3
      overall: { driverIds: ['alonso-d'], teamId: 'aspar-moto3' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['alonso-d'], teamId: 'aspar-moto3' },
          { position: 2, driverIds: ['munoz-da'], teamId: 'boe-motorsports' },
          { position: 3, driverIds: ['holgado'], teamId: 'red-bull-gasgas-tech3-moto3' },
        ],
      }],
    },
  },
  'moto3-2024-aragon': {
    qualifying: {
      // Alonso fifth pole of 2024, dominating at MotorLand
      overall: { driverIds: ['alonso-d'], teamId: 'aspar-moto3' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['alonso-d'], teamId: 'aspar-moto3' },
        ],
      }],
    },
    race: {
      // Rueda's maiden Grand Prix victory on home soil (400th unique GP winner);
      //   Veijer P2, Lunetta P3 maiden Moto3 podium as Alonso demoted to P4
      overall: { driverIds: ['rueda-ja'], teamId: 'red-bull-ktm-ajo-moto3' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['rueda-ja'], teamId: 'red-bull-ktm-ajo-moto3' },
          { position: 2, driverIds: ['veijer'], teamId: 'intact-gp-husqvarna-moto3' },
          { position: 3, driverIds: ['lunetta'], teamId: 'sic58-squadra-corse' },
        ],
      }],
    },
  },
  'moto3-2024-san-marino': {
    qualifying: {
      // Alonso back-to-back poles, sixth of the season
      overall: { driverIds: ['alonso-d'], teamId: 'aspar-moto3' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['alonso-d'], teamId: 'aspar-moto3' },
        ],
      }],
    },
    race: {
      // Piqueras maiden win by 0.035s over Holgado after two long-lap penalties — Honda's
      //   first 2024 victory and Leopard's first of the year; Ortolá P3
      overall: { driverIds: ['piqueras'], teamId: 'leopard-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['piqueras'], teamId: 'leopard-racing' },
          { position: 2, driverIds: ['holgado'], teamId: 'red-bull-gasgas-tech3-moto3' },
          { position: 3, driverIds: ['ortola'], teamId: 'mt-helmets-msi' },
        ],
      }],
    },
  },
  'moto3-2024-emilia-romagna': {
    qualifying: {
      // Furusato maiden Moto3 (and career) pole at Misano
      overall: { driverIds: ['furusato'], teamId: 'honda-team-asia-moto3' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['furusato'], teamId: 'honda-team-asia-moto3' },
        ],
      }],
    },
    race: {
      // Alonso eighth win of 2024 by 0.175s; Piqueras P2, Veijer P3
      overall: { driverIds: ['alonso-d'], teamId: 'aspar-moto3' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['alonso-d'], teamId: 'aspar-moto3' },
          { position: 2, driverIds: ['piqueras'], teamId: 'leopard-racing' },
          { position: 3, driverIds: ['veijer'], teamId: 'intact-gp-husqvarna-moto3' },
        ],
      }],
    },
  },
  'moto3-2024-indonesia': {
    qualifying: {
      // Ortolá pole with a new Mandalika all-time lap record (also drew a double long lap)
      overall: { driverIds: ['ortola'], teamId: 'mt-helmets-msi' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['ortola'], teamId: 'mt-helmets-msi' },
        ],
      }],
    },
    race: {
      // Alonso ninth win of the season by 0.085s over Fernández (maiden Moto3 podium);
      //   Muñoz P3 as Veijer crashes; Alonso extends lead to 97 pts
      overall: { driverIds: ['alonso-d'], teamId: 'aspar-moto3' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['alonso-d'], teamId: 'aspar-moto3' },
          { position: 2, driverIds: ['fernandez-ad'], teamId: 'leopard-racing' },
          { position: 3, driverIds: ['munoz-da'], teamId: 'boe-motorsports' },
        ],
      }],
    },
  },
  'moto3-2024-japan': {
    qualifying: {
      // Ortolá back-to-back poles with the first sub-1:55 Moto3 lap of Motegi
      overall: { driverIds: ['ortola'], teamId: 'mt-helmets-msi' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['ortola'], teamId: 'mt-helmets-msi' },
        ],
      }],
    },
    race: {
      // Alonso wins by 0.524s to clinch the 2024 Moto3 World Championship at Motegi —
      //   first Colombian World Champion in any class; Veijer P2, Fernández P3
      overall: { driverIds: ['alonso-d'], teamId: 'aspar-moto3' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['alonso-d'], teamId: 'aspar-moto3' },
          { position: 2, driverIds: ['veijer'], teamId: 'intact-gp-husqvarna-moto3' },
          { position: 3, driverIds: ['fernandez-ad'], teamId: 'leopard-racing' },
        ],
      }],
    },
  },
  'moto3-2024-australia': {
    qualifying: {
      // Ortolá third consecutive pole — sixth of the season at Phillip Island
      overall: { driverIds: ['ortola'], teamId: 'mt-helmets-msi' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['ortola'], teamId: 'mt-helmets-msi' },
        ],
      }],
    },
    race: {
      // Newly crowned champion Alonso wins by 2.936s; Holgado P2, Fernández P3
      overall: { driverIds: ['alonso-d'], teamId: 'aspar-moto3' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['alonso-d'], teamId: 'aspar-moto3' },
          { position: 2, driverIds: ['holgado'], teamId: 'red-bull-gasgas-tech3-moto3' },
          { position: 3, driverIds: ['fernandez-ad'], teamId: 'leopard-racing' },
        ],
      }],
    },
  },
  'moto3-2024-thailand': {
    qualifying: {
      // Kelso maiden Moto3 pole — first Australian Moto3 pole since Jack Miller (2014)
      overall: { driverIds: ['kelso'], teamId: 'boe-motorsports' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['kelso'], teamId: 'boe-motorsports' },
        ],
      }],
    },
    race: {
      // Wet-classified race shortened to 12 laps; Alonso 12th win of 2024
      //   (lightweight-class record); Lunetta P2, Veijer P3
      overall: { driverIds: ['alonso-d'], teamId: 'aspar-moto3' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['alonso-d'], teamId: 'aspar-moto3' },
          { position: 2, driverIds: ['lunetta'], teamId: 'sic58-squadra-corse' },
          { position: 3, driverIds: ['veijer'], teamId: 'intact-gp-husqvarna-moto3' },
        ],
      }],
    },
  },
  'moto3-2024-malaysia': {
    qualifying: {
      // Fernández maiden Moto3 pole with a new Sepang lap record
      overall: { driverIds: ['fernandez-ad'], teamId: 'leopard-racing' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['fernandez-ad'], teamId: 'leopard-racing' },
        ],
      }],
    },
    race: {
      // Alonso 13th win of the season by 0.088s, breaking the all-class record for wins
      //   in a single season (lightweight class); Furusato P2, Rueda P3
      overall: { driverIds: ['alonso-d'], teamId: 'aspar-moto3' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['alonso-d'], teamId: 'aspar-moto3' },
          { position: 2, driverIds: ['furusato'], teamId: 'honda-team-asia-moto3' },
          { position: 3, driverIds: ['rueda-ja'], teamId: 'red-bull-ktm-ajo-moto3' },
        ],
      }],
    },
  },
  'moto3-2024-solidarity-barcelona': {
    qualifying: {
      // Alonso seventh pole of 2024 with a new Catalunya Moto3 all-time lap record
      overall: { driverIds: ['alonso-d'], teamId: 'aspar-moto3' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['alonso-d'], teamId: 'aspar-moto3' },
        ],
      }],
    },
    race: {
      // Alonso seventh straight win and 14th of the season — single-season record across
      //   all Grand Prix classes; Holgado P2 secures championship runner-up; Piqueras
      //   promoted to P3 after Fernández's 3s penalty
      overall: { driverIds: ['alonso-d'], teamId: 'aspar-moto3' },
      classes: [{
        className: 'Top 3',
        podium: [
          { position: 1, driverIds: ['alonso-d'], teamId: 'aspar-moto3' },
          { position: 2, driverIds: ['holgado'], teamId: 'red-bull-gasgas-tech3-moto3' },
          { position: 3, driverIds: ['piqueras'], teamId: 'leopard-racing' },
        ],
      }],
    },
  },
}
