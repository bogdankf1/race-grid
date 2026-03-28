'use client'

import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { X, Share, MoreVertical, Plus, Download } from 'lucide-react'
import { t, type Locale } from '@/lib/i18n'

type Platform = 'ios-safari' | 'ios-chrome' | 'ipad-safari' | 'ipad-chrome' | 'android' | 'desktop'

function getPlatform(): Platform | null {
  if (typeof navigator === 'undefined') return null
  const ua = navigator.userAgent
  const isChrome = /CriOS/.test(ua)
  if (/iPad/.test(ua) || (/Macintosh/.test(ua) && navigator.maxTouchPoints > 1)) {
    return isChrome ? 'ipad-chrome' : 'ipad-safari'
  }
  if (/iPhone|iPod/.test(ua)) return isChrome ? 'ios-chrome' : 'ios-safari'
  if (/Android/.test(ua)) return 'android'
  return 'desktop'
}

export function isStandalone(): boolean {
  if (typeof window === 'undefined') return false
  return (
    window.matchMedia('(display-mode: standalone)').matches ||
    (navigator as unknown as { standalone?: boolean }).standalone === true
  )
}

function isInAppBrowser(): boolean {
  if (typeof navigator === 'undefined') return false
  return /FBAN|FBAV|Instagram|Twitter|Line|Snapchat/.test(navigator.userAgent)
}

declare global {
  interface Window {
    __deferredInstallPrompt: BeforeInstallPromptEvent | null
  }
  interface BeforeInstallPromptEvent extends Event {
    prompt(): Promise<void>
    userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>
  }
}

interface InstallPromptProps {
  locale: Locale
}

export function InstallPrompt({ locale }: InstallPromptProps) {
  const [visible, setVisible] = useState(false)
  const [platform, setPlatform] = useState<Platform | null>(null)
  const [hasNativePrompt, setHasNativePrompt] = useState(false)

  useEffect(() => {
    if (isStandalone()) return
    if (isInAppBrowser()) return
    if (localStorage.getItem('race-grid:install-dismissed')) return
    if (sessionStorage.getItem('race-grid:install-closed')) return

    const detected = getPlatform()
    setPlatform(detected)

    if (window.__deferredInstallPrompt) setHasNativePrompt(true)

    const handler = (e: Event) => {
      e.preventDefault()
      window.__deferredInstallPrompt = e as BeforeInstallPromptEvent
      setHasNativePrompt(true)
    }
    window.addEventListener('beforeinstallprompt', handler)

    return () => window.removeEventListener('beforeinstallprompt', handler)
  }, [])

  const show = () => setVisible(true)

  const handleClose = () => {
    setVisible(false)
    sessionStorage.setItem('race-grid:install-closed', 'true')
  }

  const handleDismiss = () => {
    setVisible(false)
    localStorage.setItem('race-grid:install-dismissed', 'true')
  }

  const handleNativeInstall = async () => {
    const prompt = window.__deferredInstallPrompt
    if (!prompt) return
    await prompt.prompt()
    const { outcome } = await prompt.userChoice
    if (outcome === 'accepted') {
      setVisible(false)
      localStorage.setItem('race-grid:install-dismissed', 'true')
    }
    window.__deferredInstallPrompt = null
    setHasNativePrompt(false)
  }

  // Don't show install button if standalone, dismissed, or in-app browser
  if (isStandalone() || !platform) return null
  if (typeof window !== 'undefined' && localStorage.getItem('race-grid:install-dismissed')) return null

  return (
    <>
      {/* Install button — replaces notification bell in header */}
      <button
        className="rg-control"
        onClick={show}
        title={t('install.title', locale)}
        style={{
          width: 36,
          borderRadius: 10,
          background: 'var(--rg-btn-bg)',
          border: '1px solid var(--rg-border)',
          color: 'var(--rg-link)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Download style={{ width: 15, height: 15 }} />
      </button>

      {/* Modal overlay — portaled to body to escape header positioning */}
      {visible && createPortal(
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 100,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'rgba(0,0,0,0.6)',
            padding: 16,
          }}
          onClick={handleClose}
        >
          <div
            onClick={e => e.stopPropagation()}
            style={{
              width: '100%',
              maxWidth: 380,
              borderRadius: 16,
              background: 'var(--rg-surface)',
              border: '1px solid var(--rg-card-border)',
              padding: 24,
              boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
            }}
          >
            {/* Header */}
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 16 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <img src="/favicon.svg" alt="Race Grid" style={{ width: 48, height: 48, borderRadius: 12 }} />
                <div>
                  <h3 style={{ fontSize: 16, fontWeight: 700, color: 'var(--rg-text)', margin: 0 }}>
                    {t('install.title', locale)}
                  </h3>
                  <p style={{ fontSize: 12, color: 'var(--rg-text3)', margin: 0 }}>
                    {t('install.subtitle', locale)}
                  </p>
                </div>
              </div>
              <button
                onClick={handleClose}
                style={{ background: 'none', border: 'none', color: 'var(--rg-text3)', cursor: 'pointer', padding: 4 }}
              >
                <X style={{ width: 18, height: 18 }} />
              </button>
            </div>

            {/* Benefits */}
            <div style={{
              marginBottom: 20,
              padding: 12,
              borderRadius: 12,
              background: 'var(--rg-elevated)',
              border: '1px solid var(--rg-border)',
            }}>
              <p style={{ fontSize: 12, color: 'var(--rg-text3)', margin: 0, lineHeight: 1.5 }}>
                {t('install.benefits', locale)}
              </p>
            </div>

            {/* Native install or manual steps */}
            {hasNativePrompt ? (
              <button
                onClick={handleNativeInstall}
                style={{
                  width: '100%',
                  padding: '12px 20px',
                  borderRadius: 12,
                  background: 'var(--rg-link)',
                  border: 'none',
                  color: '#fff',
                  fontSize: 14,
                  fontWeight: 600,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 8,
                  marginBottom: 16,
                }}
              >
                <Download style={{ width: 16, height: 16 }} />
                {t('install.button', locale)}
              </button>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 16 }}>
                {platform === 'ios-safari' && <IOSSteps />}
                {platform === 'ios-chrome' && <IOSChromeSteps />}
                {platform === 'ipad-safari' && <IPadSteps label="Safari" />}
                {platform === 'ipad-chrome' && <IPadSteps label="Chrome" />}
                {platform === 'android' && <AndroidSteps />}
                {platform === 'desktop' && <DesktopSteps />}
              </div>
            )}

            {/* Dismiss */}
            <button
              onClick={handleDismiss}
              style={{
                width: '100%',
                textAlign: 'center',
                fontSize: 12,
                color: 'var(--rg-text3)',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              {t('install.dismiss', locale)}
            </button>
          </div>
        </div>,
        document.body
      )}
    </>
  )
}

