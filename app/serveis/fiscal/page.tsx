"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import {
  CheckCircle2,
  FileText,
  Clock,
  ShieldCheck,
  Phone,
  ArrowRight,
  Building2,
  User,
  Users,
  Calculator,
  Mail,
  Laptop,
  UploadCloud,
  FileCheck,
} from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { WhatsAppButton } from "@/components/whatsapp-button"
import type { Locale } from "@/lib/i18n"
import { getTranslation } from "@/lib/i18n"

const DEFAULT_LOCALE: Locale = "ca"

// --- TEXTOS EN 5 IDIOMAS (Estructura "Best Web") ---
const fiscalCopy = {
  ca: {
    heroKicker: "Assessoria fiscal a Tortosa",
    heroTitle: "Fiscalitat sense errors per a empreses i autònoms a Tortosa i Online",
    heroSubtitle: "Ens ocupem dels teus impostos perquè tu et centris en facturar. Planificació, presentació de models i gestió de requeriments amb tecnologia moderna.",
    heroBadge: "Més de 20 anys d'experiència",
    ctaPrimary: "Demana pressupost",
    ctaSecondary: "Truca'ns",
    forWhomTitle: "Per a qui treballem?",
    forWhom: [
      {
        icon: <Building2 className="h-6 w-6" />,
        title: "Pimes i Societats",
        text: "Impost de Societats, comptes anuals, IVA mensual/trimestral i planificació fiscal estratègica.",
      },
      {
        icon: <User className="h-6 w-6" />,
        title: "Autònoms",
        text: "Alta en 24h, estimació directa o mòduls, i tot el que necessites per estar tranquil amb Hisenda.",
      },
      {
        icon: <Users className="h-6 w-6" />,
        title: "Particulars",
        text: "Declaració de la Renda (IRPF), herències, donacions i tràmits de compravenda immobiliària.",
      },
    ],
    problemsTitle: "Evita problemes amb Hisenda",
    problemsIntro: "La majoria de sancions arriben per desconeixement o falta de temps. Nosaltres evitem:",
    problems: [
      "Presentar models fora de termini (recàrrecs innecessaris).",
      "No deduir despeses vàlides per no saber la normativa.",
      "Rebre notificacions electròniques i no veure-les a temps.",
      "Pagar més impostos dels necessaris per falta de planificació.",
    ],
    servicesTitle: "Què inclou la nostra quota fiscal?",
    servicesIntro: "Un servei integral, ja siguis de Tortosa o treballis 100% online:",
    services: [
      { title: "Gestió completa d'impostos", text: "Presentació de tots els models (303, 111, 115, 390, 200...)." },
      { title: "Planificació pre-tancament", text: "Ens reunim abans d'acabar l'any per simular i estalviar impostos." },
      { title: "Assistència davant inspeccions", text: "No estàs sol. Responem requeriments i t'acompanyem." },
      { title: "Resolució de dubtes en 24h", text: "Per telèfon, email o WhatsApp. Sense tecnicismes." },
      { title: "Comptabilitat fiscal", text: "Llibres registre obligatoris per a autònoms i comptabilitat per a societats." },
      { title: "Informes clars", text: "Sàpigues quant pagaràs amb antelació per gestionar la teva tresoreria." },
    ],
    processTitle: "Com treballem (Presencial o 100% Online)",
    processSteps: [
      { 
        icon: <Laptop className="h-5 w-5" />, 
        title: "1. Tot digitalitzat", 
        text: "Ens envies les factures per email o al núvol. Adéu als papers perduts." 
      },
      { 
        icon: <FileCheck className="h-5 w-5" />, 
        title: "2. Revisió experta", 
        text: "El teu assessor revisa la documentació i confecciona els impostos." 
      },
      { 
        icon: <UploadCloud className="h-5 w-5" />, 
        title: "3. Presentació i arxiu", 
        text: "Presentem telemàticament i t'enviem els justificants al moment." 
      },
    ],
    ctaTitle: "Parlem de la teva fiscalitat?",
    ctaText: "Analitzem la teva situació actual sense compromís i et donem un preu ajustat.",
    ctaButton: "Contactar ara",
  },
  es: {
    heroKicker: "Asesoría fiscal en Tortosa",
    heroTitle: "Fiscalidad sin errores para empresas y autónomos en Tortosa y Online",
    heroSubtitle: "Nos ocupamos de tus impuestos para que tú te centres en facturar. Planificación, presentación de modelos y gestión de requerimientos con tecnología moderna.",
    heroBadge: "Más de 20 años de experiencia",
    ctaPrimary: "Pide presupuesto",
    ctaSecondary: "Llámanos",
    forWhomTitle: "¿Para quién trabajamos?",
    forWhom: [
      {
        icon: <Building2 className="h-6 w-6" />,
        title: "Pymes y Sociedades",
        text: "Impuesto de Sociedades, cuentas anuales, IVA mensual/trimestral y planificación fiscal.",
      },
      {
        icon: <User className="h-6 w-6" />,
        title: "Autónomos",
        text: "Alta en 24h, estimación directa o módulos, y todo lo que necesitas para estar tranquilo con Hacienda.",
      },
      {
        icon: <Users className="h-6 w-6" />,
        title: "Particulares",
        text: "Declaración de la Renta (IRPF), herencias, donaciones y trámites de compraventa inmobiliaria.",
      },
    ],
    problemsTitle: "Evita problemas con Hacienda",
    problemsIntro: "La mayoría de sanciones llegan por desconocimiento o falta de tiempo. Nosotros evitamos:",
    problems: [
      "Presentar modelos fuera de plazo (recargos innecesarios).",
      "No deducir gastos válidos por no conocer la normativa.",
      "Recibir notificaciones electrónicas y no verlas a tiempo.",
      "Pagar más impuestos de los necesarios por falta de planificación.",
    ],
    servicesTitle: "¿Qué incluye nuestra cuota fiscal?",
    servicesIntro: "Un servicio integral, ya seas de Tortosa o trabajes 100% online:",
    services: [
      { title: "Gestión completa de impuestos", text: "Presentación de todos los modelos (303, 111, 115, 390, 200...)." },
      { title: "Planificación pre-cierre", text: "Nos reunimos antes de acabar el año para simular y ahorrar impuestos." },
      { title: "Asistencia ante inspecciones", text: "No estás solo. Respondemos requerimientos y te acompañamos." },
      { title: "Resolución de dudas en 24h", text: "Por teléfono, email o WhatsApp. Sin tecnicismos." },
      { title: "Contabilidad fiscal", text: "Libros registro obligatorios para autónomos y contabilidad para sociedades." },
      { title: "Informes claros", text: "Sepas cuánto pagarás con antelación para gestionar tu tesorería." },
    ],
    processTitle: "Cómo trabajamos (Presencial o 100% Online)",
    processSteps: [
      { 
        icon: <Laptop className="h-5 w-5" />, 
        title: "1. Todo digitalizado", 
        text: "Nos envías las facturas por email o a la nube. Adiós a los papeles perdidos." 
      },
      { 
        icon: <FileCheck className="h-5 w-5" />, 
        title: "2. Revisión experta", 
        text: "Tu asesor revisa la documentación y confecciona los impuestos." 
      },
      { 
        icon: <UploadCloud className="h-5 w-5" />, 
        title: "3. Presentación y archivo", 
        text: "Presentamos telemáticamente y te enviamos los justificantes al momento." 
      },
    ],
    ctaTitle: "¿Hablamos de tu fiscalidad?",
    ctaText: "Analizamos tu situación actual sin compromiso y te damos un precio ajustado.",
    ctaButton: "Contactar ahora",
  },
  en: {
    heroKicker: "Tax advisory in Tortosa & Spain",
    heroTitle: "Error-free tax management for companies and freelancers",
    heroSubtitle: "We handle your taxes so you can focus on invoicing. Planning, filing, and Tax Agency management with modern technology.",
    heroBadge: "Over 20 years of experience",
    ctaPrimary: "Get a quote",
    ctaSecondary: "Call us",
    forWhomTitle: "Who do we work for?",
    forWhom: [
      {
        icon: <Building2 className="h-6 w-6" />,
        title: "SMEs & Companies",
        text: "Corporate Tax, annual accounts, VAT, and strategic tax planning.",
      },
      {
        icon: <User className="h-6 w-6" />,
        title: "Freelancers",
        text: "Registration in 24h, quarterly filings, and everything you need for peace of mind.",
      },
      {
        icon: <Users className="h-6 w-6" />,
        title: "Individuals",
        text: "Income Tax (IRPF), inheritances, donations, and property transactions.",
      },
    ],
    problemsTitle: "Avoid problems with the Tax Agency",
    problemsIntro: "Most penalties come from lack of knowledge or time. We help you avoid:",
    problems: [
      "Filing late returns (unnecessary surcharges).",
      "Missing valid deductions due to unknown regulations.",
      "Missing electronic notifications from the government.",
      "Paying more tax than necessary due to lack of planning.",
    ],
    servicesTitle: "What does our service include?",
    servicesIntro: "Comprehensive service, whether you are in Tortosa or working 100% online:",
    services: [
      { title: "Full tax management", text: "Filing of all forms (303, 111, 390, 200...)." },
      { title: "Pre-closing planning", text: "We meet before year-end to simulate and save on taxes." },
      { title: "Audit assistance", text: "You are not alone. We answer notices and support you." },
      { title: "Support within 24h", text: "Via phone, email, or WhatsApp. No jargon." },
      { title: "Tax accounting", text: "Mandatory record books for freelancers and corporate accounting." },
      { title: "Clear reports", text: "Know what you'll pay in advance to manage your cash flow." },
    ],
    processTitle: "How we work (In-person or 100% Online)",
    processSteps: [
      { 
        icon: <Laptop className="h-5 w-5" />, 
        title: "1. Fully digital", 
        text: "Send invoices via email or cloud. Goodbye to lost papers." 
      },
      { 
        icon: <FileCheck className="h-5 w-5" />, 
        title: "2. Expert review", 
        text: "Your advisor reviews documents and prepares the taxes." 
      },
      { 
        icon: <UploadCloud className="h-5 w-5" />, 
        title: "3. Filing & Archive", 
        text: "We file electronically and send you the receipts instantly." 
      },
    ],
    ctaTitle: "Let's talk about your taxes?",
    ctaText: "We analyze your current situation with no obligation.",
    ctaButton: "Contact now",
  },
  fr: {
    heroKicker: "Conseil fiscal à Tortosa",
    heroTitle: "Fiscalité sans erreurs pour entreprises et indépendants",
    heroSubtitle: "Nous gérons vos impôts pour que vous puissiez facturer. Planification et déclarations avec une technologie moderne.",
    heroBadge: "Plus de 20 ans d'expérience",
    ctaPrimary: "Demander un devis",
    ctaSecondary: "Appelez-nous",
    forWhomTitle: "Pour qui travaillons-nous ?",
    forWhom: [
      {
        icon: <Building2 className="h-6 w-6" />,
        title: "PME et Sociétés",
        text: "Impôt sur les Sociétés, comptes annuels, TVA et planification fiscale.",
      },
      {
        icon: <User className="h-6 w-6" />,
        title: "Indépendants",
        text: "Immatriculation en 24h, déclarations trimestrielles et tranquillité d'esprit.",
      },
      {
        icon: <Users className="h-6 w-6" />,
        title: "Particuliers",
        text: "Impôt sur le revenu (IRPF), successions, donations et achats immobiliers.",
      },
    ],
    problemsTitle: "Évitez les problèmes fiscaux",
    problemsIntro: "La plupart des pénalités proviennent d'une méconnaissance. Nous évitons :",
    problems: [
      "Déclarations hors délai (majorations inutiles).",
      "Oubli de déductions valides.",
      "Notifications électroniques non lues à temps.",
      "Payer plus d'impôts par manque de planification.",
    ],
    servicesTitle: "Ce que notre service inclut",
    servicesIntro: "Un service complet, à Tortosa ou 100% en ligne :",
    services: [
      { title: "Gestion complète des impôts", text: "Présentation de tous les formulaires (303, 111, 200...)." },
      { title: "Planification avant clôture", text: "Simulation avant la fin de l'année pour économiser." },
      { title: "Assistance contrôle fiscal", text: "Nous répondons aux demandes de l'administration." },
      { title: "Réponse en 24h", text: "Par téléphone, email ou WhatsApp. Sans jargon." },
      { title: "Comptabilité fiscale", text: "Livres obligatoires pour indépendants et sociétés." },
      { title: "Rapports clairs", text: "Sachez à l'avance ce que vous allez payer." },
    ],
    processTitle: "Comment nous travaillons (Sur place ou 100% En ligne)",
    processSteps: [
      { 
        icon: <Laptop className="h-5 w-5" />, 
        title: "1. Tout numérique", 
        text: "Envoyez vos factures par email. Adieu la paperasse." 
      },
      { 
        icon: <FileCheck className="h-5 w-5" />, 
        title: "2. Révision d'expert", 
        text: "Votre conseiller prépare les impôts." 
      },
      { 
        icon: <UploadCloud className="h-5 w-5" />, 
        title: "3. Dépôt et archivage", 
        text: "Dépôt électronique et envoi immédiat des reçus." 
      },
    ],
    ctaTitle: "Parlons de votre fiscalité ?",
    ctaText: "Nous analysons votre situation actuelle sans engagement.",
    ctaButton: "Contacter maintenant",
  },
  de: {
    heroKicker: "Steuerberatung in Tortosa",
    heroTitle: "Fehlerfreie Steuerverwaltung für Unternehmen und Selbstständige",
    heroSubtitle: "Wir kümmern uns um Ihre Steuern, damit Sie sich auf Ihr Geschäft konzentrieren können. Planung und Erklärungen mit moderner Technologie.",
    heroBadge: "Über 20 Jahre Erfahrung",
    ctaPrimary: "Angebot anfordern",
    ctaSecondary: "Rufen Sie uns an",
    forWhomTitle: "Für wen arbeiten wir?",
    forWhom: [
      {
        icon: <Building2 className="h-6 w-6" />,
        title: "KMU & Gesellschaften",
        text: "Körperschaftsteuer, Jahresabschlüsse, MwSt. und strategische Planung.",
      },
      {
        icon: <User className="h-6 w-6" />,
        title: "Selbstständige",
        text: "Anmeldung in 24h, Quartalserklärungen und Sicherheit.",
      },
      {
        icon: <Users className="h-6 w-6" />,
        title: "Privatpersonen",
        text: "Einkommensteuer, Erbschaften, Schenkungen und Immobilien.",
      },
    ],
    problemsTitle: "Vermeiden Sie Steuerprobleme",
    problemsIntro: "Die meisten Strafen entstehen durch Unwissenheit. Wir vermeiden:",
    problems: [
      "Verspätete Einreichungen (unnötige Zuschläge).",
      "Verpasste Abzüge aufgrund unbekannter Vorschriften.",
      "Übersehene elektronische Benachrichtigungen.",
      "Zu hohe Steuerzahlungen wegen fehlender Planung.",
    ],
    servicesTitle: "Was beinhaltet unser Service?",
    servicesIntro: "Umfassender Service, ob in Tortosa oder 100% online:",
    services: [
      { title: "Komplettes Steuermanagement", text: "Einreichung aller Formulare (303, 111, 200...)." },
      { title: "Planung vor Jahresabschluss", text: "Simulation vor Jahresende, um Steuern zu sparen." },
      { title: "Prüfungsunterstützung", text: "Wir beantworten Anfragen des Finanzamts." },
      { title: "Antwort in 24h", text: "Per Telefon, E-Mail oder WhatsApp." },
      { title: "Steuerbuchhaltung", text: "Pflichtbücher für Selbstständige und Unternehmen." },
      { title: "Klare Berichte", text: "Wissen Sie im Voraus, was Sie zahlen müssen." },
    ],
    processTitle: "Wie wir arbeiten (Vor Ort oder 100% Online)",
    processSteps: [
      { 
        icon: <Laptop className="h-5 w-5" />, 
        title: "1. Alles digital", 
        text: "Senden Sie Rechnungen per E-Mail. Tschüss Papierkram." 
      },
      { 
        icon: <FileCheck className="h-5 w-5" />, 
        title: "2. Expertenprüfung", 
        text: "Ihr Berater prüft und bereitet die Steuern vor." 
      },
      { 
        icon: <UploadCloud className="h-5 w-5" />, 
        title: "3. Einreichung", 
        text: "Elektronische Einreichung und sofortige Bestätigung." 
      },
    ],
    ctaTitle: "Sprechen wir über Ihre Steuern?",
    ctaText: "Wir analysieren Ihre aktuelle Situation unverbindlich.",
    ctaButton: "Jetzt kontaktieren",
  },
} as const

