import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { playSound, speak } from '../utils/audio'

interface NumbersSectionProps {
  onCompleteNumber?: (num: number) => void
}

const NumbersSection = ({ onCompleteNumber }: NumbersSectionProps) => {
  const { t } = useTranslation()
  const [selectedNumber, setSelectedNumber] = useState<number | null>(null)
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

  const handleNumberClick = (num: number) => {
    setSelectedNumber(num)
    playSound('click')
    speak(`Number ${num}`)
    onCompleteNumber?.(num)
  }

  return (
    <div className="content-section">
      <h2 className="section-title">🔢 {t('numbers.title')} 🔢</h2>
      <div className="number-grid">
        {numbers.map((num) => (
          <button
            key={num}
            className={`number-btn ${selectedNumber === num ? 'selected' : ''}`}
            onClick={() => handleNumberClick(num)}
          >
            {num}
          </button>
        ))}
      </div>
      {selectedNumber !== null && (
        <div className="display-card bounce-in">
          <h3 className="display-text">Count with me!</h3>
          <div className="count-display">
            {Array.from({ length: selectedNumber }).map((_, i) => (
              <span key={i} className="count-star pop-in" style={{ animationDelay: `${i * 0.1}s` }}>⭐</span>
            ))}
            {selectedNumber === 0 && <span className="zero-text">Zero stars!</span>}
          </div>
          <h2 className="big-number pulse">{selectedNumber}</h2>
        </div>
      )}
    </div>
  )
}

export default NumbersSection
