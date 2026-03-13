import { useState, useEffect } from 'react'

interface DrawingCanvasProps {
  traceLetter?: string
}

type DrawMode = 'letters' | 'shapes'

const DrawingCanvas = ({ traceLetter = 'A' }: DrawingCanvasProps) => {
  const [isDrawing, setIsDrawing] = useState(false)
  const [color, setColor] = useState('#ff6b6b')
  const [selectedLetter, setSelectedLetter] = useState(traceLetter)
  const [mode, setMode] = useState<DrawMode>('letters')
  const [selectedShape, setSelectedShape] = useState('circle')

  const shapes = [
    { name: 'circle', label: '⭕ Circle' },
    { name: 'square', label: '⬜ Square' },
    { name: 'triangle', label: '🔺 Triangle' },
    { name: 'star', label: '⭐ Star' },
    { name: 'heart', label: '❤️ Heart' }
  ]

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

  const drawShape = (ctx: CanvasRenderingContext2D, shape: string, x: number, y: number, size: number) => {
    ctx.strokeStyle = '#e0e0e0'
    ctx.lineWidth = 3
    ctx.fillStyle = '#f0f0f0'

    switch (shape) {
      case 'circle':
        ctx.beginPath()
        ctx.arc(x, y, size, 0, Math.PI * 2)
        ctx.stroke()
        break
      case 'square':
        ctx.strokeRect(x - size, y - size, size * 2, size * 2)
        break
      case 'triangle':
        ctx.beginPath()
        ctx.moveTo(x, y - size)
        ctx.lineTo(x - size, y + size)
        ctx.lineTo(x + size, y + size)
        ctx.closePath()
        ctx.stroke()
        break
      case 'star':
        ctx.beginPath()
        for (let i = 0; i < 5; i++) {
          const angle = (i * 4 * Math.PI) / 5 - Math.PI / 2
          const r = i % 2 === 0 ? size : size / 2
          const px = x + r * Math.cos(angle)
          const py = y + r * Math.sin(angle)
          if (i === 0) ctx.moveTo(px, py)
          else ctx.lineTo(px, py)
        }
        ctx.closePath()
        ctx.stroke()
        break
      case 'heart':
        ctx.beginPath()
        ctx.moveTo(x, y + size / 4)
        ctx.bezierCurveTo(x, y, x - size / 2, y - size / 2, x - size, y + size / 4)
        ctx.bezierCurveTo(x - size, y + size, x, y + size * 1.2, x, y + size * 1.5)
        ctx.bezierCurveTo(x, y + size * 1.2, x + size, y + size, x + size, y + size / 4)
        ctx.bezierCurveTo(x + size / 2, y - size / 2, x, y, x, y + size / 4)
        ctx.closePath()
        ctx.stroke()
        break
    }
  }

  const clearCanvas = () => {
    const canvas = document.querySelector('canvas')
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    
    if (mode === 'letters') {
      // Draw trace letter
      ctx.font = '200px Arial'
      ctx.fillStyle = '#e0e0e0'
      ctx.textAlign = 'center'
      ctx.textBaseline = 'middle'
      ctx.fillText(selectedLetter, canvas.width / 2, canvas.height / 2)
    } else {
      // Draw trace shape
      drawShape(ctx, selectedShape, canvas.width / 2, canvas.height / 2, 120)
    }
  }

  useEffect(() => {
    clearCanvas()
  }, [selectedLetter, selectedShape, mode])

  return (
    <div className="drawing-container">
      <div className="drawing-controls">
        <div className="mode-switcher">
          <button 
            className={`mode-btn ${mode === 'letters' ? 'active' : ''}`}
            onClick={() => setMode('letters')}
          >
            🔤 Letters
          </button>
          <button 
            className={`mode-btn ${mode === 'shapes' ? 'active' : ''}`}
            onClick={() => setMode('shapes')}
          >
            ⭕ Shapes
          </button>
        </div>
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
        {mode === 'letters' ? (
          <select 
            className="letter-select"
            value={selectedLetter}
            onChange={(e) => setSelectedLetter(e.target.value)}
          >
            {'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map(l => (
              <option key={l} value={l}>{l}</option>
            ))}
          </select>
        ) : (
          <select 
            className="letter-select"
            value={selectedShape}
            onChange={(e) => setSelectedShape(e.target.value)}
          >
            {shapes.map(s => (
              <option key={s.name} value={s.name}>{s.label}</option>
            ))}
          </select>
        )}
        <button className="clear-btn" onClick={clearCanvas}>🗑️ Clear</button>
      </div>
      <canvas
        ref={(el) => {
          if (el) {
            const ctx = el.getContext('2d')
            if (ctx) {
              if (mode === 'letters') {
                ctx.font = '200px Arial'
                ctx.fillStyle = '#e0e0e0'
                ctx.textAlign = 'center'
                ctx.textBaseline = 'middle'
                ctx.fillText(selectedLetter, el.width / 2, el.height / 2)
              } else {
                drawShape(ctx, selectedShape, el.width / 2, el.height / 2, 120)
              }
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

export default DrawingCanvas
