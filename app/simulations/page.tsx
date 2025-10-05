import { Sparkles } from "lucide-react"
import { TransitSimulation } from "@/components/transit-simulation"
import { OrbitSimulation } from "@/components/orbit-simulation"
import { HabitableZoneCalculator } from "@/components/habitable-zone-calculator"

export default function SimulationsPage() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="flex flex-col gap-6 mb-12">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/20 border border-secondary/50">
              <Sparkles className="h-6 w-6 text-secondary" />
            </div>
            <div>
              <h1 className="text-4xl font-bold">Interactive Simulations</h1>
              <p className="text-muted-foreground">Explore exoplanet phenomena through interactive visualizations</p>
            </div>
          </div>
        </div>

        <div className="space-y-12">
          {/* Transit Simulation */}
          <section>
            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-2">Transit Method Visualization</h2>
              <p className="text-muted-foreground leading-relaxed">
                Watch how a planet passing in front of its star causes a dip in brightness. Adjust the planet size and
                orbital speed to see how it affects the light curve.
              </p>
            </div>
            <TransitSimulation />
          </section>

          {/* Orbit Simulation */}
          <section>
            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-2">Planetary Orbit Simulator</h2>
              <p className="text-muted-foreground leading-relaxed">
                Visualize how planets orbit their host stars. Experiment with different orbital parameters like
                eccentricity and semi-major axis.
              </p>
            </div>
            <OrbitSimulation />
          </section>

          {/* Habitable Zone Calculator */}
          <section>
            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-2">Habitable Zone Calculator</h2>
              <p className="text-muted-foreground leading-relaxed">
                Calculate the habitable zone for different types of stars. See where liquid water could exist on a
                planet's surface.
              </p>
            </div>
            <HabitableZoneCalculator />
          </section>
        </div>
      </div>
    </div>
  )
}
