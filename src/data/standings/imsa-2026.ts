import type { SeasonStandings } from './types'

// IMSA WeatherTech GTP 2026 standings — verified from autohebdof1.com (after Round 5 Detroit Sprint)
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
}
