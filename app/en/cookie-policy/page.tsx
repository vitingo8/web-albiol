"use client"

import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header locale="en" onLocaleChange={() => {}} />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="container mx-auto px-6 md:px-8 lg:px-12">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6">
                <span>Cookie Policy</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-balance leading-tight">
                Cookie Policy
              </h1>

              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Information about the use of cookies on our website according to EU regulations.
              </p>

              <Button asChild variant="outline" className="gap-2">
                <Link href="/">
                  <ArrowLeft className="h-4 w-4" />
                  Back to Home
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
                    This cookie policy was last updated on November 28, 2025 and applies to citizens and legal permanent residents of the European Economic Area and Switzerland.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
                  <p className="mb-4">
                    Our website, https://albiolconsultors.com (hereinafter "the website") uses cookies and other related technologies (for convenience, all technologies are called "cookies"). Cookies are also placed by third parties we have contracted. In the following document we inform you about the use of cookies on our website.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">2. What are cookies?</h2>
                  <p className="mb-4">
                    A cookie is a small and simple file that is sent along with pages of this website and that your browser stores on the hard disk of your computer or another device. The information stored in it can be returned to our servers or to the corresponding third-party servers during a subsequent visit.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">3. What are scripts?</h2>
                  <p className="mb-4">
                    A script is a piece of software code that is used to make our website function properly and interactively. This code runs on our server or on your device.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">4. What is a web beacon?</h2>
                  <p className="mb-4">
                    A web beacon (or pixel tag) is a small and invisible piece of text or image on a website that is used to monitor traffic on a website. To do this, various data are stored using web beacons.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">5. Cookies</h2>

                  <h3 className="text-xl font-semibold mb-3">5.1 Technical or functional cookies</h3>
                  <p className="mb-4">
                    Some cookies ensure that certain parts of the website function properly and that user preferences remain known. By using functional cookies, we make it easier for you to visit our website. In this way, you do not have to repeatedly enter the same information when you visit our website and, for example, the items remain in the shopping cart until you have paid. We can place these cookies without your consent.
                  </p>

                  <h3 className="text-xl font-semibold mb-3">5.2 Statistics cookies</h3>
                  <p className="mb-4">
                    We use analytical cookies to optimize the website experience for our users. With these analytical cookies we obtain information about the use of our website. We ask for your permission to place statistics cookies.
                  </p>

                  <h3 className="text-xl font-semibold mb-3">5.3 Marketing/tracking cookies</h3>
                  <p className="mb-4">
                    Marketing/tracking cookies are cookies or any other form of local storage used to create user profiles to display advertising or to track the user on this website or on various websites for similar marketing purposes.
                  </p>

                  <h3 className="text-xl font-semibold mb-3">5.4 Social media</h3>
                  <p className="mb-4">
                    On our website, we have included WhatsApp content to promote web pages (for example, "like", "pin") or share (for example, "tweet") on social networks like WhatsApp. This content is embedded with code derived from WhatsApp and places cookies. This content may store and process certain information for personalized advertising.
                  </p>
                  <p className="mb-4">
                    Please read the privacy policy of these social networks (which may change regularly) to understand what they do with your personal data processed using these cookies. The data retrieved are anonymized as much as possible. WhatsApp is located in the United States.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">6. Cookies placed</h2>

                  <div className="mb-4">
                    <h3 className="text-lg font-semibold mb-2">Google Analytics</h3>
                    <p className="mb-1"><strong>Purpose:</strong> Statistics</p>
                    <p className="mb-1"><strong>Consent:</strong> Consent to service google-analytics</p>
                  </div>

                  <div className="mb-4">
                    <h3 className="text-lg font-semibold mb-2">Vercel Analytics</h3>
                    <p className="mb-1"><strong>Purpose:</strong> Statistics</p>
                    <p className="mb-1"><strong>Consent:</strong> Consent to service vercel-analytics</p>
                  </div>

                  <div className="mb-4">
                    <h3 className="text-lg font-semibold mb-2">WhatsApp</h3>
                    <p className="mb-1"><strong>Purpose:</strong> Functional</p>
                    <p className="mb-1"><strong>Consent:</strong> Consent to service whatsapp</p>
                  </div>

                  <div className="mb-4">
                    <h3 className="text-lg font-semibold mb-2">Functional cookies</h3>
                    <p className="mb-1"><strong>Purpose:</strong> Functional</p>
                    <p className="mb-1"><strong>Consent:</strong> Consent to service functional-cookies</p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">7. Consent</h2>
                  <p className="mb-4">
                    When you visit our website for the first time, we will show you a pop-up message with an explanation about cookies. As soon as you click "Save preferences", you consent to us using the categories of cookies and extensions you have selected in the pop-up message, as described in this Cookie Policy. You can disable the use of cookies through your browser, but please note that our website may not function properly.
                  </p>

                  <h3 className="text-xl font-semibold mb-3">7.1 Manage your consent settings</h3>
                  <p className="mb-2"><strong>Functional:</strong> Always active</p>
                  <p className="mb-2"><strong>Statistics:</strong> Statistics</p>
                  <p className="mb-2"><strong>Marketing:</strong> Marketing</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">8. Enabling / disabling and deleting cookies</h2>
                  <p className="mb-4">
                    You can use the browser to automatically or manually delete cookies. In addition, you can specify that certain cookies should not be placed. Another option is to change your browser preferences to receive a message each time a cookie is placed. For more information, you can consult the instructions in your browser's Help.
                  </p>
                  <p className="mb-4">
                    Please note that our website may not function properly if all cookies are disabled. If you delete the cookies from your browser, new ones will be created after your consent when you return to visit our websites.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">9. Your rights regarding personal data</h2>
                  <p className="mb-4">You have the following rights regarding your personal data:</p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>You have the right to know why your personal data are needed, what will happen to them and how long they will be kept.</li>
                    <li>Right of access: you have the right to access your personal data that are known to us.</li>
                    <li>Right of rectification: you have the right to complete, correct, delete or block your personal data whenever you wish.</li>
                    <li>If you give us consent to process your data, you have the right to revoke this consent and to have your personal data deleted.</li>
                    <li>Right to data transfer: you have the right to request all your personal data from the controller and transfer them in their entirety to another controller.</li>
                    <li>Right of objection: you can object to the processing of your data. We comply with this, unless there are justified reasons for the processing.</li>
                  </ul>
                  <p className="mb-4">
                    To exercise these rights, please contact us. Please see the contact details at the bottom of this Cookie Policy. If you have a complaint about how we handle your data, we would like to hear from you, but you also have the right to file a complaint with the supervisory authority (the Data Protection Agency).
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">10. Contact details</h2>
                  <p className="mb-4">
                    For questions and/or comments about our Cookie Policy and this statement, please contact us using the following contact details:
                  </p>
                  <p className="mb-2"><strong>ALBIOL CONSULTORS LEGALS I D'EMPRESA SL</strong></p>
                  <p className="mb-2">Carrer Argentina, 9, 2A - 43500 Tortosa (Tarragona)</p>
                  <p className="mb-2">Spain</p>
                  <p className="mb-2">Website: https://albiolconsultors.com</p>
                  <p className="mb-2">Email: info@albiolconsultors.com</p>
                  <p className="mb-2">Phone: 680 132 404</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer locale="en" onLocaleChange={() => {}} />
    </div>
  )
}
