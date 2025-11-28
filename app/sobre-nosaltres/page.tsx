"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import { ArrowRight, Award, Users, Heart, Target, MapPin, Calendar } from "lucide-react"
import Link from "next/link"
import type { Locale } from "@/lib/i18n"
import { getTranslation } from "@/lib/i18n"

export default function AboutPage() {
  const [locale, setLocale] = useState<Locale>("ca")
  const t = getTranslation(locale)

  const googleMapsUrl = "https://www.google.com/maps/place/Carrer+Argentina,+9,+43500+Tortosa,+Tarragona,+Spain"

  const values =
    locale === "ca"
      ? [
          {
            icon: <Heart className="h-6 w-6" />,
            title: "Proximitat",
            desc: "Tracte personal i proper amb cada client. Som el teu soci, no només el teu gestor.",
          },
          {
            icon: <Award className="h-6 w-6" />,
            title: "Excel·lència",
            desc: "Compromís amb la qualitat i l'actualització constant dels nostres coneixements.",
          },
          {
            icon: <Target className="h-6 w-6" />,
            title: "Claredat",
            desc: "T'expliquem tot en un llenguatge senzill, sense tecnicismes innecessaris.",
          },
          {
            icon: <Users className="h-6 w-6" />,
            title: "Compromís",
            desc: "El teu èxit és el nostre èxit. Treballem perquè el teu negoci creixi.",
          },
        ]
      : locale === "es"
        ? [
            {
              icon: <Heart className="h-6 w-6" />,
              title: "Cercanía",
              desc: "Trato personal y cercano con cada cliente. Somos tu socio, no solo tu gestor.",
            },
            {
              icon: <Award className="h-6 w-6" />,
              title: "Excelencia",
              desc: "Compromiso con la calidad y la actualización constante de nuestros conocimientos.",
            },
            {
              icon: <Target className="h-6 w-6" />,
              title: "Claridad",
              desc: "Te explicamos todo en un lenguaje sencillo, sin tecnicismos innecesarios.",
            },
            {
              icon: <Users className="h-6 w-6" />,
              title: "Compromiso",
              desc: "Tu éxito es nuestro éxito. Trabajamos para que tu negocio crezca.",
            },
          ]
        : [
            {
              icon: <Heart className="h-6 w-6" />,
              title: "Closeness",
              desc: "Personal and close treatment with every client. We're your partner, not just your advisor.",
            },
            {
              icon: <Award className="h-6 w-6" />,
              title: "Excellence",
              desc: "Commitment to quality and constant updating of our knowledge.",
            },
            {
              icon: <Target className="h-6 w-6" />,
              title: "Clarity",
              desc: "We explain everything in simple language, without unnecessary jargon.",
            },
            {
              icon: <Users className="h-6 w-6" />,
              title: "Commitment",
              desc: "Your success is our success. We work to help your business grow.",
            },
          ]

  const team = [
    {
      name: "Joan Albiol",
      role: locale === "ca" ? "Director i Fundador" : locale === "es" ? "Director y Fundador" : "Director & Founder",
      image: "/professional-business-man-portrait-office.jpg",
      bio:
        locale === "ca"
          ? "Més de 25 anys d'experiència en assessoria fiscal i comptable. Expert en pimes i autònoms."
          : locale === "es"
            ? "Más de 25 años de experiencia en asesoría fiscal y contable. Experto en pymes y autónomos."
            : "Over 25 years of experience in tax and accounting advisory. SME and freelancer expert.",
    },
    {
      name: "Marta Vidal",
      role:
        locale === "ca"
          ? "Responsable Àrea Laboral"
          : locale === "es"
            ? "Responsable Área Laboral"
            : "Labour Area Manager",
      image: "/professional-business-woman-portrait-office.jpg",
      bio:
        locale === "ca"
          ? "Especialista en nòmines, contractes i Seguretat Social amb 15 anys d'experiència."
          : locale === "es"
            ? "Especialista en nóminas, contratos y Seguridad Social con 15 años de experiencia."
            : "Payroll, contracts and Social Security specialist with 15 years of experience.",
    },
    {
      name: "Pere Garcia",
      role: locale === "ca" ? "Assessor Fiscal" : locale === "es" ? "Asesor Fiscal" : "Tax Advisor",
      image: "/professional-business-man-suit-portrait.jpg",
      bio:
        locale === "ca"
          ? "Expert en planificació fiscal i Impost de Societats. Especialitzat en el sector agrari."
          : locale === "es"
            ? "Experto en planificación fiscal e Impuesto de Sociedades. Especializado en el sector agrario."
            : "Expert in tax planning and Corporate Tax. Specialised in the agricultural sector.",
    },
    {
      name: "Laura Martínez",
      role: locale === "ca" ? "Comptable" : locale === "es" ? "Contable" : "Accountant",
      image: "/professional-accountant-woman-portrait.jpg",
      bio:
        locale === "ca"
          ? "Responsable de comptabilitat i control de gestió per a empreses del territori."
          : locale === "es"
            ? "Responsable de contabilidad y control de gestión para empresas del territorio."
            : "Accounting and management control manager for local businesses.",
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header locale={locale} onLocaleChange={setLocale} />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 md:py-28 bg-primary text-primary-foreground relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
              <span className="inline-block text-sm font-medium text-secondary uppercase tracking-widest mb-4">
                {t.about.title}
              </span>
              <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">{t.about.subtitle}</h1>
              <p className="text-lg text-primary-foreground/80 leading-relaxed">
                {locale === "ca"
                  ? "Més de 20 anys assessorant empreses, autònoms i particulars a Tortosa i les Terres de l'Ebre. Som el teu soci de confiança per a la gestió integral del teu negoci."
                  : locale === "es"
                    ? "Más de 20 años asesorando empresas, autónomos y particulares en Tortosa y las Terres de l'Ebre. Somos tu socio de confianza para la gestión integral de tu negocio."
                    : "Over 20 years advising businesses, freelancers and individuals in Tortosa and Terres de l'Ebre. We are your trusted partner for comprehensive business management."}
              </p>
            </div>
          </div>
        </section>

        {/* History Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block text-sm font-medium text-secondary uppercase tracking-widest mb-4">
                  {t.about.history}
                </span>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
                  {locale === "ca"
                    ? "Una trajectòria al servei del territori"
                    : locale === "es"
                      ? "Una trayectoria al servicio del territorio"
                      : "A track record serving the territory"}
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    {locale === "ca"
                      ? "Albiol Consultors va néixer l'any 2003 amb una missió clara: oferir un servei d'assessoria proper, professional i adaptat a les necessitats de les empreses i autònoms de Tortosa i les Terres de l'Ebre."
                      : locale === "es"
                        ? "Albiol Consultors nació en el año 2003 con una misión clara: ofrecer un servicio de asesoría cercano, profesional y adaptado a las necesidades de las empresas y autónomos de Tortosa y las Terres de l'Ebre."
                        : "Albiol Consultors was founded in 2003 with a clear mission: to offer a close, professional advisory service adapted to the needs of businesses and freelancers in Tortosa and Terres de l'Ebre."}
                  </p>
                  <p>
                    {locale === "ca"
                      ? "Des de llavors, hem crescut amb els nostres clients, acompanyant-los en cada etapa del seu negoci. Avui comptem amb un equip de professionals especialitzats en totes les àrees de la gestoria i l'assessoria."
                      : locale === "es"
                        ? "Desde entonces, hemos crecido con nuestros clientes, acompañándolos en cada etapa de su negocio. Hoy contamos con un equipo de profesionales especializados en todas las áreas de la gestoría y la asesoría."
                        : "Since then, we have grown with our clients, accompanying them at every stage of their business. Today we have a team of professionals specialised in all areas of business advisory."}
                  </p>
                </div>
                <div className="flex items-center gap-8 mt-8">
                  <div>
                    <p className="font-serif text-4xl font-bold text-primary">+20</p>
                    <p className="text-sm text-muted-foreground">
                      {locale === "ca"
                        ? "anys d'experiència"
                        : locale === "es"
                          ? "años de experiencia"
                          : "years experience"}
                    </p>
                  </div>
                  <div>
                    <p className="font-serif text-4xl font-bold text-primary">+500</p>
                    <p className="text-sm text-muted-foreground">
                      {locale === "ca" ? "clients actius" : locale === "es" ? "clientes activos" : "active clients"}
                    </p>
                  </div>
                </div>
              </div>
              <div className="aspect-square rounded-2xl overflow-hidden bg-muted">
                <img
                  src="/modern-office-interior-professional-workspace.jpg"
                  alt="Albiol Consultors office"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="inline-block text-sm font-medium text-secondary uppercase tracking-widest mb-4">
                {t.about.values}
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
                {locale === "ca" ? "Què ens defineix" : locale === "es" ? "Qué nos define" : "What defines us"}
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value) => (
                <div key={value.title} className="bg-card rounded-xl p-6 shadow-sm border border-border/50 text-center">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 text-primary mb-4">
                    {value.icon}
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="inline-block text-sm font-medium text-secondary uppercase tracking-widest mb-4">
                {t.about.team}
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
                {locale === "ca" ? "El nostre equip" : locale === "es" ? "Nuestro equipo" : "Our team"}
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member) => (
                <div key={member.name} className="group text-center">
                  <div className="aspect-square rounded-2xl overflow-hidden bg-muted mb-4">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-1">{member.name}</h3>
                  <p className="text-primary text-sm font-medium mb-2">{member.role}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Location Section - Updated with real address */}
        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block text-sm font-medium text-secondary uppercase tracking-widest mb-4">
                  {locale === "ca" ? "On som" : locale === "es" ? "Dónde estamos" : "Where we are"}
                </span>
                <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
                  {locale === "ca"
                    ? "Al cor de Tortosa"
                    : locale === "es"
                      ? "En el corazón de Tortosa"
                      : "In the heart of Tortosa"}
                </h2>
                <p className="text-primary-foreground/80 text-lg leading-relaxed mb-8">
                  {locale === "ca"
                    ? "Les nostres oficines estan situades al centre de Tortosa, amb fàcil accés i aparcament proper. També oferim servei online per a clients de tot Espanya."
                    : locale === "es"
                      ? "Nuestras oficinas están situadas en el centro de Tortosa, con fácil acceso y aparcamiento cercano. También ofrecemos servicio online para clientes de toda España."
                      : "Our offices are located in the centre of Tortosa, with easy access and nearby parking. We also offer online service for clients throughout Spain."}
                </p>
                <div className="flex flex-col gap-4">
                  <a
                    href={googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 hover:text-secondary transition-colors"
                  >
                    <MapPin className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                    <span>
                      Carrer Argentina, 9, 2A
                      <br />
                      43500 Tortosa, Tarragona
                    </span>
                  </a>
                  <div className="flex items-center gap-3">
                    <Calendar className="h-5 w-5 text-secondary shrink-0" />
                    <span>
                      {locale === "ca"
                        ? "Dilluns - Divendres: 9:00 - 14:00 / 16:00 - 19:00"
                        : locale === "es"
                          ? "Lunes - Viernes: 9:00 - 14:00 / 16:00 - 19:00"
                          : "Monday - Friday: 9:00 - 14:00 / 16:00 - 19:00"}
                    </span>
                  </div>
                </div>
                <Link href="/contacte" className="inline-block mt-8">
                  <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground gap-2">
                    {t.cta.button}
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
              <div className="aspect-video rounded-2xl overflow-hidden bg-white/10">
                <img
                  src="/tortosa-city-aerial-view-spain.jpg"
                  alt="Tortosa city"
                  className="w-full h-full object-cover"
                />
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
