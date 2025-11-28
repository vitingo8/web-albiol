"use client"

import { useState } from "react"
import { MessageCircle, X } from "lucide-react"
import type { Locale } from "@/lib/i18n"
import { getTranslation } from "@/lib/i18n"

interface WhatsAppButtonProps {
  locale: Locale
  phoneNumber?: string
}

export function WhatsAppButton({ locale, phoneNumber = "+34680132404" }: WhatsAppButtonProps) {
  const [isOpen, setIsOpen] = useState(false)
  const t = getTranslation(locale)

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(t.whatsapp.greeting)
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank")
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Tooltip / Chat bubble */}
      {isOpen && (
        <div className="animate-in slide-in-from-bottom-2 fade-in duration-300 bg-card rounded-2xl shadow-2xl border border-border/50 p-4 max-w-xs">
          <div className="flex items-start justify-between gap-3 mb-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center">
                <MessageCircle className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="font-semibold text-foreground text-sm">Albiol Consultors</p>
                <p className="text-xs text-muted-foreground">
                  {locale === "ca"
                    ? "Normalment respon en menys d'1h"
                    : locale === "es"
                      ? "Normalmente responde en menos de 1h"
                      : "Usually responds within 1h"}
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          <div className="bg-muted rounded-xl p-3 mb-4">
            <p className="text-sm text-foreground">
              {locale === "ca"
                ? "Hola! 👋 Com et podem ajudar avui?"
                : locale === "es"
                  ? "¡Hola! 👋 ¿Cómo podemos ayudarte hoy?"
                  : "Hello! 👋 How can we help you today?"}
            </p>
          </div>
          <button
            onClick={handleWhatsAppClick}
            className="w-full py-3 px-4 bg-[#25D366] hover:bg-[#20BD5A] text-white rounded-xl font-medium flex items-center justify-center gap-2 transition-colors"
          >
            <MessageCircle className="h-5 w-5" />
            {locale === "ca" ? "Iniciar conversa" : locale === "es" ? "Iniciar conversación" : "Start conversation"}
          </button>
        </div>
      )}

      {/* Main WhatsApp button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative w-16 h-16 bg-[#25D366] hover:bg-[#20BD5A] rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center hover:scale-110"
        aria-label={t.whatsapp.tooltip}
      >
        {/* Pulse animation */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25" />

        {isOpen ? <X className="h-7 w-7 text-white" /> : <MessageCircle className="h-7 w-7 text-white" />}

        {/* Tooltip on hover */}
        {!isOpen && (
          <span className="absolute right-full mr-3 px-3 py-2 bg-card text-foreground text-sm rounded-lg shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity border border-border/50">
            {t.whatsapp.tooltip}
          </span>
        )}
      </button>
    </div>
  )
}
