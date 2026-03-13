import { useState } from 'react'

interface FeedbackFormProps {
  onClose: () => void
}

const FeedbackForm = ({ onClose }: FeedbackFormProps) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [category, setCategory] = useState('general')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // In a real app, you would send this to a backend
    // For now, we'll just store it locally and show confirmation
    const feedback = {
      name,
      email,
      category,
      message,
      timestamp: new Date().toISOString()
    }
    
    // Store in localStorage for demo purposes
    const existingFeedback = JSON.parse(localStorage.getItem('parentFeedback') || '[]')
    existingFeedback.push(feedback)
    localStorage.setItem('parentFeedback', JSON.stringify(existingFeedback))
    
    setSubmitted(true)
    setTimeout(() => {
      onClose()
    }, 2000)
  }

  if (submitted) {
    return (
      <div className="modal-overlay" onClick={onClose}>
        <div className="modal-content feedback-form" onClick={(e) => e.stopPropagation()}>
          <div className="success-message">
            <h2>✅ Thank You!</h2>
            <p>Your feedback has been received. We appreciate your input!</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content feedback-form" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>✕</button>
        
        <h2>💬 Parent Feedback</h2>
        <p>We'd love to hear from you! Your feedback helps us improve the app.</p>
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name (optional)</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email (optional)</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
            />
          </div>

          <div className="form-group">
            <label htmlFor="category">Category</label>
            <select
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            >
              <option value="general">General Feedback</option>
              <option value="bug">Bug Report</option>
              <option value="feature">Feature Request</option>
              <option value="content">Content Suggestion</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="message">Message *</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tell us what you think..."
              rows={6}
              required
            />
          </div>

          <div className="form-actions">
            <button type="submit" className="submit-btn">
              📤 Send Feedback
            </button>
            <button type="button" className="cancel-btn" onClick={onClose}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default FeedbackForm
