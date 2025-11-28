"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { BlogCard } from "@/components/blog-card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { getBlogPosts, categories } from "@/lib/blog-data"
import { Search, Rss } from "lucide-react"
import type { Locale } from "@/lib/i18n"
import { getTranslation } from "@/lib/i18n"

export default function BlogPage() {
  const [locale, setLocale] = useState<Locale>("ca")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")
  const t = getTranslation(locale)

  const allPosts = getBlogPosts()

  const filteredPosts = allPosts.filter((post) => {
    const matchesCategory = selectedCategory === "all" || post.category === selectedCategory
    const matchesSearch =
      searchQuery === "" ||
      post.title[locale].toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt[locale].toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString(locale === "ca" ? "ca-ES" : locale === "es" ? "es-ES" : "en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    })
  }

  const featuredPost = allPosts[0]
  const regularPosts = filteredPosts.filter((p) => p.slug !== featuredPost?.slug)

  return (
    <div className="min-h-screen flex flex-col">
      <Header locale={locale} onLocaleChange={setLocale} />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 md:py-28 bg-primary text-primary-foreground relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
              <span className="inline-block text-sm font-medium text-secondary uppercase tracking-widest mb-4">
                Blog
              </span>
              <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">{t.blog.title}</h1>
              <p className="text-lg text-primary-foreground/80 leading-relaxed mb-8">{t.blog.subtitle}</p>

              <div className="relative max-w-md">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder={
                    locale === "ca"
                      ? "Cercar articles..."
                      : locale === "es"
                        ? "Buscar artículos..."
                        : "Search articles..."
                  }
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 h-12 bg-white/10 border-white/20 text-white placeholder:text-white/50"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-6 bg-card border-b border-border sticky top-20 z-40">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between">
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category.id}
                    variant={selectedCategory === category.id ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setSelectedCategory(category.id)}
                    className={
                      selectedCategory === category.id
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    }
                  >
                    {category.label[locale]}
                  </Button>
                ))}
              </div>
              <a
                href="/rss"
                className="hidden md:flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Rss className="h-4 w-4" />
                RSS
              </a>
            </div>
          </div>
        </section>

        {/* Featured Post */}
        {selectedCategory === "all" && searchQuery === "" && featuredPost && (
          <section className="py-12 bg-background">
            <div className="container mx-auto px-4">
              <div className="grid lg:grid-cols-2 gap-8 items-center bg-card rounded-2xl overflow-hidden border border-border/50 shadow-lg">
                <div className="aspect-video lg:aspect-auto lg:h-full">
                  <img
                    src={featuredPost.image || "/placeholder.svg"}
                    alt={featuredPost.title[locale]}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 lg:p-12">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs font-medium px-3 py-1 rounded-full bg-secondary/10 text-secondary">
                      {featuredPost.categoryLabel[locale]}
                    </span>
                    <span className="text-sm text-muted-foreground">{formatDate(featuredPost.date)}</span>
                  </div>
                  <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4 leading-tight">
                    {featuredPost.title[locale]}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">{featuredPost.excerpt[locale]}</p>
                  <Button asChild className="bg-primary hover:bg-primary/90">
                    <a href={`/blog/${featuredPost.slug}`}>{t.blog.readMore}</a>
                  </Button>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Blog Grid */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <p className="text-sm text-muted-foreground">
                {locale === "ca"
                  ? `${filteredPosts.length} article${filteredPosts.length !== 1 ? "s" : ""} trobat${filteredPosts.length !== 1 ? "s" : ""}`
                  : locale === "es"
                    ? `${filteredPosts.length} artículo${filteredPosts.length !== 1 ? "s" : ""} encontrado${filteredPosts.length !== 1 ? "s" : ""}`
                    : `${filteredPosts.length} article${filteredPosts.length !== 1 ? "s" : ""} found`}
              </p>
            </div>

            {filteredPosts.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {(selectedCategory === "all" && searchQuery === "" ? regularPosts : filteredPosts).map((post) => (
                  <BlogCard
                    key={post.slug}
                    title={post.title[locale]}
                    excerpt={post.excerpt[locale]}
                    category={post.categoryLabel[locale]}
                    date={formatDate(post.date)}
                    image={post.image}
                    href={`/blog/${post.slug}`}
                    readMore={t.blog.readMore}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-16 bg-card rounded-2xl border border-border/50">
                <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
                  <Search className="h-8 w-8 text-muted-foreground" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                  {locale === "ca"
                    ? "No s'han trobat articles"
                    : locale === "es"
                      ? "No se encontraron artículos"
                      : "No articles found"}
                </h3>
                <p className="text-muted-foreground">
                  {locale === "ca"
                    ? "Prova amb altres termes de cerca o categories"
                    : locale === "es"
                      ? "Prueba con otros términos de búsqueda o categorías"
                      : "Try other search terms or categories"}
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="font-serif text-2xl md:text-3xl font-bold mb-4">
                {locale === "ca"
                  ? "No et perdis cap novetat"
                  : locale === "es"
                    ? "No te pierdas ninguna novedad"
                    : "Don't miss any updates"}
              </h2>
              <p className="text-primary-foreground/80 mb-8">
                {locale === "ca"
                  ? "Subscriu-te al nostre butlletí i rep les últimes novetats fiscals i laborals."
                  : locale === "es"
                    ? "Suscríbete a nuestro boletín y recibe las últimas novedades fiscales y laborales."
                    : "Subscribe to our newsletter and receive the latest tax and labour updates."}
              </p>
              <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder={locale === "ca" ? "El teu email" : locale === "es" ? "Tu email" : "Your email"}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50 h-12"
                />
                <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground h-12 px-8">
                  {locale === "ca" ? "Subscriure'm" : locale === "es" ? "Suscribirme" : "Subscribe"}
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer locale={locale} onLocaleChange={setLocale} />
      <WhatsAppButton locale={locale} phoneNumber="+34680132404" />
    </div>
  )
}
