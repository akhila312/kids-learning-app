import { useTranslation } from 'react-i18next'
import { playSound } from '../utils/audio'

type Section = 'home' | 'alphabets' | 'numbers' | 'stories' | 'games' | 'draw'

interface HomeProps {
  onSelectSection: (section: Section) => void
}

const Home = ({ onSelectSection }: HomeProps) => {
  const { t } = useTranslation()

  const handleMenuClick = (section: Section) => {
    onSelectSection(section)
    playSound('click')
  }

  return (
    <div className="home-section">
      <div className="mascot">🐻</div>
      <h2 className="welcome-text">{t('appTitle')} 🎉</h2>
      <div className="menu-buttons">
        <button className="menu-btn" onClick={() => handleMenuClick('alphabets')}>
          🔤 {t('menu.alphabets')}
        </button>
        <button className="menu-btn" onClick={() => handleMenuClick('numbers')}>
          🔢 {t('menu.numbers')}
        </button>
        <button className="menu-btn" onClick={() => handleMenuClick('games')}>
          🎮 {t('menu.games')}
        </button>
        <button className="menu-btn" onClick={() => handleMenuClick('draw')}>
          🎨 {t('menu.draw')}
        </button>
        <button className="menu-btn" onClick={() => handleMenuClick('stories')}>
          📚 {t('menu.stories')}
        </button>
      </div>
    </div>
  )
}

export default Home
