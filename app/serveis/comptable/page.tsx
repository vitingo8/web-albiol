"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import {
  BarChart3,
  PieChart,
  BookOpen,
  SearchCheck,
  Phone,
  ArrowRight,
  Building,
  TrendingUp,
  Globe2,
  FileSpreadsheet,
  Calculator,
  LineChart,
} from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { WhatsAppButton } from "@/components/whatsapp-button"
import type { Locale } from "@/lib/i18n"
import { getTranslation } from "@/lib/i18n"

const DEFAULT_LOCALE: Locale = "ca"

const comptableCopy = {
  ca: {
    heroKicker: "Assessoria Comptable a Tortosa",
    heroTitle: "Comptabilitat analítica per prendre millors decisions",
    heroSubtitle: "No ens limitem a introduir factures. T'oferim una visió clara de l'estat financer de la teva empresa perquè sàpigues on guanyes i on perds diners.",
    heroBadge: "Comptes Anuals i llibres oficials al dia",
    ctaPrimary: "Analitzar la meva empresa",
    ctaSecondary: "Truca'ns",
    forWhomTitle: "Per a qui és aquest servei?",
    forWhom: [
      {
        icon: <Building className="h-6 w-6" />,
        title: "PIMES consolidades",
        text: "Empreses que necessiten balances mensuals/trimestrals per controlar la tresoreria i reportar als socis.",
      },
      {
        icon: <TrendingUp className="h-6 w-6" />,
        title: "Startups i Creixement",
        text: "Necessites rondes de finançament o crèdits? Preparem els teus estats financers perquè siguin impecables davant els bancs.",
      },
      {
        icon: <Globe2 className="h-6 w-6" />,
        title: "Empreses familiars",
        text: "Posem ordre als números per garantir la continuïtat del negoci i la pau familiar.",
      },
    ],
    problemsTitle: "Una comptabilitat desordenada és un risc",
    problemsIntro: "Moltes empreses tanquen per no saber interpretar els seus números a temps. Nosaltres evitem:",
    problems: [
      "Prendre decisions basades en la intuïció i no en dades reals.",
      "No saber el marge de benefici real de cada producte o servei.",
      "Problemes amb els bancs per no tenir els Comptes Anuals presentats.",
      "Sorpreses a final d'any per no haver previst els resultats.",
    ],
    servicesTitle: "Què inclou la gestió comptable?",
    servicesIntro: "Un servei rigorós adaptat al Pla General Comptable:",
    services: [
      { title: "Comptabilitat diària", text: "Registre de factures emeses, rebudes i moviments bancaris." },
      { title: "Comptes Anuals", text: "Elaboració i dipòsit al Registre Mercantil. Tot oficial." },
      { title: "Legalització de Llibres", text: "Llibre diari, inventari i comptes anuals presentats a temps." },
      { title: "Anàlisi de Balanços", text: "Ens asseiem amb tu per explicar-te l'evolució del teu negoci." },
      { title: "Amortitzacions", text: "Control de l'immobilitzat i les taules d'amortització." },
      { title: "Posada al dia", text: "Si portes la comptabilitat endarrerida, nosaltres la posem al dia ràpidament." },
    ],
    processTitle: "Comptabilitat sense papers",
    processSteps: [
      { 
        icon: <FileSpreadsheet className="h-5 w-5" />, 
        title: "1. Recepció Digital", 
        text: "Ens envies la documentació via núvol o email. Adéu carpetes físiques." 
      },
      { 
        icon: <Calculator className="h-5 w-5" />, 
        title: "2. Processament", 
        text: "El nostre equip comptable processa i concilia els bancs." 
      },
      { 
        icon: <LineChart className="h-5 w-5" />, 
        title: "3. Reporting", 
        text: "T'entreguem informes periòdics sobre la salut del teu negoci." 
      },
    ],
    ctaTitle: "Vols tenir el control dels teus números?",
    ctaText: "Deixa de conduir la teva empresa a cegues. Posa ordre a la teva comptabilitat avui mateix.",
    ctaButton: "Sol·licitar reunió",
  },
  es: {
    heroKicker: "Asesoría Contable en Tortosa",
    heroTitle: "Contabilidad analítica para tomar mejores decisiones",
    heroSubtitle: "No nos limitamos a picar facturas. Te ofrecemos una visión clara del estado financiero de tu empresa para que sepas dónde ganas y dónde pierdes dinero.",
    heroBadge: "Cuentas Anuales y libros oficiales al día",
    ctaPrimary: "Analizar mi empresa",
    ctaSecondary: "Llámanos",
    forWhomTitle: "¿Para quién es este servicio?",
    forWhom: [
      {
        icon: <Building className="h-6 w-6" />,
        title: "PYMES consolidadas",
        text: "Empresas que necesitan balances mensuales/trimestrales para controlar la tesorería y reportar a los socios.",
      },
      {
        icon: <TrendingUp className="h-6 w-6" />,
        title: "Startups y Crecimiento",
        text: "¿Necesitas rondas de financiación o créditos? Preparamos tus estados financieros para que sean impecables ante los bancos.",
      },
      {
        icon: <Globe2 className="h-6 w-6" />,
        title: "Empresas familiares",
        text: "Ponemos orden en los números para garantizar la continuidad del negocio y la paz familiar.",
      },
    ],
    problemsTitle: "Una contabilidad desordenada es un riesgo",
    problemsIntro: "Muchas empresas cierran por no saber interpretar sus números a tiempo. Nosotros evitamos:",
    problems: [
      "Tomar decisiones basadas en la intuición y no en datos reales.",
      "No saber el margen de beneficio real de cada producto o servicio.",
      "Problemas con los bancos por no tener las Cuentas Anuales presentadas.",
      "Sorpresas a final de año por no haber previsto los resultados.",
    ],
    servicesTitle: "¿Qué incluye la gestión contable?",
    servicesIntro: "Un servicio riguroso adaptado al Plan General Contable:",
    services: [
      { title: "Contabilidad diaria", text: "Registro de facturas emitidas, recibidas y movimientos bancarios." },
      { title: "Cuentas Anuales", text: "Elaboración y depósito en el Registro Mercantil. Todo oficial." },
      { title: "Legalización de Libros", text: "Libro diario, inventario y cuentas anuales presentados a tiempo." },
      { title: "Análisis de Balances", text: "Nos sentamos contigo para explicarte la evolución de tu negocio." },
      { title: "Amortizaciones", text: "Control del inmovilizado y las tablas de amortización." },
      { title: "Puesta al día", text: "Si llevas la contabilidad atrasada, nosotros la ponemos al día rápidamente." },
    ],
    processTitle: "Contabilidad sin papeles",
    processSteps: [
      { 
        icon: <FileSpreadsheet className="h-5 w-5" />, 
        title: "1. Recepción Digital", 
        text: "Nos envías la documentación vía nube o email. Adiós carpetas físicas." 
      },
      { 
        icon: <Calculator className="h-5 w-5" />, 
        title: "2. Procesamiento", 
        text: "Nuestro equipo contable procesa y concilia los bancos." 
      },
      { 
        icon: <LineChart className="h-5 w-5" />, 
        title: "3. Reporting", 
        text: "Te entregamos informes periódicos sobre la salud de tu negocio." 
      },
    ],
    ctaTitle: "¿Quieres tener el control de tus números?",
    ctaText: "Deja de conducir tu empresa a ciegas. Pon orden a tu contabilidad hoy mismo.",
    ctaButton: "Solicitar reunión",
  },
  en: {
    heroKicker: "Accounting Advisory in Tortosa",
    heroTitle: "Analytical accounting to make better decisions",
    heroSubtitle: "We don't just process invoices. We offer a clear view of your company's financial status so you know where you make and lose money.",
    heroBadge: "Annual Accounts and official books up to date",
    ctaPrimary: "Analyze my business",
    ctaSecondary: "Call us",
    forWhomTitle: "Who is this service for?",
    forWhom: [
      {
        icon: <Building className="h-6 w-6" />,
        title: "Established SMEs",
        text: "Companies needing monthly/quarterly balance sheets to control cash flow and report to shareholders.",
      },
      {
        icon: <TrendingUp className="h-6 w-6" />,
        title: "Startups & Growth",
        text: "Need funding rounds or loans? We prepare your financial statements to look impeccable for banks.",
      },
      {
        icon: <Globe2 className="h-6 w-6" />,
        title: "Family Businesses",
        text: "We organize the numbers to guarantee business continuity and family peace.",
      },
    ],
    problemsTitle: "Disordered accounting is a risk",
    problemsIntro: "Many companies fail because they don't interpret their numbers in time. We help you avoid:",
    problems: [
      "Making decisions based on intuition rather than real data.",
      "Not knowing the real profit margin of each product or service.",
      "Problems with banks due to unfiled Annual Accounts.",
      "Year-end surprises due to lack of forecasting.",
    ],
    servicesTitle: "What does accounting management include?",
    servicesIntro: "Rigorous service adapted to the General Accounting Plan:",
    services: [
      { title: "Daily Accounting", text: "Recording of issued/received invoices and bank transactions." },
      { title: "Annual Accounts", text: "Preparation and filing with the Mercantile Registry." },
      { title: "Official Books", text: "Journal, inventory, and annual accounts filed on time." },
      { title: "Balance Sheet Analysis", text: "We sit down with you to explain your business evolution." },
      { title: "Amortizations", text: "Control of fixed assets and depreciation tables." },
      { title: "Catch-up Service", text: "If your accounting is behind, we update it quickly." },
    ],
    processTitle: "Paperless Accounting",
    processSteps: [
      { 
        icon: <FileSpreadsheet className="h-5 w-5" />, 
        title: "1. Digital Reception", 
        text: "Send docs via cloud or email. Goodbye physical folders." 
      },
      { 
        icon: <Calculator className="h-5 w-5" />, 
        title: "2. Processing", 
        text: "Our accounting team processes and reconciles banks." 
      },
      { 
        icon: <LineChart className="h-5 w-5" />, 
        title: "3. Reporting", 
        text: "We deliver periodic reports on your business health." 
      },
    ],
    ctaTitle: "Want control over your numbers?",
    ctaText: "Stop driving your company blind. Organize your accounting today.",
    ctaButton: "Request meeting",
  },
  fr: {
    heroKicker: "Conseil Comptable à Tortosa",
    heroTitle: "Comptabilité analytique pour mieux décider",
    heroSubtitle: "Nous ne faisons pas que saisir des factures. Nous offrons une vision claire de la santé financière de votre entreprise.",
    heroBadge: "Comptes annuels et livres officiels à jour",
    ctaPrimary: "Analyser mon entreprise",
    ctaSecondary: "Appelez-nous",
    forWhomTitle: "Pour qui est ce service ?",
    forWhom: [
      {
        icon: <Building className="h-6 w-6" />,
        title: "PME établies",
        text: "Entreprises nécessitant des bilans mensuels/trimestriels pour contrôler la trésorerie.",
      },
      {
        icon: <TrendingUp className="h-6 w-6" />,
        title: "Startups",
        text: "Besoin de financement ? Nous préparons vos états financiers pour les banques.",
      },
      {
        icon: <Globe2 className="h-6 w-6" />,
        title: "Entreprises familiales",
        text: "Nous mettons de l'ordre dans les chiffres pour assurer la continuité.",
      },
    ],
    problemsTitle: "Une comptabilité désordonnée est un risque",
    problemsIntro: "Beaucoup d'entreprises échouent faute de comprendre leurs chiffres. Nous évitons :",
    problems: [
      "Décider par intuition plutôt que sur des données réelles.",
      "Ignorer la marge bénéficiaire réelle.",
      "Problèmes bancaires dus à des comptes non déposés.",
      "Surprises de fin d'année.",
    ],
    servicesTitle: "Que comprend la gestion comptable ?",
    servicesIntro: "Un service rigoureux adapté au Plan Général Comptable :",
    services: [
      { title: "Comptabilité quotidienne", text: "Enregistrement des factures et banques." },
      { title: "Comptes Annuels", text: "Élaboration et dépôt au Registre du Commerce." },
      { title: "Légalisation des Livres", text: "Livre journal et comptes présentés à temps." },
      { title: "Analyse de Bilan", text: "Nous vous expliquons l'évolution de votre activité." },
      { title: "Amortissements", text: "Contrôle des actifs et tableaux d'amortissement." },
      { title: "Mise à jour", text: "Si votre comptabilité est en retard, nous la régularisons." },
    ],
    processTitle: "Comptabilité sans papier",
    processSteps: [
      { 
        icon: <FileSpreadsheet className="h-5 w-5" />, 
        title: "1. Réception Numérique", 
        text: "Envoyez via cloud ou email. Adieu les classeurs." 
      },
      { 
        icon: <Calculator className="h-5 w-5" />, 
        title: "2. Traitement", 
        text: "Notre équipe traite et rapproche les banques." 
      },
      { 
        icon: <LineChart className="h-5 w-5" />, 
        title: "3. Reporting", 
        text: "Rapports périodiques sur la santé de votre entreprise." 
      },
    ],
    ctaTitle: "Voulez-vous contrôler vos chiffres ?",
    ctaText: "Arrêtez de piloter à l'aveugle. Organisez votre comptabilité.",
    ctaButton: "Demander une réunion",
  },
  de: {
    heroKicker: "Buchhaltungsservice in Tortosa",
    heroTitle: "Analytische Buchhaltung für bessere Entscheidungen",
    heroSubtitle: "Wir buchen nicht nur Rechnungen. Wir bieten eine klare Sicht auf den Finanzstatus Ihres Unternehmens.",
    heroBadge: "Jahresabschlüsse und Bücher auf dem neuesten Stand",
    ctaPrimary: "Firma analysieren",
    ctaSecondary: "Rufen Sie uns an",
    forWhomTitle: "Für wen ist dieser Service?",
    forWhom: [
      {
        icon: <Building className="h-6 w-6" />,
        title: "Etablierte KMU",
        text: "Unternehmen, die monatliche Bilanzen zur Liquiditätskontrolle benötigen.",
      },
      {
        icon: <TrendingUp className="h-6 w-6" />,
        title: "Startups & Wachstum",
        text: "Brauchen Sie Kredite? Wir bereiten Ihre Finanzberichte für Banken vor.",
      },
      {
        icon: <Globe2 className="h-6 w-6" />,
        title: "Familienunternehmen",
        text: "Wir bringen Ordnung in die Zahlen für die Geschäftskontinuität.",
      },
    ],
    problemsTitle: "Ungeordnete Buchhaltung ist ein Risiko",
    problemsIntro: "Viele Firmen scheitern, weil sie ihre Zahlen nicht verstehen. Wir vermeiden:",
    problems: [
      "Entscheidungen aus dem Bauch heraus statt basierend auf Daten.",
      "Unkenntnis der wahren Gewinnspanne.",
      "Bankprobleme wegen fehlender Jahresabschlüsse.",
      "Überraschungen am Jahresende.",
    ],
    servicesTitle: "Was beinhaltet die Buchhaltung?",
    servicesIntro: "Ein strenger Service nach dem Allgemeinen Kontenplan:",
    services: [
      { title: "Tägliche Buchhaltung", text: "Erfassung von Rechnungen und Bankbewegungen." },
      { title: "Jahresabschlüsse", text: "Erstellung und Hinterlegung beim Handelsregister." },
      { title: "Bücherlegalisierung", text: "Journal und Inventar pünktlich eingereicht." },
      { title: "Bilanzanalyse", text: "Wir erklären Ihnen die Entwicklung Ihres Geschäfts." },
      { title: "Abschreibungen", text: "Kontrolle des Anlagevermögens." },
      { title: "Aufarbeitung", text: "Wenn Ihre Buchhaltung im Rückstand ist, aktualisieren wir sie." },
    ],
    processTitle: "Papierlose Buchhaltung",
    processSteps: [
      { 
        icon: <FileSpreadsheet className="h-5 w-5" />, 
        title: "1. Digitaler Empfang", 
        text: "Senden via Cloud/E-Mail. Tschüss Aktenordner." 
      },
      { 
        icon: <Calculator className="h-5 w-5" />, 
        title: "2. Verarbeitung", 
        text: "Unser Team verarbeitet und gleicht Banken ab." 
      },
      { 
        icon: <LineChart className="h-5 w-5" />, 
        title: "3. Reporting", 
        text: "Regelmäßige Berichte über die Gesundheit Ihres Unternehmens." 
      },
    ],
    ctaTitle: "Wollen Sie Ihre Zahlen kontrollieren?",
    ctaText: "Hören Sie auf, blind zu fliegen. Ordnen Sie Ihre Buchhaltung.",
    ctaButton: "Meeting anfordern",
  },
} as const

