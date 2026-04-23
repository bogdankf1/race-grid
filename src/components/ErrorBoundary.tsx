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
            Try again or refresh the page
          </p>
          <div style={{ display: 'flex', gap: 10, justifyContent: 'center', marginTop: 16 }}>
            <button
              onClick={() => this.setState({ hasError: false })}
              style={{
                padding: '8px 20px',
                borderRadius: 10,
                background: 'var(--rg-accent, #7ab3ff)',
                border: 'none',
                color: '#fff',
                fontSize: 14,
                fontWeight: 600,
                cursor: 'pointer',
              }}
            >
              Try again
            </button>
            <button
              onClick={() => window.location.reload()}
              style={{
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
        </div>
      )
    }

    return this.props.children
  }
}
