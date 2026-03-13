import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { playSound, speak } from '../utils/audio'
import { letterExamples } from '../utils/letterExamples'

interface AlphabetsSectionProps {
  onCompleteLetter?: (letter: string) => void
}

const AlphabetsSection = ({ onCompleteLetter }: AlphabetsSectionProps) => {
  const { t } = useTranslation()
  const [selectedLetter, setSelectedLetter] = useState<string | null>(null)
  const alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')

  const handleLetterClick = (letter: string) => {
    setSelectedLetter(letter)
    playSound('click')
    speak(`${letter} for ${letterExamples[letter].word}`)
    onCompleteLetter?.(letter)
  }

  return (
    <div className="content-section">
      <h2 className="section-title">🔤 {t('alphabets.title')} 🔤</h2>
      <div className="alphabet-grid">
        {alphabets.map((letter) => (
          <button
            key={letter}
            className={`letter-btn ${selectedLetter === letter ? 'selected' : ''}`}
            onClick={() => handleLetterClick(letter)}
          >
            {letter}
          </button>
        ))}
      </div>
      {selectedLetter && (
        <div className="display-card bounce-in">
          <h2 className="big-letter pulse">{selectedLetter}</h2>
          <div className="emoji-display">{letterExamples[selectedLetter].emoji}</div>
          <h3 className="word-display">{letterExamples[selectedLetter].word}</h3>
          <button 
            className="speak-btn pulse" 
            onClick={() => speak(`${selectedLetter} for ${letterExamples[selectedLetter].word}`)}
          >
            🔊 Say it again!
          </button>
        </div>
      )}
    </div>
  )
}

export default AlphabetsSection
