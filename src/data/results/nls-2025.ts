import { EventResults } from './types'

// NLS 2025 results — verified from nuerburgring-langstrecken-serie.de, 51gt3.com, motorsport.com
export const nlsResults2025: Record<string, EventResults> = {
  // NLS 1 — 70th ADAC Westfalenfahrt (22 Mar 2025)
  'nls-2025-1': {
    qualifying: {
      overall: { drivers: ['Stippler'], team: 'JUTA Racing Audi #8' },
      classes: [{ className: 'Top 3', podium: [{ position: 1, drivers: ['Stippler'], team: 'JUTA Racing Audi #8' }] }],
    },
    endurance: {
      overall: { drivers: ['Müller', 'Schuring'], team: 'Falken Motorsports Porsche #3' },
      classes: [{
        className: 'Overall',
        podium: [
          { position: 1, drivers: ['Müller', 'Schuring'], team: 'Falken Motorsports Porsche #3' },
        ],
      }],
    },
  },
  // NLS 2 — ADAC Barbarossapreis (29 Mar 2025)
  'nls-2025-2': {
    qualifying: {
      overall: { drivers: ['Verstappen'], team: 'Winward Racing Mercedes-AMG' },
      classes: [{ className: 'Top 3', podium: [{ position: 1, drivers: ['Verstappen'], team: 'Winward Racing Mercedes-AMG' }] }],
    },
    endurance: {
      // Verstappen/Juncadella/Gounon crossed first but DQ'd — victory to ROWE Racing
      overall: { drivers: ['Harper', 'Pepper'], team: 'ROWE Racing BMW' },
      classes: [{
        className: 'Overall',
        podium: [
          { position: 1, drivers: ['Harper', 'Pepper'], team: 'ROWE Racing BMW' },
        ],
      }],
    },
  },
  // NLS 3 — 56th Adenauer ADAC Rundstrecken-Trophy (10 May 2025)
  'nls-2025-3': {
    qualifying: {
      overall: { drivers: ['Güven'], team: 'Manthey EMA Porsche #911' },
      classes: [{ className: 'Top 3', podium: [{ position: 1, drivers: ['Güven'], team: 'Manthey EMA Porsche #911' }] }],
    },
    endurance: {
      overall: { drivers: ['Preining', 'Güven'], team: 'Manthey EMA Porsche #911' },
      classes: [{
        className: 'Overall',
        podium: [
          { position: 1, drivers: ['Preining', 'Güven'], team: 'Manthey EMA Porsche #911' },
        ],
      }],
    },
  },
  // NLS 4 — ADAC 24h Qualifiers Race 1 (24 May 2025)
  'nls-2025-24h-quali-1': {
    qualifying: {
      overall: { drivers: ['Estre'], team: 'Manthey EMA Porsche' },
      classes: [{ className: 'Top 3', podium: [{ position: 1, drivers: ['Estre'], team: 'Manthey EMA Porsche' }] }],
    },
    endurance: {
      overall: { drivers: ['Niederhauser', 'Vanthoor'], team: 'Scherer Sport PHX Porsche #16' },
      classes: [{
        className: 'Overall',
        podium: [
          { position: 1, drivers: ['Niederhauser', 'Vanthoor'], team: 'Scherer Sport PHX Porsche #16' },
        ],
      }],
    },
  },
  // NLS 5 — ADAC 24h Qualifiers Race 2 (25 May 2025)
  'nls-2025-24h-quali-2': {
    endurance: {
      overall: { drivers: ['Niederhauser', 'Vanthoor'], team: 'Scherer Sport PHX Porsche #16' },
      classes: [{
        className: 'Overall',
        podium: [
          { position: 1, drivers: ['Niederhauser', 'Vanthoor'], team: 'Scherer Sport PHX Porsche #16' },
        ],
      }],
    },
  },
  // NLS 6 — 49th KW 6h ADAC Ruhr-Pokal-Rennen (16 Aug 2025)
  'nls-2025-6': {
    qualifying: {
      overall: { drivers: ['Menzel'], team: 'Falken Motorsports Porsche #3' },
      classes: [{ className: 'Top 3', podium: [{ position: 1, drivers: ['Menzel'], team: 'Falken Motorsports Porsche #3' }] }],
    },
    endurance: {
      overall: { drivers: ['Bachler', 'Müller'], team: 'Falken Motorsports Porsche #3' },
      classes: [{
        className: 'Overall',
        podium: [
          { position: 1, drivers: ['Bachler', 'Müller'], team: 'Falken Motorsports Porsche #3' },
        ],
      }],
    },
  },
  // NLS 7 — ADAC ACAS Cup (13 Sep 2025, Race 1)
  'nls-2025-7': {
    qualifying: {
      overall: { drivers: ['Andlauer'], team: 'Falken Motorsports Porsche #3' },
      classes: [{ className: 'Top 3', podium: [{ position: 1, drivers: ['Andlauer'], team: 'Falken Motorsports Porsche #3' }] }],
    },
    endurance: {
      overall: { drivers: ['Andlauer', 'Sturm'], team: 'Falken Motorsports Porsche #3' },
      classes: [{
        className: 'Overall',
        podium: [
          { position: 1, drivers: ['Andlauer', 'Sturm'], team: 'Falken Motorsports Porsche #3' },
        ],
      }],
    },
  },
  // NLS 8 — 64th ADAC Reinoldus-Langstreckenrennen (13 Sep 2025, Race 2)
  'nls-2025-8': {
    qualifying: {
      overall: { drivers: ['Fontana'], team: 'Car Collection Motorsport Porsche #44' },
      classes: [{ className: 'Top 3', podium: [{ position: 1, drivers: ['Fontana'], team: 'Car Collection Motorsport Porsche #44' }] }],
    },
    endurance: {
      overall: { drivers: ['Kolb', 'Stippler'], team: 'Haupt Racing Team Ford Mustang GT3 #6' },
      classes: [{
        className: 'Overall',
        podium: [
          { position: 1, drivers: ['Kolb', 'Stippler'], team: 'Haupt Racing Team Ford Mustang GT3 #6' },
        ],
      }],
    },
  },
  // NLS 9 — 57th ADAC Barbarossapreis (27 Sep 2025)
  'nls-2025-9': {
    qualifying: {
      overall: { drivers: ['Krognes'], team: 'Walkenhorst Motorsport Aston Martin #34' },
      classes: [{ className: 'Top 3', podium: [{ position: 1, drivers: ['Krognes'], team: 'Walkenhorst Motorsport Aston Martin #34' }] }],
    },
    endurance: {
      overall: { drivers: ['Verstappen', 'Lulham'], team: 'Emil Frey Racing Ferrari #14' },
      classes: [{
        className: 'Overall',
        podium: [
          { position: 1, drivers: ['Verstappen', 'Lulham'], team: 'Emil Frey Racing Ferrari #14' },
        ],
      }],
    },
  },
  // NLS 10 — 1st NLS Sportwarte-Trophy (11 Oct 2025)
  'nls-2025-10': {
    qualifying: {
      overall: { drivers: ['Scherer'], team: 'Haupt Racing Team Ford Mustang GT3 #9' },
      classes: [{ className: 'Top 3', podium: [{ position: 1, drivers: ['Scherer'], team: 'Haupt Racing Team Ford Mustang GT3 #9' }] }],
    },
    endurance: {
      overall: { drivers: ['Boccolacci', 'Menzel'], team: 'Falken Motorsports Porsche #4' },
      classes: [{
        className: 'Overall',
        podium: [
          { position: 1, drivers: ['Boccolacci', 'Menzel'], team: 'Falken Motorsports Porsche #4' },
        ],
      }],
    },
  },
}