export default function FiscalServicePage() {
  const [locale, setLocale] = useState<Locale>(DEFAULT_LOCALE)

  useEffect(() => {
    const saved = window.localStorage.getItem("locale") as Locale | null
    if (saved && saved !== locale) setLocale(saved)
  }, [])

  const handleLocaleChange = (next: Locale) => {
    setLocale(next)
    window.localStorage.setItem("locale", next)
  }

  const base = fiscalCopy[locale] ?? fiscalCopy["ca"]
  const c = base ?? fiscalCopy["en"]

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header locale={locale} onLocaleChange={handleLocaleChange} />

      <main className="flex-1">
        {/* HERO SECTION */}
        <section className="py-20 md:py-32 bg-primary text-primary-foreground relative overflow-hidden">
          {/* Fondo abstracto simple para modernidad */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-secondary/20 via-primary to-primary opacity-100" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md mb-6 border border-white/20">
                <Calculator className="h-4 w-4 text-secondary" />
                <span className="text-xs md:text-sm font-semibold uppercase tracking-wider">{c.heroKicker}</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance leading-tight">
                {c.heroTitle}
              </h1>
              
              <p className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed mb-8 text-pretty max-w-2xl">
                {c.heroSubtitle}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold text-base h-12 px-8 shadow-lg shadow-secondary/20">
                  <Link href="/contacte">
                    {c.ctaPrimary}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white/30 bg-white/5 text-white hover:bg-white/10 hover:text-white h-12 px-8">
                   <a href="tel:+34977440000">
                    <Phone className="mr-2 h-4 w-4" />
                    {c.ctaSecondary}
                  </a>
                </Button>
              </div>

              <div className="inline-flex items-center gap-2 text-sm font-medium text-primary-foreground/80">
                <CheckCircle2 className="h-5 w-5 text-green-400" />
                <span>{c.heroBadge}</span>
              </div>
            </div>
          </div>
        </section>

        {/* FOR WHOM (SEGMENTATION) */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{c.forWhomTitle}</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {c.forWhom.map((item, idx) => (
                <div key={idx} className="group p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/50 hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PAIN POINTS (PROBLEMS) */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block px-3 py-1 rounded bg-destructive/10 text-destructive text-sm font-semibold mb-4">
                  STOP
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  {c.problemsTitle}
                </h2>
                <p className="text-lg text-muted-foreground mb-8">{c.problemsIntro}</p>
                <ul className="space-y-4">
                  {c.problems.map((problem, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="shrink-0 w-6 h-6 rounded-full bg-destructive/10 text-destructive flex items-center justify-center mt-1">
                        <span className="text-xs font-bold">✕</span>
                      </div>
                      <span className="text-foreground/90 font-medium">{problem}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative h-full min-h-[400px] rounded-2xl overflow-hidden shadow-2xl bg-white border border-border/50 flex flex-col items-center justify-center p-8 text-center">
                 <ShieldCheck className="w-24 h-24 text-primary/20 mb-6" />
                 <p className="text-muted-foreground italic">
                   "La tranquilidad de saber que todo está presentado a tiempo y sin errores."
                 </p>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES (INCLUSIONS) */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
             <div className="max-w-3xl mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{c.servicesTitle}</h2>
              <p className="text-muted-foreground text-lg">{c.servicesIntro}</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
              {c.services.map((service, idx) => (
                <div key={idx} className="flex flex-col gap-2">
                  <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-secondary" />
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground pl-7 text-sm leading-relaxed">{service.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESS (ONLINE FACTOR) */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{c.processTitle}</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {c.processSteps.map((step, idx) => (
                <div key={idx} className="relative flex flex-col items-center text-center p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                   <div className="w-14 h-14 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center mb-6 shadow-lg">
                      {step.icon}
                   </div>
                   <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                   <p className="text-primary-foreground/80 leading-relaxed">{step.text}</p>
                   
                   {/* Connector Line (Desktop) */}
                   {idx !== c.processSteps.length - 1 && (
                     <div className="hidden md:block absolute top-12 left-[100%] w-full h-[2px] bg-white/20 -translate-x-[50%]" />
                   )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="bg-muted/40 rounded-3xl p-8 md:p-16 text-center border border-border/50 max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">{c.ctaTitle}</h2>
              <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">{c.ctaText}</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 h-14 px-10 text-lg w-full sm:w-auto">
                  <Link href="/contacte">
                    {c.ctaButton}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <div className="flex items-center gap-2 text-muted-foreground mt-4 sm:mt-0 px-4">
                   <Phone className="h-4 w-4" />
                   <span className="font-medium">977 44 00 00</span>
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
