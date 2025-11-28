"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowLeft, Lock, Mail, Loader2, Eye, EyeOff, CheckCircle2 } from "lucide-react"
import type { Locale } from "@/lib/i18n"

// Diccionario de textos solo para esta página (para no ensuciar el global)
const loginCopy = {
  ca: {
    back: "Tornar a la web",
    title: "Benvingut de nou",
    subtitle: "Accedeix a la teva àrea privada per gestionar els teus documents.",
    emailLabel: "Correu electrònic",
    emailPlace: "nom@empresa.com",
    passLabel: "Contrasenya",
    passPlace: "••••••••",
    forgot: "Has oblidat la contrasenya?",
    loginBtn: "Iniciar sessió",
    loading: "Accedint...",
    legal: "Protegit per reCAPTCHA i subjecte a la Política de Privacitat.",
    testimonial: "La digitalització ens permet dedicar més temps al que realment importa: el teu negoci.",
    role: "Direcció Albiol Consultors",
  },
  es: {
    back: "Volver a la web",
    title: "Bienvenido de nuevo",
    subtitle: "Accede a tu área privada para gestionar tus documentos.",
    emailLabel: "Correo electrónico",
    emailPlace: "nombre@empresa.com",
    passLabel: "Contraseña",
    passPlace: "••••••••",
    forgot: "¿Olvidaste la contraseña?",
    loginBtn: "Iniciar sesión",
    loading: "Accediendo...",
    legal: "Protegido por reCAPTCHA y sujeto a la Política de Privacidad.",
    testimonial: "La digitalización nos permite dedicar más tiempo a lo que realmente importa: tu negocio.",
    role: "Dirección Albiol Consultors",
  },
  en: {
    back: "Back to website",
    title: "Welcome back",
    subtitle: "Access your private area to manage your documents.",
    emailLabel: "Email address",
    emailPlace: "name@company.com",
    passLabel: "Password",
    passPlace: "••••••••",
    forgot: "Forgot password?",
    loginBtn: "Sign in",
    loading: "Signing in...",
    legal: "Protected by reCAPTCHA and subject to Privacy Policy.",
    testimonial: "Digitalization allows us to spend more time on what truly matters: your business.",
    role: "Management Albiol Consultors",
  },
  fr: {
    back: "Retour au site",
    title: "Bon retour",
    subtitle: "Accédez à votre espace privé pour gérer vos documents.",
    emailLabel: "Adresse e-mail",
    emailPlace: "nom@entreprise.com",
    passLabel: "Mot de passe",
    passPlace: "••••••••",
    forgot: "Mot de passe oublié ?",
    loginBtn: "Se connecter",
    loading: "Connexion...",
    legal: "Protégé par reCAPTCHA et soumis à la Politique de Confidentialité.",
    testimonial: "La numérisation nous permet de consacrer plus de temps à ce qui compte vraiment : votre entreprise.",
    role: "Direction Albiol Consultors",
  },
  de: {
    back: "Zurück zur Website",
    title: "Willkommen zurück",
    subtitle: "Greifen Sie auf Ihren privaten Bereich zu, um Ihre Dokumente zu verwalten.",
    emailLabel: "E-Mail-Adresse",
    emailPlace: "name@firma.com",
    passLabel: "Passwort",
    passPlace: "••••••••",
    forgot: "Passwort vergessen?",
    loginBtn: "Anmelden",
    loading: "Anmelden...",
    legal: "Geschützt durch reCAPTCHA und unterliegt der Datenschutzrichtlinie.",
    testimonial: "Die Digitalisierung ermöglicht es uns, mehr Zeit für das Wesentliche zu haben: Ihr Unternehmen.",
    role: "Geschäftsführung Albiol Consultors",
  },
} as const

export default function LoginPage() {
  // Detectar idioma del navegador o localStorage
  const [locale, setLocale] = useState<Locale>("ca")
  const [isLoading, setIsLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const saved = window.localStorage.getItem("locale") as Locale | null
    if (saved) setLocale(saved)
  }, [])

  const t = loginCopy[locale] ?? loginCopy["ca"]

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    // SIMULACIÓN DE LOGIN (Aquí conectarías con tu Backend / Firebase / Supabase)
    setTimeout(() => {
      setIsLoading(false)
      alert("Això és una demo. Aquí redirigiríem al Dashboard real.")
      // router.push('/dashboard') 
    }, 2000)
  }

  return (
    <div className="w-full h-screen flex overflow-hidden font-sans bg-background">
      
      {/* LEFT SIDE - VISUAL & BRANDING (Hidden on mobile) */}
      <div className="hidden lg:flex w-1/2 bg-slate-900 relative items-center justify-center text-white overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
           <img 
             src="/professional-office-tortosa-spain-business-meeting.jpg" 
             alt="Office" 
             className="w-full h-full object-cover opacity-20 scale-105"
           />
           <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-900/90 to-blue-900/40" />
        </div>

        <div className="relative z-10 max-w-lg px-12">
          {/* Logo in Login Page */}
          <div className="flex items-center gap-3 mb-12">
            <div className="w-10 h-10 rounded-lg bg-white text-slate-900 flex items-center justify-center font-serif font-bold text-xl">
              A
            </div>
            <span className="font-serif text-2xl font-bold tracking-tight">Albiol Consultors</span>
          </div>

          <blockquote className="space-y-6">
            <p className="text-2xl font-medium leading-relaxed text-slate-200">
              "{t.testimonial}"
            </p>
            <footer className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-slate-700 flex items-center justify-center text-slate-300">
                 <CheckCircle2 className="w-6 h-6" />
              </div>
              <div>
                <p className="font-bold text-white">Joan Albiol</p>
                <p className="text-slate-400 text-sm">{t.role}</p>
              </div>
            </footer>
          </blockquote>
        </div>
      </div>

      {/* RIGHT SIDE - LOGIN FORM */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center p-8 bg-white dark:bg-slate-950">
        
        <div className="w-full max-w-[400px] space-y-8">
          
          {/* Back Button */}
          <Link 
            href="/" 
            className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors mb-4"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            {t.back}
          </Link>

          {/* Header Mobile Logo (Only visible on mobile) */}
          <div className="lg:hidden flex items-center gap-2 mb-4">
             <div className="w-8 h-8 rounded bg-primary flex items-center justify-center text-white font-serif font-bold">A</div>
             <span className="font-serif font-bold text-lg">Albiol</span>
          </div>

          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">{t.title}</h1>
            <p className="text-slate-500 dark:text-slate-400">{t.subtitle}</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email">{t.emailLabel}</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
                <Input 
                  id="email" 
                  type="email" 
                  placeholder={t.emailPlace} 
                  required 
                  className="pl-10 h-12 bg-slate-50 border-slate-200 focus:bg-white transition-colors"
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">{t.passLabel}</Label>
                <a href="#" className="text-sm font-medium text-primary hover:underline">
                  {t.forgot}
                </a>
              </div>
              <div className="relative">
                <Lock className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
                <Input 
                  id="password" 
                  type={showPassword ? "text" : "password"} 
                  placeholder={t.passPlace} 
                  required 
                  className="pl-10 pr-10 h-12 bg-slate-50 border-slate-200 focus:bg-white transition-colors"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 text-slate-400 hover:text-slate-600"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>

            <Button type="submit" className="w-full h-12 text-base font-semibold" disabled={isLoading}>
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  {t.loading}
                </>
              ) : (
                t.loginBtn
              )}
            </Button>
          </form>

          <p className="text-xs text-center text-slate-400 max-w-xs mx-auto">
            {t.legal}
          </p>
        </div>
      </div>
    </div>
  )
}
