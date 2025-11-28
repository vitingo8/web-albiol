"use client"

import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function DatenschutzPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header locale="de" onLocaleChange={() => {}} />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="container mx-auto px-6 md:px-8 lg:px-12">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6">
                <span>Datenschutzerklärung</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-balance leading-tight">
                Datenschutzerklärung
              </h1>

              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Ihre Privatsphäre ist uns wichtig. Diese Richtlinie erklärt, wie wir Ihre personenbezogenen Daten behandeln und schützen.
              </p>

              <Button asChild variant="outline" className="gap-2">
                <Link href="/">
                  <ArrowLeft className="h-4 w-4" />
                  Zurück zur Startseite
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-6 md:px-8 lg:px-12">
            <div className="max-w-4xl mx-auto prose prose-lg dark:prose-invert">
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-4">1. INFORMATIONEN FÜR DEN NUTZER</h2>

                  <h3 className="text-xl font-semibold mb-3">Wer ist für die Verarbeitung Ihrer personenbezogenen Daten verantwortlich?</h3>
                  <p className="mb-4">
                    ALBIOL CONSULTORS LEGALS I D'EMPRESA SL, mit der Steuernummer B55756738, ist der VERANTWORTLICHE für die Verarbeitung der personenbezogenen Daten des NUTZERS und informiert ihn, dass diese Daten gemäß den Bestimmungen der Verordnung (EU) 2016/679 vom 27. April (DSGVO) und des organischen Gesetzes 3/2018 vom 5. Dezember (LOPDGDD) verarbeitet werden.
                  </p>

                  <h3 className="text-xl font-semibold mb-3">Warum verarbeiten wir Ihre personenbezogenen Daten?</h3>
                  <p className="mb-3">Um eine Geschäftsbeziehung mit dem Nutzer aufrechtzuerhalten. Die geplanten Operationen zur Durchführung der Verarbeitung sind:</p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>Versand von kommerziellen Werbekommunikationen per E-Mail, Fax, SMS, MMS, soziale Netzwerke oder andere elektronische oder physische Mittel, gegenwärtige oder zukünftige, die kommerzielle Kommunikationen ermöglichen. Diese Kommunikationen werden vom VERANTWORTLICHEN durchgeführt und beziehen sich auf seine Steuer-, Arbeits- und Buchhaltungsberatungsprodukte und -dienstleistungen. In diesem Fall haben Dritte niemals Zugang zu personenbezogenen Daten.</li>
                    <li>Durchführung von Marktforschungsstudien und statistischen Analysen im Zusammenhang mit Beratungsdienstleistungen.</li>
                    <li>Bearbeitung von Bestellanfragen, Beantwortung von Anfragen zu Steuer-, Arbeits- und Buchhaltungsdienstleistungen oder jeder Art von Anfrage, die der NUTZER über eine der Kontaktformen stellt, die ihm auf der Website des VERANTWORTLICHEN zur Verfügung gestellt werden.</li>
                    <li>Versand des Online-Newsletters über Neuigkeiten, Angebote und Werbeaktionen in unseren Steuer- und Arbeitsberatungsdienstleistungen.</li>
                  </ul>

                  <h3 className="text-xl font-semibold mb-3">Aus welchem Grund können wir Ihre personenbezogenen Daten verarbeiten?</h3>
                  <p className="mb-3">Weil die Verarbeitung durch Artikel 6 der DSGVO wie folgt legitimiert ist:</p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>Mit der Zustimmung des NUTZERS: Versand von kommerziellen Kommunikationen und des Newsletters.</li>
                    <li>Aufgrund des berechtigten Interesses des VERANTWORTLICHEN: Durchführung von Marktforschungsstudien, statistischen Analysen im Zusammenhang mit Beratungsdienstleistungen usw. und Bearbeitung von Aufträgen, Anfragen usw. auf Anfrage des NUTZERS.</li>
                  </ul>

                  <h3 className="text-xl font-semibold mb-3">Wie lange werden wir Ihre personenbezogenen Daten aufbewahren?</h3>
                  <p className="mb-4">
                    Sie werden nicht länger aufbewahrt, als zur Aufrechterhaltung des Verarbeitungszwecks erforderlich ist oder solange gesetzliche Vorschriften deren Aufbewahrung vorschreiben, und wenn dies nicht mehr erforderlich ist, werden sie mit angemessenen Sicherheitsmaßnahmen gelöscht, um die Anonymisierung der Daten oder ihre vollständige Zerstörung zu gewährleisten.
                  </p>

                  <h3 className="text-xl font-semibold mb-3">An wen geben wir Ihre personenbezogenen Daten weiter?</h3>
                  <p className="mb-4">
                    Eine Weitergabe personenbezogener Daten an Dritte ist nicht vorgesehen, außer wenn dies für die Entwicklung und Durchführung der Verarbeitungszwecke erforderlich ist, an unsere Dienstleistungsanbieter im Zusammenhang mit Kommunikation und Beratung, mit denen der VERANTWORTLICHE die nach geltendem Datenschutzrecht erforderlichen Vertraulichkeits- und Auftragsverarbeiter-Verträge abgeschlossen hat.
                  </p>

                  <h3 className="text-xl font-semibold mb-3">Was sind Ihre Rechte?</h3>
                  <p className="mb-3">Die Rechte, die der NUTZER hat, sind:</p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>Recht, die Zustimmung jederzeit zu widerrufen.</li>
                    <li>Recht auf Zugang, Berichtigung, Übertragbarkeit und Löschung seiner Daten sowie auf Einschränkung oder Widerspruch gegen deren Verarbeitung.</li>
                    <li>Recht, eine Beschwerde bei der Aufsichtsbehörde (www.aepd.es) einzureichen, wenn er der Ansicht ist, dass die Verarbeitung nicht den geltenden Vorschriften entspricht.</li>
                  </ul>

                  <h3 className="text-xl font-semibold mb-3">Kontaktdaten zur Ausübung Ihrer Rechte:</h3>
                  <p className="mb-4">
                    ALBIOL CONSULTORS LEGALS I D'EMPRESA SL. Carrer Argentina, 9, 2A - 43500 TORTOSA (Tarragona). E-Mail: info@albiolconsultors.com
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">2. PFLICHTCHARAKTER ODER FREIWILLIGKEIT DER VOM NUTZER BEREITGESTELLTEN INFORMATIONEN</h2>
                  <p className="mb-4">
                    Die NUTZER erklären durch die entsprechenden Felder und die Eingabe von Daten in die Felder, die mit einem Sternchen (*) im Kontaktformular oder in Download-Formularen markiert sind, ausdrücklich und frei, dass ihre Daten zur Bearbeitung ihrer Anfrage durch den Anbieter erforderlich sind und dass daher die Aufnahme von Daten in die übrigen Felder freiwillig ist. Der NUTZER garantiert, dass die dem VERANTWORTLICHEN bereitgestellten personenbezogenen Daten wahrheitsgemäß sind und ist für die Mitteilung etwaiger Änderungen verantwortlich.
                  </p>
                  <p className="mb-4">
                    Der VERANTWORTLICHE informiert, dass alle über die Website angeforderten Daten obligatorisch sind, da sie für die Bereitstellung eines optimalen Dienstes für den NUTZER erforderlich sind. Falls nicht alle Daten bereitgestellt werden, ist nicht garantiert, dass die bereitgestellten Informationen und Dienstleistungen ihren Bedürfnissen vollständig entsprechen.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">3. SICHERHEITSMAßNAHMEN</h2>
                  <p className="mb-4">
                    Dass der VERANTWORTLICHE gemäß den Bestimmungen der geltenden Vorschriften zum Schutz personenbezogener Daten alle Bestimmungen der DSGVO- und LOPDGDD-Vorschriften für die Verarbeitung der personenbezogenen Daten unter seiner Verantwortung einhält und offenkundig die in Artikel 5 der DSGVO beschriebenen Grundsätze einhält, nach denen sie rechtmäßig, fair und transparent in Bezug auf die betroffene Person und angemessen, relevant und auf das Notwendige beschränkt in Bezug auf die Zwecke, für die sie verarbeitet werden, behandelt werden.
                  </p>
                  <p className="mb-4">
                    Der VERANTWORTLICHE garantiert, dass er angemessene technische und organisatorische Richtlinien implementiert hat, um die von der DSGVO und LOPDGDD festgelegten Sicherheitsmaßnahmen anzuwenden, um die Rechte und Freiheiten der NUTZER zu schützen, und ihnen die angemessenen Informationen mitgeteilt hat, damit sie diese ausüben können.
                  </p>
                  <p className="mb-4">
                    Für weitere Informationen über Datenschutzgarantien können Sie den VERANTWORTLICHEN über ALBIOL CONSULTORS LEGALS I D'EMPRESA SL kontaktieren. Carrer Argentina, 9, 2A - 43500 TORTOSA (Tarragona). E-Mail: info@albiolconsultors.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer locale="de" onLocaleChange={() => {}} />
    </div>
  )
}
