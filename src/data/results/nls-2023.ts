import type { EventResults } from './types'

// NLS 2023 results — verified from dailysportscar.com, gt-report.com, nuerburgring-langstrecken-serie.de
export const nlsResults2023: Record<string, EventResults> = {
  // NLS 1 — 68. ADAC Westfalenfahrt (18 Mar 2023)
  'nls-2023-1': {
    endurance: {
      overall: { driverIds: ['vanthoor', 'martin'], teamId: 'rowe-racing' },
      classes: [{
        className: 'Overall',
        podium: [
          { position: 1, driverIds: ['vanthoor', 'martin'], teamId: 'rowe-racing' },
        ],
      }],
    },
  },
  // NLS 2 — 47. NIMEX DMV 4-Stunden-Rennen (1 Apr 2023)
  'nls-2023-2': {
    endurance: {
      overall: { driverIds: ['giermaziak', 'j-krohn'], teamId: 'walkenhorst' },
      classes: [{
        className: 'Overall',
        podium: [
          { position: 1, driverIds: ['giermaziak', 'j-krohn'], teamId: 'walkenhorst' },
        ],
      }],
    },
  },
  // NLS 3 — 54. Adenauer ADAC Rundstrecken-Trophy (15 Apr 2023)
  'nls-2023-3': {
    endurance: {
      overall: { driverIds: ['dan-harper', 'hesse-m', 'verhagen'], teamId: 'rowe-racing' },
      classes: [{
        className: 'Overall',
        podium: [
          { position: 1, driverIds: ['dan-harper', 'hesse-m', 'verhagen'], teamId: 'rowe-racing' },
        ],
      }],
    },
  },
  // NLS 4 — 46. RCM DMV Grenzlandrennen (17 Jun 2023)
  'nls-2023-4': {
    endurance: {
      overall: { driverIds: ['giermaziak', 'krognes'], teamId: 'walkenhorst' },
      classes: [{
        className: 'Overall',
        podium: [
          { position: 1, driverIds: ['giermaziak', 'krognes'], teamId: 'walkenhorst' },
        ],
      }],
    },
  },
  // NLS 5 — ROWE 6h ADAC Ruhr-Pokal-Rennen (8 Jul 2023)
  'nls-2023-5': {
    endurance: {
      overall: { driverIds: ['pittard', 'eriksson'], teamId: 'falken-motorsports' },
      classes: [{
        className: 'Overall',
        podium: [
          { position: 1, driverIds: ['pittard', 'eriksson'], teamId: 'falken-motorsports' },
        ],
      }],
    },
  },
  // 12h Nürburgring — 63. ADAC ACAS Cup (9 Sep 2023)
  'nls-2023-12h-1': {
    endurance: {
      overall: { driverIds: ['krognes', 'giermaziak'], teamId: 'walkenhorst' },
      classes: [{
        className: 'Overall',
        podium: [
          { position: 1, driverIds: ['krognes', 'giermaziak'], teamId: 'walkenhorst' },
        ],
      }],
    },
  },
  // 12h Nürburgring — 62. ADAC Reinoldus-Langstreckenrennen (10 Sep 2023)
  'nls-2023-12h-2': {
    endurance: {
      overall: { driverIds: ['krognes', 'giermaziak'], teamId: 'walkenhorst' },
      classes: [{
        className: 'Overall',
        podium: [
          { position: 1, driverIds: ['krognes', 'giermaziak'], teamId: 'walkenhorst' },
        ],
      }],
    },
  },
  // NLS 8 — 55. ADAC Barbarossapreis (23 Sep 2023)
  'nls-2023-8': {
    endurance: {
      overall: { driverIds: ['krognes', 'giermaziak'], teamId: 'walkenhorst' },
      classes: [{
        className: 'Overall',
        podium: [
          { position: 1, driverIds: ['krognes', 'giermaziak'], teamId: 'walkenhorst' },
        ],
      }],
    },
  },
  // NLS 9 — 47. PAGID Racing DMV Münsterlandpokal (7 Oct 2023)
  'nls-2023-9': {
    endurance: {
      overall: { driverIds: ['stippler', 'mies'], teamId: 'scherer-sport-phx' },
      classes: [{
        className: 'Overall',
        podium: [
          { position: 1, driverIds: ['stippler', 'mies'], teamId: 'scherer-sport-phx' },
        ],
      }],
    },
  },
}
