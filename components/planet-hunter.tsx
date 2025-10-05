"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Play, Pause, RotateCcw, Target } from "lucide-react"

export function PlanetHunter() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [timeLeft, setTimeLeft] = useState(30)
  const [score, setScore] = useState(0)
  const [gameOver, setGameOver] = useState(false)
  const [transits, setTransits] = useState<{ x: number; detected: boolean }[]>([])
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    // Generate random transits
    const newTransits: { x: number; detected: boolean }[] = []
    for (let i = 0; i < 8; i++) {
      newTransits.push({
        x: Math.random() * 500 + 50,
        detected: false,
      })
    }
    setTransits(newTransits)
  }, [gameOver])

  useEffect(() => {
    if (!isPlaying || gameOver) return

    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          setIsPlaying(false)
          setGameOver(true)
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [isPlaying, gameOver])

  useEffect(() => {
    const canvas = canvasRef.current
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

    // Draw light curve with transits
    ctx.strokeStyle = "rgba(100, 200, 255, 1)"
    ctx.lineWidth = 2
    ctx.beginPath()

    for (let x = 0; x < canvas.width; x++) {
      let brightness = 1

      // Check if this x position is near a transit
      for (const transit of transits) {
        const distance = Math.abs(x - transit.x)
        if (distance < 20) {
          const depth = 1 - (20 - distance) / 20
          brightness = Math.min(brightness, 0.7 + depth * 0.3)
        }
      }

      const y = canvas.height - brightness * canvas.height * 0.8 - canvas.height * 0.1

      if (x === 0) {
        ctx.moveTo(x, y)
      } else {
        ctx.lineTo(x, y)
      }
    }

    ctx.stroke()

    // Draw detected transits
    transits.forEach((transit) => {
      if (transit.detected) {
        ctx.fillStyle = "rgba(100, 255, 100, 0.3)"
        ctx.fillRect(transit.x - 20, 0, 40, canvas.height)

        ctx.strokeStyle = "rgba(100, 255, 100, 0.8)"
        ctx.lineWidth = 2
        ctx.beginPath()
        ctx.moveTo(transit.x, 0)
        ctx.lineTo(transit.x, canvas.height)
        ctx.stroke()
      }
    })
  }, [transits])

  const handleCanvasClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isPlaying || gameOver) return

    const canvas = canvasRef.current
    if (!canvas) return

    const rect = canvas.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * canvas.width

    // Check if click is near a transit
    let foundTransit = false
    setTransits((prev) =>
      prev.map((transit) => {
        if (!transit.detected && Math.abs(x - transit.x) < 25) {
          foundTransit = true
          setScore((s) => s + 10)
          return { ...transit, detected: true }
        }
        return transit
      }),
    )

    if (!foundTransit) {
      setScore((s) => Math.max(0, s - 2))
    }
  }

  const handleStart = () => {
    setIsPlaying(true)
    setGameOver(false)
    setScore(0)
    setTimeLeft(30)

    // Generate new transits
    const newTransits: { x: number; detected: boolean }[] = []
    for (let i = 0; i < 8; i++) {
      newTransits.push({
        x: Math.random() * 500 + 50,
        detected: false,
      })
    }
    setTransits(newTransits)
  }

  const detectedCount = transits.filter((t) => t.detected).length

  return (
    <Card className="p-6 bg-card/50 backdrop-blur border-border/50">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Badge variant="outline" className="text-sm">
              <Target className="h-3 w-3 mr-1" />
              Score: {score}
            </Badge>
            <Badge variant="outline" className="text-sm">
              Found: {detectedCount} / {transits.length}
            </Badge>
          </div>
          <Badge variant={timeLeft <= 10 ? "destructive" : "secondary"} className="text-sm">
            Time: {timeLeft}s
          </Badge>
        </div>

        <canvas
          ref={canvasRef}
          width={600}
          height={300}
          className="w-full rounded-lg border border-border bg-[rgba(10,10,30,1)] cursor-crosshair"
          onClick={handleCanvasClick}
        />

        <div className="flex items-center gap-4">
          {!isPlaying && !gameOver && (
            <Button onClick={handleStart} size="lg" className="gap-2">
              <Play className="h-4 w-4" />
              Start Game
            </Button>
          )}
          {isPlaying && (
            <Button onClick={() => setIsPlaying(false)} variant="secondary" size="lg" className="gap-2">
              <Pause className="h-4 w-4" />
              Pause
            </Button>
          )}
          {gameOver && (
            <Button onClick={handleStart} size="lg" className="gap-2">
              <RotateCcw className="h-4 w-4" />
              Play Again
            </Button>
          )}
        </div>

        {gameOver && (
          <div className="p-6 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 border-primary/50">
            <div className="text-center space-y-3">
              <h3 className="text-xl font-bold">Game Over!</h3>
              <div className="text-3xl font-bold text-primary">{score} points</div>
              <p className="text-muted-foreground">
                You found {detectedCount} out of {transits.length} transits
              </p>
            </div>
          </div>
        )}

        <div className="p-4 rounded-lg bg-muted/30 border border-border">
          <p className="text-sm text-muted-foreground leading-relaxed">
            Click on the dips in the light curve to detect transiting planets. Each correct detection earns 10 points,
            but incorrect clicks cost 2 points. Find all the transits before time runs out!
          </p>
        </div>
      </div>
    </Card>
  )
}
