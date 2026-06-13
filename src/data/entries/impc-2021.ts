import type { EntryItem } from './types'

// IMSA Michelin Pilot Challenge 2021 — full-season entries
// Multi-class: GS (GT4) + TCR (Touring Car Racing)
// Sources verified 2026-06-08:
//   - en.wikipedia.org/wiki/2021_Michelin_Pilot_Challenge
//   - imsa.com per-event entry list notebooks
//   - sportscar365.com / dailysportscar.com season previews
// Note: many GS pairings rotated for the 4-hour rounds at Daytona and Watkins Glen.
// Listed below are the regular full-season pairings; enduro third drivers are added
// in the results file where they shared a podium.
export const impcEntries2021: EntryItem[] = [
  // ===== GS (Grand Sport / GT4) =====
  // AWA Racing (McLaren 570S GT4) — 2021 Daytona winners
  { driverId: 'fidani', teamId: 'awa-racing', carNumber: 13, class: 'GS' },
  { driverId: 'wittmer-kuno', teamId: 'awa-racing', carNumber: 13, class: 'GS' },
  { driverId: 'green-chris', teamId: 'awa-racing', carNumber: 13, class: 'GS' },

  // Winward Racing (Mercedes-AMG GT4)
  { driverId: 'dontje', teamId: 'winward-racing', carNumber: 4, class: 'GS' },
  { driverId: 'ward-r', teamId: 'winward-racing', carNumber: 4, class: 'GS' },

  // VOLT Racing with Archangel Motorsports (Aston Martin Vantage AMR GT4)
  { driverId: 'brynjolfsson', teamId: 'volt-racing', carNumber: 7, class: 'GS' },
  { driverId: 'hindman', teamId: 'volt-racing', carNumber: 7, class: 'GS' },

  // Rebel Rock Racing (Chevrolet Camaro GT4.R)
  { driverId: 'depew', teamId: 'rebel-rock-racing', carNumber: 71, class: 'GS' },
  { driverId: 'liddell', teamId: 'rebel-rock-racing', carNumber: 71, class: 'GS' },

  // Turner Motorsport (BMW M4 GT4)
  { driverId: 'auberlen', teamId: 'turner-motorsport', carNumber: 95, class: 'GS' },
  { driverId: 'machavern', teamId: 'turner-motorsport', carNumber: 95, class: 'GS' },
  { driverId: 'barletta', teamId: 'turner-motorsport', carNumber: 96, class: 'GS' },
  { driverId: 'foley', teamId: 'turner-motorsport', carNumber: 96, class: 'GS' },

  // McCann Racing (Audi R8 LMS GT4)
  { driverId: 'davis-a', teamId: 'mccann-racing', carNumber: 8, class: 'GS' },
  { driverId: 'mccann', teamId: 'mccann-racing', carNumber: 8, class: 'GS' },

  // Motorsports in Action (McLaren 570S GT4)
  { driverId: 'monk', teamId: 'motorsports-in-action', carNumber: 3, class: 'GS' },
  { driverId: 'pigot', teamId: 'motorsports-in-action', carNumber: 3, class: 'GS' },

  // Notlad Racing by RS1 (Aston Martin Vantage AMR GT4)
  { driverId: 'gallagher-p', teamId: 'notlad-racing', carNumber: 23, class: 'GS' },
  { driverId: 'mcaleer', teamId: 'notlad-racing', carNumber: 23, class: 'GS' },

  // Murillo Racing (Mercedes-AMG GT4)
  { driverId: 'foss', teamId: 'murillo-racing', carNumber: 56, class: 'GS' },
  { driverId: 'mosing', teamId: 'murillo-racing', carNumber: 56, class: 'GS' },

  // Wright Motorsports (Porsche 718 Cayman GT4 Clubsport) — 2021 GS champions
  { driverId: 'heylen', teamId: 'wright-motorsports', carNumber: 16, class: 'GS' },
  { driverId: 'hardwick-r', teamId: 'wright-motorsports', carNumber: 16, class: 'GS' },
  { driverId: 'root', teamId: 'wright-motorsports', carNumber: 16, class: 'GS' },

  // Team TGM (Chevrolet Camaro GT4.R)
  { driverId: 'plumb-h', teamId: 'team-tgm', carNumber: 46, class: 'GS' },
  { driverId: 'plumb', teamId: 'team-tgm', carNumber: 46, class: 'GS' },
  { driverId: 'giovanis', teamId: 'team-tgm', carNumber: 46, class: 'GS' },
  { driverId: 'trinkler', teamId: 'team-tgm', carNumber: 46, class: 'GS' },

  // TGR Riley Motorsports (Toyota GR Supra GT4)
  { driverId: 'najri', teamId: 'tgr-riley-motorsports', carNumber: 14, class: 'GS' },
  { driverId: 'quiros', teamId: 'tgr-riley-motorsports', carNumber: 14, class: 'GS' },

  // ===== TCR (Touring Car) =====
  // Unitronic JDC-Miller MotorSports (Audi RS 3 LMS TCR)
  { driverId: 'miller-c', teamId: 'unitronic-jdc-miller-motorsports', carNumber: 17, class: 'TCR' },
  { driverId: 'taylor-mikey', teamId: 'unitronic-jdc-miller-motorsports', carNumber: 17, class: 'TCR' },
  { driverId: 'tally', teamId: 'unitronic-jdc-miller-motorsports', carNumber: 17, class: 'TCR' },

  // KMW Motorsports with TMR Engineering (Alfa Romeo Giulietta Veloce TCR)
  { driverId: 'block', teamId: 'kmw-motorsports', carNumber: 5, class: 'TCR' },
  { driverId: 'lewis-tim', teamId: 'kmw-motorsports', carNumber: 5, class: 'TCR' },

  // Van Der Steur Racing (Hyundai Veloster N TCR)
  { driverId: 'dupont', teamId: 'van-der-steur-racing', carNumber: 19, class: 'TCR' },
  { driverId: 'van-der-steur', teamId: 'van-der-steur-racing', carNumber: 19, class: 'TCR' },

  // Road Shagger Racing (Audi RS 3 LMS TCR)
  { driverId: 'ernstone', teamId: 'road-shagger-racing', carNumber: 61, class: 'TCR' },
  { driverId: 'morley', teamId: 'road-shagger-racing', carNumber: 61, class: 'TCR' },

  // Bryan Herta Autosport with Curb-Agajanian (Hyundai Elantra N TCR) — 2021 TCR champions in #77
  { driverId: 'hagler', teamId: 'bryan-herta-autosport', carNumber: 77, class: 'TCR' },
  { driverId: 'lewis-m', teamId: 'bryan-herta-autosport', carNumber: 77, class: 'TCR' },
  { driverId: 'chase-p', teamId: 'bryan-herta-autosport', carNumber: 98, class: 'TCR' },
  { driverId: 'norman-r', teamId: 'bryan-herta-autosport', carNumber: 98, class: 'TCR' },
  { driverId: 'gottsacker', teamId: 'bryan-herta-autosport', carNumber: 33, class: 'TCR' },
  { driverId: 'wilkins-m', teamId: 'bryan-herta-autosport', carNumber: 33, class: 'TCR' },

  // Atlanta Speedwerks (Honda Civic Type R TCR)
  { driverId: 'eversley', teamId: 'atlanta-speedwerks', carNumber: 94, class: 'TCR' },
  { driverId: 'lamb-t', teamId: 'atlanta-speedwerks', carNumber: 94, class: 'TCR' },
  { driverId: 'henderson-b', teamId: 'atlanta-speedwerks', carNumber: 84, class: 'TCR' },
  { driverId: 'noaker', teamId: 'atlanta-speedwerks', carNumber: 84, class: 'TCR' },

  // CB Motorsports (Hyundai Veloster N TCR)
  { driverId: 'estep', teamId: 'cb-motorsports', carNumber: 81, class: 'TCR' },
  { driverId: 'kvamme', teamId: 'cb-motorsports', carNumber: 81, class: 'TCR' },

  // Copeland Motorsports (Hyundai Veloster N TCR)
  { driverId: 'gonzalez-t', teamId: 'copeland-motorsports', carNumber: 27, class: 'TCR' },
  { driverId: 'maxson-t', teamId: 'copeland-motorsports', carNumber: 27, class: 'TCR' },
]
