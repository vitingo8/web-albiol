import type { Locale } from "@/lib/i18n"

interface PartnersSectionProps {
  locale: Locale
}

export function PartnersSection({ locale }: PartnersSectionProps) {
  const partners = [
    "Col·legi d'Economistes de Catalunya",
    "Cambra de Comerç de Tortosa",
    "AEAT Agència Tributària",
    "Seguretat Social",
    "Ajuntament de Tortosa",
    "Generalitat de Catalunya",
  ]

  return (
    <section className="py-12 bg-card border-y border-border/50">
      <div className="container mx-auto px-6 md:px-8 lg:px-12">
        <p className="text-center text-sm text-muted-foreground mb-8">
          {locale === "ca"
            ? "Treballem amb les principals institucions"
            : locale === "es"
              ? "Trabajamos con las principales instituciones"
              : "We work with leading institutions"}
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="text-muted-foreground/60 text-sm font-medium hover:text-primary transition-colors"
            >
              {partner}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
