export type Locale = 'en' | 'uk'

const translations: Record<Locale, Record<string, string>> = {
  en: {
    'app.title': 'RACE GRID',
    'nav.back': 'Back to calendar',
    'nav.today': 'Today',
    'filter.all': 'All series',
    'filter.series': 'series',
    'filter.title': 'Filter series',
    'filter.selectAll': 'Select all',
    'filter.deselectAll': 'Deselect all',
    'day.noRaces': 'No races scheduled.',
    'day.offDay': 'Enjoy the off day!',
    'day.more': 'more',
    'watch.title': 'Where to watch',
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
    'filter.all': 'Усі серії',
    'filter.series': 'серій',
    'filter.title': 'Фільтр серій',
    'filter.selectAll': 'Обрати всі',
    'filter.deselectAll': 'Зняти всі',
    'day.noRaces': 'Немає запланованих гонок.',
    'day.offDay': 'Вихідний день!',
    'day.more': 'ще',
    'watch.title': 'Де дивитись',
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
