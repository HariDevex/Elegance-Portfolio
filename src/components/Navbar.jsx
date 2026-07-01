import { useState, useEffect } from 'react'
import * as Icons from 'lucide-react'
import { Logo } from './Logo'

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
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
    <nav className={`nav-fixed ${scrolled ? 'nav-scrolled' : ''}`} style={{padding: scrolled ? '12px 0' : '20px 0'}}>
      <div style={{maxWidth:'80rem',margin:'0 auto',padding:'0 16px',display:'flex',alignItems:'center',justifyContent:'space-between'}}>
        <Logo/>
        <div style={{display:'flex',alignItems:'center',gap:'32px'}} className="desktop-only">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} style={{color:'#d1d5db',textDecoration:'none',fontSize:'14px',fontWeight:'500',transition:'color .3s'}} onMouseEnter={e=>e.target.style.color='#fff'} onMouseLeave={e=>e.target.style.color='#d1d5db'}>
              {link.name}
            </a>
          ))}
          <a href="#contact" className="btn-primary" style={{textDecoration:'none',fontSize:'14px'}}>Get Started</a>
        </div>
        <button onClick={() => setIsOpen(!isOpen)} style={{background:'none',border:'none',color:'#fff',cursor:'pointer',padding:'8px'}} className="mobile-menu-trigger">
          {isOpen ? <Icons.X/> : <Icons.Menu/>}
        </button>
      </div>
      <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
        <div className="glass" style={{padding:'24px',borderRadius:'16px'}}>
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} style={{display:'block',color:'#d1d5db',textDecoration:'none',padding:'8px 0',fontSize:'16px'}}>
              {link.name}
            </a>
          ))}
          <a href="#contact" className="btn-primary" style={{display:'block',textAlign:'center',marginTop:'16px',textDecoration:'none'}}>Get Started</a>
        </div>
      </div>
    </nav>
  )
}
