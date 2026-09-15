import { Link } from 'react-router-dom'
import { PageHero } from '../components/PageHero'
import { CtaBand } from '../components/CtaBand'
import { Reveal } from '../components/Reveal'
import { Icon } from '../components/Icon'
import { processSteps } from '../data/site'

const accentBadge = {
  primary: 'bg-primary-container/20 text-primary border-primary-container/40',
  secondary: 'bg-secondary-container/20 text-secondary border-secondary-container/40',
  tertiary: 'bg-tertiary-container/20 text-tertiary border-tertiary-container/40',
}

export const ProcessPage = () => {
  return (
    <>
      <PageHero page="process" layout="stacked" />

      <section className="relative w-full overflow-hidden bg-surface py-16 lg:py-24">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute left-1/2 top-0 h-64 w-[36rem] -translate-x-1/2 rounded-full bg-primary-container/10 blur-3xl" />
        </div>
        <div className="relative z-10 mx-auto max-w-5xl px-gutter-mobile lg:px-gutter-desktop">
          <Reveal>
            <div className="mb-14 text-center">
              <p className="font-headline-md text-headline-md text-on-surface">
                From first call to live production — <span className="text-gradient">five checkpoints.</span>
              </p>
              <p className="mx-auto mt-2 max-w-2xl font-body-md text-body-md text-on-surface-variant">
                At each step you see a concrete deliverable. You always know what's happening, what's
                next, and what it costs.
              </p>
            </div>
          </Reveal>

          <div className="relative flex flex-col gap-10 lg:gap-0">
            <span className="pointer-events-none absolute left-7 top-2 bottom-2 hidden w-px bg-gradient-to-b from-primary/40 via-secondary/40 to-tertiary/40 sm:block lg:left-1/2 lg:-translate-x-1/2" />

            {processSteps.map((p, i) => {
              const flip = i % 2 === 1
              return (
                <Reveal key={p.number} delay={i * 60}>
                  <div className={`relative flex flex-col gap-4 py-4 sm:pl-16 lg:w-1/2 lg:py-8 ${flip ? 'lg:ml-auto lg:pl-14' : 'lg:pr-14 lg:pl-0'}`}>
                    <span className={`absolute left-0 top-7 hidden h-9 w-9 items-center justify-center rounded-full border bg-surface-container-lowest font-label-sm text-label-sm shadow-lg sm:flex lg:left-auto ${flip ? 'lg:-left-[18px]' : 'lg:-right-[18px]'} ${accentBadge[p.accent]}`}>
                      {p.number}
                    </span>

                    <div className="group rounded-2xl border border-outline/15 bg-surface-container-low p-6 transition-all hover:-translate-y-0.5 hover:border-primary-container/40 lg:p-7">
                      <div className="flex items-center gap-3">
                        <Icon name={p.icon} size="text-[24px]" className={`text-${p.accent}`} />
                        <h3 className="font-headline-sm text-headline-sm text-on-surface">{p.title}</h3>
                      </div>
                      <p className="mt-3 font-body-md text-body-md text-on-surface-variant">
                        {p.description}
                      </p>
                      <span className="mt-5 inline-flex items-center gap-2 rounded-full bg-surface-container-high px-3 py-1 font-label-sm text-label-sm text-on-surface">
                        <Icon name="check_circle" size="text-[14px]" className={`text-${p.accent}`} />
                        Output: {p.output}
                      </span>
                    </div>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      <section className="w-full bg-surface-container-lowest py-12">
        <div className="mx-auto max-w-5xl px-gutter-mobile lg:px-gutter-desktop">
          <Reveal>
            <div className="flex flex-col items-center justify-between gap-6 rounded-2xl border border-outline/15 bg-surface-container-low p-6 text-center lg:flex-row lg:text-left">
              <div>
                <p className="font-headline-md text-headline-md text-on-surface">Fastest to launch is a question of scope.</p>
                <p className="mt-1 font-body-sm text-body-sm text-on-surface-variant">
                  An MVP can reach production in 2–4 weeks. Enterprise platforms run 2–6 months.
                </p>
              </div>
              <Link to="/contact" className="btn-glass shrink-0">
                <span>Get a Timeline</span>
                <Icon name="schedule" size="text-[18px]" className="text-tertiary" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  )
}