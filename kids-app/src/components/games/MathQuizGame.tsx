import { useState, useEffect } from 'react'
import { playSound, speak } from '../../utils/audio'

interface MathQuizGameProps {
  score: number
  onScoreChange: (score: number) => void
  onComplete?: () => void
}

const MathQuizGame = ({ score, onScoreChange, onComplete }: MathQuizGameProps) => {
  const [question, setQuestion] = useState<{ num1: number; num2: number; answer: number } | null>(null)
  const [options, setOptions] = useState<number[]>([])
  const [level, setLevel] = useState(1)

  const generateQuestion = () => {
    const num1 = Math.floor(Math.random() * (5 * level)) + 1
    const num2 = Math.floor(Math.random() * (5 * level)) + 1
    const answer = num1 + num2

    const wrongAnswers = [
      answer + 1,
      answer - 1,
      answer + 2
    ].filter(n => n > 0)

    const allOptions = [answer, ...wrongAnswers.slice(0, 3)]
      .sort(() => Math.random() - 0.5)

    setQuestion({ num1, num2, answer })
    setOptions(allOptions)
    speak(`What is ${num1} plus ${num2}?`)
  }

  const handleAnswer = (selectedAnswer: number) => {
    if (selectedAnswer === question?.answer) {
      playSound('correct')
      speak('Correct! Great job!')
      onScoreChange(score + 15)
      onComplete?.()
      setLevel(level + 1)
      setTimeout(generateQuestion, 1500)
    } else {
      playSound('wrong')
      speak('Try again!')
    }
  }

  useEffect(() => {
    generateQuestion()
  }, [])

  if (!question) return null

  return (
    <div className="math-quiz-game">
      <h2 className="section-title">🧮 Math Quiz - Level {level}</h2>
      <div className="math-question">
        <div className="math-display">
          <span className="math-number">{question.num1}</span>
          <span className="math-operator">+</span>
          <span className="math-number">{question.num2}</span>
          <span className="math-equals">=</span>
          <span className="math-question-mark">?</span>
        </div>
        <div className="math-visual">
          {Array.from({ length: question.num1 }).map((_, i) => (
            <span key={`a${i}`} className="count-star">⭐</span>
          ))}
          <span className="plus-sign">➕</span>
          {Array.from({ length: question.num2 }).map((_, i) => (
            <span key={`b${i}`} className="count-star">⭐</span>
          ))}
        </div>
      </div>
      <div className="quiz-options">
        {options.map((option) => (
          <button
            key={option}
            className="quiz-option math-option"
            onClick={() => handleAnswer(option)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  )
}

export default MathQuizGame
