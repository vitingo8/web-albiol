"use client"

import { useEffect, useState } from "react"

const companies = [
  "Industria Alimentària",
  "Sector Construcció",
  "Comerç Minorista",
  "Tecnologia",
  "Salut i Farmàcia",
  "Turisme",
  "Transport",
  "Energia",
  "Consultoria",
  "Educació",
  "Hostaleria",
  "Manufactura",
  "Finances",
  "Immobiliària",
  "Agricultura",
  "Automoció",
  "Moda i Textil",
  "Esports",
  "Medi Ambient",
  "Logística"
]

export function CompaniesTicker() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % companies.length)
    }, 2000) // Cambia cada 2 segundos

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="w-full overflow-hidden py-8">
      {/* Línea superior sutil */}
      <div className="flex justify-center mb-4">
        <div className="h-px w-16 bg-[#ddb042]/30"></div>
      </div>

      {/* Texto animado */}
      <div className="relative flex justify-center items-center min-h-[40px]">
        <div className="text-center">
          <span className="text-[#ddb042]/60 font-medium text-sm tracking-wider uppercase transition-all duration-1000 ease-in-out transform opacity-0 animate-fade-in">
            {companies[currentIndex]}
          </span>
        </div>
      </div>

      {/* Subtexto */}
      <div className="text-center mt-2">
        <p className="text-primary-foreground/50 text-xs font-light">
          Confian en nosaltres
        </p>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          0% {
            opacity: 0;
            transform: translateY(10px);
          }
          10% {
            opacity: 1;
            transform: translateY(0);
          }
          90% {
            opacity: 1;
            transform: translateY(0);
          }
          100% {
            opacity: 0;
            transform: translateY(-10px);
          }
        }

        .animate-fade-in {
          animation: fade-in 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}
