import Link from "next/link"
import { ArrowRight, Calendar } from "lucide-react"

interface BlogCardProps {
  title: string
  excerpt: string
  category: string
  date: string
  image: string
  href: string
  readMore: string
}

export function BlogCard({ title, excerpt, category, date, image, href, readMore }: BlogCardProps) {
  return (
    <article className="group bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-border/50 hover:border-primary/20">
      <Link href={href} className="block">
        <div className="aspect-video overflow-hidden relative">
          <img
            src={image || "/placeholder.svg"}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          {/* Category badge overlay */}
          <div className="absolute top-4 left-4">
            <span className="text-xs font-medium px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-sm text-foreground shadow-sm">
              {category}
            </span>
          </div>
        </div>
      </Link>
      <div className="p-6">
        <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
          <Calendar className="h-3.5 w-3.5" />
          <span>{date}</span>
        </div>
        <Link href={href}>
          <h3 className="font-serif text-lg font-semibold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors">
            {title}
          </h3>
        </Link>
        <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-2">{excerpt}</p>
        <Link
          href={href}
          className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-all gap-1 group-hover:gap-2"
        >
          {readMore}
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </article>
  )
}
