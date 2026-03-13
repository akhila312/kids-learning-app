import { badges } from '../utils/achievements'
import type { Badge } from '../utils/achievements'

interface BadgesDisplayProps {
  progress: {
    stars: number
    completedLetters: string[]
    completedNumbers: number[]
    gamesPlayed: number
    storiesRead: number[]
  }
  onClose: () => void
}

const BadgesDisplay = ({ progress, onClose }: BadgesDisplayProps) => {
  const checkBadgeEarned = (badge: Badge): boolean => {
    switch (badge.type) {
      case 'stars':
        return progress.stars >= badge.requirement
      case 'letters':
        return progress.completedLetters.length >= badge.requirement
      case 'numbers':
        return progress.completedNumbers.length >= badge.requirement
      case 'games':
        return progress.gamesPlayed >= badge.requirement
      case 'stories':
        return progress.storiesRead.length >= badge.requirement
      default:
        return false
    }
  }

  const getBadgeProgress = (badge: Badge, prog: typeof progress): number => {
    switch (badge.type) {
      case 'stars':
        return prog.stars
      case 'letters':
        return prog.completedLetters.length
      case 'numbers':
        return prog.completedNumbers.length
      case 'games':
        return prog.gamesPlayed
      case 'stories':
        return prog.storiesRead.length
      default:
        return 0
    }
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content badges-display" onClick={(e) => e.stopPropagation()}>
        <h2 className="modal-title">🏆 Your Badges 🏆</h2>
        <div className="badges-grid">
          {badges.map((badge) => {
            const isEarned = checkBadgeEarned(badge)
            return (
              <div
                key={badge.id}
                className={`badge-card ${isEarned ? 'earned' : 'locked'}`}
              >
                <div className="badge-icon">{badge.icon}</div>
                <div className="badge-name">{badge.name}</div>
                <div className="badge-description">{badge.description}</div>
                {!isEarned && (
                  <div className="badge-progress">
                    {getBadgeProgress(badge, progress)} / {badge.requirement}
                  </div>
                )}
              </div>
            )
          })}
        </div>
        <button className="modal-close-btn" onClick={onClose}>Close</button>
      </div>
    </div>
  )
}

export default BadgesDisplay
