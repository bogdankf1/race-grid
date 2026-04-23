/// <reference lib="webworker" />

// Race Grid Service Worker — offline caching + notification scheduling

// Cache version based on SW file content hash — update this comment to bust cache: 2026-04-23
const CACHE_NAME = 'race-grid-v2'

// App shell files to pre-cache on install
const SHELL_FILES = [
  '/',
  '/favicon.svg',
  '/manifest.json',
]

// Install: pre-cache app shell
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(SHELL_FILES))
  )
  self.skipWaiting()
})

// Activate: clean up old caches
self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    ).then(() => self.clients.claim())
  )
})

// Fetch: cache-first for static assets, network-first for navigation
self.addEventListener('fetch', (e) => {
  const { request } = e

  // Skip non-GET requests
  if (request.method !== 'GET') return

  // Skip chrome-extension and other non-http(s) requests
  if (!request.url.startsWith('http')) return

  // Navigation requests (HTML pages): network-first, fallback to cached shell
  if (request.mode === 'navigate') {
    e.respondWith(
      fetch(request)
        .then((response) => {
          const clone = response.clone()
          caches.open(CACHE_NAME).then((cache) => cache.put(request, clone))
          return response
        })
        .catch(() => caches.match(request).then((cached) => cached || caches.match('/')))
    )
    return
  }

  // Static assets (JS, CSS, images, fonts): cache-first
  if (
    request.destination === 'script' ||
    request.destination === 'style' ||
    request.destination === 'image' ||
    request.destination === 'font' ||
    request.url.includes('/_next/') ||
    request.url.includes('/logos/')
  ) {
    e.respondWith(
      caches.match(request).then((cached) => {
        if (cached) return cached
        return fetch(request).then((response) => {
          if (response.ok) {
            const clone = response.clone()
            caches.open(CACHE_NAME).then((cache) => cache.put(request, clone))
          }
          return response
        })
      })
    )
  }
})

// ── Notification scheduling ──

const timers = new Map()

self.addEventListener('message', (e) => {
  const { type, payload } = e.data

  if (type === 'SCHEDULE_NOTIFICATIONS') {
    for (const id of timers.values()) clearTimeout(id)
    timers.clear()

    const now = Date.now()
    for (const s of payload.sessions) {
      const delay = s.triggerAt - now
      if (delay <= 0) continue
      if (delay > 7 * 24 * 60 * 60 * 1000) continue

      const id = setTimeout(() => {
        self.registration.showNotification(s.title, {
          body: s.body,
          icon: '/favicon.svg',
          badge: '/favicon.svg',
          tag: s.key,
          data: { url: s.url },
        })
        timers.delete(s.key)
      }, delay)

      timers.set(s.key, id)
    }
  }

  if (type === 'CLEAR_NOTIFICATIONS') {
    for (const id of timers.values()) clearTimeout(id)
    timers.clear()
  }
})

self.addEventListener('notificationclick', (e) => {
  e.notification.close()
  const url = e.notification.data?.url || '/'
  e.waitUntil(
    self.clients.matchAll({ type: 'window' }).then((clients) => {
      for (const client of clients) {
        if (client.url.includes(url) && 'focus' in client) return client.focus()
      }
      return self.clients.openWindow(url)
    })
  )
})
