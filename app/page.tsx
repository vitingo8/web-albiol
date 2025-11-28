"use client"

import dynamic from 'next/dynamic'
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/sections/hero-section"
import { useLocale } from "@/hooks/use-locale"

// Componentes críticos (above-the-fold) - cargados normalmente
// Componentes no críticos - cargados de forma lazy para reducir bundle inicial
const ServicesSection = dynamic(() => import("@/components/sections/services-section").then(mod => ({ default: mod.ServicesSection })), {
  loading: () => <div className="h-96 bg-muted/30 animate-pulse" />
})

const StatsSection = dynamic(() => import("@/components/sections/stats-section").then(mod => ({ default: mod.StatsSection })), {
  loading: () => <div className="h-64 bg-muted/30 animate-pulse" />
})

const WhyUsSection = dynamic(() => import("@/components/sections/why-us-section").then(mod => ({ default: mod.WhyUsSection })), {
  loading: () => <div className="h-96 bg-muted/30 animate-pulse" />
})

const SegmentsSection = dynamic(() => import("@/components/sections/segments-section").then(mod => ({ default: mod.SegmentsSection })), {
  loading: () => <div className="h-96 bg-muted/30 animate-pulse" />
})

const FaqSection = dynamic(() => import("@/components/sections/faq-section").then(mod => ({ default: mod.FaqSection })), {
  loading: () => <div className="h-80 bg-muted/30 animate-pulse" />
})

const BlogPreviewSection = dynamic(() => import("@/components/sections/blog-preview-section").then(mod => ({ default: mod.BlogPreviewSection })), {
  loading: () => <div className="h-96 bg-muted/30 animate-pulse" />
})

const TestimonialsSection = dynamic(() => import("@/components/sections/testimonials-section").then(mod => ({ default: mod.TestimonialsSection })), {
  loading: () => <div className="h-96 bg-muted/30 animate-pulse" />
})

const CtaSection = dynamic(() => import("@/components/sections/cta-section").then(mod => ({ default: mod.CtaSection })), {
  loading: () => <div className="h-64 bg-muted/30 animate-pulse" />
})

const WhatsAppButton = dynamic(() => import("@/components/whatsapp-button").then(mod => ({ default: mod.WhatsAppButton })), {
  loading: () => null
})

export default function HomePage() {
  const [locale, setLocale] = useLocale()

  return (
    <div className="min-h-screen flex flex-col">
      <Header locale={locale} onLocaleChange={setLocale} />
      <main className="flex-1">
        <HeroSection locale={locale} />
        <ServicesSection locale={locale} />
        <StatsSection locale={locale} />
        <WhyUsSection locale={locale} />
        <SegmentsSection locale={locale} />
        <FaqSection locale={locale} />
        <BlogPreviewSection locale={locale} />
        <TestimonialsSection locale={locale} />
        <CtaSection locale={locale} />
      </main>
      <Footer locale={locale} onLocaleChange={setLocale} />
      <WhatsAppButton locale={locale} phoneNumber="34680132404" />
    </div>
  )
}
