# Series Families & Visibility — Design Proposal

**Status:** Design proposal — not yet implemented
**Date:** 2026-06-07
**Goal:** Two related developer-experience improvements

1. **Series families** — model the parent-child relationship between a headline series and its support/feeder series (F1 ↔ F1 Academy, MotoGP ↔ Moto2/Moto3, NASCAR Cup ↔ Xfinity/Truck, IndyCar ↔ Indy NXT) so the UI can surface related content together.
2. **Single source of truth for visibility** — let a developer hide an entire family or individual series from the entire app by flipping one declarative flag, instead of editing multiple files.

---

## Motivation

### Families
After adding the seven feeder series in this branch, users browsing `/series/f1` see only F1 — there's no visible connection to F1 Academy or Porsche Supercup that race on the same weekends. Similarly, hiding under-supported series during pre-season requires hunting down hardcoded ID lists across the codebase. A first-class "family" concept makes both common operations one-line edits.

### Visibility
Today, hiding a series means:
- Removing it from `SERIES_META` in `series-registry.ts`
- Removing its entry from `EVENTS_2026`
- Removing it from `SERIES_GROUPS`
- Possibly editing each of the 13 UI files that import these
- Risk of leaving orphan references

A `hidden` flag, consumed everywhere through one helper, eliminates the hunt-and-pick.

---

## Goals

- A series can declare a parent (`parentSeriesId`). The UI can derive families from the parent-child graph.
- A series can be hidden (`hidden: true`). When hidden, it disappears from every UI surface (filter dropdown, standings, calendar, autocomplete, sitemap, notifications).
- Hiding a parent does NOT cascade automatically; the developer can hide a whole family by listing each ID. Rationale: keeps the rule mechanically simple and avoids surprise; an explicit "hideFamily" helper handles the bulk case.
- Backwards-compatible: existing `SERIES_META`, `SERIES_GROUPS`, and `ALL_SERIES` keep their public shapes. New fields are optional.

## Non-goals

- User-facing series filtering (already exists via `useLocalStorage` and `selectedSeries`).
- Replacing the existing `SERIES_GROUPS` category bins (open wheel, endurance, etc.). Families and groups are orthogonal: groups answer "what kind of racing is this," families answer "which weekend do they share."
- Multi-parent or nested families. A series has at most one parent.
- Per-year visibility (hide F1 Academy in 2024 only, etc.) — defer until needed.

---

## Design

### Data model changes

`src/data/series-registry.ts:SeriesMeta` gains two optional fields:

```ts
interface SeriesMeta {
  id: string
  name: string
  shortName: string
  color: string
  textColor: string
  logoBgWhite?: boolean
  wikipedia?: string
  // NEW
  parentSeriesId?: string  // The headline series this one supports (e.g., 'f1' for f1-academy)
  hidden?: boolean          // If true, this series is suppressed from every UI surface
}
```

Both default to undefined/false → no behavior change for any existing series.

### Family classifications

The seven feeder series get a `parentSeriesId`:

| Child | parentSeriesId |
|---|---|
| `f1-academy` | `f1` |
| `porsche-supercup` | `f1` |
| `moto2` | `motogp` |
| `moto3` | `motogp` |
| `nascar-xfinity` | `nascar` |
| `nascar-truck` | `nascar` |
| `indy-nxt` | `indycar` |

Series NOT given a parent (deliberately, even though some share weekends with F1):
- `f2`, `f3` — independent FIA championships, not "support" series in the same sense; have their own calendars and identities.
- `elms`, `mlmc` — related to WEC ecosystem but each runs an independent calendar.
- `gtwcam`, `gtwcasia`, `gtwcau`, `britgt` — regional GTWC siblings, no clear "parent."
- Everything else.

A future change could promote some of these (e.g., F2 → F1 family) by adding the field. The model is additive.

### API surface (additions to `src/data/series-registry.ts`)

