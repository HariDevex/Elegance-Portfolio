import { useEffect, useState } from 'react'
import { site } from '../data/site'
import { Icon } from './Icon'

export const WhatsAppButton = () => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 1200)
    return () => clearTimeout(t)
  }, [])

  return (
    <a
      href={site.whatsappMessage}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className={`fixed right-5 bottom-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 text-white shadow-[0_4px_20px_rgba(34,197,94,0.4)] transition-all duration-300 hover:scale-110 hover:shadow-[0_6px_30px_rgba(34,197,94,0.55)] ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
      }`}
    >
      <Icon name="chat" size="text-[26px]" />
    </a>
  )
}