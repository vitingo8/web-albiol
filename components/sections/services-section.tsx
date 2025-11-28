import { ServiceCard } from "@/components/service-card"
import { Calculator, Users, FileText, Building2, Briefcase, ClipboardList } from "lucide-react"
import type { Locale } from "@/lib/i18n"
import { getTranslation } from "@/lib/i18n"

interface ServicesSectionProps {
  locale: Locale
}

export function ServicesSection({ locale }: ServicesSectionProps) {
  const t = getTranslation(locale)

  const services = [
    {
      icon: <Calculator className="h-6 w-6" />,
      title: t.services.fiscal.title,
      description: t.services.fiscal.desc,
      href: "/serveis/fiscal",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: t.services.laboral.title,
      description: t.services.laboral.desc,
      href: "/serveis/laboral",
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: t.services.comptable.title,
      description: t.services.comptable.desc,
      href: "/serveis/comptable",
    },
    {
      icon: <Building2 className="h-6 w-6" />,
      title: t.services.mercantil.title,
      description: t.services.mercantil.desc,
      href: "/serveis/mercantil",
    },
    {
      icon: <Briefcase className="h-6 w-6" />,
      title: t.services.autonoms.title,
      description: t.services.autonoms.desc,
      href: "/serveis/autonoms",
    },
    {
      icon: <ClipboardList className="h-6 w-6" />,
      title: t.services.tramits.title,
      description: t.services.tramits.desc,
      href: "/serveis/tramits",
    },
  ]

  const readMoreText =
    locale === "ca"
      ? "Saber més"
      : locale === "es"
        ? "Saber más"
        : locale === "en"
          ? "Learn more"
          : locale === "fr"
            ? "En savoir plus"
            : "Mehr erfahren"

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-6 md:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-sm font-medium text-secondary uppercase tracking-widest mb-4">
            {locale === "ca" ? "Què oferim" : locale === "es" ? "Qué ofrecemos" : "What we offer"}
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">{t.services.title}</h2>
          <p className="text-muted-foreground leading-relaxed">{t.services.subtitle}</p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              icon={service.icon}
              href={service.href}
              readMore={readMoreText}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
