import { Link } from 'react-router-dom'
import { site, heroBadge, trustBadges, metrics, services, processSteps, caseStudies, testimonials, faqs } from '../data/site'
import { Icon } from '../components/Icon'
import { Reveal } from '../components/Reveal'
import { ClientLogosSection } from '../sections/ClientLogosSection'
import { CtaBand } from '../components/CtaBand'

const accentMap = {
  primary: 'bg-primary-container/20 text-primary',
  secondary: 'bg-secondary-container/20 text-secondary',
  tertiary: 'bg-tertiary-container/20 text-tertiary',
}

const simpleFacts = [
  {
    icon: 'apps',
    title: 'One team, every layer',
    text: 'Software, cloud, AI, security, design and geospatial work. You deal with one accountable team — not six vendors.',
  },
  {
    icon: 'rocket_launch',
    title: 'Weeks, not years',
    text: 'A first working version ships in 2–4 weeks. Big project? We break it into chunks you can see and approve.',
  },
  {
    icon: 'price_check',
    title: 'Fixed price, agreed up front',
    text: 'You know the exact cost before we start. No surprise invoices, no "scope creep" games.',
  },
  {
    icon: 'support_agent',
    title: 'Real people, direct line',
    text: 'You talk to the actual engineers doing the work — through WhatsApp, phone, email, or a live call.',
  },
]

