"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import type { Locale } from "@/lib/i18n"

const heroContent = {
  ca: {
    locationBadge: "Tortosa · Terres de l'Ebre",
    title: "La teva assessoria de referència a Tortosa",
    subtitle:
      "Més de 20 anys oferint tranquil·litat fiscal, laboral i comptable a empreses i autònoms. Tecnologia avançada amb tracte personal.",
    ctaPrimary: "Demanar primera cita",
    ctaSecondary: "Serveis Online",
    floatingBadge: { title: "Tràmits en 24h", desc: "Agilitat garantida" },
  },
  es: {
    locationBadge: "Tortosa · Terres de l'Ebre",
    title: "Tu asesoría de referencia en Tortosa",
    subtitle:
      "Más de 20 años ofreciendo tranquilidad fiscal, laboral y contable a empresas y autónomos. Tecnología avanzada con trato personal.",
    ctaPrimary: "Pedir primera cita",
    ctaSecondary: "Servicios Online",
    floatingBadge: { title: "Trámites en 24h", desc: "Agilidad garantizada" },
  },
  en: {
    locationBadge: "Tortosa · Spain",
    title: "Your reference advisory firm in Tortosa",
    subtitle:
      "Over 20 years providing tax, labor, and accounting peace of mind. Advanced technology with a personal touch.",
    ctaPrimary: "Book appointment",
    ctaSecondary: "Online Services",
    floatingBadge: { title: "24h Processing", desc: "Speed guaranteed" },
  },
  fr: {
    locationBadge: "Tortosa · Espagne",
    title: "Votre cabinet de conseil de référence à Tortosa",
    subtitle:
      "Plus de 20 ans de tranquillité fiscale, sociale et comptable. Technologie avancée avec une approche personnelle.",
    ctaPrimary: "Prendre rendez-vous",
    ctaSecondary: "Services en ligne",
    floatingBadge: { title: "Traitement 24h", desc: "Rapidité garantie" },
  },
  de: {
    locationBadge: "Tortosa · Spanien",
    title: "Ihre Referenz-Kanzlei in Tortosa",
    subtitle:
      "Über 20 Jahre steuerliche, arbeitsrechtliche und buchhalterische Sicherheit. Moderne Technologie mit persönlicher Note.",
    ctaPrimary: "Termin vereinbaren",
    ctaSecondary: "Online-Dienste",
    floatingBadge: { title: "24h Bearbeitung", desc: "Schnelligkeit garantiert" },
  },
} as const

interface HeroSectionProps {
  locale: Locale
}

export function HeroSection({ locale }: HeroSectionProps) {
  const t = heroContent[locale] ?? heroContent["ca"]
  const c = t ?? heroContent["en"]

  return (
    <section className="relative min-h-[95vh] flex items-center bg-primary overflow-hidden pt-24 pb-12 lg:pt-24 lg:pb-14">
      {/* Decoración de fondo con acento */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[120px] opacity-60 pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[120px] opacity-60 pointer-events-none" />

      <div className="container mx-auto px-6 md:px-8 lg:px-12 xl:px-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Columna izquierda: texto */}
          <div className="max-w-2xl lg:pl-4 xl:pl-8 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            {/* Badge Localización */}
            <div className="inline-flex items-center gap-3 mb-8">
              <span className="h-px w-10 bg-[#ddb042]/80"></span>
              <span className="text-[#ddb042] font-medium tracking-widest uppercase text-xs md:text-sm">
                {c.locationBadge}
              </span>
            </div>

            {/* Titular */}
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-[1.1] mb-8 text-balance">
              {c.title}
            </h1>

            {/* Subtítulo */}
            <p className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed mb-10 max-w-lg font-light">
              {c.subtitle}
            </p>

            {/* Botones */}
            <div className="flex flex-col sm:flex-row gap-5 mb-16">
              <Button
                asChild
                size="lg"
                className="h-14 px-8 text-lg bg-[#ddb042] text-slate-950 hover:bg-[#ddb042]/90 font-semibold rounded-full shadow-[0_0_20px_rgba(221,176,66,0.15)] transition-all hover:scale-105"
              >
                <Link href="/contacte">
                  {c.ctaPrimary}
                </Link>
              </Button>

              <Button
                size="lg"
                variant="link"
                asChild
                className="h-14 px-8 text-lg text-primary-foreground hover:text-secondary underline-offset-4 group"
              >
                <Link href="/gestoria-online">
                  {c.ctaSecondary}
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>

          </div>

          {/* Columna derecha: imagen */}
          <div className="relative h-[500px] lg:h-[650px] w-full hidden lg:block animate-in fade-in slide-in-from-right-12 duration-1000 delay-200">
            <div className="absolute inset-0 bg-card rounded-[30px_30px_200px_30px] overflow-hidden border border-border/50 shadow-2xl">
              <Image
                src="/professional-office-tortosa-spain-business-meeting.jpg"
                alt="Equip Albiol Consultors"
                fill
                className="object-cover opacity-90 hover:scale-105 transition-transform duration-[2s]"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
            </div>

            {/* Badge flotante con acento */}
            <div className="absolute bottom-12 -left-12 bg-card/95 backdrop-blur-xl p-6 rounded-2xl border border-border/50 shadow-xl max-w-xs animate-in zoom-in duration-700 delay-500">
              <div className="flex gap-4 items-center">
                <div className="bg-primary/20 p-3 rounded-full text-primary">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-card-foreground font-bold text-lg leading-none mb-1">
                    {c.floatingBadge.title}
                  </p>
                  <p className="text-muted-foreground text-sm leading-tight">
                    {c.floatingBadge.desc}
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
