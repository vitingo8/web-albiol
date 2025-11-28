"use client"

import { useState, useEffect } from 'react'

interface ABTestVariant {
  id: string
  name: string
  weight: number
}

interface ABTestOptions {
  testId: string
  variants: ABTestVariant[]
  onVariantSelected?: (variantId: string) => void
}

export function useABTest({ testId, variants, onVariantSelected }: ABTestOptions) {
  const [selectedVariant, setSelectedVariant] = useState<string | null>(null)

  useEffect(() => {
    // Solo ejecutar en browser
    if (typeof window === 'undefined') return

    // Verificar si ya hay una variante guardada
    const savedVariant = localStorage.getItem(`ab_test_${testId}`)

    if (savedVariant && variants.some(v => v.id === savedVariant)) {
      setSelectedVariant(savedVariant)
      onVariantSelected?.(savedVariant)
      return
    }

    // Seleccionar variante basada en pesos
    const totalWeight = variants.reduce((sum, variant) => sum + variant.weight, 0)
    let random = Math.random() * totalWeight

    for (const variant of variants) {
      random -= variant.weight
      if (random <= 0) {
        setSelectedVariant(variant.id)
        localStorage.setItem(`ab_test_${testId}`, variant.id)

        // Reportar a analytics si está disponible
        if (window.gtag) {
          window.gtag('event', 'ab_test_variant', {
            test_id: testId,
            variant_id: variant.id,
            variant_name: variant.name
          })
        }

        onVariantSelected?.(variant.id)
        break
      }
    }
  }, [testId, variants, onVariantSelected])

  return selectedVariant
}

// Hook específico para testing de CTAs
export function useABTestCTA(variantA: string, variantB: string) {
  const selectedVariant = useABTest({
    testId: 'cta_text_test',
    variants: [
      { id: 'a', name: 'Variant A', weight: 50 },
      { id: 'b', name: 'Variant B', weight: 50 }
    ]
  })

  return selectedVariant === 'a' ? variantA : variantB
}

