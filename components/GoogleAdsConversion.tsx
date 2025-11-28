"use client"

import { useEffect } from 'react'

interface GoogleAdsConversionProps {
  conversionId: string
  conversionLabel: string
  value?: number
  currency?: string
  trigger?: boolean
}

export function GoogleAdsConversion({
  conversionId,
  conversionLabel,
  value = 0,
  currency = 'EUR',
  trigger = false
}: GoogleAdsConversionProps) {

  useEffect(() => {
    if (!trigger || typeof window === 'undefined' || !window.gtag) return

    // Trigger conversion event
    window.gtag('event', 'conversion', {
      send_to: `${conversionId}/${conversionLabel}`,
      value: value,
      currency: currency
    })
  }, [trigger, conversionId, conversionLabel, value, currency])

  // Componente invisible que solo maneja el tracking
  return null
}

// Hook para conversion tracking
export function useConversionTracking() {
  const trackConversion = (
    conversionId: string,
    conversionLabel: string,
    value?: number,
    currency = 'EUR'
  ) => {
    if (typeof window === 'undefined' || !window.gtag) return

    window.gtag('event', 'conversion', {
      send_to: `${conversionId}/${conversionLabel}`,
      value: value || 0,
      currency
    })
  }

  return { trackConversion }
}

