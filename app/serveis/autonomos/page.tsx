"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import {
  Rocket,
  Laptop,
  PiggyBank,
  ShieldCheck,
  Phone,
  ArrowRight,
  User,
  Briefcase,
  FileText,
  CheckCircle2,
  Receipt,
  Headphones,
} from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { WhatsAppButton } from "@/components/whatsapp-button"
import type { Locale } from "@/lib/i18n"
import { getTranslation } from "@/lib/i18n"

const DEFAULT_LOCALE: Locale = "ca"

const autonomsCopy = {
  ca: {
    heroKicker: "Gestoria per a Autònoms a Tortosa i Online",
    heroTitle: "Dona't d'alta d'autònom en 24h i oblida't de la paperassa",
    heroSubtitle: "Gestionem la teva alta, els impostos trimestrals i la teva comptabilitat 100% online. Tu dedica't al teu negoci, nosaltres ens barallem amb Hisenda.",
    heroBadge: "Tarifa plana sense sorpreses",
    ctaPrimary: "Vull donar-me d'alta",
    ctaSecondary: "Tinc dubtes",
    forWhomTitle: "Per a quin tipus d'autònom treballem?",
    forWhom: [
      {
        icon: <Rocket className="h-6 w-6" />,
        title: "Nous Emprenedors",
        text: "T'ajudem a capitalitzar l'atur, demanar la tarifa plana de 80€ i fer l'alta en Hisenda i Seguretat Social en un sol dia.",
      },
      {
        icon: <Laptop className="h-6 w-6" />,
        title: "Freelancers Digitals",
        text: "Programadors, dissenyadors, màrqueting... Entenem el teu negoci digital, les factures intracomunitàries i el treball remot.",
      },
      {
        icon: <User className="h-6 w-6" />,
        title: "Autònoms consolidats",
        text: "Si ja portes temps però sents que pagues massa o el teu gestor no t'atén, fem el traspàs del teu expedient gratis.",
      },
    ],
    problemsTitle: "Ser autònom és difícil, la gestió no ho hauria de ser",
    problemsIntro: "El sistema fiscal espanyol és complex. Nosaltres t'evitem els mals de cap habituals:",
    problems: [
      "No saber quines despeses pots deduir (benzina, llum, dinars...).",
      "Por a equivocar-se en presentar el model 303 d'IVA o 130 d'IRPF.",
      "Rebre requeriments d'Hisenda i no saber com contestar.",
      "Perdre bonificacions (com la Tarifa Plana) per errors en l'alta.",
    ],
    servicesTitle: "La teva quota mensual inclou tot això",
    servicesIntro: "Sense permanència i amb tot el que necessites per estar al dia:",
    services: [
      { title: "Alta d'autònom GRATIS", text: "Si et quedes amb nosaltres, tramitem la teva alta a Hisenda i RETA sense cost." },
      { title: "Models Trimestrals", text: "Presentació puntual de tots els impostos (IVA i IRPF)." },
      { title: "Resums Anuals", text: "Model 390 i 190. Tancament fiscal de l'any inclòs." },
      { title: "Declaració de la Renda", text: "Inclosa en el pack anual. Revisem totes les deduccions personals." },
      { title: "Llibres Registre", text: "Portem la teva comptabilitat oficial obligatòria al dia." },
      { title: "Assessor personal", text: "Tens un expert assignat. No parles amb màquines, parles amb persones." },
    ],
    processTitle: "Com funciona la nostra gestoria online?",
    processSteps: [
      { 
        icon: <Receipt className="h-5 w-5" />, 
        title: "1. Puges les factures", 
        text: "Fes una foto o envia el PDF per email/app. No cal que vinguis a l'oficina." 
      },
      { 
        icon: <FileText className="h-5 w-5" />, 
        title: "2. Nosaltres comptabilitzem", 
        text: "El teu gestor revisa que la despesa sigui deduïble i la processa." 
      },
      { 
        icon: <CheckCircle2 className="h-5 w-5" />, 
        title: "3. Impostos presentats", 
        text: "Et diem quant pagaràs abans del dia 20 i ho carreguem al teu compte." 
      },
    ],
    ctaTitle: "Comencem el teu projecte?",
    ctaText: "Tant si vols donar-te d'alta com si vols canviar de gestor, t'ho posem fàcil.",
    ctaButton: "Parlem ara",
  },
  es: {
    heroKicker: "Gestoría para Autónomos en Tortosa y Online",
    heroTitle: "Date de alta de autónomo en 24h y olvídate del papeleo",
    heroSubtitle: "Gestionamos tu alta, los impuestos trimestrales y tu contabilidad 100% online. Tú dedícate a tu negocio, nosotros nos peleamos con Hacienda.",
    heroBadge: "Tarifa plana sin sorpresas",
    ctaPrimary: "Quiero darme de alta",
    ctaSecondary: "Tengo dudas",
    forWhomTitle: "¿Para qué tipo de autónomo trabajamos?",
    forWhom: [
      {
        icon: <Rocket className="h-6 w-6" />,
        title: "Nuevos Emprendedores",
        text: "Te ayudamos a capitalizar el paro, pedir la tarifa plana de 80€ y hacer el alta en Hacienda y Seguridad Social en un día.",
      },
      {
        icon: <Laptop className="h-6 w-6" />,
        title: "Freelancers Digitales",
        text: "Programadores, diseñadores, marketing... Entendemos tu negocio digital, las facturas intracomunitarias y el trabajo remoto.",
      },
      {
        icon: <User className="h-6 w-6" />,
        title: "Autónomos consolidados",
        text: "Si ya llevas tiempo pero sientes que pagas demasiado o tu gestor no te atiende, hacemos el traspaso de tu expediente gratis.",
      },
    ],
    problemsTitle: "Ser autónomo es difícil, la gestión no debería serlo",
    problemsIntro: "El sistema fiscal español es complejo. Nosotros te evitamos los dolores de cabeza habituales:",
    problems: [
      "No saber qué gastos puedes deducir (gasolina, luz, comidas...).",
      "Miedo a equivocarse al presentar el modelo 303 de IVA o 130 de IRPF.",
      "Recibir requerimientos de Hacienda y no saber cómo contestar.",
      "Perder bonificaciones (como la Tarifa Plana) por errores en el alta.",
    ],
    servicesTitle: "Tu cuota mensual incluye todo esto",
    servicesIntro: "Sin permanencia y con todo lo que necesitas para estar al día:",
    services: [
      { title: "Alta de autónomo GRATIS", text: "Si te quedas con nosotros, tramitamos tu alta en Hacienda y RETA sin coste." },
      { title: "Modelos Trimestrales", text: "Presentación puntual de todos los impuestos (IVA e IRPF)." },
      { title: "Resúmenes Anuales", text: "Modelo 390 y 190. Cierre fiscal del año incluido." },
      { title: "Declaración de la Renta", text: "Incluida en el pack anual. Revisamos todas las deducciones personales." },
      { title: "Libros Registro", text: "Llevamos tu contabilidad oficial obligatoria al día." },
      { title: "Asesor personal", text: "Tienes un experto asignado. No hablas con máquinas, hablas con personas." },
    ],
    processTitle: "¿Cómo funciona nuestra gestoría online?",
    processSteps: [
      { 
        icon: <Receipt className="h-5 w-5" />, 
        title: "1. Subes las facturas", 
        text: "Haz una foto o envía el PDF por email/app. No hace falta que vengas a la oficina." 
      },
      { 
        icon: <FileText className="h-5 w-5" />, 
        title: "2. Nosotros contabilizamos", 
        text: "Tu gestor revisa que el gasto sea deducible y lo procesa." 
      },
      { 
        icon: <CheckCircle2 className="h-5 w-5" />, 
        title: "3. Impuestos presentados", 
        text: "Te decimos cuánto pagarás antes del día 20 y lo cargamos en tu cuenta." 
      },
    ],
    ctaTitle: "¿Empezamos tu proyecto?",
    ctaText: "Tanto si quieres darte de alta como si quieres cambiar de gestor, te lo ponemos fácil.",
    ctaButton: "Hablamos ahora",
  },
  en: {
    heroKicker: "Freelancer Services in Spain",
    heroTitle: "Register as autonomous in 24h and forget the paperwork",
    heroSubtitle: "We manage your registration, quarterly taxes, and accounting 100% online. You focus on your business, we deal with the Tax Agency.",
    heroBadge: "Flat rate, no surprises",
    ctaPrimary: "I want to register",
    ctaSecondary: "I have questions",
    forWhomTitle: "Who do we work for?",
    forWhom: [
      {
        icon: <Rocket className="h-6 w-6" />,
        title: "New Entrepreneurs",
        text: "We help you capitalize unemployment, apply for the flat rate (Tarifa Plana), and register in one day.",
      },
      {
        icon: <Laptop className="h-6 w-6" />,
        title: "Digital Freelancers",
        text: "Developers, designers, marketing... We understand digital businesses, EU VAT invoices, and remote work.",
      },
      {
        icon: <User className="h-6 w-6" />,
        title: "Established Freelancers",
        text: "If you feel you are paying too much or your accountant doesn't respond, we switch your file for free.",
      },
    ],
    problemsTitle: "Being a freelancer is hard, taxes shouldn't be",
    problemsIntro: "The Spanish tax system is complex. We help you avoid common headaches:",
    problems: [
      "Not knowing which expenses are deductible (gas, electricity, meals...).",
      "Fear of making mistakes on VAT or Income Tax returns.",
      "Receiving notices from the Tax Agency and not knowing how to reply.",
      "Losing bonuses (like the Flat Rate) due to registration errors.",
    ],
    servicesTitle: "Your monthly fee includes all this",
    servicesIntro: "No long-term contract, everything you need to be compliant:",
    services: [
      { title: "FREE Registration", text: "If you stay with us, we process your Tax and Social Security registration for free." },
      { title: "Quarterly Returns", text: "Timely filing of all taxes (VAT and IRPF)." },
      { title: "Annual Summaries", text: "Fiscal year-end closing included." },
      { title: "Income Tax Return", text: "Included in the annual pack. We check all personal deductions." },
      { title: "Record Books", text: "We keep your mandatory official accounting up to date." },
      { title: "Personal Advisor", text: "You have an expert assigned. You speak to people, not bots." },
    ],
    processTitle: "How does our online service work?",
    processSteps: [
      { 
        icon: <Receipt className="h-5 w-5" />, 
        title: "1. Upload invoices", 
        text: "Take a photo or email the PDF. No need to visit the office." 
      },
      { 
        icon: <FileText className="h-5 w-5" />, 
        title: "2. We process", 
        text: "Your advisor checks if the expense is deductible and books it." 
      },
      { 
        icon: <CheckCircle2 className="h-5 w-5" />, 
        title: "3. Taxes filed", 
        text: "We tell you what you'll pay before the 20th and charge your account." 
      },
    ],
    ctaTitle: "Shall we start your project?",
    ctaText: "Whether you want to register or switch accountants, we make it easy.",
    ctaButton: "Let's talk",
  },
  fr: {
    heroKicker: "Gestion pour Indépendants (Autónomos)",
    heroTitle: "Devenez 'Autónomo' en 24h et oubliez la paperasse",
    heroSubtitle: "Nous gérons votre inscription, vos impôts trimestriels et votre comptabilité 100% en ligne.",
    heroBadge: "Tarif clair, sans surprise",
    ctaPrimary: "Je veux m'inscrire",
    ctaSecondary: "J'ai des questions",
    forWhomTitle: "Pour qui travaillons-nous ?",
    forWhom: [
      {
        icon: <Rocket className="h-6 w-6" />,
        title: "Nouveaux Entrepreneurs",
        text: "Nous vous aidons à demander le tarif réduit (Tarifa Plana) et à vous inscrire en une journée.",
      },
      {
        icon: <Laptop className="h-6 w-6" />,
        title: "Freelances Numériques",
        text: "Développeurs, designers... Nous comprenons les factures intracommunautaires et le télétravail.",
      },
      {
        icon: <User className="h-6 w-6" />,
        title: "Indépendants établis",
        text: "Si vous payez trop ou si votre gestionnaire ne répond pas, nous transférons votre dossier gratuitement.",
      },
    ],
    problemsTitle: "Être indépendant est difficile, la gestion ne devrait pas l'être",
    problemsIntro: "Le système fiscal espagnol est complexe. Nous vous évitons les soucis :",
    problems: [
      "Ne pas savoir quelles dépenses déduire (essence, électricité...).",
      "Peur de se tromper sur les déclarations de TVA ou IRPF.",
      "Recevoir des notifications du fisc et ne pas savoir répondre.",
      "Perdre des bonus par erreur d'inscription.",
    ],
    servicesTitle: "Votre forfait mensuel inclut",
    servicesIntro: "Sans engagement et avec tout ce qu'il faut :",
    services: [
      { title: "Inscription GRATUITE", text: "Nous traitons votre inscription fiscale et sociale sans frais." },
      { title: "Déclarations Trimestrielles", text: "Présentation ponctuelle de tous les impôts." },
      { title: "Récapitulatifs Annuels", text: "Clôture fiscale de l'année incluse." },
      { title: "Déclaration de Revenus", text: "Incluse dans le pack annuel." },
      { title: "Livres Comptables", text: "Nous tenons votre comptabilité officielle à jour." },
      { title: "Conseiller personnel", text: "Un expert assigné. Vous parlez à des humains." },
    ],
    processTitle: "Comment ça marche ?",
    processSteps: [
      { 
        icon: <Receipt className="h-5 w-5" />, 
        title: "1. Envoyez les factures", 
        text: "Photo ou email. Pas besoin de venir au bureau." 
      },
      { 
        icon: <FileText className="h-5 w-5" />, 
        title: "2. Nous comptabilisons", 
        text: "Votre gestionnaire vérifie et traite la dépense." 
      },
      { 
        icon: <CheckCircle2 className="h-5 w-5" />, 
        title: "3. Impôts présentés", 
        text: "Nous vous informons du montant avant le prélèvement." 
      },
    ],
    ctaTitle: "On commence ?",
    ctaText: "Que vous vouliez vous inscrire ou changer de gestionnaire, c'est facile.",
    ctaButton: "Parlons maintenant",
  },
  de: {
    heroKicker: "Steuerberatung für Selbstständige (Autónomos)",
    heroTitle: "Werden Sie in 24h 'Autónomo' ohne Papierkram",
    heroSubtitle: "Wir verwalten Ihre Anmeldung, Quartalssteuern und Buchhaltung 100% online.",
    heroBadge: "Pauschalpreis ohne Überraschungen",
    ctaPrimary: "Ich will mich anmelden",
    ctaSecondary: "Ich habe Fragen",
    forWhomTitle: "Für wen arbeiten wir?",
    forWhom: [
      {
        icon: <Rocket className="h-6 w-6" />,
        title: "Neue Unternehmer",
        text: "Wir helfen bei der 'Tarifa Plana' und der Anmeldung an einem Tag.",
      },
      {
        icon: <Laptop className="h-6 w-6" />,
        title: "Digitale Freelancer",
        text: "Programmierer, Designer... Wir verstehen EU-Rechnungen und Remote-Work.",
      },
      {
        icon: <User className="h-6 w-6" />,
        title: "Etablierte Selbstständige",
        text: "Wir übernehmen Ihre Akte kostenlos, wenn Sie wechseln möchten.",
      },
    ],
    problemsTitle: "Selbstständig sein ist schwer, Steuern nicht",
    problemsIntro: "Das spanische Steuersystem ist komplex. Wir vermeiden Probleme:",
    problems: [
      "Nicht wissen, welche Ausgaben absetzbar sind.",
      "Angst vor Fehlern bei der MwSt.-Erklärung.",
      "Briefe vom Finanzamt nicht verstehen.",
      "Verlust von Boni durch Anmeldungsfehler.",
    ],
    servicesTitle: "Ihr monatlicher Beitrag beinhaltet",
    servicesIntro: "Ohne Bindung und alles inklusive:",
    services: [
      { title: "KOSTENLOSE Anmeldung", text: "Wir erledigen die Anmeldung beim Finanzamt und Sozialversicherung." },
      { title: "Quartalserklärungen", text: "Pünktliche Einreichung aller Steuern." },
      { title: "Jahreszusammenfassungen", text: "Steuerlicher Jahresabschluss inklusive." },
      { title: "Einkommensteuer", text: "Im Jahrespacket enthalten." },
      { title: "Buchführungsbücher", text: "Wir führen Ihre offiziellen Bücher." },
      { title: "Persönlicher Berater", text: "Ein fester Experte für Sie." },
    ],
    processTitle: "Wie funktioniert es online?",
    processSteps: [
      { 
        icon: <Receipt className="h-5 w-5" />, 
        title: "1. Rechnungen senden", 
        text: "Foto oder E-Mail. Kein Bürobesuch nötig." 
      },
      { 
        icon: <FileText className="h-5 w-5" />, 
        title: "2. Wir buchen", 
        text: "Ihr Berater prüft und verarbeitet die Ausgaben." 
      },
      { 
        icon: <CheckCircle2 className="h-5 w-5" />, 
        title: "3. Steuern eingereicht", 
        text: "Wir informieren Sie vor der Abbuchung über den Betrag." 
      },
    ],
    ctaTitle: "Starten wir?",
    ctaText: "Egal ob Neuanmeldung oder Wechsel, wir machen es einfach.",
    ctaButton: "Jetzt sprechen",
  },
} as const