```ts
/** All series visible to the UI (excludes hidden). */
export function getVisibleSeries(): SeriesMeta[]

/** Predicate — single ID. */
export function isSeriesVisible(id: string): boolean

/** Parent of a series, or null. */
export function getParentSeries(id: string): SeriesMeta | null

/** Direct children of a series (visible only). */
export function getChildSeries(id: string): SeriesMeta[]

/** Family head + all children of a series; for any member, returns the full family. */
export function getFamily(id: string): SeriesMeta[]

/** All series that are family heads (have ≥1 child). */
export function getFamilyHeads(): SeriesMeta[]
```

Every call respects the `hidden` flag. There is no separate "include hidden" overload — that's intentional. If a developer needs raw access for tooling, they read `SERIES_META` directly.

### One-line visibility example

Hide all NASCAR:

```ts
// src/data/series-registry.ts
export const SERIES_META: SeriesMeta[] = [
  // ...
  { id: 'nascar', /* ... */, hidden: true },
  { id: 'nascar-xfinity', /* ... */, hidden: true },
  { id: 'nascar-truck', /* ... */, hidden: true },
]
```

Or with a helper for bulk family-level toggles (added in the same module):

```ts
const HIDDEN_FAMILIES = new Set<string>([
  // 'nascar',  // uncomment to hide Cup + Xfinity + Truck
])

// applied inside SERIES_META at build time
function applyFamilyHides(meta: SeriesMeta[]): SeriesMeta[] {
  return meta.map(m =>
    HIDDEN_FAMILIES.has(m.id) || (m.parentSeriesId && HIDDEN_FAMILIES.has(m.parentSeriesId))
      ? { ...m, hidden: true }
      : m
  )
}
```

The developer flips one set member to hide a family without touching every leaf.

---

## UI surfaces — what changes

The following files currently consume `SERIES_META` / `ALL_SERIES` / `SERIES_GROUPS`. Each needs to be migrated to use the visibility-aware helpers. Most are one-line swaps:

| File | Current call | Replace with |
|---|---|---|
| `src/app/series/SeriesPageClient.tsx` | `SERIES_META.map(...)` | `getVisibleSeries().map(...)` |
| `src/app/series/[id]/page.tsx` | `SERIES_META.find(...)` | guard with `isSeriesVisible(id)` (404 if hidden) |
| `src/app/series/[id]/SeriesDetailClient.tsx` | direct read of SERIES_META | use `getVisibleSeries()`; render children inline (NEW behavior — see below) |
| `src/app/standings/StandingsPageClient.tsx` | builds available-series list | `getVisibleSeries()` |
| `src/app/drivers/[id]/DriverDetailClient.tsx` | filters seasons by series | filter through `isSeriesVisible` |
| `src/app/teams/[id]/TeamDetailClient.tsx` | same as drivers | same |
| `src/app/circuits/[slug]/CircuitDetailClient.tsx` | same | same |
| `src/app/circuits/CircuitsPageClient.tsx` | same | same |
| `src/app/sitemap.ts` | iterates `SERIES_META` | iterate `getVisibleSeries()` (hidden series stay out of the sitemap) |
| `src/components/NotificationSettings.tsx` | series toggles | `getVisibleSeries()` |
| `src/components/UpcomingRaces.tsx` | upcoming aggregation | filter via `isSeriesVisible` |
| `src/components/CalendarSearch.tsx` | search index | filter via `isSeriesVisible` |
| `src/components/SeriesFilterDropdown.tsx` | dropdown options | `getVisibleSeries()` grouped by `SERIES_GROUPS` |

### New UI affordances enabled by families

These are optional follow-on UI improvements that the family model unlocks:

- **Series detail page** (`/series/f1`): below the main events list, render a "Support series this weekend" section that links to children (Porsche Supercup, F1 Academy) showing their sessions for the same date.
- **Series detail page** (child series): show a small "Part of the F1 family" link near the header.
- **Filter dropdown**: optional "Family" sub-section under each group, e.g. under "Stock Car" → "NASCAR family (3)" toggles Cup + Xfinity + Truck together.
- **Calendar grid day view**: optionally nest support-series sessions under the parent in compact mode (Saturday: F1 Q + F1 Academy Race 1 grouped visually).
- **Standings page**: when viewing a parent series' standings, a quick-switch tab to jump to the child series' standings.

None of these are required for the core feature; they're future polish.

---

## Migration plan

The implementation breaks naturally into four PRs:

