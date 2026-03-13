import { useState } from 'react'
import { useProgress } from '../hooks/useProgress'

interface ParentDashboardProps {
  onClose: () => void
}

const ParentDashboard = ({ onClose }: ParentDashboardProps) => {
  const { progress, resetProgress } = useProgress()
  const [showResetConfirm, setShowResetConfirm] = useState(false)
  const [timeLimit, setTimeLimit] = useState(() => localStorage.getItem('dailyTimeLimit') || '60')
  const [timeLimitEnabled, setTimeLimitEnabled] = useState(() => localStorage.getItem('timeLimitEnabled') === 'true')

  const handleSaveTimeLimit = () => {
    localStorage.setItem('dailyTimeLimit', timeLimit)
    localStorage.setItem('timeLimitEnabled', timeLimitEnabled.toString())
    alert('Settings saved!')
  }

  const handleResetProgress = () => {
    if (showResetConfirm) {
      resetProgress()
      alert('Progress has been reset!')
      setShowResetConfirm(false)
    } else {
      setShowResetConfirm(true)
    }
  }

  const totalProgress = Math.round(
    ((progress.completedLetters.length / 26) * 25 +
    (progress.completedNumbers.length / 10) * 25 +
    (progress.storiesRead.length / 8) * 25 +
    (Math.min(progress.gamesPlayed, 20) / 20) * 25)
  )

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content parent-dashboard" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>✕</button>
        
        <h2 className="dashboard-title">👨‍👩‍👧 Parent Dashboard</h2>
        
        <div className="dashboard-section">
          <h3>📊 Learning Progress</h3>
          <div className="progress-stats">
            <div className="stat-card">
              <span className="stat-icon">⭐</span>
              <span className="stat-value">{progress.stars}</span>
              <span className="stat-label">Stars Earned</span>
            </div>
            <div className="stat-card">
              <span className="stat-icon">🔤</span>
              <span className="stat-value">{progress.completedLetters.length}/26</span>
              <span className="stat-label">Letters Learned</span>
            </div>
            <div className="stat-card">
              <span className="stat-icon">🔢</span>
              <span className="stat-value">{progress.completedNumbers.length}/10</span>
              <span className="stat-label">Numbers Learned</span>
            </div>
            <div className="stat-card">
              <span className="stat-icon">📚</span>
              <span className="stat-value">{progress.storiesRead.length}/8</span>
              <span className="stat-label">Stories Read</span>
            </div>
            <div className="stat-card">
              <span className="stat-icon">🎮</span>
              <span className="stat-value">{progress.gamesPlayed}</span>
              <span className="stat-label">Games Played</span>
            </div>
          </div>
          
          <div className="overall-progress">
            <h4>Overall Progress: {totalProgress}%</h4>
            <div className="progress-bar">
              <div 
                className="progress-fill" 
                style={{ width: `${totalProgress}%` }}
              />
            </div>
          </div>
        </div>

        <div className="dashboard-section">
          <h3>⏱️ Time Management</h3>
          <div className="time-limit-controls">
            <label className="checkbox-label">
              <input 
                type="checkbox"
                checked={timeLimitEnabled}
                onChange={(e) => setTimeLimitEnabled(e.target.checked)}
              />
              Enable daily time limit
            </label>
            
            {timeLimitEnabled && (
              <div className="time-limit-input">
                <label>
                  Daily time limit:
                  <select 
                    value={timeLimit} 
                    onChange={(e) => setTimeLimit(e.target.value)}
                  >
                    <option value="15">15 minutes</option>
                    <option value="30">30 minutes</option>
                    <option value="45">45 minutes</option>
                    <option value="60">1 hour</option>
                    <option value="90">1.5 hours</option>
                    <option value="120">2 hours</option>
                  </select>
                </label>
              </div>
            )}
            
            <button className="save-btn" onClick={handleSaveTimeLimit}>
              💾 Save Settings
            </button>
          </div>
        </div>

        <div className="dashboard-section">
          <h3>🔄 Reset Progress</h3>
          <p>This will delete all learning progress and start fresh.</p>
          {showResetConfirm && (
            <p className="warning-text">⚠️ Are you sure? This cannot be undone!</p>
          )}
          <div className="reset-controls">
            <button className="reset-btn-danger" onClick={handleResetProgress}>
              {showResetConfirm ? '⚠️ Confirm Reset' : '🗑️ Reset All Progress'}
            </button>
            {showResetConfirm && (
              <button className="cancel-btn" onClick={() => setShowResetConfirm(false)}>
                Cancel
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ParentDashboard