// ── Step components ──

function Step({ num, icon, text }: { num: number; icon: React.ReactNode; text: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
      <span style={{
        width: 24, height: 24, borderRadius: '50%',
        background: 'var(--rg-link)', color: '#fff',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: 11, fontWeight: 700, flexShrink: 0,
      }}>
        {num}
      </span>
      <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 13, color: 'var(--rg-text)' }}>
        {icon}
        <span>{text}</span>
      </div>
    </div>
  )
}

function IOSSteps() {
  return (
    <>
      <p style={{ fontSize: 10, fontWeight: 700, color: 'var(--rg-text3)', textTransform: 'uppercase', letterSpacing: 1 }}>Safari</p>
      <Step num={1} icon={<MoreVertical style={{ width: 14, height: 14, color: 'var(--rg-link)' }} />} text='Tap the Settings button at the bottom' />
      <Step num={2} icon={<Share style={{ width: 14, height: 14, color: 'var(--rg-link)' }} />} text='Tap "Share"' />
      <Step num={3} icon={null} text='Scroll down in the share sheet' />
      <Step num={4} icon={<Plus style={{ width: 14, height: 14, color: 'var(--rg-link)' }} />} text='Tap "Add to Home Screen"' />
      <Step num={5} icon={null} text='Tap "Add" to confirm' />
    </>
  )
}

function IOSChromeSteps() {
  return (
    <>
      <p style={{ fontSize: 10, fontWeight: 700, color: 'var(--rg-text3)', textTransform: 'uppercase', letterSpacing: 1 }}>Chrome</p>
      <Step num={1} icon={<Share style={{ width: 14, height: 14, color: 'var(--rg-link)' }} />} text='Tap the Share button' />
      <Step num={2} icon={null} text='Scroll down in the share sheet' />
      <Step num={3} icon={<Plus style={{ width: 14, height: 14, color: 'var(--rg-link)' }} />} text='Tap "Add to Home Screen"' />
      <Step num={4} icon={null} text='Tap "Add" to confirm' />
    </>
  )
}

function IPadSteps({ label }: { label: string }) {
  return (
    <>
      <p style={{ fontSize: 10, fontWeight: 700, color: 'var(--rg-text3)', textTransform: 'uppercase', letterSpacing: 1 }}>{label}</p>
      <Step num={1} icon={<Share style={{ width: 14, height: 14, color: 'var(--rg-link)' }} />} text='Tap the Share icon at the top' />
      <Step num={2} icon={null} text='Tap "View More"' />
      <Step num={3} icon={<Plus style={{ width: 14, height: 14, color: 'var(--rg-link)' }} />} text='Tap "Add to Home Screen"' />
      <Step num={4} icon={null} text='Tap "Add" to confirm' />
    </>
  )
}

function AndroidSteps() {
  return (
    <>
      <p style={{ fontSize: 10, fontWeight: 700, color: 'var(--rg-text3)', textTransform: 'uppercase', letterSpacing: 1 }}>Chrome</p>
      <Step num={1} icon={<MoreVertical style={{ width: 14, height: 14, color: 'var(--rg-link)' }} />} text='Tap the menu (three dots)' />
      <Step num={2} icon={<Plus style={{ width: 14, height: 14, color: 'var(--rg-link)' }} />} text='Tap "Add to Home Screen"' />
      <Step num={3} icon={null} text='Tap "Install" to confirm' />
    </>
  )
}

function DesktopSteps() {
  return (
    <>
      <p style={{ fontSize: 10, fontWeight: 700, color: 'var(--rg-text3)', textTransform: 'uppercase', letterSpacing: 1 }}>Chrome or Edge</p>
      <Step num={1} icon={<Download style={{ width: 14, height: 14, color: 'var(--rg-link)' }} />} text='Click the install icon in the address bar' />
      <Step num={2} icon={null} text='Click "Install" to confirm' />
    </>
  )
}
