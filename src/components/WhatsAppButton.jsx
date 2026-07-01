import { motion } from 'framer-motion'
import * as Icons from 'lucide-react'

export const WhatsAppButton = () => (
  <motion.a
    href="https://wa.me/916369126125"
    target="_blank"
    rel="noopener noreferrer"
    className="whatsapp-btn"
    initial={{ scale: 0, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ delay: 1, type: 'spring', stiffness: 200 }}
    whileHover={{ scale: 1.1, rotate: -5 }}
    whileTap={{ scale: 0.9 }}
  >
    <Icons.MessageCircle style={{color:'#fff',width:'28px',height:'28px'}}/>
    <motion.span
      className="notification-dot"
      animate={{ scale: [1, 1.3, 1] }}
      transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
    />
  </motion.a>
)
