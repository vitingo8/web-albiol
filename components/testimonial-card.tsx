import { Quote } from "lucide-react"

interface TestimonialCardProps {
  name: string
  role: string
  content: string
}

export function TestimonialCard({ name, role, content }: TestimonialCardProps) {
  return (
    <div className="bg-card rounded-lg p-6 shadow-sm border border-border/50">
      <Quote className="h-8 w-8 text-secondary mb-4" />
      <p className="text-foreground leading-relaxed mb-6 italic">"{content}"</p>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
          <span className="text-primary font-semibold text-sm">{name.charAt(0)}</span>
        </div>
        <div>
          <p className="font-medium text-foreground text-sm">{name}</p>
          <p className="text-muted-foreground text-xs">{role}</p>
        </div>
      </div>
    </div>
  )
}
