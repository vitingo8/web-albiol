"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import { MapPin, Phone, Mail, Clock, ArrowRight, Linkedin, Facebook, Instagram, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import type { Locale } from "@/lib/i18n"
import { locales, getTranslation } from "@/lib/i18n"
import { NewsletterSignup } from "@/components/newsletter-signup"

interface FooterProps {
  locale: Locale
  onLocaleChange: (locale: Locale) => void
}

const localeNames: Record<Locale, string> = {
  ca: "Català",
  es: "Español",
  en: "English",
  fr: "Français",
  de: "Deutsch",
}

export function Footer({ locale, onLocaleChange }: FooterProps) {
  const t = getTranslation(locale)

  const googleMapsUrl = "https://www.google.com/maps/place/Carrer+Argentina,+9,+43500+Tortosa,+Tarragona,+Spain"
  const googleMapsEmbed =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2988.9!2d0.5214!3d40.8125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a0c1e1e1e1e1e1%3A0x1234567890abcdef!2sCarrer%20Argentina%2C%209%2C%2043500%20Tortosa%2C%20Tarragona!5e0!3m2!1sca!2ses!4v1234567890"

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Newsletter Section */}
      <div className="border-b border-primary-foreground/10">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <NewsletterSignup locale={locale} compact={true} />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                <span className="font-serif text-2xl font-bold">A</span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-2xl font-bold">Albiol</span>
                <span className="text-xs tracking-widest uppercase opacity-80">Consultors</span>
              </div>
            </Link>
            <p className="text-sm opacity-80 leading-relaxed">{t.footer.brandDescription}</p>
            {/* Social Links */}
            <div className="flex items-center gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-semibold">{t.nav.services}</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/serveis/fiscal"
                  className="opacity-80 hover:opacity-100 hover:text-secondary transition-all flex items-center gap-2 group"
                >
                  <ArrowRight className="h-3 w-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  <span>{t.services.fiscal.title}</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/serveis/laboral"
                  className="opacity-80 hover:opacity-100 hover:text-secondary transition-all flex items-center gap-2 group"
                >
                  <ArrowRight className="h-3 w-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  <span>{t.services.laboral.title}</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/serveis/comptable"
                  className="opacity-80 hover:opacity-100 hover:text-secondary transition-all flex items-center gap-2 group"
                >
                  <ArrowRight className="h-3 w-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  <span>{t.services.comptable.title}</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/serveis/autonomos"
                  className="opacity-80 hover:opacity-100 hover:text-secondary transition-all flex items-center gap-2 group"
                >
                  <ArrowRight className="h-3 w-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  <span>{t.services.autonoms.title}</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Recursos */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-semibold">Recursos Fiscals</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/guia-fiscal-tortosa"
                  className="opacity-80 hover:opacity-100 hover:text-secondary transition-all flex items-center gap-2 group"
                >
                  <ArrowRight className="h-3 w-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  <span>Guia Fiscal Tortosa</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/alta-autonomo-tortosa"
                  className="opacity-80 hover:opacity-100 hover:text-secondary transition-all flex items-center gap-2 group"
                >
                  <ArrowRight className="h-3 w-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  <span>Alta Autònom</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/directori-empreses-tortosa"
                  className="opacity-80 hover:opacity-100 hover:text-secondary transition-all flex items-center gap-2 group"
                >
                  <ArrowRight className="h-3 w-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  <span>Directori Empreses</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/recursos-fiscals"
                  className="opacity-80 hover:opacity-100 hover:text-secondary transition-all flex items-center gap-2 group"
                >
                  <ArrowRight className="h-3 w-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  <span>Recursos Fiscals</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info - Updated with real address */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-semibold">{t.nav.contact}</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 opacity-80 hover:opacity-100 transition-opacity"
                >
                  <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-secondary" />
                  <span>
                    Carrer Argentina, 9, 2A
                    <br />
                    43500 Tortosa, Tarragona
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+34680132404"
                  className="flex items-center gap-3 opacity-80 hover:opacity-100 transition-opacity"
                >
                  <Phone className="h-4 w-4 shrink-0 text-secondary" />
                  <span>680 132 404</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@albiolconsultors.com"
                  className="flex items-center gap-3 opacity-80 hover:opacity-100 transition-opacity"
                >
                  <Mail className="h-4 w-4 shrink-0 text-secondary" />
                  <span>info@albiolconsultors.com</span>
                </a>
              </li>
              <li className="flex items-start gap-3 opacity-80">
                <Clock className="h-4 w-4 mt-0.5 shrink-0 text-secondary" />
                <span>
                  {t.contact.call.weekdays}
                  <br />
                  9:00 - 14:00 / 16:00 - 19:00
                </span>
              </li>
            </ul>
          </div>

          {/* Legal + Language Switcher - Added language switcher to footer */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-semibold">{t.footer.legalTitle}</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/privacitat"
                  className="opacity-80 hover:opacity-100 hover:text-secondary transition-all flex items-center gap-2 group"
                >
                  <ArrowRight className="h-3 w-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  <span>{t.footer.privacy}</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/avis-legal"
                  className="opacity-80 hover:opacity-100 hover:text-secondary transition-all flex items-center gap-2 group"
                >
                  <ArrowRight className="h-3 w-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  <span>{t.footer.legal}</span>
                </Link>
              </li>
              <li>
                <Link
                  href={
                    locale === "ca" ? "/politica-de-cookies" :
                    locale === "es" ? "/es/politica-de-cookies" :
                    locale === "en" ? "/en/cookie-policy" :
                    locale === "fr" ? "/fr/politique-de-cookies" :
                    "/de/cookie-richtlinie"
                  }
                  className="opacity-80 hover:opacity-100 hover:text-secondary transition-all flex items-center gap-2 group"
                >
                  <ArrowRight className="h-3 w-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  <span>{t.footer.cookies}</span>
                </Link>
              </li>
            </ul>

            {/* Language Switcher */}
            <div className="pt-4 space-y-2">
              <div className="flex items-center gap-2 text-sm opacity-80">
                <Globe className="h-4 w-4" />
                <span>{t.footer.languageLabel}</span>
              </div>
              <Select value={locale} onValueChange={(value) => onLocaleChange(value as Locale)}>
                <SelectTrigger className="bg-white/10 border-white/20 text-white h-10">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {locales.map((loc) => (
                    <SelectItem key={loc} value={loc}>
                      {localeNames[loc]}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="pt-4">
              <Button
                asChild
                variant="outline"
                className="w-full border-white/20 text-white hover:bg-white/10 hover:text-white bg-transparent"
              >
                <Link href="/contacte">{t.footer.contactCta}</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar with copyright and location */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm opacity-60">
          <p>
            © {new Date().getFullYear()} Albiol Consultors. {t.footer.rights}.
          </p>
          <div className="flex items-center gap-4">
            <span>Tortosa, Terres de l'Ebre</span>
            <span className="w-1 h-1 rounded-full bg-current" />
            <span>Catalunya, Espanya</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