### PR 1 — Data model + helpers (no UI changes)

- Add `parentSeriesId?` and `hidden?` to `SeriesMeta` interface and corresponding fields on the seven feeder series in `SERIES_META`.
- Add the six helper functions.
- Add tests in `src/data/series-registry.test.ts`:
  - `getVisibleSeries` excludes `hidden: true` entries.
  - `getChildSeries('f1')` returns `[f1-academy, porsche-supercup]`.
  - `getFamily('moto2')` returns `[motogp, moto2, moto3]`.
  - `getFamilyHeads()` returns `[f1, motogp, nascar, indycar]`.
  - Hidden parent does NOT auto-hide children (cascade is opt-in).

No file outside `src/data/series-registry.ts` and the new test file changes. This PR is purely additive and safe to ship alone.

### PR 2 — Migrate every UI consumer to visibility-aware helpers

- For each file in the table above, swap direct `SERIES_META` reads for `getVisibleSeries()` / `isSeriesVisible(id)`.
- Add a test that asserts hiding a series in `SERIES_META` makes it disappear from a representative UI surface (e.g., the `/series` page).

After this PR, setting `hidden: true` on a series removes it from the entire app.

### PR 3 — Family UI affordances (parent shows children, child links to parent)

- `SeriesDetailClient`: add a "Support series" section for parents with children; a "Part of the X family" link for children.
- New i18n strings for "Support series", "Part of X family".

This is the user-facing payoff. Pure UI work, no data-layer churn.

### PR 4 — (Optional, lower priority) Filter dropdown family toggles + calendar day nesting

Polish. Implement only if user feedback in PR 3 surfaces demand.

Total effort estimate: PR 1 ~1 hour, PR 2 ~2 hours, PR 3 ~2 hours, PR 4 ~3 hours. PRs 1-3 are the meaningful improvement.

---

## Series families — concrete classifications

For reference, the family map after PR 1:

```
F1 family (3 series)
  ├── f1               (head)
  ├── f1-academy
  └── porsche-supercup

MotoGP family (3 series)
  ├── motogp           (head)
  ├── moto2
  └── moto3

NASCAR family (3 series)
  ├── nascar           (head)
  ├── nascar-xfinity
  └── nascar-truck

IndyCar family (2 series)
  ├── indycar          (head)
  └── indy-nxt
```

Standalone (no family, no parent): f2, f3, fe, superformula, wec, elms, mlmc, imsa, igtc, 24h, dtm, gtwc, gtwcam, gtwcasia, gtwcau, britgt, supergt, nls, supercars, wrc, dakar, wrx, special.

23 standalone + 11 in families = 34 series total ✓.

---

## Open questions

1. **Should F2 and F3 be in the F1 family?** They share many weekends but are independent FIA championships with their own seasons (F2 races at ~14 of 24 F1 weekends in 2026). Adding them later is a one-field change; leaving them out now is conservative. **Proposed default: leave out.**

2. **Should hiding a parent cascade to children?** My recommendation is no (keep the rule mechanically simple), with an explicit `HIDDEN_FAMILIES` helper for the bulk case. Alternative: cascade by default. Worth a thumbs-up from the maintainer before PR 1.

3. **Should `Family` get its own type / first-class structure** (e.g., `FAMILIES: Family[]` with a label, slug, parent ID)? Or stay derived from parent-child fields? The derived approach is cheaper (no new structure to maintain) but a first-class family makes `/family/f1` URL routing easier if that ever ships. **Proposed default: derived (parent-child only) for now.**

4. **i18n for "Support series" / "Part of X family"** — both English and Ukrainian strings needed when PR 3 ships. Easy enough to do as part of that PR.

5. **Test coverage** — should there be a snapshot test of the resolved family graph? Probably yes, lightweight, prevents accidental detachment.

---

## TL;DR for the maintainer

- Add two optional fields to `SeriesMeta`. Set them on the seven feeders. Six helper functions. One test file.
- Migrate every UI consumer through `getVisibleSeries()` so future hides are a one-line edit.
- Then the family-aware UI affordances follow naturally.

Three small PRs. Backwards-compatible at every step. The "hide everything NASCAR" example becomes literally three `hidden: true` field additions.
