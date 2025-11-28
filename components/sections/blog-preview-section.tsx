import { BlogCard } from "@/components/blog-card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import type { Locale } from "@/lib/i18n"
import { getTranslation } from "@/lib/i18n"

interface BlogPreviewSectionProps {
  locale: Locale
}

export function BlogPreviewSection({ locale }: BlogPreviewSectionProps) {
  const t = getTranslation(locale)

  const posts = [
    {
      title:
        locale === "ca"
          ? "Com donar-te d'alta d'autònom pas a pas"
          : locale === "es"
            ? "Cómo darse de alta como autónomo paso a paso"
            : "How to register as a freelancer step by step",
      excerpt:
        locale === "ca"
          ? "Guia completa amb tots els passos per donar-te d'alta com a treballador autònom a Espanya el 2024."
          : locale === "es"
            ? "Guía completa con todos los pasos para darte de alta como trabajador autónomo en España en 2024."
            : "Complete guide with all the steps to register as a self-employed worker in Spain in 2024.",
      category: locale === "ca" ? "Autònoms" : locale === "es" ? "Autónomos" : "Freelancers",
      date: "15 Nov 2024",
      image: "/freelancer-registration-documents-paperwork-office.jpg",
      href: "/blog/alta-autonom",
    },
    {
      title:
        locale === "ca"
          ? "Guia bàsica per preparar la declaració de la renda"
          : locale === "es"
            ? "Guía básica para preparar la declaración de la renta"
            : "Basic guide to preparing your income tax return",
      excerpt:
        locale === "ca"
          ? "Tot el que necessites saber per fer la teva declaració de la renda sense errors."
          : locale === "es"
            ? "Todo lo que necesitas saber para hacer tu declaración de la renta sin errores."
            : "Everything you need to know to file your income tax return without errors.",
      category: "Fiscal",
      date: "8 Nov 2024",
      image: "/tax-declaration-calculator-documents-finance.jpg",
      href: "/blog/declaracio-renda",
    },
    {
      title:
        locale === "ca"
          ? "Errors freqüents en la gestió de nòmines"
          : locale === "es"
            ? "Errores frecuentes en la gestión de nóminas"
            : "Common payroll management mistakes",
      excerpt:
        locale === "ca"
          ? "Descobreix els errors més habituals que cometen les pimes en la gestió de nòmines i com evitar-los."
          : locale === "es"
            ? "Descubre los errores más habituales que cometen las pymes en la gestión de nóminas y cómo evitarlos."
            : "Discover the most common mistakes SMEs make in payroll management and how to avoid them.",
      category: locale === "ca" ? "Laboral" : locale === "es" ? "Laboral" : "Labour",
      date: "1 Nov 2024",
      image: "/payroll-management-hr-documents-salary.jpg",
      href: "/blog/errors-nomines",
    },
  ]

  return (
    <section className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-6 md:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <span className="inline-block text-sm font-medium text-secondary uppercase tracking-widest mb-4">Blog</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-2">{t.blog.title}</h2>
            <p className="text-muted-foreground">{t.blog.subtitle}</p>
          </div>
          <Link href="/blog">
            <Button variant="outline" className="gap-2 bg-transparent">
              {locale === "ca" ? "Veure tot el blog" : locale === "es" ? "Ver todo el blog" : "View all posts"}
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <BlogCard
              key={post.href}
              title={post.title}
              excerpt={post.excerpt}
              category={post.category}
              date={post.date}
              image={post.image}
              href={post.href}
              readMore={t.blog.readMore}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
