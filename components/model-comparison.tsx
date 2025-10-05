import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, Clock } from "lucide-react"

const models = [
  {
    name: "Stacking",
    accuracy: 0.8794,
    precision: 0.8791,
    recall: 0.8794,
    f1Score: 0.8789,
    trainingTime: 84.83,
    isChampion: true,
  },
  {
    name: "RandomForest",
    accuracy: 0.878,
    precision: 0.8777,
    recall: 0.878,
    f1Score: 0.8774,
    trainingTime: 607.3,
    isChampion: false,
  },
  {
    name: "RandomSubspace",
    accuracy: 0.8738,
    precision: 0.8739,
    recall: 0.8738,
    f1Score: 0.8728,
    trainingTime: 290.02,
    isChampion: false,
  },
  {
    name: "AdaBoost",
    accuracy: 0.866,
    precision: 0.8659,
    recall: 0.866,
    f1Score: 0.865,
    trainingTime: 90.18,
    isChampion: false,
  },
  {
    name: "ExtraTrees",
    accuracy: 0.8561,
    precision: 0.8596,
    recall: 0.8561,
    f1Score: 0.8534,
    trainingTime: 57.61,
    isChampion: false,
  },
]

export function ModelComparison() {
  return (
    <Card className="p-8 bg-card/50 backdrop-blur border-border/50">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-bold">Model Performance Comparison</h3>
        <Badge variant="outline" className="text-xs">
          100 trials
        </Badge>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-4 px-4 font-semibold">Model</th>
              <th className="text-right py-4 px-4 font-semibold">Accuracy</th>
              <th className="text-right py-4 px-4 font-semibold">Precision</th>
              <th className="text-right py-4 px-4 font-semibold">Recall</th>
              <th className="text-right py-4 px-4 font-semibold">F1 Score</th>
              <th className="text-right py-4 px-4 font-semibold">Training Time (s)</th>
            </tr>
          </thead>
          <tbody>
            {models.map((model) => (
              <tr key={model.name} className={`border-b border-border/50 ${model.isChampion ? "bg-primary/10" : ""}`}>
                <td className="py-4 px-4">
                  <div className="flex items-center gap-2">
                    {model.isChampion && <Award className="h-4 w-4 text-primary" />}
                    <span className={model.isChampion ? "font-bold text-primary" : "font-medium"}>{model.name}</span>
                  </div>
                </td>
                <td className="text-right py-4 px-4 font-mono">{(model.accuracy * 100).toFixed(2)}%</td>
                <td className="text-right py-4 px-4 font-mono">{(model.precision * 100).toFixed(2)}%</td>
                <td className="text-right py-4 px-4 font-mono">{(model.recall * 100).toFixed(2)}%</td>
                <td className="text-right py-4 px-4 font-mono">{(model.f1Score * 100).toFixed(2)}%</td>
                <td className="text-right py-4 px-4 font-mono flex items-center justify-end gap-1">
                  <Clock className="h-3 w-3 text-muted-foreground" />
                  {model.trainingTime.toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6 p-4 rounded-lg bg-muted/30 border border-border">
        <p className="text-sm text-muted-foreground">
          The <span className="font-semibold text-primary">Stacking Classifier</span> achieves the highest accuracy
          while maintaining competitive training time. It combines the strengths of multiple ensemble methods to deliver
          superior classification performance.
        </p>
      </div>
    </Card>
  )
}
