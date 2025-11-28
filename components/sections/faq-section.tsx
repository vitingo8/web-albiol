"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import type { Locale } from "@/lib/i18n"

interface FaqSectionProps {
  locale: Locale
}

export function FaqSection({ locale }: FaqSectionProps) {
  const faqs =
    locale === "ca"
      ? [
          {
            question: "Quins són els vostres honoraris?",
            answer:
              "Els nostres honoraris depenen dels serveis que necessitis. Oferim pressupostos personalitzats i sense compromís. Contacta'ns i t'enviarem una proposta adaptada a les teves necessitats.",
          },
          {
            question: "Puc fer tots els tràmits de manera online?",
            answer:
              "Sí, oferim gestió 100% online per a la majoria de serveis. Tens accés a un portal de client on pots enviar documentació, consultar l'estat dels teus tràmits i comunicar-te amb el teu assessor.",
          },
          {
            question: "Quant de temps triga donar-se d'alta com a autònom?",
            answer:
              "El tràmit d'alta d'autònom es pot completar en 24-48 hores un cop disposem de tota la documentació necessària. T'acompanyem en tot el procés.",
          },
          {
            question: "Oferiu servei a empreses de fora de Tortosa?",
            answer:
              "Sí, tot i que les nostres oficines estan a Tortosa, treballem amb clients de tota la província de Tarragona i Catalunya. Gràcies a les nostres eines digitals, podem oferir el mateix servei de qualitat a distància.",
          },
          {
            question: "Què passa si tinc una inspecció d'Hisenda?",
            answer:
              "T'acompanyem i representem davant qualsevol requeriment o inspecció tributària. El nostre equip té àmplia experiència en la defensa dels interessos dels nostres clients davant l'Administració.",
          },
          {
            question: "Puc canviar de gestoria durant l'any fiscal?",
            answer:
              "Sí, pots canviar de gestoria en qualsevol moment. Ens encarreguem de sol·licitar tota la documentació a la teva gestoria anterior i assegurem una transició sense problemes.",
          },
        ]
      : locale === "es"
        ? [
            {
              question: "¿Cuáles son sus honorarios?",
              answer:
                "Nuestros honorarios dependen de los servicios que necesites. Ofrecemos presupuestos personalizados y sin compromiso. Contáctanos y te enviaremos una propuesta adaptada a tus necesidades.",
            },
            {
              question: "¿Puedo hacer todos los trámites de forma online?",
              answer:
                "Sí, ofrecemos gestión 100% online para la mayoría de servicios. Tienes acceso a un portal de cliente donde puedes enviar documentación, consultar el estado de tus trámites y comunicarte con tu asesor.",
            },
            {
              question: "¿Cuánto tiempo tarda darse de alta como autónomo?",
              answer:
                "El trámite de alta de autónomo se puede completar en 24-48 horas una vez disponemos de toda la documentación necesaria. Te acompañamos en todo el proceso.",
            },
            {
              question: "¿Ofrecen servicio a empresas de fuera de Tortosa?",
              answer:
                "Sí, aunque nuestras oficinas están en Tortosa, trabajamos con clientes de toda la provincia de Tarragona y Cataluña. Gracias a nuestras herramientas digitales, podemos ofrecer el mismo servicio de calidad a distancia.",
            },
            {
              question: "¿Qué pasa si tengo una inspección de Hacienda?",
              answer:
                "Te acompañamos y representamos ante cualquier requerimiento o inspección tributaria. Nuestro equipo tiene amplia experiencia en la defensa de los intereses de nuestros clientes ante la Administración.",
            },
            {
              question: "¿Puedo cambiar de gestoría durante el año fiscal?",
              answer:
                "Sí, puedes cambiar de gestoría en cualquier momento. Nos encargamos de solicitar toda la documentación a tu gestoría anterior y aseguramos una transición sin problemas.",
            },
          ]
        : [
            {
              question: "What are your fees?",
              answer:
                "Our fees depend on the services you need. We offer customised quotes with no obligation. Contact us and we'll send you a proposal tailored to your needs.",
            },
            {
              question: "Can I do all procedures online?",
              answer:
                "Yes, we offer 100% online management for most services. You have access to a client portal where you can send documentation, check the status of your procedures and communicate with your advisor.",
            },
            {
              question: "How long does it take to register as a freelancer?",
              answer:
                "The freelancer registration process can be completed in 24-48 hours once we have all the necessary documentation. We accompany you throughout the process.",
            },
            {
              question: "Do you offer service to companies outside Tortosa?",
              answer:
                "Yes, although our offices are in Tortosa, we work with clients throughout the province of Tarragona and Catalonia. Thanks to our digital tools, we can offer the same quality service remotely.",
            },
            {
              question: "What happens if I have a tax inspection?",
              answer:
                "We accompany and represent you in any tax requirement or inspection. Our team has extensive experience in defending our clients' interests before the Administration.",
            },
            {
              question: "Can I change accountants during the tax year?",
              answer:
                "Yes, you can change accountants at any time. We take care of requesting all documentation from your previous accountant and ensure a smooth transition.",
            },
          ]

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-6 md:px-8 lg:px-12">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block text-sm font-medium text-secondary uppercase tracking-widest mb-4">FAQ</span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
            {locale === "ca"
              ? "Preguntes freqüents"
              : locale === "es"
                ? "Preguntas frecuentes"
                : "Frequently Asked Questions"}
          </h2>
        </div>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-xl px-6 border border-border/50 shadow-sm"
              >
                <AccordionTrigger className="text-left font-medium text-foreground hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
