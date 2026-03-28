'use client'

import { useState, useEffect } from 'react'
import { NotificationSettings } from './NotificationSettings'
import { InstallPrompt, isStandalone } from './InstallPrompt'
import type { Locale } from '@/lib/i18n'

interface Props {
  locale: Locale
}

export function InstallOrNotify({ locale }: Props) {
  const [showNotifications, setShowNotifications] = useState(false)

  useEffect(() => {
    // Show notifications if: app is installed as PWA, OR user dismissed the install prompt
    const installed = isStandalone()
    const dismissed = localStorage.getItem('race-grid:install-dismissed') === 'true'
    setShowNotifications(installed || dismissed)
  }, [])

  if (showNotifications) {
    return <NotificationSettings locale={locale} />
  }

  return <InstallPrompt locale={locale} />
}
