import type { Locale } from "@/lib/i18n"

export interface BlogPost {
  slug: string
  title: Record<Locale, string>
  excerpt: Record<Locale, string>
  content: Record<Locale, string>
  category: string
  categoryLabel: Record<Locale, string>
  date: string
  image: string
  author: string
  readTime: string
}

export const blogPosts: BlogPost[] = [
  {
    slug: "alta-autonom",
    title: {
      ca: "Com donar-te d'alta d'autònom pas a pas",
      es: "Cómo darse de alta como autónomo paso a paso",
      en: "How to register as a freelancer step by step",
      fr: "Comment s'inscrire en tant qu'indépendant étape par étape",
      de: "Wie man sich Schritt für Schritt als Freiberufler anmeldet",
    },
    excerpt: {
      ca: "Guia completa amb tots els passos per donar-te d'alta com a treballador autònom a Espanya el 2024. Des dels tràmits a Hisenda fins a la Seguretat Social.",
      es: "Guía completa con todos los pasos para darte de alta como trabajador autónomo en España en 2024. Desde los trámites en Hacienda hasta la Seguridad Social.",
      en: "Complete guide with all the steps to register as a self-employed worker in Spain in 2024. From Tax Agency procedures to Social Security.",
      fr: "Guide complet avec toutes les étapes pour s'inscrire en tant que travailleur indépendant en Espagne en 2024.",
      de: "Vollständige Anleitung mit allen Schritten zur Anmeldung als Selbstständiger in Spanien 2024.",
    },
    content: {
      ca: `
## Què necessites per donar-te d'alta d'autònom?

Donar-te d'alta com a autònom és un procés que requereix diversos tràmits tant a Hisenda com a la Seguretat Social. En aquesta guia t'expliquem tots els passos.

### 1. Alta a Hisenda (Model 036/037)

El primer pas és donar-te d'alta al cens d'empresaris a través del model 036 (general) o 037 (simplificat). En aquest formulari hauràs d'indicar:

- Les teves dades personals i d'activitat
- L'epígraf de l'IAE corresponent a la teva activitat
- El règim d'IVA que aplicaràs
- La data d'inici de l'activitat

### 2. Alta a la Seguretat Social (RETA)

Un cop feta l'alta a Hisenda, tens 30 dies per donar-te d'alta al Règim Especial de Treballadors Autònoms (RETA). Pots fer-ho:

- Online a través de la seu electrònica de la Seguretat Social
- Presencialment a les oficines de la Tresoreria General

### 3. Quota d'autònoms 2024

La quota d'autònoms es calcula segons els rendiments nets. Per a nous autònoms existeix la tarifa plana:

- **Primers 12 mesos**: 80€/mes
- **Mesos 13-24**: Reducció progressiva

### Tens dubtes? T'ajudem

A Albiol Consultors ens encarreguem de tots els tràmits perquè puguis començar el teu negoci sense preocupacions. Contacta amb nosaltres per a una consulta gratuïta.
      `,
      es: `
## ¿Qué necesitas para darte de alta como autónomo?

Darse de alta como autónomo es un proceso que requiere varios trámites tanto en Hacienda como en la Seguridad Social. En esta guía te explicamos todos los pasos.

### 1. Alta en Hacienda (Modelo 036/037)

El primer paso es darte de alta en el censo de empresarios a través del modelo 036 (general) o 037 (simplificado). En este formulario deberás indicar:

- Tus datos personales y de actividad
- El epígrafe del IAE correspondiente a tu actividad
- El régimen de IVA que aplicarás
- La fecha de inicio de la actividad

### 2. Alta en la Seguridad Social (RETA)

Una vez hecha el alta en Hacienda, tienes 30 días para darte de alta en el Régimen Especial de Trabajadores Autónomos (RETA). Puedes hacerlo:

- Online a través de la sede electrónica de la Seguridad Social
- Presencialmente en las oficinas de la Tesorería General

### 3. Cuota de autónomos 2024

La cuota de autónomos se calcula según los rendimientos netos. Para nuevos autónomos existe la tarifa plana:

- **Primeros 12 meses**: 80€/mes
- **Meses 13-24**: Reducción progresiva

### ¿Tienes dudas? Te ayudamos

En Albiol Consultors nos encargamos de todos los trámites para que puedas empezar tu negocio sin preocupaciones. Contacta con nosotros para una consulta gratuita.
      `,
      en: `
## What do you need to register as a freelancer?

Registering as a freelancer is a process that requires several procedures with both the Tax Agency and Social Security. In this guide we explain all the steps.

### 1. Tax Agency Registration (Form 036/037)

The first step is to register in the business census through form 036 (general) or 037 (simplified). In this form you must indicate:

- Your personal and activity details
- The IAE heading corresponding to your activity
- The VAT regime you will apply
- The start date of the activity

### 2. Social Security Registration (RETA)

Once registered with the Tax Agency, you have 30 days to register with the Special Regime for Self-Employed Workers (RETA). You can do this:

- Online through the Social Security electronic headquarters
- In person at the General Treasury offices

### 3. Freelancer contributions 2024

The freelancer contribution is calculated based on net income. For new freelancers there is a flat rate:

- **First 12 months**: €80/month
- **Months 13-24**: Progressive reduction

### Have questions? We'll help

At Albiol Consultors we take care of all the paperwork so you can start your business worry-free. Contact us for a free consultation.
      `,
      fr: "Guide complet pour s'inscrire en tant qu'indépendant en Espagne...",
      de: "Vollständige Anleitung zur Anmeldung als Freiberufler in Spanien...",
    },
    category: "autonoms",
    categoryLabel: {
      ca: "Autònoms",
      es: "Autónomos",
      en: "Freelancers",
      fr: "Indépendants",
      de: "Freiberufler",
    },
    date: "2024-11-15",
    image: "/freelancer-registration-documents-paperwork-office.jpg",
    author: "Albiol Consultors",
    readTime: "5 min",
  },
  {
    slug: "declaracio-renda",
    title: {
      ca: "Guia bàsica per preparar la declaració de la renda",
      es: "Guía básica para preparar la declaración de la renta",
      en: "Basic guide to preparing your income tax return",
      fr: "Guide de base pour préparer votre déclaration d'impôts",
      de: "Grundlegender Leitfaden zur Vorbereitung Ihrer Steuererklärung",
    },
    excerpt: {
      ca: "Tot el que necessites saber per fer la teva declaració de la renda sense errors. Deduccions, terminis i consells pràctics.",
      es: "Todo lo que necesitas saber para hacer tu declaración de la renta sin errores. Deducciones, plazos y consejos prácticos.",
      en: "Everything you need to know to file your income tax return without errors. Deductions, deadlines and practical tips.",
      fr: "Tout ce que vous devez savoir pour déposer votre déclaration d'impôts sans erreurs.",
      de: "Alles, was Sie wissen müssen, um Ihre Steuererklärung fehlerfrei einzureichen.",
    },
    content: {
      ca: `
## Com preparar la teva declaració de la renda

La campanya de la renda és un dels moments més importants de l'any fiscal. Preparar-la bé pot estalviar-te diners i problemes.

### Documentació necessària

Abans de començar, assegura't de tenir:

- DNI o NIE
- Certificat de retencions de la feina
- Dades de préstecs hipotecaris
- Rebuts de donacions
- Factures de reformes (si escau)

### Deduccions més habituals

- **Hipoteca**: Si la vas contractar abans del 2013
- **Donacions**: A entitats sense ànim de lucre
- **Plans de pensions**: Fins a 1.500€ anuals
- **Quota sindical**: 100% deduïble

### Terminis 2024

La campanya de la renda 2024 (exercici 2023) va del 3 d'abril al 1 de juliol.

### Necessites ajuda?

A Albiol Consultors revisem la teva declaració i t'ajudem a aprofitar totes les deduccions possibles.
      `,
      es: `
## Cómo preparar tu declaración de la renta

La campaña de la renta es uno de los momentos más importantes del año fiscal. Prepararla bien puede ahorrarte dinero y problemas.

### Documentación necesaria

Antes de empezar, asegúrate de tener:

- DNI o NIE
- Certificado de retenciones del trabajo
- Datos de préstamos hipotecarios
- Recibos de donaciones
- Facturas de reformas (si procede)

### Deducciones más habituales

- **Hipoteca**: Si la contrataste antes de 2013
- **Donaciones**: A entidades sin ánimo de lucro
- **Planes de pensiones**: Hasta 1.500€ anuales
- **Cuota sindical**: 100% deducible

### Plazos 2024

La campaña de la renta 2024 (ejercicio 2023) va del 3 de abril al 1 de julio.

### ¿Necesitas ayuda?

En Albiol Consultors revisamos tu declaración y te ayudamos a aprovechar todas las deducciones posibles.
      `,
      en: `Basic guide for income tax return...`,
      fr: `Guide de base pour la déclaration d'impôts...`,
      de: `Grundlegender Leitfaden zur Steuererklärung...`,
    },
    category: "fiscal",
    categoryLabel: {
      ca: "Fiscal",
      es: "Fiscal",
      en: "Tax",
      fr: "Fiscal",
      de: "Steuer",
    },
    date: "2024-11-08",
    image: "/tax-declaration-calculator-documents-finance.jpg",
    author: "Albiol Consultors",
    readTime: "4 min",
  },
  {
    slug: "errors-nomines",
    title: {
      ca: "Errors freqüents en la gestió de nòmines",
      es: "Errores frecuentes en la gestión de nóminas",
      en: "Common payroll management mistakes",
      fr: "Erreurs fréquentes dans la gestion des salaires",
      de: "Häufige Fehler bei der Gehaltsabrechnung",
    },
    excerpt: {
      ca: "Descobreix els errors més habituals que cometen les pimes en la gestió de nòmines i com evitar-los per no tenir problemes amb la Seguretat Social.",
      es: "Descubre los errores más habituales que cometen las pymes en la gestión de nóminas y cómo evitarlos para no tener problemas con la Seguridad Social.",
      en: "Discover the most common mistakes SMEs make in payroll management and how to avoid them to prevent Social Security issues.",
      fr: "Découvrez les erreurs les plus courantes des PME dans la gestion des salaires.",
      de: "Entdecken Sie die häufigsten Fehler von KMU bei der Gehaltsabrechnung.",
    },
    content: {
      ca: `
## Els errors de nòmines més comuns

La gestió de nòmines és una de les tasques més delicades per a qualsevol empresa. Un error pot suposar sancions i problemes amb els treballadors.

### 1. No actualitzar les bases de cotització

Cada any es publiquen noves bases de cotització. No actualitzar-les pot generar errors en les nòmines i problemes amb la Seguretat Social.

### 2. Errors en les retencions d'IRPF

El percentatge de retenció depèn de la situació personal del treballador. Cal revisar-lo periòdicament.

### 3. No incloure tots els conceptes

Hores extres, plus de transport, dietes... tots els conceptes han d'aparèixer correctament a la nòmina.

### 4. Terminis de pagament

La nòmina s'ha de pagar dins del mes natural. Retards continuats poden ser motiu de denúncia.

### Evita problemes

A Albiol Consultors ens encarreguem de la gestió de nòmines de la teva empresa amb total garantia.
      `,
      es: `
## Los errores de nóminas más comunes

La gestión de nóminas es una de las tareas más delicadas para cualquier empresa. Un error puede suponer sanciones y problemas con los trabajadores.

### 1. No actualizar las bases de cotización

Cada año se publican nuevas bases de cotización. No actualizarlas puede generar errores en las nóminas y problemas con la Seguridad Social.

### 2. Errores en las retenciones de IRPF

El porcentaje de retención depende de la situación personal del trabajador. Hay que revisarlo periódicamente.

### 3. No incluir todos los conceptos

Horas extras, plus de transporte, dietas... todos los conceptos deben aparecer correctamente en la nómina.

### 4. Plazos de pago

La nómina debe pagarse dentro del mes natural. Retrasos continuados pueden ser motivo de denuncia.

### Evita problemas

En Albiol Consultors nos encargamos de la gestión de nóminas de tu empresa con total garantía.
      `,
      en: `Common payroll mistakes guide...`,
      fr: `Erreurs courantes de paie...`,
      de: `Häufige Fehler bei der Gehaltsabrechnung...`,
    },
    category: "laboral",
    categoryLabel: {
      ca: "Laboral",
      es: "Laboral",
      en: "Labour",
      fr: "Social",
      de: "Arbeit",
    },
    date: "2024-11-01",
    image: "/payroll-management-hr-documents-salary.jpg",
    author: "Albiol Consultors",
    readTime: "6 min",
  },
  {
    slug: "novetats-fiscals-2024",
    title: {
      ca: "Novetats fiscals 2024 per a empreses i autònoms",
      es: "Novedades fiscales 2024 para empresas y autónomos",
      en: "Tax updates 2024 for businesses and freelancers",
      fr: "Nouveautés fiscales 2024 pour entreprises et indépendants",
      de: "Steuerliche Neuerungen 2024 für Unternehmen und Freiberufler",
    },
    excerpt: {
      ca: "Totes les novetats fiscals que afecten empreses i autònoms el 2024. Canvis en IVA, IRPF, Impost de Societats i més.",
      es: "Todas las novedades fiscales que afectan a empresas y autónomos en 2024. Cambios en IVA, IRPF, Impuesto de Sociedades y más.",
      en: "All tax updates affecting businesses and freelancers in 2024. Changes in VAT, Income Tax, Corporate Tax and more.",
      fr: "Toutes les nouveautés fiscales affectant les entreprises et indépendants en 2024.",
      de: "Alle steuerlichen Neuerungen für Unternehmen und Freiberufler 2024.",
    },
    content: {
      ca: `Novetats fiscals 2024...`,
      es: `Novedades fiscales 2024...`,
      en: `Tax updates 2024...`,
      fr: `Nouveautés fiscales 2024...`,
      de: `Steuerliche Neuerungen 2024...`,
    },
    category: "fiscal",
    categoryLabel: {
      ca: "Fiscal",
      es: "Fiscal",
      en: "Tax",
      fr: "Fiscal",
      de: "Steuer",
    },
    date: "2024-10-25",
    image: "/tax-law-changes-documents-legislation.jpg",
    author: "Albiol Consultors",
    readTime: "7 min",
  },
  {
    slug: "constitucio-societat",
    title: {
      ca: "Com constituir una societat limitada a Tortosa",
      es: "Cómo constituir una sociedad limitada en Tortosa",
      en: "How to set up a limited company in Tortosa",
      fr: "Comment créer une SARL à Tortosa",
      de: "So gründen Sie eine GmbH in Tortosa",
    },
    excerpt: {
      ca: "Passos per constituir una SL a Tortosa: capital mínim, estatuts, notaria i registre mercantil. Tot el que necessites saber.",
      es: "Pasos para constituir una SL en Tortosa: capital mínimo, estatutos, notaría y registro mercantil. Todo lo que necesitas saber.",
      en: "Steps to set up an Ltd in Tortosa: minimum capital, bylaws, notary and commercial registry. Everything you need to know.",
      fr: "Étapes pour créer une SARL à Tortosa...",
      de: "Schritte zur Gründung einer GmbH in Tortosa...",
    },
    content: {
      ca: `Com constituir una SL...`,
      es: `Cómo constituir una SL...`,
      en: `How to set up a limited company...`,
      fr: `Comment créer une SARL...`,
      de: `So gründen Sie eine GmbH...`,
    },
    category: "mercantil",
    categoryLabel: {
      ca: "Mercantil",
      es: "Mercantil",
      en: "Corporate",
      fr: "Société",
      de: "Gesellschaft",
    },
    date: "2024-10-18",
    image: "/company-formation-business-startup-office.jpg",
    author: "Albiol Consultors",
    readTime: "8 min",
  },
]

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug)
}

export function getBlogPosts(): BlogPost[] {
  return blogPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getBlogPostsByCategory(category: string): BlogPost[] {
  return blogPosts.filter((post) => post.category === category)
}

export const categories = [
  { id: "all", label: { ca: "Tots", es: "Todos", en: "All", fr: "Tous", de: "Alle" } },
  { id: "fiscal", label: { ca: "Fiscal", es: "Fiscal", en: "Tax", fr: "Fiscal", de: "Steuer" } },
  { id: "laboral", label: { ca: "Laboral", es: "Laboral", en: "Labour", fr: "Social", de: "Arbeit" } },
  {
    id: "autonoms",
    label: { ca: "Autònoms", es: "Autónomos", en: "Freelancers", fr: "Indépendants", de: "Freiberufler" },
  },
  { id: "mercantil", label: { ca: "Mercantil", es: "Mercantil", en: "Corporate", fr: "Société", de: "Gesellschaft" } },
]
