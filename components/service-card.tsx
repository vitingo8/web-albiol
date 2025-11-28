import type React from "react"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

interface ServiceCardProps {
  title: string
  description: string
  icon: React.ReactNode
  href: string
  readMore: string
}

export function ServiceCard({ title, description, icon, href, readMore }: ServiceCardProps) {
  return (
    <Link
      href={href}
      className="group bg-card rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 border border-border/50 hover:border-primary/20 relative overflow-hidden block"
    >
      {/* Decorative gradient on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative z-10">
        <div className="mb-5 inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
          {icon}
        </div>
        <h3 className="font-serif text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed mb-5">{description}</p>
        <span className="inline-flex items-center text-sm font-medium text-primary group-hover:text-primary/80 transition-all gap-1 group-hover:gap-3">
          {readMore}
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  )
}
