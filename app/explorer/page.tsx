import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Telescope, ExternalLink, Sparkles, Info } from "lucide-react"
import Link from "next/link"

export default function ExplorerPage() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="flex flex-col gap-6 mb-8">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/20 border border-accent/50">
              <Telescope className="h-6 w-6 text-accent" />
            </div>
            <div>
              <h1 className="text-4xl font-bold">Live ML Explorer</h1>
              <p className="text-muted-foreground">Interactive exoplanet classification in real-time</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <Badge variant="secondary" className="px-4 py-2 text-sm bg-accent/20 text-accent border-accent/50">
              <Sparkles className="h-4 w-4 mr-2" />
              Powered by Streamlit
            </Badge>
            <Badge variant="outline" className="px-4 py-2 text-sm">
              Real-time Predictions
            </Badge>
          </div>
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="p-6 bg-card/50 backdrop-blur border-border/50">
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/20 shrink-0">
                <Info className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Interactive Classification</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Input exoplanet parameters and get instant predictions from our trained model.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-card/50 backdrop-blur border-border/50">
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary/20 shrink-0">
                <Sparkles className="h-5 w-5 text-secondary" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Visualize Results</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  See probability distributions and confidence scores for each classification.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-card/50 backdrop-blur border-border/50">
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/20 shrink-0">
                <Telescope className="h-5 w-5 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Explore Features</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Understand which features contribute most to the model's predictions.
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Streamlit App Embed */}
        <Card className="overflow-hidden bg-card/50 backdrop-blur border-border/50">
          <div className="p-6 border-b border-border/50 bg-muted/30">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold mb-1">K2 Classification App</h2>
                <p className="text-sm text-muted-foreground">
                  Interact with the model directly through our Streamlit interface
                </p>
              </div>
              <Link href="https://6t4snphffjdtzdwpuygjsa.streamlit.app/" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="gap-2 bg-transparent">
                  Open in New Tab
                  <ExternalLink className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>

          <div className="relative w-full" style={{ height: "calc(100vh - 300px)", minHeight: "600px" }}>
            <iframe
              src="https://6t4snphffjdtzdwpuygjsa.streamlit.app/?embedded=true"
              className="w-full h-full border-0"
              title="Exoplanet Classification Streamlit App"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            />
          </div>
        </Card>

        {/* Usage Guide */}
        <Card className="mt-8 p-8 bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/30">
          <h3 className="text-xl font-bold mb-4">How to Use the Explorer</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <div className="flex gap-3">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/30 text-primary text-sm font-bold shrink-0">
                  1
                </div>
                <div>
                  <div className="font-semibold text-sm mb-1">Input Parameters</div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Enter the exoplanet's orbital and physical characteristics using the input fields.
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/30 text-primary text-sm font-bold shrink-0">
                  2
                </div>
                <div>
                  <div className="font-semibold text-sm mb-1">Run Classification</div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Click the classify button to process the data through our ML model.
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex gap-3">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/30 text-primary text-sm font-bold shrink-0">
                  3
                </div>
                <div>
                  <div className="font-semibold text-sm mb-1">View Results</div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    See the classification result with confidence scores and probability distributions.
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/30 text-primary text-sm font-bold shrink-0">
                  4
                </div>
                <div>
                  <div className="font-semibold text-sm mb-1">Explore Insights</div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Analyze feature importance and understand what drives the model's decision.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
