import { Link } from 'react-router-dom'
import { PageHero } from '../components/PageHero'
import { CtaBand } from '../components/CtaBand'
import { Reveal } from '../components/Reveal'
import { Icon } from '../components/Icon'
import { testimonials } from '../data/site'

const achievements = [
  { value: '8+', label: 'Years Experience', color: 'text-primary' },
  { value: '250+', label: 'Projects Delivered', color: 'text-secondary' },
  { value: '99.9%', label: 'SLA Uptime', color: 'text-tertiary' },
  { value: '24/7', label: 'Scale Care', color: 'text-primary-fixed' },
]

const values = [
  {
    icon: 'handshake',
    title: 'Radical transparency',
    text: 'Live dashboards, honest estimates, and engineers who give straight answers — even when it costs us billable hours.',
    accent: 'bg-primary-container/20 text-primary',
  },
  {
    icon: 'verified',
    title: 'Craft over shortcuts',
    text: 'We measure success in zero-defect launches and systems that stay healthy years after handover — not in lines shipped.',
    accent: 'bg-secondary-container/20 text-secondary',
  },
  {
    icon: 'public',
    title: 'Spatial + software thinking',
    text: 'Few teams move fluently between enterprise code and centimetre-accurate geospatial engineering. We do both under one roof.',
    accent: 'bg-tertiary-container/20 text-tertiary',
  },
]

const milestones = [
  { year: '2016', text: 'Founded in Tamil Nadu as an IT services studio.' },
  { year: '2018', text: 'Entered GIS & LiDAR engineering; first enterprise contracts.' },
  { year: '2021', text: 'Launched cloud-native & DevOps practice, multi-cloud delivery.' },
  { year: '2024', text: 'Added applied AI & data analytics practice.' },
  { year: 'Now', text: '250+ projects delivered across India and global clients.' },
]

const achievementsPanel = (
  <div className="edge-light relative overflow-hidden rounded-2xl border border-outline/20 bg-surface-container-low p-6 shadow-xl">
    <div className="absolute inset-0 bg-elegance-gradient-soft opacity-20 blur-2xl" />
    <div className="relative">
      <span className="flex items-center gap-2 font-label-sm text-label-sm uppercase tracking-widest text-primary">
        <Icon name="trending_up" size="text-[16px]" className="text-secondary" />
        Track Record
      </span>
      <div className="mt-5 grid grid-cols-2 gap-4">
        {achievements.map((a) => (
          <div key={a.label} className="rounded-xl border border-outline/10 bg-surface-container-lowest/60 p-4 text-center">
            <p className={`font-headline-lg text-headline-lg-mobile ${a.color}`}>{a.value}</p>
            <p className="mt-1 font-caption text-caption text-on-surface-variant">{a.label}</p>
          </div>
        ))}
      </div>
      <div className="mt-5 rounded-xl border border-primary-container/30 bg-gradient-to-br from-primary-container/10 to-secondary-container/10 p-4">
        <p className="flex items-center gap-2 font-caption text-caption text-on-surface-variant">
          <Icon name="verified_user" size="text-[16px]" className="text-tertiary" />
          Registered Company · ISO-aligned delivery practices
        </p>
      </div>
    </div>
  </div>
)

