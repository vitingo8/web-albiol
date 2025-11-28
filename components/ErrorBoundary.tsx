"use client"

import React from 'react'
import { AlertTriangle, RefreshCw } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface ErrorBoundaryState {
  hasError: boolean
  error?: Error
}

interface ErrorBoundaryProps {
  children: React.ReactNode
  fallback?: React.ComponentType<{ error?: Error; resetError: () => void }>
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Log error to analytics
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'exception', {
        description: error.toString(),
        fatal: false
      })
    }

    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('ErrorBoundary caught an error:', error, errorInfo)
    }
  }

  resetError = () => {
    this.setState({ hasError: false, error: undefined })
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        const FallbackComponent = this.props.fallback
        return <FallbackComponent error={this.state.error} resetError={this.resetError} />
      }

      return <DefaultErrorFallback error={this.state.error} resetError={this.resetError} />
    }

    return this.props.children
  }
}

function DefaultErrorFallback({ error, resetError }: { error?: Error; resetError: () => void }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="max-w-md mx-auto text-center p-6">
        <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <AlertTriangle className="h-8 w-8 text-red-600" />
        </div>

        <h1 className="text-2xl font-bold text-foreground mb-2">
          S'ha produït un error
        </h1>

        <p className="text-muted-foreground mb-6">
          Ho sentim, alguna cosa no ha funcionat correctament.
          Si us plau, intenta recarregar la pàgina.
        </p>

        {process.env.NODE_ENV === 'development' && error && (
          <details className="text-left bg-muted p-4 rounded-lg mb-6">
            <summary className="cursor-pointer font-medium">Detalls de l'error</summary>
            <pre className="mt-2 text-sm overflow-auto">
              {error.stack}
            </pre>
          </details>
        )}

        <div className="flex gap-3 justify-center">
          <Button onClick={resetError} className="gap-2">
            <RefreshCw className="h-4 w-4" />
            Tornar a intentar
          </Button>

          <Button variant="outline" onClick={() => window.location.href = '/'}>
            Anar a l'inici
          </Button>
        </div>
      </div>
    </div>
  )
}
