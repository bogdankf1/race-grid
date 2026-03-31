import type { EventResults } from './types'

// NLS 2025 results — verified from nuerburgring-langstrecken-serie.de, 51gt3.com, motorsport.com
export const nlsResults2025: Record<string, EventResults> = {
  // NLS 1 — 70th ADAC Westfalenfahrt (22 Mar 2025)
  'nls-2025-1': {
    qualifying: {
      overall: { driverIds: ['stippler'], teamId: 'juta-racing' },
      classes: [{ className: 'Top 3', podium: [{ position: 1, driverIds: ['stippler'], teamId: 'juta-racing' }] }],
    },
    endurance: {
      overall: { driverIds: ['muller', 'schuring'], teamId: 'falken-motorsports' },
      classes: [{
        className: 'Overall',
        podium: [
          { position: 1, driverIds: ['muller', 'schuring'], teamId: 'falken-motorsports' },
        ],
      }],
    },
  },
  // NLS 2 — ADAC Barbarossapreis (29 Mar 2025)
  'nls-2025-2': {
    qualifying: {
      overall: { driverIds: ['verstappen'], teamId: 'winward-racing' },
      classes: [{ className: 'Top 3', podium: [{ position: 1, driverIds: ['verstappen'], teamId: 'winward-racing' }] }],
    },
    endurance: {
      // Verstappen/Juncadella/Gounon crossed first but DQ'd — victory to ROWE Racing
      overall: { driverIds: ['harper', 'pepper'], teamId: 'rowe-racing' },
      classes: [{
        className: 'Overall',
        podium: [
          { position: 1, driverIds: ['harper', 'pepper'], teamId: 'rowe-racing' },
        ],
      }],
    },
  },
  // NLS 3 — 56th Adenauer ADAC Rundstrecken-Trophy (10 May 2025)
  'nls-2025-3': {
    qualifying: {
      overall: { driverIds: ['guven'], teamId: 'manthey' },
      classes: [{ className: 'Top 3', podium: [{ position: 1, driverIds: ['guven'], teamId: 'manthey' }] }],
    },
    endurance: {
      overall: { driverIds: ['preining', 'guven'], teamId: 'manthey' },
      classes: [{
        className: 'Overall',
        podium: [
          { position: 1, driverIds: ['preining', 'guven'], teamId: 'manthey' },
        ],
      }],
    },
  },
  // NLS 4 — ADAC 24h Qualifiers Race 1 (24 May 2025)
  'nls-2025-24h-quali-1': {
    qualifying: {
      overall: { driverIds: ['estre'], teamId: 'manthey' },
      classes: [{ className: 'Top 3', podium: [{ position: 1, driverIds: ['estre'], teamId: 'manthey' }] }],
    },
    endurance: {
      overall: { driverIds: ['niederhauser', 'vanthoor'], teamId: 'scherer-sport-phx' },
      classes: [{
        className: 'Overall',
        podium: [
          { position: 1, driverIds: ['niederhauser', 'vanthoor'], teamId: 'scherer-sport-phx' },
        ],
      }],
    },
  },
  // NLS 5 — ADAC 24h Qualifiers Race 2 (25 May 2025)
  'nls-2025-24h-quali-2': {
    endurance: {
      overall: { driverIds: ['niederhauser', 'vanthoor'], teamId: 'scherer-sport-phx' },
      classes: [{
        className: 'Overall',
        podium: [
          { position: 1, driverIds: ['niederhauser', 'vanthoor'], teamId: 'scherer-sport-phx' },
        ],
      }],
    },
  },
  // NLS 6 — 49th KW 6h ADAC Ruhr-Pokal-Rennen (16 Aug 2025)
  'nls-2025-6': {
    qualifying: {
      overall: { driverIds: ['menzel'], teamId: 'falken-motorsports' },
      classes: [{ className: 'Top 3', podium: [{ position: 1, driverIds: ['menzel'], teamId: 'falken-motorsports' }] }],
    },
    endurance: {
      overall: { driverIds: ['bachler', 'muller'], teamId: 'falken-motorsports' },
      classes: [{
        className: 'Overall',
        podium: [
          { position: 1, driverIds: ['bachler', 'muller'], teamId: 'falken-motorsports' },
        ],
      }],
    },
  },
  // NLS 7 — ADAC ACAS Cup (13 Sep 2025, Race 1)
  'nls-2025-7': {
    qualifying: {
      overall: { driverIds: ['andlauer'], teamId: 'falken-motorsports' },
      classes: [{ className: 'Top 3', podium: [{ position: 1, driverIds: ['andlauer'], teamId: 'falken-motorsports' }] }],
    },
    endurance: {
      overall: { driverIds: ['andlauer', 'sturm'], teamId: 'falken-motorsports' },
      classes: [{
        className: 'Overall',
        podium: [
          { position: 1, driverIds: ['andlauer', 'sturm'], teamId: 'falken-motorsports' },
        ],
      }],
    },
  },
  // NLS 8 — 64th ADAC Reinoldus-Langstreckenrennen (13 Sep 2025, Race 2)
  'nls-2025-8': {
    qualifying: {
      overall: { driverIds: ['fontana'], teamId: 'car-collection' },
      classes: [{ className: 'Top 3', podium: [{ position: 1, driverIds: ['fontana'], teamId: 'car-collection' }] }],
    },
    endurance: {
      overall: { driverIds: ['kolb', 'stippler'], teamId: 'haupt-racing' },
      classes: [{
        className: 'Overall',
        podium: [
          { position: 1, driverIds: ['kolb', 'stippler'], teamId: 'haupt-racing' },
        ],
      }],
    },
  },
  // NLS 9 — 57th ADAC Barbarossapreis (27 Sep 2025)
  'nls-2025-9': {
    qualifying: {
      overall: { driverIds: ['krognes'], teamId: 'walkenhorst' },
      classes: [{ className: 'Top 3', podium: [{ position: 1, driverIds: ['krognes'], teamId: 'walkenhorst' }] }],
    },
    endurance: {
      overall: { driverIds: ['verstappen', 'lulham'], teamId: 'emil-frey-racing' },
      classes: [{
        className: 'Overall',
        podium: [
          { position: 1, driverIds: ['verstappen', 'lulham'], teamId: 'emil-frey-racing' },
        ],
      }],
    },
  },
  // NLS 10 — 1st NLS Sportwarte-Trophy (11 Oct 2025)
  'nls-2025-10': {
    qualifying: {
      overall: { driverIds: ['scherer'], teamId: 'haupt-racing' },
      classes: [{ className: 'Top 3', podium: [{ position: 1, driverIds: ['scherer'], teamId: 'haupt-racing' }] }],
    },
    endurance: {
      overall: { driverIds: ['boccolacci', 'menzel'], teamId: 'falken-motorsports' },
      classes: [{
        className: 'Overall',
        podium: [
          { position: 1, driverIds: ['boccolacci', 'menzel'], teamId: 'falken-motorsports' },
        ],
      }],
    },
  },
}
