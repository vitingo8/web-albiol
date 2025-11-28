import { Button } from "@/components/ui/button"
import { ArrowRight, Phone } from "lucide-react"
import Link from "next/link"
import type { Locale } from "@/lib/i18n"
import { getTranslation } from "@/lib/i18n"

interface CtaSectionProps {
  locale: Locale
}

export function CtaSection({ locale }: CtaSectionProps) {
  const t = getTranslation(locale)

  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 md:px-8 lg:px-12 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-6">{t.cta.title}</h2>
          <p className="text-lg text-primary-foreground/80 mb-10 max-w-xl mx-auto">{t.cta.subtitle}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contacte">
              <Button
                size="lg"
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-medium gap-2 w-full sm:w-auto"
              >
                {t.cta.button}
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="border-white/30 bg-white/10 text-white hover:bg-white/20 hover:text-white gap-2"
            >
              <Phone className="h-4 w-4" />
              680.132.404
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
