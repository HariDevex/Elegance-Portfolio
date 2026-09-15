import { Link } from 'react-router-dom'
import { PageHero } from '../components/PageHero'
import { CtaBand } from '../components/CtaBand'
import { Reveal } from '../components/Reveal'
import { Icon } from '../components/Icon'
import { site, services } from '../data/site'

const accentText = {
  primary: 'text-primary',
  secondary: 'text-secondary',
  tertiary: 'text-tertiary',
}
const accentBg = {
  primary: 'bg-primary-container/20',
  secondary: 'bg-secondary-container/20',
  tertiary: 'bg-tertiary-container/20',
}
const accentLine = {
  primary: 'from-primary/60 to-transparent',
  secondary: 'from-secondary/60 to-transparent',
  tertiary: 'from-tertiary/60 to-transparent',
}

const sidebarCard = (
  <div className="edge-light relative overflow-hidden rounded-2xl border border-outline/20 bg-surface-container-low p-6 shadow-xl">
    <div className="absolute inset-0 bg-elegance-gradient-soft opacity-20 blur-2xl" />
    <div className="relative">
      <span className="flex items-center gap-2 font-label-sm text-label-sm uppercase tracking-widest text-primary">
        <Icon name="support_agent" size="text-[16px]" className="text-tertiary" />
        Talk to Us Directly
      </span>
      <p className="mt-3 font-body-sm text-body-sm text-on-surface-variant">
        Not sure which practice fits your project? Describe your goal and we'll point you to the
        right engineers — no pitch.
      </p>
      <ul className="mt-5 flex flex-col gap-3 font-body-sm text-body-sm">
        <li>
          <a href={`mailto:${site.email}`} className="flex items-center gap-2 text-on-surface transition-colors hover:text-primary">
            <Icon name="mail" size="text-[16px]" className="text-primary/70" />
            <span className="break-all">{site.email}</span>
          </a>
        </li>
        <li>
          <a href={site.phoneHref} className="flex items-center gap-2 text-on-surface transition-colors hover:text-primary">
            <Icon name="call" size="text-[16px]" className="text-secondary/70" />
            <span>{site.phone}</span>
          </a>
        </li>
        <li>
          <a href={site.whatsappMessage} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-on-surface transition-colors hover:text-primary">
            <Icon name="chat" size="text-[16px]" className="text-tertiary/70" />
            <span>WhatsApp us in one tap</span>
          </a>
        </li>
      </ul>
      <Link to="/contact" className="btn-cta mt-6 w-full justify-center">
        <span>Book a Consultation</span>
        <Icon name="arrow_forward" size="text-[16px]" />
      </Link>
    </div>
  </div>
)

export const ServicesPage = () => {
  return (
    <>
      <PageHero page="services" sidebar={sidebarCard} />

      <section className="w-full bg-surface py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-gutter-mobile lg:px-gutter-desktop">
          <div className="mb-12 flex flex-col gap-3">
            <Reveal>
              <p className="font-headline-md text-headline-md text-on-surface">
                Six specialised practices.
              </p>
            </Reveal>
            <Reveal delay={80}>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Scroll through the full catalogue below. Every engagement ships through the same
                Elegance Lifecycle — strategy first, engineering second, care always.
              </p>
            </Reveal>
          </div>

          <div className="flex flex-col gap-5">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={Math.min(i, 5) * 40}>
                <article className="group relative overflow-hidden rounded-2xl border border-outline/15 bg-surface-container-low p-6 transition-all hover:-translate-y-0.5 hover:border-primary-container/40 hover:shadow-[0_16px_40px_-12px_rgba(0,0,0,0.6)] lg:p-8">
                  <div className="pointer-events-none absolute inset-0 overflow-hidden">
                    <span className={`absolute -top-6 right-2 font-headline-2xl text-headline-2xl-mobile opacity-[0.06] transition-opacity group-hover:opacity-[0.12] lg:text-headline-2xl ${accentText[s.accent]}`}>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <div className="relative flex flex-col gap-4 lg:flex-row lg:items-start lg:gap-6">
                    <span className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${accentBg[s.accent]} ${accentText[s.accent]} transition-transform group-hover:scale-110`}>
                      <Icon name={s.icon} size="text-[24px]" />
                    </span>
                    <div className="flex w-full flex-col gap-2">
                      <div className="flex flex-wrap items-center gap-3">
                        <h2 className="font-headline-sm text-headline-sm text-on-surface">{s.title}</h2>
                        <span className={`font-label-sm text-label-sm ${accentText[s.accent]}`}>
                          #{String(i + 1).padStart(2, '0')}
                        </span>
                      </div>
                      <p className="max-w-2xl font-body-md text-body-md text-on-surface-variant">
                        {s.description}
                      </p>
                      <div className="mt-2 flex flex-wrap items-center gap-3">
                        <span className={`h-px w-10 bg-gradient-to-r ${accentLine[s.accent]}`} />
                        <span className="font-label-sm text-label-sm text-on-surface-variant/80">
                          {s.tags}
                        </span>
                      </div>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  )
}