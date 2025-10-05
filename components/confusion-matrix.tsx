import { Card } from "@/components/ui/card"

export function ConfusionMatrix() {
  const matrix = [
    [769, 71],
    [100, 478],
  ]

  const labels = ["Confirmed", "Candidate"]

  return (
    <Card className="p-8 bg-card/50 backdrop-blur border-border/50">
      <h3 className="text-xl font-bold mb-6">Confusion Matrix</h3>

      <div className="space-y-6">
        <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
          <div />
          <div className="text-center text-sm font-semibold text-muted-foreground">Confirmed</div>
          <div className="text-center text-sm font-semibold text-muted-foreground">Candidate</div>

          <div className="flex items-center justify-end pr-2 text-sm font-semibold text-muted-foreground">
            Confirmed
          </div>
          <div className="aspect-square flex items-center justify-center rounded-lg bg-primary/30 border-2 border-primary">
            <span className="text-2xl font-bold text-primary">769</span>
          </div>
          <div className="aspect-square flex items-center justify-center rounded-lg bg-muted border border-border">
            <span className="text-xl font-semibold text-muted-foreground">71</span>
          </div>

          <div className="flex items-center justify-end pr-2 text-sm font-semibold text-muted-foreground">
            Candidate
          </div>
          <div className="aspect-square flex items-center justify-center rounded-lg bg-muted border border-border">
            <span className="text-xl font-semibold text-muted-foreground">100</span>
          </div>
          <div className="aspect-square flex items-center justify-center rounded-lg bg-secondary/30 border-2 border-secondary">
            <span className="text-2xl font-bold text-secondary">478</span>
          </div>
        </div>

        <div className="space-y-3 text-sm">
          <div className="flex items-center justify-between p-3 rounded-lg bg-primary/10 border border-primary/30">
            <span className="text-muted-foreground">True Negatives (TN)</span>
            <span className="font-bold text-primary">769</span>
          </div>
          <div className="flex items-center justify-between p-3 rounded-lg bg-secondary/10 border border-secondary/30">
            <span className="text-muted-foreground">True Positives (TP)</span>
            <span className="font-bold text-secondary">478</span>
          </div>
          <div className="flex items-center justify-between p-3 rounded-lg bg-muted border border-border">
            <span className="text-muted-foreground">False Positives (FP)</span>
            <span className="font-semibold">71</span>
          </div>
          <div className="flex items-center justify-between p-3 rounded-lg bg-muted border border-border">
            <span className="text-muted-foreground">False Negatives (FN)</span>
            <span className="font-semibold">100</span>
          </div>
        </div>
      </div>
    </Card>
  )
}
