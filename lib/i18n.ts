export type Locale = "ca" | "es" | "en" | "fr" | "de"

export const locales: Locale[] = ["ca", "es", "en", "fr", "de"]
export const defaultLocale: Locale = "ca"

export const translations = {
  ca: {
    nav: {
      home: "Inici",
      services: "Serveis",
      blog: "Blog",
      about: "Qui som",
      contact: "Contacte",
    },
    hero: {
      title: "Gestoria i assessoria fiscal, laboral i comptable a Tortosa",
      subtitle:
        "Albiol Consultors és el teu soci de confiança per a la gestió integral del teu negoci. Servei proper, professional i adaptat a les teves necessitats.",
      cta1: "Demana una primera trucada",
      cta2: "Envia'ns la teva consulta",
    },
    services: {
      title: "Els nostres serveis",
      subtitle: "Solucions integrals per a empreses, autònoms i particulars",
      fiscal: {
        title: "Assessoria Fiscal",
        desc: "Gestió d'IVA, IRPF, Impost de Societats i planificació fiscal per optimitzar la teva càrrega tributària.",
      },
      laboral: {
        title: "Assessoria Laboral",
        desc: "Nòmines, contractes, Seguretat Social i tot el que necessites per gestionar el teu equip.",
      },
      comptable: {
        title: "Comptabilitat",
        desc: "Comptabilitat general, balanços, comptes anuals i informes financers per a la teva empresa.",
      },
      mercantil: {
        title: "Mercantil i Societari",
        desc: "Constitució de societats, modificacions estatutàries i assessorament jurídic empresarial.",
      },
      autonoms: {
        title: "Gestoria per a Autònoms",
        desc: "Alta d'autònoms, declaracions trimestrals i assessorament personalitzat per al teu negoci.",
      },
      tramits: {
        title: "Tràmits Administratius",
        desc: "Gestió de vehicles, trànsit, llicències, certificats i tràmits amb l'administració pública.",
      },
    },
    why: {
      title: "Per què Albiol Consultors?",
      local: {
        title: "Coneixement Local",
        desc: "Més de 20 anys d'experiència a Tortosa i les Terres de l'Ebre.",
      },
      digital: {
        title: "Processos Digitals",
        desc: "Gestió online i presencial per adaptar-nos a les teves necessitats.",
      },
      clarity: {
        title: "Comunicació Clara",
        desc: "T'expliquem tot en un llenguatge senzill i proper.",
      },
      specialized: {
        title: "Especialització",
        desc: "Experts en pimes i autònoms del territori.",
      },
    },
    segments: {
      sectionKicker: "A qui ens dirigim",
      sectionTitle: "Solucions per a cada necessitat",
      empreses: {
        title: "Empreses i PIMES",
        desc: "Assessorament integral per al dia a dia fiscal, laboral i comptable de la teva empresa.",
        cta: "Serveis per a empreses",
      },
      autonoms: {
        title: "Autònoms i professionals",
        desc: "Ens ocupem de les teves obligacions fiscals i administratives perquè et centris en la teva activitat.",
        cta: "Serveis per a autònoms",
      },
      particulars: {
        title: "Particulars i famílies",
        desc: "Renda, herències, successions i altres tràmits personals amb un tracte proper.",
        cta: "Serveis per a particulars",
      },
    },
    blog: {
      title: "Últimes notícies",
      subtitle: "Actualitat fiscal, laboral i empresarial",
      readMore: "Llegir més",
    },
    testimonials: {
      title: "Què diuen els nostres clients",
    },
    cta: {
      title: "Comença avui mateix",
      subtitle: "Contacta amb nosaltres i descobreix com podem ajudar-te",
      button: "Contacta'ns",
    },
    footer: {
      newsletter: {
        title: "Subscriu-te al nostre butlletí",
        description: "Rep les últimes novetats fiscals i laborals directament al teu correu.",
        placeholder: "El teu email",
        subscribed: "Subscrit!",
      },
      brandDescription:
        "Gestoria i assessoria fiscal, laboral i comptable a Tortosa. Més de 20 anys al servei de les Terres de l'Ebre.",
      legalTitle: "Legal",
      rights: "Tots els drets reservats",
      privacy: "Política de privacitat",
      legal: "Avís legal",
      cookies: "Cookies",
      languageLabel: "Idioma",
      contactCta: "Contacta'ns",
    },
    contact: {
      title: "Contacta amb Albiol Consultors",
      subtitle: "Explica'ns què necessites i t'oferirem una resposta clara i adaptada al teu negoci.",
      formTitle: "Envia'ns la teva consulta",
      form: {
        name: "Nom i cognoms",
        email: "Correu electrònic",
        phone: "Telèfon",
        type: "Tipus de consulta",
        message: "Missatge",
        submit: "Enviar consulta",
        companyLabel: "Empresa (opcional)",
        companyPlaceholder: "Nom de l'empresa",
        privacy: "Accepto la política de privacitat i el tractament de les meves dades.",
        types: {
          fiscal: "Fiscal i tributària",
          laboral: "Laboral i nòmines",
          comptable: "Comptable i finances",
          autonoms: "Autònoms i professionals",
          altres: "Altres consultes",
        },
      },
      success: {
        title: "Missatge enviat!",
        body: "Ens posarem en contacte amb tu el més aviat possible.",
      },
      infoTitle: "Informació de contacte",
      info: {
        address: "Adreça",
        phone: "Telèfon",
        email: "Correu electrònic",
        hours: "Horari d'atenció",
      },
      call: {
        title: "Prefereixes una trucada?",
        body: "Truca'ns i et resoldrem els dubtes al moment.",
        cta: "Truca'ns ara",
        weekdays: "Dilluns - Divendres",
      },
    },
    about: {
      title: "Qui som",
      subtitle: "Coneix l'equip d'Albiol Consultors",
      history: "La nostra història",
      values: "Els nostres valors",
      team: "L'equip",
    },
    whatsapp: {
      tooltip: "Parla amb nosaltres per WhatsApp",
      greeting: "Hola! Com et podem ajudar?",
    },
  },
  es: {
    nav: {
      home: "Inicio",
      services: "Servicios",
      blog: "Blog",
      about: "Quiénes somos",
      contact: "Contacto",
    },
    hero: {
      title: "Gestoría y asesoría fiscal, laboral y contable en Tortosa",
      subtitle:
        "Albiol Consultors es tu socio de confianza para la gestión integral de tu negocio. Servicio cercano, profesional y adaptado a tus necesidades.",
      cta1: "Solicita una primera llamada",
      cta2: "Envíanos tu consulta",
    },
    services: {
      title: "Nuestros servicios",
      subtitle: "Soluciones integrales para empresas, autónomos y particulares",
      fiscal: {
        title: "Asesoría Fiscal",
        desc: "Gestión de IVA, IRPF, Impuesto de Sociedades y planificación fiscal para optimizar tu carga tributaria.",
      },
      laboral: {
        title: "Asesoría Laboral",
        desc: "Nóminas, contratos, Seguridad Social y todo lo que necesitas para gestionar tu equipo.",
      },
      comptable: {
        title: "Contabilidad",
        desc: "Contabilidad general, balances, cuentas anuales e informes financieros para tu empresa.",
      },
      mercantil: {
        title: "Mercantil y Societario",
        desc: "Constitución de sociedades, modificaciones estatutarias y asesoramiento jurídico empresarial.",
      },
      autonoms: {
        title: "Gestoría para Autónomos",
        desc: "Alta de autónomos, declaraciones trimestrales y asesoramiento personalizado para tu negocio.",
      },
      tramits: {
        title: "Trámites Administrativos",
        desc: "Gestión de vehículos, tráfico, licencias, certificados y trámites con la administración pública.",
      },
    },
    why: {
      title: "¿Por qué Albiol Consultors?",
      local: {
        title: "Conocimiento Local",
        desc: "Más de 20 años de experiencia en Tortosa y las Terres de l'Ebre.",
      },
      digital: {
        title: "Procesos Digitales",
        desc: "Gestión online y presencial para adaptarnos a tus necesidades.",
      },
      clarity: {
        title: "Comunicación Clara",
        desc: "Te explicamos todo en un lenguaje sencillo y cercano.",
      },
      specialized: {
        title: "Especialización",
        desc: "Expertos en pymes y autónomos del territorio.",
      },
    },
    segments: {
      sectionKicker: "A quién nos dirigimos",
      sectionTitle: "Soluciones para cada necesidad",
      empreses: {
        title: "Empresas y PYMES",
        desc: "Asesoramiento integral para el día a día fiscal, laboral y contable de tu empresa.",
        cta: "Servicios para empresas",
      },
      autonoms: {
        title: "Autónomos y profesionales",
        desc: "Nos ocupamos de tus obligaciones fiscales y administrativas para que te centres en tu actividad.",
        cta: "Servicios para autónomos",
      },
      particulars: {
        title: "Particulares y familias",
        desc: "Renta, herencias, sucesiones y otros trámites personales con un trato cercano.",
        cta: "Servicios para particulares",
      },
    },
    blog: {
      title: "Últimas noticias",
      subtitle: "Actualidad fiscal, laboral y empresarial",
      readMore: "Leer más",
    },
    testimonials: {
      title: "Qué dicen nuestros clientes",
    },
    cta: {
      title: "Empieza hoy mismo",
      subtitle: "Contacta con nosotros y descubre cómo podemos ayudarte",
      button: "Contáctanos",
    },
    footer: {
      newsletter: {
        title: "Suscríbete a nuestro boletín",
        description: "Recibe las últimas novedades fiscales y laborales directamente en tu correo.",
        placeholder: "Tu email",
        subscribed: "¡Suscrito!",
      },
      brandDescription:
        "Gestoría y asesoría fiscal, laboral y contable en Tortosa. Más de 20 años al servicio de las Terres de l'Ebre.",
      legalTitle: "Legal",
      rights: "Todos los derechos reservados",
      privacy: "Política de privacidad",
      legal: "Aviso legal",
      cookies: "Cookies",
      languageLabel: "Idioma",
      contactCta: "Contáctanos",
    },
    contact: {
      title: "Contacta con Albiol Consultors",
      subtitle: "Cuéntanos qué necesitas y te ofreceremos una respuesta clara y adaptada a tu negocio.",
      formTitle: "Envíanos tu consulta",
      form: {
        name: "Nombre y apellidos",
        email: "Correo electrónico",
        phone: "Teléfono",
        type: "Tipo de consulta",
        message: "Mensaje",
        submit: "Enviar consulta",
        companyLabel: "Empresa (opcional)",
        companyPlaceholder: "Nombre de la empresa",
        privacy: "Acepto la política de privacidad y el tratamiento de mis datos.",
        types: {
          fiscal: "Fiscal y tributaria",
          laboral: "Laboral y nóminas",
          comptable: "Contable y finanzas",
          autonoms: "Autónomos y profesionales",
          altres: "Otras consultas",
        },
      },
      success: {
        title: "¡Mensaje enviado!",
        body: "Nos pondremos en contacto contigo lo antes posible.",
      },
      infoTitle: "Información de contacto",
      info: {
        address: "Dirección",
        phone: "Teléfono",
        email: "Correo electrónico",
        hours: "Horario de atención",
      },
      call: {
        title: "¿Prefieres una llamada?",
        body: "Llámanos y te resolveremos las dudas al momento.",
        cta: "Llámanos ahora",
        weekdays: "Lunes - Viernes",
      },
    },
    about: {
      title: "Quiénes somos",
      subtitle: "Conoce al equipo de Albiol Consultors",
      history: "Nuestra historia",
      values: "Nuestros valores",
      team: "El equipo",
    },
    whatsapp: {
      tooltip: "Habla con nosotros por WhatsApp",
      greeting: "¡Hola! ¿Cómo podemos ayudarte?",
    },
  },
  en: {
    nav: {
      home: "Home",
      services: "Services",
      blog: "Blog",
      about: "About Us",
      contact: "Contact",
    },
    hero: {
      title: "Tax, Labour and Accounting Advisory in Tortosa",
      subtitle:
        "Albiol Consultors is your trusted partner for comprehensive business management. Professional, personalised service adapted to your needs.",
      cta1: "Request a first call",
      cta2: "Send us your enquiry",
    },
    services: {
      title: "Our Services",
      subtitle: "Comprehensive solutions for businesses, freelancers and individuals",
      fiscal: {
        title: "Tax Advisory",
        desc: "VAT, income tax, corporate tax management and fiscal planning to optimise your tax burden.",
      },
      laboral: {
        title: "Labour Advisory",
        desc: "Payroll, contracts, Social Security and everything you need to manage your team.",
      },
      comptable: {
        title: "Accounting",
        desc: "General accounting, balance sheets, annual accounts and financial reports for your company.",
      },
      mercantil: {
        title: "Corporate Advisory",
        desc: "Company formation, statutory changes and business legal advice.",
      },
      autonoms: {
        title: "Freelancer Services",
        desc: "Freelancer registration, quarterly declarations and personalised advice for your business.",
      },
      tramits: {
        title: "Administrative Services",
        desc: "Vehicle management, traffic, licences, certificates and dealings with public administration.",
      },
    },
    why: {
      title: "Why Albiol Consultors?",
      local: {
        title: "Local Knowledge",
        desc: "Over 20 years of experience in Tortosa and Terres de l'Ebre.",
      },
      digital: {
        title: "Digital Processes",
        desc: "Online and in-person management to adapt to your needs.",
      },
      clarity: {
        title: "Clear Communication",
        desc: "We explain everything in simple, accessible language.",
      },
      specialized: {
        title: "Specialisation",
        desc: "Experts in SMEs and freelancers in the region.",
      },
    },
    segments: {
      sectionKicker: "Who we serve",
      sectionTitle: "Solutions for every need",
      empreses: {
        title: "Companies & SMEs",
        desc: "Comprehensive advisory for your day-to-day tax, labour and accounting needs.",
        cta: "Services for companies",
      },
      autonoms: {
        title: "Freelancers & professionals",
        desc: "We handle your tax and administrative duties so you can focus on your work.",
        cta: "Services for freelancers",
      },
      particulars: {
        title: "Individuals & families",
        desc: "Income tax, inheritances and other personal procedures with a close, friendly approach.",
        cta: "Services for individuals",
      },
    },
    blog: {
      title: "Latest News",
      subtitle: "Tax, labour and business updates",
      readMore: "Read more",
    },
    testimonials: {
      title: "What our clients say",
    },
    cta: {
      title: "Start today",
      subtitle: "Contact us and discover how we can help you",
      button: "Contact us",
    },
    footer: {
      newsletter: {
        title: "Subscribe to our newsletter",
        description: "Get the latest tax and labour news directly in your inbox.",
        placeholder: "Your email",
        subscribed: "Subscribed!",
      },
      brandDescription: "Tax, labour and accounting advisory in Tortosa. Over 20 years serving Terres de l'Ebre.",
      legalTitle: "Legal",
      rights: "All rights reserved",
      privacy: "Privacy Policy",
      legal: "Legal Notice",
      cookies: "Cookies",
      languageLabel: "Language",
      contactCta: "Contact us",
    },
    contact: {
      title: "Contact Albiol Consultors",
      subtitle: "Tell us what you need and we will provide a clear response tailored to your business.",
      formTitle: "Send us your enquiry",
      form: {
        name: "Full name",
        email: "Email address",
        phone: "Phone",
        type: "Type of enquiry",
        message: "Message",
        submit: "Send enquiry",
        companyLabel: "Company (optional)",
        companyPlaceholder: "Company name",
        privacy: "I accept the privacy policy and the processing of my personal data.",
        types: {
          fiscal: "Tax advisory",
          laboral: "Labour & payroll",
          comptable: "Accounting & finance",
          autonoms: "Freelancers & professionals",
          altres: "Other enquiries",
        },
      },
      success: {
        title: "Message sent!",
        body: "We will contact you as soon as possible.",
      },
      infoTitle: "Contact information",
      info: {
        address: "Address",
        phone: "Phone",
        email: "Email",
        hours: "Opening hours",
      },
      call: {
        title: "Prefer a call?",
        body: "Call us and we'll answer your questions right away.",
        cta: "Call us now",
        weekdays: "Monday - Friday",
      },
    },
    about: {
      title: "About Us",
      subtitle: "Meet the Albiol Consultors team",
      history: "Our history",
      values: "Our values",
      team: "The team",
    },
    whatsapp: {
      tooltip: "Chat with us on WhatsApp",
      greeting: "Hello! How can we help you?",
    },
  },
  fr: {
    nav: {
      home: "Accueil",
      services: "Services",
      blog: "Blog",
      about: "À propos",
      contact: "Contact",
    },
    hero: {
      title: "Conseil fiscal, social et comptable à Tortosa",
      subtitle: "Albiol Consultors est votre partenaire de confiance pour la gestion complète de votre entreprise.",
      cta1: "Demander un premier appel",
      cta2: "Envoyez votre demande",
    },
    services: {
      title: "Nos services",
      subtitle: "Solutions complètes pour entreprises, indépendants et particuliers",
      fiscal: { title: "Conseil Fiscal", desc: "Gestion TVA, IRPF, IS et planification fiscale." },
      laboral: { title: "Conseil Social", desc: "Paie, contrats et Sécurité Sociale." },
      comptable: { title: "Comptabilité", desc: "Comptabilité générale et rapports financiers." },
      mercantil: { title: "Conseil Société", desc: "Constitution et conseil juridique." },
      autonoms: { title: "Indépendants", desc: "Inscription et déclarations trimestrielles." },
      tramits: { title: "Démarches", desc: "Gestion véhicules et administration." },
    },
    why: {
      title: "Pourquoi Albiol Consultors?",
      local: { title: "Expertise Locale", desc: "Plus de 20 ans à Tortosa." },
      digital: { title: "Processus Digitaux", desc: "Gestion en ligne et en personne." },
      clarity: { title: "Communication Claire", desc: "Un langage simple et accessible." },
      specialized: { title: "Spécialisation", desc: "Experts PME et indépendants." },
    },
    segments: {
      sectionKicker: "À qui nous nous adressons",
      sectionTitle: "Des solutions pour chaque besoin",
      empreses: {
        title: "Entreprises et PME",
        desc: "Conseil global pour votre gestion fiscale, sociale et comptable au quotidien.",
        cta: "Services pour entreprises",
      },
      autonoms: {
        title: "Travailleurs indépendants",
        desc: "Nous gérons vos obligations fiscales et administratives pour que vous puissiez vous concentrer sur votre activité.",
        cta: "Services pour indépendants",
      },
      particulars: {
        title: "Particuliers et familles",
        desc: "Impôt sur le revenu, successions et autres démarches personnelles avec un accompagnement de proximité.",
        cta: "Services pour particuliers",
      },
    },
    blog: { title: "Actualités", subtitle: "Nouvelles fiscales et sociales", readMore: "Lire plus" },
    testimonials: { title: "Ce que disent nos clients" },
    cta: { title: "Commencez aujourd'hui", subtitle: "Contactez-nous", button: "Contact" },
    footer: {
      newsletter: {
        title: "Abonnez-vous à notre newsletter",
        description: "Recevez les dernières actualités fiscales et sociales directement dans votre boîte mail.",
        placeholder: "Votre e-mail",
        subscribed: "Abonné !",
      },
      brandDescription:
        "Conseil fiscal, social et comptable à Tortosa. Plus de 20 ans au service des Terres de l'Ebre.",
      legalTitle: "Mentions légales",
      rights: "Tous droits réservés",
      privacy: "Politique de confidentialité",
      legal: "Mentions légales",
      cookies: "Politique de cookies",
      languageLabel: "Langue",
      contactCta: "Contactez-nous",
    },
    contact: {
      title: "Contactez Albiol Consultors",
      subtitle: "Expliquez-nous vos besoins et nous vous fournirons une réponse claire, adaptée à votre activité.",
      formTitle: "Envoyez-nous votre demande",
      form: {
        name: "Nom et prénom",
        email: "Adresse e-mail",
        phone: "Téléphone",
        type: "Type de demande",
        message: "Message",
        submit: "Envoyer la demande",
        companyLabel: "Entreprise (optionnel)",
        companyPlaceholder: "Nom de l'entreprise",
        privacy: "J'accepte la politique de confidentialité et le traitement de mes données.",
        types: {
          fiscal: "Conseil fiscal",
          laboral: "Conseil social & paie",
          comptable: "Comptabilité & finances",
          autonoms: "Travailleurs indépendants",
          altres: "Autres demandes",
        },
      },
      success: {
        title: "Message envoyé !",
        body: "Nous vous contacterons dès que possible.",
      },
      infoTitle: "Informations de contact",
      info: {
        address: "Adresse",
        phone: "Téléphone",
        email: "E-mail",
        hours: "Horaires d'ouverture",
      },
      call: {
        title: "Vous préférez un appel ?",
        body: "Appelez-nous et nous répondrons immédiatement à vos questions.",
        cta: "Appelez-nous maintenant",
        weekdays: "Lundi - Vendredi",
      },
    },
    about: {
      title: "À propos",
      subtitle: "Notre équipe",
      history: "Notre histoire",
      values: "Nos valeurs",
      team: "L'équipe",
    },
    whatsapp: {
      tooltip: "Discutez avec nous sur WhatsApp",
      greeting: "Bonjour ! Comment pouvons-nous vous aider ?",
    },
  },
  de: {
    nav: {
      home: "Startseite",
      services: "Leistungen",
      blog: "Blog",
      about: "Über uns",
      contact: "Kontakt",
    },
    hero: {
      title: "Steuer-, Arbeits- und Buchhaltungsberatung in Tortosa",
      subtitle: "Albiol Consultors ist Ihr vertrauenswürdiger Partner für umfassende Unternehmensführung.",
      cta1: "Rückruf anfordern",
      cta2: "Anfrage senden",
    },
    services: {
      title: "Unsere Leistungen",
      subtitle: "Umfassende Lösungen für Unternehmen, Freiberufler und Privatpersonen",
      fiscal: { title: "Steuerberatung", desc: "MwSt, Einkommensteuer und Steuerplanung." },
      laboral: { title: "Arbeitsberatung", desc: "Gehaltsabrechnung, Verträge und Sozialversicherung." },
      comptable: { title: "Buchhaltung", desc: "Allgemeine Buchhaltung und Finanzberichte." },
      mercantil: { title: "Gesellschaftsrecht", desc: "Firmengründung und Rechtsberatung." },
      autonoms: { title: "Freiberufler", desc: "Anmeldung und Quartalserklärungen." },
      tramits: { title: "Verwaltung", desc: "Fahrzeuge, Lizenzen und Behörden." },
    },
    why: {
      title: "Warum Albiol Consultors?",
      local: { title: "Lokale Expertise", desc: "Über 20 Jahre Erfahrung in Tortosa." },
      digital: { title: "Digitale Prozesse", desc: "Online- und Präsenzverwaltung." },
      clarity: { title: "Klare Kommunikation", desc: "Einfache und verständliche Sprache." },
      specialized: { title: "Spezialisierung", desc: "Experten für KMU und Freiberufler." },
    },
    segments: {
      sectionKicker: "Für wen wir arbeiten",
      sectionTitle: "Lösungen für jeden Bedarf",
      empreses: {
        title: "Unternehmen & KMU",
        desc: "Umfassende Beratung für Ihre täglichen steuerlichen, arbeitsrechtlichen und buchhalterischen Aufgaben.",
        cta: "Leistungen für Unternehmen",
      },
      autonoms: {
        title: "Selbständige & Freiberufler",
        desc: "Wir übernehmen Ihre steuerlichen und administrativen Pflichten, damit Sie sich auf Ihre Arbeit konzentrieren können.",
        cta: "Leistungen für Selbständige",
      },
      particulars: {
        title: "Privatpersonen & Familien",
        desc: "Einkommensteuer, Erbschaften und weitere private Anliegen mit persönlicher Betreuung.",
        cta: "Leistungen für Privatpersonen",
      },
    },
    blog: { title: "Aktuelles", subtitle: "Steuer- und Wirtschaftsnachrichten", readMore: "Weiterlesen" },
    testimonials: { title: "Was unsere Kunden sagen" },
    cta: { title: "Heute beginnen", subtitle: "Kontaktieren Sie uns", button: "Kontakt" },
    footer: {
      newsletter: {
        title: "Newsletter abonnieren",
        description: "Erhalten Sie die neuesten Steuer- und Arbeitsrechts-News direkt in Ihr Postfach.",
        placeholder: "Ihre E-Mail",
        subscribed: "Abonniert!",
      },
      brandDescription:
        "Steuer-, Arbeits- und Buchhaltungsberatung in Tortosa. Über 20 Jahre im Dienst der Terres de l'Ebre.",
      legalTitle: "Rechtliches",
      rights: "Alle Rechte vorbehalten",
      privacy: "Datenschutzerklärung",
      legal: "Impressum",
      cookies: "Cookie-Richtlinie",
      languageLabel: "Sprache",
      contactCta: "Kontakt aufnehmen",
    },
    contact: {
      title: "Kontakt zu Albiol Consultors",
      subtitle:
        "Sagen Sie uns, was Sie brauchen, und wir geben Ihnen eine klare, auf Ihr Unternehmen zugeschnittene Antwort.",
      formTitle: "Senden Sie uns Ihre Anfrage",
      form: {
        name: "Name",
        email: "E-Mail-Adresse",
        phone: "Telefon",
        type: "Art der Anfrage",
        message: "Nachricht",
        submit: "Anfrage senden",
        companyLabel: "Unternehmen (optional)",
        companyPlaceholder: "Name des Unternehmens",
        privacy: "Ich akzeptiere die Datenschutzrichtlinie und die Verarbeitung meiner Daten.",
        types: {
          fiscal: "Steuerberatung",
          laboral: "Arbeitsrecht & Lohnbuchhaltung",
          comptable: "Buchhaltung & Finanzen",
          autonoms: "Selbständige & Freiberufler",
          altres: "Weitere Anfragen",
        },
      },
      success: {
        title: "Nachricht gesendet!",
        body: "Wir werden Sie so schnell wie möglich kontaktieren.",
      },
      infoTitle: "Kontaktinformationen",
      info: {
        address: "Adresse",
        phone: "Telefon",
        email: "E-Mail",
        hours: "Öffnungszeiten",
      },
      call: {
        title: "Lieber ein Anruf?",
        body: "Rufen Sie uns an – wir beantworten Ihre Fragen sofort.",
        cta: "Jetzt anrufen",
        weekdays: "Montag - Freitag",
      },
    },
    about: {
      title: "Über uns",
      subtitle: "Unser Team",
      history: "Unsere Geschichte",
      values: "Unsere Werte",
      team: "Das Team",
    },
    whatsapp: {
      tooltip: "Chatten Sie mit uns auf WhatsApp",
      greeting: "Hallo! Wie können wir Ihnen helfen?",
    },
  },
}

export function getTranslation(locale: Locale) {
  return translations[locale] || translations.ca
}
