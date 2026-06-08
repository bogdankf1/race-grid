import type { EntryItem } from './types'

// IMSA Michelin Pilot Challenge 2026 — full-season entries
// Multi-class: GS (GT4) + TCR (Touring Car Racing)
// Sources verified 2026-06-08:
//   - en.wikipedia.org/wiki/2026_Michelin_Pilot_Challenge
//   - imsa.com per-event entry list notebooks (Daytona, Sebring, Laguna Seca, Mid-Ohio)
//   - sportscar365.com IMPC season previews
// Note: many GT4 cars rotate enduro additions for the 4-hour rounds; listed below
// are the regular full-season driver pairings.
export const impcEntries2026: EntryItem[] = [
  // ===== GS (Grand Sport / GT4) =====
  // Rebel Rock Racing (Aston Martin Vantage AMR GT4 Evo)
  { driverId: 'liddell', teamId: 'rebel-rock-racing', carNumber: 71, class: 'GS' },
  { driverId: 'depew', teamId: 'rebel-rock-racing', carNumber: 71, class: 'GS' },
  { driverId: 'davis-a', teamId: 'rebel-rock-racing', carNumber: 71, class: 'GS' },

  // Ibiza Farm Motorsport / Accelerating Performance (McLaren Artura GT4)
  { driverId: 'cooper', teamId: 'ibiza-farm-motorsport', carNumber: 44, class: 'GS' },
  { driverId: 'uretsky', teamId: 'ibiza-farm-motorsport', carNumber: 44, class: 'GS' },

  // Turner Motorsport (BMW M4 GT4 EVO)
  { driverId: 'machavern', teamId: 'turner-motorsport', carNumber: 95, class: 'GS' },
  { driverId: 'mars', teamId: 'turner-motorsport', carNumber: 95, class: 'GS' },

  // Winward Racing (Mercedes-AMG GT GT4)
  { driverId: 'arrow', teamId: 'winward-racing', carNumber: 57, class: 'GS' },
  { driverId: 'ward', teamId: 'winward-racing', carNumber: 57, class: 'GS' },

  // CarBahn with Peregrine Racing (BMW M4 GT4 EVO)
  { driverId: 'westphal', teamId: 'carbahn-peregrine', carNumber: 39, class: 'GS' },
  { driverId: 'mcalister-s', teamId: 'carbahn-peregrine', carNumber: 39, class: 'GS' },

  // McCumbee McAleer Racing (BMW M4 GT4 EVO)
  { driverId: 'cicero', teamId: 'mccumbee-mcaleer-racing', carNumber: 19, class: 'GS' },
  { driverId: 'noaker', teamId: 'mccumbee-mcaleer-racing', carNumber: 19, class: 'GS' },
  { driverId: 'krainz', teamId: 'mccumbee-mcaleer-racing', carNumber: 13, class: 'GS' },
  { driverId: 'mcaleer', teamId: 'mccumbee-mcaleer-racing', carNumber: 13, class: 'GS' },

  // Czabok Simpson Racing
  { driverId: 'burkhard', teamId: 'czabok-simpson-racing', carNumber: 27, class: 'GS' },
  { driverId: 'scully', teamId: 'czabok-simpson-racing', carNumber: 27, class: 'GS' },

  // Random Vandals Racing / STR (BMW M4 GT4 EVO)
  { driverId: 'auberlen', teamId: 'random-vandals-racing', carNumber: 38, class: 'GS' },
  { driverId: 'samantha-tan', teamId: 'random-vandals-racing', carNumber: 38, class: 'GS' },

  // Circle H Racing (Aston Martin Vantage GT4)
  { driverId: 'hampton-d', teamId: 'circle-h-racing', carNumber: 14, class: 'GS' },
  { driverId: 'merrill', teamId: 'circle-h-racing', carNumber: 14, class: 'GS' },
  { driverId: 'sarukhanyan', teamId: 'circle-h-racing', carNumber: 14, class: 'GS' },

  // RAFA Racing (Toyota GR Supra GT4 EVO2)
  { driverId: 'porto', teamId: 'rafa-racing', carNumber: 50, class: 'GS' },

  // Hattori Motorsports (Toyota GR Supra GT4)
  { driverId: 'grisham', teamId: 'hattori-motorsports', carNumber: 92, class: 'GS' },
  { driverId: 'greenemeier', teamId: 'hattori-motorsports', carNumber: 92, class: 'GS' },

  // Team TGM (Aston Martin Vantage GT4)
  { driverId: 'trinkler', teamId: 'team-tgm', carNumber: 46, class: 'GS' },

  // Motorsports in Action (McLaren Artura GT4)
  { driverId: 'lazare', teamId: 'motorsports-in-action', carNumber: 69, class: 'GS' },

  // Liefooghe / Quinlan (Stephen Cameron Racing / similar BMW GS)
  { driverId: 'liefooghe', teamId: 'stephen-cameron-racing', carNumber: 5, class: 'GS' },
  { driverId: 'quinlan', teamId: 'stephen-cameron-racing', carNumber: 5, class: 'GS' },

  // ===== TCR (Touring Car) =====
  // Bryan Herta Autosport (Hyundai Elantra N TCR)
  { driverId: 'brown-p', teamId: 'bryan-herta-autosport', carNumber: 76, class: 'TCR' },
  { driverId: 'dupont', teamId: 'bryan-herta-autosport', carNumber: 76, class: 'TCR' },
  { driverId: 'filippi', teamId: 'bryan-herta-autosport', carNumber: 33, class: 'TCR' },
  { driverId: 'morris', teamId: 'bryan-herta-autosport', carNumber: 33, class: 'TCR' },
  { driverId: 'buchan', teamId: 'bryan-herta-autosport', carNumber: 33, class: 'TCR' },
  { driverId: 'gottsacker', teamId: 'bryan-herta-autosport', carNumber: 18, class: 'TCR' },
  { driverId: 'bergstein', teamId: 'bryan-herta-autosport', carNumber: 18, class: 'TCR' },
  { driverId: 'wilkins-m', teamId: 'bryan-herta-autosport', carNumber: 98, class: 'TCR' },
  { driverId: 'aust-m', teamId: 'bryan-herta-autosport', carNumber: 98, class: 'TCR' },

  // Victor Gonzalez Racing Team (CUPRA Leon VZ TCR)
  { driverId: 'gonzalez-t', teamId: 'victor-gonzalez-racing', carNumber: 99, class: 'TCR' },
  { driverId: 'girolami', teamId: 'victor-gonzalez-racing', carNumber: 99, class: 'TCR' },

  // Montreal Motorsport Group (Honda Civic FL5 TCR)
  { driverId: 'montour', teamId: 'mmg', carNumber: 93, class: 'TCR' },
  { driverId: 'wittmer-k', teamId: 'mmg', carNumber: 93, class: 'TCR' },
  { driverId: 'yoshihara', teamId: 'mmg', carNumber: 93, class: 'TCR' },

  // HART (Honda Racing / Acura Team) — Honda Civic Type R TCR
  { driverId: 'lawrence-c', teamId: 'hart', carNumber: 89, class: 'TCR' },
  { driverId: 'gilsinger', teamId: 'hart', carNumber: 89, class: 'TCR' },
  { driverId: 'chambers-t', teamId: 'hart', carNumber: 89, class: 'TCR' },

  // KMW Motorsports with TMR Engineering (Honda Civic Type-R TCR)
  { driverId: 'lewis-tim', teamId: 'kmw-motorsports', carNumber: 84, class: 'TCR' },
  { driverId: 'pasquarella', teamId: 'kmw-motorsports', carNumber: 84, class: 'TCR' },

  // Copeland Motorsports (Hyundai Veloster N TCR)
  { driverId: 'maxson-t', teamId: 'copeland-motorsports', carNumber: 27, class: 'TCR' },

  // Baker Racing / Vance (Audi RS3 LMS TCR)
  { driverId: 'baker-s', teamId: 'racers-edge', carNumber: 75, class: 'TCR' },
  { driverId: 'vance', teamId: 'racers-edge', carNumber: 75, class: 'TCR' },

  // Gou family (Audi RS3 LMS TCR)
  { driverId: 'gou-eddie', teamId: 'lap-motorsports', carNumber: 17, class: 'TCR' },
  { driverId: 'gou-eduardo', teamId: 'lap-motorsports', carNumber: 17, class: 'TCR' },

  // Dean Baker (Audi)
  { driverId: 'baker-d', teamId: 'unitronic-jdc-miller-motorsports', carNumber: 54, class: 'TCR' },
]
