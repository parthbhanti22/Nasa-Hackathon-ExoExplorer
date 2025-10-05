import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Rocket, Calendar, Target, Award } from "lucide-react"

export function K2MissionInfo() {
  return (
    <div className="space-y-6">
      <Card className="p-8 bg-gradient-to-br from-primary/20 to-secondary/20 border-primary/50">
        <div className="flex items-start gap-4 mb-6">
          <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-primary/30 border-2 border-primary shrink-0">
            <Rocket className="h-7 w-7 text-primary" />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-2">The K2 Mission</h2>
            <p className="text-muted-foreground leading-relaxed">
              NASA's extended Kepler mission that revolutionized exoplanet discovery
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 rounded-lg bg-card/50 border border-border">
            <div className="flex items-center gap-2 mb-2">
              <Calendar className="h-4 w-4 text-primary" />
              <div className="text-sm font-semibold">Mission Duration</div>
            </div>
            <div className="text-2xl font-bold text-primary">2014-2018</div>
            <div className="text-xs text-muted-foreground mt-1">4 years of observations</div>
          </div>
          <div className="p-4 rounded-lg bg-card/50 border border-border">
            <div className="flex items-center gap-2 mb-2">
              <Target className="h-4 w-4 text-secondary" />
              <div className="text-sm font-semibold">Campaigns</div>
            </div>
            <div className="text-2xl font-bold text-secondary">19</div>
            <div className="text-xs text-muted-foreground mt-1">Observing campaigns</div>
          </div>
          <div className="p-4 rounded-lg bg-card/50 border border-border">
            <div className="flex items-center gap-2 mb-2">
              <Award className="h-4 w-4 text-accent" />
              <div className="text-sm font-semibold">Discoveries</div>
            </div>
            <div className="text-2xl font-bold text-accent">500+</div>
            <div className="text-xs text-muted-foreground mt-1">Confirmed exoplanets</div>
          </div>
        </div>
      </Card>

      <Card className="p-8 bg-card/50 backdrop-blur border-border/50">
        <h3 className="text-xl font-bold mb-4">Mission Overview</h3>
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p>
            The K2 mission was born from adversity. After the original Kepler mission lost two of its four reaction
            wheels in 2013, NASA engineers devised an ingenious solution: use the pressure of sunlight to help stabilize
            the spacecraft. This "second light" for Kepler became the K2 mission.
          </p>
          <p>
            Unlike the original Kepler mission which stared at a single patch of sky, K2 observed different fields along
            the ecliptic plane in 80-day campaigns. This approach allowed the mission to study a diverse range of
            astronomical objects while continuing the search for exoplanets.
          </p>
          <p>
            The K2 mission discovered hundreds of confirmed exoplanets and thousands of candidates, including many in
            multi-planet systems. Its data continues to yield new discoveries even after the mission's end in 2018.
          </p>
        </div>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="p-6 bg-card/50 backdrop-blur border-border/50">
          <h3 className="text-lg font-bold mb-4">Key Achievements</h3>
          <ul className="space-y-3">
            <li className="flex gap-3">
              <span className="text-primary mt-1">•</span>
              <span className="text-sm text-muted-foreground">
                Discovered over 500 confirmed exoplanets across diverse stellar environments
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary mt-1">•</span>
              <span className="text-sm text-muted-foreground">
                Identified numerous super-Earths and Neptune-sized planets in habitable zones
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary mt-1">•</span>
              <span className="text-sm text-muted-foreground">
                Studied young star clusters, supernovae, and other astronomical phenomena
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary mt-1">•</span>
              <span className="text-sm text-muted-foreground">
                Provided data for thousands of scientific papers and ongoing research
              </span>
            </li>
          </ul>
        </Card>

        <Card className="p-6 bg-card/50 backdrop-blur border-border/50">
          <h3 className="text-lg font-bold mb-4">Technical Specifications</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center pb-2 border-b border-border/50">
              <span className="text-sm text-muted-foreground">Telescope Aperture</span>
              <span className="font-semibold text-sm">0.95 meters</span>
            </div>
            <div className="flex justify-between items-center pb-2 border-b border-border/50">
              <span className="text-sm text-muted-foreground">Field of View</span>
              <span className="font-semibold text-sm">115 square degrees</span>
            </div>
            <div className="flex justify-between items-center pb-2 border-b border-border/50">
              <span className="text-sm text-muted-foreground">Photometric Precision</span>
              <span className="font-semibold text-sm">~20 ppm</span>
            </div>
            <div className="flex justify-between items-center pb-2 border-b border-border/50">
              <span className="text-sm text-muted-foreground">Campaign Duration</span>
              <span className="font-semibold text-sm">~80 days</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Data Cadence</span>
              <span className="font-semibold text-sm">30-minute</span>
            </div>
          </div>
        </Card>
      </div>

      <Card className="p-8 bg-gradient-to-br from-accent/10 to-primary/10 border-accent/30">
        <h3 className="text-xl font-bold mb-4">Legacy and Impact</h3>
        <p className="text-muted-foreground leading-relaxed mb-4">
          The K2 mission demonstrated that even when faced with technical challenges, innovative solutions can lead to
          continued scientific success. The mission's data has been instrumental in advancing our understanding of
          planetary systems, stellar evolution, and the prevalence of planets in our galaxy.
        </p>
        <div className="flex flex-wrap gap-2">
          <Badge variant="outline">Transit Photometry</Badge>
          <Badge variant="outline">Exoplanet Discovery</Badge>
          <Badge variant="outline">Stellar Characterization</Badge>
          <Badge variant="outline">Citizen Science</Badge>
        </div>
      </Card>
    </div>
  )
}