export const AboutPage = () => {
  return (
    <>
      <PageHero page="about" sidebar={achievementsPanel} />

      <section className="relative w-full overflow-hidden bg-surface py-16 lg:py-24">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -left-20 top-10 h-[24rem] w-[24rem] rounded-full bg-primary-container/10 blur-3xl" />
          <div className="absolute -right-20 bottom-10 h-[24rem] w-[24rem] rounded-full bg-secondary-container/10 blur-3xl" />
        </div>
        <div className="relative z-10 mx-auto max-w-container-max px-gutter-mobile lg:px-gutter-desktop">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="flex flex-col gap-8 lg:col-span-7">
              <Reveal>
                <h2 className="font-headline-lg text-headline-lg-mobile text-on-surface tracking-tight lg:text-headline-lg">
                  We started because businesses kept getting <span className="text-gradient">burned by agencies.</span>
                </h2>
              </Reveal>
              <Reveal delay={80}>
                <div className="flex flex-col gap-4 font-body-md text-body-md text-on-surface-variant">
                  <p>
                    Overpromised launches. Vanishing teams. Invoices that ballooned mid-project.
                    We've heard every story — and we designed Elegance Infotech to be the opposite
                    of all of them.
                  </p>
                  <p>
                    We're a compact team of engineers, designers, spatial specialists, and cloud
                    architects based in Tamil Nadu, serving clients across India and the world. We
                    keep the process small enough to stay honest, technical enough to stay credible,
                    and transparent enough that you always know exactly where your project stands.
                  </p>
                  <p>
                    Software or soil survey, web storefront or LiDAR mesh — the promise is the same:
                    fixed price, real communication, and projects that ship.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={140}>
                <div className="mt-2 rounded-2xl border border-outline/15 bg-surface-container-low p-6">
                  <span className="flex items-center gap-2 font-label-sm text-label-sm uppercase tracking-widest text-primary">
                    <Icon name="history" size="text-[16px]" className="text-tertiary" />
                    Our Milestones
                  </span>
                  <ul className="mt-5 flex flex-col">
                    {milestones.map((m, i) => (
                      <li key={m.year} className="relative flex gap-4 pb-5 last:pb-0">
                        {i < milestones.length - 1 && (
                          <span className="absolute left-[7px] top-5 bottom-0 w-px bg-outline-variant/50" />
                        )}
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
                        <span className="font-caption text-caption text-outline">{m.year}</span>
                        <span className="font-body-sm text-body-sm text-on-surface-variant">{m.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>

            <div className="flex flex-col gap-6 lg:col-span-5">
              <Reveal delay={100}>
                <div className="rounded-2xl border border-outline/15 bg-surface-container-low p-6">
                  <span className="flex items-center gap-2 font-label-sm text-label-sm uppercase tracking-widest text-primary">
                    <Icon name="favorite" size="text-[16px]" className="text-secondary" />
                    What We Value
                  </span>
                  <div className="mt-5 flex flex-col gap-4">
                    {values.map((v) => (
                      <div key={v.title} className="flex items-start gap-3">
                        <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${v.accent}`}>
                          <Icon name={v.icon} size="text-[20px]" />
                        </span>
                        <div>
                          <p className="font-label-md text-label-md text-on-surface">{v.title}</p>
                          <p className="mt-0.5 font-body-sm text-body-sm text-on-surface-variant">{v.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
              <Reveal delay={160}>
                <div className="rounded-2xl border border-outline/15 bg-surface-container-low p-6">
                  <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary">Why us in a nutshell</span>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {['Fixed-price estimates', 'Direct engineer access', 'On-time delivery', '24/7 scale care'].map((t) => (
                      <span key={t} className="rounded-full bg-surface-container-high px-3 py-1 font-caption text-caption text-on-surface">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6 grid grid-cols-3 gap-3 border-t border-outline/10 pt-5">
                    {['ISO-aligned', 'NDA-first', 'Global delivery'].map((t) => (
                      <span key={t} className="text-center font-caption text-caption text-outline">{t}</span>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="relative w-full overflow-hidden bg-surface-container-lowest py-16 lg:py-24">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute left-1/2 top-0 h-64 w-[40rem] -translate-x-1/2 rounded-full bg-primary-container/10 blur-3xl" />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl px-gutter-mobile lg:px-gutter-desktop">
          <div className="mb-10 text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary-container/30 bg-gradient-to-r from-primary-container/10 to-secondary-container/10 px-4 py-1 font-label-sm text-label-sm uppercase tracking-widest text-primary">
              <Icon name="format_quote" size="text-[14px]" /> In their words
            </span>
            <h2 className="mt-4 font-headline-lg text-headline-lg-mobile text-on-surface tracking-tight lg:text-headline-lg">
              Trusted to deliver, <span className="text-gradient">again and again.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 60}>
                <figure className="flex h-full flex-col gap-3 rounded-2xl border border-outline/15 bg-surface-container-low p-6">
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Icon key={s} name="star" size="text-[14px]" className={t.starClass} />
                    ))}
                  </div>
                  <blockquote className="font-body-sm text-body-sm text-on-surface-variant">"{t.quote}"</blockquote>
                  <figcaption className="mt-auto flex items-center gap-3 border-t border-outline/10 pt-4">
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
        </div>
      </section>

      <CtaBand
        title="Want to work with a team that ships?"
        description="Half the team is engineers, and they'd love to hear about your project."
      />
    </>
  )
}