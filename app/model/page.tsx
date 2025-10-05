import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart3, TrendingUp, Target, Award } from "lucide-react"
import { ModelComparison } from "@/components/model-comparison"
import { ConfusionMatrix } from "@/components/confusion-matrix"
import { PerformanceMetrics } from "@/components/performance-metrics"
import { ClassificationReport } from "@/components/classification-report"

export default function ModelPage() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="flex flex-col gap-6 mb-12">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/20 border border-primary/50">
              <BarChart3 className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h1 className="text-4xl font-bold">ML Model Dashboard</h1>
              <p className="text-muted-foreground">Exoplanet Classification Performance</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <Badge variant="secondary" className="px-4 py-2 text-sm bg-primary/20 text-primary border-primary/50">
              <Award className="h-4 w-4 mr-2" />
              Champion Model: Stacking Classifier
            </Badge>
            <Badge variant="outline" className="px-4 py-2 text-sm">
              Accuracy: 87.94%
            </Badge>
            <Badge variant="outline" className="px-4 py-2 text-sm">
              Test Samples: 1,418
            </Badge>
          </div>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="overview" className="space-y-8">
          <TabsList className="grid w-full grid-cols-4 lg:w-auto lg:inline-grid bg-card/50 backdrop-blur">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="comparison">Model Comparison</TabsTrigger>
            <TabsTrigger value="metrics">Detailed Metrics</TabsTrigger>
            <TabsTrigger value="dataset">Dataset Info</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-8">
            {/* Champion Model Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="p-6 bg-gradient-to-br from-primary/20 to-primary/5 border-primary/50">
                <div className="flex flex-col gap-2">
                  <div className="text-sm text-muted-foreground">Accuracy</div>
                  <div className="text-3xl font-bold text-primary">87.94%</div>
                  <div className="flex items-center gap-1 text-xs text-primary">
                    <TrendingUp className="h-3 w-3" />
                    <span>Best performing</span>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-gradient-to-br from-secondary/20 to-secondary/5 border-secondary/50">
                <div className="flex flex-col gap-2">
                  <div className="text-sm text-muted-foreground">Precision</div>
                  <div className="text-3xl font-bold text-secondary">87.91%</div>
                  <div className="text-xs text-muted-foreground">Macro average</div>
                </div>
              </Card>

              <Card className="p-6 bg-gradient-to-br from-accent/20 to-accent/5 border-accent/50">
                <div className="flex flex-col gap-2">
                  <div className="text-sm text-muted-foreground">Recall</div>
                  <div className="text-3xl font-bold text-accent">87.94%</div>
                  <div className="text-xs text-muted-foreground">Macro average</div>
                </div>
              </Card>

              <Card className="p-6 bg-gradient-to-br from-chart-4/20 to-chart-4/5 border-chart-4/50">
                <div className="flex flex-col gap-2">
                  <div className="text-sm text-muted-foreground">F1 Score</div>
                  <div className="text-3xl font-bold text-chart-4">87.89%</div>
                  <div className="text-xs text-muted-foreground">Balanced metric</div>
                </div>
              </Card>
            </div>

            {/* Confusion Matrix and Performance */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <ConfusionMatrix />
              <PerformanceMetrics />
            </div>

            {/* Classification Report */}
            <ClassificationReport />
          </TabsContent>

          <TabsContent value="comparison" className="space-y-6">
            <ModelComparison />
          </TabsContent>

          <TabsContent value="metrics" className="space-y-6">
            <Card className="p-8 bg-card/50 backdrop-blur border-border/50">
              <h3 className="text-2xl font-bold mb-6">Three-Class Classification Results</h3>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 rounded-lg bg-primary/10 border border-primary/30">
                    <div className="text-sm text-muted-foreground mb-1">Test Accuracy</div>
                    <div className="text-2xl font-bold text-primary">79.07%</div>
                  </div>
                  <div className="p-4 rounded-lg bg-secondary/10 border border-secondary/30">
                    <div className="text-sm text-muted-foreground mb-1">Macro Precision</div>
                    <div className="text-2xl font-bold text-secondary">68.25%</div>
                  </div>
                  <div className="p-4 rounded-lg bg-accent/10 border border-accent/30">
                    <div className="text-sm text-muted-foreground mb-1">ROC-AUC</div>
                    <div className="text-2xl font-bold text-accent">84.73%</div>
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-3 px-4 font-semibold">Class</th>
                        <th className="text-right py-3 px-4 font-semibold">Precision</th>
                        <th className="text-right py-3 px-4 font-semibold">Recall</th>
                        <th className="text-right py-3 px-4 font-semibold">F1-Score</th>
                        <th className="text-right py-3 px-4 font-semibold">Support</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-border/50">
                        <td className="py-3 px-4 font-medium">Candidate</td>
                        <td className="text-right py-3 px-4">0.8250</td>
                        <td className="text-right py-3 px-4">0.9219</td>
                        <td className="text-right py-3 px-4">0.8708</td>
                        <td className="text-right py-3 px-4">1,140</td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="py-3 px-4 font-medium">Confirmed</td>
                        <td className="text-right py-3 px-4">0.5472</td>
                        <td className="text-right py-3 px-4">0.4265</td>
                        <td className="text-right py-3 px-4">0.4793</td>
                        <td className="text-right py-3 px-4">136</td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="py-3 px-4 font-medium">False Positive</td>
                        <td className="text-right py-3 px-4">0.6753</td>
                        <td className="text-right py-3 px-4">0.4031</td>
                        <td className="text-right py-3 px-4">0.5049</td>
                        <td className="text-right py-3 px-4">258</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="p-6 rounded-lg bg-muted/30 border border-border">
                  <h4 className="font-semibold mb-3">Confusion Matrix (3-Class)</h4>
                  <div className="grid grid-cols-3 gap-2 max-w-md">
                    <div className="p-3 bg-primary/20 rounded text-center font-mono text-sm">1051</div>
                    <div className="p-3 bg-muted rounded text-center font-mono text-sm">42</div>
                    <div className="p-3 bg-muted rounded text-center font-mono text-sm">47</div>
                    <div className="p-3 bg-muted rounded text-center font-mono text-sm">75</div>
                    <div className="p-3 bg-secondary/20 rounded text-center font-mono text-sm">58</div>
                    <div className="p-3 bg-muted rounded text-center font-mono text-sm">3</div>
                    <div className="p-3 bg-muted rounded text-center font-mono text-sm">148</div>
                    <div className="p-3 bg-muted rounded text-center font-mono text-sm">6</div>
                    <div className="p-3 bg-accent/20 rounded text-center font-mono text-sm">104</div>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="dataset" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-8 bg-card/50 backdrop-blur border-border/50">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <Target className="h-5 w-5 text-primary" />
                  Dataset Overview
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b border-border/50">
                    <span className="text-muted-foreground">Total Records</span>
                    <span className="font-semibold">3,992</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-border/50">
                    <span className="text-muted-foreground">After Filtering</span>
                    <span className="font-semibold">3,677</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-border/50">
                    <span className="text-muted-foreground">Training Set</span>
                    <span className="font-semibold">2,573 (70%)</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-border/50">
                    <span className="text-muted-foreground">Test Set</span>
                    <span className="font-semibold">1,104 (30%)</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-muted-foreground">Features Used</span>
                    <span className="font-semibold">76</span>
                  </div>
                </div>
              </Card>

              <Card className="p-8 bg-card/50 backdrop-blur border-border/50">
                <h3 className="text-xl font-bold mb-6">Class Distribution</h3>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Confirmed Planets</span>
                      <span className="font-semibold">693 samples</span>
                    </div>
                    <div className="h-3 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-primary rounded-full" style={{ width: "62.8%" }} />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Candidate Planets</span>
                      <span className="font-semibold">411 samples</span>
                    </div>
                    <div className="h-3 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-secondary rounded-full" style={{ width: "37.2%" }} />
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            <Card className="p-8 bg-card/50 backdrop-blur border-border/50">
              <h3 className="text-xl font-bold mb-6">Model Configuration</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <div className="text-sm text-muted-foreground">Algorithm</div>
                  <div className="font-semibold">Random Forest Classifier</div>
                  <div className="text-xs text-muted-foreground">Ensemble of 500 decision trees</div>
                </div>
                <div className="space-y-2">
                  <div className="text-sm text-muted-foreground">Number of Trees</div>
                  <div className="font-semibold">500</div>
                </div>
                <div className="space-y-2">
                  <div className="text-sm text-muted-foreground">Maximum Depth</div>
                  <div className="font-semibold">50</div>
                </div>
                <div className="space-y-2">
                  <div className="text-sm text-muted-foreground">Min Samples Split</div>
                  <div className="font-semibold">5</div>
                </div>
                <div className="space-y-2">
                  <div className="text-sm text-muted-foreground">Min Samples Leaf</div>
                  <div className="font-semibold">1</div>
                </div>
                <div className="space-y-2">
                  <div className="text-sm text-muted-foreground">Max Features</div>
                  <div className="font-semibold">sqrt</div>
                </div>
                <div className="space-y-2">
                  <div className="text-sm text-muted-foreground">Bootstrap</div>
                  <div className="font-semibold">False</div>
                </div>
                <div className="space-y-2">
                  <div className="text-sm text-muted-foreground">Validation</div>
                  <div className="font-semibold">5-fold CV</div>
                </div>
                <div className="space-y-2">
                  <div className="text-sm text-muted-foreground">Data Source</div>
                  <div className="font-semibold">NASA K2 Archive</div>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/30">
              <h3 className="text-xl font-bold mb-4">Key Insights</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>
                    The Stacking Classifier achieves 87.94% accuracy by combining multiple ensemble methods for robust
                    predictions.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>
                    High precision and recall rates minimize false positives, making it reliable for prioritizing
                    follow-up observations.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>Discovery year range spans from 2014 to 2019, primarily from the K2 mission.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>
                    Robust training with 5-fold cross-validation and 50 hyperparameter combinations ensures model
                    generalizability.
                  </span>
                </li>
              </ul>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
