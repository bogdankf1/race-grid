import { describe, it, expect } from 'vitest'
import type { ClassStandings, SeasonStandings } from './types'
import { getAllClassStandings } from './index'

describe('getAllClassStandings', () => {
  it('returns empty array for missing standings', () => {
    expect(getAllClassStandings('does-not-exist', 1999)).toEqual([])
  })

  it('returns single-class array for a single-class series (F1 2026)', () => {
    const classes = getAllClassStandings('f1', 2026)
    expect(classes.length).toBe(1)
    expect(classes[0].drivers.length).toBeGreaterThan(0)
  })

  it('returns primary + other classes for multi-class series (WEC 2026)', () => {
    const classes = getAllClassStandings('wec', 2026)
    expect(classes.map(c => c.className)).toEqual(['Hypercar', 'LMGT3'])
    expect(classes[1].drivers.length).toBeGreaterThan(0)
  })

  it('returns three classes for IMSA 2026', () => {
    const classes = getAllClassStandings('imsa', 2026)
    expect(classes.map(c => c.className)).toEqual(['GTP', 'GTD Pro', 'GTD'])
  })

  it('asserts the type shape compiles', () => {
    const s: SeasonStandings = {
      drivers: [],
      constructors: [],
      className: 'Foo',
      otherClasses: [{ className: 'Bar', drivers: [], constructors: [] } satisfies ClassStandings],
    }
    expect(s.otherClasses?.[0].className).toBe('Bar')
  })
})
