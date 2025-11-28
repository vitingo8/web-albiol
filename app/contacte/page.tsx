"use client"

import type React from "react"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, MessageCircle } from "lucide-react"
import type { Locale } from "@/lib/i18n"
import { getTranslation } from "@/lib/i18n"

export default function ContactPage() {
  const [locale, setLocale] = useState<Locale>("ca")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const t = getTranslation(locale)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  const googleMapsUrl = "https://www.google.com/maps/place/Carrer+Argentina,+9,+43500+Tortosa,+Tarragona,+Spain"
  const googleMapsEmbed =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2988.5!2d0.5214!3d40.8125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a0c1e1e1e1e1e1%3A0x1234567890abcdef!2sCarrer%20Argentina%2C%209%2C%2043500%20Tortosa%2C%20Tarragona!5e0!3m2!1sca!2ses!4v1700000000000"

  return (
    <div className="min-h-screen flex flex-col">
      <Header locale={locale} onLocaleChange={setLocale} />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 md:py-28 bg-primary text-primary-foreground relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
              <span className="inline-block text-sm font-medium text-secondary uppercase tracking-widest mb-4">
                {t.nav.contact}
              </span>
              <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">{t.contact.title}</h1>
              <p className="text-lg text-primary-foreground/80 leading-relaxed">{t.contact.subtitle}</p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form - improved with company field */}
              <div className="bg-card rounded-2xl p-8 shadow-lg border border-border/50">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <MessageCircle className="h-5 w-5 text-primary" />
                  </div>
                  <h2 className="font-serif text-2xl font-bold text-foreground">{t.contact.formTitle}</h2>
                </div>

                {isSubmitted ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center animate-in fade-in zoom-in duration-300">
                    <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center mb-6">
                      <CheckCircle className="h-10 w-10 text-accent" />
                    </div>
                    <h3 className="font-serif text-2xl font-semibold text-foreground mb-3">
                      {t.contact.success.title}
                    </h3>
                    <p className="text-muted-foreground max-w-sm">{t.contact.success.body}</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">{t.contact.form.name}</Label>
                        <Input id="name" placeholder={t.contact.form.name} required className="h-12" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">{t.contact.form.email}</Label>
                        <Input id="email" type="email" placeholder="exemple@email.com" required className="h-12" />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone">{t.contact.form.phone}</Label>
                        <Input id="phone" type="tel" placeholder="680 132 404" className="h-12" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="company">{t.contact.form.companyLabel}</Label>
                        <Input id="company" placeholder={t.contact.form.companyPlaceholder} className="h-12" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="type">{t.contact.form.type}</Label>
                      <Select>
                        <SelectTrigger className="h-12">
                          <SelectValue placeholder={t.contact.form.type} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="fiscal">{t.contact.form.types.fiscal}</SelectItem>
                          <SelectItem value="laboral">{t.contact.form.types.laboral}</SelectItem>
                          <SelectItem value="comptable">{t.contact.form.types.comptable}</SelectItem>
                          <SelectItem value="autonoms">{t.contact.form.types.autonoms}</SelectItem>
                          <SelectItem value="altres">{t.contact.form.types.altres}</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">{t.contact.form.message}</Label>
                      <Textarea
                        id="message"
                        placeholder={
                          locale === "ca"
                            ? "Explica'ns en què et podem ajudar..."
                            : locale === "es"
                              ? "Cuéntanos en qué te podemos ayudar..."
                              : "Tell us how we can help you..."
                        }
                        rows={5}
                        required
                        className="resize-none"
                      />
                    </div>

                    <div className="flex items-start gap-3 p-4 rounded-xl bg-muted/50">
                      <input type="checkbox" id="privacy" className="mt-1 accent-primary" required />
                      <label htmlFor="privacy" className="text-sm text-muted-foreground">
                        {t.contact.form.privacy}
                      </label>
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground gap-2 h-14 text-base"
                    >
                      <Send className="h-5 w-5" />
                      {t.contact.form.submit}
                    </Button>
                  </form>
                )}
              </div>

              {/* Contact Info - Updated with real address */}
              <div className="space-y-8">
                <div>
                  <h2 className="font-serif text-2xl font-bold text-foreground mb-6">{t.contact.infoTitle}</h2>

                  <div className="space-y-6">
                    <a
                      href={googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-colors group"
                    >
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                        <MapPin className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">{t.contact.info.address}</h3>
                        <p className="text-muted-foreground">
                          Carrer Argentina, 9, 2A
                          <br />
                          43500 Tortosa, Tarragona
                        </p>
                      </div>
                    </a>

                    <a
                      href="tel:+34680132404"
                      className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-colors group"
                    >
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                        <Phone className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">{t.contact.info.phone}</h3>
                        <p className="text-muted-foreground hover:text-primary transition-colors">680 132 404</p>
                      </div>
                    </a>

                    <a
                      href="mailto:info@albiolconsultors.com"
                      className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-colors group"
                    >
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                        <Mail className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">{t.contact.info.email}</h3>
                        <p className="text-muted-foreground hover:text-primary transition-colors">
                          info@albiolconsultors.com
                        </p>
                      </div>
                    </a>

                    <div className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border/50">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                        <Clock className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">{t.contact.info.hours}</h3>
                        <p className="text-muted-foreground">
                          {t.contact.call.weekdays}
                          <br />
                          9:00 - 14:00 / 16:00 - 19:00
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="aspect-video rounded-2xl overflow-hidden bg-muted border border-border/50">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2988.5!2d0.5214!3d40.8125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a149f6b4c4b4c5%3A0x4b4c4b4c4b4c4b4c!2sCarrer%20Argentina%2C%209%2C%2043500%20Tortosa%2C%20Tarragona!5e0!3m2!1sca!2ses!4v1700000000000!5m2!1sca!2ses"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Albiol Consultors - Carrer Argentina 9, 2A, Tortosa"
                  />
                </div>

                {/* Quick Contact - CTA box */}
                <div className="bg-gradient-to-br from-primary to-primary/90 rounded-2xl p-8 text-primary-foreground relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/20 rounded-full blur-2xl" />
                  <h3 className="font-serif text-2xl font-bold mb-3 relative z-10">{t.contact.call.title}</h3>
                  <p className="text-primary-foreground/80 mb-6 relative z-10">{t.contact.call.body}</p>
                  <a
                    href="tel:+34680132404"
                    className="inline-flex items-center gap-3 px-6 py-3 bg-secondary text-secondary-foreground rounded-xl font-semibold text-lg hover:bg-secondary/90 transition-colors relative z-10"
                  >
                    <Phone className="h-5 w-5" />
                    {t.contact.call.cta}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer locale={locale} onLocaleChange={setLocale} />
      <WhatsAppButton locale={locale} phoneNumber="+34680132404" />
    </div>
  )
}
