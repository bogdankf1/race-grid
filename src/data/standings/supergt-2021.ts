import type { SeasonStandings } from './types'
// Super GT 2021 GT500 final standings — verified from supergt.net, Wikipedia
// Champions: Sekiguchi/Tsuboi (TGR Team au TOM'S, Toyota)
export const supergtStandings2021: SeasonStandings = {
  className: 'GT500',
  drivers: [
    { position: 1, driverId: 'sekiguchi', teamId: 'tgr-au-toms', points: 63, wins: 2 },
  ],
  constructors: [],
}
