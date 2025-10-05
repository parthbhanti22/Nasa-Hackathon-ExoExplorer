"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { RotateCcw } from "lucide-react"

const cards = [
  { id: 1, type: "Hot Jupiter", description: "Gas giant close to star" },
  { id: 2, type: "Super-Earth", description: "Rocky, 2-10 Earth masses" },
  { id: 3, type: "Neptune-like", description: "Ice giant with thick atmosphere" },
  { id: 4, type: "Gas Giant", description: "Massive H2/He planet" },
  { id: 5, type: "Transit Method", description: "Detects brightness dips" },
  { id: 6, type: "Radial Velocity", description: "Measures star wobble" },
]

interface GameCard {
  id: number
  pairId: number
  content: string
  isFlipped: boolean
  isMatched: boolean
}

export function ExoplanetMemory() {
  const [gameCards, setGameCards] = useState<GameCard[]>([])
  const [flippedCards, setFlippedCards] = useState<number[]>([])
  const [moves, setMoves] = useState(0)
  const [matches, setMatches] = useState(0)
  const [gameComplete, setGameComplete] = useState(false)

  const initializeGame = () => {
    const shuffledCards: GameCard[] = []

    cards.forEach((card, index) => {
      shuffledCards.push({
        id: index * 2,
        pairId: card.id,
        content: card.type,
        isFlipped: false,
        isMatched: false,
      })
      shuffledCards.push({
        id: index * 2 + 1,
        pairId: card.id,
        content: card.description,
        isFlipped: false,
        isMatched: false,
      })
    })

    // Shuffle
    for (let i = shuffledCards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[shuffledCards[i], shuffledCards[j]] = [shuffledCards[j], shuffledCards[i]]
    }

    setGameCards(shuffledCards)
    setFlippedCards([])
    setMoves(0)
    setMatches(0)
    setGameComplete(false)
  }

  useEffect(() => {
    initializeGame()
  }, [])

  useEffect(() => {
    if (flippedCards.length === 2) {
      const [first, second] = flippedCards
      const firstCard = gameCards.find((c) => c.id === first)
      const secondCard = gameCards.find((c) => c.id === second)

      if (firstCard && secondCard && firstCard.pairId === secondCard.pairId) {
        // Match found
        setTimeout(() => {
          setGameCards((prev) =>
            prev.map((card) => (card.id === first || card.id === second ? { ...card, isMatched: true } : card)),
          )
          setMatches((m) => m + 1)
          setFlippedCards([])

          if (matches + 1 === cards.length) {
            setGameComplete(true)
          }
        }, 500)
      } else {
        // No match
        setTimeout(() => {
          setGameCards((prev) =>
            prev.map((card) => (card.id === first || card.id === second ? { ...card, isFlipped: false } : card)),
          )
          setFlippedCards([])
        }, 1000)
      }
    }
  }, [flippedCards, gameCards, matches])

  const handleCardClick = (id: number) => {
    if (flippedCards.length === 2) return

    const card = gameCards.find((c) => c.id === id)
    if (!card || card.isFlipped || card.isMatched) return

    setGameCards((prev) => prev.map((c) => (c.id === id ? { ...c, isFlipped: true } : c)))
    setFlippedCards((prev) => [...prev, id])

    if (flippedCards.length === 1) {
      setMoves((m) => m + 1)
    }
  }

  if (gameComplete) {
    return (
      <Card className="p-8 bg-card/50 backdrop-blur border-border/50">
        <div className="text-center space-y-6">
          <div className="flex justify-center">
            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-primary/20 border-4 border-primary">
              <div className="text-3xl font-bold text-primary">{moves}</div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-2">Congratulations!</h3>
            <p className="text-muted-foreground">You completed the game in {moves} moves</p>
          </div>

          <Button onClick={initializeGame} size="lg" className="gap-2">
            <RotateCcw className="h-4 w-4" />
            Play Again
          </Button>
        </div>
      </Card>
    )
  }

  return (
    <Card className="p-6 bg-card/50 backdrop-blur border-border/50">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Badge variant="outline" className="text-sm">
              Moves: {moves}
            </Badge>
            <Badge variant="outline" className="text-sm">
              Matches: {matches} / {cards.length}
            </Badge>
          </div>
          <Button onClick={initializeGame} variant="outline" size="sm" className="gap-2 bg-transparent">
            <RotateCcw className="h-4 w-4" />
            Reset
          </Button>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
          {gameCards.map((card) => (
            <button
              key={card.id}
              onClick={() => handleCardClick(card.id)}
              disabled={card.isFlipped || card.isMatched}
              className={`aspect-square rounded-lg border-2 transition-all duration-300 ${
                card.isMatched
                  ? "bg-green-500/20 border-green-500/50"
                  : card.isFlipped
                    ? "bg-primary/20 border-primary/50"
                    : "bg-muted/30 border-border hover:border-primary/30"
              }`}
            >
              <div className="h-full flex items-center justify-center p-2">
                {card.isFlipped || card.isMatched ? (
                  <span className="text-xs text-center font-semibold leading-tight">{card.content}</span>
                ) : (
                  <div className="text-2xl">?</div>
                )}
              </div>
            </button>
          ))}
        </div>

        <div className="p-4 rounded-lg bg-muted/30 border border-border">
          <p className="text-sm text-muted-foreground leading-relaxed">
            Click on cards to flip them and find matching pairs. Match exoplanet types with their descriptions. Try to
            complete the game in as few moves as possible!
          </p>
        </div>
      </div>
    </Card>
  )
}
