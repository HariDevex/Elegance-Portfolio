import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { routes, site } from '../data/site'
import { Logo } from './Logo'
import { Icon } from './Icon'
import { ThemeToggle } from './ThemeToggle'

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  const linkClass = ({ isActive }) =>
    `rounded-lg px-3 py-2 font-label-md text-label-md transition-all ${
      isActive
        ? 'bg-surface-container-high text-primary'
        : 'text-on-surface-variant hover:bg-surface-container hover:text-on-surface'
    }`

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-surface-container-lowest/85 shadow-[0_1px_16px_rgba(0,0,0,0.35)] backdrop-blur-xl'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-20 max-w-container-max items-center justify-between gap-4 px-gutter-mobile lg:px-gutter-desktop">
        <Link to="/" onClick={() => window.scrollTo({ top: 0 })}>
          <Logo />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 xl:flex">
          {routes.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={linkClass}
              end={link.to === '/'}
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Link
            to="/contact"
            className="relative hidden items-center justify-center rounded-full p-0.5 shadow-[0_0_24px_rgba(77,142,255,0.25)] transition-all hover:shadow-[0_0_32px_rgba(174,5,198,0.35)] sm:inline-flex"
          >
            <span className="absolute inset-0 rounded-full bg-elegance-gradient opacity-80 transition-opacity" />
            <span className="relative rounded-full bg-surface-container-lowest px-5 py-2 font-label-md text-label-md text-on-surface">
              Get a Consultation
            </span>
          </Link>
          <a
            href={site.whatsappMessage}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="hidden items-center justify-center rounded-full bg-primary/15 p-2.5 text-primary transition-colors hover:bg-primary/25 md:flex"
          >
            <Icon name="chat" size="text-[18px]" />
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            className="flex h-10 w-10 items-center justify-center rounded-lg text-on-surface transition-colors hover:bg-surface-container xl:hidden"
          >
            <Icon name={isOpen ? 'close' : 'menu'} size="text-[24px]" />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="border-t border-outline/20 bg-surface-container-lowest/95 px-gutter-mobile pb-6 pt-2 backdrop-blur-xl xl:hidden">
          <nav className="flex flex-col gap-1">
            {routes.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `rounded-lg px-3 py-3 font-label-md text-label-md transition-colors ${
                    isActive
                      ? 'bg-surface-container-high text-primary'
                      : 'text-on-surface-variant hover:bg-surface-container hover:text-on-surface'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="mt-3 inline-flex items-center justify-center rounded-xl bg-elegance-gradient px-4 py-3 font-label-md text-label-md text-on-surface"
            >
              Get a Consultation
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}