export default function AutonomsServicePage() {
  const [locale, setLocale] = useState<Locale>(DEFAULT_LOCALE)

  useEffect(() => {
    const saved = window.localStorage.getItem("locale") as Locale | null
    if (saved && saved !== locale) setLocale(saved)
  }, [])

  const handleLocaleChange = (next: Locale) => {
    setLocale(next)
    window.localStorage.setItem("locale", next)
  }

  const base = autonomsCopy[locale] ?? autonomsCopy["ca"]
  const c = base ?? autonomsCopy["en"]

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header locale={locale} onLocaleChange={handleLocaleChange} />

      <main className="flex-1">
        {/* HERO SECTION */}
        <section className="py-20 md:py-32 bg-primary text-primary-foreground relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-orange-500/20 via-primary to-primary opacity-100" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md mb-6 border border-white/20">
                <Rocket className="h-4 w-4 text-orange-400" />
                <span className="text-xs md:text-sm font-semibold uppercase tracking-wider">{c.heroKicker}</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance leading-tight">
                {c.heroTitle}
              </h1>
              
              <p className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed mb-8 text-pretty max-w-2xl">
                {c.heroSubtitle}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600 text-white font-semibold text-base h-12 px-8 shadow-lg shadow-orange-500/20">
                  <Link href="/contacte">
                    {c.ctaPrimary}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white/30 bg-white/5 text-white hover:bg-white/10 hover:text-white h-12 px-8">
                   <Link href="/contacte">
                    <Phone className="mr-2 h-4 w-4" />
                    {c.ctaSecondary}
                  </Link>
                </Button>
              </div>

              <div className="inline-flex items-center gap-2 text-sm font-medium text-primary-foreground/80">
                <PiggyBank className="h-5 w-5 text-orange-300" />
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
                <div key={idx} className="group p-8 rounded-2xl bg-card border border-border/50 hover:border-orange-500/30 hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
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
                  REALITAT
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
                 <Headphones className="w-24 h-24 text-primary/20 mb-6" />
                 <p className="text-muted-foreground italic">
                   "Tens un gestor personal assignat. S'ha acabat parlar amb màquines."
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
                    <CheckCircle2 className="h-5 w-5 text-orange-500" />
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
                   <div className="w-14 h-14 rounded-full bg-orange-500 text-white flex items-center justify-center mb-6 shadow-lg">
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
            <div className="bg-orange-50/50 dark:bg-orange-950/20 rounded-3xl p-8 md:p-16 text-center border border-orange-100 dark:border-orange-900 max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">{c.ctaTitle}</h2>
              <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">{c.ctaText}</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600 text-white h-14 px-10 text-lg w-full sm:w-auto">
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
