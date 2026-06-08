import { describe, it, expect } from 'vitest'
import {
  SERIES_META,
  FAMILIES,
  getSeriesMeta,
  getFamily,
  getFamilyForSeries,
  getFamilyMembers,
  getFamilyHeads,
  isSeriesVisible,
  getVisibleSeries,
} from './series-registry'

describe('FAMILIES registry', () => {
  it('declares the six expected families', () => {
    expect(FAMILIES.map(f => f.id)).toEqual([
      'f1-family',
      'motogp-family',
      'nascar-family',
      'indycar-family',
      'fia-wec-family',
      'sro-gt3-family',
    ])
  })

  it('FIA WEC family contains wec, elms, mlmc with wec as head', () => {
    const e = getFamily('fia-wec-family')!
    expect(e.headSeriesId).toBe('wec')
    expect(e.memberSeriesIds).toEqual(['wec', 'elms', 'mlmc'])
  })

  it('SRO GT3 family contains GTWC continents + igtc + britgt with gtwc as head', () => {
    const g = getFamily('sro-gt3-family')!
    expect(g.headSeriesId).toBe('gtwc')
    expect(g.memberSeriesIds).toEqual(['gtwc', 'gtwcam', 'gtwcasia', 'gtwcau', 'igtc', 'britgt'])
  })

  it('F1 family contains f1, f2, f3, f1-academy, porsche-supercup with f1 as head', () => {
    const f1 = getFamily('f1-family')!
    expect(f1.headSeriesId).toBe('f1')
    expect(f1.memberSeriesIds).toEqual(['f1', 'f2', 'f3', 'f1-academy', 'porsche-supercup'])
  })

  it('every family member resolves to a real series', () => {
    for (const family of FAMILIES) {
      for (const id of family.memberSeriesIds) {
        expect(getSeriesMeta(id), `family ${family.id} member ${id}`).not.toBeNull()
      }
      expect(family.memberSeriesIds, `family ${family.id} head`).toContain(family.headSeriesId)
    }
  })

  it('porsche-supercup belongs to the F1 family', () => {
    expect(getFamilyForSeries('porsche-supercup')?.id).toBe('f1-family')
  })

  it('moto2 resolves to MotoGP family', () => {
    const family = getFamilyForSeries('moto2')
    expect(family?.id).toBe('motogp-family')
  })

  it('getFamilyHeads returns one head per family in order', () => {
    expect(getFamilyHeads().map(s => s.id)).toEqual(['f1', 'motogp', 'nascar', 'indycar', 'wec', 'gtwc'])
  })
})

describe('visibility', () => {
  it('all series are visible by default', () => {
    expect(getVisibleSeries().length).toBe(SERIES_META.length)
  })

  it('isSeriesVisible returns false for unknown IDs', () => {
    expect(isSeriesVisible('does-not-exist')).toBe(false)
  })

  it('isSeriesVisible respects the hidden flag', () => {
    const f1 = SERIES_META.find(s => s.id === 'f1')!
    const original = f1.hidden
    try {
      f1.hidden = true
      expect(isSeriesVisible('f1')).toBe(false)
    } finally {
      f1.hidden = original
    }
  })

  it('hiding a family head cascades to all family members', () => {
    const nascar = SERIES_META.find(s => s.id === 'nascar')!
    const original = nascar.hidden
    try {
      nascar.hidden = true
      expect(isSeriesVisible('nascar')).toBe(false)
      expect(isSeriesVisible('nascar-xfinity')).toBe(false)
      expect(isSeriesVisible('nascar-truck')).toBe(false)
    } finally {
      nascar.hidden = original
    }
  })

  it('hiding a non-head family member does NOT cascade to siblings', () => {
    const xfinity = SERIES_META.find(s => s.id === 'nascar-xfinity')!
    const original = xfinity.hidden
    try {
      xfinity.hidden = true
      expect(isSeriesVisible('nascar-xfinity')).toBe(false)
      expect(isSeriesVisible('nascar')).toBe(true)
      expect(isSeriesVisible('nascar-truck')).toBe(true)
    } finally {
      xfinity.hidden = original
    }
  })

  it('getFamilyMembers omits hidden members', () => {
    const xfinity = SERIES_META.find(s => s.id === 'nascar-xfinity')!
    const original = xfinity.hidden
    try {
      xfinity.hidden = true
      const ids = getFamilyMembers('nascar-family').map(m => m.id)
      expect(ids).toEqual(['nascar', 'nascar-truck'])
    } finally {
      xfinity.hidden = original
    }
  })
})
