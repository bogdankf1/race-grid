import type { SeasonStandings } from './types'
// MLMC 2021 final standings — verified from lemanscup.com, Wikipedia
// LMP3 Champions: Wells/Noble (Nielsen Racing)
// GT3 Champion: Leutwiler (Pzoberer Zürichsee by TFT)
export const mlmcStandings2021: SeasonStandings = {
  className: 'GT3',
  drivers: [
    { position: 1, driverId: 'nielsen', teamId: 'nielsen-racing', points: 100, wins: 3 },
  ],
  constructors: [],
}
