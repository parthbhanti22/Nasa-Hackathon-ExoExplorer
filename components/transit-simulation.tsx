"use client"

import { useState, useEffect, useRef } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Play, Pause, RotateCcw } from "lucide-react"

export function TransitSimulation() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [planetSize, setPlanetSize] = useState(20)
  const [speed, setSpeed] = useState(1)
  const [position, setPosition] = useState(0)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const lightCurveRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (!isPlaying) return

    const interval = setInterval(() => {
      setPosition((prev) => (prev + speed * 0.5) % 400)
    }, 16)

    return () => clearInterval(interval)
  }, [isPlaying, speed])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Clear canvas
    ctx.fillStyle = "rgba(10, 10, 30, 1)"
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    // Draw star
    const starX = canvas.width / 2
    const starY = canvas.height / 2
    const starRadius = 60

    const gradient = ctx.createRadialGradient(starX, starY, 0, starX, starY, starRadius)
    gradient.addColorStop(0, "rgba(255, 220, 100, 1)")
    gradient.addColorStop(0.5, "rgba(255, 200, 80, 0.8)")
    gradient.addColorStop(1, "rgba(255, 180, 60, 0.3)")

    ctx.fillStyle = gradient
    ctx.beginPath()
    ctx.arc(starX, starY, starRadius, 0, Math.PI * 2)
    ctx.fill()

    // Draw planet
    const planetX = position
    const planetY = starY
    const planetRadius = planetSize

    ctx.fillStyle = "rgba(100, 150, 255, 0.9)"
    ctx.beginPath()
    ctx.arc(planetX, planetY, planetRadius, 0, Math.PI * 2)
    ctx.fill()

    ctx.strokeStyle = "rgba(100, 150, 255, 0.5)"
    ctx.lineWidth = 2
    ctx.stroke()
  }, [position, planetSize])

  useEffect(() => {
    const canvas = lightCurveRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Clear canvas
    ctx.fillStyle = "rgba(10, 10, 30, 1)"
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    // Draw grid
    ctx.strokeStyle = "rgba(100, 100, 150, 0.2)"
    ctx.lineWidth = 1

    for (let i = 0; i <= 5; i++) {
      const y = (i * canvas.height) / 5
      ctx.beginPath()
      ctx.moveTo(0, y)
      ctx.lineTo(canvas.width, y)
      ctx.stroke()
    }

    // Draw light curve
    ctx.strokeStyle = "rgba(100, 200, 255, 1)"
    ctx.lineWidth = 2
    ctx.beginPath()

    const starX = 200
    const starRadius = 60
    const planetRadius = planetSize

    for (let x = 0; x < canvas.width; x++) {
      const planetX = (x / canvas.width) * 400
      const distance = Math.abs(planetX - starX)

      let brightness = 1

      if (distance < starRadius + planetRadius) {
        const overlap = Math.max(0, starRadius + planetRadius - distance)
        const maxOverlap = planetRadius * 2
        brightness = 1 - (overlap / maxOverlap) * (planetRadius / starRadius) ** 2 * 0.3
      }

      const y = canvas.height - brightness * canvas.height * 0.8 - canvas.height * 0.1

      if (x === 0) {
        ctx.moveTo(x, y)
      } else {
        ctx.lineTo(x, y)
      }
    }

    ctx.stroke()

    // Draw current position indicator
    const currentX = (position / 400) * canvas.width
    ctx.strokeStyle = "rgba(255, 100, 100, 0.8)"
    ctx.lineWidth = 2
    ctx.beginPath()
    ctx.moveTo(currentX, 0)
    ctx.lineTo(currentX, canvas.height)
    ctx.stroke()
  }, [position, planetSize])

  const handleReset = () => {
    setIsPlaying(false)
    setPosition(0)
  }

  return (
    <Card className="p-6 bg-card/50 backdrop-blur border-border/50">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <div className="text-sm font-semibold mb-2 text-muted-foreground">Transit View</div>
          <canvas
            ref={canvasRef}
            width={400}
            height={200}
            className="w-full rounded-lg border border-border bg-[rgba(10,10,30,1)]"
          />
        </div>

        <div>
          <div className="text-sm font-semibold mb-2 text-muted-foreground">Light Curve</div>
          <canvas
            ref={lightCurveRef}
            width={400}
            height={200}
            className="w-full rounded-lg border border-border bg-[rgba(10,10,30,1)]"
          />
        </div>
      </div>

      <div className="mt-6 space-y-4">
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

        <div className="space-y-3">
          <div>
            <div className="flex justify-between text-sm mb-2">
              <span className="text-muted-foreground">Planet Size</span>
              <span className="font-mono text-primary">{planetSize}px</span>
            </div>
            <Slider value={[planetSize]} onValueChange={(v) => setPlanetSize(v[0])} min={10} max={40} step={1} />
          </div>

          <div>
            <div className="flex justify-between text-sm mb-2">
              <span className="text-muted-foreground">Orbital Speed</span>
              <span className="font-mono text-secondary">{speed.toFixed(1)}x</span>
            </div>
            <Slider value={[speed]} onValueChange={(v) => setSpeed(v[0])} min={0.5} max={3} step={0.1} />
          </div>
        </div>
      </div>

      <div className="mt-6 p-4 rounded-lg bg-muted/30 border border-border">
        <p className="text-sm text-muted-foreground leading-relaxed">
          As the planet transits across the star, it blocks a portion of the star's light, creating a characteristic dip
          in the light curve. Larger planets create deeper transits, while the transit duration depends on the planet's
          orbital speed and size.
        </p>
      </div>
    </Card>
  )
}
