"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, XCircle, RotateCcw } from "lucide-react"

const questions = [
  {
    question: "What is the most successful method for detecting exoplanets?",
    options: ["Direct Imaging", "Transit Method", "Radial Velocity", "Gravitational Lensing"],
    correct: 1,
    explanation:
      "The Transit Method has discovered the most exoplanets, especially through missions like Kepler and K2.",
  },
  {
    question: "What does a 'Hot Jupiter' refer to?",
    options: [
      "A gas giant in the habitable zone",
      "A gas giant very close to its star",
      "A rocky planet with high temperature",
      "Jupiter during summer",
    ],
    correct: 1,
    explanation:
      "Hot Jupiters are gas giants that orbit very close to their host stars, resulting in extremely high temperatures.",
  },
  {
    question: "What is the habitable zone?",
    options: [
      "The region where humans can live",
      "The area around a star where liquid water could exist",
      "The zone where planets form",
      "The edge of a solar system",
    ],
    correct: 1,
    explanation:
      "The habitable zone is the region around a star where conditions might allow liquid water to exist on a planet's surface.",
  },
  {
    question: "What was the K2 mission's primary detection method?",
    options: ["Radial Velocity", "Direct Imaging", "Transit Photometry", "Astrometry"],
    correct: 2,
    explanation:
      "K2 used transit photometry, measuring the dimming of starlight when planets pass in front of their host stars.",
  },
  {
    question: "How many confirmed exoplanets did the K2 mission discover?",
    options: ["100+", "300+", "500+", "1000+"],
    correct: 2,
    explanation:
      "The K2 mission discovered over 500 confirmed exoplanets during its operational period from 2014-2018.",
  },
]

export function ExoplanetQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showResult, setShowResult] = useState(false)
  const [score, setScore] = useState(0)
  const [quizComplete, setQuizComplete] = useState(false)

  const handleAnswer = (index: number) => {
    if (showResult) return

    setSelectedAnswer(index)
    setShowResult(true)

    if (index === questions[currentQuestion].correct) {
      setScore(score + 1)
    }
  }

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer(null)
      setShowResult(false)
    } else {
      setQuizComplete(true)
    }
  }

  const handleReset = () => {
    setCurrentQuestion(0)
    setSelectedAnswer(null)
    setShowResult(false)
    setScore(0)
    setQuizComplete(false)
  }

  if (quizComplete) {
    const percentage = (score / questions.length) * 100

    return (
      <Card className="p-8 bg-card/50 backdrop-blur border-border/50">
        <div className="text-center space-y-6">
          <div className="flex justify-center">
            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-primary/20 border-4 border-primary">
              <div className="text-3xl font-bold text-primary">
                {score}/{questions.length}
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-2">Quiz Complete!</h3>
            <p className="text-muted-foreground">
              You scored {percentage.toFixed(0)}% -{" "}
              {percentage >= 80 ? "Excellent work!" : percentage >= 60 ? "Good job!" : "Keep learning!"}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
            <Card className="p-4 bg-muted/30 border-border">
              <div className="text-sm text-muted-foreground mb-1">Correct</div>
              <div className="text-2xl font-bold text-green-400">{score}</div>
            </Card>
            <Card className="p-4 bg-muted/30 border-border">
              <div className="text-sm text-muted-foreground mb-1">Incorrect</div>
              <div className="text-2xl font-bold text-red-400">{questions.length - score}</div>
            </Card>
            <Card className="p-4 bg-muted/30 border-border">
              <div className="text-sm text-muted-foreground mb-1">Percentage</div>
              <div className="text-2xl font-bold text-primary">{percentage.toFixed(0)}%</div>
            </Card>
          </div>

          <Button onClick={handleReset} size="lg" className="gap-2">
            <RotateCcw className="h-4 w-4" />
            Try Again
          </Button>
        </div>
      </Card>
    )
  }

  const question = questions[currentQuestion]

  return (
    <Card className="p-8 bg-card/50 backdrop-blur border-border/50">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <Badge variant="outline" className="text-sm">
            Question {currentQuestion + 1} of {questions.length}
          </Badge>
          <div className="text-sm text-muted-foreground">
            Score: <span className="font-bold text-primary">{score}</span>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-6 text-balance">{question.question}</h3>

          <div className="grid grid-cols-1 gap-3">
            {question.options.map((option, index) => {
              const isSelected = selectedAnswer === index
              const isCorrect = index === question.correct
              const showCorrect = showResult && isCorrect
              const showIncorrect = showResult && isSelected && !isCorrect

              return (
                <Button
                  key={index}
                  onClick={() => handleAnswer(index)}
                  variant="outline"
                  disabled={showResult}
                  className={`h-auto py-4 px-6 justify-start text-left bg-transparent ${
                    showCorrect
                      ? "border-green-500 bg-green-500/10"
                      : showIncorrect
                        ? "border-red-500 bg-red-500/10"
                        : ""
                  }`}
                >
                  <div className="flex items-center gap-3 w-full">
                    <div
                      className={`flex h-8 w-8 items-center justify-center rounded-full border-2 shrink-0 ${
                        showCorrect
                          ? "border-green-500 bg-green-500/20"
                          : showIncorrect
                            ? "border-red-500 bg-red-500/20"
                            : "border-border"
                      }`}
                    >
                      {showCorrect ? (
                        <CheckCircle2 className="h-5 w-5 text-green-500" />
                      ) : showIncorrect ? (
                        <XCircle className="h-5 w-5 text-red-500" />
                      ) : (
                        <span className="text-sm font-semibold">{String.fromCharCode(65 + index)}</span>
                      )}
                    </div>
                    <span className="flex-1">{option}</span>
                  </div>
                </Button>
              )
            })}
          </div>
        </div>

        {showResult && (
          <div className="p-4 rounded-lg bg-muted/30 border border-border">
            <div className="flex items-start gap-3">
              {selectedAnswer === question.correct ? (
                <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
              ) : (
                <XCircle className="h-5 w-5 text-red-500 mt-0.5 shrink-0" />
              )}
              <div>
                <div className="font-semibold mb-1">
                  {selectedAnswer === question.correct ? "Correct!" : "Incorrect"}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{question.explanation}</p>
              </div>
            </div>
          </div>
        )}

        {showResult && (
          <Button onClick={handleNext} size="lg" className="w-full">
            {currentQuestion < questions.length - 1 ? "Next Question" : "See Results"}
          </Button>
        )}
      </div>
    </Card>
  )
}
