"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/sections/hero-section"
import { ServicesSection } from "@/components/sections/services-section"
import { StatsSection } from "@/components/sections/stats-section"
import { WhyUsSection } from "@/components/sections/why-us-section"
import { SegmentsSection } from "@/components/sections/segments-section"
import { FaqSection } from "@/components/sections/faq-section"
import { BlogPreviewSection } from "@/components/sections/blog-preview-section"
import { TestimonialsSection } from "@/components/sections/testimonials-section"
import { CtaSection } from "@/components/sections/cta-section"
import { WhatsAppButton } from "@/components/whatsapp-button"
import type { Locale } from "@/lib/i18n"

export default function HomePage() {
  const [locale, setLocale] = useState<Locale>("ca")

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
