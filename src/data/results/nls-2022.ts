import type { EventResults } from './types'

// NLS 2022 results — verified from dailysportscar.com, gt-report.com, nuerburgring-langstrecken-serie.de
export const nlsResults2022: Record<string, EventResults> = {
  // NLS 1 — 67. ADAC Westfalenfahrt (26 Mar 2022)
  'nls-2022-1': {
    endurance: {
      overall: { driverIds: ['l-vanthoor', 'christensen', 'makowiecki'], teamId: 'manthey' },
      classes: [{
        className: 'Overall',
        podium: [
          { position: 1, driverIds: ['l-vanthoor', 'christensen', 'makowiecki'], teamId: 'manthey' },
        ],
      }],
    },
  },
  // NLS 2 — 53. Adenauer ADAC Rundstrecken-Trophy (23 Apr 2022)
  'nls-2022-2': {
    endurance: {
      overall: { driverIds: ['de-phillippi', 'farfus'], teamId: 'rowe-racing' },
      classes: [{
        className: 'Overall',
        podium: [
          { position: 1, driverIds: ['de-phillippi', 'farfus'], teamId: 'rowe-racing' },
        ],
      }],
    },
  },
  // NLS 3 — 45. RCM DMV Grenzlandrennen (25 Jun 2022)
  'nls-2022-3': {
    endurance: {
      overall: { driverIds: ['rast', 'giermaziak'], teamId: 'scherer-sport-phx' },
      classes: [{
        className: 'Overall',
        podium: [
          { position: 1, driverIds: ['rast', 'giermaziak'], teamId: 'scherer-sport-phx' },
        ],
      }],
    },
  },
  // NLS 4 — ROWE 6 Stunden ADAC Ruhr-Pokal-Rennen (9 Jul 2022)
  'nls-2022-4': {
    endurance: {
      overall: { driverIds: ['muller', 'eriksson'], teamId: 'falken-motorsports' },
      classes: [{
        className: 'Overall',
        podium: [
          { position: 1, driverIds: ['muller', 'eriksson'], teamId: 'falken-motorsports' },
        ],
      }],
    },
  },
  // NLS 5 — 12 Stunden Nürburgring (10 Sep 2022)
  'nls-2022-5': {
    endurance: {
      overall: { driverIds: ['eriksson', 'evans-j', 'muller', 'picariello'], teamId: 'falken-motorsports' },
      classes: [{
        className: 'Overall',
        podium: [
          { position: 1, driverIds: ['eriksson', 'evans-j', 'muller', 'picariello'], teamId: 'falken-motorsports' },
        ],
      }],
    },
  },
  // NLS 6 — 54. ADAC Barbarossapreis (8 Oct 2022)
  'nls-2022-6': {
    endurance: {
      overall: { driverIds: ['giermaziak', 'schramm', 'engstler'], teamId: 'scherer-sport-phx' },
      classes: [{
        className: 'Overall',
        podium: [
          { position: 1, driverIds: ['giermaziak', 'schramm', 'engstler'], teamId: 'scherer-sport-phx' },
        ],
      }],
    },
  },
  // NLS 7 — PAGID Racing 46. DMV Münsterlandpokal (22 Oct 2022)
  'nls-2022-7': {
    endurance: {
      overall: { driverIds: ['giermaziak', 'k-van-der-linde'], teamId: 'scherer-sport-phx' },
      classes: [{
        className: 'Overall',
        podium: [
          { position: 1, driverIds: ['giermaziak', 'k-van-der-linde'], teamId: 'scherer-sport-phx' },
        ],
      }],
    },
  },
  // NLS 8 — 46. NIMEX DMV 4-Stunden-Rennen (5 Nov 2022)
  'nls-2022-8': {
    endurance: {
      overall: { driverIds: ['giermaziak', 'schramm'], teamId: 'scherer-sport-phx' },
      classes: [{
        className: 'Overall',
        podium: [
          { position: 1, driverIds: ['giermaziak', 'schramm'], teamId: 'scherer-sport-phx' },
        ],
      }],
    },
  },
}
