# Upcoming Improvements

Planned features for Race Grid, in priority order.

## 1. "Next up" indicator
Highlight the nearest upcoming race day on the calendar grid so the user instantly sees what's coming without scanning. Subtle visual badge or glow on the day cell.

**Status:** Not started

## 2. Countdown timer
On the day view, show a live countdown for upcoming sessions — e.g. "Race starts in 2h 34m". More useful than just showing the start time. Should tick down in real time.

**Status:** Not started

## 3. Google Calendar / iCal export
Button to export a race weekend (or an entire series season) to Google Calendar or as an .ics file. Sessions should include proper timezone info so they show correctly in the user's calendar app.

**Status:** Not started

## 4. Circuit info on day view
Small section below the event header showing track layout image, lap length, number of turns. Data is static per circuit. Could include a simple SVG or image of the track layout.

**Status:** Not started

## 5. Dark/light theme toggle
Some users prefer light mode during daytime. Add a toggle in the header (next to timezone/series selectors). Persist choice in localStorage. Current dark theme becomes the default.

**Status:** Not started

## 6. Share a specific day
Copy-link button on the day view so users can share a specific race day URL with friends. Could also include a short summary text for pasting into chats — e.g. "Saturday, March 21 — F1 Japanese GP, NLS, NASCAR".

**Status:** Not started

## 7. Push notifications / reminders
Browser notifications before sessions start — e.g. "F1 Qualifying starts in 30 min". Uses the browser Notification API + a service worker. No backend needed. User chooses which series and how far in advance to be notified.

**Status:** Not started

## 8. Ukrainian localization
Add Ukrainian language support. Language selector in the header (next to timezone/series selectors). Translate all UI strings: month/day names, session types, button labels, "Where to watch", "No races scheduled", header text, etc. Race/circuit/series names stay in English (they are proper nouns). Persist choice in localStorage. Auto-detect from browser language (`navigator.language`). Default: English.

**Status:** Not started

## 9. New series: Super GT, ELMS, IGTC, Super Formula
Add four new racing series with the full treatment:
- **Super GT** — Japan's premier GT series (GT500 + GT300 classes)
- **ELMS** — European Le Mans Series (LMP2/GT3 endurance)
- **IGTC** — Intercontinental GT Challenge (Spa 24h, Bathurst 12h, etc.)
- **Super Formula** — Japan's top open-wheel series
- **Supercars Championship** — Australian touring cars, home of the Bathurst 1000

Each series needs:
- 2026 calendar data file with accurate dates/sessions/circuits
- Official logo (download or create)
- Brand color + text color
- Series registry entry
- "Where to watch" broadcast data for US and Ukraine
- White-background logo container if needed for dark theme visibility

**Status:** Not started
