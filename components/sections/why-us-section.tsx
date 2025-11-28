import { MapPin, Laptop, MessageCircle, Award } from "lucide-react"
import type { Locale } from "@/lib/i18n"
import { getTranslation } from "@/lib/i18n"

interface WhyUsSectionProps {
  locale: Locale
}

export function WhyUsSection({ locale }: WhyUsSectionProps) {
  const t = getTranslation(locale)

  const features = [
    {
      icon: <MapPin className="h-6 w-6" />,
      title: t.why.local.title,
      description: t.why.local.desc,
    },
    {
      icon: <Laptop className="h-6 w-6" />,
      title: t.why.digital.title,
      description: t.why.digital.desc,
    },
    {
      icon: <MessageCircle className="h-6 w-6" />,
      title: t.why.clarity.title,
      description: t.why.clarity.desc,
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: t.why.specialized.title,
      description: t.why.specialized.desc,
    },
  ]

  return (
      <section className="pt-12 md:pt-16 pb-10 md:pb-10 bg-primary text-primary-foreground">
      <div className="container mx-auto px-12 md:px-12 lg:px-18">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left Column - Image */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden">
              <img
                src="/professional-team-meeting-office-modern-collaborat.jpg"
                alt="Albiol Consultors team"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-6 -right-6 bg-secondary text-secondary-foreground p-6 rounded-xl shadow-lg max-w-xs hidden md:block">
              <p className="font-serif text-3xl font-bold">+20</p>
              <p className="text-sm">
                {locale === "ca"
                  ? "anys d'experiència"
                  : locale === "es"
                    ? "años de experiencia"
                    : "years of experience"}
              </p>
            </div>
          </div>

          {/* Right Column - Content */}
          <div>
            <span className="inline-block text-sm font-medium text-secondary uppercase tracking-widest mb-4">
              {locale === "ca" ? "Per què nosaltres" : locale === "es" ? "Por qué nosotros" : "Why us"}
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">{t.why.title}</h2>

            <div className="grid gap-6 mt-6">
              {features.map((feature) => (
                <div key={feature.title} className="flex gap-4">
                  <div className="shrink-0 w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center text-[#ddb042]">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{feature.title}</h3>
                    <p className="text-primary-foreground/75 text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
