import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import BackButton from './components/BackButton'
import Confetti from './components/Confetti'
import AlphabetsSection from './components/AlphabetsSection'
import NumbersSection from './components/NumbersSection'
import StoriesSection from './components/StoriesSection'
import GamesSection from './components/GamesSection'
import DrawingCanvas from './components/DrawingCanvas'
import AvatarSelector from './components/AvatarSelector'
import BadgesDisplay from './components/BadgesDisplay'
import AccessibilitySettings from './components/AccessibilitySettings'
import Onboarding from './components/Onboarding'
import ParentDashboard from './components/ParentDashboard'
import PrivacyPolicy from './components/PrivacyPolicy'
import FeedbackForm from './components/FeedbackForm'
import { useProgress } from './hooks/useProgress'
import { useTranslation } from 'react-i18next'

type Section = 'home' | 'alphabets' | 'numbers' | 'stories' | 'games' | 'draw'
type FontSize = 'normal' | 'large' | 'xlarge'

function App() {
  const { t } = useTranslation()
  const [section, setSection] = useState<Section>('home')
  const [showConfetti, setShowConfetti] = useState(false)
  const [score, setScore] = useState(0)
  const [avatar, setAvatar] = useState(() => localStorage.getItem('userAvatar') || 'bear')
  const [showAvatarSelector, setShowAvatarSelector] = useState(false)
  const [showBadges, setShowBadges] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const [showOnboarding, setShowOnboarding] = useState(() => !localStorage.getItem('onboardingComplete'))
  const [showParentDashboard, setShowParentDashboard] = useState(false)
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false)
  const [showFeedback, setShowFeedback] = useState(false)
  const [fontSize, setFontSize] = useState<FontSize>(() => (localStorage.getItem('fontSize') as FontSize) || 'normal')
  const [highContrast, setHighContrast] = useState(() => localStorage.getItem('highContrast') === 'true')
  const [timeLimitReached, setTimeLimitReached] = useState(false)
  
  const {
    progress,
    addStar,
    completeLetter,
    completeNumber,
    incrementGamesPlayed,
    readStory
  } = useProgress()

  useEffect(() => {
    localStorage.setItem('userAvatar', avatar)
  }, [avatar])

  useEffect(() => {
    localStorage.setItem('fontSize', fontSize)
    document.documentElement.setAttribute('data-font-size', fontSize)
  }, [fontSize])

  useEffect(() => {
    localStorage.setItem('highContrast', String(highContrast))
    document.documentElement.setAttribute('data-high-contrast', String(highContrast))
  }, [highContrast])

  // Daily time limit tracking
  useEffect(() => {
    const timeLimitEnabled = localStorage.getItem('timeLimitEnabled') === 'true'
    if (!timeLimitEnabled) return

    const dailyLimit = parseInt(localStorage.getItem('dailyTimeLimit') || '60')
    const today = new Date().toDateString()
    const lastDate = localStorage.getItem('lastSessionDate')

    // Reset session time if it's a new day
    if (lastDate !== today) {
      localStorage.setItem('lastSessionDate', today)
      localStorage.setItem('sessionTime', '0')
    }

    const timer = setInterval(() => {
      const currentTime = parseInt(localStorage.getItem('sessionTime') || '0')
      const newTime = currentTime + 1
      localStorage.setItem('sessionTime', String(newTime))
      
      // Check if time limit reached (convert minutes to seconds)
      if (newTime >= dailyLimit * 60) {
        setTimeLimitReached(true)
        clearInterval(timer)
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const celebrateSuccess = () => {
    setShowConfetti(true)
    addStar()
    setTimeout(() => setShowConfetti(false), 3000)
  }

  const handleBackHome = () => {
    setSection('home')
  }

  const handleGameComplete = () => {
    celebrateSuccess()
    incrementGamesPlayed()
  }

  const handleOnboardingComplete = () => {
    setShowOnboarding(false)
    localStorage.setItem('onboardingComplete', 'true')
  }

  // Show time limit modal
  if (timeLimitReached) {
    return (
      <div className="app">
        <div className="modal-overlay">
          <div className="modal-content time-limit-modal">
            <h2>⏱️ Time's Up!</h2>
            <p>You've reached your daily time limit.</p>
            <p>Great job learning today! Come back tomorrow! 🌟</p>
            <button onClick={() => setShowParentDashboard(true)}>
              Parent Settings
            </button>
          </div>
        </div>
        {showParentDashboard && (
          <ParentDashboard onClose={() => {
            setShowParentDashboard(false)
            setTimeLimitReached(false)
          }} />
        )}
      </div>
    )
  }

  return (
    <div className="app">
      <Confetti show={showConfetti} />
      
      {showOnboarding && <Onboarding onComplete={handleOnboardingComplete} />}
      
      {showAvatarSelector && (
        <AvatarSelector
          currentAvatar={avatar}
          onSelectAvatar={setAvatar}
          onClose={() => setShowAvatarSelector(false)}
        />
      )}

      {showBadges && (
        <BadgesDisplay
          progress={progress}
          onClose={() => setShowBadges(false)}
        />
      )}

      {showSettings && (
        <AccessibilitySettings
          fontSize={fontSize}
          highContrast={highContrast}
          onFontSizeChange={setFontSize}
          onHighContrastChange={setHighContrast}
          onClose={() => setShowSettings(false)}
        />
      )}

      {showParentDashboard && (
        <ParentDashboard onClose={() => setShowParentDashboard(false)} />
      )}

      {showPrivacyPolicy && (
        <PrivacyPolicy onClose={() => setShowPrivacyPolicy(false)} />
      )}

      {showFeedback && (
        <FeedbackForm onClose={() => setShowFeedback(false)} />
      )}
      
      <Header 
        stars={progress.stars}
        avatar={avatar}
        onAvatarClick={() => setShowAvatarSelector(true)}
        onBadgesClick={() => setShowBadges(true)}
        onSettingsClick={() => setShowSettings(true)}
      />

      {/* Parent Menu Button - Hidden for Kids */}
      <button 
        className="parent-menu-btn"
        onClick={() => setShowParentDashboard(true)}
        title="Parent Dashboard"
      >
        👨‍👩‍👧
      </button>

      {section === 'home' && (
        <Home onSelectSection={setSection} />
      )}

      {section === 'home' && (
        <div className="home-footer">
          <button className="footer-link" onClick={() => setShowPrivacyPolicy(true)}>
            🔒 Privacy Policy
          </button>
          <button className="footer-link" onClick={() => setShowFeedback(true)}>
            💬 Feedback
          </button>
        </div>
      )}

      {section !== 'home' && (
        <BackButton onBack={handleBackHome} />
      )}

      {section === 'alphabets' && (
        <AlphabetsSection onCompleteLetter={completeLetter} />
      )}

      {section === 'numbers' && (
        <NumbersSection onCompleteNumber={completeNumber} />
      )}

      {section === 'stories' && (
        <StoriesSection onReadStory={readStory} />
      )}

      {section === 'games' && (
        <GamesSection 
          score={score}
          onScoreChange={setScore}
          onGameComplete={handleGameComplete}
        />
      )}

      {section === 'draw' && (
        <div className="content-section">
          <h2 className="section-title">🎨 {t('draw.title')}</h2>
          <DrawingCanvas />
        </div>
      )}
    </div>
  )
}

export default App
