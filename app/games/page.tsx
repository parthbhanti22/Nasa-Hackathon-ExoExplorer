import { Gamepad2 } from "lucide-react"
import { ExoplanetQuiz } from "@/components/exoplanet-quiz"
import { PlanetHunter } from "@/components/planet-hunter"
import { ExoplanetMemory } from "@/components/exoplanet-memory"

export default function GamesPage() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="flex flex-col gap-6 mb-12">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/20 border border-accent/50">
              <Gamepad2 className="h-6 w-6 text-accent" />
            </div>
            <div>
              <h1 className="text-4xl font-bold">Interactive Games</h1>
              <p className="text-muted-foreground">Learn about exoplanets through fun, educational games</p>
            </div>
          </div>
        </div>

        <div className="space-y-12">
          {/* Exoplanet Quiz */}
          <section>
            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-2">Exoplanet Knowledge Quiz</h2>
              <p className="text-muted-foreground leading-relaxed">
                Test your knowledge about exoplanets, detection methods, and the K2 mission. Can you get a perfect
                score?
              </p>
            </div>
            <ExoplanetQuiz />
          </section>

          {/* Planet Hunter Game */}
          <section>
            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-2">Planet Hunter Challenge</h2>
              <p className="text-muted-foreground leading-relaxed">
                Spot the transiting planets by clicking on the light curve dips. How many can you find before time runs
                out?
              </p>
            </div>
            <PlanetHunter />
          </section>

          {/* Memory Game */}
          <section>
            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-2">Exoplanet Memory Match</h2>
              <p className="text-muted-foreground leading-relaxed">
                Match pairs of exoplanet types and their characteristics. Train your memory while learning about
                different planet categories.
              </p>
            </div>
            <ExoplanetMemory />
          </section>
        </div>
      </div>
    </div>
  )
}
