import type { EventResults } from './types'

// NLS 2021 results — verified from dailysportscar.com, gt-report.com, nuerburgring-langstrecken-serie.de
export const nlsResults2021: Record<string, EventResults> = {
  // NLS 1 — 66. ADAC Westfalenfahrt (27 Mar 2021) — CANCELLED due to snow
  // No results for nls-2021-1

  // NLS 2 — 45. DMV 4-Stunden-Rennen (17 Apr 2021)
  'nls-2021-2': {
    endurance: {
      overall: { driverIds: ['estre', 'christensen', 'lars-kern'], teamId: 'manthey' },
      classes: [{
        className: 'Overall',
        podium: [
          { position: 1, driverIds: ['estre', 'christensen', 'lars-kern'], teamId: 'manthey' },
        ],
      }],
    },
  },
  // NLS 3 — 62. ADAC ACAS Cup (1 May 2021)
  'nls-2021-3': {
    endurance: {
      overall: { driverIds: ['bamber', 'jaminet'], teamId: 'frikadelli-racing' },
      classes: [{
        className: 'Overall',
        podium: [
          { position: 1, driverIds: ['bamber', 'jaminet'], teamId: 'frikadelli-racing' },
        ],
      }],
    },
  },
  // NLS 4 — 52. Adenauer ADAC Rundstrecken-Trophy (26 Jun 2021)
  'nls-2021-4': {
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
  // NLS 5 — 61. ADAC Reinoldus-Langstreckenrennen (10 Jul 2021)
  'nls-2021-5': {
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
  // NLS 6 — 44. RCM DMV Grenzlandrennen (11 Jul 2021)
  'nls-2021-6': {
    endurance: {
      overall: { driverIds: ['krognes', 'pittard', 'tuck'], teamId: 'walkenhorst' },
      classes: [{
        className: 'Overall',
        podium: [
          { position: 1, driverIds: ['krognes', 'pittard', 'tuck'], teamId: 'walkenhorst' },
        ],
      }],
    },
  },
  // NLS 7 — ROWE 6 Stunden ADAC Ruhr-Pokal-Rennen (11 Sep 2021)
  'nls-2021-7': {
    endurance: {
      overall: { driverIds: ['christensen', 'estre'], teamId: 'manthey' },
      classes: [{
        className: 'Overall',
        podium: [
          { position: 1, driverIds: ['christensen', 'estre'], teamId: 'manthey' },
        ],
      }],
    },
  },
  // NLS 8 — 53. ADAC Barbarossapreis (25 Sep 2021)
  'nls-2021-8': {
    endurance: {
      overall: { driverIds: ['martin', 'thiim'], teamId: 'aston-martin' },
      classes: [{
        className: 'Overall',
        podium: [
          { position: 1, driverIds: ['martin', 'thiim'], teamId: 'aston-martin' },
        ],
      }],
    },
  },
  // NLS 9 — 45. DMV Münsterlandpokal (9 Oct 2021)
  'nls-2021-9': {
    endurance: {
      overall: { driverIds: ['stippler', 'kolb'], teamId: 'scherer-sport-phx' },
      classes: [{
        className: 'Overall',
        podium: [
          { position: 1, driverIds: ['stippler', 'kolb'], teamId: 'scherer-sport-phx' },
        ],
      }],
    },
  },
}
