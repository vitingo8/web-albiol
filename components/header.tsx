"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { Menu, X, Phone, ChevronDown, User, Lock, Globe, Laptop, ShieldCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"
import type { Locale } from "@/lib/i18n"

interface HeaderProps {
  locale: Locale
  onLocaleChange: (locale: Locale) => void
}

export function Header({ locale, onLocaleChange }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const isGestoriaOnlinePage = pathname === "/gestoria-online"
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const nav = {
    ca: {
      services: "Serveis",
      online: "Gestoria Online",
      nuclear: "Fons Transició Nuclear",
      team: "L'Equip",
      contact: "Contacte",
      cta: "Demanar Cita",
      clientArea: "Àrea Privada",
      serviceItems: [
        { name: "Assessoria Fiscal", href: "/serveis/fiscal" },
        { name: "Assessoria Laboral", href: "/serveis/laboral" },
        { name: "Comptabilitat", href: "/serveis/comptable" },
        { name: "Autònoms", href: "/serveis/autonomos" },
        { name: "Tràmits i Gestoria", href: "/serveis/tramits" },
      ]
    },
    es: {
      services: "Servicios",
      online: "Gestoría Online",
      nuclear: "Fondo Transición Nuclear",
      team: "El Equipo",
      contact: "Contacto",
      cta: "Pedir Cita",
      clientArea: "Área Privada",
      serviceItems: [
        { name: "Asesoría Fiscal", href: "/serveis/fiscal" },
        { name: "Asesoría Laboral", href: "/serveis/laboral" },
        { name: "Contabilidad", href: "/serveis/comptable" },
        { name: "Autónomos", href: "/serveis/autonomos" },
        { name: "Trámites y Gestoría", href: "/serveis/tramits" },
      ]
    },
    en: {
      services: "Services",
      online: "Online Agency",
      nuclear: "Nuclear Transition Fund",
      team: "Team",
      contact: "Contact",
      cta: "Book Appt",
      clientArea: "Client Area",
      serviceItems: [
        { name: "Tax Advisory", href: "/serveis/fiscal" },
        { name: "Labor Advisory", href: "/serveis/laboral" },
        { name: "Accounting", href: "/serveis/comptable" },
        { name: "Freelancers", href: "/serveis/autonomos" },
        { name: "Admin Procedures", href: "/serveis/tramits" },
      ]
    },
    fr: {
      services: "Services",
      online: "Agence en ligne",
      nuclear: "Fonds Transition Nucléaire",
      team: "Équipe",
      contact: "Contact",
      cta: "Rendez-vous",
      clientArea: "Espace Client",
      serviceItems: [
        { name: "Fiscalité", href: "/serveis/fiscal" },
        { name: "Social", href: "/serveis/laboral" },
        { name: "Comptabilité", href: "/serveis/comptable" },
        { name: "Indépendants", href: "/serveis/autonomos" },
        { name: "Démarches", href: "/serveis/tramits" },
      ]
    },
    de: {
      services: "Dienstleistungen",
      online: "Online-Kanzlei",
      nuclear: "Atomkraftwerksübergangsfonds",
      team: "Team",
      contact: "Kontakt",
      cta: "Termin",
      clientArea: "Kundenbereich",
      serviceItems: [
        { name: "Steuern", href: "/serveis/fiscal" },
        { name: "Personal", href: "/serveis/laboral" },
        { name: "Buchhaltung", href: "/serveis/comptable" },
        { name: "Selbstständige", href: "/serveis/autonomos" },
        { name: "Behörden", href: "/serveis/tramits" },
      ]
    },
  }

  const t = nav[locale] ?? nav["ca"]

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 border-b",
        isGestoriaOnlinePage
          ? isScrolled
            ? "bg-[#ddb042] border-white py-3 shadow-lg"
            : "bg-[#ddb042] border-white py-5 shadow-lg"
          : isScrolled
            ? "bg-background/90 backdrop-blur-md border-border/50 shadow-sm py-3"
            : "bg-transparent border-transparent py-5"
      )}
    >
      <div className="w-full px-6 md:px-10 flex items-center justify-between">
        
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="flex flex-col">
            <span
              className={cn(
                "font-serif text-lg font-bold leading-none tracking-tight",
                isGestoriaOnlinePage
                  ? "text-slate-950"
                  : isScrolled
                    ? "text-foreground"
                    : "text-white"
              )}
            >
              Albiol
            </span>
            <span
              className={cn(
                "text-[10px] uppercase tracking-widest opacity-80",
                isGestoriaOnlinePage
                  ? "text-slate-950/80"
                  : isScrolled
                    ? "text-muted-foreground"
                    : "text-white/80"
              )}
            >
              Consultors
            </span>
          </div>
        </Link>

        {/* MOBILE AREA PRIVADA - Always visible */}
        <div className="lg:hidden">
          <Button
            variant="ghost"
            size="sm"
            asChild
            className={cn(
              "gap-2 font-medium transition-colors",
              isGestoriaOnlinePage
                ? "text-slate-950 hover:text-white hover:bg-white/10"
                : "text-white hover:text-[#ddb042] hover:bg-white/10"
            )}
          >
            <Link href="/area-privada">
              <User className="h-4 w-4" />
              <span className="text-sm">{t.clientArea}</span>
            </Link>
          </Button>
        </div>

        {/* DESKTOP MENU */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {/* Selector Serveis */}
          <DropdownMenu>
            <DropdownMenuTrigger
              className={cn(
                "flex items-center gap-1 text-sm font-medium transition-colors outline-none px-3 py-1.5 rounded-full",
                isGestoriaOnlinePage
                  ? "text-slate-950 hover:bg-white hover:text-slate-950"
                  : "hover:bg-[#ddb042] hover:text-slate-950",
                isGestoriaOnlinePage
                  ? "text-slate-950"
                  : isScrolled
                    ? "text-foreground"
                    : "text-white"
              )}
            >
              {t.services} <ChevronDown className="h-4 w-4 opacity-50" />
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="start"
              className="w-56 p-2 bg-background/95 backdrop-blur-xl border-border/50 shadow-xl rounded-xl"
            >
              {t.serviceItems.map((item) => (
                <DropdownMenuItem
                  key={item.href}
                  asChild
                  className="cursor-pointer rounded-lg focus:bg-[#ddb042] focus:text-white hover:bg-[#ddb042] hover:text-white"
                >
                  <Link href={item.href} className="w-full font-medium">
                    {item.name}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Gestoria Online */}
          <Link
            href="/gestoria-online"
            className={cn(
              "flex items-center gap-2 text-sm font-normal transition-all px-3 py-1.5 rounded-full border",
              isGestoriaOnlinePage
                ? "bg-white text-slate-950 border-white/80 hover:bg-white/90 shadow-lg"
                : isScrolled
                  ? "bg-[#ddb042]/10 text-[#ddb042] border-[#ddb042]/30 hover:bg-[#ddb042] hover:text-white"
                  : "bg-[#ddb042] text-white border-white hover:bg-[#ddb042]/90 shadow-lg"
            )}
          >
            <Laptop className="h-4 w-4" />
            {t.online}
          </Link>

          {/* Fons Transició Nuclear */}
          <Link
            href="/fons-transicio-nuclear"
            className={cn(
              "flex items-center gap-2 text-sm font-bold transition-all px-3 py-1.5 rounded-full border animate-pulse",
              isScrolled
                ? "bg-white text-slate-950 border-white/80 hover:bg-white/90 shadow-lg"
                : "bg-white text-slate-950 border-white/80 hover:bg-white/90 shadow-lg"
            )}
          >
            <ShieldCheck className="h-4 w-4" />
            {t.nuclear}
          </Link>

          {/* Enlaces texto con hover gold */}
          <Link
            href="/sobre-nosaltres"
            className={cn(
              "text-sm font-medium transition-colors",
              isGestoriaOnlinePage
                ? "text-slate-950 hover:text-white"
                : "hover:text-[#ddb042]",
              isGestoriaOnlinePage
                ? "text-slate-950"
                : isScrolled
                  ? "text-foreground"
                  : "text-white"
            )}
          >
            {t.team}
          </Link>

          <Link
            href="/contacte"
            className={cn(
              "text-sm font-medium transition-colors",
              isGestoriaOnlinePage
                ? "text-slate-950 hover:text-white"
                : "hover:text-[#ddb042]",
              isGestoriaOnlinePage
                ? "text-slate-950"
                : isScrolled
                  ? "text-foreground"
                  : "text-white"
            )}
          >
            {t.contact}
          </Link>
        </nav>

        {/* RIGHT ACTIONS (Desktop) */}
        <div className="hidden lg:flex items-center gap-4">
          <Button
            variant="ghost"
            size="sm"
            asChild
            className={cn(
              "gap-2 font-medium transition-colors",
              isGestoriaOnlinePage
                ? "text-slate-950 hover:text-white hover:bg-white/10"
                : "hover:text-[#ddb042]",
              isGestoriaOnlinePage
                ? "text-slate-950 hover:text-white hover:bg-white/10"
                : isScrolled
                  ? "text-muted-foreground hover:text-[#ddb042] hover:bg-muted"
                  : "text-white/90 hover:text-[#ddb042] hover:bg-white/5"
            )}
          >
            <Link href="/area-privada">
              <User className="h-4 w-4" />
              {t.clientArea}
            </Link>
          </Button>

          <div className={cn("h-4 w-px mx-1", isGestoriaOnlinePage ? "bg-slate-950/30" : isScrolled ? "bg-border" : "bg-white/20")} />

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                className={cn(
                  "gap-1 px-2 transition-colors",
                  isGestoriaOnlinePage
                    ? "text-slate-950 hover:text-white hover:bg-white/10"
                    : "hover:text-[#ddb042]",
                  isGestoriaOnlinePage
                    ? "text-slate-950 hover:text-white hover:bg-white/10"
                    : isScrolled
                      ? "text-foreground hover:bg-muted"
                      : "text-white hover:bg-white/10"
                )}
              >
                <Globe className="h-4 w-4" />
                <span className="uppercase text-xs">{locale}</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="w-32 bg-background border-border shadow-lg rounded-xl"
            >
              {(["ca", "es", "en", "fr", "de"] as const).map((l) => (
                <DropdownMenuItem
                  key={l}
                  onClick={() => onLocaleChange(l)}
                  className={cn(
                    "cursor-pointer justify-center font-medium hover:bg-[#ddb042] hover:text-white focus:bg-[#ddb042] focus:text-white",
                    locale === l && "bg-muted"
                  )}
                >
                  {l === "ca"
                    ? "Català"
                    : l === "es"
                    ? "Español"
                    : l === "en"
                    ? "English"
                    : l === "fr"
                    ? "Français"
                    : "Deutsch"}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <Button
            size="sm"
            asChild
            className={cn(
              "font-medium shadow-md transition-transform hover:scale-105",
              isGestoriaOnlinePage
                ? "bg-slate-950 text-white hover:bg-slate-800"
                : isScrolled
                  ? "bg-primary text-primary-foreground"
                  : "bg-white text-primary hover:bg-slate-100"
            )}
          >
            <Link href="/contacte">{t.cta}</Link>
          </Button>
        </div>

        {/* MOBILE TOGGLE */}
        <button
          className={cn("lg:hidden p-2", isGestoriaOnlinePage ? "text-slate-950" : isScrolled ? "text-foreground" : "text-white")}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* MOBILE MENU OVERLAY */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-background border-b border-border shadow-xl p-4 lg:hidden flex flex-col gap-4 animate-in slide-in-from-top-2">
          <div className="flex flex-col space-y-1">
            <p className="px-4 py-2 text-xs font-bold text-muted-foreground uppercase tracking-wider">
              {t.services}
            </p>
            {t.serviceItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="px-4 py-3 rounded-lg text-sm font-medium transition-colors hover:bg-[#ddb042] hover:text-white"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="h-px bg-border my-1" />

          <Link
            href="/gestoria-online"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 px-4 py-3 rounded-lg bg-[#ddb042]/10 text-[#ddb042] font-bold text-sm transition-colors hover:bg-[#ddb042] hover:text-white"
          >
            <Laptop className="h-5 w-5" />
            {t.online}
          </Link>

          <Link
            href="/fons-transicio-nuclear"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 px-4 py-3 rounded-lg bg-white text-slate-950 font-bold text-sm transition-colors hover:bg-white/90 animate-pulse shadow-lg"
          >
            <ShieldCheck className="h-5 w-5" />
            {t.nuclear}
          </Link>

          <Link
            href="/sobre-nosaltres"
            onClick={() => setIsOpen(false)}
            className="px-4 py-3 font-medium rounded-lg transition-colors hover:bg-[#ddb042] hover:text-white"
          >
            {t.team}
          </Link>
          <Link
            href="/contacte"
            onClick={() => setIsOpen(false)}
            className="px-4 py-3 font-medium rounded-lg transition-colors hover:bg-[#ddb042] hover:text-white"
          >
            {t.contact}
          </Link>

          <div className="flex gap-2 pt-2">
            {(["ca", "es", "en", "fr", "de"] as const).map((l) => (
              <button
                key={l}
                onClick={() => {
                  onLocaleChange(l)
                  setIsOpen(false)
                }}
                className={cn(
                  "flex-1 py-2 text-xs font-bold uppercase rounded-md border",
                  locale === l
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-background border-border text-muted-foreground"
                )}
              >
                {l}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
