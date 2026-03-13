import { playSound } from '../utils/audio'

interface AccessibilitySettingsProps {
  fontSize: 'normal' | 'large' | 'xlarge'
  highContrast: boolean
  onFontSizeChange: (size: 'normal' | 'large' | 'xlarge') => void
  onHighContrastChange: (enabled: boolean) => void
  onClose: () => void
}

const AccessibilitySettings = ({
  fontSize,
  highContrast,
  onFontSizeChange,
  onHighContrastChange,
  onClose
}: AccessibilitySettingsProps) => {
  const handleFontSizeChange = (size: 'normal' | 'large' | 'xlarge') => {
    playSound('click')
    onFontSizeChange(size)
  }

  const handleHighContrastToggle = () => {
    playSound('click')
    onHighContrastChange(!highContrast)
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content settings-modal" onClick={(e) => e.stopPropagation()}>
        <h2 className="modal-title">♿ Accessibility Settings</h2>
        
        <div className="setting-group">
          <h3>Font Size</h3>
          <div className="button-group">
            <button
              className={`setting-btn ${fontSize === 'normal' ? 'active' : ''}`}
              onClick={() => handleFontSizeChange('normal')}
            >
              Normal
            </button>
            <button
              className={`setting-btn ${fontSize === 'large' ? 'active' : ''}`}
              onClick={() => handleFontSizeChange('large')}
            >
              Large
            </button>
            <button
              className={`setting-btn ${fontSize === 'xlarge' ? 'active' : ''}`}
              onClick={() => handleFontSizeChange('xlarge')}
            >
              Extra Large
            </button>
          </div>
        </div>

        <div className="setting-group">
          <h3>High Contrast Mode</h3>
          <button
            className={`toggle-btn ${highContrast ? 'active' : ''}`}
            onClick={handleHighContrastToggle}
          >
            {highContrast ? 'ON ✓' : 'OFF'}
          </button>
        </div>

        <button className="modal-close-btn" onClick={onClose}>Done ✓</button>
      </div>
    </div>
  )
}

export default AccessibilitySettings
