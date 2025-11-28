"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import {
  Users,
  Briefcase,
  FileSignature,
  ShieldAlert,
  Phone,
  ArrowRight,
  Building2,
  UserCheck,
  Laptop,
  Mail,
  CheckCircle2,
  FileCheck,
  UploadCloud,
} from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { WhatsAppButton } from "@/components/whatsapp-button"
import type { Locale } from "@/lib/i18n"
import { getTranslation } from "@/lib/i18n"

const DEFAULT_LOCALE: Locale = "ca"

const laboralCopy = {
  ca: {
    heroKicker: "Assessoria Laboral a Tortosa",
    heroTitle: "Gestió de nòmines i contractes sense errors ni retards",
    heroSubtitle: "El teu departament de RRHH extern. Gestionem altes, baixes, nòmines i Seguretat Social amb precisió perquè la teva empresa funcioni com un rellotge.",
    heroBadge: "Experts en normativa laboral vigent",
    ctaPrimary: "Demana pressupost",
    ctaSecondary: "Truca'ns",
    forWhomTitle: "A qui ajudem?",
    forWhom: [
      {
        icon: <Building2 className="h-6 w-6" />,
        title: "Empreses amb treballadors",
        text: "Externalitza les nòmines i oblida't de càlculs, convenis col·lectius i actualitzacions del BOE.",
      },
      {
        icon: <Users className="h-6 w-6" />,
        title: "Pimes en creixement",
        text: "Assessorament en contractació per aprofitar bonificacions i triar la millor modalitat de contracte.",
      },
      {
        icon: <UserCheck className="h-6 w-6" />,
        title: "Autònoms amb empleats",
        text: "La teva primera contractació, fàcil i segura. T'expliquem els costos reals abans de contractar.",
      },
    ],
    problemsTitle: "Evita sancions laborals",
    problemsIntro: "Una mala gestió laboral pot sortir molt cara. Nosaltres protegim el teu negoci de:",
    problems: [
      "Sancions per contractes en frau de llei o mal redactats.",
      "Errors en el càlcul de nòmines o quitances.",
      "Retards en les altes a la Seguretat Social.",
      "No aplicar correctament el conveni col·lectiu corresponent.",
    ],
    servicesTitle: "Què inclou el servei laboral?",
    servicesIntro: "Tot el cicle de vida del teu treballador, gestionat per experts:",
    services: [
      { title: "Gestió de Nòmines", text: "Confecció i enviament mensual puntual. Sense errors." },
      { title: "Contractes i pròrrogues", text: "Redacció i registre al SEPE. T'avisem abans que vencin." },
      { title: "Altes i Baixes a la SS", text: "Tràmits immediats al Sistema RED de la Seguretat Social." },
      { title: "Acomiadaments i ERTOs", text: "Gestió legal, càlcul d'indemnitzacions i cartes d'acomiadament." },
      { title: "Inspeccions de Treball", text: "Assistència i representació davant la inspecció." },
      { title: "Assessoria contínua", text: "Resolem dubtes sobre vacances, baixes mèdiques i convenis." },
    ],
    processTitle: "Nòmines digitals i fàcils",
    processSteps: [
      { 
        icon: <Laptop className="h-5 w-5" />, 
        title: "1. Comunicació àgil", 
        text: "Ens comuniques les variacions (baixes, hores extra) per email o WhatsApp." 
      },
      { 
        icon: <FileCheck className="h-5 w-5" />, 
        title: "2. Càlcul precís", 
        text: "Apliquem el conveni i generem les nòmines i assegurances socials." 
      },
      { 
        icon: <UploadCloud className="h-5 w-5" />, 
        title: "3. Enviament digital", 
        text: "Reps les nòmines en PDF llestes per enviar als teus treballadors." 
      },
    ],
    ctaTitle: "Necessites ordre en les nòmines?",
    ctaText: "Deixa la gestió de personal en mans professionals i evita conflictes laborals.",
    ctaButton: "Sol·licitar proposta",
  },
  es: {
    heroKicker: "Asesoría Laboral en Tortosa",
    heroTitle: "Gestión de nóminas y contratos sin errores ni retrasos",
    heroSubtitle: "Tu departamento de RRHH externo. Gestionamos altas, bajas, nóminas y Seguridad Social con precisión para que tu empresa funcione como un reloj.",
    heroBadge: "Expertos en normativa laboral vigente",
    ctaPrimary: "Pide presupuesto",
    ctaSecondary: "Llámanos",
    forWhomTitle: "¿A quién ayudamos?",
    forWhom: [
      {
        icon: <Building2 className="h-6 w-6" />,
        title: "Empresas con trabajadores",
        text: "Externaliza las nóminas y olvídate de cálculos, convenios colectivos y actualizaciones del BOE.",
      },
      {
        icon: <Users className="h-6 w-6" />,
        title: "Pymes en crecimiento",
        text: "Asesoramiento en contratación para aprovechar bonificaciones y elegir la mejor modalidad.",
      },
      {
        icon: <UserCheck className="h-6 w-6" />,
        title: "Autónomos con empleados",
        text: "Tu primera contratación, fácil y segura. Te explicamos los costes reales antes de firmar.",
      },
    ],
    problemsTitle: "Evita sanciones laborales",
    problemsIntro: "Una mala gestión laboral puede salir muy cara. Protegemos tu negocio de:",
    problems: [
      "Sanciones por contratos en fraude de ley o mal redactados.",
      "Errores en el cálculo de nóminas o finiquitos.",
      "Retrasos en las altas a la Seguridad Social.",
      "No aplicar correctamente el convenio colectivo correspondiente.",
    ],
    servicesTitle: "¿Qué incluye el servicio laboral?",
    servicesIntro: "Todo el ciclo de vida de tu trabajador, gestionado por expertos:",
    services: [
      { title: "Gestión de Nóminas", text: "Confección y envío mensual puntual. Sin errores." },
      { title: "Contratos y prórrogas", text: "Redacción y registro en el SEPE. Te avisamos antes de que venzan." },
      { title: "Altas y Bajas en la SS", text: "Trámites inmediatos en el Sistema RED de la Seguridad Social." },
      { title: "Despidos y ERTEs", text: "Gestión legal, cálculo de indemnizaciones y cartas de despido." },
      { title: "Inspecciones de Trabajo", text: "Asistencia y representación ante la inspección." },
      { title: "Asesoría continua", text: "Resolvemos dudas sobre vacaciones, bajas médicas y convenios." },
    ],
    processTitle: "Nóminas digitales y fáciles",
    processSteps: [
      { 
        icon: <Laptop className="h-5 w-5" />, 
        title: "1. Comunicación ágil", 
        text: "Nos comunicas las variaciones (bajas, horas extra) por email o WhatsApp." 
      },
      { 
        icon: <FileCheck className="h-5 w-5" />, 
        title: "2. Cálculo preciso", 
        text: "Aplicamos el convenio y generamos las nóminas y seguros sociales." 
      },
      { 
        icon: <UploadCloud className="h-5 w-5" />, 
        title: "3. Envío digital", 
        text: "Recibes las nóminas en PDF listas para enviar a tus trabajadores." 
      },
    ],
    ctaTitle: "¿Necesitas orden en las nóminas?",
    ctaText: "Deja la gestión de personal en manos profesionales y evita conflictos laborales.",
    ctaButton: "Solicitar propuesta",
  },
  en: {
    heroKicker: "Labor Advisory in Tortosa",
    heroTitle: "Payroll and contract management without errors or delays",
    heroSubtitle: "Your external HR department. We manage hiring, terminations, payroll, and Social Security with precision so your company runs like clockwork.",
    heroBadge: "Experts in current labor regulations",
    ctaPrimary: "Get a quote",
    ctaSecondary: "Call us",
    forWhomTitle: "Who do we help?",
    forWhom: [
      {
        icon: <Building2 className="h-6 w-6" />,
        title: "Companies with employees",
        text: "Outsource payroll and forget about calculations, collective agreements, and regulatory updates.",
      },
      {
        icon: <Users className="h-6 w-6" />,
        title: "Growing SMEs",
        text: "Hiring advice to take advantage of bonuses and choose the best contract type.",
      },
      {
        icon: <UserCheck className="h-6 w-6" />,
        title: "Freelancers with staff",
        text: "Your first hire, made easy and safe. We explain the real costs before you sign.",
      },
    ],
    problemsTitle: "Avoid labor penalties",
    problemsIntro: "Poor labor management can be very expensive. We protect your business from:",
    problems: [
      "Penalties for poorly drafted or non-compliant contracts.",
      "Errors in payroll or severance calculations.",
      "Delays in Social Security registration.",
      "Incorrect application of the collective agreement.",
    ],
    servicesTitle: "What does the labor service include?",
    servicesIntro: "The entire lifecycle of your employee, managed by experts:",
    services: [
      { title: "Payroll Management", text: "Monthly preparation and timely delivery. Error-free." },
      { title: "Contracts & Extensions", text: "Drafting and registration with SEPE. We notify you before expiry." },
      { title: "Social Security", text: "Immediate registration and deregistration in the RED System." },
      { title: "Dismissals & Layoffs", text: "Legal management, severance calculation, and dismissal letters." },
      { title: "Labor Inspections", text: "Assistance and representation before the Labor Inspectorate." },
      { title: "Ongoing Advisory", text: "We answer questions about holidays, sick leave, and agreements." },
    ],
    processTitle: "Digital and easy payroll",
    processSteps: [
      { 
        icon: <Laptop className="h-5 w-5" />, 
        title: "1. Agile communication", 
        text: "Tell us changes (sick leave, overtime) via email or WhatsApp." 
      },
      { 
        icon: <FileCheck className="h-5 w-5" />, 
        title: "2. Precise calculation", 
        text: "We apply the agreement and generate payroll and social insurance." 
      },
      { 
        icon: <UploadCloud className="h-5 w-5" />, 
        title: "3. Digital delivery", 
        text: "Receive payrolls in PDF ready to send to your employees." 
      },
    ],
    ctaTitle: "Need order in your payroll?",
    ctaText: "Leave personnel management in professional hands and avoid labor conflicts.",
    ctaButton: "Request proposal",
  },
  fr: {
    heroKicker: "Conseil Social à Tortosa",
    heroTitle: "Gestion de la paie et contrats sans erreurs",
    heroSubtitle: "Votre service RH externe. Nous gérons embauches, départs, fiches de paie et Sécurité Sociale avec précision.",
    heroBadge: "Experts en droit du travail",
    ctaPrimary: "Demander un devis",
    ctaSecondary: "Appelez-nous",
    forWhomTitle: "Qui aidons-nous ?",
    forWhom: [
      {
        icon: <Building2 className="h-6 w-6" />,
        title: "Entreprises avec salariés",
        text: "Externalisez la paie et oubliez les calculs et les conventions collectives.",
      },
      {
        icon: <Users className="h-6 w-6" />,
        title: "PME en croissance",
        text: "Conseils d'embauche pour profiter des bonus et choisir le meilleur contrat.",
      },
      {
        icon: <UserCheck className="h-6 w-6" />,
        title: "Indépendants employeurs",
        text: "Votre première embauche, simple et sûre. Nous expliquons les coûts réels.",
      },
    ],
    problemsTitle: "Évitez les sanctions",
    problemsIntro: "Une mauvaise gestion sociale coûte cher. Nous protégeons votre entreprise de :",
    problems: [
      "Sanctions pour contrats mal rédigés.",
      "Erreurs dans le calcul des bulletins de paie.",
      "Retards dans les déclarations à la Sécurité Sociale.",
      "Mauvaise application de la convention collective.",
    ],
    servicesTitle: "Que comprend le service ?",
    servicesIntro: "Tout le cycle de vie de votre salarié, géré par des experts :",
    services: [
      { title: "Gestion de la Paie", text: "Établissement et envoi mensuel ponctuel." },
      { title: "Contrats de travail", text: "Rédaction et enregistrement. Alertes avant expiration." },
      { title: "Sécurité Sociale", text: "Déclarations immédiates au système RED." },
      { title: "Licenciements", text: "Gestion légale, calcul des indemnités et lettres." },
      { title: "Inspections du Travail", text: "Assistance et représentation." },
      { title: "Conseil continu", text: "Réponses sur les congés, arrêts maladie et conventions." },
    ],
    processTitle: "Paie numérique et facile",
    processSteps: [
      { 
        icon: <Laptop className="h-5 w-5" />, 
        title: "1. Communication agile", 
        text: "Communiquez les changements par email ou WhatsApp." 
      },
      { 
        icon: <FileCheck className="h-5 w-5" />, 
        title: "2. Calcul précis", 
        text: "Nous appliquons la convention et générons les paies." 
      },
      { 
        icon: <UploadCloud className="h-5 w-5" />, 
        title: "3. Envoi numérique", 
        text: "Recevez les bulletins en PDF prêts à être envoyés." 
      },
    ],
    ctaTitle: "Besoin d'ordre dans la paie ?",
    ctaText: "Confiez la gestion du personnel à des professionnels.",
    ctaButton: "Demander une proposition",
  },
  de: {
    heroKicker: "Arbeitsrechtliche Beratung",
    heroTitle: "Lohnbuchhaltung und Verträge ohne Fehler",
    heroSubtitle: "Ihre externe Personalabteilung. Wir verwalten Einstellungen, Kündigungen, Lohnabrechnungen und Sozialversicherung präzise.",
    heroBadge: "Experten im Arbeitsrecht",
    ctaPrimary: "Angebot anfordern",
    ctaSecondary: "Rufen Sie uns an",
    forWhomTitle: "Wem helfen wir?",
    forWhom: [
      {
        icon: <Building2 className="h-6 w-6" />,
        title: "Unternehmen mit Mitarbeitern",
        text: "Lagern Sie die Lohnbuchhaltung aus und vergessen Sie komplexe Berechnungen.",
      },
      {
        icon: <Users className="h-6 w-6" />,
        title: "Wachsende KMU",
        text: "Einstellungsberatung zur Nutzung von Boni und Vertragsarten.",
      },
      {
        icon: <UserCheck className="h-6 w-6" />,
        title: "Arbeitgeber",
        text: "Ihre erste Einstellung, einfach und sicher. Wir erklären die wahren Kosten.",
      },
    ],
    problemsTitle: "Vermeiden Sie Sanktionen",
    problemsIntro: "Schlechtes Personalmanagement ist teuer. Wir schützen Sie vor:",
    problems: [
      "Strafen für schlecht aufgesetzte Verträge.",
      "Fehlern bei der Lohnabrechnung oder Abfindungen.",
      "Verzögerungen bei der Sozialversicherungsanmeldung.",
      "Falscher Anwendung des Tarifvertrags.",
    ],
    servicesTitle: "Was beinhaltet der Service?",
    servicesIntro: "Der gesamte Lebenszyklus Ihres Mitarbeiters, verwaltet von Experten:",
    services: [
      { title: "Lohnbuchhaltung", text: "Monatliche Erstellung und pünktlicher Versand." },
      { title: "Arbeitsverträge", text: "Erstellung und Registrierung. Warnung vor Ablauf." },
      { title: "Sozialversicherung", text: "Sofortige An- und Abmeldungen." },
      { title: "Kündigungen", text: "Rechtliche Verwaltung und Berechnung von Abfindungen." },
      { title: "Arbeitsinspektionen", text: "Unterstützung und Vertretung." },
      { title: "Laufende Beratung", text: "Antworten zu Urlaub, Krankheit und Tarifverträgen." },
    ],
    processTitle: "Digitale Lohnabrechnung",
    processSteps: [
      { 
        icon: <Laptop className="h-5 w-5" />, 
        title: "1. Kommunikation", 
        text: "Teilen Sie uns Änderungen per E-Mail oder WhatsApp mit." 
      },
      { 
        icon: <FileCheck className="h-5 w-5" />, 
        title: "2. Berechnung", 
        text: "Wir wenden den Tarifvertrag an und erstellen die Abrechnungen." 
      },
      { 
        icon: <UploadCloud className="h-5 w-5" />, 
        title: "3. Digitaler Versand", 
        text: "Erhalten Sie Lohnabrechnungen als PDF." 
      },
    ],
    ctaTitle: "Ordnung in der Lohnbuchhaltung?",
    ctaText: "Überlassen Sie das Personalmanagement Profis.",
    ctaButton: "Angebot anfordern",
  },
} as const

