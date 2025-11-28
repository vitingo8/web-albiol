"use client"

import { type Locale, locales } from "@/lib/i18n"

interface LanguageSwitcherProps {
  locale: Locale
  onLocaleChange: (locale: Locale) => void
}

export function LanguageSwitcher({ locale, onLocaleChange }: LanguageSwitcherProps) {
  return (
    <div className="flex items-center gap-1 text-sm">
      {locales.map((l, index) => (
        <span key={l} className="flex items-center">
          <button
            onClick={() => onLocaleChange(l)}
            className={`px-1 py-0.5 uppercase transition-colors ${
              locale === l ? "text-primary font-semibold" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {l}
          </button>
          {index < locales.length - 1 && <span className="text-muted-foreground/50 mx-0.5">·</span>}
        </span>
      ))}
    </div>
  )
}
