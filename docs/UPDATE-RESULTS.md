# Update Race Results

This runbook is executed manually via Claude Code. It finds sessions that finished since the last update and adds their official results.

---

## Procedure

### 1. Identify finished sessions without results

Read `src/data/series-registry.ts` to get all series. For each series, scan events and find sessions where:
- Session type is `race`, `endurance`, `sprint`, `sprint_qualifying`, `qualifying`, `hyperpole`, or `stage`
- Session `startUtc + durationMinutes` is in the past (already finished)
- No result exists yet in `src/data/results/<series>-2026.ts`

**Important:** Results are needed for ALL these session types, not just races:
- **Qualifying** — pole position + top 3
- **Sprint Qualifying** (F1) — sprint pole + top 3
- **Hyperpole** (WEC) — pole + top 3
- **Sprint** (F1) — winner + podium
- **Race / Endurance** — winner + podium + class winners + fastest lap (F1)
- **Stage** (WRC) — overall rally winner + podium (only for the final stage session of each rally)

### 2. Search for results from official sources

For each finished session without a result, search **official sources first**:

| Series | Primary source |
|--------|---------------|
| F1 | formula1.com/en/results |
| IndyCar | indycar.com/Results |
| NASCAR | nascar.com/results |
| WEC | fiawec.com/en/results |
| IMSA | imsa.com/results |
| WRC | wrc.com/en/results |
| DTM | dtm.com/en/results |
| GTWC | gt-world-challenge-europe.com/results |
| NLS | nuerburgring-langstrecken-serie.de results page |
| Super GT | supergt.net/en/results |
| ELMS | europeanlemansseries.com results |
| IGTC | intercontinentalgtchallenge.com/results |
| Super Formula | superformula.net/en/results |
| Supercars | supercars.com/results |

Fallback: `WebSearch` for `"<event name> <year> official results"`

Extract: winner driver(s), winner team, podium (P1-P3), fastest lap (F1 only)
- For endurance races (WEC, IMSA, ELMS, IGTC, NLS): find overall winner and class winners if available
- For WRC: find overall rally winner (driver + co-driver + team)
- For qualifying/hyperpole: find pole position and top 3

### 3. Update result files

Add results to the appropriate file in `src/data/results/`:
- `f1-2026.ts`, `nascar-2026.ts`, `indycar-2026.ts`, etc.
- If a file doesn't exist for a series yet, create it following the pattern of existing files
- Import it in `src/data/results/index.ts`

Result data structure — each event can have multiple session type results:
```typescript
'<event-id>': {
  // Qualifying result (pole + top 3)
  qualifying: {
    overall: { drivers: ['PoleDriver'], team: 'Team Name' },
    classes: [{
      className: 'Top 3',
      podium: [
        { position: 1, drivers: ['PoleDriver'], team: '...' },
        { position: 2, drivers: ['P2'], team: '...' },
        { position: 3, drivers: ['P3'], team: '...' },
      ],
    }],
  },
  // Sprint qualifying (F1 sprint weekends only)
  sprint_qualifying: {
    overall: { drivers: ['SprintPoleDriver'], team: 'Team' },
    classes: [{ className: 'Top 3', podium: [...] }],
  },
  // Sprint race (F1 only)
  sprint: {
    overall: { drivers: ['SprintWinner'], team: 'Team' },
    classes: [{ className: 'Top 3', podium: [...] }],
  },
  // Main race / endurance
  race: {
    overall: { drivers: ['Winner1', 'Winner2'], team: 'Team Name' },
    classes: [{
      className: 'Overall' | 'Hypercar' | 'LMGT3' | 'GTP' | 'Classification',
      podium: [
        { position: 1, drivers: [...], team: '...' },
        { position: 2, drivers: [...], team: '...' },
        { position: 3, drivers: [...], team: '...' },
      ],
    }],
    fastestLap: 'DriverName',  // F1 only
  },
  // WRC overall rally result (keyed as 'stage')
  stage: {
    overall: { drivers: ['Driver', 'CoDriver'], team: 'Team' },
    classes: [{ className: 'Overall', podium: [...] }],
  },
},
```

### 4. Build and verify

```
npx next build
```

### 5. Commit changes

If any results were added, commit with message:
```
Update race results: <list of events updated>
```

---

## Important notes

- **Only add verified results.** If a result is provisional or under protest, note it but still add the official classification.
- **Event IDs must match** the IDs in the calendar data files exactly.
- **Session types must match** — use `race`, `endurance`, `sprint`, `sprint_qualifying`, `qualifying`, `hyperpole`, or `stage`.
- **Every finished session needs a result** — qualifying (pole + top 3), sprint qualifying (F1), sprints, races, endurance, and stages. Don't skip qualifying sessions.
- **Driver names:** Use the common English spelling (e.g., "Verstappen" not "Max Emilian Verstappen").
- **For F1 sprint weekends:** Add results for `sprint_qualifying`, `qualifying`, `sprint`, and `race` — all four session types.
- **For WRC:** Results go under the `stage` session type (the overall rally result, not individual stage results). Only one result per rally, keyed to the `stage` type — the dedup logic ensures it only shows once.
- **For endurance series with classes:** Include class results in the `classes` array. Use official class names (e.g., "Hypercar", "LMGT3", "LMP2", "GT3", "GTP", "GTD Pro", "GTD").
- **For qualifying:** Use `className: 'Top 3'` for the podium. The UI shows "Pole position" label for qualifying results automatically.
- **Cancelled events:** If a race/session was cancelled (e.g., weather), remove the session from the calendar data file rather than leaving it without a result.
