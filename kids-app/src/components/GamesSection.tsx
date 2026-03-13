import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import MatchGame from './games/MatchGame'
import FindGame from './games/FindGame'
import QuizGame from './games/QuizGame'
import ColorMemoryGame from './games/ColorMemoryGame'
import MathQuizGame from './games/MathQuizGame'

type GameType = 'match' | 'find' | 'quiz' | 'color' | 'math' | null

interface GamesSectionProps {
  score: number
  onScoreChange: (score: number) => void
  onGameComplete?: () => void
}

const GamesSection = ({ score, onScoreChange, onGameComplete }: GamesSectionProps) => {
  const { t } = useTranslation()
  const [gameType, setGameType] = useState<GameType>(null)

  if (!gameType) {
    return (
      <div className="content-section">
        <h2 className="section-title">🎮 {t('games.title')} 🎮</h2>
        <div className="game-score">{t('games.score')}: {score}</div>
        <div className="menu-buttons">
          <button className="game-btn" onClick={() => setGameType('match')}>
            🎴 {t('games.matching')}
          </button>
          <button className="game-btn" onClick={() => setGameType('find')}>
            🔍 {t('games.findLetter')}
          </button>
          <button className="game-btn" onClick={() => setGameType('quiz')}>
            ❓ {t('games.quiz')}
          </button>
          <button className="game-btn" onClick={() => setGameType('color')}>
            🎨 Color Memory
          </button>
          <button className="game-btn" onClick={() => setGameType('math')}>
            🧮 Math Quiz
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="content-section">
      {gameType === 'match' && (
        <MatchGame 
          onComplete={onGameComplete}
          onBack={() => setGameType(null)} 
        />
      )}
      {gameType === 'find' && (
        <FindGame 
          score={score}
          onScoreChange={onScoreChange}
          onComplete={onGameComplete}
          onBack={() => setGameType(null)}
        />
      )}
      {gameType === 'quiz' && (
        <QuizGame 
          score={score}
          onScoreChange={onScoreChange}
          onComplete={onGameComplete}
          onBack={() => setGameType(null)}
        />
      )}
      {gameType === 'color' && (
        <ColorMemoryGame 
          score={score}
          onScoreChange={onScoreChange}
          onComplete={onGameComplete}
        />
      )}
      {gameType === 'math' && (
        <MathQuizGame 
          score={score}
          onScoreChange={onScoreChange}
          onComplete={onGameComplete}
        />
      )}
    </div>
  )
}

export default GamesSection
