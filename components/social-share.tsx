"use client"

import { Facebook, Twitter, Linkedin, Link2, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Locale } from "@/lib/i18n"

interface SocialShareProps {
  url: string
  title: string
  description?: string
  locale: Locale
  className?: string
}

export function SocialShare({ url, title, description, locale, className = "" }: SocialShareProps) {
  const fullUrl = typeof window !== 'undefined' ? `${window.location.origin}${url}` : url

  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(fullUrl)}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(fullUrl)}&text=${encodeURIComponent(title)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(fullUrl)}`,
  }

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(fullUrl)
      // Aquí podrías mostrar un toast de éxito
    } catch (err) {
      console.error('Failed to copy: ', err)
    }
  }

  const openShareWindow = (url: string) => {
    window.open(url, '_blank', 'width=600,height=400,scrollbars=yes,resizable=yes')
  }

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <span className="text-sm font-medium text-muted-foreground mr-2">
        {locale === "ca" ? "Compartir:" :
         locale === "es" ? "Compartir:" :
         "Share:"}
      </span>

      <Button
        variant="outline"
        size="sm"
        onClick={() => openShareWindow(shareLinks.facebook)}
        className="h-9 w-9 p-0"
        title={locale === "ca" ? "Compartir a Facebook" :
               locale === "es" ? "Compartir en Facebook" :
               "Share on Facebook"}
      >
        <Facebook className="h-4 w-4" />
      </Button>

      <Button
        variant="outline"
        size="sm"
        onClick={() => openShareWindow(shareLinks.twitter)}
        className="h-9 w-9 p-0"
        title={locale === "ca" ? "Compartir a Twitter" :
               locale === "es" ? "Compartir en Twitter" :
               "Share on Twitter"}
      >
        <Twitter className="h-4 w-4" />
      </Button>

      <Button
        variant="outline"
        size="sm"
        onClick={() => openShareWindow(shareLinks.linkedin)}
        className="h-9 w-9 p-0"
        title={locale === "ca" ? "Compartir a LinkedIn" :
               locale === "es" ? "Compartir en LinkedIn" :
               "Share on LinkedIn"}
      >
        <Linkedin className="h-4 w-4" />
      </Button>

      <Button
        variant="outline"
        size="sm"
        onClick={copyToClipboard}
        className="h-9 w-9 p-0"
        title={locale === "ca" ? "Copiar enllaç" :
               locale === "es" ? "Copiar enlace" :
               "Copy link"}
      >
        <Link2 className="h-4 w-4" />
      </Button>
    </div>
  )
}
