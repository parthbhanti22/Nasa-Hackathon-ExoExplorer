"use client"

import { useState, useEffect, useRef } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Play, Pause, RotateCcw } from "lucide-react"

export function OrbitSimulation() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [eccentricity, setEccentricity] = useState(0.3)
  const [semiMajorAxis, setSemiMajorAxis] = useState(100)
  const [angle, setAngle] = useState(0)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (!isPlaying) return

    const interval = setInterval(() => {
      setAngle((prev) => (prev + 0.02) % (Math.PI * 2))
    }, 16)

    return () => clearInterval(interval)
  }, [isPlaying])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const centerX = canvas.width / 2
    const centerY = canvas.height / 2

    // Clear canvas
    ctx.fillStyle = "rgba(10, 10, 30, 1)"
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    // Calculate orbital parameters
    const a = semiMajorAxis
    const e = eccentricity
    const b = a * Math.sqrt(1 - e * e)
    const c = a * e

    // Draw orbit path
    ctx.strokeStyle = "rgba(100, 150, 200, 0.5)"
    ctx.lineWidth = 2
    ctx.beginPath()
    ctx.ellipse(centerX + c, centerY, a, b, 0, 0, Math.PI * 2)
    ctx.stroke()

    // Draw star at focus
    const starX = centerX + c
    const starY = centerY

    const gradient = ctx.createRadialGradient(starX, starY, 0, starX, starY, 30)
    gradient.addColorStop(0, "rgba(255, 220, 100, 1)")
    gradient.addColorStop(0.5, "rgba(255, 200, 80, 0.8)")
    gradient.addColorStop(1, "rgba(255, 180, 60, 0.3)")

    ctx.fillStyle = gradient
    ctx.beginPath()
    ctx.arc(starX, starY, 30, 0, Math.PI * 2)
    ctx.fill()

    // Calculate planet position
    const r = (a * (1 - e * e)) / (1 + e * Math.cos(angle))
    const planetX = centerX + c + r * Math.cos(angle)
    const planetY = centerY + r * Math.sin(angle)

    // Draw planet
    ctx.fillStyle = "rgba(100, 150, 255, 0.9)"
    ctx.beginPath()
    ctx.arc(planetX, planetY, 15, 0, Math.PI * 2)
    ctx.fill()

    ctx.strokeStyle = "rgba(100, 150, 255, 0.5)"
    ctx.lineWidth = 2
    ctx.stroke()

    // Draw line from star to planet
    ctx.strokeStyle = "rgba(255, 255, 255, 0.2)"
    ctx.lineWidth = 1
    ctx.setLineDash([5, 5])
    ctx.beginPath()
    ctx.moveTo(starX, starY)
    ctx.lineTo(planetX, planetY)
    ctx.stroke()
    ctx.setLineDash([])

    // Draw perihelion and aphelion markers
    ctx.fillStyle = "rgba(255, 100, 100, 0.6)"
    ctx.beginPath()
    ctx.arc(centerX + c + a, centerY, 5, 0, Math.PI * 2)
    ctx.fill()

    ctx.fillStyle = "rgba(100, 255, 100, 0.6)"
    ctx.beginPath()
    ctx.arc(centerX + c - a, centerY, 5, 0, Math.PI * 2)
    ctx.fill()
  }, [angle, eccentricity, semiMajorAxis])

  const handleReset = () => {
    setIsPlaying(false)
    setAngle(0)
  }

  return (
    <Card className="p-6 bg-card/50 backdrop-blur border-border/50">
      <canvas
        ref={canvasRef}
        width={600}
        height={400}
        className="w-full rounded-lg border border-border bg-[rgba(10,10,30,1)] mb-6"
      />

      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <Button onClick={() => setIsPlaying(!isPlaying)} variant="secondary" className="gap-2">
            {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
            {isPlaying ? "Pause" : "Play"}
          </Button>
          <Button onClick={handleReset} variant="outline" className="gap-2 bg-transparent">
            <RotateCcw className="h-4 w-4" />
            Reset
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <div className="flex justify-between text-sm mb-2">
              <span className="text-muted-foreground">Eccentricity</span>
              <span className="font-mono text-primary">{eccentricity.toFixed(2)}</span>
            </div>
            <Slider value={[eccentricity]} onValueChange={(v) => setEccentricity(v[0])} min={0} max={0.8} step={0.01} />
            <div className="text-xs text-muted-foreground mt-1">0 = circular, higher = more elliptical</div>
          </div>

          <div>
            <div className="flex justify-between text-sm mb-2">
              <span className="text-muted-foreground">Semi-Major Axis</span>
              <span className="font-mono text-secondary">{semiMajorAxis}px</span>
            </div>
            <Slider value={[semiMajorAxis]} onValueChange={(v) => setSemiMajorAxis(v[0])} min={60} max={150} step={5} />
            <div className="text-xs text-muted-foreground mt-1">Orbital size</div>
          </div>
        </div>
      </div>

      <div className="mt-6 p-4 rounded-lg bg-muted/30 border border-border">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div>
            <div className="text-muted-foreground mb-1">Legend</div>
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-[rgba(255,100,100,0.6)]" />
              <span className="text-xs">Aphelion (farthest)</span>
            </div>
            <div className="flex items-center gap-2 mt-1">
              <div className="h-3 w-3 rounded-full bg-[rgba(100,255,100,0.6)]" />
              <span className="text-xs">Perihelion (closest)</span>
            </div>
          </div>
          <div className="md:col-span-2">
            <p className="text-muted-foreground leading-relaxed">
              Planets follow elliptical orbits with the star at one focus. Higher eccentricity creates more elongated
              orbits, causing the planet to move faster when closer to the star (Kepler's laws).
            </p>
          </div>
        </div>
      </div>
    </Card>
  )
}
