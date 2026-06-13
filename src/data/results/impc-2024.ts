import type { EventResults } from './types'

// IMSA Michelin Pilot Challenge 2024 results — verified 2026-06-08
// Sources:
//   - en.wikipedia.org/wiki/2024_Michelin_Pilot_Challenge
//   - imsa.com/news per-event race reports (2024 archives)
//   - sportscar365.com / racer.com / frontstretch.com IMPC race reports
//   - dailysportscar.com, speedsport.com, hondanews.com
//
// Multi-class series: GS (GT4) overall winner is the de facto race overall winner.
// Pole positions captured for GS and TCR where confirmed in publicly available sources.
export const impcResults2024: Record<string, EventResults> = {
  // Round 1 — BMW M Endurance Challenge at Daytona (Jan 26, 4H)
  'impc-2024-daytona': {
    qualifying: {
      // GS pole: Sean McAlister (#39 CarBahn Motorsports BMW M4 GT4) — 1:52.842, his first career pole
      // TCR pole: Harry Gottsacker (#33 Bryan Herta Autosport Hyundai Elantra N TCR) — 109.766 mph
      overall: { driverIds: ['mcalister-s'], teamId: 'carbahn-peregrine' },
      classes: [
        {
          className: 'GS',
          podium: [
            { position: 1, driverIds: ['mcalister-s'], teamId: 'carbahn-peregrine' },
          ],
        },
        {
          className: 'TCR',
          podium: [
            { position: 1, driverIds: ['gottsacker'], teamId: 'bryan-herta-autosport' },
          ],
        },
      ],
    },
    endurance: {
      // Overall winner = GS winner: #91 Kellymoss with Riley Porsche 718 GT4 RS Clubsport
      // (Margin: 1.936s; 3rd place 6.554s behind winner)
      overall: { driverIds: ['dickinson', 'mccarthy-m', 'golan'], teamId: 'kellymoss' },
      classes: [
        {
          className: 'GS',
          podium: [
            { position: 1, driverIds: ['dickinson', 'mccarthy-m', 'golan'], teamId: 'kellymoss' },
            { position: 2, driverIds: ['ward', 'morad-d'], teamId: 'winward-racing' },
            { position: 3, driverIds: ['plumb', 'trinkler'], teamId: 'team-tgm' },
          ],
        },
        {
          className: 'TCR',
          podium: [
            { position: 1, driverIds: ['miller-c', 'taylor-mikey'], teamId: 'unitronic-jdc-miller-motorsports' },
            { position: 2, driverIds: ['brown-p', 'dupont'], teamId: 'bryan-herta-autosport' },
          ],
        },
      ],
    },
  },

  // Round 2 — Alan Jay Automotive Network 120 at Sebring (Mar 15, 2H)
  'impc-2024-sebring': {
    qualifying: {
      // TCR pole: Harry Gottsacker (#33 Bryan Herta Autosport Hyundai Elantra N TCR) — Motul Pole Award
      // GS pole not confirmed in publicly available sources at time of verification.
      overall: { driverIds: ['gottsacker'], teamId: 'bryan-herta-autosport' },
      classes: [
        {
          className: 'TCR',
          podium: [
            { position: 1, driverIds: ['gottsacker'], teamId: 'bryan-herta-autosport' },
          ],
        },
      ],
    },
    race: {
      // Overall winner = GS winner: #71 Rebel Rock Racing Aston Martin Vantage GT4 Evo
      // (Margin 1.817s; first worldwide win for the new Aston Martin Vantage GT4 Evo)
      overall: { driverIds: ['liddell', 'depew'], teamId: 'rebel-rock-racing' },
      classes: [
        {
          className: 'GS',
          podium: [
            { position: 1, driverIds: ['liddell', 'depew'], teamId: 'rebel-rock-racing' },
            { position: 2, driverIds: ['van-der-steur', 'hasse-clot'], teamId: 'van-der-steur-racing' },
          ],
        },
        {
          className: 'TCR',
          podium: [
            { position: 1, driverIds: ['miller-c', 'taylor-mikey'], teamId: 'unitronic-jdc-miller-motorsports' },
            { position: 2, driverIds: ['lally', 'tucker-n'], teamId: 'starcom-racing' },
            { position: 3, driverIds: ['gilsinger'], teamId: 'hart' },
          ],
        },
      ],
    },
  },

  // Round 3 — WeatherTech Raceway Laguna Seca 120 (May 11, 2H)
  'impc-2024-laguna-seca': {
    qualifying: {
      // Motorsports in Action took GS pole (de Quesada / Lazare); converted into win.
      // TCR pole not confirmed in publicly available sources at time of verification.
      overall: { driverIds: ['lazare', 'de-quesada'], teamId: 'motorsports-in-action' },
      classes: [
        {
          className: 'GS',
          podium: [
            { position: 1, driverIds: ['lazare', 'de-quesada'], teamId: 'motorsports-in-action' },
          ],
        },
      ],
    },
    race: {
      // Overall winner = GS winner: #69 Motorsports in Action McLaren Artura GT4
      // (Margin: 0.691s; de Quesada's first IMPC win, Lazare's 3rd)
      overall: { driverIds: ['lazare', 'de-quesada'], teamId: 'motorsports-in-action' },
      classes: [
        {
          className: 'GS',
          podium: [
            { position: 1, driverIds: ['lazare', 'de-quesada'], teamId: 'motorsports-in-action' },
            { position: 2, driverIds: ['hindman', 'mcaleer'], teamId: 'rennsport1' },
            { position: 3, driverIds: ['ward', 'morad-d'], teamId: 'winward-racing' },
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

  // Round 4 — O'Reilly Auto Parts 4 Hours of Mid-Ohio (Jun 9, 4H)
  'impc-2024-mid-ohio': {
    qualifying: {
      // GS pole: Trent Hindman (#28 RS1/RennSport1 Porsche 718 GT4 RS Clubsport)
      // TCR pole not confirmed in publicly available sources at time of verification.
      overall: { driverIds: ['hindman'], teamId: 'rennsport1' },
      classes: [
        {
          className: 'GS',
          podium: [
            { position: 1, driverIds: ['hindman'], teamId: 'rennsport1' },
          ],
        },
      ],
    },
    endurance: {
      // Overall winner = GS winner: #88 Archangel Motorsports Aston Martin Vantage GT4
      // (Margin: 4.533s; Archangel's first IMPC win; Aston Martin took four of top five)
      overall: { driverIds: ['coleman-t', 'telitz'], teamId: 'archangel-motorsports' },
      classes: [
        {
          className: 'GS',
          podium: [
            { position: 1, driverIds: ['coleman-t', 'telitz'], teamId: 'archangel-motorsports' },
            { position: 2, driverIds: ['holton', 'plumb'], teamId: 'team-tgm' },
            { position: 3, driverIds: ['morad-d', 'ward'], teamId: 'winward-racing' },
          ],
        },
        {
          className: 'TCR',
          podium: [
            { position: 1, driverIds: ['brown-p', 'dupont'], teamId: 'bryan-herta-autosport' },
          ],
        },
      ],
    },
  },

  // Round 5 — The Esses 120 at Watkins Glen (Jun 22, 2H)
  'impc-2024-watkins-glen': {
    race: {
      // Overall winner = GS winner: #46 Team TGM Aston Martin Vantage GT4
      // (Margin 5.549s; Plumb's 24th IMPC career win, matching Billy Johnson's all-time mark)
      overall: { driverIds: ['plumb', 'holton'], teamId: 'team-tgm' },
      classes: [
        {
          className: 'GS',
          podium: [
            { position: 1, driverIds: ['plumb', 'holton'], teamId: 'team-tgm' },
            { position: 2, driverIds: ['machavern', 'megennis'], teamId: 'turner-motorsport' },
            { position: 3, driverIds: ['coleman-t', 'telitz'], teamId: 'archangel-motorsports' },
          ],
        },
        {
          className: 'TCR',
          podium: [
            { position: 1, driverIds: ['miller-c', 'taylor-mikey'], teamId: 'unitronic-jdc-miller-motorsports' },
            { position: 2, driverIds: ['gottsacker', 'wickens'], teamId: 'bryan-herta-autosport' },
            { position: 3, driverIds: ['brown-p', 'dupont'], teamId: 'bryan-herta-autosport' },
          ],
        },
      ],
    },
  },

  // Round 6 — Canadian Tire Motorsport Park 120 (Jul 13, 2H)
  'impc-2024-ctmp': {
    race: {
      // Overall winner = GS winner: #28 RS1/RennSport1 Porsche 718 GT4 RS Clubsport
      // (Hindman & McAleer's 11th IMPC win for each; Wickens' first MPC win since 2022)
      overall: { driverIds: ['hindman', 'mcaleer'], teamId: 'rennsport1' },
      classes: [
        {
          className: 'GS',
          podium: [
            { position: 1, driverIds: ['hindman', 'mcaleer'], teamId: 'rennsport1' },
          ],
        },
        {
          className: 'TCR',
          podium: [
            { position: 1, driverIds: ['gottsacker', 'wickens'], teamId: 'bryan-herta-autosport' },
            { position: 2, driverIds: ['wittmer-k', 'yoshihara'], teamId: 'mmg' },
            { position: 3, driverIds: ['brown-p', 'dupont'], teamId: 'bryan-herta-autosport' },
          ],
        },
      ],
    },
  },

  // Round 7 — Road America 120 (Aug 3, 2H)
  'impc-2024-road-america': {
    qualifying: {
      // TCR pole: Dai Yoshihara (#93 Montreal Motorsport Group Honda Civic FL5 TCR) — Motul Pole Award
      overall: { driverIds: ['yoshihara'], teamId: 'mmg' },
      classes: [
        {
          className: 'TCR',
          podium: [
            { position: 1, driverIds: ['yoshihara'], teamId: 'mmg' },
          ],
        },
      ],
    },
    race: {
      // Overall winner = GS winner: #28 RS1/RennSport1 Porsche 718 GT4 RS Clubsport
      // (Margin: 0.394s; first repeat winners of the 2024 GS season)
      // TCR: Tally/Lewis Jr.'s KMW Alfa Romeo earned its fourth consecutive Road America TCR victory.
      overall: { driverIds: ['hindman', 'mcaleer'], teamId: 'rennsport1' },
      classes: [
        {
          className: 'GS',
          podium: [
            { position: 1, driverIds: ['hindman', 'mcaleer'], teamId: 'rennsport1' },
            { position: 2, driverIds: ['coleman-t', 'telitz'], teamId: 'archangel-motorsports' },
          ],
        },
        {
          className: 'TCR',
          podium: [
            { position: 1, driverIds: ['tally', 'lewis-tim'], teamId: 'kmw-motorsports' },
            { position: 3, driverIds: ['wittmer-k', 'yoshihara'], teamId: 'mmg' },
          ],
        },
      ],
    },
  },

  // Round 8 — Virginia Is For Racing Lovers Grand Prix (Aug 24, 2H)
  'impc-2024-vir': {
    race: {
      // Overall winner = GS winner: #38 BGB Motorsports Porsche 718 Cayman GT4 RS Clubsport
      // (Margin: 0.373s; BGB's first IMPC win since 2013)
      overall: { driverIds: ['collingwood', 'pumpelly'], teamId: 'bgb-motorsports' },
      classes: [
        {
          className: 'GS',
          podium: [
            { position: 1, driverIds: ['collingwood', 'pumpelly'], teamId: 'bgb-motorsports' },
            { position: 2, driverIds: ['hindman', 'mcaleer'], teamId: 'rennsport1' },
            { position: 3, driverIds: ['mars', 'michaelian'], teamId: 'kohr-motorsports' },
          ],
        },
        {
          className: 'TCR',
          podium: [
            { position: 1, driverIds: ['wittmer-k', 'yoshihara'], teamId: 'mmg' },
            { position: 2, driverIds: ['morris', 'wilkins-m'], teamId: 'bryan-herta-autosport' },
            { position: 3, driverIds: ['filippi', 'wilkins-m'], teamId: 'bryan-herta-autosport' },
          ],
        },
      ],
    },
  },

  // Round 9 — Indianapolis Motor Speedway 120 (Sep 21, 2H)
  'impc-2024-indianapolis': {
    race: {
      // Overall winner = GS winner: #39 CarBahn Motorsports BMW M4 GT4
      // (Margin: 3.658s over #57 Winward; CarBahn's first MPC win in nearly 4 years)
      overall: { driverIds: ['mcalister-s', 'westphal'], teamId: 'carbahn-peregrine' },
      classes: [
        {
          className: 'GS',
          podium: [
            { position: 1, driverIds: ['mcalister-s', 'westphal'], teamId: 'carbahn-peregrine' },
            { position: 2, driverIds: ['ellis-p'], teamId: 'winward-racing' },
            { position: 3, driverIds: ['machavern', 'megennis'], teamId: 'turner-motorsport' },
          ],
        },
        {
          className: 'TCR',
          podium: [
            { position: 1, driverIds: ['filippi', 'wilkins-m'], teamId: 'bryan-herta-autosport' },
            { position: 2, driverIds: ['gottsacker', 'wickens'], teamId: 'bryan-herta-autosport' },
            { position: 3, driverIds: ['miller-c', 'taylor-mikey'], teamId: 'unitronic-jdc-miller-motorsports' },
          ],
        },
      ],
    },
  },

  // Round 10 — Fox Factory 120 at Michelin Raceway Road Atlanta (Oct 11, 2H, finale)
  'impc-2024-road-atlanta': {
    qualifying: {
      // GS pole: Paul Holton (#46 Team TGM Aston Martin Vantage GT4)
      overall: { driverIds: ['holton'], teamId: 'team-tgm' },
      classes: [
        {
          className: 'GS',
          podium: [
            { position: 1, driverIds: ['holton'], teamId: 'team-tgm' },
          ],
        },
      ],
    },
    race: {
      // Overall winner = GS winner: #91 Kellymoss with Riley Porsche 718 GT4 RS Clubsport
      // (Margin: 1.849s; TGM clinches GS title with Plumb 2nd, JDC-Miller takes TCR title)
      overall: { driverIds: ['mccarthy-m', 'dickinson'], teamId: 'kellymoss' },
      classes: [
        {
          className: 'GS',
          podium: [
            { position: 1, driverIds: ['mccarthy-m', 'dickinson'], teamId: 'kellymoss' },
            { position: 2, driverIds: ['plumb', 'holton'], teamId: 'team-tgm' },
            { position: 3, driverIds: ['mcalister-s', 'westphal'], teamId: 'carbahn-peregrine' },
          ],
        },
        {
          className: 'TCR',
          podium: [
            { position: 1, driverIds: ['filippi', 'wilkins-m'], teamId: 'bryan-herta-autosport' },
            { position: 2, driverIds: ['brown-p', 'dupont'], teamId: 'bryan-herta-autosport' },
            { position: 3, driverIds: ['wittmer-k', 'yoshihara'], teamId: 'mmg' },
          ],
        },
      ],
    },
  },
}
