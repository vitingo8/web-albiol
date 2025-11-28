"use client"

import { useEffect, useState, useRef } from "react"
import { TrendingUp, Users, FileCheck, Award } from "lucide-react"
import type { Locale } from "@/lib/i18n"

interface StatsSectionProps {
  locale: Locale
}

function AnimatedCounter({ end, duration = 2000, suffix = "" }: { end: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          let start = 0
          const increment = end / (duration / 16)
          const timer = setInterval(() => {
            start += increment
            if (start >= end) {
              setCount(end)
              clearInterval(timer)
            } else {
              setCount(Math.floor(start))
            }
          }, 16)
        }
      },
      { threshold: 0.5 },
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [end, duration, hasAnimated])

  return (
    <div ref={ref}>
      {count}
      {suffix}
    </div>
  )
}

export function StatsSection({ locale }: StatsSectionProps) {
  const stats =
    locale === "ca"
      ? [
          { icon: <Users className="h-8 w-8" />, value: 500, suffix: "+", label: "Clients satisfets" },
          { icon: <TrendingUp className="h-8 w-8" />, value: 20, suffix: "+", label: "Anys d'experiència" },
          { icon: <FileCheck className="h-8 w-8" />, value: 10000, suffix: "+", label: "Declaracions anuals" },
          { icon: <Award className="h-8 w-8" />, value: 98, suffix: "%", label: "Clients que repeteixen" },
        ]
      : locale === "es"
        ? [
            { icon: <Users className="h-8 w-8" />, value: 500, suffix: "+", label: "Clientes satisfechos" },
            { icon: <TrendingUp className="h-8 w-8" />, value: 20, suffix: "+", label: "Años de experiencia" },
            { icon: <FileCheck className="h-8 w-8" />, value: 10000, suffix: "+", label: "Declaraciones anuales" },
            { icon: <Award className="h-8 w-8" />, value: 98, suffix: "%", label: "Clientes que repiten" },
          ]
        : [
            { icon: <Users className="h-8 w-8" />, value: 500, suffix: "+", label: "Satisfied clients" },
            { icon: <TrendingUp className="h-8 w-8" />, value: 20, suffix: "+", label: "Years of experience" },
            { icon: <FileCheck className="h-8 w-8" />, value: 10000, suffix: "+", label: "Annual declarations" },
            { icon: <Award className="h-8 w-8" />, value: 98, suffix: "%", label: "Returning clients" },
          ]

  return (
    <section className="py-16 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 md:px-8 lg:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 text-secondary mb-4">
                {stat.icon}
              </div>
              <div className="font-serif text-4xl md:text-5xl font-bold mb-2">
                <AnimatedCounter end={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-primary-foreground/70 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
