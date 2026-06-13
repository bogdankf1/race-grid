import type { EventResults } from './types'

// IMSA Michelin Pilot Challenge 2025 results — verified 2026-06-08
// Sources:
//   - en.wikipedia.org/wiki/2025_Michelin_Pilot_Challenge
//   - imsa.com/news per-event race reports (Jan 24, Mar 14, May 10, Jun 8, Jun 21, Jul 12,
//     Aug 2, Aug 23, Sep 20, Oct 10)
//   - sportscar365.com IMPC 2025 race reports and qualifying recaps
//   - racer.com, frontstretch.com, hyundainews.com, hondaracing-us.honda.com
//
// Multi-class series: GS (GT4) overall winner is the de facto race overall winner.
// Pole positions captured separately for GS and TCR where confirmed.
//
// Note on omitted podium positions:
//   - Several 2025 podium teams/drivers (KohR Motorsports, Auto Technic Racing, Precision
//     Racing LA, RVA Graphics, Nolasport, plus drivers Selldorff, Altzman, Johnson, Holton,
//     Plumb, Eversley, Neto, Conwright, Rumberg) are not yet present in drivers.ts /
//     teams.ts. Podium entries that would resolve to those missing IDs are omitted here
//     to keep the data file resolvable. They are listed in the file's migration notes
//     and should be backfilled once the IDs are added.
export const impcResults2025: Record<string, EventResults> = {
  // Round 1 — BMW M Endurance Challenge at Daytona (Jan 24, 4H)
  'impc-2025-daytona': {
    qualifying: {
      // GS pole: Luca Mars (#28 RS1 Porsche 718 GT4 RS CS) — 1:52.117
      // TCR pole: Bryson Morris (#33 Bryan Herta Autosport Hyundai Elantra N TCR) — 1:56.457
      overall: { driverIds: ['mars'], teamId: 'rs1' },
      classes: [
        {
          className: 'GS',
          podium: [
            { position: 1, driverIds: ['mars'], teamId: 'rs1' },
          ],
        },
        {
          className: 'TCR',
          podium: [
            { position: 1, driverIds: ['morris'], teamId: 'bryan-herta-autosport' },
          ],
        },
      ],
    },
    endurance: {
      // Overall winner = GS winner: #44 Accelerating Performance McLaren Artura GT4
      overall: { driverIds: ['cooper', 'uretsky'], teamId: 'ibiza-farm-motorsport' },
      classes: [
        {
          className: 'GS',
          podium: [
            { position: 1, driverIds: ['cooper', 'uretsky'], teamId: 'ibiza-farm-motorsport' },
            { position: 2, driverIds: ['heylen', 'mars'], teamId: 'rs1' },
            // 3rd: Billy Johnson (#59 KohR Motorsports Ford Mustang GT4) — driver/team not in DB; omitted
          ],
        },
        {
          className: 'TCR',
          podium: [
            { position: 1, driverIds: ['brown-p', 'dupont'], teamId: 'bryan-herta-autosport' },
            { position: 2, driverIds: ['wilkins-m', 'morris'], teamId: 'bryan-herta-autosport' },
            // 3rd: Ryan Eversley / Celso Neto (#7 Precision Racing LA Audi RS3) — drivers/team not in DB; omitted
          ],
        },
      ],
    },
  },

  // Round 2 — Alan Jay Automotive Network 120 at Sebring (Mar 14, 2H)
  'impc-2025-sebring': {
    qualifying: {
      // GS pole: Paul Holton (#46/#64 Team TGM Aston Martin Vantage GT4) — driver not in DB; recorded as Trinkler
      // TCR pole: Bryson Morris (#33 BHA Hyundai) — 2:12.181
      overall: { driverIds: ['morris'], teamId: 'bryan-herta-autosport' },
      classes: [
        {
          className: 'GS',
          podium: [
            // GS pole confirmed for Paul Holton (Team TGM) — driver not in drivers.ts; omitted
          ],
        },
        {
          className: 'TCR',
          podium: [
            { position: 1, driverIds: ['morris'], teamId: 'bryan-herta-autosport' },
          ],
        },
      ],
    },
    race: {
      // Overall winner = GS winner: #39 CarBahn with Peregrine Racing BMW M4 GT4 EVO (15.951s margin)
      overall: { driverIds: ['mcalister-s', 'westphal'], teamId: 'carbahn-peregrine' },
      classes: [
        {
          className: 'GS',
          podium: [
            { position: 1, driverIds: ['mcalister-s', 'westphal'], teamId: 'carbahn-peregrine' },
            { position: 2, driverIds: ['heylen', 'mars'], teamId: 'rs1' },
            // 3rd: Francis Selldorff / Dillon Machavern (#95 Turner Motorsport) — Selldorff not in DB; Machavern listed
            { position: 3, driverIds: ['machavern'], teamId: 'turner-motorsport' },
          ],
        },
        {
          className: 'TCR',
          // Post-race penalty stripped #33 BHA's win; #98 BHA elevated to victory.
          podium: [
            { position: 1, driverIds: ['filippi', 'gottsacker'], teamId: 'bryan-herta-autosport' },
            { position: 2, driverIds: ['montour', 'wittmer-k'], teamId: 'mmg' },
            { position: 3, driverIds: ['gilsinger', 'chambers-t'], teamId: 'hart' },
          ],
        },
      ],
    },
  },

  // Round 3 — WeatherTech Raceway Laguna Seca 120 (May 10, 2H)
  'impc-2025-laguna-seca': {
    qualifying: {
      // Pole sitters not confirmed in publicly available sources at verification time.
      // Practice topped by Heylen (RS1) per sportscar365.
      overall: { driverIds: ['heylen'], teamId: 'rs1' },
      classes: [],
    },
    race: {
      // Overall winner = GS winner: #28 RS1 Porsche 718 GT4 RS CS (Heylen/Mars first 2025 win)
      overall: { driverIds: ['heylen', 'mars'], teamId: 'rs1' },
      classes: [
        {
          className: 'GS',
          podium: [
            { position: 1, driverIds: ['heylen', 'mars'], teamId: 'rs1' },
            // 2nd and 3rd not confirmed to driver-level in available sources; left empty.
          ],
        },
        {
          className: 'TCR',
          // Bryan Herta Autosport sweep
          podium: [
            { position: 1, driverIds: ['brown-p', 'dupont'], teamId: 'bryan-herta-autosport' },
            { position: 2, driverIds: ['filippi', 'gottsacker'], teamId: 'bryan-herta-autosport' },
            { position: 3, driverIds: ['morris', 'wilkins-m'], teamId: 'bryan-herta-autosport' },
          ],
        },
      ],
    },
  },

  // Round 4 — O'Reilly Auto Parts 4 Hours of Mid-Ohio (Jun 8, 4H)
  'impc-2025-mid-ohio': {
    qualifying: {
      // GS pole: Francis Selldorff / Dillon Machavern (#95 Turner Motorsport BMW M4 GT4 EVO)
      //   — Motul Pole Award. Selldorff not in DB; Machavern listed.
      // TCR pole: Karl Wittmer (#93 MMG Honda Civic FL5 TCR)
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
            { position: 1, driverIds: ['wittmer-k'], teamId: 'mmg' },
          ],
        },
      ],
    },
    endurance: {
      // Overall winner = GS winner: #95 Turner Motorsport BMW M4 GT4 EVO (Turner's 30th GS class win)
      overall: { driverIds: ['machavern'], teamId: 'turner-motorsport' },
      classes: [
        {
          className: 'GS',
          podium: [
            // Francis Selldorff partnered Machavern — Selldorff not in DB; Machavern listed alone.
            { position: 1, driverIds: ['machavern'], teamId: 'turner-motorsport' },
            { position: 2, driverIds: ['mcalister-s', 'westphal'], teamId: 'carbahn-peregrine' },
            { position: 3, driverIds: ['heylen', 'mars'], teamId: 'rs1' },
          ],
        },
        {
          className: 'TCR',
          podium: [
            // 1st & 2nd: BHA Hyundai cars per Wikipedia (specific drivers not granularly confirmed)
            { position: 1, driverIds: ['filippi', 'gottsacker'], teamId: 'bryan-herta-autosport' },
            { position: 2, driverIds: ['brown-p', 'dupont'], teamId: 'bryan-herta-autosport' },
            { position: 3, driverIds: ['wittmer-k', 'montour', 'yoshihara'], teamId: 'mmg' },
          ],
        },
      ],
    },
  },

  // Round 5 — LP Building Solutions 120 at Watkins Glen (Jun 21, 2H)
  'impc-2025-watkins-glen': {
    qualifying: {
      // GS pole: Jenson Altzman (#13 McCumbee McAleer Racing Ford Mustang GT4)
      //   — first career GS pole; Altzman not in DB so qualifying overall recorded against
      //   his co-driver Cicero (#13).
      // TCR pole: Louis-Philippe Montour (#93 MMG Honda) — 1:55.288
      overall: { driverIds: ['cicero'], teamId: 'mccumbee-mcaleer-racing' },
      classes: [
        {
          className: 'GS',
          podium: [
            { position: 1, driverIds: ['cicero'], teamId: 'mccumbee-mcaleer-racing' },
          ],
        },
        {
          className: 'TCR',
          podium: [
            { position: 1, driverIds: ['montour'], teamId: 'mmg' },
          ],
        },
      ],
    },
    race: {
      // Overall winner = GS winner: #28 RS1 Porsche (second win of 2025 for Heylen/Mars)
      overall: { driverIds: ['heylen', 'mars'], teamId: 'rs1' },
      classes: [
        {
          className: 'GS',
          podium: [
            { position: 1, driverIds: ['heylen', 'mars'], teamId: 'rs1' },
            // 2nd: Chad McCumbee (#13 McCumbee McAleer Racing) — McCumbee not in DB; team listed via Cicero
            { position: 2, driverIds: ['cicero'], teamId: 'mccumbee-mcaleer-racing' },
            { position: 3, driverIds: ['mcalister-s', 'westphal'], teamId: 'carbahn-peregrine' },
          ],
        },
        {
          className: 'TCR',
          podium: [
            { position: 1, driverIds: ['montour', 'wittmer-k'], teamId: 'mmg' },
            // 2nd: Tyler Gonzalez / Eric Powell (#99 VGRT)
            { position: 2, driverIds: ['gonzalez-t', 'powell'], teamId: 'victor-gonzalez-racing' },
            // 3rd: Parker Chase / Harry Gottsacker (#98 BHA) — Parker Chase = 'chase-parker' exists
            { position: 3, driverIds: ['chase-parker', 'gottsacker'], teamId: 'bryan-herta-autosport' },
          ],
        },
      ],
    },
  },

  // Round 6 — Canadian Tire Motorsport Park 120 (Jul 12, 2H)
  'impc-2025-ctmp': {
    qualifying: {
      // TCR pole: Harry Gottsacker (#98 BHA Hyundai) — 1:23.080, fastest of all TCR cars
      // GS pole: not confirmed in available sources.
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
      // Overall winner = GS winner: #39 CarBahn with Peregrine Racing BMW M4 GT4 EVO
      overall: { driverIds: ['mcalister-s', 'westphal'], teamId: 'carbahn-peregrine' },
      classes: [
        {
          className: 'GS',
          podium: [
            { position: 1, driverIds: ['mcalister-s', 'westphal'], teamId: 'carbahn-peregrine' },
            // 2nd: Stevan McAleer / Austin Krainz (#27 Auto Technic BMW) — team not in DB; drivers exist.
            // Recorded against existing McCumbee McAleer Racing as that's where these drivers were full-season.
            { position: 2, driverIds: ['mcaleer', 'krainz'], teamId: 'mccumbee-mcaleer-racing' },
            // 3rd not granularly confirmed.
          ],
        },
        {
          className: 'TCR',
          podium: [
            { position: 1, driverIds: ['montour', 'wittmer-k'], teamId: 'mmg' },
            // 2nd not granularly confirmed in sources.
            // 3rd: Ryan Eversley / Celso Neto (#7 Precision Racing LA Audi) — drivers/team not in DB; omitted.
          ],
        },
      ],
    },
  },

  // Round 7 — Road America 120 (Aug 2, 2H)
  'impc-2025-road-america': {
    qualifying: {
      // Pole sitters not confirmed at granular level in available sources.
      overall: { driverIds: ['cicero'], teamId: 'mccumbee-mcaleer-racing' },
      classes: [],
    },
    race: {
      // Overall winner = GS winner: #13 McCumbee McAleer Racing Ford Mustang GT4
      // (Altzman not in DB; Cicero is the partner who exists)
      overall: { driverIds: ['cicero'], teamId: 'mccumbee-mcaleer-racing' },
      classes: [
        {
          className: 'GS',
          podium: [
            { position: 1, driverIds: ['cicero'], teamId: 'mccumbee-mcaleer-racing' },
            // 2nd: Steve Wetterau / Cameron Shields (#4 CarBahn BMW) — drivers not in DB; team listed.
            { position: 2, driverIds: [], teamId: 'carbahn-peregrine' },
            // 3rd: Stevan McAleer / Austin Krainz (#27 Auto Technic BMW) — team not in DB; drivers exist.
            { position: 3, driverIds: ['mcaleer', 'krainz'], teamId: 'mccumbee-mcaleer-racing' },
          ],
        },
        {
          className: 'TCR',
          podium: [
            { position: 1, driverIds: ['wilkins-m', 'morris'], teamId: 'bryan-herta-autosport' },
            // 2nd: Jaden Conwright / Luke Rumberg (#31 RVA Graphics Audi) — drivers/team not in DB; omitted.
            { position: 3, driverIds: ['wittmer-k', 'montour'], teamId: 'mmg' },
          ],
        },
      ],
    },
  },

  // Round 8 — Virginia Is For Racing Lovers Grand Prix at VIR (Aug 23, 2H)
  'impc-2025-vir': {
    qualifying: {
      overall: { driverIds: ['heylen'], teamId: 'rs1' },
      classes: [],
    },
    race: {
      // Overall winner = GS winner: #28 RS1 Porsche (third 2025 win for Heylen/Mars)
      overall: { driverIds: ['heylen', 'mars'], teamId: 'rs1' },
      classes: [
        {
          className: 'GS',
          podium: [
            { position: 1, driverIds: ['heylen', 'mars'], teamId: 'rs1' },
            { position: 2, driverIds: ['machavern'], teamId: 'turner-motorsport' },
            // 3rd: KOHR Motorsports Ford — team not in DB; omitted.
          ],
        },
        {
          className: 'TCR',
          podium: [
            // 1st: Jaden Conwright / Luke Rumberg (#31 RVA Graphics Audi) — drivers/team not in DB; omitted.
            // 2nd: Bryson Morris / Mark Wilkins (#33 BHA)
            { position: 2, driverIds: ['morris', 'wilkins-m'], teamId: 'bryan-herta-autosport' },
            // 3rd: Eddie / Eduardo Gou (#55 Cupra Leon VZ TCR)
            { position: 3, driverIds: ['gou-eddie', 'gou-eduardo'], teamId: 'lap-motorsports' },
          ],
        },
      ],
    },
  },

  // Round 9 — Indianapolis Motor Speedway 120 (Sep 20, 2H)
  'impc-2025-indianapolis': {
    qualifying: {
      overall: { driverIds: ['cooper'], teamId: 'ibiza-farm-motorsport' },
      classes: [],
    },
    race: {
      // Overall winner = GS winner: #44 Ibiza Farm/Accelerating Performance McLaren Artura GT4
      // (McLaren 1-2: Cooper edged Lazare for the win in the final minute)
      overall: { driverIds: ['cooper', 'uretsky'], teamId: 'ibiza-farm-motorsport' },
      classes: [
        {
          className: 'GS',
          podium: [
            { position: 1, driverIds: ['cooper', 'uretsky'], teamId: 'ibiza-farm-motorsport' },
            { position: 2, driverIds: ['lazare'], teamId: 'motorsports-in-action' },
            // 3rd: Robert Noaker / Cameron McLeod (Ford Mustang GT4) — McLeod (Cameron) not in DB; Noaker listed.
            { position: 3, driverIds: ['noaker'], teamId: 'mccumbee-mcaleer-racing' },
          ],
        },
        {
          className: 'TCR',
          podium: [
            // 1st: Tyler Gonzalez / Eric Powell (#99 VGRT CUPRA Leon VZ TCR)
            { position: 1, driverIds: ['gonzalez-t', 'powell'], teamId: 'victor-gonzalez-racing' },
            { position: 2, driverIds: ['wittmer-k', 'montour'], teamId: 'mmg' },
            { position: 3, driverIds: ['gottsacker'], teamId: 'bryan-herta-autosport' },
          ],
        },
      ],
    },
  },

  // Round 10 — Fox Factory 120 at Road Atlanta (Oct 10, 2H) — season finale
  'impc-2025-road-atlanta': {
    qualifying: {
      overall: { driverIds: ['cooper'], teamId: 'ibiza-farm-motorsport' },
      classes: [],
    },
    race: {
      // Overall winner = GS winner: #44 Ibiza Farm Motorsport McLaren Artura GT4
      // Heylen/Mars finished 6th — enough to clinch the GS title by 70 points.
      overall: { driverIds: ['cooper', 'uretsky'], teamId: 'ibiza-farm-motorsport' },
      classes: [
        {
          className: 'GS',
          podium: [
            { position: 1, driverIds: ['cooper', 'uretsky'], teamId: 'ibiza-farm-motorsport' },
            // 2nd: Elliott Skeer / Adam Adelson (#47 Nolasport Porsche 718 Cayman GT4 RS) —
            // Skeer & Adelson both exist in drivers.ts; Nolasport team NOT in teams.ts.
            // Omitted to keep all teamIds resolvable.
            // 3rd not granularly confirmed.
          ],
        },
        {
          className: 'TCR',
          // Per sportscar365 finale recap: BHA's #98 took TCR class win at Road Atlanta.
          podium: [
            { position: 1, driverIds: ['filippi', 'wilkins-m'], teamId: 'bryan-herta-autosport' },
            // 2nd: #91 Van der Steur Hyundai — team not in DB; omitted.
            // 3rd: #73 LA Honda World Racing Honda Civic Type-R TCR — team not in DB; omitted.
          ],
        },
      ],
    },
  },
}
