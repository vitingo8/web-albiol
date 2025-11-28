"use client"

import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function LegalNoticePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header locale="en" onLocaleChange={() => {}} />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="container mx-auto px-6 md:px-8 lg:px-12">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6">
                <span>Legal Notice</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-balance leading-tight">
                Legal Notice
              </h1>

              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Legal information and terms of use of our website according to LSSI.
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
                  <h2 className="text-2xl font-bold mb-4">INFORMATION SOCIETY SERVICES ACT (LSSI)</h2>
                  <p className="mb-4">
                    ALBIOL CONSULTORS LEGALS I D'EMPRESA SL, responsible for the website, hereinafter the CONTROLLER, makes this document available to users, with which it intends to comply with the obligations set forth in Law 34/2002, of July 11, on Information Society Services and Electronic Commerce (LSSICE), BOE No. 166, as well as inform all users of the website about what the conditions of use are.
                  </p>
                  <p className="mb-4">
                    Any person who accesses this website assumes the role of user, committing to the strict observance and compliance with the provisions set forth herein, as well as any other legal provision that may apply.
                  </p>
                  <p className="mb-4">
                    ALBIOL CONSULTORS LEGALS I D'EMPRESA SL reserves the right to modify any type of information that may appear on the website, without the obligation to notify or inform users of said obligations, since it is considered sufficient to publish it on the ALBIOL CONSULTORS LEGALS I D'EMPRESA SL website.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">1. IDENTIFYING DATA</h2>
                  <p className="mb-2"><strong>Domain name:</strong> albiolconsultors.com</p>
                  <p className="mb-2"><strong>Commercial name:</strong> ALBIOL CONSULTORS LEGALS I D'EMPRESA SL</p>
                  <p className="mb-2"><strong>Corporate name:</strong> ALBIOL CONSULTORS LEGALS I D'EMPRESA SL</p>
                  <p className="mb-2"><strong>Tax ID:</strong> B55756738</p>
                  <p className="mb-2"><strong>Registered address:</strong> Carrer Argentina, 9, 2A - 43500 Tortosa (Tarragona)</p>
                  <p className="mb-2"><strong>Telephone:</strong> 680 132 404</p>
                  <p className="mb-2"><strong>E-mail:</strong> info@albiolconsultors.com</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">2. INTELLECTUAL AND INDUSTRIAL PROPERTY RIGHTS</h2>
                  <p className="mb-4">
                    The website, including but not limited to its programming, editing, compilation and other elements necessary for its operation, designs, logos, text and/or graphics, is the property of the CONTROLLER or, where appropriate, has a license or express authorization from the authors. All contents of the website are duly protected by intellectual and industrial property regulations, as well as registered in the corresponding public registers.
                  </p>
                  <p className="mb-4">
                    Regardless of the purpose for which they were intended, total or partial reproduction, use, exploitation, distribution and commercialization requires in any case the prior written authorization of the CONTROLLER.
                  </p>
                  <p className="mb-4">
                    Any unauthorized prior use is considered a serious breach of the author's intellectual or industrial property rights.
                  </p>
                  <p className="mb-4">
                    The designs, logos, text and/or graphics belonging to third parties that may appear on the website belong to their respective owners, who are responsible for any possible controversy that may arise. The CONTROLLER expressly authorizes third parties to redirect directly to the specific contents of the website, and in any case to redirect to the main website of albiolconsultors.com.
                  </p>
                  <p className="mb-4">
                    The CONTROLLER acknowledges in favor of their holders the corresponding intellectual and industrial property rights, without implying that their mere mention or appearance on the website means the existence of rights or responsibility over them, nor support, sponsorship or recommendation by the CONTROLLER.
                  </p>
                  <p className="mb-4">
                    To make any type of observation regarding possible infringements of intellectual or industrial property rights, as well as regarding any of the contents of the website, you can do so through the email info@albiolconsultors.com.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">3. EXEMPTION FROM LIABILITIES</h2>
                  <p className="mb-4">
                    The CONTROLLER is exempt from any type of liability derived from the information published on its website provided that it does not have effective knowledge that this information has been manipulated or introduced by a third party alien to it or, if it has, has acted diligently to remove the data or make access to them impossible.
                  </p>

                  <h3 className="text-xl font-semibold mb-3">Cookie Usage</h3>
                  <p className="mb-4">
                    This website may use technical cookies (small information files that the server sends to the computer of whoever accesses the page) to carry out certain functions that are considered essential for the correct functioning and display of the web. The cookies used have, in any case, a temporary nature, with the sole purpose of making navigation more efficient, and disappear when the user's session ends. In no case do these cookies provide personal data by themselves and will not be used to collect data of this type.
                  </p>
                  <p className="mb-4">
                    Through the use of cookies, it is also possible that the server where the web is located recognizes the browser used by the user, in order to make navigation easier, allowing, for example, access for users who have previously registered to areas, services, promotions or contests reserved exclusively for them without having to register on each visit. They can also be used to measure audience, traffic parameters, control progress and number of entries, etc. In these cases, cookies are technically dispensable but beneficial for the user. This website will not install dispensable cookies without the user's prior consent.
                  </p>
                  <p className="mb-4">
                    We use our own and third-party cookies for analytical purposes and to show you personalized advertising based on a profile created from your browsing habits (for example, pages visited). All users who visit the web are informed of the use of these cookies through a floating banner. If they accept their use, the banner will disappear, although at any time they can revoke consent and obtain more information by consulting our Cookie Policy.
                  </p>
                  <p className="mb-4">
                    The user has the possibility to configure their browser to be alerted of the receipt of cookies and to prevent their installation on their equipment. Please consult your browser's instructions to expand this information.
                  </p>

                  <h3 className="text-xl font-semibold mb-3">Link Policy</h3>
                  <p className="mb-4">
                    From the website, it is possible to redirect to content from third-party websites. Since the CONTROLLER cannot always control the contents introduced by third parties on their respective websites, it assumes no type of responsibility regarding these contents. In any case, it will immediately remove any content that may contravene national or international legislation, morals or public order, immediately removing the redirection to said website and informing the competent authorities of the content in question.
                  </p>
                  <p className="mb-4">
                    The CONTROLLER is not responsible for the information and contents stored, by way of example but not limitation, in forums, chats, blog generators, comments, social networks or any other means that allows third parties to publish contents independently on the CONTROLLER's website. However, and in compliance with the provisions of articles 11 and 16 of the LSSICE, it makes itself available to all users, authorities and security forces that actively collaborate in the removal or, where appropriate, blocking of all contents that may affect or contravene national or international legislation, third party rights or morals and public order. If the user considers that the website contains material that may be susceptible to this classification, we ask that they notify the website administrator immediately.
                  </p>
                  <p className="mb-4">
                    This website has been reviewed and tested to function correctly. In principle, it can be guaranteed that it will function correctly 365 days a year, 24 hours a day. However, the CONTROLLER does not rule out the possibility that programming errors may occur, or that force majeure causes, natural catastrophes, strikes or similar circumstances may occur that make access to the website impossible.
                  </p>

                  <h3 className="text-xl font-semibold mb-3">IP Addresses</h3>
                  <p className="mb-4">
                    The website's servers may automatically detect the IP address and domain name used by the user. An IP address is a number automatically assigned to a computer when it connects to the Internet. All this information is recorded in a duly registered server activity file that allows the data to be subsequently processed in order to obtain measurements that are solely statistical and allow the number of page impressions, the number of visits made to web servers, the order of visits, the access point, etc. to be known.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">4. APPLICABLE LAW AND JURISDICTION</h2>
                  <p className="mb-4">
                    For the resolution of all controversies or issues related to this website or the activities carried out therein, Spanish legislation shall apply, to which the parties expressly submit, being competent for the resolution of all conflicts arising from or related to its use the Courts and Tribunals of the USER's domicile or the place of fulfillment of the obligation.
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
