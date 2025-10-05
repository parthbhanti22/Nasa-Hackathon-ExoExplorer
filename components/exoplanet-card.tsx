import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { LucideIcon } from "lucide-react"

interface ExoplanetCardProps {
  title: string
  icon: LucideIcon
  color: string
  description: string
  characteristics: string[]
  examples: string[]
}

export function ExoplanetCard({
  title,
  icon: Icon,
  color,
  description,
  characteristics,
  examples,
}: ExoplanetCardProps) {
  return (
    <Card className="p-6 bg-card/50 backdrop-blur border-border/50 hover:border-primary/30 transition-colors">
      <div className="flex items-start gap-4 mb-4">
        <div
          className={`flex h-12 w-12 items-center justify-center rounded-lg bg-${color}/20 border border-${color}/50 shrink-0`}
        >
          <Icon className={`h-6 w-6 text-${color}`} />
        </div>
        <div>
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <div className="text-sm font-semibold mb-2">Key Characteristics</div>
          <ul className="space-y-1">
            {characteristics.map((char, index) => (
              <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                <span className="text-primary mt-0.5">•</span>
                <span>{char}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="text-sm font-semibold mb-2">Notable Examples</div>
          <div className="flex flex-wrap gap-2">
            {examples.map((example) => (
              <Badge key={example} variant="outline" className="text-xs">
                {example}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </Card>
  )
}
