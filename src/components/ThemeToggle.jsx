import { useEffect, useState } from 'react'
import { Icon } from './Icon'

const STORAGE_KEY = 'elegance-theme'

export const getThemeClass = () => {
  if (typeof window === 'undefined') return 'light'
  const saved = window.localStorage.getItem(STORAGE_KEY)
  if (saved === 'dark') return ''
  return 'light'
}

export const ThemeToggle = () => {
  const [isLight, setIsLight] = useState(false)

  useEffect(() => {
    setIsLight(document.documentElement.classList.contains('light'))
  }, [])

  const toggle = () => {
    const next = !document.documentElement.classList.contains('light')
    document.documentElement.classList.toggle('light', next)
    window.localStorage.setItem(STORAGE_KEY, next ? 'light' : 'dark')
    setIsLight(next)
  }

  return (
    <button
      onClick={toggle}
      aria-label={isLight ? 'Switch to dark theme' : 'Switch to light theme'}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-outline/25 bg-surface-container-high/50 text-on-surface-variant transition-colors hover:bg-surface-container-high hover:text-on-surface"
    >
      <Icon name={isLight ? 'dark_mode' : 'light_mode'} size="text-[18px]" />
    </button>
  )
}