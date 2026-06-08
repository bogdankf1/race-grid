import type { EventResults } from './types'

// IMSA Michelin Pilot Challenge 2021 results — verified 2026-06-08
// Sources:
//   - en.wikipedia.org/wiki/2021_Michelin_Pilot_Challenge
//   - imsa.com/news per-event race reports
//   - sportscar365.com / racer.com / dailysportscar.com / touringcars.net race reports
//   - Bryan Herta Autosport / Wright Motorsports / Hyundai press releases
//
// Multi-class series: GS (GT4) overall winner is the de facto race overall winner.
// Pole positions are not published in the Wikipedia season article and were not
// reliably available from secondary sources, so qualifying entries are omitted.
export const impcResults2021: Record<string, EventResults> = {
  // Round 1 — BMW Endurance Challenge at Daytona (Jan 29, 4H)
  'impc-2021-daytona': {
    endurance: {
      // Overall winner = GS winner: #13 AWA Racing McLaren 570S GT4
      overall: { driverIds: ['fidani', 'wittmer-kuno'], teamId: 'awa-racing' },
      classes: [
        {
          className: 'GS',
          podium: [
            { position: 1, driverIds: ['fidani', 'wittmer-kuno'], teamId: 'awa-racing' },
            { position: 2, driverIds: ['dontje', 'ward-r'], teamId: 'winward-racing' },
            { position: 3, driverIds: ['brynjolfsson', 'hindman'], teamId: 'volt-racing' },
          ],
        },
        {
          className: 'TCR',
          podium: [
            { position: 1, driverIds: ['miller-c', 'tally', 'taylor-mikey'], teamId: 'unitronic-jdc-miller-motorsports' },
            { position: 2, driverIds: ['block', 'lewis-tim'], teamId: 'kmw-motorsports' },
            { position: 3, driverIds: ['dupont', 'van-der-steur'], teamId: 'van-der-steur-racing' },
          ],
        },
      ],
    },
  },

  // Round 2 — Alan Jay Automotive Network 120 at Sebring (Mar 18, 2H)
  'impc-2021-sebring': {
    race: {
      // Overall winner = GS winner: #71 Rebel Rock Racing Chevrolet Camaro GT4.R
      overall: { driverIds: ['depew', 'liddell'], teamId: 'rebel-rock-racing' },
      classes: [
        {
          className: 'GS',
          podium: [
            { position: 1, driverIds: ['depew', 'liddell'], teamId: 'rebel-rock-racing' },
            { position: 2, driverIds: ['auberlen', 'machavern'], teamId: 'turner-motorsport' },
            { position: 3, driverIds: ['dontje', 'ward-r'], teamId: 'winward-racing' },
          ],
        },
        {
          className: 'TCR',
          podium: [
            { position: 1, driverIds: ['ernstone', 'morley'], teamId: 'road-shagger-racing' },
            { position: 2, driverIds: ['miller-c', 'tally', 'taylor-mikey'], teamId: 'unitronic-jdc-miller-motorsports' },
            { position: 3, driverIds: ['block', 'lewis-tim'], teamId: 'kmw-motorsports' },
          ],
        },
      ],
    },
  },

  // Round 3 — Mid-Ohio 120 (May 15, 2H)
  'impc-2021-mid-ohio': {
    race: {
      // Overall winner = GS winner: #13 AWA Racing McLaren 570S GT4
      overall: { driverIds: ['green-chris', 'wittmer-kuno'], teamId: 'awa-racing' },
      classes: [
        {
          className: 'GS',
          podium: [
            { position: 1, driverIds: ['green-chris', 'wittmer-kuno'], teamId: 'awa-racing' },
            { position: 2, driverIds: ['monk', 'pigot'], teamId: 'motorsports-in-action' },
            { position: 3, driverIds: ['dontje', 'ward-r'], teamId: 'winward-racing' },
          ],
        },
        {
          className: 'TCR',
          podium: [
            { position: 1, driverIds: ['chase-p', 'norman-r'], teamId: 'bryan-herta-autosport' },
            { position: 2, driverIds: ['miller-c', 'tally', 'taylor-mikey'], teamId: 'unitronic-jdc-miller-motorsports' },
            { position: 3, driverIds: ['gonzalez-t', 'maxson-t'], teamId: 'copeland-motorsports' },
          ],
        },
      ],
    },
  },

  // Round 4 — Tioga Downs Casino Resort 240 at The Glen (Jun 26, 4H)
  'impc-2021-watkins-glen-240': {
    endurance: {
      // Overall winner = GS winner: #23 Notlad Racing by RS1 Aston Martin Vantage AMR GT4
      overall: { driverIds: ['gallagher-p', 'mcaleer'], teamId: 'notlad-racing' },
      classes: [
        {
          className: 'GS',
          podium: [
            { position: 1, driverIds: ['gallagher-p', 'mcaleer'], teamId: 'notlad-racing' },
            { position: 2, driverIds: ['dontje', 'ward-r'], teamId: 'winward-racing' },
            { position: 3, driverIds: ['monk', 'pigot'], teamId: 'motorsports-in-action' },
          ],
        },
        {
          className: 'TCR',
          podium: [
            { position: 1, driverIds: ['eversley', 'lamb-t'], teamId: 'atlanta-speedwerks' },
            { position: 2, driverIds: ['miller-c', 'tally', 'taylor-mikey'], teamId: 'unitronic-jdc-miller-motorsports' },
            { position: 3, driverIds: ['gottsacker', 'wilkins-m'], teamId: 'bryan-herta-autosport' },
          ],
        },
      ],
    },
  },

  // Round 5 — Watkins Glen International 120 (Jul 2, 2H)
  'impc-2021-watkins-glen-120': {
    race: {
      // Overall winner = GS winner: #95 Turner Motorsport BMW M4 GT4
      overall: { driverIds: ['auberlen', 'machavern'], teamId: 'turner-motorsport' },
      classes: [
        {
          className: 'GS',
          podium: [
            { position: 1, driverIds: ['auberlen', 'machavern'], teamId: 'turner-motorsport' },
            { position: 2, driverIds: ['depew', 'liddell'], teamId: 'rebel-rock-racing' },
            { position: 3, driverIds: ['plumb-h', 'plumb'], teamId: 'team-tgm' },
          ],
        },
        {
          className: 'TCR',
          podium: [
            { position: 1, driverIds: ['henderson-b', 'noaker'], teamId: 'atlanta-speedwerks' },
            { position: 2, driverIds: ['gottsacker', 'wilkins-m'], teamId: 'bryan-herta-autosport' },
            { position: 3, driverIds: ['estep', 'kvamme'], teamId: 'cb-motorsports' },
          ],
        },
      ],
    },
  },

  // Round 6 — Lime Rock Park 120 (Jul 17, 2H)
  'impc-2021-lime-rock': {
    race: {
      // Overall winner = GS winner: #56 Murillo Racing Mercedes-AMG GT4
      overall: { driverIds: ['foss', 'mosing'], teamId: 'murillo-racing' },
      classes: [
        {
          className: 'GS',
          podium: [
            { position: 1, driverIds: ['foss', 'mosing'], teamId: 'murillo-racing' },
            { position: 2, driverIds: ['heylen', 'hardwick-r'], teamId: 'wright-motorsports' },
            { position: 3, driverIds: ['brynjolfsson', 'hindman'], teamId: 'volt-racing' },
          ],
        },
        {
          className: 'TCR',
          podium: [
            { position: 1, driverIds: ['lewis-m', 'hagler'], teamId: 'bryan-herta-autosport' },
            { position: 2, driverIds: ['gottsacker', 'wilkins-m'], teamId: 'bryan-herta-autosport' },
            { position: 3, driverIds: ['block', 'lewis-tim'], teamId: 'kmw-motorsports' },
          ],
        },
      ],
    },
  },

  // Round 7 — Road America 120 (Aug 7, 2H)
  'impc-2021-road-america': {
    race: {
      // Overall winner = GS winner: #95 Turner Motorsport BMW M4 GT4
      overall: { driverIds: ['auberlen', 'machavern'], teamId: 'turner-motorsport' },
      classes: [
        {
          className: 'GS',
          podium: [
            { position: 1, driverIds: ['auberlen', 'machavern'], teamId: 'turner-motorsport' },
            { position: 2, driverIds: ['heylen', 'hardwick-r'], teamId: 'wright-motorsports' },
            { position: 3, driverIds: ['dontje', 'ward-r'], teamId: 'winward-racing' },
          ],
        },
        {
          className: 'TCR',
          podium: [
            { position: 1, driverIds: ['block', 'lewis-tim'], teamId: 'kmw-motorsports' },
            { position: 2, driverIds: ['estep', 'kvamme'], teamId: 'cb-motorsports' },
            { position: 3, driverIds: ['miller-c', 'tally', 'taylor-mikey'], teamId: 'unitronic-jdc-miller-motorsports' },
          ],
        },
      ],
    },
  },

  // Round 8 — WeatherTech Raceway Laguna Seca 120 (Sep 11, 2H)
  'impc-2021-laguna-seca': {
    race: {
      // Overall winner = GS winner: #16 Wright Motorsports Porsche 718 Cayman GT4
      overall: { driverIds: ['heylen', 'root'], teamId: 'wright-motorsports' },
      classes: [
        {
          className: 'GS',
          podium: [
            { position: 1, driverIds: ['heylen', 'root'], teamId: 'wright-motorsports' },
            { position: 2, driverIds: ['dontje', 'ward-r'], teamId: 'winward-racing' },
            { position: 3, driverIds: ['foss', 'mosing'], teamId: 'murillo-racing' },
          ],
        },
        {
          className: 'TCR',
          podium: [
            { position: 1, driverIds: ['gottsacker', 'wilkins-m'], teamId: 'bryan-herta-autosport' },
            { position: 2, driverIds: ['gonzalez-t', 'maxson-t'], teamId: 'copeland-motorsports' },
            { position: 3, driverIds: ['lewis-m', 'hagler'], teamId: 'bryan-herta-autosport' },
          ],
        },
      ],
    },
  },

  // Round 9 — Virginia is for Racing Lovers Grand Prix (Oct 10, 2H)
  'impc-2021-vir': {
    race: {
      // Overall winner = GS winner: #16 Wright Motorsports Porsche 718 Cayman GT4
      overall: { driverIds: ['heylen', 'hardwick-r'], teamId: 'wright-motorsports' },
      classes: [
        {
          className: 'GS',
          podium: [
            { position: 1, driverIds: ['heylen', 'hardwick-r'], teamId: 'wright-motorsports' },
            { position: 2, driverIds: ['brynjolfsson', 'hindman'], teamId: 'volt-racing' },
            { position: 3, driverIds: ['plumb-h', 'plumb'], teamId: 'team-tgm' },
          ],
        },
        {
          className: 'TCR',
          podium: [
            { position: 1, driverIds: ['miller-c', 'tally', 'taylor-mikey'], teamId: 'unitronic-jdc-miller-motorsports' },
            { position: 2, driverIds: ['gonzalez-t', 'maxson-t'], teamId: 'copeland-motorsports' },
            { position: 3, driverIds: ['chase-p', 'norman-r'], teamId: 'bryan-herta-autosport' },
          ],
        },
      ],
    },
  },

  // Round 10 — Fox Factory 120 at Road Atlanta (Nov 12, 2H)
  'impc-2021-road-atlanta': {
    race: {
      // Overall winner = GS winner: #16 Wright Motorsports Porsche 718 Cayman GT4
      overall: { driverIds: ['heylen', 'hardwick-r'], teamId: 'wright-motorsports' },
      classes: [
        {
          className: 'GS',
          podium: [
            { position: 1, driverIds: ['heylen', 'hardwick-r'], teamId: 'wright-motorsports' },
            { position: 2, driverIds: ['najri', 'quiros'], teamId: 'tgr-riley-motorsports' },
            { position: 3, driverIds: ['dontje', 'ward-r'], teamId: 'winward-racing' },
          ],
        },
        {
          className: 'TCR',
          podium: [
            { position: 1, driverIds: ['block', 'lewis-tim'], teamId: 'kmw-motorsports' },
            { position: 2, driverIds: ['gonzalez-t', 'maxson-t'], teamId: 'copeland-motorsports' },
            { position: 3, driverIds: ['miller-c', 'tally', 'taylor-mikey'], teamId: 'unitronic-jdc-miller-motorsports' },
          ],
        },
      ],
    },
  },
}
