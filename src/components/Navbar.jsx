import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import * as Icons from 'lucide-react'
import { Logo } from './Logo'

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`nav-fixed ${scrolled ? 'nav-scrolled' : ''}`}
      style={{padding: scrolled ? '12px 0' : '20px 0'}}
    >
      <div style={{maxWidth:'80rem',margin:'0 auto',padding:'0 16px',display:'flex',alignItems:'center',justifyContent:'space-between'}}>
        <Logo/>
        <div style={{display:'flex',alignItems:'center',gap:'32px'}} className="desktop-only">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.05, duration: 0.3 }}
              style={{color:'#d1d5db',textDecoration:'none',fontSize:'14px',fontWeight:'500',transition:'color .3s',position:'relative',paddingBottom:'4px'}}
              onMouseEnter={e => e.target.style.color='#fff'}
              onMouseLeave={e => e.target.style.color='#d1d5db'}
            >
              {link.name}
            </motion.a>
          ))}
          <motion.a
            href="#contact"
            className="btn-primary"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.3 }}
            style={{textDecoration:'none',fontSize:'14px'}}
          >
            Get Started
          </motion.a>
        </div>
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(!isOpen)}
          style={{background:'none',border:'none',color:'#fff',cursor:'pointer',padding:'8px'}}
          className="mobile-menu-trigger"
        >
          {isOpen ? <Icons.X/> : <Icons.Menu/>}
        </motion.button>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className={`mobile-menu ${isOpen ? 'open' : ''}`}
          >
            <div className="glass" style={{padding:'24px',borderRadius:'16px'}}>
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  style={{display:'block',color:'#d1d5db',textDecoration:'none',padding:'12px 0',fontSize:'16px',fontWeight:'500',borderBottom:'1px solid rgba(255,255,255,.05)'}}
                >
                  {link.name}
                </a>
              ))}
              <a href="#contact" className="btn-primary" style={{display:'block',textAlign:'center',marginTop:'16px',textDecoration:'none'}} onClick={() => setIsOpen(false)}>
                Get Started
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
