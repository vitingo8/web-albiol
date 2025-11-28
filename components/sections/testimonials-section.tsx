"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Locale } from "@/lib/i18n"
import { getTranslation } from "@/lib/i18n"

interface TestimonialsSectionProps {
  locale: Locale
}

export function TestimonialsSection({ locale }: TestimonialsSectionProps) {
  const t = getTranslation(locale)
  const [activeIndex, setActiveIndex] = useState(0)

  const testimonials = [
    {
      name: "Maria García",
      role:
        locale === "ca"
          ? "Propietària, Botiga Maria"
          : locale === "es"
            ? "Propietaria, Tienda María"
            : "Owner, Maria's Shop",
      content:
        locale === "ca"
          ? "Albiol Consultors m'ha acompanyat des que vaig obrir el meu negoci. La seva proximitat i claredat m'han donat tranquil·litat per centrar-me en el que realment importa."
          : locale === "es"
            ? "Albiol Consultors me ha acompañado desde que abrí mi negocio. Su cercanía y claridad me han dado tranquilidad para centrarme en lo que realmente importa."
            : "Albiol Consultors has been with me since I opened my business. Their closeness and clarity have given me peace of mind to focus on what really matters.",
      rating: 5,
    },
    {
      name: "Joan Martí",
      role:
        locale === "ca"
          ? "CEO, Construccions Martí SL"
          : locale === "es"
            ? "CEO, Construcciones Martí SL"
            : "CEO, Martí Constructions SL",
      content:
        locale === "ca"
          ? "Portem més de 15 anys treballant junts. La seva experiència en el sector i el coneixement del territori són incomparables. Un equip de confiança."
          : locale === "es"
            ? "Llevamos más de 15 años trabajando juntos. Su experiencia en el sector y el conocimiento del territorio son incomparables. Un equipo de confianza."
            : "We have been working together for over 15 years. Their experience in the sector and knowledge of the territory are unparalleled. A trustworthy team.",
      rating: 5,
    },
    {
      name: "Laura Vidal",
      role:
        locale === "ca"
          ? "Autònoma, Disseny Gràfic"
          : locale === "es"
            ? "Autónoma, Diseño Gráfico"
            : "Freelancer, Graphic Design",
      content:
        locale === "ca"
          ? "Com a autònoma, necessitava algú que m'expliqués les coses de manera senzilla. Amb Albiol Consultors m'oblido dels tràmits i em dedico a dissenyar."
          : locale === "es"
            ? "Como autónoma, necesitaba alguien que me explicara las cosas de manera sencilla. Con Albiol Consultors me olvido de los trámites y me dedico a diseñar."
            : "As a freelancer, I needed someone to explain things simply. With Albiol Consultors I forget about paperwork and focus on designing.",
      rating: 5,
    },
    {
      name: "Pere Roca",
      role:
        locale === "ca"
          ? "Director, Restaurant Can Pere"
          : locale === "es"
            ? "Director, Restaurante Can Pere"
            : "Director, Can Pere Restaurant",
      content:
        locale === "ca"
          ? "La gestió laboral del nostre equip de 12 persones és impecable. Sempre responen ràpid i m'avisen de qualsevol novetat que ens afecti."
          : locale === "es"
            ? "La gestión laboral de nuestro equipo de 12 personas es impecable. Siempre responden rápido y me avisan de cualquier novedad que nos afecte."
            : "The labour management of our 12-person team is impeccable. They always respond quickly and notify me of any news that affects us.",
      rating: 5,
    },
  ]

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 md:py-28 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-6 md:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-sm font-medium text-secondary uppercase tracking-widest mb-4">
            {locale === "ca" ? "Testimonis" : locale === "es" ? "Testimonios" : "Testimonials"}
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">{t.testimonials.title}</h2>
        </div>

        <div className="relative">
          {/* Large quote icon - removed for DOM optimization */}

          {/* Mobile: Single card with navigation */}
          <div className="md:hidden">
            <div className="bg-card rounded-2xl p-8 shadow-lg border border-border/50 relative">
              <Quote className="h-8 w-8 text-secondary mb-4" />
              <p className="text-foreground leading-relaxed mb-6 text-lg">"{testimonials[activeIndex].content}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="font-serif text-lg font-bold text-primary">
                    {testimonials[activeIndex].name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonials[activeIndex].name}</p>
                  <p className="text-sm text-muted-foreground">{testimonials[activeIndex].role}</p>
                </div>
              </div>
              {/* Stars */}
              <div className="absolute top-8 right-8 flex gap-1">
                {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                  <svg key={i} className="h-4 w-4 text-secondary fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-6">
              <Button variant="outline" size="icon" onClick={prevTestimonial} className="rounded-full bg-transparent">
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveIndex(i)}
                    className={`w-2 h-2 rounded-full transition-all ${i === activeIndex ? "bg-primary w-6" : "bg-muted-foreground/30"}`}
                  />
                ))}
              </div>
              <Button variant="outline" size="icon" onClick={nextTestimonial} className="rounded-full bg-transparent">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Desktop: Grid layout */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.name}
                className={`bg-card rounded-2xl p-6 shadow-sm border border-border/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${index === 0 ? "md:col-span-2 lg:col-span-1" : ""}`}
              >
                <Quote className="h-6 w-6 text-secondary mb-4" />
                <p className="text-foreground/80 leading-relaxed mb-6 text-sm">"{testimonial.content}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="font-serif font-bold text-primary">{testimonial.name.charAt(0)}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
                {/* Stars */}
                <div className="flex gap-0.5 mt-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="h-3.5 w-3.5 text-secondary fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <a
            href="https://google.com/maps"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                fill="#4285F4"
              />
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
              />
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                fill="#FBBC05"
              />
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="#EA4335"
              />
            </svg>
            {locale === "ca"
              ? "Veure totes les ressenyes a Google"
              : locale === "es"
                ? "Ver todas las reseñas en Google"
                : "See all reviews on Google"}
          </a>
        </div>
      </div>
    </section>
  )
}
