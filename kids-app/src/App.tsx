import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import './App.css'
import { t } from 'i18next'

type Section = 'home' | 'alphabets' | 'numbers' | 'stories' | 'games' | 'draw'
type GameType = 'match' | 'find' | 'quiz'

const Confetti = ({ show }: { show: boolean }) => {
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

function App() {
  const { t, i18n } = useTranslation()
  const [section, setSection] = useState<Section>('home')
  const [selectedLetter, setSelectedLetter] = useState<string | null>(null)
  const [selectedNumber, setSelectedNumber] = useState<number | null>(null)
  const [currentStory, setCurrentStory] = useState(0)
  const [stars, setStars] = useState(0)
  const [showConfetti, setShowConfetti] = useState(false)
  const [gameType, setGameType] = useState<GameType | null>(null)
  const [matchCards, setMatchCards] = useState<{ id: number; letter: string; flipped: boolean; matched: boolean }[]>([])
  const [firstCard, setFirstCard] = useState<number | null>(null)
  const [findTarget, setFindTarget] = useState<string>('')
  const [quizQuestion, setQuizQuestion] = useState<{ letter: string; options: string[] } | null>(null)
  const [score, setScore] = useState(0)

  const alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

  const stories = [
    { title: t('stories.story1.title'), content: t('stories.story1.content') },
    { title: t('stories.story2.title'), content: t('stories.story2.content') },
    { title: t('stories.story3.title'), content: t('stories.story3.content') },
    { title: t('stories.story4.title'), content: t('stories.story4.content') }
  ]

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng)
    playSound('click')
  }

  const letterExamples: { [key: string]: { emoji: string; word: string } } = {
    A: { emoji: '🍎', word: 'Apple' },
    B: { emoji: '🦋', word: 'Butterfly' },
    C: { emoji: '🐱', word: 'Cat' },
    D: { emoji: '🦕', word: 'Dinosaur' },
    E: { emoji: '🐘', word: 'Elephant' },
    F: { emoji: '🐸', word: 'Frog' },
    G: { emoji: '🦒', word: 'Giraffe' },
    H: { emoji: '🏠', word: 'House' },
    I: { emoji: '🍦', word: 'Ice Cream' },
    J: { emoji: '🤹', word: 'Juggle' },
    K: { emoji: '🪁', word: 'Kite' },
    L: { emoji: '🦁', word: 'Lion' },
    M: { emoji: '🌙', word: 'Moon' },
    N: { emoji: '🥜', word: 'Nut' },
    O: { emoji: '🐙', word: 'Octopus' },
    P: { emoji: '🐧', word: 'Penguin' },
    Q: { emoji: '👑', word: 'Queen' },
    R: { emoji: '🌈', word: 'Rainbow' },
    S: { emoji: '⭐', word: 'Star' },
    T: { emoji: '🐯', word: 'Tiger' },
    U: { emoji: '☔', word: 'Umbrella' },
    V: { emoji: '🎻', word: 'Violin' },
    W: { emoji: '🍉', word: 'Watermelon' },
    X: { emoji: '🎄', word: 'Xmas Tree' },
    Y: { emoji: '🧶', word: 'Yarn' },
    Z: { emoji: '🦓', word: 'Zebra' }
  }

  const playSound = (type: 'click' | 'success' | 'correct' | 'wrong') => {
    const frequencies: { [key: string]: number } = {
      click: 800,
      success: 1200,
      correct: 1500,
      wrong: 300
    }
    
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)()
    const oscillator = audioContext.createOscillator()
    const gainNode = audioContext.createGain()
    
    oscillator.connect(gainNode)
    gainNode.connect(audioContext.destination)
    
    oscillator.frequency.value = frequencies[type]
    oscillator.type = 'sine'
    
    gainNode.gain.setValueAtTime(0.3, audioContext.currentTime)
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5)
    
    oscillator.start(audioContext.currentTime)
    oscillator.stop(audioContext.currentTime + 0.5)
  }

  const speak = (text: string) => {
    const utterance = new SpeechSynthesisUtterance(text)
    utterance.rate = 0.8
    utterance.pitch = 1.2
    speechSynthesis.speak(utterance)
  }

  const celebrateSuccess = () => {
    setShowConfetti(true)
    playSound('success')
    setStars(prev => prev + 1)
    setTimeout(() => setShowConfetti(false), 3000)
  }

  const handleLetterClick = (letter: string) => {
    setSelectedLetter(letter)
    playSound('click')
    speak(`${letter} for ${letterExamples[letter].word}`)
  }

  const handleNumberClick = (num: number) => {
    setSelectedNumber(num)
    playSound('click')
    speak(`Number ${num}`)
  }

  const initMatchGame = () => {
    const letters = ['A', 'B', 'C', 'D', 'E', 'F']
    const cards = [...letters, ...letters]
      .sort(() => Math.random() - 0.5)
      .map((letter, index) => ({ id: index, letter, flipped: false, matched: false }))
    setMatchCards(cards)
    setFirstCard(null)
  }

  const handleCardClick = (id: number) => {
    if (matchCards[id].matched || matchCards[id].flipped) return
    
    const newCards = [...matchCards]
    newCards[id].flipped = true
    setMatchCards(newCards)
    playSound('click')
    
    if (firstCard === null) {
      setFirstCard(id)
    } else {
      if (newCards[firstCard].letter === newCards[id].letter) {
        newCards[firstCard].matched = true
        newCards[id].matched = true
        setMatchCards(newCards)
        celebrateSuccess()
        setFirstCard(null)
        
        if (newCards.every(card => card.matched)) {
          setTimeout(() => speak('Amazing! You matched them all!'), 500)
        }
      } else {
        playSound('wrong')
        setTimeout(() => {
          newCards[firstCard].flipped = false
          newCards[id].flipped = false
          setMatchCards(newCards)
          setFirstCard(null)
        }, 1000)
      }
    }
  }

  const initFindGame = () => {
    const target = alphabets[Math.floor(Math.random() * alphabets.length)]
    setFindTarget(target)
    speak(`Find the letter ${target}`)
  }

  const handleFindClick = (letter: string) => {
    if (letter === findTarget) {
      playSound('correct')
      speak('Correct! Great job!')
      celebrateSuccess()
      setScore(prev => prev + 10)
      setTimeout(initFindGame, 1500)
    } else {
      playSound('wrong')
      speak('Try again!')
    }
  }

  const initQuizGame = () => {
    const correctLetter = alphabets[Math.floor(Math.random() * alphabets.length)]
    const wrongLetters = alphabets.filter(l => l !== correctLetter)
    const options = [
      correctLetter,
      wrongLetters[Math.floor(Math.random() * wrongLetters.length)],
      wrongLetters[Math.floor(Math.random() * wrongLetters.length)],
      wrongLetters[Math.floor(Math.random() * wrongLetters.length)]
    ].sort(() => Math.random() - 0.5)
    
    setQuizQuestion({ letter: correctLetter, options })
    speak(`Which one is ${letterExamples[correctLetter].word}?`)
  }

  const handleQuizAnswer = (answer: string) => {
    if (answer === quizQuestion?.letter) {
      playSound('correct')
      speak('Perfect!')
      celebrateSuccess()
      setScore(prev => prev + 15)
      setTimeout(initQuizGame, 1500)
    } else {
      playSound('wrong')
      speak('Oops! Try again!')
    }
  }

  useEffect(() => {
    if (gameType === 'match') initMatchGame()
    if (gameType === 'find') initFindGame()
    if (gameType === 'quiz') initQuizGame()
  }, [gameType])

  return (
    <div className="app">
      <Confetti show={showConfetti} />
      
      <header className="header">
        <h1 className="title">🌟 {t('appTitle')} 🌟</h1>
        <div className="header-right">
          <select className="language-selector" value={i18n.language} onChange={(e) => changeLanguage(e.target.value)}>
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

      {section === 'home' && (
        <div className="home-section">
          <div className="mascot">🐻</div>
          <h2 className="welcome-text">{t('appTitle')} 🎉</h2>
          <div className="menu-buttons">
            <button className="menu-btn" onClick={() => { setSection('alphabets'); playSound('click') }}>
              🔤 {t('menu.alphabets')}
            </button>
            <button className="menu-btn" onClick={() => { setSection('numbers'); playSound('click') }}>
              🔢 {t('menu.numbers')}
            </button>
            <button className="menu-btn" onClick={() => { setSection('games'); playSound('click') }}>
              🎮 {t('menu.games')}
            </button>
            <button className="menu-btn" onClick={() => { setSection('draw'); playSound('click') }}>
              🎨 {t('menu.draw')}
            </button>
            <button className="menu-btn" onClick={() => { setSection('stories'); playSound('click') }}>
              📚 {t('menu.stories')}
            </button>
          </div>
        </div>
      )}

      {section !== 'home' && (
        <button className="back-btn" onClick={() => {
          setSection('home')
          setSelectedLetter(null)
          setSelectedNumber(null)
          setGameType(null)
          playSound('click')
        }}>
          ← {t('backHome')}
        </button>
      )}

      {section === 'alphabets' && (
        <div className="content-section">
          <h2 className="section-title">🔤 {t('alphabets.title')} 🔤</h2>
          <div className="alphabet-grid">
            {alphabets.map((letter) => (
              <button
                key={letter}
                className={`letter-btn ${selectedLetter === letter ? 'selected' : ''}`}
                onClick={() => handleLetterClick(letter)}
              >
                {letter}
              </button>
            ))}
          </div>
          {selectedLetter && (
            <div className="display-card bounce-in">
              <div className="big-emoji wiggle">{letterExamples[selectedLetter].emoji}</div>
              <h3 className="display-text">
                {selectedLetter} is for {letterExamples[selectedLetter].word}
              </h3>
              <button className="speak-btn" onClick={() => speak(`${selectedLetter} for ${letterExamples[selectedLetter].word}`)}>
                🔊 Say it again!
              </button>
            </div>
          )}
        </div>
      )}

      {section === 'numbers' && (
        <div className="content-section">
          <h2 className="section-title">🔢 {t('numbers.title')} 🔢</h2>
          <div className="number-grid">
            {numbers.map((num) => (
              <button
                key={num}
                className={`number-btn ${selectedNumber === num ? 'selected' : ''}`}
                onClick={() => handleNumberClick(num)}
              >
                {num}
              </button>
            ))}
          </div>
          {selectedNumber !== null && (
            <div className="display-card bounce-in">
              <h3 className="display-text">Count with me!</h3>
              <div className="count-display">
                {Array.from({ length: selectedNumber }).map((_, i) => (
                  <span key={i} className="count-star pop-in" style={{ animationDelay: `${i * 0.1}s` }}>⭐</span>
                ))}
                {selectedNumber === 0 && <span className="zero-text">Zero stars!</span>}
              </div>
              <h2 className="big-number pulse">{selectedNumber}</h2>
            </div>
          )}
        </div>
      )}

      {section === 'games' && !gameType && (
        <div className="content-section">
          <h2 className="section-title">🎮 {t('games.title')} 🎮</h2>
          <div className="game-score">{t('games.score')}: {score}</div>
          <div className="menu-buttons">
            <button className="game-btn" onClick={() => setGameType('match')}>
              🎴 {t('games.matching')}
            </button>
            <button className="game-btn" onClick={() => setGameType('find')}>
              🔍 {t('games.findLetter')}
            </button>
            <button className="game-btn" onClick={() => setGameType('quiz')}>
              ❓ {t('games.quiz')}
            </button>
          </div>
        </div>
      )}

      {section === 'games' && gameType === 'match' && (
        <div className="content-section">
          <h2 className="section-title">🎴 {t('games.matching')}!</h2>
          <div className="match-grid">
            {matchCards.map((card) => (
              <button
                key={card.id}
                className={`match-card ${card.flipped || card.matched ? 'flipped' : ''} ${card.matched ? 'matched' : ''}`}
                onClick={() => handleCardClick(card.id)}
                disabled={card.matched}
              >
                {card.flipped || card.matched ? card.letter : '?'}
              </button>
            ))}
          </div>
          <button className="reset-btn" onClick={initMatchGame}>🔄 {t('games.playAgain')}</button>
        </div>
      )}

      {section === 'games' && gameType === 'find' && (
        <div className="content-section">
          <h2 className="section-title">🔍 {t('games.findInstruction')}: {findTarget}</h2>
          <div className="alphabet-grid">
            {alphabets.map((letter) => (
              <button
                key={letter}
                className="letter-btn find-btn"
                onClick={() => handleFindClick(letter)}
              >
                {letter}
              </button>
            ))}
          </div>
        </div>
      )}

      {section === 'games' && gameType === 'quiz' && quizQuestion && (
        <div className="content-section">
          <h2 className="section-title">❓ Which one is {letterExamples[quizQuestion.letter].word}?</h2>
          <div className="quiz-options">
            {quizQuestion.options.map((option) => (
              <button
                key={option}
                className="quiz-option"
                onClick={() => handleQuizAnswer(option)}
              >
                <div className="quiz-emoji">{letterExamples[option].emoji}</div>
                <div className="quiz-word">{letterExamples[option].word}</div>
              </button>
            ))}
          </div>
        </div>
      )}

      {section === 'draw' && (
        <div className="content-section">
          <h2 className="section-title">🎨 {t('draw.title')}</h2>
          <DrawingCanvas />
        </div>
      )}

      {section === 'stories' && (
        <div className="content-section">
          <h2 className="section-title">📚 {t('stories.title')} 📚</h2>
          <div className="story-card">
            <h3 className="story-title">{stories[currentStory].title}</h3>
            <p className="story-content">{stories[currentStory].content}</p>
            <button className="speak-btn" onClick={() => speak(stories[currentStory].content)}>
              🔊 Read to me!
            </button>
            <div className="story-navigation">
              <button
                className="story-nav-btn"
                onClick={() => {
                  setCurrentStory((prev) => (prev === 0 ? stories.length - 1 : prev - 1))
                  playSound('click')
                }}
              >
                ← Previous
              </button>
              <span className="story-indicator">
                {currentStory + 1} of {stories.length}
              </span>
              <button
                className="story-nav-btn"
                onClick={() => {
                  setCurrentStory((prev) => (prev === stories.length - 1 ? 0 : prev + 1))
                  playSound('click')
                }}
              >
                Next →
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

const DrawingCanvas = () => {
  const [isDrawing, setIsDrawing] = useState(false)
  const [color, setColor] = useState('#ff6b6b')
  const [traceLetter, setTraceLetter] = useState('A')
  
  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = e.currentTarget
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    
    setIsDrawing(true)
    const rect = canvas.getBoundingClientRect()
    ctx.beginPath()
    ctx.moveTo(e.clientX - rect.left, e.clientY - rect.top)
  }

  const startDrawingTouch = (e: React.TouchEvent<HTMLCanvasElement>) => {
    e.preventDefault()
    const canvas = e.currentTarget
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    
    setIsDrawing(true)
    const rect = canvas.getBoundingClientRect()
    const touch = e.touches[0]
    ctx.beginPath()
    ctx.moveTo(touch.clientX - rect.left, touch.clientY - rect.top)
  }
  
  const draw = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return
    
    const canvas = e.currentTarget
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    
    const rect = canvas.getBoundingClientRect()
    ctx.strokeStyle = color
    ctx.lineWidth = 8
    ctx.lineCap = 'round'
    ctx.lineTo(e.clientX - rect.left, e.clientY - rect.top)
    ctx.stroke()
  }

  const drawTouch = (e: React.TouchEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return
    e.preventDefault()
    
    const canvas = e.currentTarget
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    
    const rect = canvas.getBoundingClientRect()
    const touch = e.touches[0]
    ctx.strokeStyle = color
    ctx.lineWidth = 8
    ctx.lineCap = 'round'
    ctx.lineTo(touch.clientX - rect.left, touch.clientY - rect.top)
    ctx.stroke()
  }

  const stopDrawing = () => {
    setIsDrawing(false)
  }
  
  const clearCanvas = () => {
    const canvas = document.querySelector('canvas')
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    
    // Draw trace letter
    ctx.font = '200px Arial'
    ctx.fillStyle = '#e0e0e0'
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    ctx.fillText(traceLetter, canvas.width / 2, canvas.height / 2)
  }
  
  useEffect(() => {
    clearCanvas()
  }, [traceLetter])
  
  return (
    <div className="drawing-container">
      <div className="drawing-controls">
        <div className="color-picker">
          {['#ff6b6b', '#4ecdc4', '#45b7d1', '#f9ca24', '#6c5ce7', '#fd79a8'].map((c) => (
            <button
              key={c}
              className={`color-btn ${color === c ? 'active' : ''}`}
              style={{ backgroundColor: c }}
              onClick={() => setColor(c)}
            />
          ))}
        </div>
        <select 
          className="letter-select"
          value={traceLetter}
          onChange={(e) => setTraceLetter(e.target.value)}
        >
          {'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map(l => (
            <option key={l} value={l}>{l}</option>
          ))}
        </select>
        <button className="clear-btn" onClick={clearCanvas}>🗑️ {t('draw.clear')}</button>
      </div>
      <canvas
        ref={(el) => {
          if (el) {
            const ctx = el.getContext('2d')
            if (ctx) {
              ctx.font = '200px Arial'
              ctx.fillStyle = '#e0e0e0'
              ctx.textAlign = 'center'
              ctx.textBaseline = 'middle'
              ctx.fillText(traceLetter, el.width / 2, el.height / 2)
            }
          }
        }}
        className="drawing-canvas"
        width={600}
        height={400}
        onMouseDown={startDrawing}
        onMouseMove={draw}
        onMouseUp={stopDrawing}
        onMouseLeave={stopDrawing}
        onTouchStart={startDrawingTouch}
        onTouchMove={drawTouch}
        onTouchEnd={stopDrawing}
        onTouchCancel={stopDrawing}
      />
    </div>
  )
}

export default App
