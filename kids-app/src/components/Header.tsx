import { useTranslation } from 'react-i18next'
import { playSound } from '../utils/audio'
import { avatars } from '../utils/achievements'

interface HeaderProps {
  stars: number
  avatar: string
  onAvatarClick: () => void
  onBadgesClick: () => void
  onSettingsClick: () => void
}

const Header = ({ stars, avatar, onAvatarClick, onBadgesClick, onSettingsClick }: HeaderProps) => {
  const { t, i18n } = useTranslation()

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng)
    playSound('click')
  }

  const currentAvatar = avatars.find(a => a.id === avatar) || avatars[0]

  return (
    <header className="header">
      <div className="header-left">
        <button className="avatar-btn" onClick={onAvatarClick} title="Change Avatar">
          {currentAvatar.emoji}
        </button>
        <h1 className="title">🌟 {t('appTitle')} 🌟</h1>
      </div>
      <div className="header-right">
        <button className="icon-btn" onClick={onSettingsClick} title="Accessibility Settings">
          ⚙️
        </button>
        <button className="icon-btn" onClick={onBadgesClick} title="View Badges">
          🏆
        </button>
        <select 
          className="language-selector" 
          value={i18n.language} 
          onChange={(e) => changeLanguage(e.target.value)}
        >
          <option value="en">🇬🇧 English</option>
          <option value="te">🇮🇳 తెలుగు</option>
          <option value="hi">🇮🇳 हिंदी</option>
          <option value="es">🇪🇸 Español</option>
          <option value="fr">🇫🇷 Français</option>
          <option value="de">🇩🇪 Deutsch</option>
          <option value="zh">🇨🇳 中文</option>
          <option value="ar">🇸🇦 العربية</option>
        </select>
        <div className="star-count">⭐ Stars: {stars}</div>
      </div>
    </header>
  )
}

export default Header
