import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { playSound, speak } from '../../utils/audio'

interface FindGameProps {
  score: number
  onScoreChange: (score: number) => void
  onComplete?: () => void
  onBack?: () => void
}

const FindGame = ({ score, onScoreChange, onComplete }: FindGameProps) => {
  const { t } = useTranslation()
  const [findTarget, setFindTarget] = useState('')
  const alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')

  const initFindGame = () => {
    const target = alphabets[Math.floor(Math.random() * alphabets.length)]
    setFindTarget(target)
    speak(`Find the letter ${target}`)
  }

  const handleFindClick = (letter: string) => {
    if (letter === findTarget) {
      playSound('correct')
      speak('Correct! Great job!')
      onScoreChange(score + 10)
      onComplete?.()
      setTimeout(initFindGame, 1500)
    } else {
      playSound('wrong')
      speak('Try again!')
    }
  }

  useEffect(() => {
    initFindGame()
  }, [])

  return (
    <>
      <h2 className="section-title">🔍 {t('games.findInstruction')}: {findTarget}</h2>
      <div className="alphabet-grid">
        {alphabets.map((letter) => (
          <button
            key={letter}
            className="letter-btn find-btn"
            onClick={() => handleFindClick(letter)}
          >
            {letter}
          </button>
        ))}
      </div>
    </>
  )
}

export default FindGame
