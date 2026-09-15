import { Link } from 'react-router-dom'
import { site, routes } from '../data/site'
import { Logo } from './Logo'
import { Icon } from './Icon'

const columns = [
  {
    title: 'Services',
    icon: 'layers',
    links: [
      { label: 'Enterprise Software', to: '/services' },
      { label: 'Cloud & DevOps', to: '/services' },
      { label: 'GIS, LiDAR & BIM', to: '/services' },
      { label: 'AI & Data Analytics', to: '/services' },
      { label: 'UI/UX Design', to: '/services' },
      { label: 'Cyber Security', to: '/services' },
    ],
  },
  {
    title: 'Company',
    icon: 'domain',
    links: [
      { label: 'Process', to: '/process' },
      { label: 'Our Work', to: '/work' },
      { label: 'About Us', to: '/about' },
      { label: 'Tech Stack', to: '/stack' },
      { label: 'FAQ', to: '/faq' },
      { label: 'Contact', to: '/contact' },
    ],
  },
]

export const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <footer className="w-full border-t border-outline/15 bg-surface-container-lowest text-on-surface-variant">
      <div className="mx-auto max-w-container-max px-gutter-mobile pt-6 pb-4 lg:px-gutter-desktop">
        <div className="grid grid-cols-1 gap-8 pt-4 md:grid-cols-2 lg:grid-cols-4 lg:pt-8">
          <div className="flex flex-col gap-4">
            <Link to="/">
              <Logo />
            </Link>
            <p className="font-body-sm text-body-sm text-on-surface-variant max-w-xs">
              Architecting resilient digital foundations, enterprise cloud ecosystems, AI-accelerated
              platforms and precision spatial engineering for modern enterprises.
            </p>
            <div className="flex flex-wrap gap-2">
              {['Cloud Native', 'Enterprise AI', 'Spatial Engineering', 'DevOps Scale'].map((t) => (
                <span
                  key={t}
                  className="rounded-full bg-surface-container-low px-3 py-1 font-caption text-caption"
                >
                  {t}
                </span>
              ))}
            </div>
            <nav className="flex flex-wrap gap-3">
              {routes.map((r) => (
                <Link
                  key={r.to}
                  to={r.to}
                  className="font-label-sm text-label-sm text-on-surface-variant transition-colors hover:text-primary"
                >
                  {r.name}
                </Link>
              ))}
            </nav>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="flex items-center gap-2 font-title-md text-title-md text-on-surface">
                <Icon name={col.icon} size="text-[18px]" className="text-primary/70" />
                {col.title}
              </h4>
              <ul className="mt-4 flex flex-col gap-2">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="group flex items-center gap-1.5 font-body-sm text-body-sm text-on-surface-variant transition-colors hover:text-on-surface"
                    >
                      <span className="text-primary/40 transition-transform group-hover:translate-x-0.5 group-hover:text-primary">
                        ›
                      </span>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="flex items-center gap-2 font-title-md text-title-md text-on-surface">
              <Icon name="contact_support" size="text-[18px]" className="text-tertiary/70" />
              Get In Touch
            </h4>
            <ul className="mt-4 flex flex-col gap-3 font-body-sm text-body-sm">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="flex items-start gap-2 transition-colors hover:text-on-surface"
                >
                  <Icon name="mail" size="text-[16px]" className="mt-0.5 text-tertiary/70" />
                  <span className="break-all">{site.email}</span>
                </a>
              </li>
              <li>
                <a href={site.phoneHref} className="flex items-start gap-2 transition-colors hover:text-on-surface">
                  <Icon name="call" size="text-[16px]" className="mt-0.5 text-tertiary/70" />
                  <span>{site.phone}</span>
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="location_on" size="text-[16px]" className="mt-0.5 text-tertiary/70" />
                <span>{site.address}</span>
              </li>
            </ul>
            <div className="mt-4 flex gap-2">
              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-surface-container-low text-on-surface-variant transition-colors hover:bg-secondary/20 hover:text-secondary"
              >
                <Icon name="photo_camera" size="text-[16px]" />
              </a>
              <a
                href={site.whatsappMessage}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-surface-container-low text-on-surface-variant transition-colors hover:bg-tertiary/20 hover:text-tertiary"
              >
                <Icon name="chat" size="text-[16px]" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-outline/15 py-4 font-caption text-caption text-outline sm:flex-row">
          <span>
            © {year} {site.legalName}. All rights reserved.
          </span>
          <span className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-tertiary" />
            Crafted with precision in India
          </span>
        </div>
      </div>
    </footer>
  )
}