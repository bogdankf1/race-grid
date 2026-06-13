import type { EventResults } from './types'

// IMSA Michelin Pilot Challenge 2023 results — verified 2026-06-08
// Sources:
//   - en.wikipedia.org/wiki/2023_Michelin_Pilot_Challenge
//   - imsa.com news archives (2023)
//   - sportscar365.com / dailysportscar.com / racer.com per-event reports
//   - frontstretch.com, speedsport.com, mbusa.com press releases
//   - press.bmwgroup.com / hyundainews.com / bryanhertaautosport.com
//
// Multi-class series: GS (GT4) overall winner is the de facto race overall winner.
// Pole positions captured where confirmed in public archives; podium 2nd/3rd captured
// where confirmed by per-event recap pages.
export const impcResults2023: Record<string, EventResults> = {
  // Round 1 — BMW M Endurance Challenge at Daytona (Jan 27, 4H)
  'impc-2023-daytona': {
    qualifying: {
      // GS pole: Stevan McAleer (#28 RS1 Porsche 718 Cayman GT4 RS Clubsport) — 1:52.157
      //   — new GS track record by more than six-tenths of a second
      // TCR pole: Mat Pombo (#37 LA Honda World Civic FK7 TCR) — 1:56.837
      //   — new TCR track record by 1.5+ seconds
      overall: { driverIds: ['mcaleer'], teamId: 'rs1' },
      classes: [
        {
          className: 'GS',
          podium: [
            { position: 1, driverIds: ['mcaleer', 'filgueiras'], teamId: 'rs1' },
          ],
        },
        {
          className: 'TCR',
          podium: [
            { position: 1, driverIds: ['pombo', 'eversley'], teamId: 'la-honda-world-racing' },
          ],
        },
      ],
    },
    endurance: {
      // Overall winner = GS winner: #42 PF Racing Ford Mustang GT4
      // Burton held off Pumpelly by 0.688s; first NASCAR regulars to win this race
      overall: { driverIds: ['burton-h', 'smith'], teamId: 'pf-racing' },
      classes: [
        {
          className: 'GS',
          podium: [
            { position: 1, driverIds: ['burton-h', 'smith'], teamId: 'pf-racing' },
            { position: 2, driverIds: ['pumpelly', 'collingwood'], teamId: 'bgb-motorsports' },
            // 3rd place confirmed in Wikipedia race table but driver pairing not captured here.
          ],
        },
        {
          className: 'TCR',
          podium: [
            { position: 1, driverIds: ['ernstone', 'morley'], teamId: 'road-shagger-racing' },
          ],
        },
      ],
    },
  },

  // Round 2 — Alan Jay Automotive Network 120 at Sebring (Mar 16, 2H)
  'impc-2023-sebring': {
    race: {
      // Overall winner = GS winner: #96 Turner Motorsport BMW M4 GT4
      overall: { driverIds: ['barletta', 'foley'], teamId: 'turner-motorsport' },
      classes: [
        {
          className: 'GS',
          podium: [
            { position: 1, driverIds: ['barletta', 'foley'], teamId: 'turner-motorsport' },
          ],
        },
        {
          className: 'TCR',
          podium: [
            { position: 1, driverIds: ['block', 'lewis-tim'], teamId: 'kmw-motorsports' },
          ],
        },
      ],
    },
  },

  // Round 3 — WeatherTech Raceway Laguna Seca 120 (May 13, 2H)
  'impc-2023-laguna-seca': {
    race: {
      // Overall winner = GS winner: #72 Murillo Racing Mercedes-AMG GT4
      // Kenny Murillo / Christian Szymczak — first IMPC win for both driver and team in 2023
      overall: { driverIds: ['murillo', 'szymczak'], teamId: 'murillo-racing' },
      classes: [
        {
          className: 'GS',
          podium: [
            { position: 1, driverIds: ['murillo', 'szymczak'], teamId: 'murillo-racing' },
            { position: 2, driverIds: ['mcaleer', 'filgueiras'], teamId: 'rs1' },
          ],
        },
        {
          className: 'TCR',
          podium: [
            { position: 1, driverIds: ['filippi', 'wilkins-m'], teamId: 'bryan-herta-autosport' },
          ],
        },
      ],
    },
  },

  // Round 4 — Chevrolet Detroit Sports Car Classic (Jun 3, 2H — GS only)
  // Note: Detroit round was a GS-only event; TCR not entered.
  'impc-2023-detroit': {
    race: {
      // Overall winner = GS winner: #57 Winward Racing Mercedes-AMG GT4
      // Maiden IMPC win for Daniel Morad and team owner-driver Bryce Ward
      overall: { driverIds: ['morad-d', 'ward'], teamId: 'winward-racing' },
      classes: [
        {
          className: 'GS',
          podium: [
            { position: 1, driverIds: ['morad-d', 'ward'], teamId: 'winward-racing' },
          ],
        },
      ],
    },
  },

  // Round 5 — Watkins Glen International 120 (Jun 24, 2H)
  'impc-2023-watkins-glen': {
    qualifying: {
      // GS pole: Eric Filgueiras (#28 RS1 Porsche 718 Cayman GT4 RS Clubsport) — 1:54.499
      // TCR pole: not confirmed in available archived sources
      overall: { driverIds: ['filgueiras'], teamId: 'rs1' },
      classes: [
        {
          className: 'GS',
          podium: [
            { position: 1, driverIds: ['filgueiras'], teamId: 'rs1' },
          ],
        },
      ],
    },
    race: {
      // Overall winner = GS winner: #96 Turner Motorsport BMW M4 GT4 (Foley/Barletta)
      overall: { driverIds: ['foley', 'barletta'], teamId: 'turner-motorsport' },
      classes: [
        {
          className: 'GS',
          podium: [
            { position: 1, driverIds: ['foley', 'barletta'], teamId: 'turner-motorsport' },
          ],
        },
        {
          className: 'TCR',
          podium: [
            { position: 1, driverIds: ['block', 'lewis-tim'], teamId: 'kmw-motorsports' },
          ],
        },
      ],
    },
  },

  // Round 6 — Canadian Tire Motorsport Park 120 (Jul 8, 2H)
  'impc-2023-ctmp': {
    race: {
      // Overall winner = GS winner: #50 TGR Hattori Motorsports Toyota GR Supra GT4
      // Billy Johnson / Parker Thompson
      overall: { driverIds: ['johnson-b', 'thompson-p'], teamId: 'hattori-motorsports' },
      classes: [
        {
          className: 'GS',
          podium: [
            { position: 1, driverIds: ['johnson-b', 'thompson-p'], teamId: 'hattori-motorsports' },
          ],
        },
        {
          className: 'TCR',
          podium: [
            { position: 1, driverIds: ['miller-c', 'taylor-mikey'], teamId: 'unitronic-jdc-miller-motorsports' },
          ],
        },
      ],
    },
  },

  // Round 7 — Lime Rock Park 120 (Jul 22, 2H — TCR only)
  // Lime Rock 2023 IMPC round was a TCR-only event; GS did not run.
  'impc-2023-lime-rock': {
    race: {
      // Overall winner = TCR winner: #98 Bryan Herta Autosport Hyundai Elantra N TCR
      overall: { driverIds: ['filippi', 'wilkins-m'], teamId: 'bryan-herta-autosport' },
      classes: [
        {
          className: 'TCR',
          podium: [
            { position: 1, driverIds: ['filippi', 'wilkins-m'], teamId: 'bryan-herta-autosport' },
          ],
        },
      ],
    },
  },

  // Round 8 — Road America 120 (Aug 5, 2H)
  'impc-2023-road-america': {
    race: {
      // Overall winner = GS winner: #71 Rebel Rock Racing Aston Martin Vantage AMR GT4
      overall: { driverIds: ['depew', 'liddell'], teamId: 'rebel-rock-racing' },
      classes: [
        {
          className: 'GS',
          podium: [
            { position: 1, driverIds: ['depew', 'liddell'], teamId: 'rebel-rock-racing' },
            { position: 2, driverIds: ['altzman', 'mccumbee'], teamId: 'mccumbee-mcaleer-racing' },
          ],
        },
        {
          className: 'TCR',
          podium: [
            { position: 1, driverIds: ['block', 'lewis-tim'], teamId: 'kmw-motorsports' },
          ],
        },
      ],
    },
  },

  // Round 9 — Virginia Is Racing for Lovers Grand Prix (Aug 26, 2H)
  'impc-2023-vir': {
    race: {
      // Overall winner = GS winner: #71 Rebel Rock Racing Aston Martin Vantage AMR GT4
      overall: { driverIds: ['depew', 'liddell'], teamId: 'rebel-rock-racing' },
      classes: [
        {
          className: 'GS',
          podium: [
            { position: 1, driverIds: ['depew', 'liddell'], teamId: 'rebel-rock-racing' },
            { position: 2, driverIds: ['altzman', 'mccumbee'], teamId: 'mccumbee-mcaleer-racing' },
          ],
        },
        {
          className: 'TCR',
          podium: [
            { position: 1, driverIds: ['miller-c', 'taylor-mikey'], teamId: 'unitronic-jdc-miller-motorsports' },
          ],
        },
      ],
    },
  },

  // Round 10 — Indianapolis Motor Speedway 240 (Sep 16, 4H)
  'impc-2023-indianapolis': {
    endurance: {
      // Overall winner = GS winner: #57 Winward Racing Mercedes-AMG GT4
      // Morad / Ward took an "incredible and improbable" overall victory
      overall: { driverIds: ['morad-d', 'ward'], teamId: 'winward-racing' },
      classes: [
        {
          className: 'GS',
          podium: [
            { position: 1, driverIds: ['morad-d', 'ward'], teamId: 'winward-racing' },
          ],
        },
        {
          className: 'TCR',
          podium: [
            { position: 1, driverIds: ['miller-c', 'taylor-mikey'], teamId: 'unitronic-jdc-miller-motorsports' },
          ],
        },
      ],
    },
  },

  // Round 11 — Fox Factory 120 at Road Atlanta (Oct 13, 2H)
  'impc-2023-road-atlanta': {
    race: {
      // Overall winner = GS winner: #69 Motorsports in Action McLaren Artura GT4
      overall: { driverIds: ['filsinger', 'lazare'], teamId: 'motorsports-in-action' },
      classes: [
        {
          className: 'GS',
          podium: [
            { position: 1, driverIds: ['filsinger', 'lazare'], teamId: 'motorsports-in-action' },
          ],
        },
        {
          className: 'TCR',
          podium: [
            // Filippi / Wilkins won the race, but Gottsacker / Wickens secured the
            // TCR Drivers' Championship by finishing 4th in this finale.
            { position: 1, driverIds: ['filippi', 'wilkins-m'], teamId: 'bryan-herta-autosport' },
          ],
        },
      ],
    },
  },
}