export default function LaboralServicePage() {
  const [locale, setLocale] = useState<Locale>(DEFAULT_LOCALE)

  useEffect(() => {
    const saved = window.localStorage.getItem("locale") as Locale | null
    if (saved && saved !== locale) setLocale(saved)
  }, [])

  const handleLocaleChange = (next: Locale) => {
    setLocale(next)
    window.localStorage.setItem("locale", next)
  }

  const base = laboralCopy[locale] ?? laboralCopy["ca"]
  const c = base ?? laboralCopy["en"]

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header locale={locale} onLocaleChange={handleLocaleChange} />

      <main className="flex-1">
        {/* HERO SECTION */}
        <section className="py-20 md:py-32 bg-primary text-primary-foreground relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-blue-900/40 via-primary to-primary opacity-100" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md mb-6 border border-white/20">
                <Briefcase className="h-4 w-4 text-blue-300" />
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
                   <a href="tel:+34680132404">
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

        {/* FOR WHOM */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{c.forWhomTitle}</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {c.forWhom.map((item, idx) => (
                <div key={idx} className="group p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/50 hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
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
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block px-3 py-1 rounded bg-destructive/10 text-destructive text-sm font-semibold mb-4">
                  ATENCIÓ
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
                 <ShieldAlert className="w-24 h-24 text-destructive/20 mb-6" />
                 <p className="text-muted-foreground italic">
                   "Dormir tranquil sabent que els contractes i nòmines compleixen la llei al 100%."
                 </p>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES */}
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
                    <FileSignature className="h-5 w-5 text-blue-500" />
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
            <div className="bg-blue-50/50 dark:bg-blue-950/20 rounded-3xl p-8 md:p-16 text-center border border-blue-100 dark:border-blue-900 max-w-4xl mx-auto">
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
