import { useState, useEffect } from 'react'
import type { Locale } from '@/lib/i18n'

const LOCALE_STORAGE_KEY = 'locale'
const DEFAULT_LOCALE: Locale = 'ca'

export function useLocale() {
  // Estado inicial desde localStorage o valor por defecto
  const [locale, setLocaleState] = useState<Locale>(() => {
    if (typeof window === 'undefined') return DEFAULT_LOCALE

    try {
      const stored = localStorage.getItem(LOCALE_STORAGE_KEY)
      if (stored && ['ca', 'es', 'en', 'fr', 'de'].includes(stored)) {
        return stored as Locale
      }
    } catch (error) {
      console.warn('Error reading locale from localStorage:', error)
    }
    return DEFAULT_LOCALE
  })

  // Función para cambiar el idioma y guardarlo
  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale)
    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem(LOCALE_STORAGE_KEY, newLocale)
      } catch (error) {
        console.warn('Error saving locale to localStorage:', error)
      }
    }
  }

  // Efecto para sincronizar con otros tabs/ventanas
  useEffect(() => {
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === LOCALE_STORAGE_KEY && e.newValue) {
        const newLocale = e.newValue as Locale
        if (['ca', 'es', 'en', 'fr', 'de'].includes(newLocale)) {
          setLocaleState(newLocale)
        }
      }
    }

    window.addEventListener('storage', handleStorageChange)
    return () => window.removeEventListener('storage', handleStorageChange)
  }, [])

  return [locale, setLocale] as const
}