export const HomePage = () => {
  return (
    <>
      {/* ============ HERO (simple overview) ============ */}
      <section className="relative w-full overflow-hidden bg-surface-container-lowest pt-28 pb-16 lg:pt-36 lg:pb-20">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-32 left-1/4 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute top-1/3 right-10 h-[30rem] w-[30rem] rounded-full bg-secondary-container/15 blur-3xl" />
          <div className="absolute inset-0 bg-grid-lines opacity-50" />
        </div>

        <div className="relative z-10 mx-auto max-w-container-max px-gutter-mobile lg:px-gutter-desktop">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
            <div className="flex flex-col gap-6 lg:col-span-7">
              <Reveal>
                <div className="inline-flex items-center gap-2 self-start rounded-full border border-outline/25 bg-surface-container-high/70 px-4 py-1.5 shadow-sm backdrop-blur-md">
                  <span className="h-2 w-2 animate-ping rounded-full bg-tertiary" />
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-tertiary-fixed-dim">
                    {site.legalName}
                  </span>
                  <span className="font-caption text-caption text-outline-variant">/</span>
                  <span className="font-caption text-caption text-on-surface-variant">{heroBadge.kicker}</span>
                </div>
              </Reveal>

              <Reveal delay={60}>
                <h1 className="font-headline-2xl text-headline-2xl-mobile text-on-surface tracking-tight lg:text-headline-2xl">
                  We build the software that runs <span className="text-gradient">your business</span> — simply.
                </h1>
              </Reveal>

              <Reveal delay={120}>
                <p className="max-w-2xl font-body-lg text-body-lg text-on-surface-variant">
                  {site.name} is a technology company based in Tamil Nadu, serving clients across India
                  and the world. We design, build and maintain websites, apps, cloud systems, AI tools,
                  and precise mapping (GIS / LiDAR / BIM) — under one roof, for a fixed price, on time.
                </p>
              </Reveal>

              <Reveal delay={180}>
                <div className="flex flex-wrap items-center gap-4">
                  <Link to="/services" className="btn-cta">
                    <span>See What We Do</span>
                    <Icon name="arrow_forward" size="text-[18px]" />
                  </Link>
                  <Link to="/contact" className="btn-glass">
                    <Icon name="chat" size="text-[20px]" className="text-tertiary" />
                    <span>Talk to an Engineer</span>
                  </Link>
                </div>
              </Reveal>

              <Reveal delay={240}>
                <div className="mt-2 flex flex-wrap items-center gap-6 pt-2 text-on-surface-variant">
                  <span className="font-caption text-caption uppercase tracking-widest text-outline">Why us:</span>
                  {trustBadges.map((b) => (
                    <span key={b.label} className="flex items-center gap-1.5 font-label-sm text-label-sm text-on-surface-variant/80">
                      <Icon name={b.icon} size="text-[16px]" className={b.color} />
                      {b.label}
                    </span>
                  ))}
                </div>
              </Reveal>
            </div>

            {/* Metrics panel */}
            <Reveal delay={180} className="lg:col-span-5">
              <div className="edge-light relative overflow-hidden rounded-2xl border border-outline/20 bg-surface-container-low p-6 shadow-xl">
                <div className="absolute inset-0 bg-elegance-gradient-soft opacity-20 blur-2xl" />
                <div className="relative grid grid-cols-2 gap-4">
                  {metrics.map((m) => (
                    <div key={m.label} className="rounded-xl border border-outline/10 bg-surface-container-lowest/60 p-4">
                      <p className={`font-headline-xl text-headline-xl ${m.color}`}>{m.value}</p>
                      <p className="mt-1 font-caption text-caption text-on-surface-variant">{m.label}</p>
                    </div>
                  ))}
                </div>
                <div className="relative mt-6 rounded-xl border border-primary-container/30 bg-gradient-to-br from-primary-container/10 to-secondary-container/10 p-4">
                  <p className="flex items-center gap-2 font-caption text-caption text-on-surface-variant">
                    <Icon name="verified_user" size="text-[16px]" className="text-tertiary" />
                    Registered Company · ISO-aligned delivery practices · Global delivery
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <ClientLogosSection />

      {/* ============ SIMPLE, IN PLAIN WORDS ============ */}
      <section className="w-full bg-surface py-16 lg:py-24">
        <div className="mx-auto flex max-w-container-max flex-col gap-12 px-gutter-mobile lg:px-gutter-desktop">
          <Reveal>
            <div className="mb-2 flex flex-col gap-4 text-center items-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary-container/30 bg-gradient-to-r from-primary-container/10 to-secondary-container/10 px-4 py-1 font-label-sm text-label-sm uppercase tracking-widest text-primary">
                <Icon name="emoji_objects" size="text-[14px]" /> In plain words
              </span>
              <h2 className="max-w-2xl font-headline-2xl text-headline-2xl-mobile text-on-surface tracking-tight lg:text-headline-2xl">
                How working with us <span className="text-gradient">feels</span>
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {simpleFacts.map((f, i) => (
              <Reveal key={f.title} delay={i * 70}>
                <div className="group flex h-full items-start gap-4 rounded-2xl border border-outline/15 bg-surface-container-low p-6 transition-all hover:-translate-y-0.5 hover:border-primary-container/40">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-container/20 text-primary transition-transform group-hover:scale-110">
                    <Icon name={f.icon} size="text-[22px]" />
                  </span>
                  <div>
                    <h3 className="font-title-lg text-title-lg text-on-surface">{f.title}</h3>
                    <p className="mt-1.5 font-body-md text-body-md text-on-surface-variant">{f.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ WHAT WE DO ============ */}
      <section className="relative w-full overflow-hidden bg-surface-container-lowest py-16 lg:py-24">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -left-20 top-20 h-80 w-80 rounded-full bg-secondary-container/10 blur-3xl" />
          <div className="absolute -right-20 bottom-20 h-80 w-80 rounded-full bg-tertiary-container/10 blur-3xl" />
        </div>
        <div className="relative z-10 mx-auto max-w-container-max px-gutter-mobile lg:px-gutter-desktop">
          <div className="mb-10 flex flex-col gap-6 lg:mb-12 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary-container/30 bg-gradient-to-r from-primary-container/10 to-secondary-container/10 px-4 py-1 font-label-sm text-label-sm uppercase tracking-widest text-primary">
                <Icon name="apps" size="text-[14px]" /> Our Services
              </span>
              <h2 className="max-w-xl font-headline-lg text-headline-lg-mobile text-on-surface tracking-tight lg:text-headline-lg">
                Six areas. <span className="text-gradient">One accountable team.</span>
              </h2>
            </div>
            <Link to="/services" className="btn-glass shrink-0 self-start lg:self-auto">
              <span>All Services</span>
              <Icon name="arrow_forward" size="text-[16px]" className="text-tertiary" />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={Math.min(i, 5) * 60}>
                <Link
                  to="/services"
                  className="group flex h-full flex-col gap-4 rounded-2xl border border-outline/15 bg-surface-container-low p-6 transition-all hover:-translate-y-0.5 hover:border-primary-container/40 hover:shadow-[0_16px_40px_-12px_rgba(0,0,0,0.6)]"
                >
                  <span className={`flex h-11 w-11 items-center justify-center rounded-xl ${accentMap[s.accent]} transition-transform group-hover:scale-110`}>
                    <Icon name={s.icon} size="text-[22px]" />
                  </span>
                  <div>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface">{s.title}</h3>
                    <p className="mt-2 font-body-sm text-body-sm text-on-surface-variant">{s.description}</p>
                  </div>
                  <span className="mt-auto inline-flex items-center gap-1.5 font-label-sm text-label-sm text-primary/80 transition-colors group-hover:text-primary">
                    {s.tags}
                    <Icon name="arrow_forward" size="text-[14px]" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ PROCESS TEASER ============ */}
      <section className="w-full bg-surface py-16 lg:py-24">
        <div className="mx-auto max-w-container-max px-gutter-mobile lg:px-gutter-desktop">
          <div className="mb-10 flex flex-col gap-6 lg:mb-12 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary-container/30 bg-gradient-to-r from-primary-container/10 to-secondary-container/10 px-4 py-1 font-label-sm text-label-sm uppercase tracking-widest text-primary">
                <Icon name="timeline" size="text-[14px]" /> How we work
              </span>
              <h2 className="max-w-xl font-headline-lg text-headline-lg-mobile text-on-surface tracking-tight lg:text-headline-lg">
                Five steps, <span className="text-gradient">zero guesswork.</span>
              </h2>
            </div>
            <Link to="/process" className="btn-glass shrink-0 self-start lg:self-auto">
              <span>See the Process</span>
              <Icon name="arrow_forward" size="text-[16px]" className="text-tertiary" />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {processSteps.map((p, i) => (
              <Reveal key={p.number} delay={i * 60}>
                <Link
                  to="/process"
                  className="group relative flex h-full flex-col gap-3 overflow-hidden rounded-2xl border border-outline/15 bg-surface-container-low p-5 transition-all hover:-translate-y-0.5 hover:border-primary-container/40"
                >
                  <span className="absolute right-4 top-3 font-headline-xl text-headline-xl text-outline-variant/40 transition-colors group-hover:text-primary/40">
                    {p.number}
                  </span>
                  <Icon name={p.icon} size="text-[24px]" className={`text-${p.accent}`} />
                  <h3 className="mt-1 font-label-md text-label-md text-on-surface">{p.title}</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">{p.description}</p>
                  <span className="mt-auto inline-flex w-fit items-center gap-1 rounded-full bg-surface-container-high px-2.5 py-1 font-caption text-caption text-on-surface-variant">
                    ▸ {p.output}
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ WORK TEASER ============ */}
      <section className="relative w-full overflow-hidden bg-surface-container-lowest py-16 lg:py-24">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute left-1/2 top-0 h-72 w-[40rem] -translate-x-1/2 rounded-full bg-primary-container/10 blur-3xl" />
        </div>
        <div className="relative z-10 mx-auto max-w-container-max px-gutter-mobile lg:px-gutter-desktop">
          <div className="mb-10 flex flex-col gap-6 lg:mb-12 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary-container/30 bg-gradient-to-r from-primary-container/10 to-secondary-container/10 px-4 py-1 font-label-sm text-label-sm uppercase tracking-widest text-primary">
                <Icon name="bar_chart" size="text-[14px]" /> Recent work
              </span>
              <h2 className="max-w-xl font-headline-lg text-headline-lg-mobile text-on-surface tracking-tight lg:text-headline-lg">
                Results you can <span className="text-gradient">measure.</span>
              </h2>
            </div>
            <Link to="/work" className="btn-glass shrink-0 self-start lg:self-auto">
              <span>All Case Studies</span>
              <Icon name="arrow_forward" size="text-[16px]" className="text-tertiary" />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
            {caseStudies.map((cs, i) => (
              <Reveal key={cs.badge} delay={i * 80}>
                <Link to="/work" className="group block overflow-hidden rounded-2xl border border-outline/15 bg-surface-container-low transition-all hover:-translate-y-0.5 hover:border-primary-container/40">
                  <div className="relative h-44 overflow-hidden">
                    <img
                      src={cs.image}
                      alt={cs.imageAlt}
                      loading="lazy"
                      className="h-full w-full object-cover opacity-70 transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className={`absolute left-4 top-4 rounded-full px-3 py-1 font-label-sm text-label-sm backdrop-blur-md ${cs.badgeColor}`}>
                      {cs.badge}
                    </span>
                  </div>
                  <div className="flex flex-col gap-4 p-6">
                    <h3 className="font-headline-md text-headline-md text-on-surface">{cs.title}</h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">{cs.description}</p>
                    <div className="flex flex-wrap gap-4 border-t border-outline/10 pt-4">
                      {cs.stats.map((st) => (
                        <div key={st.label}>
                          <p className={`font-headline-md text-headline-md ${st.color}`}>{st.value}</p>
                          <p className="font-caption text-caption text-outline">{st.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ TESTIMONIAL SHORT ============ */}
      <section className="w-full bg-surface py-16 lg:py-24">
        <div className="mx-auto max-w-container-max px-gutter-mobile lg:px-gutter-desktop">
          <div className="mb-10 lg:mb-12">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary-container/30 bg-gradient-to-r from-primary-container/10 to-secondary-container/10 px-4 py-1 font-label-sm text-label-sm uppercase tracking-widest text-primary">
              <Icon name="format_quote" size="text-[14px]" /> What clients say
            </span>
            <h2 className="max-w-xl font-headline-lg text-headline-lg-mobile text-on-surface tracking-tight lg:text-headline-lg">
              They <span className="text-gradient">trusted us.</span> Here's why.
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 80}>
                <figure className="flex h-full flex-col gap-4 rounded-2xl border border-outline/15 bg-surface-container-low p-6">
                  <div className="flex gap-0.5 text-secondary">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Icon key={s} name="star" size="text-[16px]" className={t.starClass} />
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

      {/* ============ FAQ SHORT ============ */}
      <section className="w-full bg-surface-container-lowest py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-gutter-mobile lg:px-gutter-desktop">
          <div className="mb-10 text-center">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary-container/30 bg-gradient-to-r from-primary-container/10 to-secondary-container/10 px-4 py-1 font-label-sm text-label-sm uppercase tracking-widest text-primary">
              <Icon name="help" size="text-[14px]" /> Common questions
            </span>
            <h2 className="font-headline-lg text-headline-lg-mobile text-on-surface tracking-tight lg:text-headline-lg">
              Quick answers, <span className="text-gradient">before you ask.</span>
            </h2>
          </div>
          <div className="flex flex-col gap-3">
            {faqs.slice(0, 4).map((f, i) => (
              <Reveal key={f.question} delay={i * 40}>
                <div className="rounded-xl border border-outline/15 bg-surface-container-low p-5">
                  <p className="font-label-md text-label-md text-on-surface">{f.question}</p>
                  <p className="mt-1.5 font-body-sm text-body-sm text-on-surface-variant">{f.answer}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={200}>
            <div className="mt-8 flex justify-center">
              <Link to="/faq" className="btn-glass">
                <span>Read All FAQs</span>
                <Icon name="arrow_forward" size="text-[16px]" className="text-tertiary" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand
        title="A simple first call could save you months."
        description="It's free, it's confidential, and it's with a real engineer — not a sales rep."
      />
    </>
  )
}