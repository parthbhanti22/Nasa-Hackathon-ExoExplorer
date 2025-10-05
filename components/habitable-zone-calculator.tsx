"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Badge } from "@/components/ui/badge"

const starTypes = [
  { name: "M-type (Red Dwarf)", temp: 3000, luminosity: 0.04, color: "rgba(255, 100, 80, 1)" },
  { name: "K-type (Orange Dwarf)", temp: 4500, luminosity: 0.3, color: "rgba(255, 180, 100, 1)" },
  { name: "G-type (Sun-like)", temp: 5800, luminosity: 1.0, color: "rgba(255, 220, 100, 1)" },
  { name: "F-type (Yellow-White)", temp: 6500, luminosity: 2.5, color: "rgba(255, 255, 200, 1)" },
  { name: "A-type (White)", temp: 8500, luminosity: 8.0, color: "rgba(220, 220, 255, 1)" },
]

export function HabitableZoneCalculator() {
  const [selectedStar, setSelectedStar] = useState(2)
  const [planetDistance, setPlanetDistance] = useState(1.0)

  const star = starTypes[selectedStar]
  const innerEdge = Math.sqrt(star.luminosity / 1.1)
  const outerEdge = Math.sqrt(star.luminosity / 0.53)

  const isInHabitableZone = planetDistance >= innerEdge && planetDistance <= outerEdge

  return (
    <Card className="p-6 bg-card/50 backdrop-blur border-border/50">
      <div className="space-y-6">
        {/* Star Type Selection */}
        <div>
          <div className="text-sm font-semibold mb-3 text-muted-foreground">Select Star Type</div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-2">
            {starTypes.map((type, index) => (
              <Button
                key={index}
                onClick={() => setSelectedStar(index)}
                variant={selectedStar === index ? "secondary" : "outline"}
                className={`h-auto py-3 px-2 flex flex-col items-center gap-2 ${
                  selectedStar === index ? "bg-primary/20 border-primary/50" : "bg-transparent"
                }`}
              >
                <div
                  className="h-8 w-8 rounded-full"
                  style={{
                    background: `radial-gradient(circle, ${type.color}, ${type.color}80)`,
                    boxShadow: `0 0 20px ${type.color}40`,
                  }}
                />
                <div className="text-xs text-center leading-tight">{type.name.split(" ")[0]}</div>
              </Button>
            ))}
          </div>
        </div>

        {/* Visualization */}
        <div className="relative h-48 rounded-lg border border-border bg-[rgba(10,10,30,1)] overflow-hidden">
          <div className="absolute inset-0 flex items-center">
            {/* Star */}
            <div
              className="absolute left-8 h-16 w-16 rounded-full"
              style={{
                background: `radial-gradient(circle, ${star.color}, ${star.color}80, transparent)`,
                boxShadow: `0 0 40px ${star.color}60`,
              }}
            />

            {/* Habitable Zone */}
            <div
              className="absolute h-full bg-gradient-to-r from-green-500/20 via-green-500/30 to-green-500/20 border-y-2 border-green-500/50"
              style={{
                left: `${Math.min(innerEdge * 80 + 80, 500)}px`,
                width: `${Math.min((outerEdge - innerEdge) * 80, 400)}px`,
              }}
            >
              <div className="absolute top-2 left-2 text-xs text-green-400 font-semibold">Habitable Zone</div>
            </div>

            {/* Planet */}
            <div
              className="absolute h-10 w-10 rounded-full transition-all duration-300"
              style={{
                left: `${Math.min(planetDistance * 80 + 80, 600)}px`,
                top: "50%",
                transform: "translateY(-50%)",
                background: isInHabitableZone
                  ? "radial-gradient(circle, rgba(100, 200, 255, 1), rgba(100, 150, 255, 0.8))"
                  : "radial-gradient(circle, rgba(200, 100, 100, 1), rgba(150, 100, 100, 0.8))",
                boxShadow: isInHabitableZone
                  ? "0 0 20px rgba(100, 200, 255, 0.6)"
                  : "0 0 20px rgba(200, 100, 100, 0.6)",
              }}
            />
          </div>
        </div>

        {/* Planet Distance Control */}
        <div>
          <div className="flex justify-between text-sm mb-2">
            <span className="text-muted-foreground">Planet Distance from Star</span>
            <span className="font-mono text-primary">{planetDistance.toFixed(2)} AU</span>
          </div>
          <Slider
            value={[planetDistance]}
            onValueChange={(v) => setPlanetDistance(v[0])}
            min={0.1}
            max={3}
            step={0.05}
          />
        </div>

        {/* Results */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="p-4 bg-muted/30 border-border">
            <div className="text-xs text-muted-foreground mb-1">Inner Edge</div>
            <div className="text-lg font-bold text-green-400">{innerEdge.toFixed(2)} AU</div>
          </Card>
          <Card className="p-4 bg-muted/30 border-border">
            <div className="text-xs text-muted-foreground mb-1">Outer Edge</div>
            <div className="text-lg font-bold text-green-400">{outerEdge.toFixed(2)} AU</div>
          </Card>
          <Card className="p-4 bg-muted/30 border-border">
            <div className="text-xs text-muted-foreground mb-1">Status</div>
            <Badge variant={isInHabitableZone ? "default" : "destructive"} className="text-sm">
              {isInHabitableZone ? "Habitable" : "Not Habitable"}
            </Badge>
          </Card>
        </div>

        {/* Star Info */}
        <div className="p-4 rounded-lg bg-muted/30 border border-border">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div>
              <div className="text-muted-foreground mb-1">Star Type</div>
              <div className="font-semibold">{star.name}</div>
            </div>
            <div>
              <div className="text-muted-foreground mb-1">Temperature</div>
              <div className="font-semibold">{star.temp}K</div>
            </div>
            <div>
              <div className="text-muted-foreground mb-1">Luminosity</div>
              <div className="font-semibold">{star.luminosity}× Sun</div>
            </div>
            <div>
              <div className="text-muted-foreground mb-1">HZ Width</div>
              <div className="font-semibold">{(outerEdge - innerEdge).toFixed(2)} AU</div>
            </div>
          </div>
        </div>

        <div className="p-4 rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/30">
          <p className="text-sm text-muted-foreground leading-relaxed">
            The habitable zone is the region around a star where liquid water could exist on a planet's surface. More
            luminous stars have wider habitable zones located farther from the star, while dimmer stars have narrower
            zones closer in.
          </p>
        </div>
      </div>
    </Card>
  )
}
