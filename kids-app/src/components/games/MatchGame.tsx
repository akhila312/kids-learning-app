import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { playSound, speak } from '../../utils/audio'

interface MatchGameProps {
  onComplete?: () => void
  onBack?: () => void
}

interface Card {
  id: number
  letter: string
  flipped: boolean
  matched: boolean
}

const MatchGame = ({ onComplete }: MatchGameProps) => {
  const { t } = useTranslation()
  const [matchCards, setMatchCards] = useState<Card[]>([])
  const [firstCard, setFirstCard] = useState<number | null>(null)

  const initMatchGame = () => {
    const letters = ['A', 'B', 'C', 'D', 'E', 'F']
    const cards = [...letters, ...letters]
      .sort(() => Math.random() - 0.5)
      .map((letter, index) => ({ id: index, letter, flipped: false, matched: false }))
    setMatchCards(cards)
    setFirstCard(null)
  }

  const handleCardClick = (id: number) => {
    if (matchCards[id].matched || matchCards[id].flipped) return
    
    const newCards = [...matchCards]
    newCards[id].flipped = true
    setMatchCards(newCards)
    playSound('click')
    
    if (firstCard === null) {
      setFirstCard(id)
    } else {
      if (newCards[firstCard].letter === newCards[id].letter) {
        newCards[firstCard].matched = true
        newCards[id].matched = true
        setMatchCards(newCards)
        playSound('correct')
        setFirstCard(null)
        
        if (newCards.every(card => card.matched)) {
          setTimeout(() => {
            speak('Amazing! You matched them all!')
            onComplete?.()
          }, 500)
        }
      } else {
        playSound('wrong')
        setTimeout(() => {
          newCards[firstCard].flipped = false
          newCards[id].flipped = false
          setMatchCards(newCards)
          setFirstCard(null)
        }, 1000)
      }
    }
  }

  useEffect(() => {
    initMatchGame()
  }, [])

  return (
    <>
      <h2 className="section-title">🎴 {t('games.matching')}!</h2>
      <div className="match-grid">
        {matchCards.map((card) => (
          <button
            key={card.id}
            className={`match-card ${card.flipped || card.matched ? 'flipped' : ''} ${card.matched ? 'matched' : ''}`}
            onClick={() => handleCardClick(card.id)}
            disabled={card.matched}
          >
            {card.flipped || card.matched ? card.letter : '?'}
          </button>
        ))}
      </div>
      <button className="reset-btn" onClick={initMatchGame}>🔄 {t('games.playAgain')}</button>
    </>
  )
}

export default MatchGame
