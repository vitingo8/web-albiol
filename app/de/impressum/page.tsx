"use client"

import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function ImpressumPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header locale="de" onLocaleChange={() => {}} />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="container mx-auto px-6 md:px-8 lg:px-12">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6">
                <span>Impressum</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-balance leading-tight">
                Impressum
              </h1>

              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Rechtliche Informationen und Nutzungsbedingungen unserer Website gemäß LSSI.
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
                  <h2 className="text-2xl font-bold mb-4">GESETZ ÜBER DIE DIENSTE DER INFORMATIONSGESELLSCHAFT (LSSI)</h2>
                  <p className="mb-4">
                    ALBIOL CONSULTORS LEGALS I D'EMPRESA SL, verantwortlich für die Website, im Folgenden der VERANTWORTLICHE, stellt den Nutzern dieses Dokument zur Verfügung, mit dem es die Verpflichtungen erfüllen möchte, die im Gesetz 34/2002 vom 11. Juli über die Dienste der Informationsgesellschaft und den elektronischen Geschäftsverkehr (LSSICE), BOE Nr. 166, festgelegt sind, sowie alle Nutzer der Website darüber zu informieren, was die Nutzungsbedingungen sind.
                  </p>
                  <p className="mb-4">
                    Jede Person, die auf diese Website zugreift, übernimmt die Rolle des Nutzers und verpflichtet sich zur strikten Einhaltung und Befolgung der hier festgelegten Bestimmungen sowie jeglicher anderer gesetzlicher Bestimmung, die Anwendung finden könnte.
                  </p>
                  <p className="mb-4">
                    ALBIOL CONSULTORS LEGALS I D'EMPRESA SL behält sich das Recht vor, jede Art von Information zu ändern, die auf der Website erscheinen könnte, ohne dass eine Verpflichtung besteht, die Nutzer vorab zu benachrichtigen oder über diese Verpflichtungen zu informieren, da es als ausreichend erachtet wird, sie auf der ALBIOL CONSULTORS LEGALS I D'EMPRESA SL-Website zu veröffentlichen.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">1. IDENTIFIZIERENDE DATEN</h2>
                  <p className="mb-2"><strong>Domainname:</strong> albiolconsultors.com</p>
                  <p className="mb-2"><strong>Firmenname:</strong> ALBIOL CONSULTORS LEGALS I D'EMPRESA SL</p>
                  <p className="mb-2"><strong>Handelsname:</strong> ALBIOL CONSULTORS LEGALS I D'EMPRESA SL</p>
                  <p className="mb-2"><strong>Steuernummer:</strong> B55756738</p>
                  <p className="mb-2"><strong>Gesellschaftssitz:</strong> Carrer Argentina, 9, 2A - 43500 Tortosa (Tarragona)</p>
                  <p className="mb-2"><strong>Telefon:</strong> 680 132 404</p>
                  <p className="mb-2"><strong>E-Mail:</strong> info@albiolconsultors.com</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">2. GEISTIGE UND GEWERBLICHE EIGENTUMSRECHTE</h2>
                  <p className="mb-4">
                    Die Website, einschließlich beispielhaft, aber nicht beschränkt auf ihre Programmierung, Bearbeitung, Zusammenstellung und andere für ihren Betrieb notwendige Elemente, Designs, Logos, Text und/oder Grafiken, ist Eigentum des VERANTWORTLICHEN oder verfügt gegebenenfalls über Lizenz oder ausdrückliche Genehmigung der Autoren. Alle Inhalte der Website sind ordnungsgemäß durch das geistige und gewerbliche Eigentumsrecht geschützt sowie in den entsprechenden öffentlichen Registern eingetragen.
                  </p>
                  <p className="mb-4">
                    Unabhängig vom Zweck, für den sie bestimmt waren, erfordert die vollständige oder teilweise Reproduktion, Nutzung, Ausbeutung, Verteilung und Vermarktung in jedem Fall die vorherige schriftliche Genehmigung des VERANTWORTLICHEN.
                  </p>
                  <p className="mb-4">
                    Jede vorherige nicht autorisierte Nutzung gilt als schwerwiegender Verstoß gegen die geistigen oder gewerblichen Eigentumsrechte des Autors.
                  </p>
                  <p className="mb-4">
                    Die Designs, Logos, Texte und/oder Grafiken Dritter, die auf der Website erscheinen könnten, gehören ihren jeweiligen Eigentümern, die für mögliche Streitigkeiten verantwortlich sind, die daraus entstehen könnten. Der VERANTWORTLICHE autorisiert ausdrücklich Dritte, direkt auf die konkreten Inhalte der Website weiterzuleiten und in jedem Fall auf die Hauptwebsite von albiolconsultors.com weiterzuleiten.
                  </p>
                  <p className="mb-4">
                    Der VERANTWORTLICHE erkennt zugunsten ihrer Inhaber die entsprechenden geistigen und gewerblichen Eigentumsrechte an, ohne dass ihre bloße Erwähnung oder ihr Erscheinen auf der Website die Existenz von Rechten oder Verantwortung dafür impliziert, noch Unterstützung, Sponsoring oder Empfehlung durch den VERANTWORTLICHEN.
                  </p>
                  <p className="mb-4">
                    Um jegliche Art von Beobachtungen bezüglich möglicher Verletzungen der geistigen oder gewerblichen Eigentumsrechte sowie bezüglich irgendeines Inhalts der Website zu machen, können Sie dies per E-Mail an info@albiolconsultors.com tun.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">3. HAFTUNGSAUSSCHLUSS</h2>
                  <p className="mb-4">
                    Der VERANTWORTLICHE ist von jeglicher Haftung befreit, die aus den auf seiner Website veröffentlichten Informationen resultiert, solange er keine tatsächliche Kenntnis davon hat, dass diese Informationen von einem Dritten manipuliert oder eingeführt wurden, der nicht zu ihm gehört, oder wenn er es hat, mit Sorgfalt gehandelt hat, um die Daten zu entfernen oder den Zugang zu ihnen unmöglich zu machen.
                  </p>

                  <h3 className="text-xl font-semibold mb-3">Cookie-Nutzung</h3>
                  <p className="mb-4">
                    Diese Website kann technische Cookies verwenden (kleine Informationsdateien, die der Server an den Computer der Person sendet, die auf die Seite zugreift), um bestimmte Funktionen auszuführen, die als wesentlich für das korrekte Funktionieren und die Anzeige des Webs angesehen werden. Die verwendeten Cookies haben in jedem Fall temporären Charakter, mit dem alleinigen Zweck, die Navigation effizienter zu gestalten, und verschwinden nach Beendigung der Benutzersitzung. In keinem Fall stellen diese Cookies selbst personenbezogene Daten zur Verfügung und werden nicht zur Erfassung solcher Daten verwendet.
                  </p>
                  <p className="mb-4">
                    Durch die Verwendung von Cookies ist es auch möglich, dass der Server, auf dem sich das Web befindet, den vom Benutzer verwendeten Browser erkennt, um die Navigation einfacher zu gestalten, indem beispielsweise der Zugang für Benutzer, die sich zuvor registriert haben, zu Bereichen, Diensten, Werbeaktionen oder Wettbewerben ermöglicht wird, die ausschließlich für sie reserviert sind, ohne sich bei jedem Besuch registrieren zu müssen. Sie können auch verwendet werden, um das Publikum zu messen, Verkehrsparameter zu steuern, Fortschritt und Anzahl der Einträge zu kontrollieren usw. In diesen Fällen sind Cookies technisch verzichtbar, aber für den Benutzer vorteilhaft. Diese Website wird keine verzichtbaren Cookies ohne vorherige Zustimmung des Benutzers installieren.
                  </p>
                  <p className="mb-4">
                    Wir verwenden eigene und Cookies von Dritten für analytische Zwecke und um Ihnen personalisierte Werbung basierend auf einem Profil zu zeigen, das aus Ihren Surfgewohnheiten erstellt wurde (z. B. besuchte Seiten). Alle Benutzer, die die Website besuchen, werden über die Verwendung dieser Cookies durch ein schwebendes Banner informiert. Falls sie deren Verwendung akzeptieren, verschwindet das Banner, obwohl sie jederzeit die Zustimmung widerrufen und weitere Informationen erhalten können, indem sie unsere Cookie-Richtlinie konsultieren.
                  </p>
                  <p className="mb-4">
                    Der Benutzer hat die Möglichkeit, seinen Browser so zu konfigurieren, dass er über den Empfang von Cookies benachrichtigt wird und deren Installation auf seinem Gerät verhindert. Bitte konsultieren Sie die Anweisungen Ihres Browsers, um diese Informationen zu erweitern.
                  </p>

                  <h3 className="text-xl font-semibold mb-3">Link-Richtlinie</h3>
                  <p className="mb-4">
                    Von der Website aus ist es möglich, zu Inhalten von Websites Dritter weitergeleitet zu werden. Da der VERANTWORTLICHE nicht immer die Inhalte kontrollieren kann, die Dritte auf ihren jeweiligen Websites einführen, übernimmt er keine Verantwortung für diese Inhalte. In jedem Fall wird er sofort jeden Inhalt entfernen, der gegen nationales oder internationales Recht, Moral oder öffentliche Ordnung verstoßen könnte, indem er sofort die Weiterleitung zu dieser Website entfernt und die zuständigen Behörden über den betreffenden Inhalt informiert.
                  </p>
                  <p className="mb-4">
                    Der VERANTWORTLICHE ist nicht verantwortlich für die Informationen und Inhalte, die beispielhaft, aber nicht beschränkt in Foren, Chats, Blog-Generatoren, Kommentaren, sozialen Netzwerken oder anderen Mitteln gespeichert sind, die es Dritten ermöglichen, Inhalte unabhängig auf der Website des VERANTWORTLICHEN zu veröffentlichen. Jedoch und in Übereinstimmung mit den Artikeln 11 und 16 der LSSICE stellt er sich allen Benutzern, Behörden und Sicherheitskräften zur Verfügung, die aktiv an der Entfernung oder gegebenenfalls Sperrung aller Inhalte mitwirken, die nationales oder internationales Recht, Rechte Dritter oder Moral und öffentliche Ordnung beeinträchtigen oder verletzen könnten. Wenn der Benutzer der Ansicht ist, dass die Website Material enthält, das dieser Klassifizierung unterliegen könnte, bitten wir ihn, dies sofort dem Website-Administrator mitzuteilen.
                  </p>
                  <p className="mb-4">
                    Diese Website wurde überprüft und getestet, um korrekt zu funktionieren. Grundsätzlich kann garantiert werden, dass sie 365 Tage im Jahr, 24 Stunden am Tag korrekt funktionieren wird. Der VERANTWORTLICHE schließt jedoch nicht die Möglichkeit aus, dass Programmierfehler auftreten oder höhere Gewalt, Naturkatastrophen, Streiks oder ähnliche Umstände eintreten, die den Zugang zur Website unmöglich machen.
                  </p>

                  <h3 className="text-xl font-semibold mb-3">IP-Adressen</h3>
                  <p className="mb-4">
                    Die Server der Website können automatisch die IP-Adresse und den Domainnamen erkennen, die vom Benutzer verwendet werden. Eine IP-Adresse ist eine Nummer, die automatisch einem Computer zugewiesen wird, wenn er sich mit dem Internet verbindet. Alle diese Informationen werden in einer ordnungsgemäß registrierten Server-Aktivitätsdatei aufgezeichnet, die es ermöglicht, die Daten anschließend zu verarbeiten, um ausschließlich statistische Messungen zu erhalten, die es ermöglichen, die Anzahl der Seitenaufrufe, die Anzahl der Besuche auf Webservern, die Besuchsreihenfolge, den Zugangspunkt usw. zu kennen.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">4. ANWENDBARES RECHT UND GERICHTSBARKEIT</h2>
                  <p className="mb-4">
                    Für die Beilegung aller Streitigkeiten oder Fragen im Zusammenhang mit dieser Website oder der darin ausgeübten Tätigkeiten gilt das spanische Recht, dem sich die Parteien ausdrücklich unterwerfen, wobei die Gerichte und Tribunale des Wohnsitzes des NUTZERS oder des Ortes der Vertragserfüllung für die Beilegung aller Konflikte zuständig sind, die aus oder im Zusammenhang mit ihrer Nutzung entstehen.
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
