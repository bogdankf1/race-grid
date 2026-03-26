'use client'

import { Component, type ReactNode } from 'react'

interface Props {
  children: ReactNode
}

interface State {
  hasError: boolean
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(): State {
    return { hasError: true }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ textAlign: 'center', padding: '60px 20px' }}>
          <div style={{ fontSize: 36, marginBottom: 12 }}>⚠️</div>
          <p style={{ color: 'var(--rg-text2)', fontSize: 16, marginBottom: 6 }}>
            Something went wrong
          </p>
          <p style={{ color: 'var(--rg-text3)', fontSize: 14 }}>
            Try refreshing the page
          </p>
          <button
            onClick={() => window.location.reload()}
            style={{
              marginTop: 16,
              padding: '8px 20px',
              borderRadius: 10,
              background: 'var(--rg-btn-bg)',
              border: '1px solid var(--rg-border)',
              color: 'var(--rg-text2)',
              fontSize: 14,
              cursor: 'pointer',
            }}
          >
            Refresh
          </button>
        </div>
      )
    }

    return this.props.children
  }
}
