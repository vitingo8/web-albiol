"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import {
  Laptop,
  CheckCircle2,
  Phone,
  ShieldCheck,
  UserCheck,
  ArrowRight,
  Globe2,
  Clock,
  Briefcase,
  Star
} from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { WhatsAppButton } from "@/components/whatsapp-button"
import type { Locale } from "@/lib/i18n"

const DEFAULT_LOCALE: Locale = "ca"

const onlineCopy = {
  ca: {
    heroTitle: "L'experiència d'una gran gestoria, la llibertat del món digital",
    heroSubtitle: "Gestionem el teu negoci a tota Espanya amb el rigor de sempre i la tecnologia d'avui. Sense desplaçaments, sense papers, però amb un assessor real al teu costat.",
    heroBadge: "Servei Nacional 100% Online",
    ctaPrimary: "Demanar proposta",
    ctaSecondary: "Com funciona?",
    valuePropTitle: "Per què som diferents a una 'App'?",
    valuePropText: "No som un algoritme. Som un despatx amb 20 anys d'història que utilitza la tecnologia per fer-te la vida fàcil, no per substituir el tracte humà.",
    features: [
      {
        icon: <UserCheck className="h-6 w-6" />,
        title: "Un assessor amb nom i cognoms",
        text: "Tindràs un expert assignat. Podràs trucar-lo, enviar-li WhatsApps o fer videotrucades. Mai parlaràs amb un robot.",
      },
      {
        icon: <ShieldCheck className="h-6 w-6" />,
        title: "Seguretat i Garantia",
        text: "Les teves dades estan protegides amb estàndards bancaris. Som col·legiats i responem de la nostra feina.",
      },
      {
        icon: <Clock className="h-6 w-6" />,
        title: "Temps real",
        text: "Puja una factura i oblida't. Nosaltres la comptabilitzem i podràs veure l'estat dels teus impostos al moment.",
      },
    ],
    comparisonTitle: "Evoluciona la teva gestió",
    comparison: {
      traditional: "Gestoria Tradicional",
      online: "Albiol Online",
      rows: [
        { label: "Entrega de factures", trad: "Física / Carpetes", on: "Foto / Email / App" },
        { label: "Comunicació", trad: "Cita prèvia presencial", on: "WhatsApp / Videotrucada il·limitada" },
        { label: "Visió del negoci", trad: "A final d'any", on: "En temps real (24/7)" },
        { label: "Abast geogràfic", trad: "Local", on: "Tota Espanya" },
      ]
    },
    ctaTitle: "El teu negoci mereix un servei prèmium",
    ctaText: "Uneix-te als empresaris que han guanyat temps i tranquil·litat.",
    ctaButton: "Començar ara",
  },
  es: {
    heroTitle: "La experiencia de una gran gestoría, la libertad del mundo digital",
    heroSubtitle: "Gestionamos tu negocio en toda España con el rigor de siempre y la tecnología de hoy. Sin desplazamientos, sin papeles, pero con un asesor real a tu lado.",
    heroBadge: "Servicio Nacional 100% Online",
    ctaPrimary: "Pedir propuesta",
    ctaSecondary: "¿Cómo funciona?",
    valuePropTitle: "¿Por qué somos diferentes a una 'App'?",
    valuePropText: "No somos un algoritmo. Somos un despacho con 20 años de historia que usa la tecnología para hacerte la vida fácil, no para sustituir el trato humano.",
    features: [
      {
        icon: <UserCheck className="h-6 w-6" />,
        title: "Un asesor con nombre y apellidos",
        text: "Tendrás un experto asignado. Podrás llamarle, enviarle WhatsApps o hacer videollamadas. Nunca hablarás con un robot.",
      },
      {
        icon: <ShieldCheck className="h-6 w-6" />,
        title: "Seguridad y Garantía",
        text: "Tus datos están protegidos con estándares bancarios. Estamos colegiados y respondemos de nuestro trabajo.",
      },
      {
        icon: <Clock className="h-6 w-6" />,
        title: "Tiempo real",
        text: "Sube una factura y olvídate. Nosotros la contabilizamos y podrás ver el estado de tus impuestos al momento.",
      },
    ],
    comparisonTitle: "Evoluciona tu gestión",
    comparison: {
      traditional: "Gestoría Tradicional",
      online: "Albiol Online",
      rows: [
        { label: "Entrega de facturas", trad: "Física / Carpetas", on: "Foto / Email / App" },
        { label: "Comunicación", trad: "Cita previa presencial", on: "WhatsApp / Videollamada ilimitada" },
        { label: "Visión del negocio", trad: "A final de año", on: "En tiempo real (24/7)" },
        { label: "Alcance geográfico", trad: "Local", on: "Toda España" },
      ]
    },
    ctaTitle: "Tu negocio merece un servicio premium",
    ctaText: "Únete a los empresarios que han ganado tiempo y tranquilidad.",
    ctaButton: "Empezar ahora",
  },
  en: {
    heroTitle: "The expertise of a top firm, the freedom of the digital world",
    heroSubtitle: "We manage your business across Spain with traditional rigor and modern technology. No travel, no paper, but with a real advisor by your side.",
    heroBadge: "100% Online National Service",
    ctaPrimary: "Request proposal",
    ctaSecondary: "How it works?",
    valuePropTitle: "Why are we different from an 'App'?",
    valuePropText: "We are not an algorithm. We are a firm with 20 years of history using technology to make your life easier, not to replace human touch.",
    features: [
      {
        icon: <UserCheck className="h-6 w-6" />,
        title: "A dedicated personal advisor",
        text: "You will have an assigned expert. Call, WhatsApp, or video chat. You will never talk to a robot.",
      },
      {
        icon: <ShieldCheck className="h-6 w-6" />,
        title: "Security & Guarantee",
        text: "Your data is protected with banking standards. We are licensed and accountable for our work.",
      },
      {
        icon: <Clock className="h-6 w-6" />,
        title: "Real Time",
        text: "Upload an invoice and forget it. We book it, and you can see your tax status instantly.",
      },
    ],
    comparisonTitle: "Evolve your management",
    comparison: {
      traditional: "Traditional Agency",
      online: "Albiol Online",
      rows: [
        { label: "Invoice delivery", trad: "Physical / Folders", on: "Photo / Email / App" },
        { label: "Communication", trad: "In-person appointment", on: "WhatsApp / Unlimited Video calls" },
        { label: "Business insight", trad: "Year-end", on: "Real-time (24/7)" },
        { label: "Geographic scope", trad: "Local", on: "All of Spain" },
      ]
    },
    ctaTitle: "Your business deserves premium service",
    ctaText: "Join business owners who have gained time and peace of mind.",
    ctaButton: "Start now",
  },
  fr: {
    heroTitle: "L'expertise d'un grand cabinet, la liberté du numérique",
    heroSubtitle: "Gestion dans toute l'Espagne. Sans papiers, mais avec un vrai conseiller.",
    heroBadge: "Service National 100% En ligne",
    ctaPrimary: "Demander une offre",
    ctaSecondary: "Comment ça marche ?",
    valuePropTitle: "Pourquoi nous choisir ?",
    valuePropText: "Nous ne sommes pas un algorithme, mais un cabinet avec 20 ans d'histoire.",
    features: [
      {
        icon: <UserCheck className="h-6 w-6" />,
        title: "Conseiller personnel",
        text: "Un expert assigné, joignable par WhatsApp ou vidéo.",
      },
      {
        icon: <ShieldCheck className="h-6 w-6" />,
        title: "Sécurité",
        text: "Données protégées et responsabilité professionnelle.",
      },
      {
        icon: <Clock className="h-6 w-6" />,
        title: "Temps réel",
        text: "Téléchargez et oubliez. Vision instantanée de vos impôts.",
      },
    ],
    comparisonTitle: "Évolution de la gestion",
    comparison: {
      traditional: "Traditionnel",
      online: "Albiol Online",
      rows: [
        { label: "Factures", trad: "Papier", on: "App / Email" },
        { label: "Communication", trad: "Rendez-vous", on: "Vidéo / WhatsApp" },
        { label: "Vision", trad: "Annuelle", on: "Temps réel" },
        { label: "Portée", trad: "Locale", on: "Toute l'Espagne" },
      ]
    },
    ctaTitle: "Service premium pour votre entreprise",
    ctaText: "Gagnez du temps et de la tranquillité.",
    ctaButton: "Commencer",
  },
  de: {
    heroTitle: "Die Expertise einer großen Kanzlei, die Freiheit der digitalen Welt",
    heroSubtitle: "Verwaltung in ganz Spanien. Papierlos, aber mit echtem Berater.",
    heroBadge: "100% Online Nationaler Service",
    ctaPrimary: "Angebot anfordern",
    ctaSecondary: "Wie funktioniert es?",
    valuePropTitle: "Warum wir?",
    valuePropText: "Wir sind kein Algorithmus, sondern eine Kanzlei mit 20 Jahren Erfahrung.",
    features: [
      {
        icon: <UserCheck className="h-6 w-6" />,
        title: "Persönlicher Berater",
        text: "Ein fester Experte, erreichbar per WhatsApp oder Video.",
      },
      {
        icon: <ShieldCheck className="h-6 w-6" />,
        title: "Sicherheit",
        text: "Geschützte Daten und berufliche Haftung.",
      },
      {
        icon: <Clock className="h-6 w-6" />,
        title: "Echtzeit",
        text: "Hochladen und vergessen. Sofortiger Steuerüberblick.",
      },
    ],
    comparisonTitle: "Management-Evolution",
    comparison: {
      traditional: "Traditionell",
      online: "Albiol Online",
      rows: [
        { label: "Rechnungen", trad: "Papier", on: "App / E-Mail" },
        { label: "Kommunikation", trad: "Termin", on: "Video / WhatsApp" },
        { label: "Einsicht", trad: "Jährlich", on: "Echtzeit" },
        { label: "Reichweite", trad: "Lokal", on: "Ganz Spanien" },
      ]
    },
    ctaTitle: "Premium-Service für Ihr Geschäft",
    ctaText: "Gewinnen Sie Zeit und Ruhe.",
    ctaButton: "Starten",
  },
} as const

