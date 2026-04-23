# Race Grid — Comprehensive App Audit

Generated: 2026-04-23

---

## Table of Contents

1. [Critical Bugs](#1-critical-bugs)
2. [SEO](#2-seo)
3. [Performance](#3-performance)
4. [Data Completeness](#4-data-completeness)
5. [UI/UX](#5-uiux)
6. [PWA & Advanced Features](#6-pwa--advanced-features)
7. [Code Quality](#7-code-quality)
8. [Feature Ideas](#8-feature-ideas)
9. [What's Already Great](#9-whats-already-great)

---

## 1. Critical Bugs

### P0 — Fix Immediately

| Bug | File | Line | Impact | Status |
|-----|------|------|--------|--------|
| ~~Non-unique notification keys~~ | `src/hooks/useNotifications.ts` | 96 | ~~Missed notifications~~ | FIXED |
| Notifications sent for hidden session types — session type filter not respected | `src/hooks/useNotifications.ts` | 88-92 | Unwanted notifications for Practice etc. | By design — notification prefs are independent of view filter |
| ~~Circuit null crash — `getCircuit()` returns null for `termas-de-rio-hondo`~~ | `src/components/DayDetail.tsx` | 132 | ~~Visible UI bug for MotoGP users~~ | FIXED (circuit added + null guard existed) |
| ~~Missing circuit definition: `termas-de-rio-hondo`~~ | `src/data/circuits.ts` | — | ~~Data gap~~ | FIXED |

### P1 — Fix Soon

| Bug | File | Line | Impact |
|-----|------|------|--------|
| Hydration mismatch — `format(new Date(), 'yyyy-MM')` runs at render time on both server and client; differs near midnight UTC | `src/app/page.tsx` | 24 | React hydration warning |
| Week view date calculation uses local time, not UTC — races can appear on wrong day in certain timezones | `src/hooks/useCalendarEvents.ts` | 74-79 | Wrong day shown for some users |
| TBA session times use `00:00:00Z` (midnight UTC) as placeholder — misleading, shows as real time | Multiple series files | — | Users think race is at midnight |
| Countdown interval accumulation — `setInterval` cleared and re-created on every tick, slight memory leak | `src/components/Countdown.tsx` | 47-56 | Performance degradation over time |
| Array index used as React key for sessions — causes reconciliation issues if list reorders | `src/components/DayDetail.tsx` | 177 | Potential stale UI |

---

## 2. SEO

### Critical Issues

| Issue | Impact | Pages Affected |
|-------|--------|----------------|
| ~~**Dynamic routes have no unique metadata**~~ | ~~Google shows same title for 3,669 pages~~ | ~~3,669~~ | FIXED — `generateMetadata` added to all 5 dynamic routes |
| ~~**Sitemap is incomplete**~~ | ~~3,669 pages invisible to Google~~ | ~~3,669~~ | FIXED — sitemap now includes /series/*, /drivers/*, /teams/*, /circuits/*, /standings |
| **No structured data (JSON-LD)** — no schema.org markup for events, drivers, teams, circuits, breadcrumbs | No rich snippets in Google results | All |
| **No OG images** — no `og:image` on any page. Social shares show blank preview | Poor social click-through | All |

### Medium Issues

| Issue | Notes |
|-------|-------|
| No hreflang tags for EN/UK locales | Language switching is client-side only, not discoverable by crawlers |
| Heading hierarchy inconsistent on dynamic pages | H1 exists but H2/H3 not systematic |
| Breadcrumbs component exists but has no JSON-LD schema | Visual-only, not machine-readable |

### What's Good

- Clean, semantic URL structure (`/series/f1`, `/drivers/verstappen`)
- `robots.txt` properly configured
- Google verification meta tag present
- Fonts self-hosted via `next/font` (no external CDN penalty)
- Static export = fast TTFB

### Fix Priority

1. Add `generateMetadata()` to all 5 dynamic route pages
2. Extend `sitemap.ts` to include all generated pages (~3,669 missing)
3. Add JSON-LD for BreadcrumbList, Event, Person, Organization
4. Create OG image (even a static one is better than none)

---

## 3. Performance

### Architecture (Good)

- Static export (`output: 'export'`) — no server, CDN-friendly
- Lean dependencies: React 19, Next.js 15, date-fns, lucide-react, clsx
- No CSS-in-JS, no unnecessary packages
- No third-party analytics or tracking scripts
- SVG-only logos (204KB total, 27 files)
- Fonts self-hosted, subsetted to Latin

### Concerns

| Issue | Severity | Details |
|-------|----------|---------|
| **All 144 calendar data files imported at top level** | High | `series-registry.ts` imports every series for every year (2021-2026). ~2.9MB of data files loaded regardless of which year user views |
| **Main page is `'use client'`** | Medium | Home page can't benefit from RSC. 37 files total marked `'use client'` |
| **No code splitting** | Medium | No `next/dynamic()` or `React.lazy()` anywhere. All components loaded upfront |
| **No virtualization** | Low | Standings tables can have 500+ rows, all rendered at once |
| **Countdown timer drains battery** | Low | Updates every 1s in final 5 minutes. Acceptable but could throttle when tab hidden |
| **CalendarSearch rebuilds index on every timezone change** | Low | Expensive for a setting that rarely changes |
| **Service worker cache version hardcoded** | Low | `CACHE_NAME = 'race-grid-v1'` — clients won't get updates if version doesn't change |

### Optimization Opportunities

1. **Split data by year** — only import current year, lazy-load historical data
2. **Lazy-load detail pages** — driver/team/circuit detail pages via `next/dynamic`
3. **Memoize timezone conversion** — avoid recalculating for unchanged props

---

## 4. Data Completeness

### Beyond Entries (see separate ENTRIES-AUDIT-2021-2025.md)

| Area | Status | Details |
|------|--------|---------|
| Calendar/events | Complete | All 24 series, 2021-2026 |
| Circuits | 1 gap | `termas-de-rio-hondo` missing (MotoGP Argentina) |
| Results | Good | 146 result files across series/years |
| Standings | 1 gap | DTM 2026 missing; NLS has no standings (any year) |
| Broadcasts | 3 gaps | **F1, F2, F3 have no broadcast data** — all other 21 series covered |
| i18n | Complete | 109 keys, perfect EN/UK parity |
| Series registry | Complete | All 24 series with colors, logos, metadata |
| Logos | Complete | 27 SVGs in public/logos/ |

### Priority Fixes

1. Add F1/F2/F3 broadcast data (these are the most popular series!)
2. Add `termas-de-rio-hondo` circuit definition
3. Add DTM 2026 standings

---

## 5. UI/UX

### What's Great

- Dual view modes (month/week) with smooth switching
- Comprehensive timezone support (80+ zones, auto-detect)
- Spoiler-free mode for results
- Dark/light theme with localStorage persistence
- Bottom navigation on mobile with proper safe area insets
- Series filter dropdown with progress bars showing season completion
- Mobile sheet modals with drag-to-dismiss
- Swipe gestures on calendar (left/right for navigation)

### Issues

| Issue | Severity | Details |
|-------|----------|---------|
| **No loading skeletons** | High | Pages appear blank while data processes — no spinners, skeletons, or placeholders anywhere |
| **No 404 page** | High | No `not-found.tsx` — invalid URLs show empty page |
| **No 500 error page** | High | No `error.tsx` — ErrorBoundary only wraps CalendarGrid, not whole app |
| **No series favorites/pinning** | Medium | All 24 series shown equally; can't prioritize F1 + IndyCar to top |
| **No system theme detection** | Medium | `prefers-color-scheme` not respected; must toggle manually |
| **No tablet-specific layout** | Medium | Same as desktop 641-1024px — awkward gaps |
| **Theme switch has no transition** | Low | Instant color flip is jarring |
| **Search doesn't highlight matches** | Low | Results show but matching text not bolded |
| **No "Reset to defaults" in settings** | Low | Users can't easily undo all preferences |
| **Event card collapse is instant** | Low | No smooth expand/collapse animation |

### Missing Features Users Would Expect

1. **Favorites/pinning** — reorder series by personal importance
2. **Quick filters** — "F1 Only", "Today's Races", "This Weekend"
3. **Keyboard shortcuts** — arrow keys for prev/next month/week
4. **Recent searches** — search history for quick access
5. **Multi-timezone view** — compare times across zones
6. **Print stylesheet** — for printing weekend schedules

---

## 6. PWA & Advanced Features

### Excellent

| Feature | Status | Notes |
|---------|--------|-------|
| Service worker | Excellent | Network-first nav, cache-first assets, offline fallback |
| Push notifications | Excellent | Per-series filtering, configurable lead time, deep links |
| Install flow | Excellent | Multi-platform (iOS Safari/Chrome, Android, Desktop) |
| iCal export | Excellent | Google Calendar, .ics download, webcal:// subscribe, per-series feeds |
| Search | Excellent | Full-text, filtered by series, navigates to deep link |
| Deep linking | Excellent | All routes shareable, `?event=` param for highlighting |
| Web Share API | Good | With clipboard fallback |
| Offline support | Good | All data baked into static bundle, works after first load |

### Gaps

| Gap | Severity | Notes |
|-----|----------|-------|
| PWA manifest has single icon only | Medium | Missing 192px/512px PNG icons, screenshots, shortcuts |
| No offline indicator | Low | No UI showing user is offline |
| No print stylesheet | Low | `@media print` rules absent |
| No ARIA labels on icon-only buttons | Medium | Bell, share, settings buttons lack labels for screen readers |
| No focus trap in modals | Medium | Tab key can escape modal dialogs |
| No skip-to-content link | Low | Keyboard users must tab through nav every time |

---

## 7. Code Quality

### Good Practices

- TypeScript throughout with proper interfaces
- Consistent code style, inline styles per project convention
- `useLocalStorage` hook handles private browsing gracefully (try-catch)
- DST transitions handled correctly via `Intl.DateTimeFormat`
- iCal generation properly escapes special characters
- No `any` types or unsafe assertions

### Concerns

| Issue | File | Notes |
|-------|------|-------|
| 37 files marked `'use client'` | Various | Heavy client-side burden; some may not need it |
| ErrorBoundary does hard `window.location.reload()` | ErrorBoundary.tsx | Loses all state; should offer "Try again" |
| No error logging/reporting | ErrorBoundary.tsx | Errors silently swallowed |
| `setTimeout(10ms)` hack for scroll-to-today | CalendarGrid.tsx | Fragile timing dependency |
| `useLocalStorage` writes on every state change | useLocalStorage.ts | No debouncing |

---

## 8. Feature Ideas

### Small (Hours of work)

| Feature | Impact | Notes |
|---------|--------|-------|
| Series favorites/pinning | High | Star button in filter, pinned series shown first |
| System theme detection | Medium | Respect `prefers-color-scheme`, add "Auto" option |
| 404 and error pages | High | Proper not-found.tsx and error.tsx |
| Loading skeletons | Medium | Skeleton components for calendar, detail pages |
| "This Weekend" quick filter | Medium | One-tap to see races Fri-Sun |
| Reset settings button | Low | In SettingsModal |
| Offline indicator | Low | Banner when `navigator.onLine === false` |

### Medium (Days of work)

| Feature | Impact | Notes |
|---------|--------|-------|
| Dynamic page metadata (SEO) | Critical | `generateMetadata()` for all dynamic routes |
| Complete sitemap | Critical | Add 3,669 missing pages |
| OG image generation | High | Static or dynamic social preview images |
| JSON-LD structured data | High | Events, drivers, teams, circuits |
| Print stylesheet | Medium | `@media print` for weekend schedules |
| Keyboard shortcuts | Medium | Arrow keys, `?` for help overlay |
| Theme transition animation | Low | CSS transition on color variables |
| Search highlight matching text | Low | Bold matched substring in results |

### Large (Weeks of work)

| Feature | Impact | Notes |
|---------|--------|-------|
| Data splitting by year | High | Only load current year, lazy-load rest; saves ~2MB |
| F1/F2/F3 broadcast data | High | Most popular series missing "Where to Watch" |
| Complete 2021-2025 entries | Medium | ~2,800 drivers across ~113 files (see ENTRIES-AUDIT) |
| User accounts / cloud sync | Medium | Sync preferences across devices |
| Multi-language expansion | Low | Beyond EN/UK — add ES, DE, FR, JP |

### Giant (Months of work)

| Feature | Impact | Notes |
|---------|--------|-------|
| Race weekend "hub" pages | High | Combined schedule + results + standings for a single race weekend |
| Live timing integration | High | Show live session status during race weekends |
| Custom calendar builder | Medium | Users pick specific series/events for personalized feed |
| Community features | Medium | Comments, predictions, polls |
| Native mobile app | Low | React Native wrapper for push + offline |

---

## 9. What's Already Great

The app is genuinely useful and well-built. Here's what stands out:

1. **Speed** — Static export means near-instant page loads. No spinners, no waiting.
2. **Data breadth** — 24 racing series, 6 years of calendars, 185 circuits. Incredibly comprehensive.
3. **Timezone handling** — Auto-detect + manual override with 80+ zones. This is the killer feature.
4. **iCal integration** — Multiple export formats including webcal:// subscription. Power user heaven.
5. **PWA quality** — Installable on all platforms, push notifications, offline support. Feels like a native app.
6. **Spoiler-free mode** — Thoughtful feature for fans who record races.
7. **Search** — Full-text, filtered, fast. Navigates directly to the day view.
8. **Mobile UX** — Bottom nav, swipe gestures, sheet modals, safe area insets. First-class mobile citizen.
9. **Dark mode** — Clean, high-contrast dark theme as default.
10. **Bilingual** — Full EN/UK support with proper locale-aware formatting.
11. **No bloat** — No ads, no tracking, no unnecessary features. Just races.

---

## Priority Action Plan

### Week 1 — Critical fixes
- [x] ~~Fix notification unique keys bug~~
- [x] ~~Add missing circuit `termas-de-rio-hondo`~~
- [x] ~~Add `generateMetadata()` to all 5 dynamic routes~~
- [x] ~~Extend sitemap to include all pages (series, drivers, teams, circuits, standings)~~
- [x] ~~Add 404 page (`not-found.tsx`)~~
- [x] ~~Add error page (`error.tsx`)~~

### Week 2 — SEO & data
- [x] ~~Add JSON-LD structured data (BreadcrumbList in Breadcrumbs component)~~
- [x] ~~Create OG image (static SVG at /og.svg, added to metadata)~~
- [x] ~~Update F2/F3 broadcast data (fixed outdated Viaplay/DAZN/BandSports references)~~
- [x] ~~Fix F1 2025 entries (added 8 missing drivers: all 10 teams now complete)~~
- [x] ~~Fix F2 2025 entries (rewritten: 10 → 22 drivers, corrected team assignments)~~
- [x] ~~Fix Super Formula 2025 entries (rewritten: 8 → 22 drivers, all 11 teams)~~
- [x] ~~Add DTM 2026 standings (placeholder — season in progress)~~
- [ ] Hydration mismatch on homepage — reviewed, acceptable with static export + useLayoutEffect
- [ ] Week view timezone date calculation — reviewed, correct behavior (filter set is calendar dates)

### Week 3 — UX polish
- [x] ~~Add loading skeletons (Skeleton.tsx + shimmer animation, added to all Suspense fallbacks)~~
- [x] ~~Add system theme detection (respects `prefers-color-scheme: light`)~~
- [ ] Add series favorites/pinning
- [x] ~~Add ARIA labels to icon-only buttons (Settings, Bell, Share, Nav prev/next, Close)~~
- [x] ~~Fix ErrorBoundary — "Try again" resets state, "Refresh" as secondary option~~
- [x] ~~Fix array index React keys (DayDetail sessions use startUtc, Breadcrumbs use href/label)~~
- [x] ~~Add focus trap + aria-modal to SettingsModal (Escape to close, Tab cycles within)~~
- [x] ~~Expand PWA manifest (orientation, categories, shortcuts for Today/Series/Standings, split maskable icon)~~

### Week 4 — Performance
- [ ] Split data files by year (lazy-load 2021-2025)
- [ ] Add `next/dynamic` for detail pages
