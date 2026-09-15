import { Link } from 'react-router-dom'
import { PageHero } from '../components/PageHero'
import { CtaBand } from '../components/CtaBand'
import { Reveal } from '../components/Reveal'
import { Icon } from '../components/Icon'
import { caseStudies, metrics, testimonials } from '../data/site'

const metricsPanel = (
  <div className="edge-light relative overflow-hidden rounded-2xl border border-outline/20 bg-surface-container-low p-6 shadow-xl">
    <div className="absolute inset-0 bg-elegance-gradient-soft opacity-20 blur-2xl" />
    <div className="relative">
      <span className="flex items-center gap-2 font-label-sm text-label-sm uppercase tracking-widest text-primary">
        <Icon name="trending_up" size="text-[16px]" className="text-secondary" />
        The Numbers
      </span>
      <div className="mt-5 grid grid-cols-2 gap-4">
        {metrics.map((m) => (
          <div key={m.label} className="rounded-xl border border-outline/10 bg-surface-container-lowest/60 p-4">
            <p className={`font-headline-lg text-headline-lg-mobile ${m.color}`}>{m.value}</p>
            <p className="mt-1 font-caption text-caption text-on-surface-variant">{m.label}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
)

const StarRow = ({ color }) => (
  <div className="flex gap-0.5">
    {Array.from({ length: 5 }).map((_, i) => (
      <Icon key={i} name="star" size="text-[14px]" className={color} />
    ))}
  </div>
)

export const WorkPage = () => {
  return (
    <>
      <PageHero page="work" sidebar={metricsPanel} />

      <section className="w-full bg-surface py-16 lg:py-24">
        <div className="mx-auto max-w-container-max px-gutter-mobile lg:px-gutter-desktop">
          <div className="flex flex-col gap-16">
            {caseStudies.map((cs, i) => {
              const flip = i % 2 === 1
              return (
                <article
                  key={cs.badge}
                  className="grid grid-cols-1 items-stretch gap-0 overflow-hidden rounded-2xl border border-outline/15 bg-surface-container-low transition-all hover:border-primary-container/40 lg:grid-cols-2"
                >
                  <Reveal className={flip ? 'lg:order-2' : ''}>
                    <div className="relative h-64 overflow-hidden lg:h-full">
                      <img
                        src={cs.image}
                        alt={cs.imageAlt}
                        loading="lazy"
                        className="h-full w-full object-cover opacity-80"
                      />
                      <span className={`absolute left-4 top-4 rounded-full px-3 py-1 font-label-sm text-label-sm backdrop-blur-md ${cs.badgeColor}`}>
                        {cs.badge}
                      </span>
                    </div>
                  </Reveal>

                  <Reveal delay={100} className={flip ? 'lg:order-1' : ''}>
                    <div className="flex h-full flex-col justify-center gap-5 p-6 lg:p-10">
                      <span className="font-caption text-caption uppercase tracking-widest text-outline">
                        {cs.date}
                      </span>
                      <h2 className="font-headline-lg text-headline-lg-mobile text-on-surface tracking-tight lg:text-headline-lg">
                        {cs.title}
                      </h2>
                      <p className="font-body-md text-body-md text-on-surface-variant">
                        {cs.description}
                      </p>
                      <div className="grid grid-cols-3 gap-4 border-t border-outline/10 pt-5">
                        {cs.stats.map((st) => (
                          <div key={st.label}>
                            <p className={`font-headline-md text-headline-md ${st.color}`}>{st.value}</p>
                            <p className="mt-0.5 font-caption text-caption text-outline">{st.label}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </Reveal>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="relative w-full overflow-hidden bg-surface-container-lowest py-16 lg:py-24">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute left-1/2 top-0 h-64 w-[40rem] -translate-x-1/2 rounded-full bg-secondary-container/10 blur-3xl" />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl px-gutter-mobile lg:px-gutter-desktop">
          <div className="mb-10 text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary-container/30 bg-gradient-to-r from-primary-container/10 to-secondary-container/10 px-4 py-1 font-label-sm text-label-sm uppercase tracking-widest text-primary">
              <Icon name="format_quote" size="text-[14px]" /> Client Feedback
            </span>
            <h2 className="mt-4 font-headline-lg text-headline-lg-mobile text-on-surface tracking-tight lg:text-headline-lg">
              What partners say after <span className="text-gradient">launch day.</span>
            </h2>
          </div>
          <div className="flex flex-col gap-5">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 60}>
                <figure className="rounded-2xl border border-outline/15 bg-surface-container-low p-6">
                  <StarRow color={t.starClass} />
                  <blockquote className="mt-3 font-title-md text-title-md text-on-surface">"{t.quote}"</blockquote>
                  <figcaption className="mt-4 flex items-center gap-3 border-t border-outline/10 pt-4">
                    <span className={`flex h-10 w-10 items-center justify-center rounded-full font-label-sm text-label-sm ${t.avatarClass}`}>
                      {t.initials}
                    </span>
                    <span>
                      <span className="block font-label-md text-label-md text-on-surface">{t.name}</span>
                      <span className="block font-caption text-caption text-outline">{t.role}</span>
                    </span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
          <Reveal delay={220}>
            <div className="mt-8 flex justify-center">
              <Link to="/contact" className="btn-glass">
                <span>Start Something Similar</span>
                <Icon name="arrow_forward" size="text-[16px]" className="text-tertiary" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  )
}