export default function GestoriaOnlinePage() {
  const [locale, setLocale] = useState<Locale>(DEFAULT_LOCALE)

  useEffect(() => {
    const saved = window.localStorage.getItem("locale") as Locale | null
    if (saved && saved !== locale) setLocale(saved)
  }, [])

  const handleLocaleChange = (next: Locale) => {
    setLocale(next)
    window.localStorage.setItem("locale", next)
  }

  const base = onlineCopy[locale] ?? onlineCopy["ca"]
  const c = base ?? onlineCopy["en"]

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header locale={locale} onLocaleChange={handleLocaleChange} />

      <main className="flex-1">
        {/* HERO SECTION - ELEGANT CORPORATE (GOLD THEME) */}
        <section className="py-20 md:py-32 bg-slate-50 relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              
              {/* Text Content */}
              <div className="max-w-2xl animate-in fade-in slide-in-from-bottom-4 duration-700">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#ddb042]/20 shadow-sm mb-8">
                  <Globe2 className="h-4 w-4 text-[#ddb042]" />
                  <span className="text-xs md:text-sm font-semibold uppercase tracking-wider text-slate-600">{c.heroBadge}</span>
                </div>
                
                <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6 text-balance">
                  {c.heroTitle}
                </h1>
                
                <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-10 max-w-lg">
                  {c.heroSubtitle}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="h-14 px-8 text-lg bg-[#ddb042] hover:bg-[#c9a03e] text-white shadow-lg shadow-[#ddb042]/20">
                    <Link href="/contacte">
                      {c.ctaPrimary}
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="h-14 px-8 text-lg border-slate-300 hover:bg-white hover:text-[#ddb042]">
                    <a href="#features">
                      {c.ctaSecondary}
                    </a>
                  </Button>
                </div>
              </div>

              {/* Visual Element - Professional Image with GOLD UI Overlay */}
              <div className="relative hidden lg:block animate-in fade-in slide-in-from-right-8 duration-1000 delay-200">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200">
                   {/* Imagen de un profesional trabajando relajado/elegante */}
                   <div className="aspect-[4/3] bg-slate-200 relative">
                      <img 
                        src="/professional-business-man-portrait-office.jpg" 
                        alt="Asesor Online" 
                        className="object-cover w-full h-full"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
                   </div>
                   
                   {/* Floating Card UI */}
                   <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-4 rounded-xl shadow-lg border border-white/50 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-[#ddb042]/10 flex items-center justify-center text-[#ddb042]">
                          <CheckCircle2 className="h-6 w-6" />
                        </div>
                        <div>
                          <p className="font-bold text-sm text-slate-800">Impostos presentats</p>
                          <p className="text-xs text-slate-500">Model 303 - Trimestre 3</p>
                        </div>
                      </div>
                      <span className="text-xs font-bold text-[#ddb042] bg-[#ddb042]/10 px-2 py-1 rounded">OK</span>
                   </div>
                </div>
                {/* Decorative Pattern (Gold) */}
                <div className="absolute -z-10 top-[-20px] right-[-20px] w-full h-full border-2 border-[#ddb042]/30 rounded-2xl" />
              </div>
            </div>
          </div>
        </section>

        {/* VALUE PROPOSITION - HUMAN & TECH */}
        <section id="features" className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-900 mb-4">{c.valuePropTitle}</h2>
              <p className="text-xl text-slate-600">{c.valuePropText}</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {c.features.map((feature, idx) => (
                <div key={idx} className="group p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-[#ddb042]/40 hover:shadow-xl transition-all duration-300">
                  <div className="w-14 h-14 rounded-xl bg-white shadow-sm text-[#ddb042] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform group-hover:bg-[#ddb042] group-hover:text-white">
                    {feature.icon}
                  </div>
                  <h3 className="font-serif text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{feature.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* COMPARISON TABLE - GOLD STYLE */}
        <section className="py-24 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
              <div className="p-8 md:p-12 text-center border-b border-slate-100">
                <h2 className="font-serif text-3xl font-bold text-slate-900">{c.comparisonTitle}</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-100">
                {/* Headers (Mobile Hidden) */}
                <div className="hidden md:block p-6 bg-slate-50/50">
                   <div className="h-12" /> {/* Spacer */}
                   {c.comparison.rows.map((row, i) => (
                     <div key={i} className="h-16 flex items-center text-sm font-semibold text-slate-500 uppercase tracking-wide">
                       {row.label}
                     </div>
                   ))}
                </div>

                {/* Traditional Column */}
                <div className="p-6 md:text-center relative">
                  <h3 className="text-lg font-bold text-slate-400 mb-6">{c.comparison.traditional}</h3>
                  {c.comparison.rows.map((row, i) => (
                     <div key={i} className="h-16 flex items-center md:justify-center border-b md:border-0 border-slate-50 text-slate-500">
                       <span className="md:hidden font-bold mr-2 text-xs uppercase">{row.label}:</span> {row.trad}
                     </div>
                   ))}
                </div>

                {/* Albiol Online Column (Gold Highlight) */}
                <div className="p-6 md:text-center bg-[#ddb042]/5 relative">
                  <div className="absolute top-0 left-0 w-full h-1 bg-[#ddb042]" />
                  <h3 className="text-lg font-bold text-[#ddb042] mb-6 flex items-center justify-center gap-2">
                    <Star className="h-4 w-4 fill-current" />
                    {c.comparison.online}
                  </h3>
                  {c.comparison.rows.map((row, i) => (
                     <div key={i} className="h-16 flex items-center md:justify-center border-b md:border-0 border-slate-100 text-slate-900 font-medium">
                        <span className="md:hidden font-bold mr-2 text-xs uppercase text-[#ddb042]">{row.label}:</span> {row.on}
                     </div>
                   ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FINAL CTA - ELEGANT DARK + GOLD */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="bg-slate-900 rounded-3xl p-10 md:p-20 text-center text-white relative overflow-hidden shadow-2xl">
              {/* Gold Glow Background */}
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#ddb042]/10 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2" />
              
              <div className="relative z-10 max-w-3xl mx-auto">
                <Laptop className="h-12 w-12 mx-auto mb-6 text-[#ddb042]" />
                <h2 className="font-serif text-3xl md:text-5xl font-bold mb-6">{c.ctaTitle}</h2>
                <p className="text-xl text-slate-300 mb-10">{c.ctaText}</p>
                
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Button asChild size="lg" className="bg-[#ddb042] text-white hover:bg-[#c9a03e] h-16 px-12 text-lg font-bold rounded-full w-full sm:w-auto">
                    <Link href="/contacte">
                      {c.ctaButton}
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="border-white/20 text-[#ddb042] hover:bg-white/10 hover:text-white h-16 px-8 text-lg rounded-full w-full sm:w-auto">
                     <a href="tel:+34680132404">
                       <Phone className="mr-2 h-5 w-5" />
                       680132404
                     </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer locale={locale} onLocaleChange={handleLocaleChange} />
      <WhatsAppButton locale={locale} />
    </div>
  )
}
