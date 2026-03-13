export const playSound = (type: 'click' | 'success' | 'correct' | 'wrong') => {
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

export const speak = (text: string, lang: string = 'en-US') => {
  const utterance = new SpeechSynthesisUtterance(text)
  utterance.rate = 0.8
  utterance.pitch = 1.2
  utterance.lang = lang
  speechSynthesis.speak(utterance)
}
