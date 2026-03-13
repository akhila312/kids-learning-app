import { useState, useEffect } from 'react'
import { playSound, speak } from '../../utils/audio'
import { letterExamples } from '../../utils/letterExamples'

interface QuizGameProps {
  score: number
  onScoreChange: (score: number) => void
  onComplete?: () => void
  onBack?: () => void
}

interface QuizQuestion {
  letter: string
  options: string[]
}

const QuizGame = ({ score, onScoreChange, onComplete }: QuizGameProps) => {
  const [quizQuestion, setQuizQuestion] = useState<QuizQuestion | null>(null)
  const alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')

  const initQuizGame = () => {
    const correctLetter = alphabets[Math.floor(Math.random() * alphabets.length)]
    const wrongLetters = alphabets.filter(l => l !== correctLetter)
    const options = [
      correctLetter,
      wrongLetters[Math.floor(Math.random() * wrongLetters.length)],
      wrongLetters[Math.floor(Math.random() * wrongLetters.length)],
      wrongLetters[Math.floor(Math.random() * wrongLetters.length)]
    ].sort(() => Math.random() - 0.5)
    
    setQuizQuestion({ letter: correctLetter, options })
    speak(`Which one is ${letterExamples[correctLetter].word}?`)
  }

  const handleQuizAnswer = (answer: string) => {
    if (answer === quizQuestion?.letter) {
      playSound('correct')
      speak('Perfect!')
      onScoreChange(score + 15)
      onComplete?.()
      setTimeout(initQuizGame, 1500)
    } else {
      playSound('wrong')
      speak('Oops! Try again!')
    }
  }

  useEffect(() => {
    initQuizGame()
  }, [])

  if (!quizQuestion) return null

  return (
    <>
      <h2 className="section-title">❓ Which one is {letterExamples[quizQuestion.letter].word}?</h2>
      <div className="quiz-options">
        {quizQuestion.options.map((option) => (
          <button
            key={option}
            className="quiz-option"
            onClick={() => handleQuizAnswer(option)}
          >
            <span className="quiz-emoji">{letterExamples[option].emoji}</span>
            <span className="quiz-word">{letterExamples[option].word}</span>
          </button>
        ))}
      </div>
    </>
  )
}

export default QuizGame
