import { useState, useEffect } from 'react'
import { playSound, speak } from '../../utils/audio'

interface ColorMemoryGameProps {
  score: number
  onScoreChange: (score: number) => void
  onComplete?: () => void
}

const ColorMemoryGame = ({ score, onScoreChange, onComplete }: ColorMemoryGameProps) => {
  const [sequence, setSequence] = useState<string[]>([])
  const [playerSequence, setPlayerSequence] = useState<string[]>([])
  const [isPlaying, setIsPlaying] = useState(false)
  const [activeColor, setActiveColor] = useState<string | null>(null)
  const [level, setLevel] = useState(1)

  const colors = ['red', 'blue', 'green', 'yellow']
  const colorEmojis = { red: '🔴', blue: '🔵', green: '🟢', yellow: '🟡' }

  const startGame = () => {
    const newColor = colors[Math.floor(Math.random() * colors.length)]
    const newSequence = [...sequence, newColor]
    setSequence(newSequence)
    setPlayerSequence([])
    playSequence(newSequence)
  }

  const playSequence = async (seq: string[]) => {
    setIsPlaying(true)
    for (let i = 0; i < seq.length; i++) {
      await new Promise(resolve => setTimeout(resolve, 500))
      setActiveColor(seq[i])
      playSound('click')
      await new Promise(resolve => setTimeout(resolve, 500))
      setActiveColor(null)
    }
    setIsPlaying(false)
  }

  const handleColorClick = (color: string) => {
    if (isPlaying) return

    const newPlayerSequence = [...playerSequence, color]
    setPlayerSequence(newPlayerSequence)
    setActiveColor(color)
    playSound('click')
    setTimeout(() => setActiveColor(null), 300)

    if (newPlayerSequence[newPlayerSequence.length - 1] !== sequence[newPlayerSequence.length - 1]) {
      playSound('wrong')
      speak('Oops! Try again!')
      setTimeout(() => {
        setSequence([])
        setPlayerSequence([])
        setLevel(1)
      }, 1000)
    } else if (newPlayerSequence.length === sequence.length) {
      playSound('correct')
      speak('Perfect! Next level!')
      onScoreChange(score + 20)
      onComplete?.()
      setLevel(level + 1)
      setTimeout(startGame, 1500)
    }
  }

  useEffect(() => {
    startGame()
  }, [])

  return (
    <div className="color-memory-game">
      <h2 className="section-title">🎨 Color Memory - Level {level}</h2>
      <p className="game-instruction">Watch the pattern and repeat it!</p>
      <div className="color-grid">
        {colors.map((color) => (
          <button
            key={color}
            className={`color-btn-large ${activeColor === color ? 'active' : ''}`}
            style={{ 
              backgroundColor: color,
              opacity: activeColor === color ? 1 : 0.6,
              transform: activeColor === color ? 'scale(1.1)' : 'scale(1)'
            }}
            onClick={() => handleColorClick(color)}
            disabled={isPlaying}
          >
            {colorEmojis[color as keyof typeof colorEmojis]}
          </button>
        ))}
      </div>
      <button className="reset-btn" onClick={() => {
        setSequence([])
        setPlayerSequence([])
        setLevel(1)
        startGame()
      }}>
        🔄 Restart
      </button>
    </div>
  )
}

export default ColorMemoryGame
