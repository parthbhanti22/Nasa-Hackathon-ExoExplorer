import { Card } from "@/components/ui/card"
import { TrendingUp } from "lucide-react"

export function PerformanceMetrics() {
  return (
    <Card className="p-8 bg-card/50 backdrop-blur border-border/50">
      <h3 className="text-xl font-bold mb-6">Performance Breakdown</h3>

      <div className="space-y-6">
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Accuracy</span>
            <span className="font-bold text-primary">87.94%</span>
          </div>
          <div className="h-3 bg-muted rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-primary to-primary/80 rounded-full"
              style={{ width: "87.94%" }}
            />
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Precision</span>
            <span className="font-bold text-secondary">87.91%</span>
          </div>
          <div className="h-3 bg-muted rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-secondary to-secondary/80 rounded-full"
              style={{ width: "87.91%" }}
            />
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Recall</span>
            <span className="font-bold text-accent">87.94%</span>
          </div>
          <div className="h-3 bg-muted rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-accent to-accent/80 rounded-full"
              style={{ width: "87.94%" }}
            />
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">F1 Score</span>
            <span className="font-bold text-chart-4">87.89%</span>
          </div>
          <div className="h-3 bg-muted rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-chart-4 to-chart-4/80 rounded-full"
              style={{ width: "87.89%" }}
            />
          </div>
        </div>

        <div className="mt-6 p-4 rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/30">
          <div className="flex items-start gap-3">
            <TrendingUp className="h-5 w-5 text-primary mt-0.5" />
            <div className="space-y-1">
              <div className="font-semibold text-sm">Exceptional Performance</div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                All metrics above 87% indicate a highly reliable model with balanced precision and recall, minimizing
                both false positives and false negatives.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
}
