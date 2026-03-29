'use client'

import { Share, MoreVertical, Plus, Download } from 'lucide-react'

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

function PlatformLabel({ label }: { label: string }) {
  return (
    <p style={{ fontSize: 10, fontWeight: 700, color: 'var(--rg-text3)', textTransform: 'uppercase', letterSpacing: 1 }}>
      {label}
    </p>
  )
}

const shareIcon = <Share style={{ width: 14, height: 14, color: 'var(--rg-link)' }} />
const menuIcon = <MoreVertical style={{ width: 14, height: 14, color: 'var(--rg-link)' }} />
const plusIcon = <Plus style={{ width: 14, height: 14, color: 'var(--rg-link)' }} />
const downloadIcon = <Download style={{ width: 14, height: 14, color: 'var(--rg-link)' }} />

export function IOSSteps() {
  return (
    <>
      <PlatformLabel label="Safari" />
      <Step num={1} icon={menuIcon} text='Tap the Settings button at the bottom' />
      <Step num={2} icon={shareIcon} text='Tap "Share"' />
      <Step num={3} icon={null} text='Scroll down in the share sheet' />
      <Step num={4} icon={plusIcon} text='Tap "Add to Home Screen"' />
      <Step num={5} icon={null} text='Tap "Add" to confirm' />
    </>
  )
}

export function IOSChromeSteps() {
  return (
    <>
      <PlatformLabel label="Chrome" />
      <Step num={1} icon={shareIcon} text='Tap the Share button' />
      <Step num={2} icon={null} text='Scroll down in the share sheet' />
      <Step num={3} icon={plusIcon} text='Tap "Add to Home Screen"' />
      <Step num={4} icon={null} text='Tap "Add" to confirm' />
    </>
  )
}

export function IPadSteps({ label }: { label: string }) {
  return (
    <>
      <PlatformLabel label={label} />
      <Step num={1} icon={shareIcon} text='Tap the Share icon at the top' />
      <Step num={2} icon={null} text='Tap "View More"' />
      <Step num={3} icon={plusIcon} text='Tap "Add to Home Screen"' />
      <Step num={4} icon={null} text='Tap "Add" to confirm' />
    </>
  )
}

export function AndroidSteps() {
  return (
    <>
      <PlatformLabel label="Chrome" />
      <Step num={1} icon={menuIcon} text='Tap the menu (three dots)' />
      <Step num={2} icon={plusIcon} text='Tap "Add to Home Screen"' />
      <Step num={3} icon={null} text='Tap "Install" to confirm' />
    </>
  )
}

export function DesktopSteps() {
  return (
    <>
      <PlatformLabel label="Chrome or Edge" />
      <Step num={1} icon={downloadIcon} text='Click the install icon in the address bar' />
      <Step num={2} icon={null} text='Click "Install" to confirm' />
    </>
  )
}
