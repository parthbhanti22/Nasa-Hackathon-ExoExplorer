import { Card } from "@/components/ui/card"

export function ClassificationReport() {
  return (
    <Card className="p-8 bg-card/50 backdrop-blur border-border/50">
      <h3 className="text-2xl font-bold mb-6">Classification Report</h3>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-4 px-4 font-semibold">Class</th>
              <th className="text-right py-4 px-4 font-semibold">Precision</th>
              <th className="text-right py-4 px-4 font-semibold">Recall</th>
              <th className="text-right py-4 px-4 font-semibold">F1-Score</th>
              <th className="text-right py-4 px-4 font-semibold">Support</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-border/50">
              <td className="py-4 px-4 font-medium">Confirmed</td>
              <td className="text-right py-4 px-4 font-mono">87.91%</td>
              <td className="text-right py-4 px-4 font-mono">87.94%</td>
              <td className="text-right py-4 px-4 font-mono">87.89%</td>
              <td className="text-right py-4 px-4 font-mono">840</td>
            </tr>
            <tr className="border-b border-border/50">
              <td className="py-4 px-4 font-medium">Candidate</td>
              <td className="text-right py-4 px-4 font-mono">87.91%</td>
              <td className="text-right py-4 px-4 font-mono">87.94%</td>
              <td className="text-right py-4 px-4 font-mono">87.89%</td>
              <td className="text-right py-4 px-4 font-mono">578</td>
            </tr>
            <tr className="border-b border-border/50 font-semibold bg-muted/30">
              <td className="py-4 px-4">Weighted Average</td>
              <td className="text-right py-4 px-4 font-mono">87.91%</td>
              <td className="text-right py-4 px-4 font-mono">87.94%</td>
              <td className="text-right py-4 px-4 font-mono">87.89%</td>
              <td className="text-right py-4 px-4 font-mono">1,418</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 rounded-lg bg-primary/10 border border-primary/30">
          <div className="text-sm text-muted-foreground mb-1">Total Test Samples</div>
          <div className="text-2xl font-bold text-primary">1,418</div>
        </div>
        <div className="p-4 rounded-lg bg-secondary/10 border border-secondary/30">
          <div className="text-sm text-muted-foreground mb-1">Training Time</div>
          <div className="text-2xl font-bold text-secondary">84.83s</div>
        </div>
      </div>
    </Card>
  )
}
