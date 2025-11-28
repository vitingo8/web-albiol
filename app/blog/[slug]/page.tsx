"use client"

import { useState } from "react"
import { useParams } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BlogCard } from "@/components/blog-card"
import { Button } from "@/components/ui/button"
import { getBlogPost, getBlogPosts } from "@/lib/blog-data"
import { ArrowLeft, Calendar, Clock, User, Linkedin, Facebook, Twitter, Link2, Check } from "lucide-react"
import Link from "next/link"
import type { Locale } from "@/lib/i18n"
import { getTranslation } from "@/lib/i18n"

export default function BlogPostPage() {
  const params = useParams()
  const slug = params.slug as string
  const [locale, setLocale] = useState<Locale>("ca")
  const [copied, setCopied] = useState(false)
  const t = getTranslation(locale)

  const post = getBlogPost(slug)
  const allPosts = getBlogPosts()
  const relatedPosts = allPosts.filter((p) => p.slug !== slug && p.category === post?.category).slice(0, 3)

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString(locale === "ca" ? "ca-ES" : locale === "es" ? "es-ES" : "en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    })
  }

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const shareUrl = typeof window !== "undefined" ? window.location.href : ""
  const shareTitle = post?.title[locale] || ""

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header locale={locale} onLocaleChange={setLocale} />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-serif text-3xl font-bold text-foreground mb-4">
              {locale === "ca" ? "Article no trobat" : locale === "es" ? "Artículo no encontrado" : "Article not found"}
            </h1>
            <Link href="/blog">
              <Button className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                {locale === "ca" ? "Tornar al blog" : locale === "es" ? "Volver al blog" : "Back to blog"}
              </Button>
            </Link>
          </div>
        </main>
        <Footer locale={locale} />
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header locale={locale} onLocaleChange={setLocale} />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-primary text-primary-foreground relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground transition-colors mb-8"
              >
                <ArrowLeft className="h-4 w-4" />
                {locale === "ca" ? "Tornar al blog" : locale === "es" ? "Volver al blog" : "Back to blog"}
              </Link>

              <span className="inline-block text-sm font-medium px-3 py-1 rounded-full bg-secondary text-secondary-foreground mb-6">
                {post.categoryLabel[locale]}
              </span>

              <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-balance">
                {post.title[locale]}
              </h1>

              <div className="flex flex-wrap items-center gap-4 text-primary-foreground/70 text-sm">
                <span className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  {post.author}
                </span>
                <span className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  {formatDate(post.date)}
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  {post.readTime}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Image */}
        <section className="relative -mt-8 mb-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={post.image || "/placeholder.svg"}
                  alt={post.title[locale]}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="pb-16 md:pb-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div
                className="prose prose-lg max-w-none
                  prose-headings:font-serif prose-headings:text-foreground
                  prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6
                  prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4
                  prose-p:text-muted-foreground prose-p:leading-relaxed
                  prose-li:text-muted-foreground
                  prose-strong:text-foreground prose-strong:font-semibold
                  prose-a:text-primary prose-a:no-underline hover:prose-a:underline"
              >
                <div
                  dangerouslySetInnerHTML={{
                    __html: post.content[locale]
                      .replace(/\n/g, "<br/>")
                      .replace(/###/g, "<h3>")
                      .replace(/##/g, "<h2>")
                      .replace(/<h3>/g, "</p><h3>")
                      .replace(/<h2>/g, "</p><h2>")
                      .replace(/<\/h3>/g, "</h3><p>")
                      .replace(/<\/h2>/g, "</h2><p>"),
                  }}
                />
              </div>

              <div className="mt-12 pt-8 border-t border-border">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <p className="text-foreground font-medium">
                    {locale === "ca"
                      ? "Comparteix aquest article"
                      : locale === "es"
                        ? "Comparte este artículo"
                        : "Share this article"}
                  </p>
                  <div className="flex items-center gap-2">
                    <a
                      href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(shareTitle)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <Linkedin className="h-4 w-4" />
                    </a>
                    <a
                      href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <Facebook className="h-4 w-4" />
                    </a>
                    <a
                      href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <Twitter className="h-4 w-4" />
                    </a>
                    <button
                      onClick={handleCopyLink}
                      className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      {copied ? <Check className="h-4 w-4 text-accent" /> : <Link2 className="h-4 w-4" />}
                    </button>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-muted/30 rounded-2xl border border-border/50">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <span className="font-serif text-xl font-bold text-primary">{post.author.charAt(0)}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">{post.author}</p>
                    <p className="text-sm text-muted-foreground">
                      {locale === "ca"
                        ? "Expert en assessoria fiscal i comptable a Albiol Consultors"
                        : locale === "es"
                          ? "Experto en asesoría fiscal y contable en Albiol Consultors"
                          : "Tax and accounting advisor at Albiol Consultors"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="py-16 md:py-24 bg-muted/30">
            <div className="container mx-auto px-4">
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground text-center mb-12">
                {locale === "ca"
                  ? "Articles relacionats"
                  : locale === "es"
                    ? "Artículos relacionados"
                    : "Related articles"}
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {relatedPosts.map((relatedPost) => (
                  <BlogCard
                    key={relatedPost.slug}
                    title={relatedPost.title[locale]}
                    excerpt={relatedPost.excerpt[locale]}
                    category={relatedPost.categoryLabel[locale]}
                    date={formatDate(relatedPost.date)}
                    image={relatedPost.image}
                    href={`/blog/${relatedPost.slug}`}
                    readMore={t.blog.readMore}
                  />
                ))}
              </div>
            </div>
          </section>
        )}

        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="font-serif text-2xl md:text-3xl font-bold mb-4">
                {locale === "ca"
                  ? "Tens dubtes sobre aquest tema?"
                  : locale === "es"
                    ? "¿Tienes dudas sobre este tema?"
                    : "Have questions about this topic?"}
              </h2>
              <p className="text-primary-foreground/80 mb-8">
                {locale === "ca"
                  ? "Contacta amb nosaltres i t'assessorarem sense compromís."
                  : locale === "es"
                    ? "Contacta con nosotros y te asesoraremos sin compromiso."
                    : "Contact us and we'll advise you with no obligation."}
              </p>
              <Link href="/contacte">
                <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                  {t.cta.button}
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer locale={locale} />
    </div>
  )
}
