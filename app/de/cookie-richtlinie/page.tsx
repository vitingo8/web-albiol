"use client"

import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function CookieRichtliniePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header locale="de" onLocaleChange={() => {}} />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="container mx-auto px-6 md:px-8 lg:px-12">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6">
                <span>Cookie-Richtlinie</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-balance leading-tight">
                Cookie-Richtlinie
              </h1>

              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Informationen über die Verwendung von Cookies auf unserer Website gemäß EU-Vorschriften.
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
                  <p className="mb-4">
                    Diese Cookie-Richtlinie wurde zuletzt am 28. November 2025 aktualisiert und gilt für Bürger und legale ständige Einwohner des Europäischen Wirtschaftsraums und der Schweiz.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">1. Einführung</h2>
                  <p className="mb-4">
                    Unsere Website, https://albiolconsultors.com (nachstehend "die Website") verwendet Cookies und andere verwandte Technologien (der Einfachheit halber werden alle Technologien als "Cookies" bezeichnet). Cookies werden auch von Dritten platziert, die wir beauftragt haben. Im folgenden Dokument informieren wir Sie über die Verwendung von Cookies auf unserer Website.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">2. Was sind Cookies?</h2>
                  <p className="mb-4">
                    Ein Cookie ist eine kleine und einfache Datei, die zusammen mit Seiten dieser Website gesendet wird und die Ihr Browser auf der Festplatte Ihres Computers oder eines anderen Geräts speichert. Die darin gespeicherten Informationen können bei einem späteren Besuch an unsere Server oder an die entsprechenden Server der Dritten zurückgegeben werden.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">3. Was sind Skripte?</h2>
                  <p className="mb-4">
                    Ein Skript ist ein Stück Softwarecode, das verwendet wird, damit unsere Website ordnungsgemäß und interaktiv funktioniert. Dieser Code wird auf unserem Server oder auf Ihrem Gerät ausgeführt.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">4. Was ist ein Web-Beacon?</h2>
                  <p className="mb-4">
                    Ein Web-Beacon (oder Pixel-Tag) ist ein kleines und unsichtbares Stück Text oder Bild auf einer Website, das verwendet wird, um den Verkehr auf einer Website zu überwachen. Dafür werden verschiedene Daten mit Web-Beacons gespeichert.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">5. Cookies</h2>

                  <h3 className="text-xl font-semibold mb-3">5.1 Technische oder funktionale Cookies</h3>
                  <p className="mb-4">
                    Einige Cookies stellen sicher, dass bestimmte Teile der Website ordnungsgemäß funktionieren und dass die Benutzerpräferenzen bekannt bleiben. Durch die Verwendung funktionaler Cookies erleichtern wir Ihnen den Besuch unserer Website. Auf diese Weise müssen Sie nicht wiederholt dieselben Informationen eingeben, wenn Sie unsere Website besuchen, und beispielsweise bleiben die Artikel im Warenkorb, bis Sie bezahlt haben. Wir können diese Cookies ohne Ihre Zustimmung platzieren.
                  </p>

                  <h3 className="text-xl font-semibold mb-3">5.2 Statistik-Cookies</h3>
                  <p className="mb-4">
                    Wir verwenden analytische Cookies, um die Website-Erfahrung für unsere Benutzer zu optimieren. Mit diesen analytischen Cookies erhalten wir Informationen über die Nutzung unserer Website. Wir bitten um Ihre Erlaubnis, Statistik-Cookies zu platzieren.
                  </p>

                  <h3 className="text-xl font-semibold mb-3">5.3 Marketing/Tracking-Cookies</h3>
                  <p className="mb-4">
                    Marketing/Tracking-Cookies sind Cookies oder jede andere Form der lokalen Speicherung, die verwendet werden, um Benutzerprofile zu erstellen, um Werbung anzuzeigen oder den Benutzer auf dieser Website oder auf verschiedenen Websites für ähnliche Marketingzwecke zu verfolgen.
                  </p>

                  <h3 className="text-xl font-semibold mb-3">5.4 Soziale Medien</h3>
                  <p className="mb-4">
                    Auf unserer Website haben wir WhatsApp-Inhalte eingebunden, um Webseiten zu bewerben (zum Beispiel "Gefällt mir", "Anheften") oder zu teilen (zum Beispiel "twittern") in sozialen Netzwerken wie WhatsApp. Dieser Inhalt ist mit von WhatsApp abgeleitetem Code eingebettet und platziert Cookies. Dieser Inhalt kann bestimmte Informationen für personalisierte Werbung speichern und verarbeiten.
                  </p>
                  <p className="mb-4">
                    Bitte lesen Sie die Datenschutzrichtlinie dieser sozialen Netzwerke (die sich regelmäßig ändern können), um zu verstehen, was sie mit Ihren personenbezogenen Daten tun, die mit diesen Cookies verarbeitet werden. Die abgerufenen Daten werden so weit wie möglich anonymisiert. WhatsApp befindet sich in den Vereinigten Staaten.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">6. Platzierte Cookies</h2>

                  <div className="mb-4">
                    <h3 className="text-lg font-semibold mb-2">Google Analytics</h3>
                    <p className="mb-1"><strong>Zweck:</strong> Statistiken</p>
                    <p className="mb-1"><strong>Zustimmung:</strong> Consent to service google-analytics</p>
                  </div>

                  <div className="mb-4">
                    <h3 className="text-lg font-semibold mb-2">Vercel Analytics</h3>
                    <p className="mb-1"><strong>Zweck:</strong> Statistiken</p>
                    <p className="mb-1"><strong>Zustimmung:</strong> Consent to service vercel-analytics</p>
                  </div>

                  <div className="mb-4">
                    <h3 className="text-lg font-semibold mb-2">WhatsApp</h3>
                    <p className="mb-1"><strong>Zweck:</strong> Funktional</p>
                    <p className="mb-1"><strong>Zustimmung:</strong> Consent to service whatsapp</p>
                  </div>

                  <div className="mb-4">
                    <h3 className="text-lg font-semibold mb-2">Funktionale Cookies</h3>
                    <p className="mb-1"><strong>Zweck:</strong> Funktional</p>
                    <p className="mb-1"><strong>Zustimmung:</strong> Consent to service functional-cookies</p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">7. Zustimmung</h2>
                  <p className="mb-4">
                    Wenn Sie unsere Website zum ersten Mal besuchen, zeigen wir Ihnen eine Pop-up-Nachricht mit einer Erklärung über Cookies. Sobald Sie auf "Einstellungen speichern" klicken, stimmen Sie zu, dass wir die Kategorien von Cookies und Erweiterungen verwenden, die Sie in der Pop-up-Nachricht ausgewählt haben, wie in dieser Cookie-Richtlinie beschrieben. Sie können die Verwendung von Cookies über Ihren Browser deaktivieren, aber bitte beachten Sie, dass unsere Website möglicherweise nicht ordnungsgemäß funktioniert.
                  </p>

                  <h3 className="text-xl font-semibold mb-3">7.1 Verwalten Sie Ihre Zustimmungseinstellungen</h3>
                  <p className="mb-2"><strong>Funktional:</strong> Immer aktiv</p>
                  <p className="mb-2"><strong>Statistiken:</strong> Statistiken</p>
                  <p className="mb-2"><strong>Marketing:</strong> Marketing</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">8. Aktivierung / Deaktivierung und Löschung von Cookies</h2>
                  <p className="mb-4">
                    Sie können den Browser verwenden, um Cookies automatisch oder manuell zu löschen. Darüber hinaus können Sie angeben, dass bestimmte Cookies nicht platziert werden sollen. Eine weitere Option besteht darin, die Einstellungen Ihres Browsers zu ändern, um jedes Mal eine Nachricht zu erhalten, wenn ein Cookie platziert wird. Für weitere Informationen können Sie die Anweisungen in der Hilfe Ihres Browsers konsultieren.
                  </p>
                  <p className="mb-4">
                    Bitte beachten Sie, dass unsere Website möglicherweise nicht ordnungsgemäß funktioniert, wenn alle Cookies deaktiviert sind. Wenn Sie die Cookies aus dem Browser löschen, werden neue erstellt, nachdem Sie Ihre Zustimmung erteilt haben, wenn Sie unsere Websites erneut besuchen.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">9. Ihre Rechte bezüglich personenbezogener Daten</h2>
                  <p className="mb-4">Sie haben die folgenden Rechte bezüglich Ihrer personenbezogenen Daten:</p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>Sie haben das Recht zu wissen, warum Ihre personenbezogenen Daten benötigt werden, was mit ihnen geschehen wird und wie lange sie gespeichert werden.</li>
                    <li>Auskunftsrecht: Sie haben das Recht, auf Ihre uns bekannten personenbezogenen Daten zuzugreifen.</li>
                    <li>Berichtigungsrecht: Sie haben das Recht, Ihre personenbezogenen Daten jederzeit zu vervollständigen, zu korrigieren, zu löschen oder zu sperren.</li>
                    <li>Wenn Sie uns Ihre Zustimmung zur Verarbeitung Ihrer Daten geben, haben Sie das Recht, diese Zustimmung zu widerrufen und Ihre personenbezogenen Daten löschen zu lassen.</li>
                    <li>Recht auf Datenübertragbarkeit: Sie haben das Recht, alle Ihre personenbezogenen Daten vom Verantwortlichen anzufordern und sie in ihrer Gesamtheit an einen anderen Verantwortlichen zu übertragen.</li>
                    <li>Widerspruchsrecht: Sie können der Verarbeitung Ihrer Daten widersprechen. Wir halten uns daran, es sei denn, es gibt gerechtfertigte Gründe für die Verarbeitung.</li>
                  </ul>
                  <p className="mb-4">
                    Um diese Rechte auszuüben, kontaktieren Sie uns bitte. Bitte sehen Sie sich die Kontaktdaten am Ende dieser Cookie-Richtlinie an. Wenn Sie eine Beschwerde darüber haben, wie wir Ihre Daten verwalten, würden wir gerne von Ihnen hören, aber Sie haben auch das Recht, eine Beschwerde bei der Aufsichtsbehörde (der Datenschutzbehörde) einzureichen.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">10. Kontaktdaten</h2>
                  <p className="mb-4">
                    Für Fragen und/oder Kommentare zu unserer Cookie-Richtlinie und dieser Erklärung kontaktieren Sie uns bitte mit den folgenden Kontaktdaten:
                  </p>
                  <p className="mb-2"><strong>ALBIOL CONSULTORS LEGALS I D'EMPRESA SL</strong></p>
                  <p className="mb-2">Carrer Argentina, 9, 2A - 43500 Tortosa (Tarragona)</p>
                  <p className="mb-2">Spanien</p>
                  <p className="mb-2">Website: https://albiolconsultors.com</p>
                  <p className="mb-2">E-Mail: info@albiolconsultors.com</p>
                  <p className="mb-2">Telefon: 680 132 404</p>
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
