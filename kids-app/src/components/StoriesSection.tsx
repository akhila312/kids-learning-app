import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { playSound, speak } from '../utils/audio'

interface StoriesSectionProps {
  onReadStory?: (index: number) => void
}

const StoriesSection = ({ onReadStory }: StoriesSectionProps) => {
  const { t } = useTranslation()
  const [currentStory, setCurrentStory] = useState(0)

  const stories = [
    { title: t('stories.story1.title'), content: t('stories.story1.content') },
    { title: t('stories.story2.title'), content: t('stories.story2.content') },
    { title: t('stories.story3.title'), content: t('stories.story3.content') },
    { title: t('stories.story4.title'), content: t('stories.story4.content') }
  ]

  const handlePrevious = () => {
    playSound('click')
    setCurrentStory((prev) => (prev === 0 ? stories.length - 1 : prev - 1))
  }

  const handleNext = () => {
    playSound('click')
    const nextIndex = currentStory === stories.length - 1 ? 0 : currentStory + 1
    setCurrentStory(nextIndex)
    onReadStory?.(nextIndex)
  }

  return (
    <div className="content-section">
      <h2 className="section-title">📚 {t('stories.title')} 📚</h2>
      <div className="story-card slide-in">
        <h3 className="story-title">{stories[currentStory].title}</h3>
        <p className="story-content">{stories[currentStory].content}</p>
        <button className="speak-btn" onClick={() => speak(stories[currentStory].content)}>
          🔊 Read Aloud
        </button>
        <div className="story-navigation">
          <button className="story-nav-btn" onClick={handlePrevious}>
            ← {t('stories.previous')}
          </button>
          <div className="story-counter">
            {currentStory + 1} of {stories.length}
          </div>
          <button className="story-nav-btn" onClick={handleNext}>
            {t('stories.next')} →
          </button>
        </div>
      </div>
    </div>
  )
}

export default StoriesSection
