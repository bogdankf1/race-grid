import type { EventResults } from './types'

// IMSA Michelin Pilot Challenge 2022 results — verified 2026-06-08
// Sources:
//   - en.wikipedia.org/wiki/2022_Michelin_Pilot_Challenge
//   - imsa.com/news per-event race reports
//   - sportscar365.com IMPC race reports
//   - racer.com, frontstretch.com, dailysportscar.com, thethirdturn.com
//   - hyundainews.com / honda press releases for class podiums
//
// Multi-class series: GS (GT4) overall winner is the de facto race overall winner.
// Pole positions captured separately for GS and TCR where confirmed.
export const impcResults2022: Record<string, EventResults> = {
  // Round 1 — BMW M Endurance Challenge at Daytona (Jan 28, 4H)
  'impc-2022-daytona': {
    qualifying: {
      // GS pole: Andrew Davis (#8 McCann Racing Porsche 718 GT4 RS Clubsport) — 113.647 mph
      // TCR pole not confirmed in publicly available sources at time of verification.
      overall: { driverIds: ['davis-a'], teamId: 'mccann-racing' },
      classes: [
        {
          className: 'GS',
          podium: [
            { position: 1, driverIds: ['davis-a'], teamId: 'mccann-racing' },
          ],
        },
      ],
    },
    endurance: {
      // Overall winner = GS winner: #28 RS1 Porsche 718 Cayman GT4 RS Clubsport
      overall: { driverIds: ['filgueiras', 'mcaleer'], teamId: 'rs1' },
      classes: [
        {
          className: 'GS',
          podium: [
            { position: 1, driverIds: ['filgueiras', 'mcaleer'], teamId: 'rs1' },
            { position: 2, driverIds: ['giovanis', 'trinkler'], teamId: 'team-tgm' },
            { position: 3, driverIds: ['auberlen', 'machavern'], teamId: 'turner-motorsport' },
          ],
        },
        {
          className: 'TCR',
          podium: [
            { position: 1, driverIds: ['block', 'lewis-tim'], teamId: 'kmw-motorsports' },
            { position: 2, driverIds: ['lewis-m', 'hagler'], teamId: 'bryan-herta-autosport' },
            { position: 3, driverIds: ['wickens', 'wilkins-m'], teamId: 'bryan-herta-autosport' },
          ],
        },
      ],
    },
  },

  // Round 2 — Alan Jay Automotive Network 120 at Sebring (Mar 17, 2H)
  'impc-2022-sebring': {
    qualifying: {
      // TCR pole: Mason Filippi (#77 Bryan Herta Autosport Hyundai Elantra N TCR) — 2:14.446
      // GS pole not confirmed in publicly available sources.
      overall: { driverIds: ['filippi'], teamId: 'bryan-herta-autosport' },
      classes: [
        {
          className: 'TCR',
          podium: [
            { position: 1, driverIds: ['filippi'], teamId: 'bryan-herta-autosport' },
          ],
        },
      ],
    },
    race: {
      // Overall winner = GS winner: #40 PF Racing Ford Mustang GT4
      overall: { driverIds: ['mccumbee', 'pesek'], teamId: 'pf-racing' },
      classes: [
        {
          className: 'GS',
          podium: [
            { position: 1, driverIds: ['mccumbee', 'pesek'], teamId: 'pf-racing' },
            { position: 2, driverIds: ['hindman', 'brynjolfsson'], teamId: 'volt-racing' },
            { position: 3, driverIds: ['jakos', 'najri'], teamId: 'tgr-riley-motorsports' },
          ],
        },
        {
          className: 'TCR',
          podium: [
            { position: 1, driverIds: ['gonzalez-v', 'wittmer-k'], teamId: 'victor-gonzalez-racing' },
            { position: 2, driverIds: ['lewis-m', 'hagler'], teamId: 'bryan-herta-autosport' },
            { position: 3, driverIds: ['taylor-mikey', 'miller-c'], teamId: 'unitronic-jdc-miller-motorsports' },
          ],
        },
      ],
    },
  },

  // Round 3 — WeatherTech Raceway Laguna Seca 120 (Apr 30, 2H)
  'impc-2022-laguna-seca': {
    qualifying: {
      // GS pole: Kenton Koch (#56 Murillo Racing Mercedes-AMG GT4) — 89.592 mph
      // TCR pole: Hyundai (Bryan Herta Autosport) topped TCR; specific driver not confirmed.
      overall: { driverIds: ['koch'], teamId: 'murillo-racing' },
      classes: [
        {
          className: 'GS',
          podium: [
            { position: 1, driverIds: ['koch'], teamId: 'murillo-racing' },
          ],
        },
      ],
    },
    race: {
      // Overall winner = GS winner: #7 VOLT Racing Aston Martin Vantage AMR GT4
      overall: { driverIds: ['hindman', 'brynjolfsson'], teamId: 'volt-racing' },
      classes: [
        {
          className: 'GS',
          podium: [
            { position: 1, driverIds: ['hindman', 'brynjolfsson'], teamId: 'volt-racing' },
            { position: 2, driverIds: ['filgueiras', 'mcaleer'], teamId: 'rs1' },
            { position: 3, driverIds: ['najri', 'camilo'], teamId: 'tgr-riley-motorsports' },
          ],
        },
        {
          className: 'TCR',
          podium: [
            { position: 1, driverIds: ['block', 'lewis-tim'], teamId: 'kmw-motorsports' },
            { position: 2, driverIds: ['rockwell', 'dupont'], teamId: 'belgard-techniseal-racing' },
            { position: 3, driverIds: ['gonzalez-t', 'van-der-steur'], teamId: 'van-der-steur-racing' },
          ],
        },
      ],
    },
  },

  // Round 4 — Mid-Ohio 120 (May 14, 2H)
  'impc-2022-mid-ohio': {
    qualifying: {
      // GS pole: Kenton Koch (#56 Murillo Racing Mercedes-AMG GT4) — second consecutive pole
      // TCR pole: Monteiro per Sportscar365 — not confirmed driver ID in sources.
      overall: { driverIds: ['koch'], teamId: 'murillo-racing' },
      classes: [
        {
          className: 'GS',
          podium: [
            { position: 1, driverIds: ['koch'], teamId: 'murillo-racing' },
          ],
        },
      ],
    },
    race: {
      // Overall winner = GS winner: #56 Murillo Racing Mercedes-AMG GT4
      overall: { driverIds: ['foss', 'koch'], teamId: 'murillo-racing' },
      classes: [
        {
          className: 'GS',
          podium: [
            { position: 1, driverIds: ['foss', 'koch'], teamId: 'murillo-racing' },
            { position: 2, driverIds: ['hindman', 'brynjolfsson'], teamId: 'volt-racing' },
            { position: 3, driverIds: ['davis-a', 'mccann'], teamId: 'mccann-racing' },
          ],
        },
        {
          className: 'TCR',
          podium: [
            { position: 1, driverIds: ['chase-p', 'gottsacker'], teamId: 'bryan-herta-autosport' },
            { position: 2, driverIds: ['lewis-m', 'hagler'], teamId: 'bryan-herta-autosport' },
            { position: 3, driverIds: ['filippi', 'maxson-t'], teamId: 'bryan-herta-autosport' },
          ],
        },
      ],
    },
  },

  // Round 5 — Tioga Downs Casino Resort 120 at The Glen (Jun 25, 2H)
  'impc-2022-watkins-glen': {
    qualifying: {
      // GS pole: Dillon Machavern (#95 Turner Motorsport BMW M4 GT4)
      // TCR pole: Mason Filippi / Tyler Maxson (#77 Bryan Herta Autosport Hyundai)
      overall: { driverIds: ['machavern'], teamId: 'turner-motorsport' },
      classes: [
        {
          className: 'GS',
          podium: [
            { position: 1, driverIds: ['machavern'], teamId: 'turner-motorsport' },
          ],
        },
        {
          className: 'TCR',
          podium: [
            { position: 1, driverIds: ['filippi', 'maxson-t'], teamId: 'bryan-herta-autosport' },
          ],
        },
      ],
    },
    race: {
      // Overall winner = GS winner: #95 Turner Motorsport BMW M4 GT4
      overall: { driverIds: ['auberlen', 'machavern'], teamId: 'turner-motorsport' },
      classes: [
        {
          className: 'GS',
          podium: [
            { position: 1, driverIds: ['auberlen', 'machavern'], teamId: 'turner-motorsport' },
            { position: 2, driverIds: ['mcaleer', 'filgueiras'], teamId: 'rs1' },
            { position: 3, driverIds: ['szymczak', 'murillo'], teamId: 'murillo-racing' },
          ],
        },
        {
          className: 'TCR',
          podium: [
            { position: 1, driverIds: ['wickens', 'wilkins-m'], teamId: 'bryan-herta-autosport' },
            { position: 2, driverIds: ['lewis-m', 'hagler'], teamId: 'bryan-herta-autosport' },
            { position: 3, driverIds: ['filippi', 'maxson-t'], teamId: 'bryan-herta-autosport' },
          ],
        },
      ],
    },
  },

  // Round 6 — Canadian Tire Motorsport Park 120 (Jul 2, 2H)
  'impc-2022-ctmp': {
    qualifying: {
      // GS pole: Kenny Murillo (#72 Murillo Racing Mercedes-AMG GT4)
      overall: { driverIds: ['murillo'], teamId: 'murillo-racing' },
      classes: [
        {
          className: 'GS',
          podium: [
            { position: 1, driverIds: ['murillo'], teamId: 'murillo-racing' },
          ],
        },
      ],
    },
    race: {
      // Overall winner = GS winner: #56 Murillo Racing Mercedes-AMG GT4
      overall: { driverIds: ['foss', 'miller-marc'], teamId: 'murillo-racing' },
      classes: [
        {
          className: 'GS',
          podium: [
            { position: 1, driverIds: ['foss', 'miller-marc'], teamId: 'murillo-racing' },
            { position: 2, driverIds: ['szymczak', 'murillo'], teamId: 'murillo-racing' },
            { position: 3, driverIds: ['hindman', 'brynjolfsson'], teamId: 'volt-racing' },
          ],
        },
        {
          className: 'TCR',
          podium: [
            { position: 1, driverIds: ['wickens', 'wilkins-m'], teamId: 'bryan-herta-autosport' },
            { position: 2, driverIds: ['lewis-m', 'hagler'], teamId: 'bryan-herta-autosport' },
            { position: 3, driverIds: ['chase-p', 'gottsacker'], teamId: 'bryan-herta-autosport' },
          ],
        },
      ],
    },
  },

  // Round 7 — Lime Rock Park 120 (Jul 16, 2H)
  'impc-2022-lime-rock': {
    qualifying: {
      // GS pole: Dubets (BMW) per Sportscar365; specific driver ID not confirmed.
      // TCR pole: Robert Wickens (#33 Bryan Herta Autosport Hyundai)
      overall: { driverIds: ['wickens'], teamId: 'bryan-herta-autosport' },
      classes: [
        {
          className: 'TCR',
          podium: [
            { position: 1, driverIds: ['wickens'], teamId: 'bryan-herta-autosport' },
          ],
        },
      ],
    },
    race: {
      // Overall winner = GS winner: #71 Rebel Rock Racing Chevrolet Camaro GT4.R
      overall: { driverIds: ['depew', 'liddell'], teamId: 'rebel-rock-racing' },
      classes: [
        {
          className: 'GS',
          podium: [
            { position: 1, driverIds: ['depew', 'liddell'], teamId: 'rebel-rock-racing' },
            { position: 2, driverIds: ['hindman', 'brynjolfsson'], teamId: 'volt-racing' },
            { position: 3, driverIds: ['marcelli', 'monk'], teamId: 'pf-racing' },
          ],
        },
        {
          className: 'TCR',
          podium: [
            { position: 1, driverIds: ['miller-c', 'taylor-mikey'], teamId: 'unitronic-jdc-miller-motorsports' },
            { position: 2, driverIds: ['brown-p', 'dupont'], teamId: 'belgard-techniseal-racing' },
            { position: 3, driverIds: ['johnson-m', 'simpson-stephen'], teamId: 'michael-johnson-racing' },
          ],
        },
      ],
    },
  },

  // Round 8 — Road America 240 (Aug 6, 4H)
  'impc-2022-road-america': {
    qualifying: {
      // GS pole: Luca Mars (#60 KohR Motorsports Ford Mustang GT4) — .289s over Koch
      overall: { driverIds: ['mars'], teamId: 'kohr-motorsports' },
      classes: [
        {
          className: 'GS',
          podium: [
            { position: 1, driverIds: ['mars'], teamId: 'kohr-motorsports' },
          ],
        },
      ],
    },
    endurance: {
      // Overall winner = GS winner: #56 Murillo Racing Mercedes-AMG GT4
      overall: { driverIds: ['foss', 'koch'], teamId: 'murillo-racing' },
      classes: [
        {
          className: 'GS',
          podium: [
            { position: 1, driverIds: ['foss', 'koch'], teamId: 'murillo-racing' },
            { position: 2, driverIds: ['quinlan', 'liefooghe'], teamId: 'stephen-cameron-racing' },
            { position: 3, driverIds: ['udell'], teamId: 'kelly-moss-road-and-race' },
          ],
        },
        {
          className: 'TCR',
          podium: [
            { position: 1, driverIds: ['block', 'lewis-tim'], teamId: 'kmw-motorsports' },
            { position: 2, driverIds: ['johnson-m', 'simpson-stephen'], teamId: 'michael-johnson-racing' },
            { position: 3, driverIds: ['lewis-m', 'hagler'], teamId: 'bryan-herta-autosport' },
          ],
        },
      ],
    },
  },

  // Round 9 — Virginia Is For Racing Lovers Grand Prix at VIR (Aug 27, 2H)
  'impc-2022-vir': {
    qualifying: {
      // GS pole: Kenny Murillo (#72 Murillo Racing Mercedes-AMG GT4) — damp conditions
      overall: { driverIds: ['murillo'], teamId: 'murillo-racing' },
      classes: [
        {
          className: 'GS',
          podium: [
            { position: 1, driverIds: ['murillo'], teamId: 'murillo-racing' },
          ],
        },
      ],
    },
    race: {
      // Overall winner = GS winner: #40 PF Racing Ford Mustang GT4
      // Final podium reflects post-race DSQ of #59 KohR Mustang for fuel-capacity violation.
      overall: { driverIds: ['hand', 'pesek'], teamId: 'pf-racing' },
      classes: [
        {
          className: 'GS',
          podium: [
            { position: 1, driverIds: ['hand', 'pesek'], teamId: 'pf-racing' },
            { position: 2, driverIds: ['marcelli', 'monk'], teamId: 'pf-racing' },
            { position: 3, driverIds: ['trinkler', 'giovanis'], teamId: 'team-tgm' },
          ],
        },
        {
          className: 'TCR',
          podium: [
            { position: 1, driverIds: ['hagler', 'lewis-m'], teamId: 'bryan-herta-autosport' },
            { position: 2, driverIds: ['chase-p', 'maxson-t'], teamId: 'bryan-herta-autosport' },
            { position: 3, driverIds: ['wittmer-k'], teamId: 'victor-gonzalez-racing' },
          ],
        },
      ],
    },
  },

  // Round 10 — Fox Factory 120 at Road Atlanta (Sep 30, 2H) — season finale
  'impc-2022-road-atlanta': {
    qualifying: {
      // GS pole: Dillon Machavern (#95 Turner Motorsport BMW M4 GT4) — 105.897 mph
      overall: { driverIds: ['machavern'], teamId: 'turner-motorsport' },
      classes: [
        {
          className: 'GS',
          podium: [
            { position: 1, driverIds: ['machavern'], teamId: 'turner-motorsport' },
          ],
        },
      ],
    },
    race: {
      // Overall winner = GS winner: #95 Turner Motorsport BMW M4 GT4
      overall: { driverIds: ['auberlen', 'machavern'], teamId: 'turner-motorsport' },
      classes: [
        {
          className: 'GS',
          podium: [
            { position: 1, driverIds: ['auberlen', 'machavern'], teamId: 'turner-motorsport' },
            { position: 2, driverIds: ['skeen', 'andrusko'], teamId: 'fcp-euro' },
            { position: 3, driverIds: ['mars', 'johnson-b'], teamId: 'kohr-motorsports' },
          ],
        },
        {
          className: 'TCR',
          podium: [
            { position: 1, driverIds: ['gonzalez-v', 'wittmer-k'], teamId: 'victor-gonzalez-racing' },
            { position: 2, driverIds: ['johnson-m', 'simpson-stephen'], teamId: 'michael-johnson-racing' },
            { position: 3, driverIds: ['hagler', 'lewis-m'], teamId: 'bryan-herta-autosport' },
          ],
        },
      ],
    },
  },
}
