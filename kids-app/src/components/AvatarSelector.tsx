import { useState } from 'react'
import { avatars } from '../utils/achievements'

interface AvatarSelectorProps {
  currentAvatar: string
  onSelectAvatar: (avatarId: string) => void
  onClose: () => void
}

const AvatarSelector = ({ currentAvatar, onSelectAvatar, onClose }: AvatarSelectorProps) => {
  const [selected, setSelected] = useState(currentAvatar)

  const handleSelect = (avatarId: string) => {
    setSelected(avatarId)
    onSelectAvatar(avatarId)
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content avatar-selector" onClick={(e) => e.stopPropagation()}>
        <h2 className="modal-title">Choose Your Avatar! 🎨</h2>
        <div className="avatar-grid">
          {avatars.map((avatar) => (
            <button
              key={avatar.id}
              className={`avatar-option ${selected === avatar.id ? 'selected' : ''}`}
              onClick={() => handleSelect(avatar.id)}
            >
              <div className="avatar-emoji">{avatar.emoji}</div>
              <div className="avatar-name">{avatar.name}</div>
            </button>
          ))}
        </div>
        <button className="modal-close-btn" onClick={onClose}>Done ✓</button>
      </div>
    </div>
  )
}

export default AvatarSelector
