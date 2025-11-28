"use client"

import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import { SocialShare } from "@/components/social-share"
import {
  ArrowRight,
  Building2,
  Briefcase,
  Heart,
  GraduationCap,
  Car,
  Home,
  Stethoscope,
  Utensils,
  ShoppingBag,
  Wrench,
  ExternalLink
} from "lucide-react"

export default function DirectoriEmpresesTortosaPage() {
  const currentUrl = "/directori-empreses-tortosa"

  const categories = [
    {
      name: "Serveis Professionals",
      icon: <Briefcase className="h-6 w-6" />,
      businesses: [
        {
          name: "Albiol Consultors",
          description: "Assessoria fiscal, laboral i comptable",
          category: "Consultoria",
          address: "Carrer Argentina, 9, 2A",
          phone: "680 132 404",
          website: "https://albiolconsultors.com",
          featured: true
        },
        {
          name: "Cambra de Comerç de Tortosa",
          description: "Suport als empresaris i comerç local",
          category: "Institució",
          address: "Plaça d'Espanya, 1",
          phone: "977 44 22 33",
          website: "https://www.camaradetortosa.com"
        },
        {
          name: "Col·legi d'Advocats de Tortosa",
          description: "Assessorament jurídic i legal",
          category: "Advocacia",
          address: "Carrer Sant Joan, 12",
          phone: "977 44 33 22",
          website: "https://www.advocats-tortosa.cat"
        }
      ]
    },
    {
      name: "Salut i Benestar",
      icon: <Stethoscope className="h-6 w-6" />,
      businesses: [
        {
          name: "Hospital de Tortosa Verge de la Cinta",
          description: "Hospital comarcal de referència",
          category: "Hospital",
          address: "Carrer Esplanetes, s/n",
          phone: "977 51 52 00",
          website: "https://www.ics.gencat.cat"
        },
        {
          name: "Clínica Dental Montserrat",
          description: "Odontologia i estètica dental",
          category: "Dentista",
          address: "Carrer Montcada, 45",
          phone: "977 44 55 66",
          website: "https://www.clinicamontserrat.com"
        }
      ]
    },
    {
      name: "Educació",
      icon: <GraduationCap className="h-6 w-6" />,
      businesses: [
        {
          name: "Universitat Rovira i Virgili - Campus Terres de l'Ebre",
          description: "Campus universitari a Tortosa",
          category: "Universitat",
          address: "Carrer de l'Escorxador, s/n",
          phone: "977 77 99 00",
          website: "https://www.urv.cat"
        },
        {
          name: "Escola Oficial d'Idiomes de Tortosa",
          description: "Aprendre idiomes oficialment reconeguts",
          category: "Idiomes",
          address: "Carrer Sant Jordi, 8",
          phone: "977 44 11 22",
          website: "https://www.educacio.gencat.cat"
        }
      ]
    },
    {
      name: "Hostaleria i Restauració",
      icon: <Utensils className="h-6 w-6" />,
      businesses: [
        {
          name: "Restaurant El Terrat",
          description: "Cuina tradicional ebrenca amb vistes",
          category: "Restaurant",
          address: "Carrer de la Rosa, 15",
          phone: "977 44 77 88",
          website: "https://www.elterrat.com"
        },
        {
          name: "Bar Central",
          description: "Cafeteria i restaurant al centre",
          category: "Bar",
          address: "Plaça del Carrilet, 3",
          phone: "977 44 22 11",
          website: "https://www.barcentral.com"
        }
      ]
    },
    {
      name: "Comerç Local",
      icon: <ShoppingBag className="h-6 w-6" />,
      businesses: [
        {
          name: "Mercat Municipal de Tortosa",
          description: "Mercat setmanal amb productes locals",
          category: "Mercat",
          address: "Plaça del Mercat, s/n",
          phone: "977 44 00 11",
          website: "https://www.tortosa.cat"
        },
        {
          name: "Llibreria La Rambla",
          description: "Llibreria amb més de 50 anys d'història",
          category: "Llibreria",
          address: "Carrer Major, 25",
          phone: "977 44 33 44",
          website: "https://www.llibrerialarambla.com"
        }
      ]
    }
  ]

  const services = [
    {
      name: "Transport i Mobilitat",
      icon: <Car className="h-5 w-5" />,
      items: ["Autobusos TE - Transport Ebrenc", "Taxis Tortosa", "Pàrquing Centre"]
    },
    {
      name: "Habitatge",
      icon: <Home className="h-5 w-5" />,
      items: ["Inmobiliàries locals", "Pisos de lloguer", "Reformes i construcció"]
    },
    {
      name: "Serveis Públics",
      icon: <Building2 className="h-5 w-5" />,
      items: ["Ajuntament de Tortosa", "Oficina d'ocupació", "Seguretat Social"]
    },
    {
      name: "Oci i Cultura",
      icon: <Heart className="h-5 w-5" />,
      items: ["Museu de Tortosa", "Teatre Auditori", "Biblioteca"]
    }
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header locale="ca" onLocaleChange={() => {}} />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="container mx-auto px-6 md:px-8 lg:px-12">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6">
                <Building2 className="h-4 w-4" />
                Directori Empresarial
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-balance leading-tight">
                Directori d'Empreses
                <span className="text-primary block mt-2">Tortosa</span>
              </h1>

              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Descobreix les empreses i serveis locals de Tortosa i les Terres de l'Ebre.
                Un directori complet per connectar amb el teixit empresarial local.
              </p>

              <SocialShare
                url={currentUrl}
                title="Directori d'Empreses Tortosa - Albiol Consultors"
                description="Empreses i serveis locals de Tortosa i Terres de l'Ebre"
                locale="ca"
                className="justify-center mb-8"
              />
            </div>
          </div>
        </section>

        {/* Directory Content */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-6 md:px-8 lg:px-12">
            <div className="max-w-6xl mx-auto">
              {categories.map((category, categoryIndex) => (
                <div key={categoryIndex} className="mb-16">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                      {category.icon}
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold">{category.name}</h2>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.businesses.map((business, businessIndex) => (
                      <div
                        key={businessIndex}
                        className={`bg-card p-6 rounded-xl border hover:shadow-lg transition-shadow ${
                          business.featured ? 'border-primary/50 bg-primary/5' : 'border-border'
                        }`}
                      >
                        {business.featured && (
                          <div className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-3">
                            <Heart className="h-3 w-3" />
                            Recomanat
                          </div>
                        )}

                        <h3 className="font-bold text-lg mb-2">{business.name}</h3>
                        <p className="text-sm text-primary bg-primary/10 px-2 py-1 rounded-full inline-block mb-3">
                          {business.category}
                        </p>
                        <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                          {business.description}
                        </p>

                        <div className="space-y-2 text-sm">
                          <p className="flex items-center gap-2">
                            <span className="font-medium">📍</span>
                            {business.address}
                          </p>
                          <p className="flex items-center gap-2">
                            <span className="font-medium">📞</span>
                            {business.phone}
                          </p>
                        </div>

                        {business.website && (
                          <a
                            href={business.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 mt-4 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-sm font-medium"
                          >
                            <ExternalLink className="h-4 w-4" />
                            Visitar web
                          </a>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}

              {/* Services Grid */}
              <div className="bg-gradient-to-br from-muted/30 to-muted/10 rounded-3xl p-8 md:p-12 mt-16">
                <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Altres Serveis Locals</h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {services.map((service, index) => (
                    <div key={index} className="text-center">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mx-auto mb-4">
                        {service.icon}
                      </div>
                      <h3 className="font-semibold mb-3">{service.name}</h3>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        {service.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-center gap-2">
                            <div className="w-1 h-1 bg-primary rounded-full flex-shrink-0"></div>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Section */}
              <div className="bg-primary text-primary-foreground rounded-3xl p-8 md:p-12 text-center mt-16">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  La Teva Empresa no Apareix al Directori?
                </h3>
                <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
                  Si ets una empresa de Tortosa i vols aparèixer en aquest directori,
                  contacta amb nosaltres. T'ajudem a fer visible el teu negoci localment.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
                    <Link href="/contacte">
                      Afegir Empresa
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                    <Link href="/recursos-fiscals">
                      Recursos Empresarials
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer locale="ca" onLocaleChange={() => {}} />
      <WhatsAppButton locale="ca" phoneNumber="+34680132404" />
    </div>
  )
}
