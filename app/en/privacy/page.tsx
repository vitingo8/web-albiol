"use client"

import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header locale="en" onLocaleChange={() => {}} />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="container mx-auto px-6 md:px-8 lg:px-12">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6">
                <span>Privacy Policy</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-balance leading-tight">
                Privacy Policy
              </h1>

              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Your privacy is important to us. This policy explains how we treat and protect your personal data.
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
                  <h2 className="text-2xl font-bold mb-4">1. INFORMATION FOR THE USER</h2>

                  <h3 className="text-xl font-semibold mb-3">Who is responsible for the processing of your personal data?</h3>
                  <p className="mb-4">
                    ALBIOL CONSULTORS LEGALS I D'EMPRESA SL, with Tax ID B55756738, is the CONTROLLER of the processing of the USER's personal data and informs them that these data will be processed in accordance with the provisions of Regulation (EU) 2016/679, of April 27 (GDPR), and Organic Law 3/2018, of December 5 (LOPDGDD).
                  </p>

                  <h3 className="text-xl font-semibold mb-3">Why do we process your personal data?</h3>
                  <p className="mb-3">To maintain a commercial relationship with the user. The operations planned to carry out the processing are:</p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>Sending commercial advertising communications by e-mail, fax, SMS, MMS, social networks or any other electronic or physical means, present or future, that enables commercial communications to be made. These communications will be made by the CONTROLLER and are related to their tax, labor and accounting advisory products and services. In this case, third parties will never have access to personal data.</li>
                    <li>Conduct market studies and statistical analysis related to advisory services.</li>
                    <li>Process requests for orders, respond to inquiries about tax, labor and accounting services or any type of request made by the USER through any of the contact forms made available to them on the CONTROLLER's website.</li>
                    <li>Send the online newsletter about news, offers and promotions in our tax and labor advisory services.</li>
                  </ul>

                  <h3 className="text-xl font-semibold mb-3">For what reason can we process your personal data?</h3>
                  <p className="mb-3">Because the processing is legitimized by article 6 of the GDPR as follows:</p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>With the USER's consent: sending commercial communications and the newsletter.</li>
                    <li>For the legitimate interest of the CONTROLLER: conduct market studies, statistical analysis related to advisory services, etc. and process orders, requests, etc. at the USER's request.</li>
                  </ul>

                  <h3 className="text-xl font-semibold mb-3">How long will we keep your personal data?</h3>
                  <p className="mb-4">
                    They will be kept for no longer than necessary to maintain the purpose of the processing or as long as there are legal prescriptions that dictate their custody and when it is no longer necessary for this, they will be deleted with appropriate security measures to guarantee the anonymization of the data or their total destruction.
                  </p>

                  <h3 className="text-xl font-semibold mb-3">To whom do we disclose your personal data?</h3>
                  <p className="mb-4">
                    No communication of personal data to third parties is foreseen except, if necessary for the development and execution of the purposes of the processing, to our service providers related to communications and advisory, with whom the CONTROLLER has formalized the confidentiality and data processor contracts required by current privacy regulations.
                  </p>

                  <h3 className="text-xl font-semibold mb-3">What are your rights?</h3>
                  <p className="mb-3">The rights that the USER has are:</p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>Right to withdraw consent at any time.</li>
                    <li>Right of access, rectification, portability and deletion of their data and limitation or opposition to its processing.</li>
                    <li>Right to file a complaint with the supervisory authority (www.aepd.es) if they consider that the processing does not comply with current regulations.</li>
                  </ul>

                  <h3 className="text-xl font-semibold mb-3">Contact details for exercising your rights:</h3>
                  <p className="mb-4">
                    ALBIOL CONSULTORS LEGALS I D'EMPRESA SL. Carrer Argentina, 9, 2A - 43500 TORTOSA (Tarragona). E-mail: info@albiolconsultors.com
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">2. MANDATORY OR OPTIONAL NATURE OF INFORMATION PROVIDED BY THE USER</h2>
                  <p className="mb-4">
                    USERS, by means of the corresponding boxes and the introduction of data in the fields, marked with an asterisk (*) in the contact form or presented in download forms, expressly and freely accept that their data are necessary to attend to their request by the provider, and that therefore the inclusion of data in the remaining fields is voluntary. The USER guarantees that the personal data provided to the CONTROLLER are truthful and is responsible for communicating any modification thereof.
                  </p>
                  <p className="mb-4">
                    The CONTROLLER informs that all data requested through the website are mandatory, as they are necessary for the provision of optimal service to the USER. In case all data are not provided, it is not guaranteed that the information and services provided fully meet their needs.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">3. SECURITY MEASURES</h2>
                  <p className="mb-4">
                    That, in accordance with the provisions of current regulations on the protection of personal data, the CONTROLLER is complying with all the provisions of the GDPR and LOPDGDD regulations for the processing of personal data under its responsibility, and manifestly with the principles described in article 5 of the GDPR, by which they are processed in a lawful, fair and transparent manner in relation to the interested party and adequate, relevant and limited to what is necessary in relation to the purposes for which they are processed.
                  </p>
                  <p className="mb-4">
                    The CONTROLLER guarantees that it has implemented appropriate technical and organizational policies to apply the security measures established by the GDPR and LOPDGDD to protect the rights and freedoms of USERS and has communicated the appropriate information to them so that they can exercise them.
                  </p>
                  <p className="mb-4">
                    For more information about privacy guarantees, you can contact the CONTROLLER through ALBIOL CONSULTORS LEGALS I D'EMPRESA SL. Carrer Argentina, 9, 2A - 43500 TORTOSA (Tarragona). E-mail: info@albiolconsultors.com
                  </p>
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
