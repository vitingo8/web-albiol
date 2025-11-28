"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Mail, CheckCircle, Loader2 } from "lucide-react"
import type { Locale } from "@/lib/i18n"
import { getTranslation } from "@/lib/i18n"

interface NewsletterSignupProps {
  locale: Locale
  compact?: boolean
}

export function NewsletterSignup({ locale, compact = false }: NewsletterSignupProps) {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const t = getTranslation(locale)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simular envío - aquí iría la lógica real de newsletter
    setTimeout(() => {
      setIsSubscribed(true)
      setIsLoading(false)
      setEmail("")
    }, 1500)
  }

  if (isSubscribed) {
    return (
      <div className="flex items-center justify-center gap-3 p-4 bg-green-50 border border-green-200 rounded-xl">
        <CheckCircle className="h-5 w-5 text-green-600" />
        <span className="text-green-800 font-medium">
          {locale === "ca" ? "Subscrit correctament!" :
           locale === "es" ? "¡Suscrito correctamente!" :
           "Successfully subscribed!"}
        </span>
      </div>
    )
  }

  return (
    <div className={`bg-white rounded-xl border border-border/50 ${compact ? 'p-4' : 'p-6'} ${compact ? 'shadow-sm' : ''}`}>
      {compact ? (
        <form onSubmit={handleSubmit} className="flex items-center gap-4">
          <div className="flex items-center gap-3 flex-shrink-0">
            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
              <Mail className="h-4 w-4 text-primary" />
            </div>
            <span className="font-medium text-sm text-foreground whitespace-nowrap">
              {locale === "ca" ? "Butlletí Fiscal" :
               locale === "es" ? "Boletín Fiscal" :
               "Fiscal Newsletter"}
            </span>
          </div>

          <div className="flex-1 flex gap-2">
            <Input
              id="newsletter-email"
              type="email"
              placeholder={
                locale === "ca" ? "El teu correu electrònic" :
                locale === "es" ? "Tu correo electrónico" :
                "Your email address"
              }
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="h-10 flex-1"
            />
            <Button
              type="submit"
              disabled={isLoading}
              className="bg-primary hover:bg-primary/90 px-4 whitespace-nowrap h-10"
            >
              {isLoading ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <>
                  <Mail className="h-4 w-4 mr-1" />
                  {locale === "ca" ? "Subscriure'm" :
                   locale === "es" ? "Suscribirme" :
                   "Subscribe"}
                </>
              )}
            </Button>
          </div>
        </form>
      ) : (
        <>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <Mail className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-serif text-lg font-bold text-foreground">
                {locale === "ca" ? "Butlletí Fiscal" :
                 locale === "es" ? "Boletín Fiscal" :
                 "Fiscal Newsletter"}
              </h3>
              <p className="text-sm text-muted-foreground">
                {locale === "ca" ? "Novetats fiscals i assessorament mensual" :
                 locale === "es" ? "Novedades fiscales y asesoramiento mensual" :
                 "Tax news and monthly advisory"}
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="newsletter-email" className="sr-only">
                {locale === "ca" ? "Correu electrònic" :
                 locale === "es" ? "Correo electrónico" :
                 "Email address"}
              </Label>
              <Input
                id="newsletter-email"
                type="email"
                placeholder={
                  locale === "ca" ? "El teu correu electrònic" :
                  locale === "es" ? "Tu correo electrónico" :
                  "Your email address"
                }
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="h-12"
              />
            </div>

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full bg-primary hover:bg-primary/90 h-12"
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  {locale === "ca" ? "Subscrivint..." :
                   locale === "es" ? "Suscribiendo..." :
                   "Subscribing..."}
                </>
              ) : (
                <>
                  <Mail className="mr-2 h-4 w-4" />
                  {locale === "ca" ? "Subscriure'm" :
                   locale === "es" ? "Suscribirme" :
                   "Subscribe"}
                </>
              )}
            </Button>

            <p className="text-xs text-muted-foreground text-center">
              {locale === "ca" ? "Respetem la teva privacitat. Cancel·la la subscripció en qualsevol moment." :
               locale === "es" ? "Respetamos tu privacidad. Cancela la suscripción en cualquier momento." :
               "We respect your privacy. Unsubscribe at any time."}
            </p>
          </form>
        </>
      )}
    </div>
  )
}
