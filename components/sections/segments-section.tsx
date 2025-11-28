import { Button } from "@/components/ui/button"
import { Building2, User, Users, ArrowRight } from "lucide-react"
import { OptimizedImage } from "@/components/OptimizedImage"
import type { Locale } from "@/lib/i18n"
import { getTranslation } from "@/lib/i18n"

interface SegmentsSectionProps {
  locale: Locale
}

export function SegmentsSection({ locale }: SegmentsSectionProps) {
  const t = getTranslation(locale)

  const segments = [
    {
      icon: <Building2 className="h-8 w-8" />,
      title: t.segments.empreses.title,
      description: t.segments.empreses.desc,
      cta: t.segments.empreses.cta,
      image: "/corporate-business-office-modern-company.jpg",
    },
    {
      icon: <User className="h-8 w-8" />,
      title: t.segments.autonoms.title,
      description: t.segments.autonoms.desc,
      cta: t.segments.autonoms.cta,
      image: "/freelancer-entrepreneur-working-laptop-cafe.jpg",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: t.segments.particulars.title,
      description: t.segments.particulars.desc,
      cta: t.segments.particulars.cta,
      image: "/family-financial-planning-documents-home.jpg",
    },
  ]

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-6 md:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-sm font-medium text-secondary uppercase tracking-widest mb-4">
            {t.segments.sectionKicker}
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            {t.segments.sectionTitle}
          </h2>
        </div>

        {/* Segments Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {segments.map((segment) => (
            <div
              key={segment.title}
              className="group relative bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-border/50"
            >
              {/* Image */}
              <div className="aspect-video overflow-hidden">
                <OptimizedImage
                  src={segment.image || "/placeholder.svg"}
                  alt={segment.title}
                  width={371}
                  height={208}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  priority={false}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>

              <div className="p-6">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 text-primary mb-4">
                  {segment.icon}
                </div>
                <h3 className="font-serif text-2xl font-semibold text-foreground mb-3">{segment.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">{segment.description}</p>
                <Button
                  variant="outline"
                  className="gap-2 group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-colors bg-transparent"
                >
                  {segment.cta}
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
