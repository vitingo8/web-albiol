"use client"

import { useEffect } from 'react'
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals'

declare global {
  interface Window {
    gtag: (command: string, targetId: string, config?: any) => void
  }
}

export function useWebVitals() {
  useEffect(() => {
    // Solo ejecutar en producción y si gtag está disponible
    if (typeof window === 'undefined' || !window.gtag) return

    const reportWebVitals = (metric: any) => {
      window.gtag('event', metric.name, {
        event_category: 'Web Vitals',
        event_label: metric.id,
        value: Math.round(metric.value),
        custom_map: {
          metric_id: 'dimension1',
          metric_value: 'metric1',
          metric_delta: 'metric2'
        }
      })
    }

    // Reportar Core Web Vitals
    getCLS(reportWebVitals)
    getFID(reportWebVitals)
    getFCP(reportWebVitals)
    getLCP(reportWebVitals)
    getTTFB(reportWebVitals)
  }, [])
}
