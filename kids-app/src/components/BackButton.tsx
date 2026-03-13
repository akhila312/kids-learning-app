import { useTranslation } from 'react-i18next'
import { playSound } from '../utils/audio'

interface BackButtonProps {
  onBack: () => void
}

const BackButton = ({ onBack }: BackButtonProps) => {
  const { t } = useTranslation()

  const handleClick = () => {
    onBack()
    playSound('click')
  }

  return (
    <button className="back-btn" onClick={handleClick}>
      ← {t('backHome')}
    </button>
  )
}

export default BackButton
