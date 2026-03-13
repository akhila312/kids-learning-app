export interface Badge {
  id: string
  name: string
  description: string
  icon: string
  requirement: number
  type: 'stars' | 'letters' | 'numbers' | 'games' | 'stories'
}

export const badges: Badge[] = [
  {
    id: 'first_star',
    name: 'First Star',
    description: 'Earned your first star!',
    icon: '⭐',
    requirement: 1,
    type: 'stars'
  },
  {
    id: 'star_collector',
    name: 'Star Collector',
    description: 'Collected 10 stars!',
    icon: '🌟',
    requirement: 10,
    type: 'stars'
  },
  {
    id: 'super_star',
    name: 'Super Star',
    description: 'Amazing! 50 stars collected!',
    icon: '✨',
    requirement: 50,
    type: 'stars'
  },
  {
    id: 'alphabet_master',
    name: 'Alphabet Master',
    description: 'Learned all 26 letters!',
    icon: '🔤',
    requirement: 26,
    type: 'letters'
  },
  {
    id: 'number_wizard',
    name: 'Number Wizard',
    description: 'Mastered all numbers 0-9!',
    icon: '🔢',
    requirement: 10,
    type: 'numbers'
  },
  {
    id: 'game_player',
    name: 'Game Player',
    description: 'Played 5 games!',
    icon: '🎮',
    requirement: 5,
    type: 'games'
  },
  {
    id: 'story_lover',
    name: 'Story Lover',
    description: 'Read all stories!',
    icon: '📚',
    requirement: 6,
    type: 'stories'
  },
  {
    id: 'champion',
    name: 'Learning Champion',
    description: 'Played 25 games!',
    icon: '🏆',
    requirement: 25,
    type: 'games'
  }
]

export const avatars = [
  { id: 'bear', emoji: '🐻', name: 'Teddy Bear' },
  { id: 'cat', emoji: '🐱', name: 'Cool Cat' },
  { id: 'dog', emoji: '🐶', name: 'Happy Dog' },
  { id: 'lion', emoji: '🦁', name: 'Brave Lion' },
  { id: 'unicorn', emoji: '🦄', name: 'Magic Unicorn' },
  { id: 'panda', emoji: '🐼', name: 'Cute Panda' },
  { id: 'koala', emoji: '🐨', name: 'Koala Friend' },
  { id: 'fox', emoji: '🦊', name: 'Clever Fox' },
  { id: 'rabbit', emoji: '🐰', name: 'Swift Rabbit' },
  { id: 'tiger', emoji: '🐯', name: 'Strong Tiger' }
]
