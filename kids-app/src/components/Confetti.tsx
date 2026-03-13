interface ConfettiProps {
  show: boolean
}

const Confetti = ({ show }: ConfettiProps) => {
  if (!show) return null
  
  return (
    <div className="confetti-container">
      {Array.from({ length: 50 }).map((_, i) => (
        <div
          key={i}
          className="confetti"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            backgroundColor: ['#ff6b6b', '#4ecdc4', '#45b7d1', '#f9ca24', '#6c5ce7', '#fd79a8'][Math.floor(Math.random() * 6)]
          }}
        />
      ))}
    </div>
  )
}

export default Confetti
