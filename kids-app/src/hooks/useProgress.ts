import { useState, useEffect } from 'react'

interface Progress {
  stars: number
  completedLetters: string[]
  completedNumbers: number[]
  gamesPlayed: number
  storiesRead: number[]
}

const STORAGE_KEY = 'kids_learning_progress'

export const useProgress = () => {
  const [progress, setProgress] = useState<Progress>(() => {
    const saved = localStorage.getItem(STORAGE_KEY)
    return saved ? JSON.parse(saved) : {
      stars: 0,
      completedLetters: [],
      completedNumbers: [],
      gamesPlayed: 0,
      storiesRead: []
    }
  })

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress))
  }, [progress])

  const addStar = () => {
    setProgress(prev => ({ ...prev, stars: prev.stars + 1 }))
  }

  const completeLetter = (letter: string) => {
    setProgress(prev => ({
      ...prev,
      completedLetters: [...new Set([...prev.completedLetters, letter])]
    }))
  }

  const completeNumber = (num: number) => {
    setProgress(prev => ({
      ...prev,
      completedNumbers: [...new Set([...prev.completedNumbers, num])]
    }))
  }

  const incrementGamesPlayed = () => {
    setProgress(prev => ({ ...prev, gamesPlayed: prev.gamesPlayed + 1 }))
  }

  const readStory = (storyIndex: number) => {
    setProgress(prev => ({
      ...prev,
      storiesRead: [...new Set([...prev.storiesRead, storyIndex])]
    }))
  }

  const resetProgress = () => {
    const initialProgress = {
      stars: 0,
      completedLetters: [],
      completedNumbers: [],
      gamesPlayed: 0,
      storiesRead: []
    }
    setProgress(initialProgress)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(initialProgress))
  }

  return {
    progress,
    addStar,
    completeLetter,
    completeNumber,
    incrementGamesPlayed,
    readStory,
    resetProgress
  }
}
