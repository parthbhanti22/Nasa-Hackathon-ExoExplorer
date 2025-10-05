import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, Globe, Telescope, Orbit, Thermometer, Ruler } from "lucide-react"
import { ExoplanetCard } from "@/components/exoplanet-card"
import { K2MissionInfo } from "@/components/k2-mission-info"

export default function EncyclopediaPage() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="flex flex-col gap-6 mb-12">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/20 border border-primary/50">
              <BookOpen className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h1 className="text-4xl font-bold">Exoplanet Encyclopedia</h1>
              <p className="text-muted-foreground">Comprehensive guide to worlds beyond our solar system</p>
            </div>
          </div>
        </div>

        <Tabs defaultValue="types" className="space-y-8">
          <TabsList className="grid w-full grid-cols-4 lg:w-auto lg:inline-grid bg-card/50 backdrop-blur">
            <TabsTrigger value="types">Planet Types</TabsTrigger>
            <TabsTrigger value="detection">Detection Methods</TabsTrigger>
            <TabsTrigger value="k2">K2 Mission</TabsTrigger>
            <TabsTrigger value="glossary">Glossary</TabsTrigger>
          </TabsList>

          <TabsContent value="types" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ExoplanetCard
                title="Hot Jupiters"
                icon={Thermometer}
                color="chart-5"
                description="Gas giants orbiting very close to their host stars with extremely high surface temperatures."
                characteristics={[
                  "Mass: Similar to Jupiter or larger",
                  "Orbital Period: Less than 10 days",
                  "Temperature: 1000-3000K",
                  "Distance from Star: < 0.1 AU",
                ]}
                examples={["51 Pegasi b", "HD 209458 b", "WASP-12b"]}
              />

              <ExoplanetCard
                title="Super-Earths"
                icon={Globe}
                color="primary"
                description="Rocky planets larger than Earth but smaller than Neptune, potentially habitable."
                characteristics={[
                  "Mass: 2-10 Earth masses",
                  "Radius: 1.25-2 Earth radii",
                  "Composition: Rocky or water-rich",
                  "Potential for life: High",
                ]}
                examples={["Kepler-452b", "Proxima Centauri b", "LHS 1140 b"]}
              />

              <ExoplanetCard
                title="Neptune-like"
                icon={Orbit}
                color="secondary"
                description="Ice giants with thick atmospheres of hydrogen and helium, similar to Neptune."
                characteristics={[
                  "Mass: 10-50 Earth masses",
                  "Radius: 2-6 Earth radii",
                  "Atmosphere: H2, He, CH4",
                  "Temperature: Varies widely",
                ]}
                examples={["HAT-P-11b", "Kepler-101b", "GJ 436 b"]}
              />

              <ExoplanetCard
                title="Gas Giants"
                icon={Ruler}
                color="accent"
                description="Massive planets composed primarily of hydrogen and helium, like Jupiter and Saturn."
                characteristics={[
                  "Mass: > 50 Earth masses",
                  "Radius: > 6 Earth radii",
                  "Composition: H2 and He",
                  "Often have ring systems",
                ]}
                examples={["HD 106906 b", "Beta Pictoris b", "51 Eridani b"]}
              />
            </div>

            <Card className="p-8 bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/30">
              <h3 className="text-xl font-bold mb-4">Understanding Exoplanet Classification</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Exoplanets are classified based on their mass, radius, composition, and orbital characteristics. The
                diversity of exoplanets discovered has challenged our understanding of planetary formation and revealed
                that our solar system is just one of many possible configurations.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                <div className="p-4 rounded-lg bg-card/50 border border-border">
                  <div className="text-2xl font-bold text-primary mb-1">5,000+</div>
                  <div className="text-sm text-muted-foreground">Confirmed Exoplanets</div>
                </div>
                <div className="p-4 rounded-lg bg-card/50 border border-border">
                  <div className="text-2xl font-bold text-secondary mb-1">3,800+</div>
                  <div className="text-sm text-muted-foreground">Planetary Systems</div>
                </div>
                <div className="p-4 rounded-lg bg-card/50 border border-border">
                  <div className="text-2xl font-bold text-accent mb-1">800+</div>
                  <div className="text-sm text-muted-foreground">Multi-planet Systems</div>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="detection" className="space-y-6">
            <div className="grid grid-cols-1 gap-6">
              <Card className="p-8 bg-card/50 backdrop-blur border-border/50">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/20 shrink-0">
                    <Telescope className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-3">Transit Method</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      The most successful method for detecting exoplanets. When a planet passes in front of its host
                      star from our perspective, it causes a small, periodic dip in the star's brightness. By measuring
                      these dips, we can determine the planet's size, orbital period, and distance from its star.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-4 rounded-lg bg-muted/30 border border-border">
                        <div className="font-semibold text-sm mb-2">Advantages</div>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Can detect small planets</li>
                          <li>• Provides planet radius</li>
                          <li>• Enables atmospheric studies</li>
                        </ul>
                      </div>
                      <div className="p-4 rounded-lg bg-muted/30 border border-border">
                        <div className="font-semibold text-sm mb-2">Limitations</div>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Requires edge-on orbit</li>
                          <li>• Limited to nearby stars</li>
                          <li>• Can have false positives</li>
                        </ul>
                      </div>
                    </div>
                    <Badge className="mt-4 bg-primary/20 text-primary border-primary/50">
                      Used by Kepler & K2 missions
                    </Badge>
                  </div>
                </div>
              </Card>

              <Card className="p-8 bg-card/50 backdrop-blur border-border/50">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/20 shrink-0">
                    <Orbit className="h-6 w-6 text-secondary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-3">Radial Velocity Method</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Also known as the Doppler method, this technique detects the wobble of a star caused by the
                      gravitational pull of an orbiting planet. As the star moves toward and away from us, its light is
                      shifted to bluer and redder wavelengths, allowing us to infer the planet's mass and orbit.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-4 rounded-lg bg-muted/30 border border-border">
                        <div className="font-semibold text-sm mb-2">Advantages</div>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Provides planet mass</li>
                          <li>• Works for any orbital plane</li>
                          <li>• Detects massive planets easily</li>
                        </ul>
                      </div>
                      <div className="p-4 rounded-lg bg-muted/30 border border-border">
                        <div className="font-semibold text-sm mb-2">Limitations</div>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Difficult for small planets</li>
                          <li>• Requires precise measurements</li>
                          <li>• Stellar activity can interfere</li>
                        </ul>
                      </div>
                    </div>
                    <Badge className="mt-4 bg-secondary/20 text-secondary border-secondary/50">
                      First confirmed exoplanet method
                    </Badge>
                  </div>
                </div>
              </Card>

              <Card className="p-8 bg-card/50 backdrop-blur border-border/50">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/20 shrink-0">
                    <Globe className="h-6 w-6 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-3">Direct Imaging</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      The most challenging but visually stunning method involves directly photographing exoplanets by
                      blocking out the star's light. This technique works best for young, massive planets that are far
                      from their host stars and still glowing from their formation heat.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-4 rounded-lg bg-muted/30 border border-border">
                        <div className="font-semibold text-sm mb-2">Advantages</div>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Direct observation</li>
                          <li>• Can study atmospheres</li>
                          <li>• Provides visual confirmation</li>
                        </ul>
                      </div>
                      <div className="p-4 rounded-lg bg-muted/30 border border-border">
                        <div className="font-semibold text-sm mb-2">Limitations</div>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Only works for large planets</li>
                          <li>• Requires wide orbits</li>
                          <li>• Technically very challenging</li>
                        </ul>
                      </div>
                    </div>
                    <Badge className="mt-4 bg-accent/20 text-accent border-accent/50">
                      Future of exoplanet imaging
                    </Badge>
                  </div>
                </div>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="k2" className="space-y-6">
            <K2MissionInfo />
          </TabsContent>

          <TabsContent value="glossary" className="space-y-6">
            <Card className="p-8 bg-card/50 backdrop-blur border-border/50">
              <h3 className="text-2xl font-bold mb-6">Exoplanet Terminology</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="pb-4 border-b border-border/50">
                    <div className="font-semibold mb-1">Astronomical Unit (AU)</div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      The average distance between Earth and the Sun, approximately 150 million kilometers. Used to
                      measure distances within planetary systems.
                    </p>
                  </div>
                  <div className="pb-4 border-b border-border/50">
                    <div className="font-semibold mb-1">Habitable Zone</div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      The region around a star where conditions might be right for liquid water to exist on a planet's
                      surface, a key requirement for life as we know it.
                    </p>
                  </div>
                  <div className="pb-4 border-b border-border/50">
                    <div className="font-semibold mb-1">Orbital Period</div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      The time it takes for a planet to complete one full orbit around its host star, equivalent to a
                      year on that planet.
                    </p>
                  </div>
                  <div className="pb-4 border-b border-border/50">
                    <div className="font-semibold mb-1">Eccentricity</div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      A measure of how elliptical a planet's orbit is. An eccentricity of 0 means a perfect circle,
                      while values closer to 1 indicate more elongated orbits.
                    </p>
                  </div>
                  <div className="pb-4 border-b border-border/50">
                    <div className="font-semibold mb-1">Transit Depth</div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      The amount of starlight blocked when a planet passes in front of its star, used to calculate the
                      planet's size relative to its star.
                    </p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="pb-4 border-b border-border/50">
                    <div className="font-semibold mb-1">Stellar Magnitude</div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      A measure of a star's brightness as seen from Earth. Lower numbers indicate brighter stars, with
                      each whole number representing about 2.5 times difference in brightness.
                    </p>
                  </div>
                  <div className="pb-4 border-b border-border/50">
                    <div className="font-semibold mb-1">Equilibrium Temperature</div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      The theoretical temperature of a planet assuming it has no atmosphere and is in thermal
                      equilibrium with its star.
                    </p>
                  </div>
                  <div className="pb-4 border-b border-border/50">
                    <div className="font-semibold mb-1">Candidate vs Confirmed</div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      A candidate exoplanet shows promising signals but requires additional verification. A confirmed
                      exoplanet has been validated through multiple observations or methods.
                    </p>
                  </div>
                  <div className="pb-4 border-b border-border/50">
                    <div className="font-semibold mb-1">False Positive</div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      A signal that initially appears to be from an exoplanet but is later determined to be caused by
                      other phenomena like binary stars or stellar activity.
                    </p>
                  </div>
                  <div className="pb-4 border-b border-border/50">
                    <div className="font-semibold mb-1">Light Curve</div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      A graph showing how a star's brightness changes over time, used to detect transiting planets and
                      analyze their properties.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