export default function ComptableServicePage() {
  const [locale, setLocale] = useState<Locale>(DEFAULT_LOCALE)

  useEffect(() => {
    const saved = window.localStorage.getItem("locale") as Locale | null
    if (saved && saved !== locale) setLocale(saved)
  }, [])

  const handleLocaleChange = (next: Locale) => {
    setLocale(next)
    window.localStorage.setItem("locale", next)
  }

  const base = comptableCopy[locale] ?? comptableCopy["ca"]
  const c = base ?? comptableCopy["en"]

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header locale={locale} onLocaleChange={handleLocaleChange} />

      <main className="flex-1">
        {/* HERO SECTION */}
        <section className="py-20 md:py-32 bg-primary text-primary-foreground relative overflow-hidden">
          {/* Fondo geométrico sutil para "estructura y orden" */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]" />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-primary to-slate-900 opacity-90" />
          
          <div className="container mx-auto px-6 md:px-8 lg:px-12 relative z-10">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md mb-6 border border-white/20">
                <BarChart3 className="h-4 w-4 text-emerald-400" />
                <span className="text-xs md:text-sm font-semibold uppercase tracking-wider">{c.heroKicker}</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-8 text-balance leading-tight">
                {c.heroTitle}
              </h1>
              
              <p className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed mb-8 text-pretty max-w-2xl">
                {c.heroSubtitle}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button asChild size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-base h-12 px-8 shadow-lg shadow-emerald-500/20">
                  <Link href="/contacte">
                    {c.ctaPrimary}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white/30 bg-white/5 text-white hover:bg-white/10 hover:text-white h-12 px-8">
                   <a href="tel:+34680132404">
                    <Phone className="mr-2 h-4 w-4" />
                    {c.ctaSecondary}
                  </a>
                </Button>
              </div>

              <div className="inline-flex items-center gap-2 text-sm font-medium text-primary-foreground/80">
                <BookOpen className="h-5 w-5 text-emerald-300" />
                <span>{c.heroBadge}</span>
              </div>
            </div>
          </div>
        </section>

        {/* FOR WHOM */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6 md:px-8 lg:px-12">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{c.forWhomTitle}</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {c.forWhom.map((item, idx) => (
                <div key={idx} className="group p-8 rounded-2xl bg-card border border-border/50 hover:border-emerald-500/30 hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROBLEMS */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-6 md:px-8 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block px-3 py-1 rounded bg-destructive/10 text-destructive text-sm font-semibold mb-4">
                  RISCOS
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
                 <PieChart className="w-24 h-24 text-primary/20 mb-6" />
                 <p className="text-muted-foreground italic">
                   "Convertim dades complexes en informació útil per al gerent."
                 </p>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6 md:px-8 lg:px-12">
             <div className="max-w-3xl mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{c.servicesTitle}</h2>
              <p className="text-muted-foreground text-lg">{c.servicesIntro}</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
              {c.services.map((service, idx) => (
                <div key={idx} className="flex flex-col gap-2">
                  <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                    <SearchCheck className="h-5 w-5 text-emerald-600" />
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground pl-7 text-sm leading-relaxed">{service.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-6 md:px-8 lg:px-12">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{c.processTitle}</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {c.processSteps.map((step, idx) => (
                <div key={idx} className="relative flex flex-col items-center text-center p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                   <div className="w-14 h-14 rounded-full bg-emerald-600 text-white flex items-center justify-center mb-6 shadow-lg">
                      {step.icon}
                   </div>
                   <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                   <p className="text-primary-foreground/80 leading-relaxed">{step.text}</p>
                   
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
          <div className="container mx-auto px-6 md:px-8 lg:px-12">
            <div className="bg-emerald-50/50 dark:bg-emerald-950/20 rounded-3xl p-8 md:p-16 text-center border border-emerald-100 dark:border-emerald-900 max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">{c.ctaTitle}</h2>
              <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">{c.ctaText}</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button asChild size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white h-14 px-10 text-lg w-full sm:w-auto">
                  <Link href="/contacte">
                    {c.ctaButton}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <div className="flex items-center gap-2 text-muted-foreground mt-4 sm:mt-0 px-6 md:px-8 lg:px-12">
                   <Phone className="h-4 w-4" />
                   <span className="font-medium">680132404</span>
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
