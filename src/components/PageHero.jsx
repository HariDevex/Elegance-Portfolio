import { Link } from 'react-router-dom'
import { pageMeta } from '../data/site'
import { Icon } from './Icon'
import { Reveal } from './Reveal'

export const PageHero = ({
  page,
  eyebrow,
  icon,
  title,
  gradientWord,
  description,
  sidebar,
  layout = 'split',
  compact = false,
}) => {
  const meta = pageMeta[page]
  const e = eyebrow ?? meta?.eyebrow
  const ic = icon ?? meta?.icon
  const t = title ?? meta?.title
  const g = gradientWord ?? meta?.gradientWord
  const d = description ?? meta?.description
  const stacked = layout === 'stacked'

  return (
    <section
      className={`relative w-full overflow-hidden border-b border-outline/10 bg-surface-container-lowest ${
        compact ? 'pt-24 pb-8 lg:pt-28 lg:pb-10' : 'pt-28 pb-10 lg:pt-36 lg:pb-14'
      }`}
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 right-1/4 h-80 w-80 rounded-full bg-primary-container/10 blur-3xl" />
        <div className="absolute bottom-0 left-10 h-72 w-72 rounded-full bg-secondary-container/10 blur-3xl" />
        <div className="absolute inset-0 bg-grid-lines opacity-40" />
      </div>

      <div
        className={`relative z-10 mx-auto max-w-container-max px-gutter-mobile lg:px-gutter-desktop ${
          stacked ? 'flex flex-col items-center text-center' : 'grid grid-cols-1 gap-8 lg:grid-cols-12'
        }`}
      >
        <Reveal className={stacked ? '' : 'lg:col-span-12'}>
          <nav
            aria-label="Breadcrumb"
            className={`flex items-center gap-1.5 font-caption text-caption text-outline ${stacked ? 'justify-center' : ''}`}
          >
            <Link to="/" className="flex items-center gap-1 transition-colors hover:text-on-surface">
              <Icon name="home" size="text-[14px]" /> Home
            </Link>
            <span className="text-outline-variant">/</span>
            <span className="text-on-surface-variant">{e}</span>
          </nav>
        </Reveal>

        {stacked ? (
          <div className="flex max-w-3xl flex-col items-center gap-4">
            <Reveal delay={60}>
              <span className="inline-flex w-fit items-center gap-2 rounded-full border border-primary-container/30 bg-gradient-to-r from-primary-container/10 to-secondary-container/10 px-4 py-1 font-label-sm text-label-sm uppercase tracking-widest text-primary">
                <Icon name={ic} size="text-[14px]" />
                {e}
              </span>
            </Reveal>
            <Reveal delay={120}>
              <h1 className="font-headline-2xl text-headline-2xl-mobile text-on-surface tracking-tight lg:text-headline-2xl">
                {t} <span className="text-gradient">{g}</span>
              </h1>
            </Reveal>
            <Reveal delay={180}>
              <p className="max-w-2xl font-body-lg text-body-lg text-on-surface-variant">{d}</p>
            </Reveal>
          </div>
        ) : (
          <>
            <div className={`flex flex-col gap-4 ${sidebar ? 'lg:col-span-8' : 'lg:col-span-12'}`}>
              <Reveal delay={60}>
                <span className="inline-flex w-fit items-center gap-2 rounded-full border border-primary-container/30 bg-gradient-to-r from-primary-container/10 to-secondary-container/10 px-4 py-1 font-label-sm text-label-sm uppercase tracking-widest text-primary">
                  <Icon name={ic} size="text-[14px]" />
                  {e}
                </span>
              </Reveal>
              <Reveal delay={120}>
                <h1 className="font-headline-2xl text-headline-2xl-mobile text-on-surface tracking-tight lg:text-headline-2xl">
                  {t} <span className="text-gradient">{g}</span>
                </h1>
              </Reveal>
              <Reveal delay={180}>
                <p className="max-w-2xl font-body-lg text-body-lg text-on-surface-variant">{d}</p>
              </Reveal>
            </div>
            {sidebar && (
              <Reveal delay={240} className="lg:col-span-4">
                {sidebar}
              </Reveal>
            )}
          </>
        )}
      </div>
    </section>
  )
}