export type Locale = 'en' | 'uk'

const translations: Record<Locale, Record<string, string>> = {
  en: {
    'app.title': 'RACE GRID',
    'nav.back': 'Back to calendar',
    'nav.today': 'Today',
    'nav.thisWeek': 'This week',
    'view.month': 'Month',
    'view.week': 'Week',
    'search.placeholder': 'Search races, circuits…',
    'search.noResults': 'No results',
    'session.finished': 'Finished',
    'session.live': 'LIVE',
    'week.noRaces': 'No races this week',
    'filter.all': 'All series',
    'filter.series': 'series',
    'filter.title': 'Filter series',
    'filter.selectAll': 'Select all',
    'filter.deselectAll': 'Deselect all',
    'day.noRaces': 'No races scheduled.',
    'day.offDay': 'Enjoy the off day!',
    'day.more': 'more',
    'watch.title': 'Where to watch',
    'watch.fallback': 'Check your local listings for broadcast info',
    'tz.search': 'Search timezone...',
    'tz.americas': 'Americas',
    'tz.europe': 'Europe',
    'tz.asia': 'Asia',
    'tz.pacific': 'Pacific',
    'tz.africa': 'Africa',
    'session.race': 'Race',
    'session.qualifying': 'Qualifying',
    'session.sprint': 'Sprint',
    'session.sprint_qualifying': 'Sprint Quali',
    'session.hyperpole': 'Hyperpole',
    'session.practice': 'Practice',
    'session.warmup': 'Warmup',
    'session.stage': 'Stage',
    'session.shakedown': 'Shakedown',
    'session.endurance': 'Endurance',
    'group.openwheel': 'Open Wheel',
    'group.endurance': 'Endurance',
    'group.gt': 'GT / Touring',
    'group.stock': 'Stock Car',
    'group.rally': 'Rally',
    'cal.export': 'Add to Calendar',
    'cal.google': 'Google Calendar',
    'cal.ics': 'Download .ics',
    'notify.title': 'Notifications',
    'notify.enable': 'Enable notifications',
    'notify.disable': 'Disable notifications',
    'notify.lead': 'Remind me',
    'notify.before': 'before sessions',
    'notify.series': 'Series to notify',
    'notify.denied': 'Notifications blocked by browser',
    'notify.15': '15 min',
    'notify.30': '30 min',
    'notify.60': '1 hour',
    'weekday.mon': 'Mon',
    'weekday.tue': 'Tue',
    'weekday.wed': 'Wed',
    'weekday.thu': 'Thu',
    'weekday.fri': 'Fri',
    'weekday.sat': 'Sat',
    'weekday.sun': 'Sun',
  },
  uk: {
    'app.title': 'RACE GRID',
    'nav.back': 'До календаря',
    'nav.today': 'Сьогодні',
    'nav.thisWeek': 'Цей тиждень',
    'view.month': 'Місяць',
    'view.week': 'Тиждень',
    'search.placeholder': 'Пошук гонок, трас…',
    'search.noResults': 'Нічого не знайдено',
    'session.finished': 'Завершено',
    'session.live': 'НАЖИВО',
    'week.noRaces': 'Цього тижня немає гонок',
    'filter.all': 'Усі серії',
    'filter.series': 'серій',
    'filter.title': 'Фільтр серій',
    'filter.selectAll': 'Обрати всі',
    'filter.deselectAll': 'Зняти всі',
    'day.noRaces': 'Немає запланованих гонок.',
    'day.offDay': 'Вихідний день!',
    'day.more': 'ще',
    'watch.title': 'Де дивитись',
    'watch.fallback': 'Перевірте місцеві трансляції у вашому регіоні',
    'tz.search': 'Пошук часової зони...',
    'tz.americas': 'Америка',
    'tz.europe': 'Європа',
    'tz.asia': 'Азія',
    'tz.pacific': 'Тихоокеанський',
    'tz.africa': 'Африка',
    'session.race': 'Гонка',
    'session.qualifying': 'Кваліфікація',
    'session.sprint': 'Спринт',
    'session.sprint_qualifying': 'Спринт Кв.',
    'session.hyperpole': 'Гіперпоул',
    'session.practice': 'Практика',
    'session.warmup': 'Розминка',
    'session.stage': 'Спецділянка',
    'session.shakedown': 'Шейкдаун',
    'session.endurance': 'Витривалість',
    'group.openwheel': 'Формули',
    'group.endurance': 'Витривалість',
    'group.gt': 'GT / Туринг',
    'group.stock': 'Стоккар',
    'group.rally': 'Ралі',
    'cal.export': 'Додати до календаря',
    'cal.google': 'Google Calendar',
    'cal.ics': 'Завантажити .ics',
    'notify.title': 'Сповіщення',
    'notify.enable': 'Увімкнути сповіщення',
    'notify.disable': 'Вимкнути сповіщення',
    'notify.lead': 'Нагадати',
    'notify.before': 'до початку',
    'notify.series': 'Серії для сповіщень',
    'notify.denied': 'Сповіщення заблоковано браузером',
    'notify.15': '15 хв',
    'notify.30': '30 хв',
    'notify.60': '1 година',
    'weekday.mon': 'Пн',
    'weekday.tue': 'Вт',
    'weekday.wed': 'Ср',
    'weekday.thu': 'Чт',
    'weekday.fri': 'Пт',
    'weekday.sat': 'Сб',
    'weekday.sun': 'Нд',
  },
}

export function t(key: string, locale: Locale): string {
  return translations[locale]?.[key] ?? translations.en[key] ?? key
}

export function getDefaultLocale(): Locale {
  if (typeof navigator === 'undefined') return 'en'
  const lang = navigator.language?.toLowerCase() ?? ''
  if (lang.startsWith('uk')) return 'uk'
  return 'en'
}

export function formatDateLocale(date: Date, locale: Locale): string {
  const loc = locale === 'uk' ? 'uk-UA' : 'en-US'
  return date.toLocaleDateString(loc, {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export function formatDateShort(date: Date, locale: Locale): string {
  const loc = locale === 'uk' ? 'uk-UA' : 'en-US'
  return date.toLocaleDateString(loc, {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
}

export function formatMonthLocale(date: Date, locale: Locale): string {
  const loc = locale === 'uk' ? 'uk-UA' : 'en-US'
  const str = date.toLocaleDateString(loc, { month: 'long', year: 'numeric' })
  // Capitalize first letter
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export const LOCALE_LABELS: Record<Locale, string> = {
  en: 'EN',
  uk: 'UA',
}
