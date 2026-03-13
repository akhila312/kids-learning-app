import { useState } from 'react'
import { playSound } from '../utils/audio'

interface OnboardingProps {
  onComplete: () => void
}

const Onboarding = ({ onComplete }: OnboardingProps) => {
  const [step, setStep] = useState(0)

  const steps = [
    {
      icon: '👋',
      title: 'Welcome to Kids Learning!',
      description: 'A fun place to learn letters, numbers, and play games!'
    },
    {
      icon: '🔤',
      title: 'Learn the Alphabet',
      description: 'Tap on letters to hear their sounds and see fun examples!'
    },
    {
      icon: '🔢',
      title: 'Count Numbers',
      description: 'Learn to count from 0 to 9 with stars!'
    },
    {
      icon: '🎮',
      title: 'Play Fun Games',
      description: 'Match letters, find hidden ones, and take quizzes!'
    },
    {
      icon: '🎨',
      title: 'Draw & Trace',
      description: 'Practice writing letters by tracing them!'
    },
    {
      icon: '⭐',
      title: 'Earn Stars & Badges',
      description: 'Complete activities to collect stars and unlock badges!'
    },
    {
      icon: '🌍',
      title: 'Multiple Languages',
      description: 'Switch between languages anytime using the selector at the top!'
    }
  ]

  const handleNext = () => {
    playSound('click')
    if (step < steps.length - 1) {
      setStep(step + 1)
    } else {
      onComplete()
    }
  }

  const handleSkip = () => {
    playSound('click')
    onComplete()
  }

  return (
    <div className="modal-overlay onboarding">
      <div className="modal-content onboarding-content">
        <div className="onboarding-step">
          <div className="onboarding-icon">{steps[step].icon}</div>
          <h2 className="onboarding-title">{steps[step].title}</h2>
          <p className="onboarding-description">{steps[step].description}</p>
        </div>
        <div className="onboarding-dots">
          {steps.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === step ? 'active' : ''}`}
            />
          ))}
        </div>
        <div className="onboarding-buttons">
          <button className="onboarding-skip" onClick={handleSkip}>
            Skip
          </button>
          <button className="onboarding-next" onClick={handleNext}>
            {step < steps.length - 1 ? 'Next →' : 'Get Started! 🎉'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Onboarding
