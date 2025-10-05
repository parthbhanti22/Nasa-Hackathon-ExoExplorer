import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, Sparkles, Target, Zap, Globe } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="flex flex-col items-center text-center gap-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/50 bg-primary/10 px-4 py-2 text-sm text-primary">
            <Sparkles className="h-4 w-4" />
            <span>87.94% Classification Accuracy</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-balance max-w-4xl">
            Discover Exoplanets with{" "}
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Machine Learning
            </span>
          </h1>

          <p className="text-xl text-muted-foreground max-w-2xl text-balance leading-relaxed">
            Explore our advanced Stacking Classifier trained on NASA's K2 mission data. Classify exoplanets as
            Candidates or Confirmed with state-of-the-art accuracy.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <Link href="/model">
              <Button size="lg" className="gap-2 bg-primary hover:bg-primary/90">
                View ML Model
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="/explorer">
              <Button size="lg" variant="outline" className="gap-2 bg-transparent">
                Try Live Explorer
                <Sparkles className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="p-6 bg-card/50 backdrop-blur border-border/50">
            <div className="flex flex-col gap-2">
              <div className="text-4xl font-bold text-primary">3,677</div>
              <div className="text-sm text-muted-foreground">Exoplanets Analyzed</div>
            </div>
          </Card>
          <Card className="p-6 bg-card/50 backdrop-blur border-border/50">
            <div className="flex flex-col gap-2">
              <div className="text-4xl font-bold text-secondary">87.94%</div>
              <div className="text-sm text-muted-foreground">Model Accuracy</div>
            </div>
          </Card>
          <Card className="p-6 bg-card/50 backdrop-blur border-border/50">
            <div className="flex flex-col gap-2">
              <div className="text-4xl font-bold text-accent">76</div>
              <div className="text-sm text-muted-foreground">Features Used</div>
            </div>
          </Card>
          <Card className="p-6 bg-card/50 backdrop-blur border-border/50">
            <div className="flex flex-col gap-2">
              <div className="text-4xl font-bold text-chart-4">500</div>
              <div className="text-sm text-muted-foreground">Decision Trees</div>
            </div>
          </Card>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-balance">Explore the Universe of Data</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="p-8 bg-card/50 backdrop-blur border-border/50 hover:border-primary/50 transition-colors">
            <div className="flex flex-col gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/20">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Advanced ML Models</h3>
              <p className="text-muted-foreground leading-relaxed">
                Stacking Classifier combining Random Forest, AdaBoost, and Extra Trees for superior classification
                performance.
              </p>
            </div>
          </Card>

          <Card className="p-8 bg-card/50 backdrop-blur border-border/50 hover:border-secondary/50 transition-colors">
            <div className="flex flex-col gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/20">
                <Zap className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold">Real-Time Classification</h3>
              <p className="text-muted-foreground leading-relaxed">
                Interact with our live Streamlit app to classify exoplanets and explore model predictions in real-time.
              </p>
            </div>
          </Card>

          <Card className="p-8 bg-card/50 backdrop-blur border-border/50 hover:border-accent/50 transition-colors">
            <div className="flex flex-col gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/20">
                <Globe className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold">K2 Mission Data</h3>
              <p className="text-muted-foreground leading-relaxed">
                Built on NASA's K2 Planets and Candidates Archive with data spanning from 2014 to 2019.
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <Card className="p-12 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 border-primary/30">
          <div className="flex flex-col items-center text-center gap-6">
            <h2 className="text-3xl md:text-4xl font-bold text-balance">Ready to Explore the Cosmos?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl text-balance">
              Dive into our interactive encyclopedia, run simulations, and play educational games about exoplanets and
              space exploration.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/encyclopedia">
                <Button size="lg" variant="secondary" className="gap-2">
                  Exoplanet Encyclopedia
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/simulations">
                <Button size="lg" variant="outline" className="gap-2 bg-transparent">
                  Interactive Simulations
                  <Sparkles className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </Card>
      </section>
    </div>
  )
}
