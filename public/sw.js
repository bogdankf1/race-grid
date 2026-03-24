/// <reference lib="webworker" />

// Race Grid Service Worker — notification scheduling

self.addEventListener('install', () => self.skipWaiting())
self.addEventListener('activate', (e) => e.waitUntil(self.clients.claim()))

// Store scheduled notification timers (session key -> timeout id)
const timers = new Map()

// Listen for messages from the main app
self.addEventListener('message', (e) => {
  const { type, payload } = e.data

  if (type === 'SCHEDULE_NOTIFICATIONS') {
    // payload: { sessions: [{ key, title, body, triggerAt }] }
    // Cancel existing timers
    for (const id of timers.values()) clearTimeout(id)
    timers.clear()

    const now = Date.now()
    for (const s of payload.sessions) {
      const delay = s.triggerAt - now
      if (delay <= 0) continue // already past
      if (delay > 7 * 24 * 60 * 60 * 1000) continue // more than 7 days away, skip

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

// Open the relevant day page when notification is clicked
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
