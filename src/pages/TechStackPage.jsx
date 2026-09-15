import { Link } from 'react-router-dom'
import { PageHero } from '../components/PageHero'
import { CtaBand } from '../components/CtaBand'
import { Reveal } from '../components/Reveal'
import { Icon } from '../components/Icon'
import { techStack, techCategories } from '../data/site'

const sidebarCard = (
  <div className="edge-light relative overflow-hidden rounded-2xl border border-outline/20 bg-surface-container-low p-6 shadow-xl">
    <div className="absolute inset-0 bg-elegance-gradient-soft opacity-20 blur-2xl" />
    <div className="relative">
      <span className="flex items-center gap-2 font-label-sm text-label-sm uppercase tracking-widest text-primary">
        <Icon name="lock_open" size="text-[16px]" className="text-tertiary" />
        Zero Lock-In Policy
      </span>
      <p className="mt-3 font-body-sm text-body-sm text-on-surface-variant">
        We pick tools for your problem — not for our convenience. Everything we deploy lands in
        your cloud account, under your control.
      </p>
      <ul className="mt-4 flex flex-col gap-2.5 font-body-sm text-body-sm">
        {['Your cloud, your keys', 'Portable, open standards', 'No proprietary black boxes', 'Docs & runbooks included'].map((t) => (
          <li key={t} className="flex items-center gap-2 text-on-surface">
            <Icon name="check_circle" size="text-[16px]" className="text-tertiary" />
            {t}
          </li>
        ))}
      </ul>
      <Link to="/contact" className="btn-cta mt-6 w-full justify-center">
        <span>Discuss Your Stack</span>
        <Icon name="arrow_forward" size="text-[16px]" />
      </Link>
    </div>
  </div>
)

const categoryPlus = techCategories.filter((c) => c !== 'All Stacks')

export const TechStackPage = () => {
  return (
    <>
      <PageHero page="stack" sidebar={sidebarCard} />

      <section className="w-full bg-surface py-16 lg:py-24">
        <div className="mx-auto max-w-container-max px-gutter-mobile lg:px-gutter-desktop">
          <div className="flex flex-col gap-16 lg:gap-20">
            {categoryPlus.map((cat, ci) => {
              const items = techStack.filter((t) => t.category === cat)
              const count = items.length
              return (
                <div key={cat} className="grid grid-cols-1 gap-6 lg:grid-cols-12">
                  <Reveal className="lg:col-span-3">
                    <div className="flex items-start gap-3 lg:sticky lg:top-24">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-container/20 text-primary">
                        <Icon name={items[0]?.icon ?? 'memory'} size="text-[20px]" />
                      </span>
                      <div>
                        <p className="font-headline-sm text-headline-sm text-on-surface">{cat}</p>
                        <p className="font-caption text-caption text-outline">
                          {count} technologies
                        </p>
                        <span className="mt-2 block h-px w-10 bg-gradient-to-r from-primary/60 to-transparent" />
                      </div>
                    </div>
                  </Reveal>

                  <Reveal delay={80} className="lg:col-span-9">
                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                      {items.map((t) => (
                        <div
                          key={t.name}
                          className="group flex items-center gap-3 rounded-xl border border-outline/15 bg-surface-container-low px-4 py-3 transition-all hover:-translate-y-0.5 hover:border-primary-container/40"
                        >
                          <Icon name={t.icon} size="text-[22px]" className={`${t.color} transition-transform group-hover:scale-110`} />
                          <div className="min-w-0">
                            <p className="truncate font-label-md text-label-md text-on-surface">{t.name}</p>
                            <p className="truncate font-caption text-caption text-outline">{t.sub}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </Reveal>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  )
}