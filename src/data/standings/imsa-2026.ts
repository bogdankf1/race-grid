import type { SeasonStandings } from './types'

// IMSA WeatherTech 2026 standings — GTP, GTD Pro, GTD — verified from autohebdof1.com and en.wikipedia.org (after Round 5 Detroit Sprint)
export const imsaStandings2026: SeasonStandings = {
  className: 'GTP',
  drivers: [
    { position: 1, driverId: 'aitken', teamId: 'whelen-engineering', points: 1760, wins: 1 },
    { position: 2, driverId: 'heinrich', teamId: 'porsche-penske', points: 1616, wins: 2 },
    { position: 3, driverId: 'nasr', teamId: 'porsche-penske', points: 1606, wins: 2 },
    { position: 3, driverId: 'andlauer', teamId: 'porsche-penske', points: 1606, wins: 2 },
    { position: 5, driverId: 'bamber', teamId: 'whelen-engineering', points: 1412, wins: 1 },
  ],
  constructors: [],
  otherClasses: [
    {
      className: 'GTD Pro',
      // Source: en.wikipedia.org/wiki/2026_IMSA_SportsCar_Championship — after Round 5 Detroit Sprint 2026 (GTD Pro contested DAY, SEB, LGA, DET)
      // One first-listed driver per crew per runbook convention.
      // Skipped rows (driver/team IDs not in repo): Pos 3 Mies/Vervisch (#65 Ford Racing — team not in teams.ts), Pos 5 Harry King/Tandy (Harry King not in drivers.ts), Pos 6 Caldarelli/Mitchell (#9 Pfaff Motorsports — team not in teams.ts), Pos 7 Barker/Olsen (#64 Ford Racing — team not in teams.ts), Pos 8 Barnicoat/Hawksworth (#14 Vasser Sullivan — team not in teams.ts)
      drivers: [
        { position: 1, driverId: 'catsburg', teamId: 'corvette-racing', points: 1243, wins: 0 },
        { position: 2, driverId: 'de-phillippi', teamId: 'paul-miller-racing', points: 1225, wins: 1 },
        { position: 4, driverId: 'garcia', teamId: 'corvette-racing', points: 1212, wins: 1 },
      ],
      constructors: [],
    },
    {
      className: 'GTD',
      // Source: en.wikipedia.org/wiki/2026_IMSA_SportsCar_Championship — after Round 4 Laguna Seca 2026 (GTD did not contest Detroit Round 5; contested DAY, SEB, LBH, LGA)
      // One first-listed driver per crew per runbook convention.
      // Skipped rows (driver/team IDs not in repo): Pos 3 Pedersen/Telitz (#12 Vasser Sullivan — team not in teams.ts), Pos 6 Iribe/Schandorff (#70 Inception Racing — team not in teams.ts), Pos 1 E. Barrichello (heart-of-racing — pairing not in results file), Pos 2 Foley (turner-motorsport — pairing not in results file), Pos 5 Gamble (heart-of-racing — pairing not in results file), Pos 8 Adelson (wright-motorsports — pairing not in results file)
      drivers: [
        { position: 4, driverId: 'ellis-p', teamId: 'winward-racing', points: 1080, wins: 1 },
        { position: 7, driverId: 'formal', teamId: 'wayne-taylor-racing', points: 973, wins: 1 },
      ],
      constructors: [],
    },
  ],
}
