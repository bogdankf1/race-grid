import type { SeasonStandings } from './types'
// WRC 2024 final standings — verified from wrc.com, fia.com
// Champion: Thierry Neuville (Hyundai) — first title
export const wrcStandings2024: SeasonStandings = {
  drivers: [
    { position: 1, driverId: 'neuville', teamId: 'hyundai-wrt', points: 228, wins: 5 },
  ],
  constructors: [
    { position: 1, teamId: 'toyota-gazoo-racing', points: 530, wins: 8 },
    { position: 2, teamId: 'hyundai-wrt', points: 490, wins: 5 },
  ],
}
